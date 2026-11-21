/**
 * Tanque de homogenización TK-101: cilindro abierto sobre pedestal, puente con agitador de entrada
 * superior (motorreductor de ejes ortogonales, acople y eje giratorios), remolino en superficie y
 * boquilla de retorno del drenado del lecho de secado (puerto 'return', supuesto de la fase 2).
 */
import * as THREE from 'three';
import type { PlantUnit } from '../types';
import { UNIT_BY_ID, type UnitSpec } from '../layout';
import { MAT, PALETTE, createLiquidMaterial } from '../../scene/materials';
import {
  Batcher, arcRing, createRoot, createStatusLamp, finalizeUnit, handrail, ladder, lathe, manway, nozzle,
  outlineProfile, rbox, tankShellProfile, T, cyl,
} from './common';

export function createHomogenizer(spec: UnitSpec = UNIT_BY_ID.homog): PlantUnit {
  const R = spec.size.d! / 2, H = spec.size.h, y0 = spec.base, y1 = y0 + H;
  const root = createRoot(spec);
  const b = new Batcher();

  b.add(lathe([[0, 0], [R + 0.16, 0], [R + 0.16, y0], [0, y0]], 0.04, 56), MAT.concrete);
  b.add(lathe(tankShellProfile(R, y0, H, 0.07, true, 0.08), 0.05, 72), MAT.sage);
  arcRing(b, R + 0.01, 0.045, y1 - 0.01, 0, Math.PI * 2, MAT.sageDark);
  for (const yy of [y0 + 0.05, y0 + 0.95, y0 + 1.8]) arcRing(b, R + 0.012, 0.028, yy, 0, Math.PI * 2, MAT.sageDark);
  manway(b, R, y0 + 0.65, -0.6);

  // Pasarela-puente con baranda y escalera de acceso
  const bw = 0.62;
  b.add(rbox(2 * R + 0.3, 0.07, bw, 0.02), MAT.grating, T(0, y1 + 0.04, 0));
  b.add(rbox(2 * R + 0.3, 0.12, 0.06, 0.02), MAT.steelBlue, T(0, y1 + 0.02, bw / 2));
  b.add(rbox(2 * R + 0.3, 0.12, 0.06, 0.02), MAT.steelBlue, T(0, y1 + 0.02, -bw / 2));
  for (const zz of [bw / 2, -bw / 2]) handrail(b, [new THREE.Vector3(-R + 0.1, y1 + 0.08, zz), new THREE.Vector3(R - 0.1, y1 + 0.08, zz)], 0.95, 1.1);
  const la = -2.25;
  ladder(b, new THREE.Vector3(Math.sin(la) * (R + 0.18), 0, Math.cos(la) * (R + 0.18)), y1, new THREE.Vector3(Math.sin(la), 0, Math.cos(la)), true);

  const pin = nozzle(b, new THREE.Vector3(-R + 0.02, 2.45, 0), new THREE.Vector3(-1, 0, 0), 0.17);
  const pout = nozzle(b, new THREE.Vector3(R - 0.02, 0.75, 0), new THREE.Vector3(1, 0, 0), 0.17);

  // Retorno del drenado de LS-101: boquilla al sur, codo hacia abajo (la línea llega desde la zanja)
  const rx = 0.5, rz = Math.sqrt(R * R - rx * rx);
  b.rod(new THREE.Vector3(rx, 0.55, rz - 0.03), new THREE.Vector3(rx, 0.55, R + 0.35), 0.075, MAT.steel, 14);
  b.add(new THREE.SphereGeometry(0.085, 14, 10), MAT.steel, T(rx, 0.55, R + 0.35));
  b.rod(new THREE.Vector3(rx, 0.55, R + 0.35), new THREE.Vector3(rx, 0.35, R + 0.35), 0.075, MAT.steel, 14);
  b.add(cyl(0.12, 0.04, 20), MAT.steel, T(rx, 0.37, R + 0.35));
  const pret = new THREE.Vector3(rx, 0.35, R + 0.35);

  const yL = y1 - 0.28;
  // Agitador de entrada superior: motorreductor ortogonal sobre el puente
  const yb = y1 + 0.08;
  b.add(rbox(0.62, 0.08, 0.56, 0.02), MAT.steelDark, T(0, yb + 0.04, 0));          // placa de montaje
  b.add(rbox(0.36, 0.3, 0.34, 0.05), MAT.motor, T(0, yb + 0.23, 0));               // reductor
  b.add(cyl(0.2, 0.06, 28), MAT.steelDark, T(0, yb + 0.1, 0));                     // brida del eje
  b.add(cyl(0.13, 0.42, 28), MAT.motor, T(0.38, yb + 0.27, 0, 0, 0, Math.PI / 2)); // motor horizontal
  for (let k = 0; k < 6; k++) b.add(cyl(0.142, 0.016, 28), MAT.motor, T(0.24 + k * 0.055, yb + 0.27, 0, 0, 0, Math.PI / 2));
  b.add(cyl(0.135, 0.07, 28, 0.1), MAT.steelDark, T(0.62, yb + 0.27, 0, 0, 0, -Math.PI / 2));
  b.add(rbox(0.1, 0.08, 0.09, 0.015), MAT.motor, T(0.36, yb + 0.45, 0));
  b.add(rbox(0.06, 0.1, 0.06, 0.01), MAT.steel, T(0, yb + 0.43, 0));               // respiradero
  b.rod(new THREE.Vector3(0, yb, 0), new THREE.Vector3(0, yL - 0.05, 0), 0.04, MAT.steel, 12);
  const rot = new THREE.Group();
  rot.position.y = yb - 0.12;
  const collar = new THREE.Mesh(cyl(0.085, 0.09, 18), MAT.steel);
  const mark = new THREE.Mesh(rbox(0.04, 0.092, 0.04, 0.008), MAT.rail);
  mark.position.x = 0.085;
  // Impulsor de 3 palas justo bajo la superficie (se intuye por el remolino)
  const imp = new THREE.Group();
  imp.position.y = yL - 0.35 - rot.position.y;
  for (let k = 0; k < 3; k++) {
    const blade = new THREE.Mesh(rbox(0.5, 0.025, 0.14, 0.01), MAT.steelDark);
    const a = (k / 3) * Math.PI * 2;
    blade.position.set(Math.cos(a) * 0.3, 0, -Math.sin(a) * 0.3);
    blade.rotation.set(0.35, a, 0);
    imp.add(blade);
  }
  rot.add(collar, mark, imp);
  collar.castShadow = true;
  root.add(rot);
  const meshes = b.build(root);

  const liquid = createLiquidMaterial({ color: PALETTE.leachate, hi: 0xb08a55, mode: 'swirl', speed: 1.6, scale: 0.55, center: [spec.pos[0], spec.pos[1]] });
  const surf = new THREE.Mesh(new THREE.CircleGeometry(R - 0.07, 64), liquid.material);
  surf.rotation.x = -Math.PI / 2;
  surf.position.y = yL;
  surf.receiveShadow = true;
  root.add(surf);

  const lamp = createStatusLamp(new THREE.Vector3(0.35, y1 + 0.08, bw / 2 - 0.08));
  const outline = outlineProfile([[R + 0.05, 0.01], [R + 0.05, y1 + 0.03]], 4);

  return finalizeUnit({
    spec, root,
    localAnchors: {
      label: new THREE.Vector3(0, y1 + 1.6, 0),
      focus: new THREE.Vector3(0, y0 + H * 0.5, 0),
      core: new THREE.Vector3(0, y0 + H * 0.55, 0),
      in: pin, out: pout, return: pret,
    },
    radius: Math.hypot(R, H / 2) + 0.3,
    localBox: { min: [-R - 0.16, 0, -R - 0.16], max: [R + 0.16, y1 + 1.0, R + 0.16] },
    pickTargets: [...meshes, surf],
    outline, glowRadius: R * 1.55, glowY: 0.015, lamp,
    animate(t, s) {
      liquid.uniforms.uTime.value = t;
      liquid.uniforms.uMotion.value = s.motion;
      liquid.uniforms.uGlow.value = 0.03 + 0.18 * s.flow + (s.active ? 0.06 : 0);
      rot.rotation.y = t * 2.2 * s.motion;
    },
  });
}
