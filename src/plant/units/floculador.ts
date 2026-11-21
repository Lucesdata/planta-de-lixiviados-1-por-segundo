/**
 * Tanque de floculación TK-103: cilindro abierto de PRFV sobre la plataforma, agitador lento,
 * remolino lento y motas de flóculo que crecen al alejarse del centro.
 */
import * as THREE from 'three';
import type { PlantUnit } from '../types';
import { UNIT_BY_ID, type UnitSpec } from '../layout';
import { MAT, PALETTE, createLiquidMaterial } from '../../scene/materials';
import {
  Batcher, arcRing, createRoot, createStatusLamp, finalizeUnit, fract, hash01, lathe, nozzle,
  outlineProfile, rbox, setInstance, tankShellProfile, T,
} from './common';
import { addAgitator } from './mixers';

export function createFlocculator(spec: UnitSpec = UNIT_BY_ID.floc): PlantUnit {
  const R = spec.size.d! / 2, H = spec.size.h, y0 = spec.base, y1 = y0 + H;
  const root = createRoot(spec);
  const b = new Batcher();
  const t = 0.05;

  b.add(rbox(2 * R + 0.14, 0.06, 2 * R + 0.14, 0.02), MAT.steelDark, T(0, y0 - 0.01, 0));
  b.add(lathe(tankShellProfile(R, y0, H, t, true, 0.06), 0.04, 56), MAT.offWhite);
  arcRing(b, R + 0.005, 0.03, y1 - 0.005, 0, Math.PI * 2, MAT.steelBlue);
  arcRing(b, R + 0.008, 0.02, y0 + 0.5, 0, Math.PI * 2, MAT.steelBlue);

  const pin = nozzle(b, new THREE.Vector3(-R + 0.01, 1.85, 0), new THREE.Vector3(-1, 0, 0), 0.16);
  const pout = nozzle(b, new THREE.Vector3(R - 0.01, 1.75, 0), new THREE.Vector3(1, 0, 0), 0.16);

  // Lanza de inyección de polímero (puerto 'dose')
  const qx = 0.2, qz = 0.38;
  b.rod(new THREE.Vector3(qx, y1 - 0.35, qz), new THREE.Vector3(qx, y1 + 0.12, qz), 0.022, MAT.steel, 8);
  b.add(rbox(0.08, 0.06, 0.08, 0.01), MAT.steelDark, T(qx, y1 + 0.02, qz));
  const pdose = new THREE.Vector3(qx, y1 + 0.12, qz);
  const yL = y1 - 0.12;
  const rot = addAgitator(b, root, 2 * R + 0.12, y1 + 0.02, yL - 0.05, 0.85);
  const meshes = b.build(root);

  const liquid = createLiquidMaterial({ color: PALETTE.leachate, hi: 0xb89462, mode: 'swirl', speed: 1.1, scale: 2.4, center: [spec.pos[0], spec.pos[1]] });
  const surf = new THREE.Mesh(new THREE.CircleGeometry(R - t, 48), liquid.material);
  surf.rotation.x = -Math.PI / 2;
  surf.position.y = yL;
  surf.receiveShadow = true;

  const NF = 44;
  const flocs = new THREE.InstancedMesh(new THREE.CylinderGeometry(1, 1, 0.3, 7), MAT.flocSpeck, NF);
  flocs.frustumCulled = false;
  root.add(surf, flocs);

  const lamp = createStatusLamp(new THREE.Vector3(R - 0.1, y1 + 0.07, 0.0));
  const outline = outlineProfile([[R + 0.05, y0 - 0.04], [R + 0.05, y1 + 0.02]], 4);

  return finalizeUnit({
    spec, root,
    localAnchors: {
      label: new THREE.Vector3(0, y1 + 1.05, 0),
      focus: new THREE.Vector3(0, y0 + H * 0.55, 0),
      core: new THREE.Vector3(0, y0 + H * 0.5, 0),
      in: pin, out: pout, dose: pdose,
    },
    radius: 1.0,
    localBox: { min: [-R - 0.07, y0 - 0.04, -R - 0.07], max: [R + 0.07, y1 + 0.55, R + 0.07] },
    pickTargets: [...meshes, surf],
    outline, glowRadius: 1.1, glowY: y0 + 0.01, lamp,
    animate(tt, s) {
      const m = s.motion;
      liquid.uniforms.uTime.value = tt;
      liquid.uniforms.uMotion.value = m;
      liquid.uniforms.uGlow.value = 0.03 + 0.2 * s.flow + (s.active ? 0.06 : 0);
      rot.rotation.y = tt * 2.4 * m;
      const vis = Math.min(1, m * 2);
      for (let i = 0; i < NF; i++) {
        const f = fract(hash01(i, 1) + tt * 0.045);          // deriva radial hacia afuera
        const r = (0.08 + 0.82 * f) * (R - t - 0.05);
        const a = hash01(i, 2) * Math.PI * 2 + tt * 0.6 * m / (0.3 + f);
        const sz = vis * (0.006 + 0.022 * f * (0.6 + 0.4 * hash01(i, 3))) * (f > 0.92 ? (1 - f) / 0.08 : 1);
        setInstance(flocs, i, Math.sin(a) * r, yL + 0.004, Math.cos(a) * r, [Math.max(sz, 1e-4), 0.02, Math.max(sz, 1e-4)]);
      }
      flocs.instanceMatrix.needsUpdate = true;
    },
  });
}
