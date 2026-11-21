/**
 * Guion de cámara: dirección FIJA (CAMERA_DIR), solo pan (objetivo), dolly (distancia) y zoom (fov).
 * Los encuadres se calculan a partir de las huellas/anclas de la planta (o de layout.ts si no hay planta),
 * de modo que si el Agente A mueve unidades, los planos siguen encuadrando lo correcto.
 * Interpolación: smootherstep entre fotogramas clave (C1/C2, velocidad nula en cada clave → pausa natural).
 */
import type { Plant, UnitId } from '../plant/types';
import type { CameraShot } from '../sim/state';
import { CAMERA_DIR, INLET_POINT, LANDFILL, POND, ROAD, UNITS, UNIT_BY_ID, WETLAND } from '../plant/layout';
import { lerp, smootherstep } from '../sim/signals';

export const ASPECT = 16 / 9;

/**
 * Región segura en coordenadas del escenario 1920×1080 (fuera de columnas KPI/detalle,
 * barra superior y rastreador inferior). Debe coincidir con el layout del overlay (ui/styles.ts).
 */
export const SAFE_PX = { x0: 364, x1: 1556, y0: 92, y1: 840 };
export const STAGE_W = 1920;
export const STAGE_H = 1080;

/** Región segura en NDC: centro (bx, by) y semiejes (hx, hy). */
export const SAFE_NDC = (() => {
  const x0 = (SAFE_PX.x0 / STAGE_W) * 2 - 1, x1 = (SAFE_PX.x1 / STAGE_W) * 2 - 1;
  const y0 = 1 - (SAFE_PX.y1 / STAGE_H) * 2, y1 = 1 - (SAFE_PX.y0 / STAGE_H) * 2;
  return { bx: (x0 + x1) / 2, by: (y0 + y1) / 2, hx: (x1 - x0) / 2, hy: (y1 - y0) / 2 };
})();

type V3 = [number, number, number];
const norm = (v: readonly number[]): V3 => { const l = Math.hypot(v[0], v[1], v[2]); return [v[0] / l, v[1] / l, v[2] / l]; };
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot = (a: readonly number[], b: readonly number[]) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

/**
 * Encuadre activo (fase 5): por defecto el lienzo 16:9 con la región segura del overlay; el modo vertical
 * para redes (?social=1) fija otro aspecto y otra región segura con setFraming().
 */
let FRAME = { aspect: ASPECT, safe: SAFE_NDC as { bx: number; by: number; hx: number; hy: number } };
export function setFraming(aspect: number, safe: { bx: number; by: number; hx: number; hy: number }): void {
  FRAME = { aspect, safe };
  cache = new WeakMap(); overviewCache = new WeakMap();
}

/** Base de cámara constante: dir (objetivo→cámara), forward, right, up. */
export const CAM_BASIS = (() => {
  const dir = norm(CAMERA_DIR);
  const fwd: V3 = [-dir[0], -dir[1], -dir[2]];
  const right = norm(cross(fwd, [0, 1, 0]));
  const up = cross(right, fwd);
  return { dir, fwd, right, up };
})();

const ALL: UnitId[] = UNITS.map(u => u.id);
const UASB: UnitId[] = ['uasb1', 'uasb2', 'uasb3', 'uasb4'];

/** Puntos extra de encuadre: paradas de camiones (fin de ruta de llegada) y portón. */
type Extra = 'chemBay' | 'sludgeBay' | 'gate' | 'landfill' | 'pond' | 'wetland';
interface Key { t: number; units: UnitId[] | 'ALL'; fov: number; minDist: number; wide?: number; extra?: Extra[] }

/** Fotogramas clave del guion (ver docs/SHOTS.md). */
export const CAMERA_KEYS: Key[] = [
  // 0 · origen: lluvia sobre el vertedero → canal → laguna → bombeo a la cámara de llegada
  { t: 0.0, units: [], fov: 30, minDist: 22, extra: ['landfill'] },
  { t: 0.6, units: [], fov: 30, minDist: 22, extra: ['landfill'] },
  { t: 3.2, units: ['screen'], fov: 29, minDist: 18, extra: ['pond'] },
  // A · cribado + llegada del camión de químicos + caseta/dosificación
  { t: 4.6, units: ['screen', 'homog', 'dosC', 'coag'], fov: 28, minDist: 17 },
  { t: 7.4, units: ['homog', 'dosC', 'dosF', 'coag', 'floc', 'clar1', 'control'], fov: 28, minDist: 17 },
  // B · CL-101 → espesador → lecho cubierto; camión de lodos en ruta
  { t: 10.0, units: ['floc', 'clar1', 'thick', 'sludge'], fov: 27, minDist: 17 },
  { t: 12.8, units: ['clar1', 'thick', 'sludge', 'control'], fov: 27, minDist: 17, extra: ['sludgeBay', 'chemBay'] },
  { t: 14.4, units: ['clar1', 'thick', 'sludge', 'control'], fov: 27, minDist: 17, extra: ['sludgeBay', 'chemBay'] },
  { t: 16.4, units: ['clar1', 'inter', 'pump', 'pumpB'], fov: 27, minDist: 17 },
  // C · bombeo y reparto
  { t: 18.4, units: ['inter', 'pump', 'pumpB', ...UASB], fov: 28, minDist: 18 },
  { t: 21.0, units: ['pump', ...UASB], fov: 27, minDist: 18 },
  // D · UASB, biogás y antorcha
  { t: 23.8, units: [...UASB], fov: 26, minDist: 17 },
  { t: 26.6, units: [...UASB, 'flare'], fov: 27, minDist: 17 },
  { t: 29.4, units: [...UASB, 'clar2'], fov: 26, minDist: 17 },
  // E · CL-201, MBBR, filtro, descarga
  { t: 31.8, units: ['uasb4', 'clar2', 'mbbr'], fov: 27, minDist: 17 },
  { t: 33.8, units: ['clar2', 'mbbr'], fov: 26, minDist: 16 },
  { t: 36.0, units: ['mbbr', 'filtro'], fov: 27, minDist: 17 },
  { t: 38.8, units: ['mbbr', 'filtro', 'discharge'], fov: 28, minDist: 17 },
  { t: 41.6, units: ['filtro', 'discharge'], fov: 27, minDist: 17 },
  // F · el agua tratada vuelve al humedal (fase 5) y vista general con todo
  { t: 44.4, units: ['discharge'], fov: 28, minDist: 18, extra: ['wetland'] },
  { t: 45.2, units: ['discharge'], fov: 28, minDist: 18, extra: ['wetland'] },
  { t: 48.6, units: 'ALL', fov: 31, minDist: 20, wide: 1.04, extra: ['gate', 'wetland'] },
  { t: 50.0, units: 'ALL', fov: 31, minDist: 20, wide: 1.04, extra: ['gate', 'wetland'] },
];

/** Unidades de las claves que enmarcan t (para etiquetas auxiliares). */
export function shotUnitsAt(t: number): UnitId[] {
  const K = CAMERA_KEYS;
  let i = 0;
  while (i < K.length - 1 && K[i + 1].t <= t) i++;
  const j = Math.min(K.length - 1, i + 1);
  const set = new Set<UnitId>();
  for (const k of [K[i], K[j]]) for (const id of k.units === 'ALL' ? ALL : k.units) set.add(id);
  return [...set];
}

function extraPoints(e: Extra, plant?: Plant): V3[] {
  if (e === 'landfill') {
    const L = LANDFILL, top = 2 * L.tierH;
    return [[L.minX + 6, 0, L.maxZ + 1.5], [L.maxX, 0, L.maxZ + 1.5], [L.minX + 6, top + 2, L.minZ + 8], [L.maxX - 4, top + 2, L.minZ + 8],
      [POND.maxX + 1, 0, POND.maxZ + 1], [POND.maxX + 1, 0.5, POND.minZ - 1], [INLET_POINT[0], 0.5, INLET_POINT[1]]];
  }
  if (e === 'wetland') {
    const W = WETLAND;
    return [[W.cx - W.rx - 1.5, 0, W.cz], [W.cx + W.rx + 1.5, 0, W.cz], [W.cx, 0, W.cz + W.rz + 2.5], [W.cx, 0, W.cz - W.rz], [W.cx - W.rx, 3.2, W.cz - 1], [W.cx + W.rx, 3.2, W.cz - 1]];
  }
  if (e === 'pond') return [[POND.minX - 3, 0, POND.minZ - 1], [POND.minX - 3, 0, POND.maxZ + 3], [POND.maxX, 1.5, POND.minZ - 1], [INLET_POINT[0], 0.5, INLET_POINT[1]]];
  if (e === 'gate') return [[ROAD.gate[0], 0.5, ROAD.gate[1]], [ROAD.gate[0], 3.5, ROAD.gate[1]]];
  const route = plant?.actors?.routes?.[e === 'chemBay' ? 'chem-arrive' : 'sludge-arrive'];
  let p: V3, h = Math.PI / 2;
  if (route) { const q = route.pointAt(1); p = [q.x, q.y, q.z]; h = route.headingAt(1); }
  else p = e === 'chemBay' ? [-18.5, 0, 1.6] : [-23.5, 0, 3.7];
  // Camión ≈ 7 m: caja alrededor de la parada (eje trasero), orientada según la ruta.
  const fx = Math.sin(h), fz = Math.cos(h);
  const pts: V3[] = [];
  for (const a of [-2.0, 5.5]) for (const b of [-1.3, 1.3]) {
    const x = p[0] + fx * a + fz * b, z = p[2] + fz * a - fx * b;
    pts.push([x, 0, z], [x, 3.2, z]);
  }
  return pts;
}

/** Puntos de encuadre de una unidad: esquinas de su huella + ancla de etiqueta (con margen para el texto). */
function unitPoints(id: UnitId, plant?: Plant): V3[] {
  let min: V3, max: V3, label: V3;
  const pu = plant?.units?.[id];
  if (pu && pu.footprint) {
    min = [...pu.footprint.min] as V3;
    max = [...pu.footprint.max] as V3;
    const la = pu.anchors?.label;
    label = la ? [la.x, la.y, la.z] : [(min[0] + max[0]) / 2, max[1] + 0.8, (min[2] + max[2]) / 2];
  } else {
    const s = UNIT_BY_ID[id];
    const hx = (s.size.d ?? s.size.w ?? 1) / 2;
    const hz = (s.size.d ?? s.size.l ?? 1) / 2;
    min = [s.pos[0] - hx, 0, s.pos[1] - hz];
    max = [s.pos[0] + hx, s.base + s.size.h, s.pos[1] + hz];
    label = [s.pos[0], s.base + s.size.h + 0.8, s.pos[1]];
  }
  const pts: V3[] = [];
  for (const x of [min[0], max[0]]) for (const y of [min[1], max[1]]) for (const z of [min[2], max[2]]) pts.push([x, y, z]);
  pts.push(label, [label[0], label[1] + 1.4, label[2]]);
  return pts;
}

/** Encuadre: distancia mínima para que todos los puntos queden dentro de la región segura. */
export function fitShot(points: V3[], fov: number, minDist: number, wide = 1, margin = 0.84): CameraShot {
  const { right, up, fwd } = CAM_BASIS;
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (const p of points) for (let i = 0; i < 3; i++) { lo[i] = Math.min(lo[i], p[i]); hi[i] = Math.max(hi[i], p[i]); }
  const c: V3 = [(lo[0] + hi[0]) / 2, (lo[1] + hi[1]) / 2, (lo[2] + hi[2]) / 2];
  // Centrado en el plano de cámara
  let xmin = Infinity, xmax = -Infinity, ymin = Infinity, ymax = -Infinity;
  for (const p of points) {
    const r = [p[0] - c[0], p[1] - c[1], p[2] - c[2]];
    const x = dot(r, right), y = dot(r, up);
    xmin = Math.min(xmin, x); xmax = Math.max(xmax, x); ymin = Math.min(ymin, y); ymax = Math.max(ymax, y);
  }
  const xm = (xmin + xmax) / 2, ym = (ymin + ymax) / 2;
  const cc: V3 = [c[0] + right[0] * xm + up[0] * ym, c[1] + right[1] * xm + up[1] * ym, c[2] + right[2] * xm + up[2] * ym];
  const tanH = Math.tan((fov * Math.PI) / 360);
  const kx = tanH * FRAME.aspect * FRAME.safe.hx * margin;
  const ky = tanH * FRAME.safe.hy * margin;
  let d = minDist;
  for (const p of points) {
    const r = [p[0] - cc[0], p[1] - cc[1], p[2] - cc[2]];
    const x = Math.abs(dot(r, right)), y = Math.abs(dot(r, up)), z = dot(r, fwd);
    d = Math.max(d, x / kx - z, y / ky - z);
  }
  d *= wide;
  // Sesgo: el contenido queda en el centro de la región segura, no en el centro del lienzo.
  const halfW = d * tanH * FRAME.aspect, halfH = d * tanH;
  const bx = FRAME.safe.bx * halfW, by = FRAME.safe.by * halfH;
  const target: V3 = [
    cc[0] - right[0] * bx - up[0] * by,
    cc[1] - right[1] * bx - up[1] * by,
    cc[2] - right[2] * bx - up[2] * by,
  ];
  return { target, distance: d, fov };
}

function keyPoints(k: Key, plant?: Plant): V3[] {
  const ids = k.units === 'ALL' ? ALL : k.units;
  const pts: V3[] = [];
  for (const id of ids) pts.push(...unitPoints(id, plant));
  if (k.units === 'ALL') pts.push([INLET_POINT[0], 0.5, INLET_POINT[1]]);
  for (const e of k.extra ?? []) pts.push(...extraPoints(e, plant));
  return pts;
}

let cache = new WeakMap<object, CameraShot[]>();
const LAYOUT_KEY = {};

/** Planos clave resueltos (memorizados por planta: dependen solo de la geometría, no de t). */
export function keyShots(plant?: Plant): CameraShot[] {
  const ck = plant ?? LAYOUT_KEY;
  let shots = cache.get(ck);
  if (!shots) {
    shots = CAMERA_KEYS.map(k => fitShot(keyPoints(k, plant), k.fov, k.minDist, k.wide ?? 1));
    cache.set(ck, shots);
  }
  return shots;
}

/** Plano de vista general (modo «Vista general»). */
let overviewCache = new WeakMap<object, CameraShot>();
export function overviewShot(plant?: Plant): CameraShot {
  const ck = plant ?? LAYOUT_KEY;
  let s = overviewCache.get(ck);
  if (!s) {
    s = fitShot(keyPoints({ t: 0, units: 'ALL', fov: 31, minDist: 20, extra: ['landfill', 'wetland'] }, plant), 31, 20, 1);
    overviewCache.set(ck, s);
  }
  return cloneShot(s);
}

/** Plano de cámara en t: interpolación suave entre claves. */
export function cameraStory(t: number, plant?: Plant): CameraShot {
  const shots = keyShots(plant);
  const K = CAMERA_KEYS;
  if (t <= K[0].t) return cloneShot(shots[0]);
  for (let i = 0; i < K.length - 1; i++) {
    if (t < K[i + 1].t) {
      const k = smootherstep(t, K[i].t, K[i + 1].t);
      const a = shots[i], b = shots[i + 1];
      return {
        target: [lerp(a.target[0], b.target[0], k), lerp(a.target[1], b.target[1], k), lerp(a.target[2], b.target[2], k)],
        distance: lerp(a.distance, b.distance, k),
        fov: lerp(a.fov, b.fov, k),
      };
    }
  }
  return cloneShot(shots[shots.length - 1]);
}

function cloneShot(s: CameraShot): CameraShot {
  return { target: [s.target[0], s.target[1], s.target[2]], distance: s.distance, fov: s.fov };
}

/** Plano centrado en una unidad (miniatura del panel de detalle / interacción). */
export function unitShot(id: UnitId, plant?: Plant, fov = 26): CameraShot {
  const pts = unitPoints(id, plant).slice(0, 8);
  // Miniatura: sin región segura, encuadre centrado.
  const { right, up, fwd } = CAM_BASIS;
  const c = pts.reduce((a, p) => [a[0] + p[0] / pts.length, a[1] + p[1] / pts.length, a[2] + p[2] / pts.length] as V3, [0, 0, 0] as V3);
  const tanH = Math.tan((fov * Math.PI) / 360);
  let d = 4;
  for (const p of pts) {
    const r = [p[0] - c[0], p[1] - c[1], p[2] - c[2]];
    d = Math.max(d, Math.abs(dot(r, right)) / (tanH * ASPECT * 0.7) - dot(r, fwd), Math.abs(dot(r, up)) / (tanH * 0.7) - dot(r, fwd));
  }
  return { target: c, distance: d, fov };
}
