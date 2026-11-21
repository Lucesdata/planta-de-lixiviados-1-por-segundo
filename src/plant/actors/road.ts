/**
 * Vía de acceso (supuesto visual de la fase 2): calzada de asfalto de 3,6 m con bordillos y líneas de borde,
 * portón oeste con hoja corredera (abierta) y caseta de guardia mínima, lazo de retorno de un solo sentido
 * alrededor de LS-101 (sin maniobras de reversa), bahía de descarga de químicos frente a ED-01 (en la
 * calzada norte) y explanada de carga de lodos entre LS-101 y la calzada sur.
 * Geometría pura en planta (sin DOM): `ROAD_PATHS` da los ejes muestreados que usan las rutas de camiones,
 * la validación y los postes de alumbrado.
 */
import * as THREE from 'three';
import { EXT_ROAD, ROAD, SITE, UNIT_BY_ID } from '../layout';
import { MAT, MAT2 } from '../../scene/materials';
import { Batcher, rbox, cyl, T } from '../units/common';

export type P2 = [number, number];

/** Arco en planta: centro, radio, ángulos (rad, atan2(z, x)), muestreo cada ~8°. */
function arc(c: P2, r: number, a0: number, a1: number): P2[] {
  const n = Math.max(2, Math.ceil(Math.abs(a1 - a0) / (Math.PI / 22)));
  const out: P2[] = [];
  for (let i = 0; i <= n; i++) {
    const a = a0 + (a1 - a0) * (i / n);
    out.push([c[0] + r * Math.cos(a), c[1] + r * Math.sin(a)]);
  }
  return out;
}

function dedupe(pts: P2[]): P2[] {
  const out: P2[] = [];
  for (const p of pts) if (!out.length || Math.hypot(p[0] - out[out.length - 1][0], p[1] - out[out.length - 1][1]) > 1e-4) out.push(p);
  return out;
}

const L = ROAD.loop, z0 = ROAD.z, r = L.r;
/** Centros de curva del lazo. */
export const ROAD_ARCS = {
  ne: [ROAD.endX, z0 + r] as P2,                 // (−17,6; 6,5)
  se: [ROAD.endX, L.southZ - r] as P2,           // (−17,6; 7,4)
  sw: [L.westX + r, L.southZ - r] as P2,         // (−24,8; 7,4)
  exit: [L.westX - r, z0 + r] as P2,             // (−32,8; 6,5)
};

/**
 * Ejes de la calzada (sentido de circulación):
 *  entry: portón → este por z = 2,5 hasta el fin del recto norte;
 *  loop:  curva NE → sur → curva SE → oeste por z = 11,4 → curva SO → norte por x = −28,8 → curva de salida → portón.
 */
/** Cambio de carril suave (coseno) fuera del portón: de z = zA en xA a z = zB en xB. */
function laneShift(xA: number, zA: number, xB: number, zB: number, n = 10): P2[] {
  const out: P2[] = [];
  for (let i = 0; i <= n; i++) {
    const k = i / n, s = 0.5 - 0.5 * Math.cos(Math.PI * k);
    out.push([xA + (xB - xA) * k, zA + (zB - zA) * s]);
  }
  return out;
}

export const ROAD_PATHS: { entry: P2[]; loop: P2[] } = (() => {
  const E = EXT_ROAD;
  // Fase 3: la vía continúa fuera del sitio hacia el vertedero (doble carril, sin tráfico en contra).
  const entry: P2[] = dedupe([[E.spawnX, E.laneIn], ...laneShift(E.shiftX0, E.laneIn, E.shiftX1, z0), [ROAD.endX, z0]]);
  const loop = dedupe([
    [ROAD.endX, z0],
    ...arc(ROAD_ARCS.ne, r, -Math.PI / 2, 0),
    ...arc(ROAD_ARCS.se, r, 0, Math.PI / 2),
    ...arc(ROAD_ARCS.sw, r, Math.PI / 2, Math.PI),
    ...arc(ROAD_ARCS.exit, r, 0, -Math.PI / 2),
    ...laneShift(E.shiftX1, z0, E.shiftX0, E.laneOut),
    [E.despawnX, E.laneOut],
  ]);
  return { entry, loop };
})();

/** Distancia en planta de (x, z) al eje más cercano de la calzada (dentro del sitio). */
export function distToRoad(x: number, z: number): number {
  let best = Infinity;
  for (const path of [ROAD_PATHS.entry, ROAD_PATHS.loop]) {
    for (let i = 1; i < path.length; i++) {
      const [ax, az] = path[i - 1], [bx, bz] = path[i];
      const dx = bx - ax, dz = bz - az, l2 = dx * dx + dz * dz;
      const t = l2 > 0 ? Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / l2)) : 0;
      best = Math.min(best, Math.hypot(x - (ax + t * dx), z - (az + t * dz)));
    }
  }
  return best;
}

/** Desplaza una polilínea en planta hacia la izquierda (+) o derecha (−) del sentido de avance. */
function offset(pts: P2[], d: number): P2[] {
  return pts.map((p, i) => {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
    let tx = b[0] - a[0], tz = b[1] - a[1];
    const l = Math.hypot(tx, tz) || 1; tx /= l; tz /= l;
    return [p[0] + tz * d, p[1] - tx * d] as P2;
  });
}

/** Corta una polilínea al rectángulo del sitio (x ≥ SITE.minX). */
function clipSite(pts: P2[], keepOutside = false): P2[] {
  const X = SITE.minX + 0.05, out: P2[] = [];
  const keep = (p: P2) => (p[0] >= X) !== keepOutside;
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i], inside = keep(p);
    if (i > 0) {
      const q = pts[i - 1], qIn = keep(q);
      if (inside !== qIn) { const k = (X - q[0]) / (p[0] - q[0]); out.push([X, q[1] + (p[1] - q[1]) * k]); }
    }
    if (inside) out.push(p);
  }
  return out;
}

function ribbon(pts: P2[], half: number, y: number): THREE.BufferGeometry {
  const L1 = offset(pts, half), R1 = offset(pts, -half);
  const pos: number[] = [], nrm: number[] = [], uv: number[] = [], idx: number[] = [];
  let s = 0;
  for (let i = 0; i < pts.length; i++) {
    if (i > 0) s += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
    pos.push(L1[i][0], y, L1[i][1], R1[i][0], y, R1[i][1]);
    nrm.push(0, 1, 0, 0, 1, 0);
    uv.push(s / 4, 0, s / 4, 1);
    if (i > 0) { const k = 2 * i; idx.push(k - 2, k - 1, k, k - 1, k + 1, k); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  // Orientación de caras hacia arriba
  const p0 = new THREE.Vector3(pos[0], pos[1], pos[2]), p1 = new THREE.Vector3(pos[3], pos[4], pos[5]), p2 = new THREE.Vector3(pos[6], pos[7], pos[8]);
  const n = new THREE.Vector3().subVectors(p1, p0).cross(new THREE.Vector3().subVectors(p2, p0));
  if (n.y < 0) { for (let i = 0; i < idx.length; i += 3) { const t = idx[i]; idx[i] = idx[i + 1]; idx[i + 1] = t; } g.setIndex(idx); }
  return g;
}

/** Segmentos de una polilínea desplazada que no caen sobre otra calzada (para bordillos y líneas). */
function freeRuns(pts: P2[], minClear: number): P2[][] {
  const runs: P2[][] = [];
  let cur: P2[] = [];
  // remuestreo fino
  const fine: P2[] = [];
  for (let i = 1; i < pts.length; i++) {
    const [ax, az] = pts[i - 1], [bx, bz] = pts[i];
    const n = Math.max(1, Math.ceil(Math.hypot(bx - ax, bz - az) / 0.4));
    for (let k = 0; k < n; k++) fine.push([ax + (bx - ax) * k / n, az + (bz - az) * k / n]);
  }
  fine.push(pts[pts.length - 1]);
  for (const p of fine) {
    const inside = distToRoad(p[0], p[1]) < minClear || p[0] < SITE.minX + 0.05;
    if (!inside) cur.push(p);
    else if (cur.length) { if (cur.length > 1) runs.push(cur); cur = []; }
  }
  if (cur.length > 1) runs.push(cur);
  return runs;
}

export interface RoadBuild { group: THREE.Group; footprints: { id: string; min: [number, number, number]; max: [number, number, number] }[] }

export function buildRoad(): RoadBuild {
  const group = new THREE.Group();
  group.name = 'road';
  const half = ROAD.width / 2;
  const b = new Batcher();
  const paint = new Batcher();
  const fps: RoadBuild['footprints'] = [];

  const entry = clipSite(ROAD_PATHS.entry), loop = clipSite(ROAD_PATHS.loop);
  b.add(ribbon(entry, half, 0.012), MAT2.asphalt);
  b.add(ribbon(loop, half, 0.013), MAT2.asphalt);

  // Bordillos y líneas de borde donde no hay otra calzada al lado
  for (const path of [entry, loop]) {
    for (const side of [1, -1]) {
      for (const run of freeRuns(offset(path, side * (half + 0.08)), half - 0.02)) {
        for (let i = 1; i < run.length; i++) {
          const [ax, az] = run[i - 1], [bx, bz] = run[i];
          const l = Math.hypot(bx - ax, bz - az);
          b.add(rbox(0.16, 0.12, l + 0.02, 0.02), MAT2.curb, T((ax + bx) / 2, 0.06, (az + bz) / 2, 0, Math.atan2(bx - ax, bz - az), 0));
        }
      }
      for (const run of freeRuns(offset(path, side * (half - 0.25)), half - 0.4)) {
        for (let i = 1; i < run.length; i++) {
          const [ax, az] = run[i - 1], [bx, bz] = run[i];
          const l = Math.hypot(bx - ax, bz - az);
          paint.add(new THREE.PlaneGeometry(0.1, l + 0.01).rotateX(-Math.PI / 2), MAT2.roadPaint, T((ax + bx) / 2, 0.02, (az + bz) / 2, 0, Math.atan2(bx - ax, bz - az), 0));
        }
      }
    }
  }
  // Flechas de sentido único (chevrones pintados) en el lazo
  const arrows: [number, number, number][] = [[-29, z0, Math.PI / 2], [-15.0, 9.0, 0], [-21.0, L.southZ + 0, -Math.PI / 2], [-28.8, 9.0, Math.PI]];
  for (const [x, z, ry] of arrows) {
    for (const s of [-1, 1]) paint.add(new THREE.PlaneGeometry(0.12, 0.9).rotateX(-Math.PI / 2), MAT2.roadPaint, T(x + Math.sin(ry) * 0 + s * 0.28 * Math.cos(ry), 0.021, z - s * 0.28 * Math.sin(ry), 0, ry + s * 0.6, 0));
  }

  // Bahía de químicos: recuadro amarillo en la calzada norte y explanada frente a la cortina de ED-01
  const cs = ROAD.chemStop, ce = UNIT_BY_ID.control.pos;
  const bx0 = cs.x - 3.2, bx1 = cs.x + 6.2;
  for (const z of [z0 - half + 0.35, z0 + half - 0.35]) paint.add(new THREE.PlaneGeometry(bx1 - bx0, 0.12).rotateX(-Math.PI / 2), MAT2.roadPaintYellow, T((bx0 + bx1) / 2, 0.022, z));
  for (const x of [bx0, bx1]) paint.add(new THREE.PlaneGeometry(0.12, ROAD.width - 0.7).rotateX(-Math.PI / 2), MAT2.roadPaintYellow, T(x, 0.022, z0));
  for (let k = 0; k < 4; k++) paint.add(new THREE.PlaneGeometry(0.12, 1.2).rotateX(-Math.PI / 2), MAT2.roadPaintYellow, T(bx0 + 0.6 + k * 0.45, 0.022, z0, 0, 0.75, 0));
  b.add(rbox(6.4, 0.03, 1.05, 0.01), MAT2.apron, T(ce[0] - 0.2, 0.015, z0 - half - 0.52));
  // Explanada de carga de lodos entre LS-101 y la calzada sur
  const bed = UNIT_BY_ID.sludge;
  const bw = bed.size.w!, bl = bed.size.l!;
  const zA0 = bed.pos[1] + bl / 2, zA1 = L.southZ - half;
  b.add(rbox(bw, 0.03, zA1 - zA0 + 0.1, 0.01), MAT2.apron, T(bed.pos[0], 0.015, (zA0 + zA1) / 2));
  const ss = ROAD.sludgeStop;
  for (const x of [ss.x - 5.2, ss.x + 1.6]) paint.add(new THREE.PlaneGeometry(0.12, ROAD.width - 0.7).rotateX(-Math.PI / 2), MAT2.roadPaintYellow, T(x, 0.022, L.southZ));

  // Portón oeste: postes, riel y hoja corredera abierta (corrida al norte), caseta de guardia
  const gx = SITE.minX + 0.45;
  const g0 = z0 - half - 0.45, g1 = z0 + half + 0.45;
  for (const z of [g0, g1]) {
    b.add(rbox(0.22, 2.2, 0.22, 0.03), MAT.steelDark, T(gx, 1.1, z));
    b.add(rbox(0.3, 0.05, 0.3, 0.01), MAT.steelBlue, T(gx, 2.22, z));
  }
  b.add(rbox(0.08, 0.04, 5.0, 0.01), MAT.steelDark, T(gx - 0.2, 0.02, g0 - 2.0));      // riel de la hoja
  const leafZ = g0 - 2.4, leafL = g1 - g0 - 0.3;
  for (const y of [0.15, 1.85]) b.add(rbox(0.06, 0.07, leafL, 0.01), MAT.rail, T(gx - 0.2, y, leafZ));
  for (let k = 0; k <= 12; k++) b.add(rbox(0.03, 1.7, 0.03, 0.005), MAT.rail, T(gx - 0.2, 1.0, leafZ - leafL / 2 + k * (leafL / 12)));
  for (const z of [leafZ - leafL / 2 + 0.3, leafZ + leafL / 2 - 0.3]) b.add(cyl(0.07, 0.05, 12), MAT.rubber, T(gx - 0.2, 0.08, z, 0, 0, Math.PI / 2));
  b.add(rbox(0.12, 0.12, 0.12, 0.02), MAT2.roadPaintYellow, T(gx, 2.3, g1));                // luz del portón (carcasa)
  // Caseta de guardia
  const hx = gx + 1.1, hz = g1 + 1.35;
  b.add(rbox(1.4, 2.4, 1.4, 0.05), MAT2.wall, T(hx, 1.2, hz));
  b.add(rbox(1.6, 0.12, 1.6, 0.03), MAT.steelBlue, T(hx, 2.46, hz));
  b.add(rbox(0.9, 0.7, 0.02, 0.01), MAT.glass, T(hx, 1.5, hz - 0.71));
  b.add(rbox(0.02, 0.7, 0.9, 0.01), MAT.glass, T(hx + 0.71, 1.5, hz));
  fps.push({ id: 'gate-post-n', min: [gx - 0.11, 0, g0 - 0.11], max: [gx + 0.11, 2.3, g0 + 0.11] });
  fps.push({ id: 'gate-post-s', min: [gx - 0.11, 0, g1 - 0.11], max: [gx + 0.11, 2.3, g1 + 0.11] });
  fps.push({ id: 'gate-leaf', min: [gx - 0.25, 0, leafZ - leafL / 2], max: [gx - 0.15, 1.9, leafZ + leafL / 2] });
  fps.push({ id: 'guard-hut', min: [hx - 0.8, 0, hz - 0.8], max: [hx + 0.8, 2.5, hz + 0.8] });

  // Fase 3 · vía externa: dos carriles que se abren desde el portón y siguen al oeste (hacia el vertedero)
  const E = EXT_ROAD;
  const outer = (pts: P2[]) => clipSite(pts, true);
  const inLane = outer(ROAD_PATHS.entry), outLane = outer(ROAD_PATHS.loop);
  b.add(ribbon(inLane, half, 0.011), MAT2.asphalt);
  b.add(ribbon(outLane, half, 0.0115), MAT2.asphalt);
  const midZ = (E.laneIn + E.laneOut) / 2;
  b.add(ribbon([[E.farX, midZ], [E.shiftX0 + 0.5, midZ]], E.width / 2, 0.0105), MAT2.asphalt);
  // Hombros de grava y líneas de borde / eje
  for (const zz of [midZ - E.width / 2 - 0.45, midZ + E.width / 2 + 0.45]) b.add(new THREE.PlaneGeometry(E.shiftX0 - E.farX, 0.9).rotateX(-Math.PI / 2), MAT2.grit, T((E.farX + E.shiftX0) / 2, 0.006, zz));
  for (const zz of [midZ - E.width / 2 + 0.25, midZ + E.width / 2 - 0.25]) paint.add(new THREE.PlaneGeometry(E.shiftX0 - E.farX, 0.1).rotateX(-Math.PI / 2), MAT2.roadPaint, T((E.farX + E.shiftX0) / 2, 0.02, zz));
  for (let x = E.farX + 1; x < E.shiftX0 - 1; x += 3.2) paint.add(new THREE.PlaneGeometry(1.6, 0.11).rotateX(-Math.PI / 2), MAT2.roadPaintYellow, T(x + 0.8, 0.02, midZ));

  b.build(group, false, true);
  const pm = paint.build(group, false, true);
  for (const m of pm) m.renderOrder = -1;
  return { group, footprints: fps };
}
