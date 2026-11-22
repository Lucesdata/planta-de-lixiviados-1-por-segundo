/**
 * Rótulos discretos (Fase 6).
 *
 * En lugar de una tarjeta por equipo, la escena se rotula con dos piezas mínimas:
 *  · Rótulo de foco: SOLO la etapa en curso (o el equipo seleccionado fuera del recorrido). Texto con halo blanco,
 *    sin caja, unido al equipo por un tallo fino. Junto al anillo 3D de la unidad seleccionada, es lo que
 *    indica «qué sistema se está trabajando».
 *  · Marcadores numerados: un punto de 18 px con el número de la etapa (1–9, el mismo orden que el
 *    rastreador inferior) para las demás etapas visibles en el plano. Etapas ya en línea: punto azul
 *    relleno; pendientes: punto blanco.
 * Sin camiones ni auxiliares rotulados. Anticolisión voraz igual que antes (nunca bajo los paneles).
 */
import * as THREE from 'three';
import type { Plant, StageId, UnitId } from '../plant/types';
import type { SimState } from '../sim/state';
import { UNIT_BY_ID } from '../plant/layout';
import { STAGE_WINDOWS } from '../motion/timeline';
import { stageOfUnit } from '../sim/selectors';
import { SHORT_NAMES, type Lang } from './i18n';
import { S, derive } from '../plant/assumptions';
import { GRID, el, setClass, setText, type Rect } from './styles';

const SVGNS = 'http://www.w3.org/2000/svg';
/** Largo del tallo entre el ancla y el rótulo de foco. */
const STEM = 26;
/** Alto del rótulo de foco (dos líneas). */
const H = 32;
/** Diámetro del marcador numerado. */
const MK = 18;

/** Equipos auxiliares: ya no se rotulan (se conserva la lista para validación y la ficha). */
export const AUX_UNITS: UnitId[] = ['screen', 'dosC', 'dosF', 'pumpB', 'flare', 'thick', 'control'];

type ExtraId = 'uasb-group' | 'landfill' | 'pond' | 'wetland';
type LblId = UnitId | ExtraId;

const UASB_IDS: UnitId[] = ['uasb1', 'uasb2', 'uasb3', 'uasb4'];
/** Equipo que representa a cada etapa (el grupo UASB para la etapa anaerobia). */
const STAGE_MAIN: Record<StageId, LblId> = {
  homog: 'homog', coag: 'coag', floc: 'floc', clar1: 'clar1', uasb: 'uasb-group',
  clar2: 'clar2', mbbr: 'mbbr', filtro: 'filtro', discharge: 'discharge',
};
const EXTRA_TEXT: Record<ExtraId, { t: string; n: { es: string; en: string } }> = {
  'uasb-group': { t: 'R-201…R-204', n: { es: 'UASB ×4 en paralelo', en: 'UASB ×4 in parallel' } },
  landfill: { t: 'Origen · supuesto', n: { es: 'Vertedero · lluvia', en: 'Landfill · rain' } },
  pond: { t: 'Lixiviado', n: { es: 'Laguna de lixiviados', en: 'Leachate pond' } },
  wetland: { t: 'Agua recuperada', n: { es: 'Humedal receptor', en: 'Receiving wetland' } },
};
const isExtra = (id: LblId): id is ExtraId => id in EXTRA_TEXT;
/** Momentos del guion en que el foco está fuera de la planta. */
const EXTRA_WINDOWS: { id: ExtraId; t0: number; t1: number }[] = [
  { id: 'landfill', t0: 0, t1: 1.6 },
  { id: 'pond', t0: 1.6, t1: STAGE_WINDOWS[0].t0 },
  { id: 'wetland', t0: 44, t1: Infinity },
];

/** Fase 7 · notas técnicas (mismo estilo) mientras la etapa está en foco: equipo, ancla y texto con su clase. */
const D7 = derive();
const n1 = (x: number, d: number, lang: Lang) => x.toLocaleString(lang === 'es' ? 'es-CO' : 'en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
type Note = { unit: UnitId; key: string; text: (l: Lang) => string };
const NOTES: Partial<Record<LblId, Note[]>> = {
  'uasb-group': [
    { unit: 'flare', key: 'tip', text: l => l === 'es' ? `Antorcha · ${n1(D7.flareUse_pct, 0, l)} % de su capacidad · CH₄ ${n1(S.ch4Fraction * 100, 0, l)} % (S)` : `Flare · ${n1(D7.flareUse_pct, 0, l)} % of capacity · CH₄ ${n1(S.ch4Fraction * 100, 0, l)} % (S)` },
    { unit: 'flare', key: 'in', text: l => l === 'es' ? 'Pote de condensado · sello hidráulico · arrestallamas' : 'Condensate pot · water seal · flame arrester' },
    { unit: 'uasb2', key: 'tGas', text: l => l === 'es' ? `Biogás → antorcha · ${n1(D7.biogas_m3h, 1, l)} m³/h · C` : `Biogas → flare · ${n1(D7.biogas_m3h, 1, l)} m³/h · C` },
    { unit: 'uasb2', key: 'tGls', text: l => l === 'es' ? `Separador trifásico gas·líquido·sólido · ${S.uasbSepAngle_deg}° · S` : `Three-phase separator · ${S.uasbSepAngle_deg}° · S` },
    { unit: 'uasb2', key: 'tBlanket', text: l => l === 'es' ? `Manto de lodo · ascenso ${n1(D7.uasbVup_mh, 2, l)} m/h · C` : `Sludge blanket · upflow ${n1(D7.uasbVup_mh, 2, l)} m/h · C` },
    { unit: 'uasb2', key: 'tBed', text: l => l === 'es' ? `Lecho granular · COV ${n1(D7.uasbOlr_kgm3d, 1, l)} kg DQO/m³·d · C` : `Granular bed · OLR ${n1(D7.uasbOlr_kgm3d, 1, l)} kg COD/m³·d · C` },
  ],
  homog: [
    { unit: 'homog', key: 'core', text: l => l === 'es' ? `Ecualización · 20 m³ (B) · TRH ${n1(20 / D7.Q_m3h, 1, l)} h · C` : `Equalization · 20 m³ (B) · HRT ${n1(20 / D7.Q_m3h, 1, l)} h · C` },
    { unit: 'homog', key: 'return', text: l => l === 'es' ? 'Retorno del drenado del lecho de secado' : 'Drying-bed drainage return' },
  ],
  coag: [
    { unit: 'coag', key: 'core', text: l => l === 'es' ? `Mezcla rápida · G ${n1(S.coagG_s, 0, l)} s⁻¹ (S) · ${n1(D7.coagPower_W, 0, l)} W · C` : `Rapid mix · G ${n1(S.coagG_s, 0, l)} s⁻¹ (S) · ${n1(D7.coagPower_W, 0, l)} W · C` },
    { unit: 'coag', key: 'dose', text: l => l === 'es' ? `FeCl₃ ${n1(S.coagDose_mgL, 0, l)} mg/L (S) · ${n1(D7.coagSol_Lh, 2, l)} L/h · C` : `FeCl₃ ${n1(S.coagDose_mgL, 0, l)} mg/L (S) · ${n1(D7.coagSol_Lh, 2, l)} L/h · C` },
  ],
  floc: [
    { unit: 'floc', key: 'core', text: l => l === 'es' ? `Mezcla lenta · G ${n1(S.flocG_s, 0, l)} s⁻¹ (S) · TRH ${n1(D7.flocHrt_min, 0, l)} min · C` : `Slow mix · G ${n1(S.flocG_s, 0, l)} s⁻¹ (S) · HRT ${n1(D7.flocHrt_min, 0, l)} min · C` },
    { unit: 'floc', key: 'dose', text: l => l === 'es' ? `Polímero ${n1(S.polyDose_mgL, 0, l)} mg/L (S) · ${n1(D7.polySol_Lh, 1, l)} L/h al 0,1 % · C` : `Polymer ${n1(S.polyDose_mgL, 0, l)} mg/L (S) · ${n1(D7.polySol_Lh, 1, l)} L/h at 0.1 % · C` },
  ],
  clar1: [
    ...clarNotes('clar1', D7.primary_kgd, 'C', false),
    { unit: 'thick', key: 'core', text: l => l === 'es' ? `Espesador · ${n1(D7.thickSlr_kgm2d, 1, l)} kg SS/m²·d · al 5 % (S)` : `Thickener · ${n1(D7.thickSlr_kgm2d, 1, l)} kg SS/m²·d · to 5 % (S)` },
    { unit: 'sludge', key: 'core', text: l => l === 'es' ? `Lecho de secado ${S.bedArea_m2} m² · torta 25 % (S) · retiro cada ${n1(D7.truckDays, 0, l)} d · C` : `Drying bed ${S.bedArea_m2} m² · 25 % cake (S) · pick-up every ${n1(D7.truckDays, 0, l)} d · C` },
  ],
  clar2: clarNotes('clar2', S.clar2Sludge_kgd, 'S'),
  filtro: [
    { unit: 'filtro', key: 'tDist', text: l => l === 'es' ? `Distribución perforada · ${n1(D7.filterHydLoad_md, 2, l)} m/d · C` : `Perforated distribution · ${n1(D7.filterHydLoad_md, 2, l)} m/d · C` },
    { unit: 'filtro', key: 'tReeds', text: l => l === 'es' ? `${S.filterPlant} · remoción DQO ${n1(S.codRemFilter * 100, 0, l)} % · S` : `${S.filterPlant} · COD removal ${n1(S.codRemFilter * 100, 0, l)} % · S` },
    { unit: 'filtro', key: 'tLayers', text: l => l === 'es' ? `Suelo ${n1(S.filterSoil_m, 2, l)} · arena ${n1(S.filterSand_m, 2, l)} · grava ${n1(S.filterGravel_m, 2, l)} m · S` : `Soil ${n1(S.filterSoil_m, 2, l)} · sand ${n1(S.filterSand_m, 2, l)} · gravel ${n1(S.filterGravel_m, 2, l)} m · S` },
    { unit: 'filtro', key: 'tDrain', text: l => l === 'es' ? 'Dren inferior perforado' : 'Perforated underdrain' },
    { unit: 'filtro', key: 'tOutlet', text: l => l === 'es' ? `Salida con nivel regulable · DQO ${n1(D7.codFinal, 0, l)} mg/L · C` : `Adjustable-level outlet · COD ${n1(D7.codFinal, 0, l)} mg/L · C` },
  ],
  mbbr: [
    { unit: 'mbbr', key: 'tMedia', text: l => l === 'es' ? `Soportes PEAD · llenado ${n1(S.mbbrFill * 100, 0, l)} % · ${n1(D7.mbbrArea_m2, 0, l)} m² · S/C` : `HDPE carriers · ${n1(S.mbbrFill * 100, 0, l)} % fill · ${n1(D7.mbbrArea_m2, 0, l)} m² · S/C` },
    { unit: 'mbbr', key: 'tAir', text: l => l === 'es' ? `Difusores de fondo · ${n1(D7.air_m3h, 0, l)} Nm³/h · C` : `Bottom diffusers · ${n1(D7.air_m3h, 0, l)} Nm³/h · C` },
    { unit: 'mbbr', key: 'tBlower', text: l => l === 'es' ? `Soplante B-301 · ${n1(S.blowerPressure_bar, 2, l)} bar · ${n1(S.blowerMotor_kW, 1, l)} kW · S` : `Blower B-301 · ${n1(S.blowerPressure_bar, 2, l)} bar · ${n1(S.blowerMotor_kW, 1, l)} kW · S` },
    { unit: 'mbbr', key: 'tDo', text: l => l === 'es' ? `Sonda OD · consigna ${n1(S.doSet_mgL, 1, l)} mg/L · S` : `DO probe · setpoint ${n1(S.doSet_mgL, 1, l)} mg/L · S` },
    { unit: 'mbbr', key: 'tScreen', text: l => l === 'es' ? `Tamiz de retención de soportes` : `Carrier retention screen` },
  ],
};
const NH = 18;
function clarNotes(unit: UnitId, sludge: number, cls: 'S' | 'C', feed = true): Note[] {
  return [
    ...(feed ? [{ unit, key: 'tFeed', text: (l: Lang) => l === 'es' ? 'Campana central de alimentación (deflector)' : 'Central feedwell (baffle)' }] : []),
    { unit, key: 'tWeir', text: l => l === 'es' ? `Vertedero dentado · ${n1(D7.clarWeir_m3mh, 2, l)} m³/m·h · C` : `V-notch weir · ${n1(D7.clarWeir_m3mh, 2, l)} m³/m·h · C` },
    { unit, key: 'tCone', text: l => l === 'es' ? `Cono ${n1(D7.clarConeAngle_deg, 0, l)}° (S) · carga superficial ${n1(D7.clarSurfaceLoad_mh, 2, l)} m/h · C` : `Cone ${n1(D7.clarConeAngle_deg, 0, l)}° (S) · surface load ${n1(D7.clarSurfaceLoad_mh, 2, l)} m/h · C` },
    { unit, key: 'tPurge', text: l => l === 'es' ? `Purga de lodo · ${n1(sludge, 1, l)} kg SS/d · ${cls}` : `Sludge purge · ${n1(sludge, 1, l)} kg SS/d · ${cls}` },
  ];
}

interface Focus { id: LblId; div: HTMLElement; t: HTMLElement; n: HTMLElement; stem: SVGLineElement; dot: SVGCircleElement; w: number; wLang: Lang | null }
interface Marker { id: LblId; stageIdx: number; div: HTMLElement }

export interface LabelRect extends Rect { id: LblId }

export class LabelLayer {
  readonly root: HTMLElement;
  private svg: SVGSVGElement;
  private focus = new Map<LblId, Focus>();
  private markers: Marker[] = [];
  private notes = new Map<string, { div: HTMLElement; stem: SVGLineElement; dot: SVGCircleElement; w: number; lang: Lang | null }>();
  private v = new THREE.Vector3();
  visible = true;
  /** Rectángulos visibles en el último cuadro (validación). */
  lastRects: LabelRect[] = [];

  constructor(parent: HTMLElement) {
    this.root = el('div', 'labels', parent);
    this.svg = document.createElementNS(SVGNS, 'svg') as SVGSVGElement;
    this.svg.setAttribute('viewBox', '0 0 1920 1080');
    this.root.appendChild(this.svg);
    STAGE_WINDOWS.forEach((s, i) => {
      const id = STAGE_MAIN[s.id];
      const div = el('div', 'mk', this.root, String(i + 1));
      div.dataset.unit = id;
      this.markers.push({ id, stageIdx: i, div });
    });
  }

  /** Rótulo de foco (se crea al primer uso; cualquier equipo puede ser seleccionado). */
  private focusItem(id: LblId): Focus {
    let f = this.focus.get(id);
    if (f) return f;
    const div = el('div', 'lbl', this.root);
    div.dataset.unit = id;
    const t = el('div', 't', div);
    const n = el('div', 'n', div);
    const stem = document.createElementNS(SVGNS, 'line') as SVGLineElement;
    stem.setAttribute('stroke', 'rgba(31,45,90,0.55)');
    stem.setAttribute('stroke-width', '1.2');
    const dot = document.createElementNS(SVGNS, 'circle') as SVGCircleElement;
    dot.setAttribute('r', '3.2');
    dot.setAttribute('fill', '#2f5bea');
    dot.setAttribute('stroke', '#fff');
    dot.setAttribute('stroke-width', '1.5');
    this.svg.append(stem, dot);
    f = { id, div, t, n, stem, dot, w: 0, wLang: null };
    this.focus.set(id, f);
    return f;
  }

  private anchorOf(plant: Plant, id: LblId): THREE.Vector3 | undefined {
    if (id === 'uasb-group') {
      const pts = UASB_IDS.map(u => plant.units[u]?.anchors.label).filter((v): v is THREE.Vector3 => !!v);
      return pts.length ? pts.reduce((acc, v) => acc.add(v), new THREE.Vector3()).multiplyScalar(1 / pts.length).add(new THREE.Vector3(0, 0.4, 0)) : undefined;
    }
    if (id === 'landfill' || id === 'pond') return plant.landfill?.anchors[id];
    if (id === 'wetland') return plant.wetland?.anchor;
    return plant.units[id]?.anchors.label;
  }

  private project(a: THREE.Vector3 | undefined, camera: THREE.Camera): [number, number] | null {
    if (!a) return null;
    this.v.copy(a).project(camera);
    if (!(this.v.z < 1 && this.v.z > -1)) return null;
    return [(this.v.x * 0.5 + 0.5) * 1920, (-this.v.y * 0.5 + 0.5) * 1080];
  }

  /** Ids en foco en el instante: etapa en curso (o momento fuera de planta) + selección. */
  focusIds(state: SimState, selected: UnitId | null): LblId[] {
    const ids: LblId[] = [];
    const ex = EXTRA_WINDOWS.find(w => state.t >= w.t0 && state.t < w.t1);
    if (ex) ids.push(ex.id);
    else if (state.trackerIndex >= 0) ids.push(STAGE_MAIN[STAGE_WINDOWS[state.trackerIndex].id]);
    // La selección ya se ve en la ficha y con el contorno 3D: solo se rotula si no hay etapa en curso.
    if (selected && !ids.length) ids.push(selected);
    return ids;
  }

  /** Proyecta y coloca rótulos de foco y marcadores. */
  update(plant: Plant, camera: THREE.Camera, state: SimState, selected: UnitId | null, lang: Lang, obstacles: Rect[] = [],
    _trucks: unknown[] = []): void {
    this.lastRects = [];
    this.root.style.display = this.visible ? 'block' : 'none';
    if (!this.visible) return;
    const safe = GRID.safe;
    const placed: Rect[] = [...obstacles];
    const inSafe = (r: Rect) => r.x0 >= safe.x0 && r.x1 <= safe.x1 && r.y0 >= safe.y0 && r.y1 <= safe.y1;
    const free = (r: Rect, pad: number) => inSafe(r) && !placed.some(p => overlap(p, r, pad));

    // 1 · Rótulos de foco.
    const want = this.focusIds(state, selected);
    for (const f of this.focus.values()) if (!want.includes(f.id)) this.hideFocus(f);
    const focused = new Set<LblId>();
    for (const id of want) {
      const f = this.focusItem(id);
      if (f.wLang !== lang) {
        if (isExtra(id)) { setText(f.t, EXTRA_TEXT[id].t); setText(f.n, EXTRA_TEXT[id].n[lang]); }
        else { setText(f.t, UNIT_BY_ID[id].tag); setText(f.n, SHORT_NAMES[id]?.[lang] ?? UNIT_BY_ID[id].name[lang]); }
        f.div.style.display = 'block';
        f.w = Math.ceil(f.div.offsetWidth) || 140;
        f.wLang = lang;
      }
      const p = this.project(this.anchorOf(plant, id), camera);
      let ok = false, bx = 0, by = 0, sx = 0, sy = 0;
      if (p && p[0] >= safe.x0 && p[0] <= safe.x1 && p[1] >= safe.y0 && p[1] <= safe.y1) {
        const [ax, ay] = p;
        const w = f.w;
        // Tallo vertical (o diagonal corta) y texto centrado encima; alternativas a los lados y debajo.
        const cands: [number, number, number, number][] = [
          [ax - w / 2, ay - STEM - H, ax, ay - STEM],
          [ax - w / 2, ay - STEM * 2 - H, ax, ay - STEM * 2],
          [ax + 14, ay - STEM - H + 6, ax + 14, ay - STEM + 6],
          [ax - w - 14, ay - STEM - H + 6, ax - 14, ay - STEM + 6],
          [ax - w / 2, ay + STEM, ax, ay + STEM],
        ];
        for (const [x, y, ex, ey] of cands) {
          const r = { x0: x, y0: y, x1: x + w, y1: y + H };
          if (!free(r, 6)) continue;
          bx = x; by = y; sx = ex; sy = ey; ok = true;
          placed.push(r);
          break;
        }
        if (ok) {
          f.div.style.transform = `translate(${bx.toFixed(1)}px, ${by.toFixed(1)}px)`;
          f.stem.setAttribute('x1', ax.toFixed(1)); f.stem.setAttribute('y1', ay.toFixed(1));
          f.stem.setAttribute('x2', sx.toFixed(1)); f.stem.setAttribute('y2', sy.toFixed(1));
          f.dot.setAttribute('cx', ax.toFixed(1)); f.dot.setAttribute('cy', ay.toFixed(1));
          placed.push({ x0: ax - 6, y0: ay - 6, x1: ax + 6, y1: ay + 6 });
          this.lastRects.push({ id, x0: bx, y0: by, x1: bx + w, y1: by + H });
          focused.add(id);
        }
      }
      f.div.style.display = ok ? 'block' : 'none';
      f.stem.style.display = ok ? '' : 'none';
      f.dot.style.display = ok ? '' : 'none';
    }

    // 1b · Notas técnicas de la etapa en foco (solo si su rótulo está en pantalla).
    const live = new Set<string>();
    for (const fid of focused) for (const nt of NOTES[fid] ?? []) {
      const key = `${nt.unit}:${nt.key}`;
      let it = this.notes.get(key);
      if (!it) {
        const div = el('div', 'note3', this.root);
        const stem = document.createElementNS(SVGNS, 'line') as SVGLineElement;
        stem.setAttribute('stroke', 'rgba(31,45,90,0.45)'); stem.setAttribute('stroke-width', '1');
        const dot = document.createElementNS(SVGNS, 'circle') as SVGCircleElement;
        dot.setAttribute('r', '2.4'); dot.setAttribute('fill', '#fff'); dot.setAttribute('stroke', '#2f5bea'); dot.setAttribute('stroke-width', '1.4');
        this.svg.append(stem, dot);
        it = { div, stem, dot, w: 0, lang: null };
        this.notes.set(key, it);
      }
      if (it.lang !== lang) { setText(it.div, nt.text(lang)); it.div.style.display = 'block'; it.w = Math.ceil(it.div.offsetWidth) || 180; it.lang = lang; }
      const p = this.project(plant.units[nt.unit]?.anchors[nt.key], camera);
      if (!p) continue;
      const [ax, ay] = p, w = it.w;
      const cands: [number, number][] = [[ax + 34, ay - 30], [ax - 34 - w, ay - 30], [ax + 34, ay + 12], [ax - 34 - w, ay + 12], [ax + 44, ay - 9], [ax - 44 - w, ay - 9]];
      for (const [x, y] of cands) {
        const r = { x0: x, y0: y, x1: x + w, y1: y + NH };
        if (!free(r, 4)) continue;
        placed.push(r, { x0: ax - 4, y0: ay - 4, x1: ax + 4, y1: ay + 4 });
        it.div.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
        const sx = x > ax ? x : x + w;
        it.stem.setAttribute('x1', ax.toFixed(1)); it.stem.setAttribute('y1', ay.toFixed(1));
        it.stem.setAttribute('x2', sx.toFixed(1)); it.stem.setAttribute('y2', (y + NH / 2).toFixed(1));
        it.dot.setAttribute('cx', ax.toFixed(1)); it.dot.setAttribute('cy', ay.toFixed(1));
        this.lastRects.push({ id: fid, x0: x, y0: y, x1: x + w, y1: y + NH });
        live.add(key);
        break;
      }
    }
    for (const [key, it] of this.notes) {
      const on = live.has(key);
      it.div.style.display = on ? 'block' : 'none';
      it.stem.style.display = on ? '' : 'none';
      it.dot.style.display = on ? '' : 'none';
    }

    // 2 · Marcadores numerados de las demás etapas visibles.
    for (const m of this.markers) {
      let ok = false;
      if (!focused.has(m.id) && !(m.id === 'uasb-group' && selected && UASB_IDS.includes(selected) && focused.has(selected))) {
        const p = this.project(this.anchorOf(plant, m.id), camera);
        if (p) {
          const r = { x0: p[0] - MK / 2, y0: p[1] - MK / 2, x1: p[0] + MK / 2, y1: p[1] + MK / 2 };
          if (free(r, 3)) {
            ok = true;
            placed.push(r);
            m.div.style.transform = `translate(${r.x0.toFixed(1)}px, ${r.y0.toFixed(1)}px)`;
            const main = m.id === 'uasb-group' ? 'uasb1' : (m.id as UnitId);
            setClass(m.div, 'on', !!state.units[main]?.active);
          }
        }
      }
      m.div.style.display = ok ? 'block' : 'none';
    }
  }

  private hideFocus(f: Focus): void {
    f.div.style.display = 'none';
    f.stem.style.display = 'none';
    f.dot.style.display = 'none';
  }
}

/** Etapa (1–9) de un equipo, para la ficha o el rastreador. */
export function stageNumber(id: UnitId): number | null {
  const s = stageOfUnit(id);
  const i = s ? STAGE_WINDOWS.findIndex(w => w.id === s) : -1;
  return i >= 0 ? i + 1 : null;
}

function overlap(a: Rect, b: Rect, pad: number): boolean {
  return a.x0 < b.x1 + pad && b.x0 < a.x1 + pad && a.y0 < b.y1 + pad && b.y0 < a.y1 + pad;
}
