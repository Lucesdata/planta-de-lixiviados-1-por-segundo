/**
 * Validación geométrica (funciones puras, sin DOM ni renderizador):
 *  - solapes entre huellas de unidades con holgura mínima,
 *  - tramos de tubería que atraviesan huellas de unidades (excepto las de sus propios extremos),
 *  - cruces/acercamientos entre tuberías: deben pasar a distinta cota, separadas ≥ minSep entre ejes.
 * Exclusión documentada: ramales del mismo colector (mismo `from` o mismo `to`, distinto de 'world')
 * comparten tramos colineales a propósito (troncal dibujado una vez) y no se comparan entre sí.
 */
import type { Plant } from '../plant/types';
import { ROAD_PATHS } from '../plant/actors/road';
import { ROAD } from '../plant/layout';

export type Vec3 = [number, number, number];
export interface Box { min: Vec3; max: Vec3 }
export interface UnitGeo { id: string; footprint: Box }
export interface PipeGeo {
  id: string; from: string; to: string; points: Vec3[]; radius?: number;
  /** Otras huellas que la línea puede atravesar legítimamente (p. ej. la cámara de llegada que la aloja). */
  exclude?: string[];
}
export interface GeoIssue { kind: 'unit-overlap' | 'pipe-through-unit' | 'pipe-crossing' | 'unit-structure' | 'unit-road' | 'route-obstacle' | 'route-pipe'; a: string; b: string; detail: string }

const f2 = (x: number) => x.toFixed(2);

/** Huellas que se solapan (en planta, si también se solapan en altura) con holgura `clearance`. */
export function checkUnitOverlaps(units: UnitGeo[], clearance = 0.4): GeoIssue[] {
  const out: GeoIssue[] = [];
  for (let i = 0; i < units.length; i++) {
    for (let j = i + 1; j < units.length; j++) {
      const A = units[i].footprint, B = units[j].footprint;
      const yOverlap = A.min[1] < B.max[1] && B.min[1] < A.max[1];
      if (!yOverlap) continue;
      const gx = Math.max(B.min[0] - A.max[0], A.min[0] - B.max[0]);
      const gz = Math.max(B.min[2] - A.max[2], A.min[2] - B.max[2]);
      const gap = Math.max(gx, gz);
      if (gap < clearance) out.push({ kind: 'unit-overlap', a: units[i].id, b: units[j].id, detail: `separación ${f2(gap)} m < ${clearance} m` });
    }
  }
  return out;
}

/** Intersección segmento–caja (método de las placas). Devuelve [t0, t1] dentro de [0,1] o null. */
export function segmentBox(a: Vec3, b: Vec3, box: Box, pad = 0): [number, number] | null {
  let t0 = 0, t1 = 1;
  for (let k = 0; k < 3; k++) {
    const d = b[k] - a[k];
    const lo = box.min[k] - pad, hi = box.max[k] + pad;
    if (Math.abs(d) < 1e-12) {
      if (a[k] < lo || a[k] > hi) return null;
    } else {
      let ta = (lo - a[k]) / d, tb = (hi - a[k]) / d;
      if (ta > tb) [ta, tb] = [tb, ta];
      t0 = Math.max(t0, ta); t1 = Math.min(t1, tb);
      if (t0 > t1) return null;
    }
  }
  return [t0, t1];
}

export interface ThroughOpts {
  /** Holgura adicional al radio del tubo (m). */
  margin?: number;
  /** Radio de tubo por defecto (m). */
  radius?: number;
}

/** Tramos que atraviesan huellas de unidades ajenas a sus extremos. */
export function checkPipeThroughUnits(pipes: PipeGeo[], units: UnitGeo[], opts: ThroughOpts = {}): GeoIssue[] {
  const margin = opts.margin ?? 0.05;
  const out: GeoIssue[] = [];
  for (const p of pipes) {
    const pad = (p.radius ?? opts.radius ?? 0.1) + margin;
    for (const u of units) {
      if (u.id === p.from || u.id === p.to || p.exclude?.includes(u.id)) continue;
      for (let i = 1; i < p.points.length; i++) {
        const hit = segmentBox(p.points[i - 1], p.points[i], u.footprint, pad);
        if (hit) {
          const q = p.points[i - 1].map((v, k) => v + (p.points[i][k] - v) * (hit[0] + hit[1]) / 2);
          out.push({ kind: 'pipe-through-unit', a: p.id, b: u.id, detail: `tramo ${i} cerca de (${q.map(f2).join(', ')})` });
          break;
        }
      }
    }
  }
  return out;
}

/** Distancia mínima entre dos segmentos 3D. */
export function segmentDistance(p1: Vec3, q1: Vec3, p2: Vec3, q2: Vec3): number {
  const d1 = q1.map((v, k) => v - p1[k]), d2 = q2.map((v, k) => v - p2[k]), r = p1.map((v, k) => v - p2[k]);
  const dot = (x: number[], y: number[]) => x[0] * y[0] + x[1] * y[1] + x[2] * y[2];
  const a = dot(d1, d1), e = dot(d2, d2), f = dot(d2, r);
  let s: number, t: number;
  if (a < 1e-12 && e < 1e-12) return Math.sqrt(dot(r, r));
  if (a < 1e-12) { s = 0; t = Math.min(1, Math.max(0, f / e)); }
  else {
    const c = dot(d1, r);
    if (e < 1e-12) { t = 0; s = Math.min(1, Math.max(0, -c / a)); }
    else {
      const b = dot(d1, d2), den = a * e - b * b;
      s = den > 1e-12 ? Math.min(1, Math.max(0, (b * f - c * e) / den)) : 0;
      t = (b * s + f) / e;
      if (t < 0) { t = 0; s = Math.min(1, Math.max(0, -c / a)); }
      else if (t > 1) { t = 1; s = Math.min(1, Math.max(0, (b - c) / a)); }
    }
  }
  const c1 = p1.map((v, k) => v + d1[k] * s), c2 = p2.map((v, k) => v + d2[k] * t);
  const dd = c1.map((v, k) => v - c2[k]);
  return Math.sqrt(dot(dd, dd));
}

/** ¿Pertenecen al mismo colector (troncal compartido intencional)? */
export function sameManifold(a: PipeGeo, b: PipeGeo): boolean {
  return (a.from === b.from && a.from !== 'world') || (a.to === b.to && a.to !== 'world');
}

/**
 * Cruces entre tuberías distintas: los ejes deben quedar a ≥ minSep (≈ diámetro + holgura), lo que obliga
 * a cruzar a distinta cota. Se ignoran pares del mismo colector y los extremos que comparten unidad
 * (p. ej. salida de una línea y entrada de la siguiente en la misma boquilla: no ocurre, pero se tolera
 * hasta 0,3 m del puerto común).
 */
/** Recorta `d` metros del final (end=true) o del inicio de una polilínea. */
function trimPolyline(pts: Vec3[], d: number, end: boolean): Vec3[] {
  const P = end ? [...pts].reverse() : [...pts];
  let rest = d;
  while (P.length > 1) {
    const a = P[0], b = P[1];
    const L = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
    if (L > rest) { const f = rest / L; P[0] = [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f]; break; }
    rest -= L; P.shift();
  }
  return end ? P.reverse() : P;
}

export function checkPipeCrossings(pipes: PipeGeo[], minSep = 0.25): GeoIssue[] {
  const out: GeoIssue[] = [];
  for (let i = 0; i < pipes.length; i++) {
    for (let j = i + 1; j < pipes.length; j++) {
      let A = pipes[i], B = pipes[j];
      if (sameManifold(A, B)) continue;
      // Tee en la línea de otra unidad (p. ej. P-01B → subida de P-01): se tolera 0,35 m junto al puerto común.
      if (A.to !== 'world' && A.to === B.from) A = { ...A, points: trimPolyline(A.points, 0.35, true) };
      if (B.to !== 'world' && B.to === A.from) B = { ...B, points: trimPolyline(B.points, 0.35, true) };
      let worst = Infinity, where = '';
      for (let s = 1; s < A.points.length; s++) {
        for (let k = 1; k < B.points.length; k++) {
          const d = segmentDistance(A.points[s - 1], A.points[s], B.points[k - 1], B.points[k]);
          if (d < worst) { worst = d; where = `tramos ${s}/${k}`; }
        }
      }
      if (worst < minSep) out.push({ kind: 'pipe-crossing', a: A.id, b: B.id, detail: `distancia entre ejes ${f2(worst)} m < ${minSep} m (${where})` });
    }
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* Fase 2: estructuras, vía y rutas de actores                          */
/* ------------------------------------------------------------------ */

/** Distancia en planta de un punto a una caja (0 si está dentro). */
function planDistBox(x: number, z: number, b: Box): number {
  const dx = Math.max(b.min[0] - x, 0, x - b.max[0]), dz = Math.max(b.min[2] - z, 0, z - b.max[2]);
  return Math.hypot(dx, dz);
}

/** Unidades que se solapan con estructuras (salvo las que la estructura aloja: TK-102/103 sobre la plataforma). */
export function checkUnitStructures(units: UnitGeo[], structures: UnitGeo[], hosted: Record<string, string[]>, clearance = 0.2): GeoIssue[] {
  const out: GeoIssue[] = [];
  for (const u of units) for (const s of structures) {
    if (hosted[s.id]?.includes(u.id)) continue;
    const A = u.footprint, B = s.footprint;
    if (!(A.min[1] < B.max[1] && B.min[1] < A.max[1])) continue;
    const gap = Math.max(B.min[0] - A.max[0], A.min[0] - B.max[0], B.min[2] - A.max[2], A.min[2] - B.max[2]);
    if (gap < clearance) out.push({ kind: 'unit-structure', a: u.id, b: s.id, detail: `separación ${f2(gap)} m < ${clearance} m` });
  }
  return out;
}

/** Huellas de unidades/estructuras sobre la calzada (eje muestreado, semiancho + holgura). */
export function checkRoadClear(items: UnitGeo[], clearance = 0.2): GeoIssue[] {
  const out: GeoIssue[] = [];
  const half = ROAD.width / 2;
  const samples: [number, number][] = [];
  for (const path of [ROAD_PATHS.entry, ROAD_PATHS.loop]) for (let i = 1; i < path.length; i++) {
    const [ax, az] = path[i - 1], [bx, bz] = path[i];
    const n = Math.max(1, Math.ceil(Math.hypot(bx - ax, bz - az) / 0.25));
    for (let k = 0; k <= n; k++) samples.push([ax + (bx - ax) * k / n, az + (bz - az) * k / n]);
  }
  for (const u of items) {
    let worst = Infinity;
    for (const [x, z] of samples) worst = Math.min(worst, planDistBox(x, z, u.footprint));
    if (worst < half + clearance) out.push({ kind: 'unit-road', a: u.id, b: 'vía', detail: `a ${f2(worst)} m del eje (< ${f2(half + clearance)})` });
  }
  return out;
}

export interface RouteGeo { id: string; kind: 'worker' | 'truck'; points: Vec3[]; allow: string[] }

function sampleRoute(pts: Vec3[], step = 0.2): Vec3[] {
  const out: Vec3[] = [];
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i];
    const n = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]) / step));
    for (let k = 0; k < n; k++) out.push(a.map((v, j) => v + (b[j] - v) * k / n) as Vec3);
  }
  out.push(pts[pts.length - 1]);
  return out;
}

/** Rutas contra huellas (personas: r 0,28 m, alto 1,8 m; camiones: r 1,3 m, alto 3,6 m). */
export function checkRoutesObstacles(routes: RouteGeo[], obstacles: UnitGeo[]): GeoIssue[] {
  const out: GeoIssue[] = [];
  for (const r of routes) {
    const rad = r.kind === 'truck' ? 1.3 : 0.28, H = r.kind === 'truck' ? 3.6 : 1.8;
    const S = sampleRoute(r.points);
    for (const o of obstacles) {
      if (r.allow.includes(o.id)) continue;
      const hit = S.find(p => planDistBox(p[0], p[2], o.footprint) < rad && o.footprint.max[1] > p[1] + 0.02 && o.footprint.min[1] < p[1] + H);
      if (hit) out.push({ kind: 'route-obstacle', a: r.id, b: o.id, detail: `cerca de (${hit.map(f2).join(', ')})` });
    }
  }
  return out;
}

/**
 * Rutas contra tuberías: camiones exigen ≥ 4,5 m libres sobre la calzada; personas ≥ 2,1 m sobre el piso que
 * pisan. Tramos en zanja (y < 0) y los que quedan por debajo del piso de la ruta no cuentan.
 */
export function checkRoutesPipes(routes: RouteGeo[], pipes: PipeGeo[]): GeoIssue[] {
  const out: GeoIssue[] = [];
  for (const r of routes) {
    const rad = r.kind === 'truck' ? 1.3 : 0.28, head = r.kind === 'truck' ? 4.5 : 2.1;
    const S = sampleRoute(r.points);
    for (const p of pipes) {
      const R = p.radius ?? 0.09;
      let found: Vec3 | null = null;
      for (let i = 1; i < p.points.length && !found; i++) {
        const a = p.points[i - 1], b = p.points[i];
        const ylo = Math.min(a[1], b[1]) - R, yhi = Math.max(a[1], b[1]) + R;
        if (yhi < 0) continue;
        for (const q of S) {
          if (yhi < q[1] + 0.02 || ylo > q[1] + head) continue;
          const d = segmentDistance([q[0], 0, q[2]], [q[0], 0, q[2]], [a[0], 0, a[2]], [b[0], 0, b[2]]);
          if (d < rad + R) { found = q; break; }
        }
      }
      if (found) out.push({ kind: 'route-pipe', a: r.id, b: p.id, detail: `cerca de (${found.map(f2).join(', ')})` });
    }
  }
  return out;
}

/** Convierte la planta construida y ejecuta todas las verificaciones. */
export function runGeometryChecks(plant: Plant, opts: { clearance?: number; minSep?: number } = {}): GeoIssue[] {
  const units: UnitGeo[] = Object.values(plant.units).map(u => ({ id: u.id, footprint: { min: [...u.footprint.min], max: [...u.footprint.max] } }));
  const structFp = (plant.layers.structures.userData.footprints ?? []) as { id: string; footprint: Box; hosts?: string[] }[];
  const structures: UnitGeo[] = structFp.map(s => ({ id: `estructura:${s.id}`, footprint: s.footprint }));
  const pipes: PipeGeo[] = Object.values(plant.pipes).map(p => ({
    id: p.id, from: p.from, to: p.to, points: p.points.map(v => [v.x, v.y, v.z] as Vec3),
    radius: p.kind === 'pumped' || p.kind === 'anaerobic' || p.kind === 'biogas' ? 0.105 : 0.09,
    exclude: structFp.filter(s => s.hosts?.includes(p.id)).map(s => `estructura:${s.id}`),
  }));
  const issues = [
    ...checkUnitOverlaps(units, opts.clearance ?? 0.4),
    ...checkPipeThroughUnits(pipes, [...units, ...structures]),
    ...checkPipeCrossings(pipes, opts.minSep ?? 0.25),
  ];
  // Fase 2
  const hosted: Record<string, string[]> = {
    'estructura:platform-deck': ['coag', 'floc'],
    // La pasarela UASB se adosa a los reactores a propósito (acceso a ventanas y tomas de muestra)
    'estructura:catwalk-deck': ['uasb1', 'uasb2', 'uasb3', 'uasb4'], 'estructura:platform-rail-n': ['coag', 'floc'], 'estructura:platform-rail-s': ['coag', 'floc'],
  };
  issues.push(...checkUnitStructures(units, structures, hosted));
  const lightsFp = ((plant.root.userData.siteLights?.userData.footprints ?? []) as { id: string; min: Vec3; max: Vec3 }[])
    .map(f => ({ id: `luz:${f.id}`, footprint: { min: f.min, max: f.max } }));
  issues.push(...checkUnitStructures(units, lightsFp, {}));
  const supports = ((plant.layers.pipes.userData.supports ?? []) as Box[]).map((b, i) => ({ id: `soporte:${i}`, footprint: b }));
  issues.push(...checkRoadClear([...units, ...lightsFp, ...supports]));
  const A = plant.actors;
  if (A) {
    const meta = (A.root.userData.routeMeta ?? {}) as Record<string, { kind: 'worker' | 'truck'; allow: string[] }>;
    const roadFp = ((A.root.userData.roadFootprints ?? []) as { id: string; min: Vec3; max: Vec3 }[]).map(f => ({ id: `vía:${f.id}`, footprint: { min: f.min, max: f.max } }));
    const routes: RouteGeo[] = Object.entries(A.routes).map(([id, r]) => ({
      id, kind: meta[id]?.kind ?? 'worker', allow: meta[id]?.allow ?? [], points: r.points.map(v => [v.x, v.y, v.z] as Vec3),
    }));
    issues.push(...checkRoutesObstacles(routes, [...units, ...structures, ...lightsFp, ...supports, ...roadFp]));
    issues.push(...checkRoutesPipes(routes, pipes));
  }
  return issues;
}
