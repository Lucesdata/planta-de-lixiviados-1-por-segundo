/**
 * Tanque intermedio TK-104: pulmón de succión cerrado con ventana de nivel.
 * El nivel visible depende del flujo fijado (más una oscilación leve con la actividad).
 */
import * as THREE from 'three';
import type { PlantUnit } from '../types';
import { CAMERA_DIR, UNIT_BY_ID, type UnitSpec } from '../layout';
import { MAT, PALETTE, createLiquidMaterial, createWindowedShellMaterial } from '../../scene/materials';
import {
  Batcher, addInspectionWindow, arcRing, cameraPhi, createRoot, createStatusLamp, cyl, finalizeUnit, lathe,
  nozzle, outlineProfile, tankShellProfile,
} from './common';

export function createIntermediate(spec: UnitSpec = UNIT_BY_ID.inter): PlantUnit {
  const R = spec.size.d! / 2, H = spec.size.h, y0 = spec.base, y1 = y0 + H;
  const root = createRoot(spec);
  const b = new Batcher();
  const phi = cameraPhi(CAMERA_DIR);
  const t = 0.05;

  b.add(lathe([[0, 0], [R + 0.12, 0], [R + 0.12, y0], [0, y0]], 0.04, 40), MAT.concrete);
  const win = { phi, halfWidth: 0.42, y0: y0 + 0.14, y1: y1 - 0.16, r: R };
  b.add(lathe(tankShellProfile(R, y0, H, t, false), 0.05, 56), createWindowedShellMaterial(PALETTE.offWhite, win));
  arcRing(b, R + 0.008, 0.03, y1 - 0.01, 0, Math.PI * 2, MAT.steelBlue);
  arcRing(b, R + 0.008, 0.025, y0 + 0.03, 0, Math.PI * 2, MAT.steelBlue);
  const glass = addInspectionWindow(b, root, win, [[R, win.y0], [R, win.y1]]);
  // Regla de nivel junto a la ventana (marcas)
  const a = phi - win.halfWidth - 0.1;
  for (let k = 0; k <= 4; k++) {
    const yy = win.y0 + (k / 4) * (win.y1 - win.y0);
    const n = new THREE.Vector3(Math.sin(a), 0, Math.cos(a));
    b.rod(n.clone().multiplyScalar(R).setY(yy), n.clone().multiplyScalar(R + 0.035).setY(yy), 0.012, MAT.steelDark, 5);
  }
  b.add(cyl(0.16, 0.06, 24), MAT.steel, (() => { const m = new THREE.Matrix4(); m.makeTranslation(0.25, y1 + 0.03, -0.2); return m; })());

  const pin = nozzle(b, new THREE.Vector3(-0.3, y1 - 0.02, 0), new THREE.Vector3(0, 1, 0), 0.1);
  const pout = nozzle(b, new THREE.Vector3(R - 0.02, 0.5, 0), new THREE.Vector3(1, 0, 0), 0.17);
  const meshes = b.build(root);

  const rIn = R - t - 0.012;
  const liquid = createLiquidMaterial({ color: PALETTE.clarified, opacity: 0.5, mode: 'still' });
  const col = new THREE.Mesh(cyl(rIn, 1, 40), liquid.material);
  col.renderOrder = 1;
  root.add(col);

  const lamp = createStatusLamp(new THREE.Vector3(Math.sin(phi) * 0.45, y1, Math.cos(phi) * 0.45));
  const outline = outlineProfile([[R + 0.05, 0.01], [R + 0.05, y1 + 0.02]], 4);

  return finalizeUnit({
    spec, root,
    localAnchors: {
      label: new THREE.Vector3(0, y1 + 0.95, 0),
      focus: new THREE.Vector3(0, y0 + H * 0.5, 0),
      core: new THREE.Vector3(0, y0 + H * 0.45, 0),
      in: pin, out: pout,
    },
    radius: 1.0,
    localBox: { min: [-R - 0.12, 0, -R - 0.12], max: [R + 0.12, y1 + 0.12, R + 0.12] },
    pickTargets: [...meshes, glass],
    outline, glowRadius: R * 1.8, glowY: 0.015, lamp,
    animate(tt, s) {
      liquid.uniforms.uGlow.value = 0.04 + 0.2 * s.flow + (s.active ? 0.08 : 0);
      const yb = y0 + 0.07;
      const level = yb + (H - 0.3) * (0.3 + 0.55 * s.flow) + 0.025 * Math.sin(tt * 0.9) * s.motion;
      col.scale.y = Math.max(0.01, level - yb);
      col.position.y = (level + yb) / 2;
    },
  });
}
