/**
 * Coreografía de personas y camiones — función PURA de t (y de la geometría de rutas del Agente A).
 * Sin Math.random ni estado oculto: evaluateActors(t, routes) → poses. Segura en bucle: la pose en t = 50
 * coincide con la de t = 0 (los camiones están fuera del sitio en ambos extremos).
 *
 * Hipótesis visual de la Fase 2: no hay datos de turnos, dotación ni logística. Las cantidades mostradas
 * (totes IBC, personas) son las que se ven en pantalla, no datos de operación.
 */
import * as THREE from 'three';
import type { Actors, ActorRoute, TruckKind, WorkerAction } from '../plant/types';
import type { LogisticsState, TruckPhase } from '../sim/state';
import { ROAD, UNIT_BY_ID } from '../plant/layout';
import { clamp, smoothstep } from '../sim/signals';

export const ACTORS_DURATION = 50;

/** Personas en planta (las 8 rutas de layout.ts). */
export const WORKER_IDS = ['w-operator', 'w-uasb', 'w-bed-a', 'w-bed-b', 'w-unload', 'w-mbbr', 'w-patrol', 'w-screen'] as const;
export type WorkerId = typeof WORKER_IDS[number];

/** Totes IBC entregados por el camión de químicos (número = lo que se ve en el camión al llegar). */
export const TOTES = 3;
/** Huecos de totes del camión de químicos (el rig muestra n = round(4·load)). */
export const TRUCK_TOTE_SLOTS = 4;
/** Longitud de zancada nominal (m por ciclo de paso = 2 pasos). */
export const STRIDE = 1.35;
/** Velocidad de marcha nominal (m/s) y con transpaleta (m/s). */
const WALK = 1.2;
const PUSH = 1.05;
/** Radio de rueda de camión (m) para wheelTurns. */
const WHEEL_R = 0.48;
/** Batalla (m): el eje delantero sigue la ruta por delante del trasero → rumbo = cuerda entre ejes. */
const WHEELBASE = 4.2;

function truckHeading(route: ActorRoute, u: number): number {
  const L = route.length;
  const s = u * L;
  if (L <= 0) return route.headingAt(u);
  const a = route.pointAt(u);
  const b = route.pointAt(Math.min(1, (s + WHEELBASE) / L));
  const dx = b.x - a.x, dz = b.z - a.z;
  const rem = L - s;
  const tang = smoothHeading(route, Math.min(1, u), 1.0);
  if (dx * dx + dz * dz < 1e-6) return tang;
  const chord = Math.atan2(dx, dz);
  // Cerca del final de la ruta la cuerda se acorta: se mezcla con la tangente final.
  const k = clamp(rem / WHEELBASE);
  return wrapAngle(lerpAngle(tang, chord, k));
}

// ———————————————————— Camiones (ventanas fijas) ————————————————————

interface TruckPlan {
  arrive: { route: string; t0: number; t1: number };
  /** Maniobra (plataforma/tolva): sube t0→t1, baja t2→t3. */
  work: [number, number, number, number];
  leave: { route: string; t0: number; t1: number };
}

/**
 * La vía es un lazo de un solo sentido (layout.ts → ROAD): ambos camiones comparten carril. El de lodos
 * entra primero (su parada está más adelante, en el tramo sur) y sale primero; el de químicos lo sigue
 * a distancia y sale cuando el tramo sur ya está libre.
 */
export const TRUCK_PLAN: Record<TruckKind, TruckPlan> = {
  // Fase 3: ambos llegan por la vía externa desde el vertedero (aparecen fuera de cuadro, x = −96) y vuelven hacia él.
  sludge: { arrive: { route: 'sludge-arrive', t0: 0.05, t1: 13.6 }, work: [14.0, 14.8, 36.4, 37.2], leave: { route: 'sludge-leave', t0: 37.4, t1: 46.0 } },
  chemical: { arrive: { route: 'chem-arrive', t0: 2.6, t1: 13.8 }, work: [14.1, 15.0, 38.2, 39.0], leave: { route: 'chem-leave', t0: 39.2, t1: 49.8 } },
};
/** Carga final de la tolva de lodos (fracción visible). */
export const SLUDGE_LOAD_MAX = 0.85;
const SLUDGE_LOAD_T: [number, number] = [15.0, 36.2];

export function truckPhaseAt(kind: TruckKind, t: number): TruckPhase {
  const p = TRUCK_PLAN[kind];
  if (t < p.arrive.t0 || t >= p.leave.t1) return 'away';
  if (t < p.arrive.t1) return 'enroute';
  if (t >= p.leave.t0) return 'leaving';
  if (t >= p.work[1] && t < p.work[2]) return kind === 'chemical' ? 'unloading' : 'loading';
  return 'bay';
}

export function logisticsAt(t: number): LogisticsState {
  return { personnel: WORKER_IDS.length, trucks: { chemical: truckPhaseAt('chemical', t), sludge: truckPhaseAt('sludge', t) } };
}

type Bi = { es: string; en: string };
export const LOGISTICS_ALERTS: { t: number; id: string; level: 'info' | 'notice'; text: Bi }[] = [
  { t: TRUCK_PLAN.chemical.arrive.t1, id: 'truck-chem', level: 'info', text: { es: 'Camión de químicos en bahía', en: 'Chemical truck at the bay' } },
  { t: TRUCK_PLAN.chemical.work[1], id: 'truck-chem-unload', level: 'info', text: { es: `Entrega de coagulante · ${TOTES} IBC`, en: `Coagulant delivery · ${TOTES} IBC` } },
  { t: TRUCK_PLAN.sludge.work[1], id: 'truck-sludge', level: 'info', text: { es: 'Camión de lodos en carga', en: 'Sludge truck loading' } },
  { t: TRUCK_PLAN.sludge.leave.t0, id: 'truck-sludge-out', level: 'info', text: { es: 'Camión de lodos sale con torta', en: 'Sludge truck leaves with cake' } },
];

/** Perfil trapezoidal normalizado (aceleración y frenado suaves, velocidad nula en extremos). */
function trapezoid(k: number, a = 0.22): number {
  const x = clamp(k);
  const vmax = 1 / (1 - a);
  if (x < a) return (vmax * x * x) / (2 * a);
  if (x > 1 - a) return 1 - (vmax * (1 - x) * (1 - x)) / (2 * a);
  return vmax * (a / 2 + (x - a));
}

// ———————————————————— Personas (programas secuenciales) ————————————————————

type URef = number | 'a' | 'b' | { near: [number, number] } | { far: [number, number] };
type FaceRef = [number, number] | 'keep';

type Step =
  | { walk: URef; carry?: boolean; speed?: number; /** llegar a más tardar en este instante (alarga la espera previa) */ arriveBy?: number }
  | { act: WorkerAction; until?: number; dur?: number; face?: FaceRef }
  /** Repite el bloque mientras la iteración completa termine antes de `until`. */
  | { repeat: Step[]; until: number; max?: number };

interface Program { route: string; start: URef; steps: Step[]; loop?: false }
interface PatrolProgram { route: string; loop: true; speed: number; dwell: number }

const P = (id: Parameters<typeof pos2>[0]) => pos2(id);
function pos2(id: keyof typeof UNIT_BY_ID): [number, number] { return UNIT_BY_ID[id].pos; }

/** Guion de cada persona (ver docs/SHOTS.md §Actores). */
function programs(): Record<WorkerId, Program | PatrolProgram> {
  const bay: [number, number] = [ROAD.chemStop.x, ROAD.chemStop.z];
  const unloadSteps: Step[] = [{ act: 'idle', until: TRUCK_PLAN.chemical.work[1] + 0.1, face: bay }];
  for (let i = 0; i < TOTES; i++) {
    unloadSteps.push({ walk: { far: P('control') }, speed: WALK });
    unloadSteps.push({ act: 'operate', dur: 0.8, face: 'keep' });
    unloadSteps.push({ walk: { near: P('control') }, carry: true, speed: PUSH });
    unloadSteps.push({ act: 'idle', dur: 0.5, face: 'keep' });
  }
  unloadSteps.push({ act: 'idle', until: ACTORS_DURATION, face: bay });
  return {
    'w-screen': { route: 'w-screen', start: { near: P('screen') }, steps: [
      { act: 'idle', until: 1.0, face: P('screen') },
      { act: 'rake', until: 6.6, face: P('screen') },
      { walk: { far: P('screen') } },
      { act: 'inspect', dur: 3.0, face: 'keep' },
      { walk: { near: P('screen') } },
      { act: 'rake', until: 21.0, face: P('screen') },
      { act: 'idle', until: 26.0, face: P('screen') },
      { walk: { far: P('screen') } },
      { act: 'inspect', dur: 4.0, face: 'keep' },
      { walk: { near: P('screen') } },
      { act: 'rake', until: 44.0, face: P('screen') },
      { act: 'idle', until: ACTORS_DURATION, face: P('screen') },
    ] },
    'w-operator': { route: 'w-operator', start: { near: P('control') }, steps: [
      { act: 'idle', dur: 0.5, face: P('dosC') },
      { walk: { near: P('dosC') }, arriveBy: 6.0 },
      { act: 'operate', until: 8.2, dur: 1.8, face: P('dosC') },
      { walk: { near: P('dosF') } },
      { act: 'operate', until: 10.8, dur: 2.2, face: P('dosF') },
      { walk: { near: P('coag') } },
      { act: 'inspect', dur: 4.0, face: P('coag') },
      { walk: { near: P('control') } },
      { act: 'idle', until: 30.0, face: P('dosC') },
      { walk: { near: P('dosF') } },
      { act: 'inspect', dur: 3.0, face: P('dosF') },
      { walk: { near: P('control') } },
      { act: 'idle', until: ACTORS_DURATION, face: P('dosC') },
    ] },
    'w-unload': { route: 'w-unload', start: { near: P('control') }, steps: unloadSteps },
    'w-bed-a': { route: 'w-bed-a', start: { near: P('sludge') }, steps: [
      { act: 'shovel', until: 12.0, face: P('sludge') },
      { repeat: [
        { walk: { far: P('sludge') } },
        { act: 'shovel', dur: 2.4, face: 'keep' },
        { walk: { near: P('sludge') } },
        { act: 'shovel', dur: 3.6, face: P('sludge') },
      ], until: 37.5, max: 4 },
      { act: 'shovel', until: ACTORS_DURATION, face: P('sludge') },
    ] },
    'w-bed-b': { route: 'w-bed-b', start: { near: P('sludge') }, steps: [
      { act: 'rake', until: 11.0, face: P('sludge') },
      { walk: { far: P('sludge') } },
      { act: 'inspect', dur: 3.0, face: 'keep' },
      { walk: { near: P('sludge') } },
      { act: 'rake', until: 30.0, face: P('sludge') },
      { walk: { far: P('sludge') } },
      { act: 'inspect', dur: 2.5, face: 'keep' },
      { walk: { near: P('sludge') } },
      { act: 'rake', until: ACTORS_DURATION, face: P('sludge') },
    ] },
    'w-uasb': { route: 'w-uasb', start: 'a', steps: [
      { act: 'idle', dur: 1.5, face: P('uasb1') },
      { walk: { near: P('uasb2') }, arriveBy: 24.0 },
      { act: 'sample', until: 30.0, face: P('uasb2') },
      { walk: { near: P('uasb3') } },
      { act: 'inspect', dur: 2.0, face: P('uasb3') },
      { walk: 'a' },
      { act: 'idle', until: ACTORS_DURATION, face: P('uasb1') },
    ] },
    'w-mbbr': { route: 'w-mbbr', start: { near: P('mbbr') }, steps: [
      { act: 'inspect', until: 12.0, face: P('mbbr') },
      { act: 'idle', dur: 1.0, face: P('mbbr') },
      { walk: { far: P('mbbr') }, arriveBy: 33.0 },
      { act: 'inspect', until: 37.0, face: 'keep' },
      { walk: { near: P('mbbr') } },
      { act: 'inspect', until: ACTORS_DURATION, face: P('mbbr') },
    ] },
    'w-patrol': { route: 'w-patrol', loop: true, speed: 0.8, dwell: 1.2 },
  };
}

// ——— Compilación (memorizada por objeto de rutas) ———

interface WalkSeg { kind: 'walk'; t0: number; t1: number; u0: number; u1: number; dist: number; carry: boolean; g0: number; cycles: number; d0: number; h0: number }
interface ActSeg { kind: 'act'; t0: number; t1: number; u: number; action: WorkerAction; h0: number; h1: number; g: number; d: number }
type Seg = WalkSeg | ActSeg;

export interface CompiledWorker {
  id: WorkerId;
  route: string;
  segs: Seg[];
  /** Instante en que termina el guion (debe ser ≤ 50 s). */
  end: number;
  patrol?: { laps: number; walkT: number; dwell: number; closed: boolean; cyclesPerLeg: number; legLen: number };
}

const TAU = Math.PI * 2;
const wrapAngle = (a: number) => { let x = (a + Math.PI) % TAU; if (x < 0) x += TAU; return x - Math.PI; };
const lerpAngle = (a: number, b: number, k: number) => a + wrapAngle(b - a) * k;

function nearestU(route: ActorRoute, x: number, z: number, far = false): number {
  let best = 0, bd = far ? -Infinity : Infinity;
  const N = 400;
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    const p = route.pointAt(u);
    const d = (p.x - x) ** 2 + (p.z - z) ** 2;
    if (far ? d > bd : d < bd) { bd = d; best = u; }
  }
  return best;
}

function resolveU(route: ActorRoute, r: URef): number {
  if (typeof r === 'number') return clamp(r);
  if (r === 'a') return 0;
  if (r === 'b') return 1;
  if ('near' in r) return nearestU(route, r.near[0], r.near[1]);
  // 'far': el extremo de la ruta más alejado del punto (p. ej. lado camión vs lado caseta).
  const a = route.pointAt(0), b = route.pointAt(1);
  const da = (a.x - r.far[0]) ** 2 + (a.z - r.far[1]) ** 2, db = (b.x - r.far[0]) ** 2 + (b.z - r.far[1]) ** 2;
  return da >= db ? 0 : 1;
}

function faceHeading(route: ActorRoute, u: number, f: FaceRef | undefined, arrival: number): number {
  if (!f || f === 'keep') return arrival;
  const p = route.pointAt(u);
  const dx = f[0] - p.x, dz = f[1] - p.z;
  if (dx * dx + dz * dz < 1e-4) return arrival;
  return Math.atan2(dx, dz);
}

/**
 * Rumbo suavizado: dirección de la cuerda entre u−δ y u+δ (δ en metros). Redondea los codos de la
 * polilínea para que el giro dure ≈ 2δ de recorrido en vez de un salto de 90°.
 */
function smoothHeading(route: ActorRoute, u: number, delta: number): number {
  const du = route.length > 0 ? delta / route.length : 0;
  const a = route.pointAt(clamp(u - du)), b = route.pointAt(clamp(u + du));
  const dx = b.x - a.x, dz = b.z - a.z;
  if (dx * dx + dz * dz < 1e-8) return route.headingAt(clamp(u));
  return Math.atan2(dx, dz);
}

function walkHeading(route: ActorRoute, u: number, forward: boolean): number {
  const h = smoothHeading(route, u, 0.55);
  return forward ? h : wrapAngle(h + Math.PI);
}

function compileProgram(id: WorkerId, prog: Program, route: ActorRoute): CompiledWorker {
  const segs: Seg[] = [];
  let t = 0;
  let u = resolveU(route, prog.start);
  let h = route.headingAt(u);
  let gait = 0, dist = 0;
  let first = true;
  const run = (st: Step): void => {
    if ('repeat' in st) {
      for (let i = 0; i < (st.max ?? 99); i++) {
        const snap = { n: segs.length, t, u, h, gait, dist, first };
        for (const s2 of st.repeat) run(s2);
        if (t > st.until) { segs.length = snap.n; ({ t, u, h, gait, dist, first } = snap); break; }
      }
      return;
    }
    if ('walk' in st) {
      const u1 = resolveU(route, st.walk);
      const d = Math.abs(u1 - u) * route.length;
      if (d < 1e-3) return;
      const dur = d / (st.speed ?? WALK);
      if (st.arriveBy != null && t + dur < st.arriveBy) {
        // Alarga la acción previa para llegar justo a tiempo.
        const prev = segs[segs.length - 1];
        const t0 = st.arriveBy - dur;
        if (prev && prev.kind === 'act') { prev.t1 = t0; }
        t = t0;
      }
      const cycles = Math.max(1, Math.round(d / STRIDE));
      segs.push({ kind: 'walk', t0: t, t1: t + dur, u0: u, u1, dist: d, carry: !!st.carry, g0: gait, cycles, d0: dist, h0: h });
      t += dur; gait += cycles; dist += d;
      h = walkHeading(route, u1, u1 > u);
      u = u1;
    } else {
      const t1 = Math.max(t + (st.dur ?? 0), st.until ?? 0);
      if (t1 <= t) return;
      const h1 = faceHeading(route, u, st.face, h);
      segs.push({ kind: 'act', t0: t, t1, u, action: st.act, h0: first ? h1 : h, h1, g: gait, d: dist });
      t = t1; h = h1;
    }
    first = false;
  };
  for (const st of prog.steps) run(st);
  return { id, route: prog.route, segs, end: t };
}

function compilePatrol(id: WorkerId, prog: PatrolProgram, route: ActorRoute): CompiledWorker {
  const a = route.pointAt(0), b = route.pointAt(1);
  const closed = a.distanceTo(b) < 0.3;
  const legLen = route.length;
  // Ronda cerrada: una vuelta por tramo; abierta: ida y vuelta con pausa en cada extremo.
  const legsPerLap = closed ? 1 : 2;
  const lapT = legsPerLap * (legLen / prog.speed + prog.dwell);
  const laps = Math.max(1, Math.round(ACTORS_DURATION / lapT));
  const legT = ACTORS_DURATION / laps / legsPerLap;
  const walkT = Math.max(0.5, legT - prog.dwell);
  const cyclesPerLeg = Math.max(1, Math.round(legLen / STRIDE));
  return { id, route: prog.route, segs: [], end: ACTORS_DURATION, patrol: { laps, walkT, dwell: legT - walkT, closed, cyclesPerLeg, legLen } };
}

export interface ActorsPlan { workers: CompiledWorker[]; routes: Record<string, ActorRoute> }

const planCache = new WeakMap<object, ActorsPlan>();

export function compileActors(routes: Record<string, ActorRoute>): ActorsPlan {
  let plan = planCache.get(routes);
  if (plan) return plan;
  const progs = programs();
  const workers: CompiledWorker[] = [];
  for (const id of WORKER_IDS) {
    const pr = progs[id];
    const r = routes[pr.route];
    if (!r || !(r.length > 0)) continue;
    workers.push(pr.loop ? compilePatrol(id, pr, r) : compileProgram(id, pr, r));
  }
  plan = { workers, routes };
  planCache.set(routes, plan);
  return plan;
}

// ———————————————————— Evaluación ————————————————————

export interface WorkerPose {
  id: WorkerId;
  visible: boolean;
  pos: [number, number, number];
  heading: number;
  action: WorkerAction;
  /** Fase 0..1 de la acción (cíclica; periodos que dividen 50 s → continua en el bucle). */
  phase: number;
  /** Fase de paso acumulada (ciclos enteros en cada parada). */
  gait: number;
  /** Distancia recorrida acumulada (m) — validación de deslizamiento de pies. */
  dist: number;
  moving: boolean;
  carrying: boolean;
}

export interface TruckPose {
  kind: TruckKind;
  visible: boolean;
  pos: [number, number, number];
  heading: number;
  wheelTurns: number;
  load: number;
  work: number;
  beacon: boolean;
  phase: TruckPhase;
  /** Ruta en uso (null = fuera del sitio). */
  route: string | null;
  dist: number;
}

export interface ActorsFrame {
  t: number;
  workers: WorkerPose[];
  trucks: Record<TruckKind, TruckPose>;
  carriedTote: WorkerId | null;
  stockedTotes: number;
  totesOnTruck: number;
}

/** Periodos de acción (s): divisores de 50 s, para que la fase sea continua al reiniciar el bucle. */
const ACTION_PERIOD: Record<WorkerAction, number> = {
  idle: 50 / 10, walk: 1, carry: 1, inspect: 50 / 12, shovel: 50 / 32, rake: 50 / 28, operate: 50 / 20, sample: 50 / 16,
};
const frac = (x: number) => x - Math.floor(x);
const v3 = (p: THREE.Vector3): [number, number, number] => [p.x, p.y, p.z];

function evalWorker(w: CompiledWorker, route: ActorRoute, t: number): WorkerPose {
  if (w.patrol) return evalPatrol(w, route, t);
  const segs = w.segs;
  let s: Seg = segs[segs.length - 1];
  for (const sg of segs) if (t < sg.t1) { s = sg; break; }
  if (s.kind === 'walk') {
    const k = s.t1 > s.t0 ? clamp((t - s.t0) / (s.t1 - s.t0)) : 1;
    const u = s.u0 + (s.u1 - s.u0) * k;
    const fwd = s.u1 > s.u0;
    const target = walkHeading(route, u, fwd);
    // Giro inicial con sentido fijado al arrancar (evita que ±π alterne entre cuadros).
    const off = wrapAngle(s.h0 - walkHeading(route, s.u0, fwd));
    const heading = wrapAngle(target + off * (1 - smoothstep(t, s.t0, s.t0 + 0.45)));
    const gait = s.g0 + s.cycles * k;
    return {
      id: w.id, visible: true, pos: v3(route.pointAt(u)), heading, action: s.carry ? 'carry' : 'walk', phase: frac(gait), gait,
      dist: s.d0 + s.dist * k, moving: k > 0 && k < 1, carrying: s.carry,
    };
  }
  const heading = wrapAngle(lerpAngle(s.h0, s.h1, smoothstep(t, s.t0, s.t0 + 0.6)));
  const ph = frac(t / ACTION_PERIOD[s.action]);
  return { id: w.id, visible: true, pos: v3(route.pointAt(s.u)), heading, action: s.action, phase: ph, gait: s.g, dist: s.d, moving: false, carrying: false };
}

function evalPatrol(w: CompiledWorker, route: ActorRoute, t0: number): WorkerPose {
  const p = w.patrol!;
  const legT = p.walkT + p.dwell;
  // Desfase de medio tramo: en t = 0 y t = 50 la ronda está en el mismo punto (periodo exacto de 50 s).
  const tu = t0 + p.walkT * 0.5;
  const wraps = Math.floor(tu / ACTORS_DURATION);
  const t = tu - wraps * ACTORS_DURATION;
  const legsTotal = Math.round(ACTORS_DURATION / legT);
  const n = Math.min(Math.floor(t / legT), Math.round(ACTORS_DURATION / legT) - 1);
  const local = t - n * legT;
  const forward = p.closed || n % 2 === 0;
  const k = clamp(local / p.walkT);
  const u = forward ? k : 1 - k;
  // Paso y distancia «desenrollados» (monótonos) aunque la ronda se reinicie en el bucle.
  const gait = (wraps * legsTotal + n) * p.cyclesPerLeg + p.cyclesPerLeg * k;
  const walking = local < p.walkT;
  const h = walkHeading(route, u, forward);
  // En la pausa del extremo gira suavemente para el tramo siguiente.
  const nextForward = p.closed || (n + 1) % 2 === 0;
  const hNext = walkHeading(route, nextForward ? 0 : 1, nextForward);
  const heading = walking ? h : wrapAngle(lerpAngle(h, hNext, smoothstep(local, p.walkT + 0.1, legT - 0.1)));
  return {
    id: w.id, visible: true, pos: v3(route.pointAt(u)), heading, action: walking ? 'walk' : 'inspect',
    phase: walking ? frac(gait) : frac(t0 / ACTION_PERIOD.inspect), gait, dist: (wraps * legsTotal + n + k) * p.legLen, moving: walking && k > 0 && k < 1, carrying: false,
  };
}

function evalTruck(kind: TruckKind, routes: Record<string, ActorRoute>, t: number, totesOnTruck: number): TruckPose {
  const plan = TRUCK_PLAN[kind];
  const ra = routes[plan.arrive.route], rl = routes[plan.leave.route];
  const phase = truckPhaseAt(kind, t);
  // El volteo de lodos se carga con la caja horizontal (no bascula en la planta: vacía en el vertedero).
  const work = kind === 'sludge' ? 0 : smoothstep(t, plan.work[0], plan.work[1]) * (1 - smoothstep(t, plan.work[2], plan.work[3]));
  const load = kind === 'chemical' ? totesOnTruck / TRUCK_TOTE_SLOTS : SLUDGE_LOAD_MAX * smoothstep(t, SLUDGE_LOAD_T[0], SLUDGE_LOAD_T[1]);
  const base = { kind, work, load, phase };
  if (!ra || !rl) return { ...base, visible: false, pos: [0, -50, 0], heading: 0, wheelTurns: 0, beacon: false, route: null, dist: 0 };
  let route: ActorRoute, u: number, dist: number, name: string;
  if (t < plan.leave.t0) {
    u = trapezoid((t - plan.arrive.t0) / (plan.arrive.t1 - plan.arrive.t0), 0.18);
    route = ra; name = plan.arrive.route; dist = u * ra.length;
  } else {
    u = trapezoid((t - plan.leave.t0) / (plan.leave.t1 - plan.leave.t0), 0.18);
    route = rl; name = plan.leave.route; dist = ra.length + u * rl.length;
  }
  const moving = phase === 'enroute' || phase === 'leaving';
  return {
    ...base, visible: phase !== 'away', pos: v3(route.pointAt(u)), heading: truckHeading(route, u),
    wheelTurns: dist / (TAU * WHEEL_R), beacon: moving, route: phase === 'away' ? null : name, dist,
  };
}

let defaultRoutes: Record<string, ActorRoute> | null = null;
/** Rutas por defecto (si la planta aún no tiene actores): las del respaldo de desarrollo. */
export function setDefaultActorRoutes(r: Record<string, ActorRoute>): void { defaultRoutes = r; }

/** Poses de todos los actores en t (función pura de t y de las rutas). */
export function evaluateActors(t: number, routes?: Record<string, ActorRoute>): ActorsFrame {
  const tc = clamp(t, 0, ACTORS_DURATION);
  const R = routes ?? defaultRoutes ?? {};
  const plan = compileActors(R);
  const workers: WorkerPose[] = [];
  let carried: WorkerId | null = null;
  let picked = 0, delivered = 0;
  for (const w of plan.workers) {
    const pose = evalWorker(w, R[w.route], tc);
    workers.push(pose);
    if (w.id === 'w-unload') {
      for (const s of w.segs) if (s.kind === 'walk' && s.carry) {
        if (tc >= s.t0) picked++;
        if (tc >= s.t1) delivered++;
        if (tc >= s.t0 && tc < s.t1) carried = w.id;
      }
    }
  }
  const totesOnTruck = TOTES - picked;
  return {
    t: tc,
    workers,
    trucks: { chemical: evalTruck('chemical', R, tc, totesOnTruck), sludge: evalTruck('sludge', R, tc, totesOnTruck) },
    carriedTote: carried,
    stockedTotes: delivered,
    totesOnTruck,
  };
}

// ———————————————————— Aplicación a los rigs del Agente A ————————————————————

const tmpV = new THREE.Vector3();
const rigMap = new WeakMap<Actors, Map<string, number>>();

/** Asocia cada pose a su rig: por id (con o sin prefijo «w-») y, si no coincide, por orden. */
function rigIndex(actors: Actors): Map<string, number> {
  let m = rigMap.get(actors);
  if (m) return m;
  m = new Map();
  const used = new Set<number>();
  WORKER_IDS.forEach(id => {
    const i = actors.workers.findIndex(w => w.id === id || `w-${w.id}` === id || w.id === id.slice(2));
    if (i >= 0) { m!.set(id, i); used.add(i); }
  });
  let next = 0;
  WORKER_IDS.forEach(id => {
    if (m!.has(id)) return;
    while (used.has(next)) next++;
    if (next < actors.workers.length) { m!.set(id, next); used.add(next); }
  });
  rigMap.set(actors, m);
  return m;
}

export function applyActorsFrame(actors: Actors, f: ActorsFrame): void {
  const idx = rigIndex(actors);
  const seen = new Set<number>();
  for (const w of f.workers) {
    const i = idx.get(w.id);
    if (i == null) continue;
    const rig = actors.workers[i];
    seen.add(i);
    rig.setVisible(w.visible);
    rig.setPose(tmpV.set(w.pos[0], w.pos[1], w.pos[2]), w.heading);
    rig.setAction(w.action, w.phase, w.gait);
  }
  actors.workers.forEach((r, i) => { if (!seen.has(i)) r.setVisible(false); });
  for (const kind of ['chemical', 'sludge'] as TruckKind[]) {
    const rig = actors.trucks[kind];
    const p = f.trucks[kind];
    if (!rig) continue;
    rig.setVisible(p.visible);
    rig.setPose(tmpV.set(p.pos[0], p.pos[1], p.pos[2]), p.heading, p.wheelTurns);
    rig.setLoad(p.load);
    rig.setWork(p.work);
    rig.setBeacon(p.beacon, f.t);
  }
  const ci = f.carriedTote ? idx.get(f.carriedTote) : undefined;
  actors.setCarriedTote(ci != null ? actors.workers[ci].id : null);
  actors.setStockedTotes(f.stockedTotes);
  actors.update(f.t);
}
