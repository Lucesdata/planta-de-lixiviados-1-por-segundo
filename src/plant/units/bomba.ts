/**
 * Bomba de alimentación UASB P-01 en patín: placa base, motor con aletas, acople giratorio con guarda,
 * soporte de cojinetes y voluta (succión axial al oeste, descarga vertical). Estación local con lámpara.
 * Altura y potencia: supuestos (assumptions.ts). Reutilizada para P-01B (reserva, misma geometría).
 */
import * as THREE from 'three';
import type { PlantUnit } from '../types';
import { UNIT_BY_ID, type UnitSpec } from '../layout';
import { MAT } from '../../scene/materials';
import { Batcher, createRoot, createStatusLamp, cyl, finalizeUnit, outlineBox, rbox, T } from './common';

export function createPump(spec: UnitSpec = UNIT_BY_ID.pump, opts: { cabinet?: boolean } = {}): PlantUnit {
  const root = createRoot(spec);
  const b = new Batcher();
  const yb = spec.base;           // cota de la placa base
  const ax = 0.5;                 // cota del eje
  const RX = (x: number, y: number, z: number) => T(x, y, z, 0, 0, Math.PI / 2); // cilindro con eje X

  b.add(rbox(1.2, yb, 0.72, 0.04), MAT.concrete, T(0, yb / 2, 0));                  // pedestal
  b.add(rbox(1.02, 0.07, 0.5, 0.02), MAT.steelDark, T(0, yb + 0.035, 0));           // placa base
  // Motor
  b.add(cyl(0.15, 0.4, 28), MAT.motor, RX(0.2, ax, 0));
  for (let k = 0; k < 7; k++) b.add(cyl(0.162, 0.018, 28), MAT.motor, RX(0.04 + k * 0.05, ax, 0));
  b.add(cyl(0.155, 0.09, 28, 0.12), MAT.steelDark, T(0.445, ax, 0, 0, 0, -Math.PI / 2)); // tapa ventilador
  b.add(rbox(0.12, 0.08, 0.1, 0.015), MAT.motor, T(0.18, ax + 0.19, 0));            // caja de bornes
  b.add(rbox(0.36, 0.2, 0.06, 0.015), MAT.steelDark, T(0.2, yb + 0.12, 0.1));
  b.add(rbox(0.36, 0.2, 0.06, 0.015), MAT.steelDark, T(0.2, yb + 0.12, -0.1));
  // Soporte de cojinetes
  b.add(cyl(0.075, 0.16, 20), MAT.steelBlue, RX(-0.17, ax, 0));
  b.add(rbox(0.14, ax - yb - 0.06, 0.16, 0.02), MAT.steelBlue, T(-0.17, (ax + yb) / 2, 0));
  // Guarda del acople (media caña)
  const guard = new THREE.CylinderGeometry(0.12, 0.12, 0.2, 20, 1, true, -Math.PI / 2, Math.PI);
  b.add(guard, MAT.rail, T(-0.0, ax, 0, Math.PI / 2, 0, Math.PI / 2));
  // Voluta + succión axial + descarga vertical
  b.add(cyl(0.18, 0.13, 32), MAT.steelBlue, RX(-0.32, ax, 0));
  b.add(cyl(0.12, 0.06, 28), MAT.steelBlue, RX(-0.405, ax, 0));
  b.rod(new THREE.Vector3(-0.43, ax, 0), new THREE.Vector3(-0.52, ax, 0), 0.075, MAT.steel, 16);
  b.rod(new THREE.Vector3(-0.53, ax, 0), new THREE.Vector3(-0.485, ax, 0), 0.13, MAT.steel, 20);
  b.rod(new THREE.Vector3(-0.32, ax + 0.12, 0), new THREE.Vector3(-0.32, 0.95, 0), 0.07, MAT.steelBlue, 16);
  b.rod(new THREE.Vector3(-0.32, 0.905, 0), new THREE.Vector3(-0.32, 0.95, 0), 0.125, MAT.steel, 20);
  b.add(rbox(0.1, ax - yb - 0.12, 0.2, 0.02), MAT.steelBlue, T(-0.32, (ax - 0.12 + yb) / 2 + 0.03, 0));

  // Estación local de mando (poste + caja) con lámpara
  b.add(rbox(0.06, 1.05, 0.06, 0.012), MAT.steelDark, T(0.38, 0.525, 0.48));
  b.add(rbox(0.22, 0.26, 0.12, 0.025), MAT.offWhite, T(0.38, 1.0, 0.48));
  b.add(rbox(0.04, 0.04, 0.02, 0.008), MAT.rubber, T(0.33, 0.97, 0.545));
  b.add(rbox(0.04, 0.04, 0.02, 0.008), MAT.rubber, T(0.43, 0.97, 0.545));
  // Armario eléctrico de arrancadores junto a las bombas (solo en P-01B; supuesto visual)
  if (opts.cabinet) {
    const cx = 1.35, cz = -0.6;
    b.add(rbox(0.8, 0.12, 0.5, 0.02), MAT.concrete, T(cx, 0.06, cz));
    b.add(rbox(0.7, 1.55, 0.4, 0.03), MAT.offWhite, T(cx, 0.12 + 0.775, cz));
    b.add(rbox(0.74, 0.06, 0.46, 0.02), MAT.steelDark, T(cx, 1.7, cz));
    b.add(rbox(0.01, 1.3, 0.01, 0.003), MAT.steelDark, T(cx, 0.9, cz + 0.205));
    for (const x of [cx - 0.2, cx - 0.1, cx + 0.15]) b.add(cyl(0.022, 0.02, 10), x > cx ? MAT.rail : MAT.rubber, T(x, 1.35, cz + 0.21, Math.PI / 2, 0, 0));
    b.add(rbox(0.04, 0.12, 0.03, 0.006), MAT.steel, T(cx + 0.28, 0.95, cz + 0.215));
  }
  const meshes = b.build(root);

  // Acople giratorio (eje + mazas con pernos)
  const coupling = new THREE.Group();
  coupling.position.set(-0.0, ax, 0);
  const shaft = new THREE.Mesh(cyl(0.025, 0.24, 12), MAT.steel);
  shaft.rotation.z = Math.PI / 2;
  const hubs = new THREE.Mesh(cyl(0.065, 0.1, 18), MAT.steelDark);
  hubs.rotation.z = Math.PI / 2;
  coupling.add(shaft, hubs);
  for (let k = 0; k < 4; k++) {
    const bolt = new THREE.Mesh(rbox(0.11, 0.022, 0.022, 0.006), k === 0 ? MAT.rail : MAT.steel);
    const a = (k / 4) * Math.PI * 2;
    bolt.position.set(0, Math.cos(a) * 0.048, Math.sin(a) * 0.048);
    coupling.add(bolt);
  }
  coupling.traverse(o => { if ((o as THREE.Mesh).isMesh) o.castShadow = true; });
  root.add(coupling);

  const lamp = createStatusLamp(new THREE.Vector3(0.38, 1.13, 0.48));
  const outline = outlineBox(new THREE.Vector3(-0.62, 0.0, -0.38), new THREE.Vector3(0.62, 1.0, 0.38));

  return finalizeUnit({
    spec, root,
    localAnchors: {
      label: new THREE.Vector3(0, 1.75, 0),
      focus: new THREE.Vector3(0, 0.5, 0),
      core: new THREE.Vector3(-0.32, ax, 0),
      in: new THREE.Vector3(-0.53, ax, 0),
      out: new THREE.Vector3(-0.32, 0.95, 0),
      /** Tee en la subida de descarga, sobre la retención (llegada de P-01B). */
      header: new THREE.Vector3(-0.32, 2.3, 0),
    },
    radius: 0.9,
    localBox: opts.cabinet ? { min: [-0.6, 0, -0.86], max: [1.76, 1.75, 0.56] } : { min: [-0.6, 0, -0.36], max: [0.6, 0.98, 0.56] },
    pickTargets: meshes,
    outline, glowRadius: 1.0, glowY: 0.015, lamp,
    animate(t, s) {
      coupling.rotation.x = t * 14 * s.motion;
    },
  });
}
