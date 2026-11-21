/**
 * Descarga DS-501: cámara de salida, canal abierto corto con agua en movimiento hasta un cabezal
 * (headwall) con aletas; el tubo de descarga sale por el cabezal hacia el exterior del sitio
 * (enrocado de disipación fuera de la losa).
 */
import * as THREE from 'three';
import type { PlantUnit } from '../types';
import { UNIT_BY_ID, type UnitSpec } from '../layout';
import { MAT, PALETTE, createLiquidMaterial } from '../../scene/materials';
import { Batcher, createRoot, createStatusLamp, finalizeUnit, hash01, outlineBox, rbox, T } from './common';

/** Distancia (m) de la cara exterior del cabezal desde el centro de la cámara, hacia +z. */
export const DISCHARGE_HEADWALL_Z = 3.9;

export function createDischarge(spec: UnitSpec = UNIT_BY_ID.discharge): PlantUnit {
  const W = spec.size.w!, H = spec.size.h, L = spec.size.l!;
  const root = createRoot(spec);
  const b = new Batcher();
  const t = 0.15;

  // Cámara
  b.add(rbox(W, 0.12, L, 0.03), MAT.concrete, T(0, 0.06, 0));
  b.add(rbox(t, H, L, 0.04), MAT.concrete, T(-W / 2 + t / 2, H / 2, 0));
  b.add(rbox(t, H, L, 0.04), MAT.concrete, T(W / 2 - t / 2, H / 2, 0));
  b.add(rbox(W, H, t, 0.04), MAT.concrete, T(0, H / 2, -L / 2 + t / 2));
  b.add(rbox((W - 0.6) / 2, H, t, 0.04), MAT.concrete, T(-(W + 0.6) / 4, H / 2, L / 2 - t / 2));
  b.add(rbox((W - 0.6) / 2, H, t, 0.04), MAT.concrete, T((W + 0.6) / 4, H / 2, L / 2 - t / 2));
  b.add(rbox(0.6, 0.3, t, 0.03), MAT.concrete, T(0, 0.15, L / 2 - t / 2));                    // vertedero
  // Canal abierto
  const zc0 = L / 2, zc1 = DISCHARGE_HEADWALL_Z - 0.25, cl = zc1 - zc0;
  b.add(rbox(0.86, 0.1, cl, 0.02), MAT.concrete, T(0, 0.05, (zc0 + zc1) / 2));
  b.add(rbox(0.12, 0.45, cl, 0.03), MAT.concrete, T(-0.37, 0.225, (zc0 + zc1) / 2));
  b.add(rbox(0.12, 0.45, cl, 0.03), MAT.concrete, T(0.37, 0.225, (zc0 + zc1) / 2));
  // Cabezal con aletas
  b.add(rbox(2.2, 1.0, 0.25, 0.05), MAT.concrete, T(0, 0.5, DISCHARGE_HEADWALL_Z - 0.125));
  b.add(rbox(0.2, 0.75, 0.6, 0.04), MAT.concrete, T(-1.0, 0.375, DISCHARGE_HEADWALL_Z + 0.2, 0, 0.3, 0));
  b.add(rbox(0.2, 0.75, 0.6, 0.04), MAT.concrete, T(1.0, 0.375, DISCHARGE_HEADWALL_Z + 0.2, 0, -0.3, 0));
  b.rod(new THREE.Vector3(0, 0.35, DISCHARGE_HEADWALL_Z - 0.3), new THREE.Vector3(0, 0.35, DISCHARGE_HEADWALL_Z + 0.02), 0.12, MAT.concreteDark, 18);
  // Boquilla de entrada (muro este) desde el filtro
  b.rod(new THREE.Vector3(W / 2 - 0.02, 0.4, 0), new THREE.Vector3(W / 2 + 0.15, 0.4, 0), 0.085, MAT.steel, 14);
  b.rod(new THREE.Vector3(W / 2 + 0.105, 0.4, 0), new THREE.Vector3(W / 2 + 0.15, 0.4, 0), 0.14, MAT.steel, 18);
  // Rejilla sobre la cámara (media)
  b.add(rbox(W - 0.1, 0.04, L / 2 - 0.1, 0.01), MAT.grating, T(0, H + 0.02, -L / 4));
  // Enrocado de disipación fuera del sitio (determinista)
  const rock = new THREE.DodecahedronGeometry(1, 0);
  for (let i = 0; i < 16; i++) {
    const x = (hash01(i, 21) - 0.5) * 1.8, z = DISCHARGE_HEADWALL_Z + 1.6 + hash01(i, 22) * 1.3;
    const s = 0.12 + 0.12 * hash01(i, 23);
    b.add(rock, MAT.concreteDark, T(x, -0.12 + s * 0.4, z, hash01(i, 24) * 3, hash01(i, 25) * 3, 0, [s * 1.2, s * 0.7, s]));
  }
  const meshes = b.build(root);

  const w1 = createLiquidMaterial({ color: PALETTE.treated, hi: 0xcbe9e2, mode: 'flow', dir: [0, 1], speed: 1, scale: 1.4, center: [spec.pos[0], spec.pos[1]] });
  const chamberWater = new THREE.Mesh(new THREE.PlaneGeometry(W - 2 * t, L - 2 * t), w1.material);
  chamberWater.rotation.x = -Math.PI / 2;
  chamberWater.position.y = H - 0.25;
  const channelWater = new THREE.Mesh(new THREE.PlaneGeometry(0.62, cl + 0.1), w1.material);
  channelWater.rotation.x = -Math.PI / 2;
  channelWater.position.set(0, 0.28, (zc0 + zc1) / 2);
  root.add(chamberWater, channelWater);

  const lamp = createStatusLamp(new THREE.Vector3(W / 2 - t / 2, H, -L / 2 + 0.2));
  const outline = outlineBox(new THREE.Vector3(-1.12, 0, -L / 2 - 0.04), new THREE.Vector3(1.12, H + 0.04, DISCHARGE_HEADWALL_Z + 0.04));

  return finalizeUnit({
    spec, root,
    localAnchors: {
      label: new THREE.Vector3(0, H + 1.0, 0.6),
      focus: new THREE.Vector3(0, 0.4, 1.2),
      core: new THREE.Vector3(0, H - 0.35, 0),
      in: new THREE.Vector3(W / 2 + 0.15, 0.4, 0),
      out: new THREE.Vector3(0, 0.35, DISCHARGE_HEADWALL_Z),
    },
    radius: 2.4,
    localBox: { min: [-1.1, 0, -L / 2], max: [1.1, H + 0.05, DISCHARGE_HEADWALL_Z] },
    pickTargets: [...meshes, chamberWater, channelWater],
    outline, glowRadius: 2.2, glowY: 0.015, lamp,
    animate(tt, s) {
      w1.uniforms.uTime.value = tt;
      w1.uniforms.uMotion.value = Math.max(s.motion, s.flow * 0.6);
      w1.uniforms.uGlow.value = 0.03 + 0.15 * s.flow + (s.active ? 0.05 : 0);
    },
  });
}
