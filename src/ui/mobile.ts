/**
 * Interfaz compacta para móvil y pantallas pequeñas (escenario < 1100 px de ancho).
 * Se dibuja en píxeles CSS reales (no escalada desde 1920) para que sea legible; en vertical ocupa las
 * franjas libres arriba y abajo del escenario 16:9. Lee el mismo estado que el overlay de escritorio.
 */
import type { SimState } from '../sim/state';
import type { UnitId } from '../plant/types';
import { buildDetail, buildKpis } from '../sim/selectors';
import { fmtClock } from '../sim/signals';
import { STAGE_WINDOWS } from '../motion/timeline';
import { STAGE_NAMES } from './i18n';
import { impactAt } from './impact';
import { icon } from './shell';
import { el, setClass, setStyle, setText } from './styles';
import type { Lang } from './i18n';

export interface MobileHandlers { togglePlay(): void; seek(t: number): void; setMode(m: 'narrative' | 'overview'): void }

const fmt = (x: number, d: number, lang: Lang) => x.toLocaleString(lang === 'es' ? 'es-CO' : 'en-US', { minimumFractionDigits: d, maximumFractionDigits: d });

export const MOBILE_CSS = /* css */ `
.mhud{display:none;font-family:Inter,Geist,system-ui,-apple-system,Roboto,Arial,sans-serif;color:#243443;-webkit-font-smoothing:antialiased}
.compact .mhud{display:block}
.compact .ov{display:none}
.mtop,.mbot{position:fixed;left:0;right:0;z-index:20;background:rgba(255,255,255,.97);border-color:#DEE3EB;border-style:solid;border-width:0;padding:8px max(12px,env(safe-area-inset-left)) 8px max(12px,env(safe-area-inset-right))}
.mtop{top:0;border-bottom-width:1px;display:flex;align-items:center;gap:10px;padding-top:max(8px,env(safe-area-inset-top))}
.mbot{bottom:0;border-top-width:1px;padding-bottom:max(10px,env(safe-area-inset-bottom))}
.mtop .logo{width:14px;height:14px;border-radius:50% 0 50% 50%;transform:rotate(-45deg);background:linear-gradient(200deg,#5b84ff,#3267CE 45%,#15c3b0);flex:none}
.mtop .tt{flex:1;min-width:0;line-height:1.15}
.mtop .tt b{display:block;font-size:15px;font-weight:650;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mtop .tt span{display:block;font-size:11.5px;color:#66768A;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mtop .tm{font:600 13px "Geist Mono",Menlo,monospace;color:#66768A;white-space:nowrap}
.mb{display:inline-flex;align-items:center;justify-content:center;min-width:40px;height:40px;border-radius:10px;border:1px solid #DEE3EB;background:#fff;color:#243443;padding:0 10px;font:600 13px inherit;gap:6px;cursor:pointer;-webkit-tap-highlight-color:transparent}
.mb.primary{background:#3267CE;border-color:#3267CE;color:#fff}
.mb.on{background:#EAF0FD;color:#3267CE;border-color:#cddcf8}
.mb:active{transform:translateY(1px)}
.mrow{display:flex;align-items:center;gap:8px}
.mstage{flex:1;min-width:0;display:flex;align-items:center;gap:8px}
.mstage .n{width:24px;height:24px;border-radius:50%;background:#3267CE;color:#fff;font:600 12px "Geist Mono",Menlo,monospace;display:flex;align-items:center;justify-content:center;flex:none}
.mstage .n.idle{background:#e6eaf0;color:#66768A}
.mstage .l{font-size:14.5px;font-weight:650;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mcap{font-size:13px;color:#4a5a6c;line-height:1.35;margin:6px 0 4px;min-height:18px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.mprog{position:relative;height:28px}
.mprog .tr{position:absolute;left:0;right:0;top:12px;height:4px;border-radius:2px;background:#e6eaf0;overflow:hidden}
.mprog .tr i{display:block;height:100%;background:#3267CE}
.mprog input{position:absolute;inset:0;width:100%;opacity:0;margin:0}
.mdots{display:flex;gap:4px;margin-top:2px}
.mdots i{flex:1;height:3px;border-radius:2px;background:#e6eaf0}
.mdots i.done{background:#9db6e8}.mdots i.on{background:#3267CE}
.mhint{font-size:11.5px;color:#8794a6;margin-top:6px;text-align:center}
.msheet{position:fixed;left:0;right:0;bottom:0;z-index:30;max-height:72vh;overflow:auto;background:#fff;border-radius:16px 16px 0 0;box-shadow:0 -8px 30px rgba(36,52,67,.18);padding:6px 16px max(16px,env(safe-area-inset-bottom));transform:translateY(105%);transition:transform 220ms ease}
.msheet.open{transform:none}
.msheet .grab{width:40px;height:4px;border-radius:2px;background:#DEE3EB;margin:4px auto 8px}
.msheet h3{font-size:15px;margin:14px 0 6px;font-weight:650}
.msheet .hd{display:flex;align-items:center;justify-content:space-between}
.msheet .r{display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid #eef1f5;font-size:14px}
.msheet .r .k{color:#66768A}.msheet .r .v{font-weight:600;text-align:right}
.msheet .g{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.msheet .t{border:1px solid #DEE3EB;border-radius:10px;padding:8px 10px}
.msheet .t .k{font-size:12px;color:#66768A}.msheet .t .v{font-size:20px;font-weight:650}.msheet .t .u{font-size:11.5px;color:#66768A;margin-left:3px}
.msheet .fn{font-size:13.5px;color:#4a5a6c;line-height:1.4}
.msheet .foot{font-size:11.5px;color:#8794a6;margin-top:12px}
.msheet .cls{font:700 10px "Geist Mono",Menlo,monospace;border:1px solid #DEE3EB;border-radius:4px;padding:0 4px;margin-left:5px;color:#66768A}
@media (max-height: 500px){.mtop .tt span,.mhint,.mdots{display:none}.mcap{-webkit-line-clamp:1;margin:4px 0 2px}.mb{height:34px;min-width:34px}.mtop,.mbot{padding-top:5px;padding-bottom:5px}}
.compact .stage{position:fixed;inset:0}
@media (prefers-reduced-motion: reduce){.msheet{transition:none}}
`;

export class MobileHud {
  readonly root: HTMLElement;
  private tm: HTMLElement; private play: HTMLButtonElement; private info: HTMLButtonElement;
  private n: HTMLElement; private l: HTMLElement; private cap: HTMLElement; private bar: HTMLElement; private range: HTMLInputElement;
  private dots: HTMLElement[] = []; private hint: HTMLElement;
  private sheet: HTMLElement; private sheetBody: HTMLElement; private open = false; private sheetKey = '';
  private scrubbing = false;

  constructor(parent: HTMLElement, private h: MobileHandlers) {
    if (!document.getElementById('ptl-mcss')) {
      const st = document.createElement('style'); st.id = 'ptl-mcss'; st.textContent = MOBILE_CSS; document.head.appendChild(st);
    }
    this.root = el('div', 'mhud', parent);
    const top = el('div', 'mtop', this.root);
    el('span', 'logo', top);
    const tt = el('div', 'tt', top);
    el('b', '', tt, 'PTL Buenaventura');
    el('span', '', tt, 'Agua Recuperada · simulación');
    this.tm = el('span', 'tm', top);
    this.play = el('button', 'mb primary', top) as HTMLButtonElement;
    this.play.onclick = () => h.togglePlay();
    this.info = el('button', 'mb', top) as HTMLButtonElement;
    this.info.innerHTML = 'Info';
    this.info.onclick = () => { this.open = !this.open; this.sheetKey = ''; };

    const bot = el('div', 'mbot', this.root);
    const r1 = el('div', 'mrow', bot);
    const prev = el('button', 'mb', r1, '‹') as HTMLButtonElement;
    const st = el('div', 'mstage', r1);
    this.n = el('span', 'n', st); this.l = el('span', 'l', st);
    const next = el('button', 'mb', r1, '›') as HTMLButtonElement;
    const ov = el('button', 'mb', r1) as HTMLButtonElement;
    ov.innerHTML = icon('overview', 18); ov.setAttribute('aria-label', 'Vista general');
    ov.onclick = () => h.setMode('overview');
    prev.setAttribute('aria-label', 'Etapa anterior'); next.setAttribute('aria-label', 'Etapa siguiente');
    prev.onclick = () => this.jump(-1); next.onclick = () => this.jump(1);
    this.cap = el('div', 'mcap', bot);
    const pg = el('div', 'mprog', bot);
    this.bar = el('i', '', el('div', 'tr', pg));
    this.range = el('input', '', pg) as HTMLInputElement;
    this.range.type = 'range'; this.range.min = '0'; this.range.max = '50'; this.range.step = '0.05';
    this.range.setAttribute('aria-label', 'Posición en la secuencia');
    this.range.oninput = () => { this.scrubbing = true; h.seek(parseFloat(this.range.value)); };
    this.range.onchange = () => { this.scrubbing = false; };
    const dw = el('div', 'mdots', bot);
    for (let i = 0; i < 9; i++) this.dots.push(el('i', '', dw));
    this.hint = el('div', 'mhint', bot);

    this.sheet = el('div', 'msheet', this.root);
    el('div', 'grab', this.sheet);
    const hd = el('div', 'hd', this.sheet);
    el('b', '', hd, 'Información');
    const x = el('button', 'mb', hd) as HTMLButtonElement;
    x.innerHTML = icon('close', 18); x.setAttribute('aria-label', 'Cerrar');
    x.onclick = () => { this.open = false; };
    this.sheetBody = el('div', '', this.sheet);
  }

  topHeight(): number { return (this.root.querySelector('.mtop') as HTMLElement)?.offsetHeight || 56; }
  bottomHeight(): number { return (this.root.querySelector('.mbot') as HTMLElement)?.offsetHeight || 130; }
  private t = 0;
  private jump(d: number): void {
    const i = STAGE_WINDOWS.findIndex(w => this.t >= w.t0 && this.t < w.t1);
    const cur = i >= 0 ? i : this.t < STAGE_WINDOWS[0].t0 ? -1 : STAGE_WINDOWS.length;
    const k = Math.max(0, Math.min(STAGE_WINDOWS.length - 1, cur + d));
    this.h.seek(STAGE_WINDOWS[k].t0 + 0.01);
  }

  update(state: SimState, playing: boolean, selected: UnitId | null, lang: Lang): void {
    this.t = state.t;
    setText(this.tm, fmtClock(state.t));
    const k = playing ? 'pause' : 'play';
    if (this.play.dataset.k !== k) { this.play.dataset.k = k; this.play.innerHTML = icon(k, 18); this.play.setAttribute('aria-label', playing ? 'Pausa' : 'Reproducir'); }
    setClass(this.info, 'on', this.open);
    const i = state.trackerIndex;
    setText(this.n, i >= 0 ? String(i + 1) : '–');
    setClass(this.n, 'idle', i < 0);
    setText(this.l, i >= 0 ? STAGE_NAMES[STAGE_WINDOWS[i].id][lang] : state.t < STAGE_WINDOWS[0].t0 ? 'Vertedero y laguna' : 'Agua recuperada al humedal');
    setText(this.cap, state.caption ? state.caption[lang] : '');
    setStyle(this.bar, 'width', `${((100 * state.t) / state.duration).toFixed(1)}%`);
    if (!this.scrubbing) this.range.value = state.t.toFixed(2);
    this.dots.forEach((d, j) => { setClass(d, 'done', state.t >= STAGE_WINDOWS[j].t1); setClass(d, 'on', j === i); });
    setText(this.hint, selected ? '' : 'Toca un equipo para ver su ficha · dos dedos para acercar');
    setStyle(this.hint, 'display', selected ? 'none' : 'block');

    setClass(this.sheet, 'open', this.open);
    if (!this.open) return;
    // Hoja de información: se reconstruye ~4 veces por segundo como máximo.
    const key = `${selected}|${Math.floor(state.t * 4)}|${lang}`;
    if (key === this.sheetKey) return;
    this.sheetKey = key;
    const b = this.sheetBody;
    b.textContent = '';
    const row = (p: HTMLElement, k2: string, v: string, cls?: string) => {
      const r = el('div', 'r', p); el('span', 'k', r, k2);
      const vv = el('span', 'v', r, v); if (cls) el('span', 'cls', vv, cls);
    };
    const d = buildDetail(state, selected, lang);
    if (d) {
      el('h3', '', b, `${d.name} · ${d.tag}`);
      el('div', 'fn', b, d.fn);
      row(b, 'Caudal (estimado)', d.flowText);
      row(b, 'Volumen', d.volumeText, d.volumeCls ?? undefined);
      row(b, 'TRH', d.hrtText, d.hrtCls ?? undefined);
      for (const f of d.facts) row(b, f.label, f.value, f.cls);
    } else el('div', 'fn', b, 'Toca un equipo en la planta para ver su ficha técnica.');
    const m = buildKpis(state, lang);
    el('h3', '', b, 'Operación en planta');
    row(b, 'Caudal', m.flow, 'B');
    row(b, 'Operación', m.ops, 'C');
    row(b, 'UASB en línea', m.uasb);
    row(b, 'Línea de efluente', m.eff);
    row(b, 'Línea de lodos', m.sludge);
    const n = impactAt(state.t);
    el('h3', '', b, 'Impacto · por día de operación');
    const g = el('div', 'g', b);
    const tile = (k2: string, x: number, dd: number, u: string) => {
      const c = el('div', 't', g); el('div', 'k', c, k2);
      const v = el('div', '', c); el('span', 'v', v, x > 1e-6 ? fmt(x, dd, lang) : '—'); el('span', 'u', v, u);
    };
    tile('Agua devuelta', n.water_m3d, 1, 'm³/d');
    tile('DQO removida', n.removalPct, 0, '%');
    tile('Carga evitada', n.avoided_kgd, 0, 'kg DQO/d');
    tile('Energía del biogás', n.energy_kWhd, 0, 'kWh/d');
    el('div', 'foot', b, 'B brief · S supuesto · C cálculo. Simulación didáctica: valores estimados, no mediciones ni telemetría.');
  }
}
