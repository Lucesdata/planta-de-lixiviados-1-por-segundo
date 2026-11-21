/**
 * Overlay HTML del escenario 16:9: barra superior, KPI, leyenda/toggles, eventos, detalle,
 * reparto UASB, subtítulo, controles, rastreador, etiquetas y cursor guionizado.
 * Todo lo visible es función de (SimState, contexto) → determinista en modo película.
 */
import * as THREE from 'three';
import type { Plant, UnitId, LineKind } from '../plant/types';
import type { SimState } from '../sim/state';
import { LINE_COLORS } from '../plant/processFlow';
import { CLICKS } from '../motion/timeline';
import { fmtClock, ramp } from '../sim/signals';
import { TITLE, tr, type Lang, type I18nKey } from './i18n';
import { CSS, el, setClass, setStyle, setText, type Rect } from './styles';
import { KpiPanel } from './kpis';
import { AlertLog } from './alerts';
import { ProcessTracker } from './processTracker';
import { DetailPanel, SplitCard } from './detailPanel';
import { LabelLayer } from './labels';
import { ImpactPanel, CompareCard } from './impact';
import { Controls, type CamMode, type ControlsHandlers, type ControlsState } from './controls';

export interface Toggles { pipes: boolean; labels: boolean; flow: boolean; sludge: boolean; actors: boolean }

export interface OverlayHandlers extends ControlsHandlers {
  setLang(l: Lang): void;
  cycleLight(): void;
}

export interface OverlayCtx {
  mode: CamMode;
  lang: Lang;
  selected: UnitId | null;
  toggles: Toggles;
  controls: ControlsState;
  /** Zonas de pantalla (px 1920×1080) que las etiquetas no deben cubrir. */
  obstacles?: Rect[];
  /** Camiones visibles (posición de mundo del techo) para etiquetas pequeñas. */
  trucks?: { kind: 'chemical' | 'sludge'; pos: THREE.Vector3 }[];
}

const hex = (n: number) => `#${n.toString(16).padStart(6, '0')}`;

export class Overlay {
  readonly root: HTMLElement;
  readonly labels: LabelLayer;
  readonly detail: DetailPanel;
  private kpis: KpiPanel;
  private alerts: AlertLog;
  private tracker: ProcessTracker;
  private split: SplitCard;
  private impact: ImpactPanel;
  private compare: CompareCard;
  private controls: Controls | null;
  private top: { origin: HTMLElement; modeK: HTMLElement; modeV: HTMLElement; clockK: HTMLElement; clockV: HTMLElement; clockN: HTMLElement; stK: HTMLElement; pill: HTMLElement; pillT: HTMLElement; phK: HTMLElement; phV: HTMLElement };
  private legend: { cap: HTMLElement; foot: HTMLElement; items: { key: I18nKey; t: HTMLElement }[]; tgs: { name: keyof Toggles | 'lang' | 'light'; b: HTMLButtonElement }[] };
  private caption: { wrap: HTMLElement; b: HTMLElement; s: HTMLElement };
  private cursor: { root: HTMLElement; arrow: SVGSVGElement; rip: HTMLElement };
  private v = new THREE.Vector3();

  constructor(stage: HTMLElement, film: boolean, h: OverlayHandlers) {
    if (!document.getElementById('ptl-css')) {
      const st = document.createElement('style');
      st.id = 'ptl-css';
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    this.root = el('div', 'ov', stage);

    // Etiquetas y cursor bajo los paneles (los paneles se dibujan encima).
    this.labels = new LabelLayer(this.root);

    // Barra superior
    const top = el('div', 'panel top', this.root);
    el('div', 'title', top, TITLE);
    const origin = el('div', 'origin', top);
    el('div', 'sp', top);
    const blk = (cls = '') => el('div', `blk ${cls}`, top);
    const ph = blk(); const phK = el('div', 'cap', ph); const phV = el('div', 'v', ph);
    const md = blk(); const modeK = el('div', 'cap', md); const modeV = el('div', 'v', md);
    const ck = blk('clock'); const clockK = el('div', 'cap', ck); const clockV = el('div', 'v', ck); const clockN = el('div', 'n', ck);
    const sb = blk(); const stK = el('div', 'cap', sb);
    const pill = el('div', 'pill Stable', sb); el('i', '', pill); const pillT = el('span', '', pill);
    pill.dataset.role = 'plant-state';
    this.top = { origin, modeK, modeV, clockK, clockV, clockN, stK, pill, pillT, phK, phV };

    this.kpis = new KpiPanel(this.root);

    // Leyenda + toggles
    const lg = el('div', 'panel legend', this.root);
    const lhd = el('div', 'lhd', lg);
    const lcap = el('div', 'cap', lhd);
    const lfoot = el('div', 'lfoot', lhd);
    lfoot.dataset.role = 'lights-foot';
    const items = el('div', 'items', lg);
    const kinds: LineKind[] = ['leachate', 'clarified', 'pumped', 'anaerobic', 'treated', 'sludge', 'biogas', 'chemical', 'return'];
    const litems: { key: I18nKey; t: HTMLElement }[] = [];
    for (const k of kinds) {
      const it = el('div', 'it', items);
      const sw = el('span', 'sw', it);
      sw.style.background = hex(LINE_COLORS[k].fluid);
      litems.push({ key: `lk_${k}` as I18nKey, t: el('span', '', it) });
    }
    const pit = el('div', 'it', items);
    el('span', 'dotp', pit);
    litems.push({ key: 'lk_parcel', t: el('span', '', pit) });
    const wit = el('div', 'it', items); el('span', 'wk', wit);
    litems.push({ key: 'lk_worker', t: el('span', '', wit) });
    const tit = el('div', 'it', items); el('span', 'trk', tit);
    litems.push({ key: 'lk_truck', t: el('span', '', tit) });
    // Toggles en la barra superior (solo modo interactivo).
    const tgw = el('div', 'toggles pe', top);
    top.insertBefore(tgw, top.querySelector('.sp'));
    const tgs: { name: keyof Toggles | 'lang' | 'light'; b: HTMLButtonElement }[] = [];
    for (const name of ['pipes', 'labels', 'flow', 'sludge', 'actors'] as (keyof Toggles)[]) {
      const b = el('button', 'tg', tgw) as HTMLButtonElement;
      b.onclick = () => h.toggle(name);
      tgs.push({ name, b });
    }
    const lt = el('button', 'tg', tgw) as HTMLButtonElement;
    lt.onclick = () => h.cycleLight();
    tgs.push({ name: 'light', b: lt });
    const lb = el('button', 'tg', tgw) as HTMLButtonElement;
    tgs.push({ name: 'lang', b: lb });
    lb.onclick = () => h.setLang(lb.dataset.next as Lang);
    this.legend = { cap: lcap, foot: lfoot, items: litems, tgs };

    this.alerts = new AlertLog(this.root);
    this.detail = new DetailPanel(this.root);
    this.split = new SplitCard(this.root, 788);
    this.compare = new CompareCard(this.root, 788);
    this.impact = new ImpactPanel(this.root);

    const cw = el('div', 'caption', this.root);
    const cs = el('span', '', cw);
    const cb = el('b', '', cs);
    const ct = el('span', '', cs);
    ct.style.cssText = 'background:none;border:none;padding:0';
    this.caption = { wrap: cw, b: cb, s: ct };

    this.controls = film ? null : new Controls(this.root, h);
    this.tracker = new ProcessTracker(this.root);

    // Cursor (por encima de todo)
    const cr = el('div', 'cursor', this.root);
    const rip = el('div', 'rip', cr);
    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg') as SVGSVGElement;
    arrow.setAttribute('width', '22'); arrow.setAttribute('height', '26'); arrow.setAttribute('viewBox', '0 0 22 26');
    arrow.innerHTML = '<path d="M2 1.5 L2 20 L7 15.5 L10.5 23.5 L13.8 22 L10.4 14.3 L17 14 Z" fill="#1b2240" stroke="#ffffff" stroke-width="1.3" stroke-linejoin="round"/>';
    cr.appendChild(arrow);
    this.cursor = { root: cr, arrow, rip };
  }

  /** Escala del overlay (ancho del escenario / 1920). */
  setScale(k: number): void {
    this.root.style.transform = `scale(${k})`;
  }

  update(state: SimState, ctx: OverlayCtx, plant: Plant, camera: THREE.Camera): void {
    const { lang } = ctx;
    // Barra superior
    setText(this.top.origin, tr('origin', lang));
    setText(this.top.phK, tr('phase', lang));
    setText(this.top.phV, state.phase === 'idle' ? '—' : state.phase);
    setText(this.top.modeK, tr('mode', lang));
    const modeKey: I18nKey = ctx.mode === 'film' ? 'mode_film' : ctx.mode === 'overview' ? 'mode_overview' : ctx.mode === 'free' ? 'mode_free' : 'mode_narrative';
    setText(this.top.modeV, tr(modeKey, lang));
    setText(this.top.clockK, tr('clock', lang));
    setText(this.top.clockV, `${fmtClock(state.t)} / ${fmtClock(state.duration)}`);
    setText(this.top.clockN, tr('compressed', lang));
    setText(this.top.stK, tr('plant_state', lang));
    this.top.pill.className = `pill ${state.plantState}`;
    setText(this.top.pillT, tr(`st_${state.plantState}` as I18nKey, lang));

    this.kpis.update(state, lang);

    setText(this.legend.cap, tr('legend', lang));
    setText(this.legend.foot, '');
    for (const it of this.legend.items) setText(it.t, tr(it.key, lang));
    for (const tg of this.legend.tgs) {
      if (tg.name === 'lang') {
        setText(tg.b, lang === 'es' ? 'ES · en' : 'EN · es');
        tg.b.dataset.next = lang === 'es' ? 'en' : 'es';
        setClass(tg.b, 'on', true);
      } else if (tg.name === 'light') {
        const m = state.lighting?.mode ?? 'day';
        setText(tg.b, `${tr('tg_light', lang)}: ${tr(`light_${m}` as I18nKey, lang)}`);
        setClass(tg.b, 'on', m !== 'day');
      } else {
        setText(tg.b, tr(`tg_${tg.name}` as I18nKey, lang));
        setClass(tg.b, 'on', ctx.toggles[tg.name]);
      }
    }

    this.alerts.update(state, lang);
    this.detail.update(state, ctx.selected, lang);
    this.split.update(state, lang);
    this.compare.update(state, lang);
    if (this.compare.visible) setStyle(this.split.root, 'display', 'none');
    this.impact.update(state, lang);

    // Subtítulo (aparición suave dentro de cada fase, determinista)
    if (state.caption) {
      setStyle(this.caption.wrap, 'display', 'flex');
      setText(this.caption.b, state.phase === 'idle' ? (lang === 'es' ? 'INICIO' : 'START') : `${tr('phase', lang).toUpperCase()} ${state.phase}`);
      setText(this.caption.s, state.caption[lang]);
    } else setStyle(this.caption.wrap, 'display', 'none');

    this.controls?.update(ctx.controls, lang);
    this.tracker.update(state, lang);

    this.labels.visible = ctx.toggles.labels;
    this.labels.update(plant, camera, state, ctx.selected, lang, ctx.obstacles, ctx.trucks);

    this.updateCursor(state, ctx, plant, camera);
  }

  private screenOf(plant: Plant, id: UnitId, camera: THREE.Camera): [number, number] {
    const a = plant.units[id]?.anchors.focus ?? plant.units[id]?.anchors.label;
    if (!a) return [1460, 760];
    this.v.copy(a).project(camera);
    return [(this.v.x * 0.5 + 0.5) * 1920, (-this.v.y * 0.5 + 0.5) * 1080];
  }

  private updateCursor(state: SimState, ctx: OverlayCtx, plant: Plant, camera: THREE.Camera): void {
    const c = state.cursor;
    const show = c.visible && (ctx.mode === 'narrative' || ctx.mode === 'film') && c.unitId !== null;
    setStyle(this.cursor.root, 'display', show ? 'block' : 'none');
    if (!show || !c.unitId) return;
    const to = this.screenOf(plant, c.unitId, camera);
    const from = c.fromUnitId ? this.screenOf(plant, c.fromUnitId, camera) : [1470, 780];
    // Trayectoria levemente curva (arco) entre unidades.
    const k = c.travel;
    const x = from[0] + (to[0] - from[0]) * k;
    const y = from[1] + (to[1] - from[1]) * k - Math.sin(Math.PI * k) * 40;
    this.cursor.root.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
    this.cursor.arrow.style.transform = `scale(${(1 - 0.12 * c.press).toFixed(3)})`;
    // Onda de clic: se expande tras cada clic guionizado.
    let rk = -1;
    for (const ck of CLICKS) if (state.t >= ck.t && state.t < ck.t + 0.7) rk = ramp(state.t, ck.t, ck.t + 0.7);
    if (rk >= 0) {
      const r = 6 + 24 * rk;
      setStyle(this.cursor.rip, 'display', 'block');
      this.cursor.rip.style.cssText = `display:block;left:${(-r).toFixed(1)}px;top:${(-r).toFixed(1)}px;width:${(2 * r).toFixed(1)}px;height:${(2 * r).toFixed(1)}px;opacity:${(1 - rk).toFixed(3)}`;
    } else setStyle(this.cursor.rip, 'display', 'none');
  }
}
