/**
 * SPEC v3.0 · Light Industrial Interface — componentes de presentación.
 * Header, rail de navegación, panel de operación, toolbar 3D, timeline, registro de eventos y documentación.
 * Todos son capas HTML sobre el canvas (no lo reducen) y leen el estado existente: no hay lógica propia de simulación.
 */
import type { SimState } from '../sim/state';
import type { UnitId } from '../plant/types';
import { buildKpis, buildTracker } from '../sim/selectors';
import { fmtClock } from '../sim/signals';
import { STAGE_WINDOWS } from '../motion/timeline';
import { UNIT_BY_ID } from '../plant/layout';
import { UNIT_FACTS, S } from '../plant/assumptions';
import { impactAt } from './impact';
import { tr, type Lang, type I18nKey } from './i18n';
import { el, setClass, setStyle, setText } from './styles';

/* ---------- Iconos (trazos estilo Lucide, dibujados a mano; sin dependencia) ---------- */
const P: Record<string, string> = {
  plant: '<path d="M3 21h18"/><path d="M5 21V9l5 3V9l5 3V5h4v16"/>',
  process: '<circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 12h3M14 12h3"/>',
  units: '<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  analysis: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
  events: '<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',
  docs: '<path d="M4 19.5V5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2z"/><path d="M8 7h8M8 11h6"/>',
  settings: '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  play: '<path d="M7 4v16l13-8z"/>',
  pause: '<path d="M7 4h3v16H7zM14 4h3v16h-3z"/>',
  restart: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
  reset: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
  overview: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  full: '<path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/>',
  hide: '<path d="M3 3l18 18"/><path d="M10.6 5.1A9.8 9.8 0 0 1 12 5c6 0 10 7 10 7a17 17 0 0 1-3.2 3.9M6.6 6.6C3.9 8.4 2 12 2 12s4 7 10 7a9.6 9.6 0 0 0 5.4-1.6"/>',
  show: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  loop: '<path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>',
};
export function icon(name: string, size = 18): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] ?? ''}</svg>`;
}
function iconBtn(parent: HTMLElement, cls: string, name: string, label: string, onClick: () => void): HTMLButtonElement {
  const b = el('button', `ib ${cls}`, parent) as HTMLButtonElement;
  b.type = 'button';
  b.innerHTML = icon(name);
  b.setAttribute('aria-label', label);
  b.dataset.tip = label;
  b.onclick = onClick;
  return b;
}

/* ---------- Estado de la interfaz (solo presentación) ---------- */
export type View = 'plant' | 'operation' | 'analysis' | 'scenarios' | 'docs';
export interface UiState {
  view: View;
  ops: boolean;        // panel de operación
  inspector: boolean;  // inspector de equipos
  stages: boolean;     // fila de etapas del timeline
  analysis: boolean;   // tarjetas de análisis siempre visibles
  events: boolean;     // registro de eventos
  docs: boolean;       // documentación
  settings: boolean;   // popover de configuración
  layers: boolean;     // popover de capas
  immersive: boolean;
}
export const defaultUi = (): UiState => ({ view: 'plant', ops: true, inspector: true, stages: true, analysis: false, events: false, docs: false, settings: false, layers: false, immersive: false });

export interface ShellHandlers {
  togglePlay(): void;
  seek(t: number): void;
  setSpeed(s: number): void;
  toggleLoop(): void;
  setMode(m: 'narrative' | 'overview'): void;
  toggle(name: 'labels' | 'pipes' | 'flow' | 'sludge' | 'actors'): void;
  cycleLight(): void;
  setLang(l: Lang): void;
  clearSelection(): void;
}
export interface Transport { playing: boolean; speed: number; loop: boolean; t: number; duration: number; mode: string }

const L = (lang: Lang, es: string, en: string) => (lang === 'es' ? es : en);

/* ---------- Header ---------- */
const VIEWS: { id: View; es: string; en: string; disabled?: { es: string; en: string } }[] = [
  { id: 'plant', es: 'Planta', en: 'Plant' },
  { id: 'operation', es: 'Operación', en: 'Operation' },
  { id: 'analysis', es: 'Análisis', en: 'Analysis' },
  { id: 'scenarios', es: 'Escenarios', en: 'Scenarios', disabled: { es: 'Sin escenarios definidos en este simulador', en: 'No scenarios defined in this simulator' } },
  { id: 'docs', es: 'Documentación', en: 'Documentation' },
];

export class Header {
  readonly root: HTMLElement;
  private tabs: { id: View; b: HTMLButtonElement }[] = [];
  private origin: HTMLElement; private desc: HTMLElement;
  private pill: HTMLElement; private pillT: HTMLElement; private clock: HTMLElement; private phase: HTMLElement;
  private play: HTMLButtonElement | null = null; private gear: HTMLButtonElement | null = null;
  constructor(parent: HTMLElement, film: boolean, onView: (v: View) => void, h: ShellHandlers, onGear: () => void) {
    this.root = el('header', 'hdr3', parent);
    const brand = el('div', 'brand', this.root);
    el('span', 'logo', brand);
    const bt = el('div', 'bt', brand);
    el('div', 'bn', bt, 'PTL Buenaventura');
    this.desc = el('div', 'bd', bt);
    this.origin = el('span', 'origin3', this.root);
    const nav = el('nav', 'tabs pe', this.root);
    nav.setAttribute('role', 'tablist');
    for (const v of VIEWS) {
      const b = el('button', 'tab', nav) as HTMLButtonElement;
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.disabled = !!v.disabled || film;
      b.onclick = () => onView(v.id);
      this.tabs.push({ id: v.id, b });
    }
    const right = el('div', 'hright', this.root);
    this.pill = el('div', 'pill Stable', right); el('i', '', this.pill); this.pillT = el('span', '', this.pill);
    this.pill.dataset.role = 'plant-state';
    const ck = el('div', 'hclock', right);
    this.phase = el('span', 'ph', ck);
    this.clock = el('span', 'mono', ck);
    if (!film) {
      const w = el('div', 'pe hbtns', right);
      this.play = iconBtn(w, 'primary', 'play', 'Reproducir', () => h.togglePlay());
      this.gear = iconBtn(w, '', 'settings', 'Configuración', onGear);
    }
  }
  update(state: SimState, ui: UiState, tp: Transport, lang: Lang): void {
    setText(this.desc, L(lang, 'Agua Recuperada · planta de lixiviados', 'Recovered Water · leachate plant'));
    setText(this.origin, tr('origin', lang));
    for (const tb of this.tabs) {
      const v = VIEWS.find(x => x.id === tb.id)!;
      setText(tb.b, v[lang]);
      tb.b.title = v.disabled ? v.disabled[lang] : '';
      setClass(tb.b, 'on', ui.view === tb.id);
      tb.b.setAttribute('aria-selected', String(ui.view === tb.id));
    }
    this.pill.className = `pill ${state.plantState}`;
    setText(this.pillT, tr(`st_${state.plantState}` as I18nKey, lang));
    setText(this.phase, state.phase === 'idle' ? L(lang, 'Inicio', 'Start') : `${tr('phase', lang)} ${state.phase}`);
    setText(this.clock, `${fmtClock(state.t)} / ${fmtClock(state.duration)}`);
    if (this.play) {
      const k = tp.playing ? 'pause' : 'play';
      if (this.play.dataset.k !== k) { this.play.dataset.k = k; this.play.innerHTML = icon(k); }
      const lb = tp.playing ? tr('pause', lang) : tr('play', lang);
      this.play.setAttribute('aria-label', lb); this.play.dataset.tip = lb;
    }
    if (this.gear) { setClass(this.gear, 'on', ui.settings); this.gear.dataset.tip = L(lang, 'Configuración', 'Settings'); }
  }
}

/* ---------- Rail de navegación ---------- */
type RailKey = 'ops' | 'stages' | 'inspector' | 'analysis' | 'events' | 'docs' | 'settings';
const RAIL: { k: RailKey; icon: string; es: string; en: string }[] = [
  { k: 'ops', icon: 'plant', es: 'Planta · panel de operación', en: 'Plant · operation panel' },
  { k: 'stages', icon: 'process', es: 'Proceso · etapas del timeline', en: 'Process · timeline stages' },
  { k: 'inspector', icon: 'units', es: 'Equipos · inspector', en: 'Units · inspector' },
  { k: 'analysis', icon: 'analysis', es: 'Análisis', en: 'Analysis' },
  { k: 'events', icon: 'events', es: 'Eventos', en: 'Events' },
  { k: 'docs', icon: 'docs', es: 'Documentación', en: 'Documentation' },
  { k: 'settings', icon: 'settings', es: 'Configuración', en: 'Settings' },
];
export class Rail {
  readonly root: HTMLElement;
  private btns: { k: RailKey; b: HTMLButtonElement }[] = [];
  constructor(parent: HTMLElement, film: boolean, onToggle: (k: RailKey) => void) {
    this.root = el('nav', 'rail3 pe', parent);
    this.root.setAttribute('aria-label', 'Navegación');
    for (const r of RAIL) {
      if (r.k === 'settings') el('div', 'sep', this.root);
      const b = iconBtn(this.root, '', r.icon, r.es, () => onToggle(r.k));
      b.disabled = film;
      this.btns.push({ k: r.k, b });
    }
  }
  update(ui: UiState, lang: Lang): void {
    for (const { k, b } of this.btns) {
      const r = RAIL.find(x => x.k === k)!;
      b.dataset.tip = r[lang]; b.setAttribute('aria-label', r[lang]);
      const on = ui[k];
      setClass(b, 'on', on);
      b.setAttribute('aria-pressed', String(on));
    }
  }
}

/* ---------- Panel de operación (un solo panel con secciones) ---------- */
const fmt = (x: number, d: number, lang: Lang) => x.toLocaleString(lang === 'es' ? 'es-CO' : 'en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
export class OpsPanel {
  readonly root: HTMLElement;
  private caps: HTMLElement[] = [];
  private rows: { r: HTMLElement; k: HTMLElement; v: HTMLElement; s: HTMLElement; b: HTMLElement }[] = [];
  private tiles: { k: HTMLElement; v: HTMLElement; u: HTMLElement }[] = [];
  private foot: HTMLElement;
  constructor(parent: HTMLElement, onClose: () => void, film: boolean) {
    this.root = el('aside', 'panel3 ops3', parent);
    const hd = el('div', 'p3hd', this.root);
    this.caps.push(el('div', 'p3t', hd));
    if (!film) iconBtn(hd, 'sm pe', 'close', 'Ocultar panel', onClose);
    const sec = (n: number) => {
      const s = el('section', 'p3sec', this.root);
      if (n > 0) this.caps.push(el('div', 'p3cap', s));
      return s;
    };
    const s1 = sec(0);
    const keys: I18nKey[] = ['kpi_flow', 'kpi_ops', 'kpi_uasb', 'kpi_eff', 'kpi_sludge'];
    const mk = (s: HTMLElement, key: string) => {
      const r = el('div', 'orow', s);
      r.dataset.kpi = key;
      const k = el('span', 'k', r);
      const vw = el('div', 'vw', r);
      const v = el('span', 'v', vw);
      const b = el('span', 'b', vw);
      const sb = el('div', 's', r);
      this.rows.push({ r, k, v, s: sb, b });
    };
    for (const k of keys) mk(s1, k);
    const s2 = sec(1);
    for (const k of ['kpi_health', 'kpi_staff', 'alarms']) mk(s2, k);
    const s3 = sec(2);
    const g = el('div', 'igrid3', s3);
    for (let i = 0; i < 4; i++) {
      const c = el('div', 'it3', g);
      const k = el('div', 'k', c); const vr = el('div', 'vr', c);
      this.tiles.push({ k, v: el('span', 'v', vr), u: el('span', 'u', vr) });
    }
    this.foot = el('div', 'p3foot', this.root);
  }
  update(state: SimState, lang: Lang): void {
    const m = buildKpis(state, lang);
    setText(this.caps[0], L(lang, 'Operación en planta', 'Plant operation'));
    setText(this.caps[1], L(lang, 'Estado general', 'General status'));
    setText(this.caps[2], L(lang, 'Impacto · por día de operación', 'Impact · per operating day'));
    const vals: [string, string, string, 'ok' | 'off' | 'muted' | ''][] = [
      [m.flow, m.flowSub, 'B', state.plantState === 'Active' ? 'ok' : ''],
      [m.ops, m.opsSub, 'C', ''],
      [m.uasb, m.uasbSub, '', m.uasbOn === 4 ? 'ok' : m.uasbOn === 0 ? 'off' : ''],
      [m.eff, m.effSub, '', m.effOn ? 'ok' : 'off'],
      [m.sludge, m.sludgeSub, '', m.sludgeOn ? 'ok' : 'off'],
      [m.health, m.healthSub, '', 'ok'],
      [m.staff, m.staffSub, '', ''],
      [String(state.alerts.filter(a => a.level === 'warn').length), L(lang, 'alarmas simuladas (no telemetría)', 'simulated alarms (not telemetry)'), '', 'muted'],
    ];
    const names: I18nKey[] = ['kpi_flow', 'kpi_ops', 'kpi_uasb', 'kpi_eff', 'kpi_sludge', 'kpi_health', 'kpi_staff'];
    this.rows.forEach((row, i) => {
      const [v, s, b, st] = vals[i];
      setText(row.k, i < names.length ? tr(names[i], lang) : L(lang, 'Alarmas', 'Alarms'));
      setText(row.v, v); setText(row.s, s);
      setText(row.b, b); row.b.className = b ? `b cls ${b}` : 'b';
      row.r.className = `orow ${st}`;
      if (names[i] === 'kpi_staff') { row.b.dataset.role = 'lights'; setText(row.b, m.lights); row.b.className = `b chip3 ${m.lightsOn ? 'on' : ''}`; }
    });
    const n = impactAt(state.t);
    const tiles: [string, number, number, string][] = [
      [L(lang, 'Agua devuelta', 'Water returned'), n.water_m3d, 1, 'm³/d'],
      [L(lang, 'DQO removida', 'COD removed'), n.removalPct, 0, '%'],
      [L(lang, 'Carga evitada', 'Load avoided'), n.avoided_kgd, 0, 'kg DQO/d'],
      [L(lang, 'Energía del biogás', 'Biogas energy'), n.energy_kWhd, 0, 'kWh/d'],
    ];
    this.tiles.forEach((tl, i) => {
      const [k, x, d, u] = tiles[i];
      setText(tl.k, k); setText(tl.v, x > 1e-6 ? fmt(x, d, lang) : '—'); setText(tl.u, u);
    });
    setText(this.foot, L(lang, 'B brief · S supuesto · C cálculo. Valores estimados por el modelo, no mediciones.', 'B brief · S assumed · C calculated. Model estimates, not measurements.'));
  }
}

/* ---------- Toolbar 3D ---------- */
export class Toolbar {
  readonly root: HTMLElement;
  private b: Record<'narr' | 'over' | 'layers' | 'full' | 'hide', HTMLButtonElement>;
  constructor(parent: HTMLElement, h: ShellHandlers, ui: () => UiState, onLayers: () => void, onImmersive: () => void) {
    this.root = el('div', 'tool3 pe', parent);
    this.root.setAttribute('role', 'toolbar');
    this.b = {
      narr: iconBtn(this.root, '', 'reset', 'Restablecer vista (narrativa)', () => h.setMode('narrative')),
      over: iconBtn(this.root, '', 'overview', 'Vista general', () => h.setMode('overview')),
      layers: iconBtn(this.root, '', 'layers', 'Capas', onLayers),
      full: iconBtn(this.root, '', 'full', 'Pantalla completa', () => {
        if (document.fullscreenElement) void document.exitFullscreen?.();
        else void document.documentElement.requestFullscreen?.();
      }),
      hide: iconBtn(this.root, '', 'hide', 'Ocultar interfaz', onImmersive),
    };
    void ui;
  }
  update(ui: UiState, tp: Transport, lang: Lang): void {
    const t: Record<keyof typeof this.b, string> = {
      narr: L(lang, 'Restablecer vista (narrativa)', 'Reset view (narrative)'), over: L(lang, 'Vista general', 'Overview'),
      layers: L(lang, 'Capas', 'Layers'), full: L(lang, 'Pantalla completa', 'Full screen'),
      hide: ui.immersive ? L(lang, 'Mostrar interfaz', 'Show interface') : L(lang, 'Ocultar interfaz (modo inmersivo)', 'Hide interface (immersive)'),
    };
    for (const k of Object.keys(this.b) as (keyof typeof this.b)[]) { this.b[k].dataset.tip = t[k]; this.b[k].setAttribute('aria-label', t[k]); }
    setClass(this.b.narr, 'on', tp.mode === 'narrative');
    setClass(this.b.over, 'on', tp.mode === 'overview');
    setClass(this.b.layers, 'on', ui.layers);
    const k = ui.immersive ? 'show' : 'hide';
    if (this.b.hide.dataset.k !== k) { this.b.hide.dataset.k = k; this.b.hide.innerHTML = icon(k); }
    setClass(this.b.hide, 'on', ui.immersive);
  }
}

/* ---------- Popover de capas y de configuración ---------- */
type TgName = 'pipes' | 'labels' | 'flow' | 'sludge' | 'actors';
export class Popover {
  readonly root: HTMLElement;
  private items: { key: string; b: HTMLButtonElement }[] = [];
  constructor(parent: HTMLElement, cls: string, defs: { key: string; on: () => void }[]) {
    this.root = el('div', `pop3 pe ${cls}`, parent);
    for (const d of defs) {
      const b = el('button', 'pit', this.root) as HTMLButtonElement;
      b.type = 'button';
      b.onclick = d.on;
      el('span', 'sw', b);
      el('span', 'tx', b);
      this.items.push({ key: d.key, b });
    }
  }
  update(open: boolean, rows: Record<string, [string, boolean]>): void {
    setClass(this.root, 'open', open);
    for (const it of this.items) {
      const [t, on] = rows[it.key];
      setText(it.b.lastChild as HTMLElement, t);
      setClass(it.b, 'on', on);
      it.b.setAttribute('aria-pressed', String(on));
    }
  }
}
export const LAYER_KEYS: TgName[] = ['pipes', 'flow', 'sludge', 'labels', 'actors'];

/* ---------- Timeline de tratamiento ---------- */
export class Timeline {
  readonly root: HTMLElement;
  private play: HTMLButtonElement | null = null;
  private name: HTMLElement; private tm: HTMLElement; private idx: HTMLElement;
  private bar: HTMLElement; private range: HTMLInputElement | null = null;
  private speeds: HTMLButtonElement[] = []; private loopB: HTMLButtonElement | null = null;
  private stagesRow: HTMLElement;
  private steps: { r: HTMLElement; nd: HTMLElement; lb: HTMLElement; run: HTMLElement }[] = [];
  private scrubbing = false;
  constructor(parent: HTMLElement, film: boolean, h: ShellHandlers) {
    this.root = el('div', 'panel3 tl3 tracker', parent);
    const r1 = el('div', 'tlr1', this.root);
    if (!film) {
      this.play = iconBtn(r1, 'primary pe', 'play', 'Reproducir', () => h.togglePlay());
      iconBtn(r1, 'pe', 'restart', 'Reiniciar', () => h.seek(0));
    }
    this.name = el('div', 'tln', r1);
    this.tm = el('div', 'tlt mono', r1);
    const pw = el('div', 'tlp', r1);
    this.bar = el('i', '', el('div', 'track', pw));
    if (!film) {
      const rg = el('input', 'pe', pw) as HTMLInputElement;
      rg.type = 'range'; rg.min = '0'; rg.max = '50'; rg.step = '0.01';
      rg.setAttribute('aria-label', 'Posición en la secuencia');
      rg.oninput = () => { this.scrubbing = true; h.seek(parseFloat(rg.value)); };
      rg.onchange = () => { this.scrubbing = false; };
      this.range = rg;
      const seg = el('div', 'seg3 pe', r1);
      for (const s of [0.5, 1, 2]) {
        const b = el('button', '', seg, `×${s}`) as HTMLButtonElement;
        b.type = 'button'; b.dataset.speed = String(s); b.onclick = () => h.setSpeed(s);
        this.speeds.push(b);
      }
      this.loopB = iconBtn(r1, 'pe', 'loop', 'Bucle', () => h.toggleLoop());
    }
    this.idx = el('div', 'tli mono', r1);
    this.stagesRow = el('div', 'tlr2', this.root);
    STAGE_WINDOWS.forEach((w, i) => {
      const r = el('button', 'stp', this.stagesRow) as HTMLButtonElement;
      r.type = 'button';
      r.dataset.step = String(i);
      r.disabled = film;
      if (!film) { r.classList.add('pe'); r.onclick = () => h.seek(w.t0 + 0.01); }
      const nd = el('span', 'nd', r, String(i + 1));
      const lb = el('span', 'lb', r);
      const run = el('i', 'run', r);
      this.steps.push({ r, nd, lb, run });
    });
  }
  update(state: SimState, ui: UiState, tp: Transport, lang: Lang): void {
    setText(this.name, L(lang, 'Recorrido del lixiviado · 9 etapas', 'Leachate route · 9 stages'));
    setText(this.tm, `${fmtClock(state.t)} / ${fmtClock(state.duration)}`);
    setStyle(this.bar, 'width', `${((100 * state.t) / state.duration).toFixed(2)}%`);
    const m = buildTracker(state, lang);
    const cur = state.trackerIndex >= 0 ? state.trackerIndex + 1 : m.filter(s => s.done).length;
    setText(this.idx, `${String(cur).padStart(2, '0')} / 09`);
    if (this.play) {
      const k = tp.playing ? 'pause' : 'play';
      if (this.play.dataset.k !== k) { this.play.dataset.k = k; this.play.innerHTML = icon(k); }
      const lb = tp.playing ? tr('pause', lang) : tr('play', lang);
      this.play.dataset.tip = lb; this.play.setAttribute('aria-label', lb);
    }
    if (this.range && !this.scrubbing) this.range.value = state.t.toFixed(2);
    for (const b of this.speeds) setClass(b, 'on', parseFloat(b.dataset.speed!) === tp.speed);
    if (this.loopB) { setClass(this.loopB, 'on', tp.loop); this.loopB.dataset.tip = L(lang, 'Bucle', 'Loop'); }
    setClass(this.root, 'compact', !ui.stages);
    m.forEach((s, i) => {
      const st = this.steps[i];
      setClass(st.r, 'done', s.done);
      setClass(st.r, 'active', s.active);
      setText(st.lb, s.name);
      // Actividad hidráulica (independiente del progreso narrativo): alguna unidad de la etapa en marcha.
      const id = STAGE_WINDOWS[i].id;
      const running = Object.entries(state.units).some(([u, us]) => us?.active && UNIT_BY_ID[u as UnitId]?.stage === id);
      setClass(st.run, 'on', running);
      st.r.title = `${s.name}${running ? L(lang, ' · equipos en funcionamiento', ' · units running') : ''}`;
    });
  }
}

/* ---------- Registro de eventos (oculto por defecto) ---------- */
export class EventDrawer {
  readonly root: HTMLElement;
  private cap: HTMLElement; private count: HTMLElement; private list: HTMLElement; private foot: HTMLElement;
  private n = -1; private lang: Lang | null = null;
  constructor(parent: HTMLElement, onClose: () => void) {
    this.root = el('aside', 'panel3 ev3 events', parent);
    const hd = el('div', 'p3hd', this.root);
    this.cap = el('div', 'p3t', hd);
    this.count = el('span', 'cnt mono', hd);
    iconBtn(hd, 'sm pe', 'close', 'Cerrar', onClose);
    const head = el('div', 'evh', this.root);
    for (const k of ['t', 'Evento', 'Sev.', 'Origen']) el('span', '', head, k);
    this.list = el('div', 'evl pe', this.root);
    this.foot = el('div', 'p3foot', this.root);
  }
  update(state: SimState, lang: Lang): void {
    setText(this.cap, L(lang, 'Registro de eventos', 'Event log'));
    setText(this.count, String(state.alerts.length));
    setText(this.foot, L(lang, 'Eventos de la simulación didáctica: no son telemetría real.', 'Didactic simulation events: not real telemetry.'));
    if (state.alerts.length === this.n && lang === this.lang) return;
    this.n = state.alerts.length; this.lang = lang;
    this.list.textContent = '';
    for (const a of [...state.alerts].reverse()) {
      const r = el('div', `evr ${a.level}`, this.list);
      el('span', 'mono', r, fmtClock(a.t));
      el('span', 'tx', r, a.text[lang]);
      el('span', `sev ${a.level}`, r, a.level === 'warn' ? L(lang, 'Aviso', 'Warn') : a.level === 'notice' ? L(lang, 'Nota', 'Notice') : 'Info');
      el('span', 'src', r, L(lang, 'Simulado', 'Simulated'));
    }
  }
}

/* ---------- Documentación: clases de dato y supuestos por equipo ---------- */
export class DocsPanel {
  readonly root: HTMLElement;
  private body: HTMLElement; private cap: HTMLElement; private lang: Lang | null = null;
  constructor(parent: HTMLElement, onClose: () => void) {
    this.root = el('aside', 'panel3 docs3 pe', parent);
    const hd = el('div', 'p3hd', this.root);
    this.cap = el('div', 'p3t', hd);
    iconBtn(hd, 'sm', 'close', 'Cerrar', onClose);
    this.body = el('div', 'dbody', this.root);
  }
  update(lang: Lang): void {
    if (lang === this.lang) return;
    this.lang = lang;
    setText(this.cap, L(lang, 'Documentación · procedencia de datos', 'Documentation · data provenance'));
    const b = this.body;
    b.textContent = '';
    el('p', 'lead', b, L(lang,
      'Simulación didáctica de una planta de lixiviados de 1 L/s (8 h/día). Ningún valor proviene de documentos oficiales ni de telemetría; cada cifra indica su clase.',
      'Didactic simulation of a 1 L/s leachate plant (8 h/day). No value comes from official documents or telemetry; every figure states its class.'));
    const cl = el('div', 'clsrow', b);
    for (const [c, es, en] of [['B', 'Brief: dato dado por el planteamiento', 'Brief: given by the brief'], ['S', 'Supuesto editable (assumptions.ts)', 'Editable assumption (assumptions.ts)'], ['C', 'Cálculo a partir de B y S', 'Calculated from B and S']] as const) {
      const it = el('div', 'ci', cl);
      el('span', `cls ${c}`, it, c);
      el('span', '', it, L(lang, es, en));
    }
    const tbl = el('div', 'dtbl', b);
    for (const [id, facts] of Object.entries(UNIT_FACTS) as [UnitId, NonNullable<(typeof UNIT_FACTS)[UnitId]>][]) {
      if (!facts.length || (id.startsWith('uasb') && id !== 'uasb1')) continue;
      const u = UNIT_BY_ID[id];
      el('div', 'dh', tbl, `${u.tag} · ${u.name[lang]}${id === 'uasb1' ? ' (×4)' : ''}`);
      for (const f of facts) {
        const r = el('div', 'dr', tbl);
        el('span', 'dl', r, f.label[lang]);
        el('span', 'dv mono', r, `${fmt(f.value, f.digits, lang)} ${f.unit}`);
        el('span', `cls ${f.cls}`, r, f.cls);
        el('span', 'db', r, f.basis[lang]);
      }
    }
    void S;
  }
}
