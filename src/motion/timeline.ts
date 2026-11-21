/**
 * Línea de tiempo narrativa determinista (0–50 s).
 * evaluate(t) es una función PURA de t: sin Math.random, sin Date, sin estado oculto.
 * Todo el guion (segmentos de la parcela, ventanas del rastreador, clics, alertas, subtítulos)
 * se declara como datos constantes en este archivo.
 */
import type { StageId, UnitId } from '../plant/types';
import type { Plant } from '../plant/types';
import { PIPES, STAGES } from '../plant/processFlow';
import { UNITS } from '../plant/layout';
import type { Alert, CursorState, Parcel, PhaseId, PipeState, PlantState, SimState, UnitState } from '../sim/state';
import { clamp, ramp, smoothstep } from '../sim/signals';
import { cameraStory } from './cameraStory';
import { LOGISTICS_ALERTS, logisticsAt } from './actors';
import { LIGHT_STORY, lightingAt, type LightMode } from './lighting';

export const DURATION = 50;

const UASB: UnitId[] = ['uasb1', 'uasb2', 'uasb3', 'uasb4'];

/** Segmento del recorrido de la parcela héroe. ids con más de un elemento = ramales paralelos. */
export interface RouteSeg {
  kind: 'pipe' | 'unit';
  ids: string[];
  t0: number;
  t1: number;
}

/** Recorrido de la parcela héroe (orden del proceso). */
export const ROUTE: RouteSeg[] = [
  { kind: 'pipe', ids: ['p-inlet'], t0: 2.6, t1: 3.9 },
  { kind: 'unit', ids: ['screen'], t0: 3.9, t1: 4.7 },
  { kind: 'pipe', ids: ['p-screen-homog'], t0: 4.7, t1: 5.2 },
  { kind: 'unit', ids: ['homog'], t0: 5.2, t1: 6.3 },
  { kind: 'pipe', ids: ['p-homog-coag'], t0: 6.3, t1: 6.9 },
  { kind: 'unit', ids: ['coag'], t0: 6.9, t1: 7.9 },
  { kind: 'pipe', ids: ['p-coag-floc'], t0: 7.9, t1: 8.4 },
  { kind: 'unit', ids: ['floc'], t0: 8.4, t1: 9.5 },
  { kind: 'pipe', ids: ['p-floc-clar1'], t0: 9.5, t1: 10.0 },
  { kind: 'unit', ids: ['clar1'], t0: 10.0, t1: 13.8 },
  { kind: 'pipe', ids: ['p-clar1-inter'], t0: 13.8, t1: 16.0 },
  { kind: 'unit', ids: ['inter'], t0: 16.0, t1: 17.3 },
  { kind: 'pipe', ids: ['p-inter-pump'], t0: 17.3, t1: 18.0 },
  { kind: 'unit', ids: ['pump'], t0: 18.0, t1: 18.8 },
  { kind: 'pipe', ids: UASB.map(u => `p-feed-${u}`), t0: 18.8, t1: 23.0 },
  { kind: 'unit', ids: [...UASB], t0: 23.0, t1: 29.6 },
  { kind: 'pipe', ids: UASB.map(u => `p-${u}-clar2`), t0: 29.6, t1: 31.0 },
  { kind: 'unit', ids: ['clar2'], t0: 31.0, t1: 33.8 },
  { kind: 'pipe', ids: ['p-clar2-mbbr'], t0: 33.8, t1: 34.6 },
  { kind: 'unit', ids: ['mbbr'], t0: 34.6, t1: 37.6 },
  { kind: 'pipe', ids: ['p-mbbr-filtro'], t0: 37.6, t1: 38.6 },
  { kind: 'unit', ids: ['filtro'], t0: 38.6, t1: 41.8 },
  { kind: 'pipe', ids: ['p-filtro-discharge'], t0: 41.8, t1: 42.4 },
  { kind: 'unit', ids: ['discharge'], t0: 42.4, t1: 43.2 },
  { kind: 'pipe', ids: ['p-outfall'], t0: 43.2, t1: 44.0 },
];

/**
 * Líneas secundarias (sin parcela héroe: solo frente de llenado + caudal visual). Fase 2: hipótesis visuales
 * del escenario; las cifras (dosis, lodos, biogás) son supuestos/cálculos de src/plant/assumptions.ts.
 */
export const SIDE_LINES: { pipeId: string; t0: number; t1: number }[] = [
  // Dosificación química: arranca con la mezcla rápida / lenta.
  { pipeId: 'p-dosC-coag', t0: 6.5, t1: 7.0 },
  { pipeId: 'p-dosF-floc', t0: 8.0, t1: 8.5 },
  // Lodo primario → espesador → lecho de secado; el drenado vuelve a cabecera tras un retardo.
  { pipeId: 'p-clar1-thick', t0: 11.2, t1: 12.6 },
  { pipeId: 'p-thick-bed', t0: 13.0, t1: 14.2 },
  { pipeId: 'p-bed-return', t0: 20.0, t1: 22.6 },
  // Biogás de los 4 UASB → sello hidráulico y antorcha.
  ...UASB.map(u => ({ pipeId: `p-gas-${u}`, t0: 23.8, t1: 25.0 })),
  // Purgas de lodo UASB y CL-201 → espesador.
  ...UASB.map(u => ({ pipeId: `p-purge-${u}`, t0: 27.5, t1: 29.4 })),
  { pipeId: 'p-clar2-thick', t0: 32.4, t1: 33.6 },
];
/** Compatibilidad: rama de lodo primario. */
export const SLUDGE_BRANCH = { pipeId: 'p-clar1-thick', t0: 11.2, t1: 12.6 };

/** Activación de unidades que no recorre la parcela héroe. pumpB nunca: en reserva todo el tiempo. */
const AUX_ON: Partial<Record<UnitId, number>> = {
  dosC: 6.5, dosF: 8.0, thick: 12.6, sludge: 14.2, flare: 25.0, control: 2.0,
};
/** Unidades en reserva permanente (estado 'standby', sin caudal). */
export const STANDBY_UNITS: UnitId[] = ['pumpB'];

/** Ventanas del rastreador (orden del brief). Intermedio + bomba pertenecen al paso UASB. */
export const STAGE_WINDOWS: { id: StageId; t0: number; t1: number }[] = [
  { id: 'homog', t0: 3.9, t1: 6.8 },
  { id: 'coag', t0: 6.8, t1: 8.4 },
  { id: 'floc', t0: 8.4, t1: 10.0 },
  { id: 'clar1', t0: 10.0, t1: 16.0 },
  { id: 'uasb', t0: 16.0, t1: 31.0 },
  { id: 'clar2', t0: 31.0, t1: 34.6 },
  { id: 'mbbr', t0: 34.6, t1: 38.0 },
  { id: 'filtro', t0: 38.0, t1: 42.4 },
  { id: 'discharge', t0: 42.4, t1: 44.0 },
];

export const PHASES: { id: PhaseId; t0: number; t1: number }[] = [
  { id: 'idle', t0: 0, t1: 5 },
  { id: 'A', t0: 5, t1: 10 },
  { id: 'B', t0: 10, t1: 16 },
  { id: 'C', t0: 16, t1: 23 },
  { id: 'D', t0: 23, t1: 31 },
  { id: 'E', t0: 31, t1: 44 },
  { id: 'F', t0: 44, t1: 50 },
];

/** Clics guionizados del cursor (selección persistente hasta el siguiente clic). */
export const CLICKS: { t: number; unit: UnitId }[] = [
  { t: 5.8, unit: 'homog' },
  { t: 11.0, unit: 'clar1' },
  { t: 24.6, unit: 'uasb2' },
  { t: 27.6, unit: 'flare' },
  { t: 35.4, unit: 'mbbr' },
  { t: 39.8, unit: 'filtro' },
];
const CURSOR_ON = 4.0;
const CURSOR_OFF = 45.5;
const CURSOR_TRAVEL = 1.4;

export const PLANT_RUN_T = 2.0;
/** Instante en que la vista general final queda asentada (clave de cámara). */
export const OVERVIEW_SETTLED = 48.6;

type Bi = { es: string; en: string };
const ALERT_DEFS_RAW: { t: number; id: string; level: Alert['level']; text: Bi }[] = [
  { t: 0.3, id: 'rain', level: 'info', text: { es: 'Lluvia sobre el vertedero · percolación', en: 'Rain on the landfill · percolation' } },
  { t: 1.6, id: 'pond', level: 'info', text: { es: 'Laguna de lixiviados → bombeo a RJ-100', en: 'Leachate pond → pumped to RJ-100' } },
  { t: 44.2, id: 'wetland', level: 'info', text: { es: 'Agua recuperada llega al humedal', en: 'Recovered water reaches the wetland' } },
  { t: 2.6, id: 'inflow', level: 'info', text: { es: 'Ingreso de lixiviado · rejilla RJ-100', en: 'Leachate inflow · screen RJ-100' } },
  { t: 3.0, id: 'pumpB', level: 'info', text: { es: 'P-01B en reserva', en: 'P-01B on standby' } },
  { t: 5.2, id: 'homog', level: 'info', text: { es: 'Homogenización en línea', en: 'Homogenization online' } },
  { t: 6.5, id: 'dosC', level: 'info', text: { es: 'Dosificación de coagulante activa', en: 'Coagulant dosing active' } },
  { t: 6.9, id: 'coag', level: 'info', text: { es: 'Mezcla rápida TK-102 activa', en: 'Rapid mix TK-102 active' } },
  { t: 8.0, id: 'dosF', level: 'info', text: { es: 'Polímero DQ-102 en dosificación', en: 'Polymer DQ-102 dosing' } },
  { t: 8.4, id: 'floc', level: 'info', text: { es: 'Floculación TK-103 en línea', en: 'Flocculation TK-103 online' } },
  { t: 10.0, id: 'clar1', level: 'info', text: { es: 'CL-101 en sedimentación primaria', en: 'CL-101 primary settling' } },
  { t: 11.2, id: 'sludge', level: 'notice', text: { es: 'Purga de lodo CL-101 → espesador ES-101', en: 'CL-101 sludge purge → thickener ES-101' } },
  { t: 14.2, id: 'bed', level: 'info', text: { es: 'Lodo espesado al lecho de secado LS-101', en: 'Thickened sludge to drying bed LS-101' } },
  { t: 20.0, id: 'return', level: 'info', text: { es: 'Retorno de drenado LS-101 → TK-101', en: 'LS-101 drainage return → TK-101' } },
  { t: 16.0, id: 'inter', level: 'info', text: { es: 'Tanque intermedio TK-104 en carga', en: 'Intermediate tank TK-104 filling' } },
  { t: 18.0, id: 'pump', level: 'notice', text: { es: 'Bomba P-01 activa', en: 'Pump P-01 active' } },
  { t: 19.8, id: 'split', level: 'notice', text: { es: 'Caudal repartido al tren UASB', en: 'Flow distributed to UASB train' } },
  { t: 23.0, id: 'uasb', level: 'info', text: { es: 'UASB en línea 4/4', en: 'UASB online 4/4' } },
  { t: 25.2, id: 'flare', level: 'notice', text: { es: 'Antorcha QB-201 encendida · biogás de 4 UASB', en: 'Flare QB-201 lit · biogas from 4 UASB' } },
  { t: 27.5, id: 'purge', level: 'info', text: { es: 'Purga de lodos UASB → espesador', en: 'UASB sludge purge → thickener' } },
  { t: 32.4, id: 'purge2', level: 'info', text: { es: 'Purga de lodo CL-201 → espesador', en: 'CL-201 sludge purge → thickener' } },
  { t: 31.0, id: 'clar2', level: 'info', text: { es: 'Clarificador CL-201 en línea', en: 'Clarifier CL-201 online' } },
  { t: 34.2, id: 'blower', level: 'info', text: { es: 'Soplante B-301 en marcha · aireación MBBR', en: 'Blower B-301 running · MBBR aeration' } },
  { t: 34.6, id: 'mbbr', level: 'notice', text: { es: 'Etapa de pulimento en línea', en: 'Polishing stage online' } },
  { t: 38.6, id: 'filtro', level: 'info', text: { es: 'Filtro fitopedológico en línea', en: 'Phytopedological filter online' } },
  { t: 42.4, id: 'discharge', level: 'notice', text: { es: 'Descarga de efluente tratado activa', en: 'Treated effluent discharge active' } },
  { t: 44.0, id: 'all', level: 'info', text: { es: 'Todas las etapas en línea', en: 'All stages online' } },
  ...LOGISTICS_ALERTS,
];
/** Orden cronológico (el registro muestra las 4 más recientes). */
const ALERT_DEFS = [...ALERT_DEFS_RAW].sort((a, b) => a.t - b.t);
/** Alumbrado en modo «story»: se enciende al atardecer. */
const LIGHT_ALERT = { t: LIGHT_STORY.fixturesOn, id: 'lights', level: 'info' as const, text: { es: 'Alumbrado de planta encendido', en: 'Plant lighting switched on' } };

export const CAPTIONS: { t0: number; t1: number; text: Bi }[] = [
  { t0: 0, t1: 1.5, text: { es: 'Lluvia sobre el vertedero · el agua percola la basura y se vuelve lixiviado (supuesto)', en: 'Rain on the landfill · water percolates through the waste and becomes leachate (assumed)' } },
  { t0: 1.5, t1: 2.6, text: { es: 'Canal perimetral → laguna de lixiviados → bombeo a la planta', en: 'Perimeter ditch → leachate pond → pumped to the plant' } },
  { t0: 2.6, t1: 5, text: { es: 'Ingreso de lixiviado · cribado RJ-100 · 1,0 L/s (B)', en: 'Leachate inflow · screening RJ-100 · 1.0 L/s (brief)' } },
  { t0: 5, t1: 10, text: { es: 'Acondicionamiento: homogenización, coagulación y floculación (FeCl₃ 300 mg/L, supuesto)', en: 'Conditioning: equalization, coagulation and flocculation (FeCl₃ 300 mg/L, assumed)' } },
  { t0: 10, t1: 16, text: { es: 'Clarificación primaria · lodo → espesador → lecho de secado cubierto', en: 'Primary clarification · sludge → thickener → covered drying bed' } },
  { t0: 16, t1: 23, text: { es: 'Bombeo P-01 y reparto equitativo a 4 UASB en paralelo (hipótesis)', en: 'Pump P-01 and equal split to 4 parallel UASB (hypothesis)' } },
  { t0: 23, t1: 31, text: { es: 'Tratamiento anaerobio UASB · 0,25 L/s por reactor · biogás a antorcha', en: 'Anaerobic UASB treatment · 0.25 L/s per reactor · biogas to flare' } },
  { t0: 31, t1: 38, text: { es: 'Clarificación secundaria y pulimento aerobio MBBR', en: 'Secondary clarification and aerobic MBBR polishing' } },
  { t0: 38, t1: 44, text: { es: 'Filtro fitopedológico y descarga de efluente tratado', en: 'Phytopedological filter and treated effluent discharge' } },
  { t0: 44, t1: 47.6, text: { es: 'Agua recuperada devuelta al humedal · el ciclo se cierra', en: 'Recovered water returned to the wetland · the cycle closes' } },
  { t0: 47.6, t1: 50.001, text: { es: 'Del lixiviado al agua recuperada · todas las etapas en línea', en: 'From leachate to recovered water · all stages online' } },
];

// ——— Tablas derivadas (constantes, calculadas una vez desde los datos de arriba) ———

/** Instante en que la parcela entra a cada unidad (activación). */
export const UNIT_ON: Record<UnitId, number> = (() => {
  const on = {} as Record<UnitId, number>;
  for (const u of UNITS) on[u.id] = Infinity;
  for (const s of ROUTE) if (s.kind === 'unit') for (const id of s.ids) on[id as UnitId] = Math.min(on[id as UnitId], s.t0);
  for (const [id, t] of Object.entries(AUX_ON)) on[id as UnitId] = Math.min(on[id as UnitId], t as number);
  return on;
})();

/** Ventana de llenado (frente) de cada tubería. */
export const PIPE_FILL: Record<string, { t0: number; t1: number }> = (() => {
  const w: Record<string, { t0: number; t1: number }> = {};
  for (const s of ROUTE) if (s.kind === 'pipe') for (const id of s.ids) w[id] = { t0: s.t0, t1: s.t1 };
  for (const l of SIDE_LINES) w[l.pipeId] = { t0: l.t0, t1: l.t1 };
  return w;
})();

export interface EvaluateOptions {
  /** Planta real: la cámara se encuadra con sus anclas/huellas (si no, con layout.ts). */
  plant?: Plant;
  /** Modo de iluminación (por defecto 'day'). 'story' = día → atardecer en función de t. */
  light?: LightMode;
}

/** Segmento del recorrido activo en t (o null fuera del recorrido). */
export function routeSegAt(t: number): { seg: RouteSeg; index: number; k: number } | null {
  for (let i = 0; i < ROUTE.length; i++) {
    const s = ROUTE[i];
    if (t >= s.t0 && t < s.t1) return { seg: s, index: i, k: (t - s.t0) / (s.t1 - s.t0) };
  }
  return null;
}

/** Unidades que deben estar encuadradas en t (unidad con la parcela o destino de la tubería). */
export function focusUnits(t: number): UnitId[] {
  // Tras la descarga, la cámara se abre a la vista general (clave de 47 s): hasta entonces, foco en DS-501.
  if (t >= ROUTE[ROUTE.length - 1].t1 && t < OVERVIEW_SETTLED) return ['discharge'];
  // Antes del ingreso la cámara está sobre el vertedero y la laguna (fuera de la planta): sin unidades foco.
  if (t < ROUTE[0].t0) return [];
  if (t >= ROUTE[ROUTE.length - 1].t1) return UNITS.map(u => u.id);
  const r = routeSegAt(t);
  if (!r) return [];
  if (r.seg.kind === 'unit') return r.seg.ids as UnitId[];
  const ids: UnitId[] = [];
  for (const pid of r.seg.ids) {
    const p = PIPES.find(pp => pp.id === pid)!;
    if (p.to !== 'world' && !ids.includes(p.to)) ids.push(p.to);
  }
  if (!ids.length) {
    const p = PIPES.find(pp => pp.id === r.seg.ids[0])!;
    if (p.from !== 'world') ids.push(p.from);
  }
  return ids;
}

function parcelAt(t: number): Parcel {
  const r = routeSegAt(t);
  if (!r) return { visible: false, pipeId: null, unitId: null, u: t < ROUTE[0].t0 ? 0 : 1, split: false };
  const split = r.seg.ids.length > 1;
  if (r.seg.kind === 'pipe') return { visible: true, pipeId: r.seg.ids[0], unitId: null, u: clamp(r.k), split };
  return { visible: true, pipeId: null, unitId: r.seg.ids[0] as UnitId, u: clamp(r.k), split };
}

function selectedAt(t: number): UnitId | null {
  let sel: UnitId | null = null;
  for (const c of CLICKS) if (t >= c.t) sel = c.unit;
  return sel;
}

function cursorAt(t: number): CursorState {
  const visible = t >= CURSOR_ON && t < CURSOR_OFF;
  let fromUnitId: UnitId | null = null;
  let unitId: UnitId | null = null;
  let travel = 1;
  let press = 0;
  for (let i = 0; i < CLICKS.length; i++) {
    const c = CLICKS[i];
    const start = c.t - CURSOR_TRAVEL;
    if (t >= start) {
      fromUnitId = i > 0 ? CLICKS[i - 1].unit : null;
      unitId = c.unit;
      travel = smoothstep(t, start, c.t - 0.15);
    }
    // Pulsación de clic: subida rápida, bajada lenta.
    if (t >= c.t - 0.08 && t < c.t + 0.55) press = t < c.t ? ramp(t, c.t - 0.08, c.t) : 1 - smoothstep(t, c.t, c.t + 0.55);
  }
  if (unitId === null) { travel = 0; }
  return { visible, unitId, travel, fromUnitId, press };
}

function phaseAt(t: number): PhaseId {
  for (const p of PHASES) if (t >= p.t0 && t < p.t1) return p.id;
  return 'F';
}

/** Progreso del tratamiento 0..1 (color ámbar → azul-verde de la parcela). */
export function treatmentProgress(t: number): number {
  return 0.35 * smoothstep(t, 23.0, 31.0) + 0.65 * smoothstep(t, 31.0, 42.4);
}

/** Progreso 0..1 del paso del rastreador i en t (para conectores). */
export function stageProgress(i: number, t: number): number {
  const w = STAGE_WINDOWS[i];
  return ramp(t, w.t0, w.t1);
}

export function evaluate(t: number, opts?: EvaluateOptions): SimState {
  const tc = clamp(t, 0, DURATION);
  const running = tc >= PLANT_RUN_T;

  const units = {} as Record<UnitId, UnitState>;
  for (const u of UNITS) {
    const on = UNIT_ON[u.id];
    const active = tc >= on;
    const standby = STANDBY_UNITS.includes(u.id);
    units[u.id] = {
      active,
      flow: active ? smoothstep(tc, on - 0.2, on + 1.5) : 0,
      motion: active ? smoothstep(tc, on, on + 2.5) : 0,
      status: active ? 'active' : running || standby ? 'standby' : 'idle',
    };
  }

  const selected = selectedAt(tc);
  const pipes: Record<string, PipeState> = {};
  for (const p of PIPES) {
    const w = PIPE_FILL[p.id];
    const front = w ? ramp(tc, w.t0, w.t1) : 0;
    const flow = w ? smoothstep(tc, w.t0, w.t1 + 1.5) : 0;
    const highlight = selected !== null && (p.from === selected || p.to === selected);
    pipes[p.id] = { flow, front, highlight };
  }

  let trackerIndex = -1;
  const trackerDone = {} as Record<StageId, boolean>;
  STAGE_WINDOWS.forEach((w, i) => {
    if (tc >= w.t0 && tc < w.t1) trackerIndex = i;
    trackerDone[w.id] = tc >= w.t1;
  });

  const light = lightingAt(tc, opts?.light ?? 'day');
  const defs = opts?.light === 'story' ? [...ALERT_DEFS, LIGHT_ALERT].sort((a, b) => a.t - b.t) : ALERT_DEFS;
  const alerts: Alert[] = defs.filter(a => tc >= a.t).map(a => ({ id: a.id, t: a.t, level: a.level, text: { ...a.text } }));
  const cap = CAPTIONS.find(c => tc >= c.t0 && tc < c.t1);
  const plantState: PlantState = running ? 'Active' : 'Stable';

  return {
    t: tc,
    duration: DURATION,
    phase: phaseAt(tc),
    trackerIndex,
    trackerDone,
    units,
    pipes,
    parcel: parcelAt(tc),
    selected,
    alerts,
    camera: cameraStory(tc, opts?.plant),
    cursor: cursorAt(tc),
    plantState,
    caption: cap ? { ...cap.text } : null,
    logistics: logisticsAt(tc),
    lighting: light,
  };
}

/** Comprobación interna: los pasos del rastreador cubren las unidades de STAGES. */
export const STAGE_ORDER: StageId[] = STAGES.map(s => s.id);
