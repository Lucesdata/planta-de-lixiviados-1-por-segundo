/**
 * Rutas de actores (polilíneas en mundo, y = cota del piso). Hipótesis de este escenario; ver docs/LAYOUT.md.
 * pointAt(u): por longitud de arco. headingAt(u): rumbo del tramo (atan2(dx, dz)); en tramos verticales
 * (escaleras de gato) se usa el rumbo horizontal más cercano.
 * Camiones: el punto de la ruta es el centro del eje trasero; todas avanzan (sin reversa) gracias al lazo.
 * Metadatos (`ROUTE_META`): tipo y huellas que la ruta puede tocar en sus extremos (validación).
 */
import * as THREE from 'three';
import type { ActorRoute } from '../types';
import { ROAD } from '../layout';
import { ROAD_PATHS, type P2 } from './road';

export class ActorRouteImpl implements ActorRoute {
  length: number;
  private cum: number[] = [0];
  constructor(public points: THREE.Vector3[]) {
    for (let i = 1; i < points.length; i++) this.cum.push(this.cum[i - 1] + points[i].distanceTo(points[i - 1]));
    this.length = this.cum[this.cum.length - 1];
  }
  private seg(u: number): { i: number; f: number } {
    const d = Math.max(0, Math.min(1, Number.isFinite(u) ? u : 0)) * this.length;
    let i = 1;
    while (i < this.cum.length - 1 && this.cum[i] < d) i++;
    const L = this.cum[i] - this.cum[i - 1];
    return { i, f: L > 1e-9 ? (d - this.cum[i - 1]) / L : 0 };
  }
  pointAt(u: number): THREE.Vector3 {
    const { i, f } = this.seg(u);
    return this.points[i - 1].clone().lerp(this.points[i], f);
  }
  headingAt(u: number): number {
    const { i } = this.seg(u);
    const h = (k: number) => {
      const a = this.points[k - 1], b = this.points[k];
      const dx = b.x - a.x, dz = b.z - a.z;
      return Math.hypot(dx, dz) > 1e-6 ? Math.atan2(dx, dz) : null;
    };
    for (let k = 0; k < this.points.length; k++) {
      for (const j of [i - k, i + k]) {
        if (j >= 1 && j < this.points.length) { const v = h(j); if (v !== null) return v; }
      }
    }
    return 0;
  }
}

export type RouteKind = 'truck' | 'worker';
export interface RouteMeta { kind: RouteKind; allow: string[] }

const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);

/** Corta la polilínea en el punto (x, z) de un tramo recto que lo contiene. */
function splitAt(path: P2[], x: number, z: number): [P2[], P2[]] {
  for (let i = 1; i < path.length; i++) {
    const [ax, az] = path[i - 1], [bx, bz] = path[i];
    const dx = bx - ax, dz = bz - az, l2 = dx * dx + dz * dz;
    if (l2 < 1e-9) continue;
    const t = ((x - ax) * dx + (z - az) * dz) / l2;
    if (t < -1e-6 || t > 1 + 1e-6) continue;
    if (Math.hypot(ax + t * dx - x, az + t * dz - z) > 1e-3) continue;
    return [[...path.slice(0, i), [x, z]], [[x, z], ...path.slice(i)]];
  }
  throw new Error(`Parada fuera de la vía: (${x}, ${z})`);
}

const to3 = (p: P2[]) => p.map(([x, z]) => V(x, 0, z));
const join = (a: P2[], b: P2[]) => [...a, ...b.slice(1)];

export function buildRoutes(): { routes: Record<string, ActorRoute>; meta: Record<string, RouteMeta> } {
  const { entry, loop } = ROAD_PATHS;
  const full = join(entry, loop);
  const cs = ROAD.chemStop, ss = ROAD.sludgeStop;
  const [chemIn, chemOut] = splitAt(full, cs.x, cs.z);
  const [sludgeIn, sludgeOut] = splitAt(full, ss.x, ss.z);

  const R: Record<string, [THREE.Vector3[], RouteMeta]> = {
    'chem-arrive': [to3(chemIn), { kind: 'truck', allow: [] }],
    'chem-leave': [to3(chemOut), { kind: 'truck', allow: [] }],
    'sludge-arrive': [to3(sludgeIn), { kind: 'truck', allow: [] }],
    'sludge-leave': [to3(sludgeOut), { kind: 'truck', allow: [] }],
    // ED-01 (puerta este) → DQ-101 (tablero) → escalera → plataforma junto a TK-102
    'w-operator': [[V(-20.9, 0, -2.2), V(-20.55, 0, -2.2), V(-20.55, 0, -5.0), V(-18.45, 0, -5.0), V(-17.0, 0, -5.0),
      V(-17.0, 0, -5.1), V(-17.0, 1.2, -6.9), V(-17.0, 1.2, -7.16), V(-18.55, 1.2, -7.16)],
      { kind: 'worker', allow: ['control', 'dosC', 'coag', 'estructura:platform-stair', 'estructura:platform-deck', 'estructura:platform-rail-s'] }],
    // Escalera de gato de la pasarela UASB → recorrido de la pasarela (piso 1,95 m)
    'w-uasb': [[V(-11.0, 0, -1.275), V(-10.1, 0, -1.275), V(-10.1, 1.95, -1.275), V(-9.4, 1.95, -1.275), V(4.0, 1.95, -1.275)],
      { kind: 'worker', allow: ['estructura:catwalk-deck'] }],
    // Dentro del lecho (sobre la torta) → acceso sur → junto a la caja del camión de lodos
    'w-bed-a': [[V(-22.4, 0.2, 7.3), V(-21.6, 0.2, 7.9), V(-21.6, 0.2, 8.55), V(-21.6, 0, 9.15), V(-21.6, 0, 9.85)], { kind: 'worker', allow: ['sludge'] }],
    'w-bed-b': [[V(-20.0, 0.2, 7.5), V(-20.8, 0.2, 8.0), V(-20.8, 0.2, 8.55), V(-20.8, 0, 9.15), V(-20.8, 0, 9.85)], { kind: 'worker', allow: ['sludge'] }],
    // Plataforma elevadora del camión químico → cortina de la bodega de ED-01
    'w-unload': [[V(-26.0, 0, 2.5), V(-26.0, 0, 0.2), V(-26.0, 0.15, -0.55), V(-26.0, 0.15, -1.0)], { kind: 'worker', allow: ['control'] }],
    // Soplante B-301 → pie de la escalera del MBBR → subida a 1,5 m (inspección)
    'w-mbbr': [[V(17.0, 0, 0.55), V(16.1, 0, 0.55), V(15.98, 0, 0.15), V(15.98, 1.5, 0.15)], { kind: 'worker', allow: ['mbbr'] }],
    // Ronda larga por los corredores: ida por z = −4,75, vuelta por z = −4,25
    'w-patrol': [[V(-20.9, 0, -2.2), V(-20.55, 0, -2.2), V(-20.55, 0, -4.75), V(9.85, 0, -4.75), V(9.85, 0, 4.6), V(5.2, 0, 4.6),
      V(5.2, 0, -4.25), V(-20.15, 0, -4.25), V(-20.15, 0, -2.6), V(-20.9, 0, -2.2)], { kind: 'worker', allow: ['control'] }],
    // Peldaño de la rejilla RJ-100 (puesto de rastrillado)
    'w-screen': [[V(-27.5, 0, -6.3), V(-27.5, 0.3, -6.95), V(-28.9, 0.3, -7.1)], { kind: 'worker', allow: ['screen'] }],
  };
  const routes: Record<string, ActorRoute> = {};
  const meta: Record<string, RouteMeta> = {};
  for (const [k, [pts, m]] of Object.entries(R)) { routes[k] = new ActorRouteImpl(pts); meta[k] = m; }
  return { routes, meta };
}
