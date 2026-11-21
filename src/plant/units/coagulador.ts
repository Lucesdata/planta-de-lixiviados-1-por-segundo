/**
 * Tanque de coagulación TK-102: caja abierta de PRFV sobre la plataforma (cota 1,2 m),
 * agitador rápido y remolino rápido en superficie.
 */
import * as THREE from 'three';
import type { PlantUnit } from '../types';
import { UNIT_BY_ID, type UnitSpec } from '../layout';
import { MAT, PALETTE, createLiquidMaterial } from '../../scene/materials';
import { Batcher, createRoot, createStatusLamp, finalizeUnit, nozzle, outlineBox, rbox, T } from './common';
import { addAgitator } from './mixers';

export function createCoagulator(spec: UnitSpec = UNIT_BY_ID.coag): PlantUnit {
  const W = spec.size.w!, H = spec.size.h, L = spec.size.l!, y0 = spec.base, y1 = y0 + H;
  const root = createRoot(spec);
  const b = new Batcher();
  const t = 0.06;

  // Caja abierta: fondo + 4 paredes con cantos redondeados, marco superior
  b.add(rbox(W, 0.08, L, 0.03), MAT.offWhite, T(0, y0 + 0.04, 0));
  b.add(rbox(t, H, L, 0.025), MAT.offWhite, T(-W / 2 + t / 2, y0 + H / 2, 0));
  b.add(rbox(t, H, L, 0.025), MAT.offWhite, T(W / 2 - t / 2, y0 + H / 2, 0));
  b.add(rbox(W, H, t, 0.025), MAT.offWhite, T(0, y0 + H / 2, -L / 2 + t / 2));
  b.add(rbox(W, H, t, 0.025), MAT.offWhite, T(0, y0 + H / 2, L / 2 - t / 2));
  for (const [x, z, w, l] of [[0, L / 2, W + 0.04, 0.05], [0, -L / 2, W + 0.04, 0.05], [W / 2, 0, 0.05, L + 0.04], [-W / 2, 0, 0.05, L + 0.04]] as const) {
    b.add(rbox(w, 0.05, l, 0.02), MAT.steelBlue, T(x, y1 - 0.02, z));
  }
  // Patín de apoyo
  b.add(rbox(W + 0.12, 0.06, L + 0.12, 0.02), MAT.steelDark, T(0, y0 - 0.01, 0));

  const pin = nozzle(b, new THREE.Vector3(-W / 2 + 0.01, 1.85, 0), new THREE.Vector3(-1, 0, 0), 0.14);
  const pout = nozzle(b, new THREE.Vector3(W / 2 - 0.01, 1.85, 0), new THREE.Vector3(1, 0, 0), 0.14);

  // Lanza de inyección de coagulante (puerto 'dose', apunta hacia arriba; la línea llega por encima de la baranda)
  const qx = 0.25, qz = L / 2 - 0.12;
  b.rod(new THREE.Vector3(qx, y1 - 0.35, qz), new THREE.Vector3(qx, y1 + 0.12, qz), 0.022, MAT.steel, 8);
  b.add(rbox(0.08, 0.06, 0.08, 0.01), MAT.steelDark, T(qx, y1 + 0.02, qz));
  const pdose = new THREE.Vector3(qx, y1 + 0.12, qz);
  const yL = y1 - 0.12;
  const rot = addAgitator(b, root, W + 0.1, y1 + 0.02, yL - 0.05, 0.85);
  const meshes = b.build(root);

  const liquid = createLiquidMaterial({ color: PALETTE.leachate, hi: 0xc09a60, mode: 'swirl', speed: 4.2, scale: 2.2, center: [spec.pos[0], spec.pos[1]] });
  const surf = new THREE.Mesh(new THREE.PlaneGeometry(W - 2 * t, L - 2 * t), liquid.material);
  surf.rotation.x = -Math.PI / 2;
  surf.position.y = yL;
  surf.receiveShadow = true;
  root.add(surf);

  const lamp = createStatusLamp(new THREE.Vector3(W / 2 - 0.08, y1 + 0.05, 0.18));
  const outline = outlineBox(new THREE.Vector3(-W / 2 - 0.04, y0 - 0.04, -L / 2 - 0.04), new THREE.Vector3(W / 2 + 0.04, y1 + 0.02, L / 2 + 0.04));

  return finalizeUnit({
    spec, root,
    localAnchors: {
      label: new THREE.Vector3(0, y1 + 1.05, 0),
      focus: new THREE.Vector3(0, y0 + H * 0.55, 0),
      core: new THREE.Vector3(0, y0 + H * 0.5, 0),
      in: pin, out: pout, dose: pdose,
    },
    radius: 1.0,
    localBox: { min: [-W / 2 - 0.06, y0 - 0.04, -L / 2 - 0.06], max: [W / 2 + 0.06, y1 + 0.55, L / 2 + 0.06] },
    pickTargets: [...meshes, surf],
    outline, glowRadius: 1.15, glowY: y0 + 0.01, lamp,
    animate(tt, s) {
      liquid.uniforms.uTime.value = tt;
      liquid.uniforms.uMotion.value = s.motion;
      liquid.uniforms.uGlow.value = 0.03 + 0.2 * s.flow + (s.active ? 0.06 : 0);
      rot.rotation.y = tt * 9.0 * s.motion;
    },
  });
}
