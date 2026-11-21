/**
 * Estructuras auxiliares: plataforma elevada de TK-102/TK-103 con escalera, pasarela de la fila UASB con
 * escalera de gato, marcas de circulación pintadas en la losa, bolardos, postes de cerco y la cámara de
 * llegada del lixiviado. Todo estático y fusionado por material. Expone huellas para la validación.
 */
import * as THREE from 'three';
import type { Footprint } from './types';
import { INLET_POINT, ROAD, SITE, UNIT_BY_ID } from './layout';
import { MAT } from '../scene/materials';
import { distToRoad } from './actors/road';
import { Batcher, cyl, handrail, ladder, rbox, T } from './units/common';

export interface StructureFootprint {
  id: string; footprint: Footprint;
  /** Tuberías que la estructura aloja (excluidas de la verificación de paso). */
  hosts?: string[];
}

/** Plataforma TK-102/TK-103 (cota de piso = base de las unidades). */
export const PLATFORM = { minX: -19.6, maxX: -14.5, minZ: -9.1, maxZ: -6.9, stairX: -17.0, stairW: 0.8, stairRun: 1.8 };
/** Pasarela de la fila UASB (lado norte). Fase 2: piso a 1,95 m para dejar 2,25 m libres bajo los ramales a 4,2 m. */
export const CATWALK = { minX: -9.6, maxX: 4.4, minZ: -1.85, maxZ: -0.7, deckY: 1.95, railH: 0.95 };

const fp = (id: string, min: [number, number, number], max: [number, number, number], hosts?: string[]): StructureFootprint => ({ id, footprint: { min, max }, hosts });

export function buildStructures(): { group: THREE.Group; footprints: StructureFootprint[] } {
  const group = new THREE.Group();
  group.name = 'structures';
  const b = new Batcher();
  const paint = new Batcher();
  const footprints: StructureFootprint[] = [];

  /* --- Plataforma de coagulación/floculación --- */
  {
    const P = PLATFORM, y = UNIT_BY_ID.coag.base;
    const cx = (P.minX + P.maxX) / 2, cz = (P.minZ + P.maxZ) / 2, w = P.maxX - P.minX, l = P.maxZ - P.minZ;
    b.add(rbox(w, 0.06, l, 0.015), MAT.grating, T(cx, y - 0.03, cz));
    for (const z of [P.minZ, P.maxZ]) b.add(rbox(w, 0.16, 0.07, 0.015), MAT.steelBlue, T(cx, y - 0.1, z));
    for (const x of [P.minX, P.maxX]) b.add(rbox(0.07, 0.16, l, 0.015), MAT.steelBlue, T(x, y - 0.1, cz));
    for (const x of [P.minX + 0.08, cx, P.maxX - 0.08]) for (const z of [P.minZ + 0.08, P.maxZ - 0.08]) {
      b.add(rbox(0.09, y - 0.06, 0.09, 0.015), MAT.steelBlue, T(x, (y - 0.06) / 2, z));
      b.add(rbox(0.22, 0.03, 0.22, 0.01), MAT.steelDark, T(x, 0.015, z));
    }
    // Barandas norte y sur (con hueco para la escalera)
    handrail(b, [new THREE.Vector3(P.minX + 0.05, y, P.minZ + 0.03), new THREE.Vector3(P.maxX - 0.05, y, P.minZ + 0.03)], 1.0, 1.3);
    const sx0 = P.stairX - P.stairW / 2, sx1 = P.stairX + P.stairW / 2, zs = P.maxZ - 0.03;
    handrail(b, [new THREE.Vector3(P.minX + 0.05, y, zs), new THREE.Vector3(sx0, y, zs)], 1.0, 1.3);
    handrail(b, [new THREE.Vector3(sx1, y, zs), new THREE.Vector3(P.maxX - 0.05, y, zs)], 1.0, 1.3);
    // Escalera hacia el sur
    const nSteps = 6, rise = y / nSteps, run = P.stairRun / nSteps;
    for (let i = 0; i < nSteps - 1; i++) {
      const yy = y - rise * (i + 1), zz = P.maxZ + run * (i + 0.5);
      b.add(rbox(P.stairW - 0.06, 0.04, run * 0.92, 0.01), MAT.grating, T(P.stairX, yy, zz));
    }
    for (const x of [sx0, sx1]) {
      const a = new THREE.Vector3(x, y - 0.05, P.maxZ), c = new THREE.Vector3(x, 0.0, P.maxZ + P.stairRun);
      b.rod(a, c, 0.035, MAT.steelBlue, 6);
      handrail(b, [new THREE.Vector3(x, y, P.maxZ), new THREE.Vector3(x, 0.05, P.maxZ + P.stairRun)], 0.95, 2.5);
    }
    footprints.push(fp('platform-deck', [P.minX, 0, P.minZ], [P.maxX, y + 0.02, P.maxZ]));
    footprints.push(fp('platform-rail-n', [P.minX, y, P.minZ - 0.03], [P.maxX, y + 1.02, P.minZ + 0.06]));
    footprints.push(fp('platform-rail-s', [P.minX, y, P.maxZ - 0.06], [P.maxX, y + 1.02, P.maxZ + 0.03]));
    footprints.push(fp('platform-stair', [sx0, 0, P.maxZ], [sx1, y + 1.0, P.maxZ + P.stairRun]));
  }

  /* --- Pasarela de la fila UASB --- */
  {
    const C = CATWALK, y = C.deckY;
    const cx = (C.minX + C.maxX) / 2, cz = (C.minZ + C.maxZ) / 2, w = C.maxX - C.minX, l = C.maxZ - C.minZ;
    b.add(rbox(w, 0.06, l, 0.015), MAT.grating, T(cx, y - 0.03, cz));
    for (const z of [C.minZ, C.maxZ]) b.add(rbox(w, 0.18, 0.07, 0.015), MAT.steelBlue, T(cx, y - 0.11, z));
    for (const x of [C.minX + 0.1, -6.2, -2.6, 1.0, C.maxX - 0.1]) {
      for (const z of [C.minZ + 0.06, C.maxZ - 0.06]) {
        b.add(rbox(0.1, y - 0.2, 0.1, 0.015), MAT.steelBlue, T(x, (y - 0.2) / 2, z));
        b.add(rbox(0.24, 0.03, 0.24, 0.01), MAT.steelDark, T(x, 0.015, z));
      }
      b.add(rbox(0.07, 0.1, l, 0.012), MAT.steelBlue, T(x, y - 0.25, cz));
    }
    handrail(b, [new THREE.Vector3(C.minX + 0.05, y, C.minZ + 0.03), new THREE.Vector3(C.maxX - 0.05, y, C.minZ + 0.03), new THREE.Vector3(C.maxX - 0.05, y, C.maxZ - 0.03)], C.railH, 1.4);
    ladder(b, new THREE.Vector3(C.minX - 0.18, 0, cz), y, new THREE.Vector3(-1, 0, 0), true);
    footprints.push(fp('catwalk-deck', [C.minX, 0, C.minZ], [C.maxX, y + 0.02, C.maxZ]));
    footprints.push(fp('catwalk-rail', [C.minX, y, C.minZ - 0.03], [C.maxX, y + C.railH + 0.03, C.minZ + 0.08]));
  }

  /* --- Cámara de llegada del lixiviado (punto de entrada al sitio) --- */
  {
    const [x, z] = INLET_POINT;
    const s = 0.9, h = 0.45, t = 0.1;
    b.add(rbox(s, 0.06, s, 0.02), MAT.concreteDark, T(x, 0.03, z));
    b.add(rbox(t, h, s, 0.025), MAT.concrete, T(x - s / 2 + t / 2, h / 2, z));
    b.add(rbox(t, h, s, 0.025), MAT.concrete, T(x + s / 2 - t / 2, h / 2, z));
    b.add(rbox(s, h, t, 0.025), MAT.concrete, T(x, h / 2, z - s / 2 + t / 2));
    b.add(rbox(s, h, t, 0.025), MAT.concrete, T(x, h / 2, z + s / 2 - t / 2));
    footprints.push(fp('inlet-pit', [x - s / 2, 0, z - s / 2], [x + s / 2, h, z + s / 2], ['p-inlet']));
  }

  /* --- Marcas de circulación pintadas (líneas dobles) --- */
  const stripe = (x0: number, z0: number, x1: number, z1: number) => {
    const lx = Math.abs(x1 - x0), lz = Math.abs(z1 - z0);
    paint.add(new THREE.PlaneGeometry(Math.max(lx, 0.07), Math.max(lz, 0.07)).rotateX(-Math.PI / 2), MAT.walkway, T((x0 + x1) / 2, 0.004, (z0 + z1) / 2));
  };
  const corridor = (x0: number, z0: number, x1: number, z1: number, half = 0.6) => {
    if (Math.abs(z1 - z0) < 1e-6) { stripe(x0, z0 - half, x1, z0 - half); stripe(x0, z0 + half, x1, z0 + half); }
    else { stripe(x0 - half, z0, x0 - half, z1); stripe(x0 + half, z0, x0 + half, z1); }
  };
  corridor(-30.0, -4.6, 5.0, -4.6);
  corridor(5.2, -3.9, 5.2, 3.9);
  corridor(-8.6, 4.6, 17.5, 4.6);
  corridor(-13.55, -11.2, -13.55, -5.3, 0.5);

  /* --- Bolardos --- */
  for (const [x, z] of [[-1.9, -6.9], [-1.9, -9.1], [-30.0, -6.9], [-30.0, -9.1], [-0.5, 12.6], [2.5, 12.6]] as const) {
    b.add(cyl(0.09, 0.85, 16), MAT.rail, T(x, 0.425, z));
    b.add(new THREE.SphereGeometry(0.09, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), MAT.rail, T(x, 0.85, z));
    b.add(cyl(0.093, 0.08, 16), MAT.rubber, T(x, 0.62, z));
  }

  /* --- Postes de cerco perimetral (escasos; el lado sur solo postes, sin pasamanos) --- */
  {
    const inset = 0.45, h = 1.4;
    const x0 = SITE.minX + inset, x1 = SITE.maxX - inset, z0 = SITE.minZ + inset, z1 = SITE.maxZ - inset;
    const edges: [number, number, number, number, boolean][] = [
      [x0, z0, x1, z0, true], [x1, z0, x1, z1, true], [x0, z1, x1, z1, false], [x0, z0, x0, z1, true],
    ];
    for (const [ax, az, bx, bz, rail] of edges) {
      const L = Math.hypot(bx - ax, bz - az), n = Math.round(L / 4);
      for (let k = 0; k <= n; k++) {
        const x = ax + (bx - ax) * (k / n), z = az + (bz - az) * (k / n);
        if (Math.abs(z - INLET_POINT[1]) < 1.2 && Math.abs(x - SITE.minX) < 1) continue; // paso de la llegada
        if (Math.abs(z - ROAD.z) < ROAD.width / 2 + 0.6 && Math.abs(x - SITE.minX) < 1) continue; // portón
        if (distToRoad(x, z) < ROAD.width / 2 + 0.25) continue;                                   // calzada
        b.add(rbox(0.06, h, 0.06, 0.012), MAT.steelDark, T(x, h / 2, z));
      }
      if (rail && Math.abs(ax - bx) < 1e-6 && Math.abs(ax - (SITE.minX + inset)) < 1e-6) {
        // Lado oeste: pasamanos interrumpido en el portón de la vía
        const g0 = ROAD.z - ROAD.width / 2 - 0.6, g1 = ROAD.z + ROAD.width / 2 + 0.6;
        b.rod(new THREE.Vector3(ax, h - 0.05, az), new THREE.Vector3(ax, h - 0.05, g0), 0.018, MAT.steelDark, 5);
        b.rod(new THREE.Vector3(ax, h - 0.05, g1), new THREE.Vector3(bx, h - 0.05, bz), 0.018, MAT.steelDark, 5);
      } else if (rail) b.rod(new THREE.Vector3(ax, h - 0.05, az), new THREE.Vector3(bx, h - 0.05, bz), 0.018, MAT.steelDark, 5);
    }
  }

  b.build(group);
  const pm = paint.build(group, false, false);
  for (const m of pm) m.renderOrder = -1;
  group.userData.footprints = footprints;
  return { group, footprints };
}
