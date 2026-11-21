/**
 * Estilos del overlay (CSS inyectado) y rejilla fija del escenario 1920×1080.
 * El overlay se compone en coordenadas 1920×1080 y se escala con transform → idéntico en película y navegador.
 */
import { SAFE_PX } from '../motion/cameraStory';

export interface Rect { x0: number; y0: number; x1: number; y1: number }

/** Rejilla del overlay (px del escenario). */
export const GRID = {
  pad: 24,
  top: { x0: 24, y0: 20, x1: 1896, y1: 76 } as Rect,
  left: { x0: 24, y0: 96, x1: 344, y1: 936 } as Rect,
  right: { x0: 1576, y0: 96, x1: 1896, y1: 936 } as Rect,
  caption: { x0: 360, y0: 852, x1: 1560, y1: 892 } as Rect,
  controls: { x0: 360, y0: 900, x1: 1560, y1: 940 } as Rect,
  tracker: { x0: 24, y0: 952, x1: 1896, y1: 1056 } as Rect,
  thumb: { x0: 1592, y0: 148, x1: 1880, y1: 310 } as Rect,
  safe: { x0: SAFE_PX.x0, y0: SAFE_PX.y0, x1: SAFE_PX.x1, y1: SAFE_PX.y1 } as Rect,
};

const px = (r: Rect) => `left:${r.x0}px;top:${r.y0}px;width:${r.x1 - r.x0}px;height:${r.y1 - r.y0}px;`;

export const CSS = /* css */ `
:root{
  --bg:#dfe5f6; --panel:rgba(255,255,255,0.95); --panel-solid:#ffffff; --line:#e6eaf4; --line2:#d5dcee;
  --txt:#1b2240; --muted:#66708f; --dim:#9aa3be; --cyan:#2f5bea; --cyan-d:#6f8df2; --amber:#e39a17; --orange:#e2643c; --teal:#1fa88f;
  --green:#1f9d6b; --blue-soft:#eef2ff; --shadow:0 6px 22px rgba(46,66,140,.10), 0 1px 3px rgba(46,66,140,.08);
  --font: Inter, "Segoe UI", system-ui, -apple-system, Roboto, "Helvetica Neue", Arial, sans-serif;
  --mono: "JetBrains Mono", "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace;
}
*{box-sizing:border-box}
html,body{margin:0;height:100%;background:#c9d2ee;overflow:hidden;color:var(--txt);font-family:var(--font)}
#app{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:#c9d2ee}
.stage{position:relative;overflow:hidden;background:var(--bg)}
.stage canvas{position:absolute;left:0;top:0;width:100%!important;height:100%!important;display:block}
.ov{position:absolute;left:0;top:0;width:1920px;height:1080px;transform-origin:0 0;pointer-events:none;
  font-size:14px;line-height:1.35;font-variant-numeric:tabular-nums;-webkit-font-smoothing:antialiased}
.ov .pe{pointer-events:auto}
.film .ov *{transition:none!important;animation:none!important}
.panel{position:absolute;background:var(--panel);border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow)}
.cap{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);font-weight:700}
.mono{font-family:var(--mono)}

/* Barra superior */
.top{${px(GRID.top)}display:flex;align-items:center;padding:0 18px;gap:18px}
.top .title{font-size:19px;font-weight:700;letter-spacing:-.01em;color:var(--txt);white-space:nowrap}
.top .title::before{content:"";display:inline-block;width:17px;height:17px;margin:0 13px 0 3px;vertical-align:-2px;border-radius:50% 0 50% 50%;transform:rotate(-45deg);background:linear-gradient(200deg,#5b84ff 0%,#2f5bea 45%,#15c3b0 100%);box-shadow:inset -3px 3px 0 rgba(255,255,255,.35)}
.top .origin{font-size:11.5px;color:#9a6408;border:1px solid #f4d9a6;border-radius:8px;padding:3px 9px;white-space:nowrap;background:#fff6e5}
.top .sp{flex:1}
.top .blk{display:flex;flex-direction:column;align-items:flex-start;gap:1px;padding-left:16px;border-left:1px solid var(--line)}
.top .blk .v{font-size:15px;font-weight:700;color:var(--txt)}
.top .clock .v{font-family:var(--mono);font-size:17px;letter-spacing:.02em}
.top .clock .n{font-size:10.5px;color:var(--dim);font-style:italic}
.pill{display:inline-flex;align-items:center;gap:7px;font-size:13px;font-weight:700;padding:4px 12px;border-radius:14px;border:1px solid var(--line2)}
.pill i{width:8px;height:8px;border-radius:50%;background:currentColor;display:inline-block}
.pill.Stable{color:var(--muted);background:#f4f6fb}
.pill.Active{color:var(--green);border-color:#bfe8d4;background:#e9f8f0}
.pill.Alert{color:var(--orange);border-color:#f5c9b6;background:#fdf0ea}

/* KPI */
.kpis{position:absolute;left:${GRID.left.x0}px;top:${GRID.left.y0}px;width:${GRID.left.x1 - GRID.left.x0}px;display:flex;flex-direction:column;gap:7px}
.kpi{position:relative;height:72px;padding:8px 14px 0 18px}
.kpi::before{content:"";position:absolute;left:0;top:14px;bottom:14px;width:4px;border-radius:0 3px 3px 0;background:var(--line2)}
.kpi.on::before{background:var(--cyan)}
.kpi.warm::before{background:var(--amber)}
.kpi .row{display:flex;align-items:baseline;justify-content:space-between;margin-top:2px;gap:8px}
.kpi .v{font-size:21px;font-weight:700;color:var(--txt);letter-spacing:-.01em;white-space:nowrap}
.kpi[data-kpi=kpi_staff] .v{font-size:15px}
.kpi .badge{white-space:nowrap;flex:none}
.kpi .v.off{color:var(--dim)}
.kpi .s{font-size:11.5px;color:var(--muted);margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.kpi .badge{font-size:10.5px;color:var(--muted);border:1px solid var(--line2);border-radius:8px;padding:1px 7px;background:#f6f8fc}
.kpi .badge.on{color:var(--cyan);border-color:#c9d6fb;background:var(--blue-soft)}

/* Leyenda */
.legend{left:${GRID.left.x0}px;top:651px;width:320px;padding:10px 14px}
.legend .lhd{display:flex;justify-content:space-between;align-items:center}
.legend .lfoot{font-size:10.5px;color:var(--muted);font-family:var(--mono)}
.legend .lfoot.on{color:var(--amber)}
.legend .items{display:grid;grid-template-columns:repeat(3,1fr);gap:5px 8px;margin-top:7px}
.legend .it{display:flex;align-items:center;gap:6px;font-size:11.5px;color:#3d4566;white-space:nowrap;overflow:hidden}
.legend .wk{width:8px;height:12px;border-radius:4px 4px 2px 2px;background:#f08a24;margin:0 3px;flex:none}
.legend .trk{width:14px;height:8px;border-radius:1px;background:#e9edf6;border-right:4px solid #2f5bea;flex:none}
.legend .sw{width:14px;height:4px;border-radius:2px;flex:none}
.legend .dotp{width:9px;height:9px;border-radius:50%;background:var(--amber);box-shadow:0 0 0 3px rgba(227,154,23,.2);margin:0 3px 0 2px;flex:none}
.toggles{display:flex;gap:5px;margin-left:6px}
.tg{font:inherit;font-size:11px;color:var(--muted);background:#fff;border:1px solid var(--line2);border-radius:8px;padding:3px 7px;cursor:pointer;white-space:nowrap}
html:not(.film) .top .origin{white-space:normal;max-width:262px;font-size:10.5px;line-height:1.25;padding:2px 7px}
.top .blk{flex:none;white-space:nowrap}
.top .toggles{flex:none}
.tg.on{color:var(--cyan);border-color:#c9d6fb;background:var(--blue-soft)}
.film .toggles{display:none}

/* Leyenda compacta en el encabezado del rastreador (fase 5) */
.legend{left:250px;top:957px;width:1420px;height:24px;padding:0;background:none;border:none;box-shadow:none;border-radius:0;z-index:3}
.legend .lhd{display:none}
.legend .items{display:flex;justify-content:center;gap:18px;margin-top:2px}
.legend .it{font-size:11px;color:var(--muted)}

/* Impacto (fase 5) */
.impact{left:${GRID.left.x0}px;top:651px;width:320px;height:120px;padding:10px 14px 0}
.impact .ihd{display:flex;justify-content:space-between;align-items:center}
.impact .igrid{display:grid;grid-template-columns:1fr 1fr;gap:6px 14px;margin-top:6px}
.impact .k{font-size:10.5px;color:var(--muted);white-space:nowrap}
.impact .vr{display:flex;align-items:baseline;gap:4px;white-space:nowrap}
.impact .v{font-size:17px;font-weight:700;color:var(--green);letter-spacing:-.01em}
.impact .u{font-size:10.5px;color:var(--muted)}
.impact .ib{height:3px;border-radius:2px;background:#e8ecf6;margin-top:2px;overflow:hidden}
.impact .ib i{display:block;height:100%;border-radius:2px;background:linear-gradient(90deg,#15c3b0,#1f9d6b)}

/* Antes · Después (fase 5) */
.compare{left:${GRID.right.x0}px;width:320px;height:148px;padding:10px 14px;background:#fff;z-index:2}
.compare .chd{display:flex;justify-content:space-between;align-items:center}
.compare .delta{font-size:12px;font-weight:700;color:var(--green);background:#e9f8f0;border:1px solid #bfe8d4;border-radius:10px;padding:1px 9px}
.compare .crow{display:grid;grid-template-columns:1fr 16px 1fr;align-items:center;margin-top:7px;gap:4px}
.compare .side{display:flex;gap:8px;align-items:center;min-width:0}
.compare .vial{position:relative;width:20px;height:62px;border:2px solid #c9d2e8;border-top:none;border-radius:3px 3px 12px 12px;background:#f6f8fc;overflow:hidden;flex:none}
.compare .vial i{position:absolute;left:0;right:0;bottom:0;height:78%;display:block}
.compare .vial::after{content:"";position:absolute;left:3px;top:6px;width:3px;height:36px;border-radius:2px;background:rgba(255,255,255,.55)}
.compare .tx .n{font-size:12px;font-weight:700;color:var(--txt)}
.compare .tx .m{font-size:10px;color:var(--muted);white-space:nowrap;margin-top:2px}
.compare .arrow{font-size:18px;color:var(--cyan);text-align:center;font-weight:700}

/* Eventos */
.events{left:${GRID.left.x0}px;top:779px;width:320px;height:157px;padding:11px 14px}
.events .hd{display:flex;justify-content:space-between;align-items:center}
.ev{display:grid;grid-template-columns:50px 8px 1fr;align-items:center;gap:6px;height:27px;border-top:1px solid var(--line);font-size:12px;color:#4a5274}
.ev:first-of-type{border-top:none}
.ev .tm{font-family:var(--mono);font-size:11px;color:var(--dim)}
.ev .lv{width:7px;height:7px;border-radius:50%;background:var(--cyan-d)}
.ev.notice .lv{background:var(--amber)}
.ev.warn .lv{background:var(--orange)}
.ev.fresh{color:var(--txt);font-weight:600}
.ev.fresh .tm{color:var(--cyan)}
.ev .tx{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.evlist{margin-top:6px}

/* Detalle */
.detail{position:absolute;left:${GRID.right.x0}px;top:${GRID.right.y0}px;width:320px}
.detail .hdr{height:52px;padding:10px 16px 0;border-radius:14px 14px 0 0;border-bottom:none;box-shadow:none}
.detail .hdr .row{display:flex;justify-content:space-between;align-items:center}
.detail .thumb{position:absolute;left:${GRID.thumb.x0 - GRID.right.x0}px;top:${GRID.thumb.y0 - GRID.right.y0}px;width:${GRID.thumb.x1 - GRID.thumb.x0}px;height:${GRID.thumb.y1 - GRID.thumb.y0}px;border:1px solid var(--line2);border-radius:10px;overflow:hidden}
.detail .thumb .ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--dim);background:#f3f5fb}
.detail .frameL,.detail .frameR{position:absolute;top:52px;width:16px;height:162px;background:var(--panel);border-left:1px solid var(--line);border-right:1px solid var(--line)}
.detail .frameL{left:0;border-right:none}.detail .frameR{right:0;border-left:none}
.detail .body{position:absolute;left:0;top:214px;width:320px;padding:10px 16px 10px;border-radius:0 0 14px 14px;border-top:none}
.detail .nm{font-size:18px;font-weight:700;color:var(--txt);line-height:1.25}
.detail .tagline{display:flex;gap:8px;align-items:center;margin-top:4px}
.detail .tagid{font-family:var(--mono);font-size:12.5px;color:var(--cyan);font-weight:600}
.chips{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px}
.chip{font-size:11px;padding:2px 9px;border-radius:10px;border:1px solid var(--line2);color:var(--muted);background:#f6f8fc}
.chip.active{color:var(--green);border-color:#bfe8d4;background:#e9f8f0}
.chip.selected{color:var(--cyan);border-color:#c9d6fb;background:var(--blue-soft)}
.chip.standby{color:#9a6408;background:#fff6e5;border-color:#f4d9a6}
.kv{display:grid;grid-template-columns:1fr;gap:1px;margin-top:8px;padding-top:7px;border-top:1px solid var(--line)}
.kv .k{font-size:10.5px;letter-spacing:.07em;text-transform:uppercase;color:var(--dim);margin-top:4px;font-weight:600}
.kv .k:first-child{margin-top:0}
.kv .v{font-size:13px;color:#3d4566}
.kv .v.big{font-size:15px;font-weight:700;color:var(--txt)}
.kv2{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px;padding-top:7px;border-top:1px solid var(--line)}
.kv2 .v{font-size:16px;font-weight:700;color:var(--txt)}
.kv2 .v.nd{color:var(--muted);font-weight:500;font-style:italic;font-size:14px}
.note{font-size:10.5px;color:var(--dim);margin-top:6px}
.detail .empty{padding:10px 0 0;color:var(--dim);font-size:12px}
.vrow{display:flex;align-items:baseline;gap:6px}
.cls{display:inline-block;font-family:var(--mono);font-size:9.5px;font-weight:700;line-height:13px;padding:0 4px;border-radius:4px;border:1px solid var(--line2);color:var(--muted);font-style:normal}
.cls.B{color:#14806d;border-color:#b6e3d8;background:#eaf8f4}
.cls.S{color:#9a6408;border-color:#f4d9a6;background:#fff6e5}
.cls.C{color:#2f5bea;border-color:#c9d6fb;background:var(--blue-soft)}
.facts{margin-top:8px;padding-top:7px;border-top:1px solid var(--line)}
.facts .k{font-size:10.5px;letter-spacing:.07em;text-transform:uppercase;color:var(--dim);font-weight:600}
.fgrid{display:grid;grid-template-columns:1fr;gap:3px 10px;margin-top:4px}
.fgrid.two{grid-template-columns:1fr 1fr}
.fr{min-width:0}
.fr .fl{font-size:10.5px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.fr .fv{display:flex;align-items:baseline;gap:5px;font-size:12.5px;color:var(--txt);font-weight:700;white-space:nowrap}
.detail .foot{margin-top:8px;padding-top:6px;border-top:1px solid var(--line);font-size:9.5px;color:var(--dim);line-height:1.3}

/* Reparto UASB */
.split{left:${GRID.right.x0}px;width:320px;padding:12px 14px}
.split .r{display:grid;grid-template-columns:52px 1fr 44px 60px;align-items:center;gap:8px;height:22px;font-size:12px}
.split .r .l{font-family:var(--mono);color:var(--muted);font-size:11.5px}
.split .bar{height:6px;border-radius:3px;background:#e8ecf6;overflow:hidden}
.split .bar i{display:block;height:100%;background:linear-gradient(90deg,#2f5bea,#5b84ff);border-radius:3px}
.split .p{color:var(--txt);text-align:right;font-weight:600}.split .q{color:var(--muted);text-align:right}
.split .rows{margin-top:8px}

/* Subtítulo */
.caption{position:absolute;${px(GRID.caption)}display:flex;align-items:center;justify-content:center}
.caption span{font-size:17px;color:var(--txt);background:rgba(255,255,255,.95);border:1px solid var(--line);border-radius:12px;padding:6px 18px;letter-spacing:.01em;box-shadow:var(--shadow)}
.caption b{font-weight:700;color:#fff;background:var(--cyan);border-radius:6px;padding:2px 7px;margin-right:10px;font-size:11px;letter-spacing:.1em}

/* Controles */
.controls{${px(GRID.controls)}display:flex;align-items:center;gap:10px;padding:0 12px}
.film .controls{display:none}
.btn{font:inherit;font-size:12px;color:#3d4566;background:#fff;border:1px solid var(--line2);border-radius:8px;height:26px;padding:0 10px;cursor:pointer;white-space:nowrap}
.btn.on{color:#fff;border-color:var(--cyan);background:var(--cyan)}
.btn.hide{display:none}
.controls input[type=range]{flex:1;accent-color:#2f5bea;height:4px}
.controls .tm{font-family:var(--mono);font-size:12px;color:var(--muted);width:150px;text-align:center;white-space:nowrap}
.seg{display:inline-flex}.seg .btn{border-radius:0;margin-left:-1px}.seg .btn:first-child{border-radius:8px 0 0 8px}.seg .btn:last-child{border-radius:0 8px 8px 0}

/* Rastreador */
.tracker{${px(GRID.tracker)}padding:12px 22px 0}
.tracker .hd{display:flex;justify-content:space-between}
.steps{position:relative;margin-top:12px;height:56px}
.stp{position:absolute;top:0;width:150px;margin-left:-75px;text-align:center}
.stp .nd{width:24px;height:24px;margin:0 auto;border-radius:50%;border:1.5px solid var(--line2);background:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--dim);font-weight:700}
.stp .lb{margin-top:6px;font-size:12.5px;color:var(--dim);white-space:nowrap}
.stp.done .nd{border-color:var(--cyan);background:var(--cyan);color:#fff}
.stp.done .lb{color:#3d4566}
.stp.active .nd{border-color:var(--cyan);background:#fff;color:var(--cyan);box-shadow:0 0 0 5px rgba(47,91,234,.15)}
.stp.active .lb{color:var(--txt);font-weight:700}
.cn{position:absolute;top:11px;height:3px;background:#e4e8f3;border-radius:2px}
.cn i{display:block;height:100%;background:var(--cyan);border-radius:2px}

/* Etiquetas 3D */
.labels{position:absolute;left:0;top:0;width:1920px;height:1080px}
.labels svg{position:absolute;left:0;top:0;width:1920px;height:1080px;overflow:visible}
.lbl{position:absolute;left:0;top:0;height:32px;box-sizing:border-box;padding:0 7px;border-radius:7px;background:rgba(255,255,255,.62);white-space:nowrap;pointer-events:none;text-align:center;text-shadow:0 0 3px #fff,0 0 3px #fff,0 0 6px rgba(255,255,255,.95),0 1px 0 #fff}
.lbl .t{font-family:var(--mono);font-size:9.5px;letter-spacing:.06em;color:#2f5bea;line-height:13px;text-transform:uppercase}
.lbl .n{font-size:13px;color:#1b2550;line-height:18px;font-weight:650}
.note3{position:absolute;left:0;top:0;height:18px;box-sizing:border-box;padding:0 6px;border-radius:5px;background:rgba(255,255,255,.62);white-space:nowrap;pointer-events:none;font-size:11px;line-height:18px;color:#26305a;font-weight:550;text-shadow:0 0 3px #fff,0 0 5px rgba(255,255,255,.9)}
.mk{position:absolute;left:0;top:0;width:18px;height:18px;border-radius:50%;background:rgba(255,255,255,.92);border:1.5px solid #9fb2ea;color:#5b6aa0;font:600 10px/15px var(--font);text-align:center;box-shadow:0 1px 3px rgba(30,45,110,.18);pointer-events:none}
.mk.on{background:#2f5bea;border-color:#fff;color:#fff}

/* Cursor guionizado */
.cursor{position:absolute;left:0;top:0;width:0;height:0}
.cursor svg{position:absolute;left:-3px;top:-2px;filter:drop-shadow(0 1px 2px rgba(0,0,0,.35))}
.cursor .rip{position:absolute;border-radius:50%;border:1.5px solid rgba(47,91,234,.9)}
`;

/** Rectángulos ocupados por paneles (para ocultar etiquetas debajo). */
export function panelRects(): Rect[] {
  return [GRID.top, GRID.left, GRID.right, GRID.caption, GRID.tracker];
}

// ——— Utilidades DOM mínimas (actualizaciones solo si cambia el valor) ———
export function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', parent?: HTMLElement, text?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  if (parent) parent.appendChild(e);
  return e;
}
export function setText(e: HTMLElement, s: string): void { if (e.textContent !== s) e.textContent = s; }
export function setClass(e: Element, cls: string, on: boolean): void { if (e.classList.contains(cls) !== on) e.classList.toggle(cls, on); }
export function setStyle(e: HTMLElement, prop: string, v: string): void {
  const st = e.style as unknown as Record<string, string>;
  if (st[prop] !== v) st[prop] = v;
}
