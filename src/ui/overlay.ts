/**
 * Overlay HTML del escenario 16:9 — SPEC v3.0 «Light Industrial Interface».
 * Header, rail, panel de operación, inspector, toolbar 3D, timeline, eventos y documentación son capas sobre el
 * canvas: el canvas, la cámara y la simulación no cambian. Todo lo visible es función de (SimState, contexto, UiState).
 */
import * as THREE from 'three';
import type { Plant, UnitId } from '../plant/types';
import type { SimState } from '../sim/state';
import { CLICKS } from '../motion/timeline';
import { ramp } from '../sim/signals';
import { tr, type Lang, type I18nKey } from './i18n';
import { CSS, el, setClass, setStyle, setText, type Rect } from './styles';
import { DetailPanel, SplitCard } from './detailPanel';
import { LabelLayer } from './labels';
import { CompareCard } from './impact';
import type { CamMode, ControlsState } from './controls';
import {
  DocsPanel, EventDrawer, Header, LAYER_KEYS, OpsPanel, Popover, Rail, Timeline, Toolbar, defaultUi,
  type ShellHandlers, type UiState, type View,
} from './shell';

export interface Toggles { pipes: boolean; labels: boolean; flow: boolean; sludge: boolean; actors: boolean }

export interface OverlayHandlers extends ShellHandlers {
  step(dt: number): void;
}

export interface OverlayCtx {
  mode: CamMode;
  lang: Lang;
  selected: UnitId | null;
  toggles: Toggles;
  controls: ControlsState;
  /** Zonas de pantalla (px 1920×1080) que las etiquetas no deben cubrir. */
  obstacles?: Rect[];
  /** Camiones visibles (no se rotulan desde D-59; se conserva la interfaz). */
  trucks?: { kind: 'chemical' | 'sludge'; pos: THREE.Vector3 }[];
}

export class Overlay {
  readonly root: HTMLElement;
  readonly labels: LabelLayer;
  readonly detail: DetailPanel;
  readonly ui: UiState = defaultUi();
  /** La miniatura del inspector solo se dibuja si el inspector está visible. */
  thumbVisible = false;
  private header: Header;
  private rail: Rail;
  private ops: OpsPanel;
  private tool: Toolbar | null;
  private timeline: Timeline;
  private events: EventDrawer;
  private docs: DocsPanel;
  private layersPop: Popover;
  private settingsPop: Popover;
  private split: SplitCard;
  private compare: CompareCard;
  private caption: { wrap: HTMLElement; b: HTMLElement; s: HTMLElement };
  private cursor: { root: HTMLElement; arrow: SVGSVGElement; rip: HTMLElement };
  private v = new THREE.Vector3();
  private lastSel: UnitId | null = null;
  private ctxToggles: Toggles | null = null;
  private lang: Lang = 'es';
  private lightName = '';

  constructor(stage: HTMLElement, private film: boolean, h: OverlayHandlers) {
    if (!document.getElementById('ptl-css')) {
      const st = document.createElement('style');
      st.id = 'ptl-css';
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    this.root = el('div', 'ov v3', stage);
    // Etiquetas y cursor bajo los paneles.
    this.labels = new LabelLayer(this.root);

    const ui = this.ui;
    this.header = new Header(this.root, film, v => this.setView(v), h, () => { ui.settings = !ui.settings; ui.layers = false; });
    this.rail = new Rail(this.root, film, k => {
      if (k === 'settings') { ui.settings = !ui.settings; ui.layers = false; return; }
      ui[k] = !ui[k];
      if (k === 'docs' && !ui.docs && ui.view === 'docs') ui.view = 'plant';
    });
    this.ops = new OpsPanel(this.root, () => { ui.ops = false; }, film);
    this.events = new EventDrawer(this.root, () => { ui.events = false; });
    this.detail = new DetailPanel(this.root, film, () => { ui.inspector = false; });
    this.split = new SplitCard(this.root, 788);
    this.compare = new CompareCard(this.root, 788);
    this.docs = new DocsPanel(this.root, () => { ui.docs = false; if (ui.view === 'docs') ui.view = 'plant'; });

    const cw = el('div', 'caption', this.root);
    const cs = el('span', '', cw);
    const cb = el('b', '', cs);
    const ct = el('span', '', cs);
    ct.style.cssText = 'background:none;border:none;padding:0';
    this.caption = { wrap: cw, b: cb, s: ct };

    this.tool = film ? null : new Toolbar(this.root, h, () => ui, () => { ui.layers = !ui.layers; ui.settings = false; }, () => this.setImmersive(!ui.immersive));
    this.layersPop = new Popover(this.root, 'layers', LAYER_KEYS.map(k => ({ key: k, on: () => h.toggle(k) })));
    this.settingsPop = new Popover(this.root, 'settings', [
      { key: 'lang', on: () => h.setLang(this.lang === 'es' ? 'en' : 'es') },
      { key: 'light', on: () => h.cycleLight() },
    ]);
    this.timeline = new Timeline(this.root, film, h);

    if (!film) {
      window.addEventListener('keydown', e => {
        const tg = e.target as HTMLElement;
        if (tg?.tagName === 'INPUT' && (tg as HTMLInputElement).type !== 'range') return;
        if (tg?.tagName === 'BUTTON' && (e.code === 'Space' || e.code === 'Enter')) return;
        if (e.code === 'Space') { e.preventDefault(); h.togglePlay(); }
        else if (e.code === 'ArrowLeft') { e.preventDefault(); h.step(-1); }
        else if (e.code === 'ArrowRight') { e.preventDefault(); h.step(1); }
        else if (e.code === 'KeyL') h.toggle('labels');
        else if (e.code === 'KeyP') h.toggle('pipes');
        else if (e.code === 'KeyF') h.toggle('flow');
        else if (e.code === 'KeyV') h.toggle('actors');
        else if (e.code === 'KeyN') h.cycleLight();
        else if (e.code === 'KeyI') this.setImmersive(!ui.immersive);
        else if (e.code === 'Escape') {
          if (ui.layers || ui.settings) { ui.layers = false; ui.settings = false; }
          else if (ui.immersive) this.setImmersive(false);
          else if (ui.docs) { ui.docs = false; ui.view = 'plant'; }
        }
      });
    }

    // Cursor guionizado (por encima de todo)
    const cr = el('div', 'cursor', this.root);
    const rip = el('div', 'rip', cr);
    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg') as SVGSVGElement;
    arrow.setAttribute('width', '22'); arrow.setAttribute('height', '26'); arrow.setAttribute('viewBox', '0 0 22 26');
    arrow.innerHTML = '<path d="M2 1.5 L2 20 L7 15.5 L10.5 23.5 L13.8 22 L10.4 14.3 L17 14 Z" fill="#243443" stroke="#ffffff" stroke-width="1.3" stroke-linejoin="round"/>';
    cr.appendChild(arrow);
    this.cursor = { root: cr, arrow, rip };
  }

  /** Vistas del header: presets de paneles. No alteran escena, reproducción, selección ni cámara. */
  setView(v: View): void {
    const ui = this.ui;
    if (v === 'scenarios') return;
    ui.view = v;
    ui.immersive = false;
    if (v === 'plant') Object.assign(ui, { ops: true, events: false, analysis: false, docs: false });
    else if (v === 'operation') Object.assign(ui, { ops: true, events: true, analysis: false, docs: false });
    else if (v === 'analysis') Object.assign(ui, { ops: true, events: false, analysis: true, docs: false });
    else if (v === 'docs') Object.assign(ui, { docs: true, events: false });
  }

  setImmersive(on: boolean): void {
    this.ui.immersive = on;
    this.ui.layers = false; this.ui.settings = false;
  }

  /** Escala del overlay (ancho del escenario / 1920). */
  setScale(k: number): void {
    this.root.style.transform = `scale(${k})`;
  }

  update(state: SimState, ctx: OverlayCtx, plant: Plant, camera: THREE.Camera): void {
    const { lang } = ctx;
    const ui = this.ui;
    this.lang = lang;
    this.ctxToggles = ctx.toggles;
    const tp = { ...ctx.controls, mode: ctx.mode };
    // Una selección nueva reabre el inspector (respeta el sistema de selección 3D existente).
    if (ctx.selected && ctx.selected !== this.lastSel) ui.inspector = true;
    this.lastSel = ctx.selected;

    const imm = ui.immersive;
    setClass(this.root, 'immersive', imm);
    this.header.update(state, ui, tp, lang);
    this.rail.update(ui, lang);
    this.tool?.update(ui, tp, lang);

    setClass(this.ops.root, 'closed', imm || !ui.ops);
    this.ops.update(state, lang);
    setClass(this.events.root, 'closed', imm || !ui.events);
    if (ui.events && !imm) this.events.update(state, lang);
    setClass(this.docs.root, 'closed', imm || !ui.docs);
    if (ui.docs) this.docs.update(lang);

    const showInsp = !imm && ui.inspector && !!ctx.selected;
    this.thumbVisible = showInsp;
    setClass(this.detail.root, 'closed', !showInsp);
    this.detail.update(state, ctx.selected, lang);

    this.split.update(state, lang);
    this.compare.update(state, lang);
    if (ui.analysis && !this.compare.visible) {
      // Modo análisis: la comparación se muestra siempre con los valores actuales del modelo.
      this.compare.forceUpdate(state, lang);
    }
    if (this.compare.visible) setStyle(this.split.root, 'display', 'none');
    setClass(this.split.root, 'closed', imm);
    setClass(this.compare.root, 'closed', imm);

    const lm = state.lighting?.mode ?? 'day';
    this.lightName = tr(`light_${lm}` as I18nKey, lang);
    const tgs = this.ctxToggles!;
    const tgName = (k: string) => tr(`tg_${k}` as I18nKey, lang);
    this.layersPop.update(ui.layers && !this.film, Object.fromEntries(LAYER_KEYS.map(k => [k, [tgName(k), tgs[k]]])));
    this.settingsPop.update(ui.settings && !this.film, {
      lang: [lang === 'es' ? 'Idioma: Español · cambiar a English' : 'Language: English · switch to Español', true],
      light: [`${tr('tg_light', lang)}: ${this.lightName}`, lm !== 'day'],
    });

    // Subtítulo narrativo
    if (state.caption && !imm) {
      setStyle(this.caption.wrap, 'display', 'flex');
      setText(this.caption.b, state.phase === 'idle' ? (lang === 'es' ? 'Inicio' : 'Start') : `${tr('phase', lang)} ${state.phase}`);
      setText(this.caption.s, state.caption[lang]);
    } else setStyle(this.caption.wrap, 'display', 'none');

    this.timeline.update(state, imm ? { ...ui, stages: false } : ui, tp, lang);

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
