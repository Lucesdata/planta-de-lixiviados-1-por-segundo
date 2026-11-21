/**
 * Tote IBC de 1 m³ (supuesto visual): estiba, tanque translúcido y jaula de acero. Geometrías cacheadas y
 * conjuntos instanciados (3 mallas por conjunto, una por material) con número visible variable.
 * Dimensiones: 1,2 (x) × 1,0 (z) × 1,16 (y) m; origen en el centro de la base.
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { MAT2 } from '../../scene/materials';
import { rbox, segMatrix } from '../units/common';

export const TOTE = { w: 1.2, l: 1.0, h: 1.16 };

let cache: { pallet: THREE.BufferGeometry; tank: THREE.BufferGeometry; cage: THREE.BufferGeometry } | null = null;

const ni = (g: THREE.BufferGeometry) => (g.index ? g.toNonIndexed() : g);

function rod(a: THREE.Vector3, b: THREE.Vector3, r: number): THREE.BufferGeometry {
  return new THREE.CylinderGeometry(r, r, 1, 5, 1).applyMatrix4(segMatrix(a, b));
}

export function toteGeometries() {
  if (cache) return cache;
  const { w, l, h } = TOTE;
  const pallet = mergeGeometries([
    rbox(w, 0.04, l, 0.01).translate(0, 0.13, 0),
    ...[-0.5, 0, 0.5].map(x => rbox(0.12, 0.11, l, 0.01).translate(x * (w - 0.12), 0.055, 0)),
  ].map(ni))!;
  const tank = rbox(w - 0.1, h - 0.22, l - 0.1, 0.09, 3).translate(0, 0.15 + (h - 0.22) / 2, 0);
  const tankAll = mergeGeometries([ni(tank), ni(new THREE.CylinderGeometry(0.09, 0.09, 0.06, 14).translate(0, h - 0.04, 0))])!;
  const rods: THREE.BufferGeometry[] = [];
  const y0 = 0.15, y1 = h;
  const xs = [-w / 2, -w / 6, w / 6, w / 2], zs = [-l / 2, 0, l / 2];
  for (const x of xs) for (const z of [-l / 2, l / 2]) rods.push(rod(new THREE.Vector3(x, y0, z), new THREE.Vector3(x, y1, z), 0.012));
  for (const z of zs) for (const x of [-w / 2, w / 2]) rods.push(rod(new THREE.Vector3(x, y0, z), new THREE.Vector3(x, y1, z), 0.012));
  for (const y of [y0, (y0 + y1) / 2, y1]) {
    for (const z of [-l / 2, l / 2]) rods.push(rod(new THREE.Vector3(-w / 2, y, z), new THREE.Vector3(w / 2, y, z), 0.012));
    for (const x of [-w / 2, w / 2]) rods.push(rod(new THREE.Vector3(x, y, -l / 2), new THREE.Vector3(x, y, l / 2), 0.012));
  }
  const cage = mergeGeometries(rods.map(ni))!;
  cache = { pallet, tank: tankAll, cage };
  return cache;
}

export interface ToteSet {
  group: THREE.Group;
  /** Muestra las primeras n posiciones. */
  setCount(n: number): void;
  capacity: number;
}

/** Conjunto instanciado de totes en las posiciones dadas (matrices locales del grupo). */
export function createToteSet(slots: THREE.Matrix4[]): ToteSet {
  const g = toteGeometries();
  const group = new THREE.Group();
  const meshes = ([[g.pallet, MAT2.pallet], [g.tank, MAT2.ibcTank], [g.cage, MAT2.ibcCage]] as const).map(([geo, mat]) => {
    const m = new THREE.InstancedMesh(geo, mat, slots.length);
    slots.forEach((s, i) => m.setMatrixAt(i, s));
    m.castShadow = true;
    m.receiveShadow = true;
    m.count = 0;
    m.frustumCulled = false;
    group.add(m);
    return m;
  });
  return {
    group, capacity: slots.length,
    setCount(n) {
      const k = Math.max(0, Math.min(slots.length, Math.round(n)));
      for (const m of meshes) m.count = k;
      group.visible = k > 0;
    },
  };
}
