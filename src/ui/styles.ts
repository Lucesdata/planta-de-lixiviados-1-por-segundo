/**
 * Estilos del overlay (CSS inyectado) y rejilla fija del escenario 1920×1080.
 * El overlay se compone en coordenadas 1920×1080 y se escala con transform → idéntico en película y navegador.
 */
import { SAFE_PX } from '../motion/cameraStory';

export interface Rect { x0: number; y0: number; x1: number; y1: number }

/** Rejilla del overlay (px del escenario). */
export const GRID = {
  pad: 16,
  // SPEC v3: header completo arriba; paneles flotantes sobre el canvas (no lo reducen).
  top: { x0: 0, y0: 0, x1: 1920, y1: 56 } as Rect,
  rail: { x0: 16, y0: 72, x1: 68, y1: 470 } as Rect,
  left: { x0: 80, y0: 72, x1: 320, y1: 940 } as Rect,
  right: { x0: 1600, y0: 120, x1: 1904, y1: 776 } as Rect,
  caption: { x0: 360, y0: 852, x1: 1560, y1: 892 } as Rect,
  controls: { x0: 360, y0: 900, x1: 1560, y1: 940 } as Rect,
  tracker: { x0: 16, y0: 958, x1: 1904, y1: 1064 } as Rect,
  thumb: { x0: 1612, y0: 196, x1: 1892, y1: 326 } as Rect,
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

/* ================= SPEC v3.0 · Light Industrial Interface ================= */
.v3{
  --ui-bg:#FAFAF8; --ui-surface:#FFFFFF; --ui-surface-soft:#F5F3EE; --ui-scene-surround:#DDE3F4;
  --ui-text:#243443; --ui-text-muted:#66768A; --ui-border:#DEE3EB;
  --ui-primary:#3267CE; --ui-primary-soft:#EAF0FD; --ui-success:#409B73; --ui-success-soft:#E5F3E8;
  --ui-warning:#D49B3A; --ui-danger:#C95757;
  --ui-shadow:0 1px 2px rgba(36,52,67,.06),0 4px 14px rgba(36,52,67,.06);
  --ui-font:Inter,Geist,"Segoe UI",system-ui,-apple-system,Roboto,Arial,sans-serif;
  --ui-mono:"Geist Mono","JetBrains Mono","SFMono-Regular",Menlo,Consolas,monospace;
  --ui-t:200ms; --txt:var(--ui-text); --muted:var(--ui-text-muted); --cyan:var(--ui-primary); --green:var(--ui-success);
  font-family:var(--ui-font);color:var(--ui-text);font-size:13.5px;
}
.v3 .mono{font-family:var(--ui-mono)}
.v3 .closed{opacity:0;visibility:hidden;pointer-events:none!important;transform:translateY(-4px)}
.v3 .closed *{pointer-events:none!important}
.v3 .panel3,.v3 .insp3,.v3 .split,.v3 .compare,.v3 .rail3,.v3 .tool3,.v3 .pop3{transition:opacity var(--ui-t) ease,transform var(--ui-t) ease,visibility var(--ui-t)}
.v3 .panel3,.v3 .split,.v3 .compare{position:absolute;background:var(--ui-surface);border:1px solid var(--ui-border);border-radius:12px;box-shadow:var(--ui-shadow)}
.v3 .split,.v3 .compare{left:${GRID.right.x0}px;width:${GRID.right.x1 - GRID.right.x0}px}
.v3 .cap{font-size:11.5px;letter-spacing:.02em;text-transform:none;color:var(--ui-text-muted);font-weight:600}

/* Botón de icono */
.v3 .ib{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:8px;border:1px solid transparent;background:transparent;color:var(--ui-text-muted);cursor:pointer;position:relative;padding:0;transition:background 140ms,color 140ms,border-color 140ms}
.v3 .ib:hover{background:var(--ui-surface-soft);color:var(--ui-text)}
.v3 .ib:focus-visible,.v3 .tab:focus-visible,.v3 .stp:focus-visible,.v3 .itab:focus-visible,.v3 .pit:focus-visible,.v3 .seg3 button:focus-visible{outline:2px solid var(--ui-primary);outline-offset:1px}
.v3 .ib.on{background:var(--ui-primary-soft);color:var(--ui-primary);border-color:#cddcf8}
.v3 .ib:active{transform:translateY(1px)}
.v3 .ib.primary{background:var(--ui-primary);color:#fff}
.v3 .ib.primary:hover{background:#2a59b4;color:#fff}
.v3 .ib.sm{width:26px;height:26px}
.v3 .ib:disabled{opacity:.45;cursor:default}
.v3 [data-tip]:hover::after,.v3 [data-tip]:focus-visible::after{content:attr(data-tip);position:absolute;left:50%;top:calc(100% + 6px);transform:translateX(-50%);white-space:nowrap;font:500 12px/1 var(--ui-font);color:#fff;background:#243443;padding:6px 8px;border-radius:6px;z-index:50;pointer-events:none}
.v3 .rail3 [data-tip]:hover::after,.v3 .rail3 [data-tip]:focus-visible::after{left:calc(100% + 8px);top:50%;transform:translateY(-50%)}
.v3 .tool3 [data-tip]:hover::after,.v3 .tool3 [data-tip]:focus-visible::after,.v3 .hbtns [data-tip]:hover::after{left:auto;right:0;transform:none}

/* Header */
.v3 .hdr3{position:absolute;${px(GRID.top)}display:flex;align-items:center;gap:16px;padding:0 16px 0 20px;background:var(--ui-surface);border-bottom:1px solid var(--ui-border);box-shadow:0 1px 0 rgba(36,52,67,.03)}
.v3 .brand{display:flex;align-items:center;gap:10px;flex:none}
.v3 .brand .logo{width:16px;height:16px;border-radius:50% 0 50% 50%;transform:rotate(-45deg);background:linear-gradient(200deg,#5b84ff,#3267CE 45%,#15c3b0)}
.v3 .brand .bn{font-size:17px;font-weight:650;letter-spacing:-.01em;line-height:1.1}
.v3 .brand .bd{font-size:12px;color:var(--ui-text-muted);line-height:1.2}
.v3 .origin3{font-size:11.5px;color:#8a5a12;background:#fbf3e4;border:1px solid #efdcb8;border-radius:6px;padding:3px 8px;white-space:nowrap;flex:none}
.v3 .tabs{display:flex;gap:2px;margin:0 auto;background:var(--ui-surface-soft);border:1px solid var(--ui-border);border-radius:10px;padding:3px}
.v3 .tab{font:500 13.5px var(--ui-font);color:var(--ui-text-muted);background:none;border:none;border-radius:7px;padding:6px 14px;cursor:pointer;transition:background 140ms,color 140ms}
.v3 .tab:hover:not(:disabled){color:var(--ui-text);background:#fff}
.v3 .tab.on{background:#fff;color:var(--ui-primary);box-shadow:0 1px 2px rgba(36,52,67,.08);font-weight:600}
.v3 .tab:disabled{opacity:.5;cursor:default}
.film .v3 .tab:disabled{opacity:1}
.film .v3 .tab:disabled:not(.on){opacity:.75}
.v3 .hright{display:flex;align-items:center;gap:14px;flex:none}
.v3 .hclock{display:flex;flex-direction:column;align-items:flex-end;line-height:1.2}
.v3 .hclock .ph{font-size:11.5px;color:var(--ui-text-muted)}
.v3 .hclock .mono{font-size:14px;font-weight:600}
.v3 .hbtns{display:flex;gap:6px}
.v3 .pill{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;font-weight:600;padding:4px 10px;border-radius:999px;border:1px solid var(--ui-border);color:var(--ui-text-muted);background:var(--ui-surface-soft)}
.v3 .pill i{width:7px;height:7px;border-radius:50%;background:currentColor}
.v3 .pill.Active{color:var(--ui-success);border-color:#c6e4d3;background:var(--ui-success-soft)}
.v3 .pill.Alert{color:var(--ui-danger);border-color:#f0cccc;background:#fbeeee}

/* Rail */
.v3 .rail3{position:absolute;left:${GRID.rail.x0}px;top:${GRID.rail.y0}px;width:${GRID.rail.x1 - GRID.rail.x0}px;display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px 0;background:var(--ui-surface);border:1px solid var(--ui-border);border-radius:12px;box-shadow:var(--ui-shadow)}
.v3 .rail3 .ib{width:38px;height:38px}
.v3 .rail3 .sep{width:24px;height:1px;background:var(--ui-border);margin:4px 0}

/* Panel de operación */
.v3 .p3hd{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:12px 12px 8px 16px}
.v3 .p3t{font-size:15px;font-weight:650}
.v3 .p3cap{font-size:12px;font-weight:600;color:var(--ui-text-muted);margin-bottom:6px}
.v3 .p3sec{padding:10px 16px;border-top:1px solid var(--ui-border)}
.v3 .p3sec:first-of-type{border-top:none;padding-top:0}
.v3 .p3foot{padding:8px 16px 12px;border-top:1px solid var(--ui-border);font-size:11px;color:var(--ui-text-muted);line-height:1.35}
.v3 .ops3{left:${GRID.left.x0}px;top:${GRID.left.y0}px;width:${GRID.left.x1 - GRID.left.x0}px}
.v3 .orow{display:grid;grid-template-columns:1fr auto;align-items:baseline;column-gap:8px;padding:5px 0}
.v3 .orow+.orow{border-top:1px solid #eef1f5}
.v3 .orow .k{font-size:12.5px;color:var(--ui-text-muted)}
.v3 .orow .vw{display:flex;align-items:baseline;gap:6px;justify-content:flex-end}
.v3 .orow .v{font-size:15px;font-weight:650;white-space:nowrap}
.v3 .orow .s{grid-column:1/-1;font-size:11px;color:#8794a6;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.v3 .orow.ok .v{color:var(--ui-success)}
.v3 .orow.off .v{color:#a2adbb;font-weight:500}
.v3 .orow.muted .v{color:var(--ui-text-muted)}
.v3 .orow[data-kpi=kpi_staff]{grid-template-columns:1fr}
.v3 .orow[data-kpi=kpi_staff] .vw{justify-content:flex-start;flex-wrap:wrap;row-gap:3px}
.v3 .orow[data-kpi=kpi_staff] .v{font-size:13px;font-weight:600}
.v3 .chip3{font-size:10.5px;color:var(--ui-text-muted);border:1px solid var(--ui-border);border-radius:6px;padding:1px 6px;background:var(--ui-surface-soft);white-space:nowrap}
.v3 .chip3.on{color:#8a5a12;border-color:#efdcb8;background:#fbf3e4}
.v3 .igrid3{display:grid;grid-template-columns:1fr 1fr;gap:10px 12px}
.v3 .it3 .k{font-size:11.5px;color:var(--ui-text-muted);white-space:nowrap}
.v3 .it3 .vr{display:flex;align-items:baseline;gap:4px;white-space:nowrap}
.v3 .it3 .v{font-size:24px;font-weight:650;letter-spacing:-.02em;color:var(--ui-text)}
.v3 .it3 .u{font-size:11px;color:var(--ui-text-muted)}

/* Inspector */
.v3 .insp3{position:absolute;left:${GRID.right.x0}px;top:${GRID.right.y0}px;width:${GRID.right.x1 - GRID.right.x0}px;max-height:${GRID.right.y1 - GRID.right.y0}px;display:flex;flex-direction:column;background:transparent;border:1px solid var(--ui-border);border-radius:12px;box-shadow:var(--ui-shadow);overflow:hidden}
.v3 .insp3 .hdr,.v3 .insp3 .itabs,.v3 .insp3 .body,.v3 .insp3 .foot{background:var(--ui-surface)!important}
.v3 .insp3 .hdr{position:static;display:flex;align-items:flex-start;justify-content:space-between;gap:8px;height:${GRID.thumb.y0 - GRID.right.y0 - 4}px;padding:12px 12px 0 12px;border:none;box-shadow:none;background:none;flex:none}
.v3 .insp3 .nm{font-size:17px;font-weight:650;line-height:1.25;color:var(--ui-text)}
.v3 .insp3 .tagline{display:flex;align-items:center;gap:8px;margin-top:4px}
.v3 .insp3 .tagid{font-size:12.5px;color:var(--ui-primary);font-weight:600;font-family:var(--ui-mono)}
.v3 .insp3 .chips{margin:0}
.v3 .chip{font-size:11px;padding:1px 8px;border-radius:999px;border:1px solid var(--ui-border);color:var(--ui-text-muted);background:var(--ui-surface-soft)}
.v3 .chip.active{color:var(--ui-success);border-color:#c6e4d3;background:var(--ui-success-soft)}
.v3 .chip.standby{color:#8a5a12;border-color:#efdcb8;background:#fbf3e4}
.v3 .insp3 .thumb{position:relative;left:auto;top:auto;flex:none;margin:4px 12px 0;width:${GRID.thumb.x1 - GRID.thumb.x0}px;height:${GRID.thumb.y1 - GRID.thumb.y0}px;border:1px solid var(--ui-border);border-radius:8px;overflow:hidden;box-shadow:0 0 0 13px var(--ui-surface)}
.v3 .insp3 .thumb .ph{background:var(--ui-surface-soft);color:var(--ui-text-muted)}
.v3 .itabs{display:flex;gap:2px;margin:0;padding:10px 12px 0;box-shadow:inset 0 -1px 0 var(--ui-border);flex:none;position:relative;z-index:1}
.v3 .itab{font:500 13px var(--ui-font);color:var(--ui-text-muted);background:none;border:none;border-bottom:2px solid transparent;padding:6px 10px;margin-bottom:-1px;cursor:pointer;transition:color 140ms,border-color 140ms}
.v3 .itab:hover{color:var(--ui-text)}
.v3 .itab.on{color:var(--ui-primary);border-bottom-color:var(--ui-primary);font-weight:600}
.v3 .insp3 .body{position:static;width:auto;flex:1 1 auto;min-height:0;overflow:auto;padding:4px 16px 10px;border:none;background:none;box-shadow:none;pointer-events:auto}
.v3 .insp3 .isec{padding-top:6px}
.v3 .insp3 .kv{border-top:none;margin-top:0;padding-top:2px}
.v3 .insp3 .kv .k,.v3 .insp3 .facts .k,.v3 .opev .k,.v3 .dims .k{font-size:11.5px;letter-spacing:0;text-transform:none;color:var(--ui-text-muted);font-weight:600}
.v3 .insp3 .kv .v{font-size:13px;color:var(--ui-text)}
.v3 .insp3 .kv .v.big{font-size:15px;font-weight:650}
.v3 .insp3 .kv2{border-top:1px solid var(--ui-border)}
.v3 .insp3 .kv2 .cap{font-size:11.5px}
.v3 .insp3 .kv2 .v{font-size:20px;font-weight:650}
.v3 .insp3 .facts{margin-top:8px;padding-top:8px;border-top:1px solid var(--ui-border)}
.v3 .insp3 .fr .fl{font-size:11px;color:var(--ui-text-muted)}
.v3 .insp3 .fr .fv{font-size:13px;font-weight:650}
.v3 .dims{display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 6px;margin-top:8px;padding-top:6px;border-top:1px dashed var(--ui-border);font-size:12px}
.v3 .dims .k{flex-basis:100%}
.v3 .dims .v{color:var(--ui-text);font-weight:600}
.v3 .opg .or{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #eef1f5;font-size:12.5px}
.v3 .opg .or .k{color:var(--ui-text-muted)}
.v3 .opg .or .v{font-weight:600}
.v3 .opev{margin-top:10px}
.v3 .opev .oe{display:grid;grid-template-columns:52px 1fr;gap:6px;font-size:12px;padding:4px 0}
.v3 .opev .oe .mono{color:var(--ui-text-muted);font-size:11px}
.v3 .nodata{font-size:12px;color:#8794a6;font-style:italic;padding:4px 0}
.v3 .insp3 .empty{color:var(--ui-text-muted)}
.v3 .insp3 .foot{flex:none;margin:0;padding:8px 16px 10px;border-top:1px solid var(--ui-border);font-size:10.5px;color:#8794a6}
.v3 .cls.B{color:#2f7d5c;border-color:#c6e4d3;background:var(--ui-success-soft)}
.v3 .cls.S{color:#8a5a12;border-color:#efdcb8;background:#fbf3e4}
.v3 .cls.C{color:var(--ui-primary);border-color:#cddcf8;background:var(--ui-primary-soft)}

/* Tarjetas de análisis */
.v3 .split,.v3 .compare{padding:12px 14px}
.v3 .split .bar i{background:var(--ui-primary)}
.v3 .compare .delta{color:var(--ui-success);background:var(--ui-success-soft);border-color:#c6e4d3}
.v3 .compare .arrow{color:var(--ui-primary)}

/* Toolbar 3D y popovers */
.v3 .tool3{position:absolute;right:16px;top:68px;display:flex;gap:2px;padding:3px;background:var(--ui-surface);border:1px solid var(--ui-border);border-radius:10px;box-shadow:var(--ui-shadow);z-index:4}
.v3 .pop3{position:absolute;right:16px;top:114px;width:268px;padding:6px;background:var(--ui-surface);border:1px solid var(--ui-border);border-radius:10px;box-shadow:0 8px 24px rgba(36,52,67,.12);z-index:6;opacity:0;visibility:hidden;transform:translateY(-4px)}
.v3 .pop3.open{opacity:1;visibility:visible;transform:none}
.v3 .pop3:not(.open),.v3 .pop3:not(.open) *{pointer-events:none!important}
.v3 .pit{display:flex;align-items:center;gap:10px;width:100%;font:500 13px var(--ui-font);color:var(--ui-text);background:none;border:none;border-radius:7px;padding:8px 10px;cursor:pointer;text-align:left}
.v3 .pit:hover{background:var(--ui-surface-soft)}
.v3 .pit .sw{width:26px;height:15px;border-radius:999px;background:#d5dbe4;position:relative;flex:none;transition:background 140ms}
.v3 .pit .sw::after{content:"";position:absolute;left:2px;top:2px;width:11px;height:11px;border-radius:50%;background:#fff;transition:transform 140ms}
.v3 .pit.on .sw{background:var(--ui-primary)}
.v3 .pit.on .sw::after{transform:translateX(11px)}

/* Timeline */
.v3 .tl3{${px(GRID.tracker)}padding:0;display:flex;flex-direction:column;transition:height var(--ui-t) ease,top var(--ui-t) ease}
.v3 .tl3.compact{top:${GRID.tracker.y1 - 50}px;height:50px}
.v3 .tlr1{display:flex;align-items:center;gap:12px;height:48px;padding:0 12px;flex:none}
.v3 .tln{font-size:13.5px;font-weight:600;white-space:nowrap}
.v3 .tlt{font-size:13px;color:var(--ui-text-muted);white-space:nowrap}
.v3 .tlp{position:relative;flex:1;height:20px;display:flex;align-items:center}
.v3 .tlp .track{position:absolute;left:0;right:0;top:8px;height:4px;border-radius:2px;background:#e6eaf0;overflow:hidden}
.v3 .tlp .track i{display:block;height:100%;background:var(--ui-primary);border-radius:2px;transition:width 120ms linear}
.v3 .tlp input{position:absolute;left:0;right:0;width:100%;margin:0;opacity:0;cursor:pointer;height:20px}
.v3 .tli{font-size:12px;color:var(--ui-text-muted);white-space:nowrap}
.v3 .seg3{display:inline-flex;border:1px solid var(--ui-border);border-radius:8px;overflow:hidden}
.v3 .seg3 button{font:500 12px var(--ui-mono);color:var(--ui-text-muted);background:#fff;border:none;padding:5px 9px;cursor:pointer}
.v3 .seg3 button+button{border-left:1px solid var(--ui-border)}
.v3 .seg3 button.on{background:var(--ui-primary-soft);color:var(--ui-primary)}
.v3 .tlr2{display:grid;grid-template-columns:repeat(9,1fr);gap:4px;padding:0 12px 10px;border-top:1px solid var(--ui-border);padding-top:8px;flex:1}
.v3 .tl3.compact .tlr2{display:none}
.v3 .stp{position:relative;top:auto;width:auto;margin:0;display:flex;align-items:center;gap:8px;font:inherit;text-align:left;background:none;border:1px solid transparent;border-radius:8px;padding:4px 8px;cursor:pointer;color:var(--ui-text-muted);transition:background 140ms,border-color 140ms}
.v3 .stp:disabled{cursor:default}
.v3 .stp:hover:not(:disabled){background:var(--ui-surface-soft)}
.v3 .stp .nd{width:22px;height:22px;margin:0;border-radius:50%;border:1.5px solid #cfd6e0;background:#fff;display:flex;align-items:center;justify-content:center;font:600 11px var(--ui-mono);color:#8794a6;flex:none}
.v3 .stp .lb{margin:0;font-size:12.5px;color:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.v3 .stp.done{color:var(--ui-text)}
.v3 .stp.done .nd{border-color:#9db6e8;background:var(--ui-primary-soft);color:var(--ui-primary)}
.v3 .stp.active{background:var(--ui-primary-soft);border-color:#cddcf8;color:var(--ui-primary)}
.v3 .stp.active .nd{border-color:var(--ui-primary);background:var(--ui-primary);color:#fff}
.v3 .stp.active .lb{font-weight:650}
.v3 .stp .run{position:absolute;right:6px;top:6px;width:6px;height:6px;border-radius:50%;background:transparent}
.v3 .stp .run.on{background:var(--ui-success)}

/* Eventos y documentación */
.v3 .ev3{left:332px;top:600px;width:420px;height:340px;display:flex;flex-direction:column}
.v3 .ev3 .cnt{font-size:12px;color:var(--ui-text-muted);margin-left:auto;margin-right:4px}
.v3 .evh,.v3 .evr{display:grid;grid-template-columns:52px 1fr 52px 66px;gap:8px;align-items:center;padding:0 16px}
.v3 .evh{font-size:11px;color:var(--ui-text-muted);font-weight:600;padding-bottom:6px;border-bottom:1px solid var(--ui-border)}
.v3 .evl{flex:1;overflow:auto}
.v3 .evr{font-size:12px;padding-top:6px;padding-bottom:6px;border-bottom:1px solid #eef1f5}
.v3 .evr .mono{font-size:11px;color:var(--ui-text-muted)}
.v3 .evr .tx{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.v3 .sev{font-size:10.5px;border-radius:5px;padding:1px 5px;text-align:center;background:var(--ui-surface-soft);color:var(--ui-text-muted)}
.v3 .sev.notice{background:#fbf3e4;color:#8a5a12}
.v3 .sev.warn{background:#fbeeee;color:var(--ui-danger)}
.v3 .evr .src{font-size:10.5px;color:#8794a6}
.v3 .docs3{left:372px;top:72px;width:780px;max-height:868px;display:flex;flex-direction:column;z-index:5}
.v3 .dbody{overflow:auto;padding:0 20px 16px}
.v3 .dbody .lead{font-size:13.5px;color:var(--ui-text);margin:0 0 10px;line-height:1.5}
.v3 .clsrow{display:flex;gap:16px;margin-bottom:10px;font-size:12.5px;color:var(--ui-text-muted)}
.v3 .clsrow .ci{display:flex;gap:6px;align-items:center}
.v3 .dtbl .dh{font-size:13px;font-weight:650;margin-top:12px;padding-bottom:4px;border-bottom:1px solid var(--ui-border)}
.v3 .dtbl .dr{display:grid;grid-template-columns:200px 130px 22px 1fr;gap:10px;align-items:baseline;font-size:12.5px;padding:4px 0;border-bottom:1px solid #f1f3f6}
.v3 .dtbl .dl{color:var(--ui-text-muted)}
.v3 .dtbl .db{color:#8794a6;font-size:12px}

/* Subtítulo y cursor */
.v3 .caption span{font-size:16px;color:var(--ui-text);background:var(--ui-surface);border:1px solid var(--ui-border);border-radius:10px;padding:7px 16px;box-shadow:var(--ui-shadow)}
.v3 .caption b{background:var(--ui-primary);border-radius:6px;font-size:11.5px;letter-spacing:.02em;font-weight:600}

/* Modo inmersivo: solo toolbar y timeline compacto */
.v3.immersive .hdr3,.v3.immersive .rail3{opacity:0;visibility:hidden;pointer-events:none}
.v3.immersive .hdr3 *,.v3.immersive .rail3 *{pointer-events:none!important}
.v3.immersive .tool3{top:16px}

@media (prefers-reduced-motion: reduce){.v3 *,.v3 *::after{transition:none!important;animation:none!important}}
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
