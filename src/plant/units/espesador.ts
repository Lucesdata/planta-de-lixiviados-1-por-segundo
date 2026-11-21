/**
 * ES-101 · Espesador de lodos por gravedad (supuesto visual de la fase 2; Ø2,4 × 2,6 m según
 * assumptions.ts S.thickD_m / S.thickH_m). Tanque de acero sobre pedestal, fondo cónico interno,
 * puente con accionamiento central, rastra de piquetes (picket fence) giratoria y brazo desnatador en
 * superficie (giran con setInternalMotion), vertedero perimetral en V con canaleta y rebose al drenaje,
 * campana de alimentación central. Entrada 'in' baja al norte (sube por la pared hasta la campana),
 * descarga de fondo 'out' al oeste con válvula. El líquido es semitransparente: se intuyen los piquetes.
 */
import * as THREE from 'three';
import type { PlantUnit } from '../types';
import { UNIT_BY_ID, type UnitSpec } from '../layout';
import { MAT, PALETTE, createLiquidMaterial } from '../../scene/materials';
import {
  Batcher, arcRing, createRoot, createStatusLamp, cyl, finalizeUnit, handrail, ladder, lathe, nozzle,
  outlineProfile, rbox, tankShellProfile, T,
} from './common';

export function createThickener(spec: UnitSpec = UNIT_BY_ID.thick): PlantUnit {
  const R = spec.size.d! / 2, H = spec.size.h, y0 = spec.base, y1 = y0 + H;
  const root = createRoot(spec);
  const b = new Batcher();
  const t = 0.05;

  b.add(lathe([[0, 0], [R + 0.12, 0], [R + 0.12, y0], [0, y0]], 0.04, 48), MAT.concrete);
  b.add(lathe(tankShellProfile(R, y0, H, t, true, 0.06), 0.04, 64), MAT.warmGray);
  arcRing(b, R + 0.01, 0.035, y1 - 0.01, 0, Math.PI * 2, MAT.steelBlue);
  for (const yy of [y0 + 0.08, y0 + 1.3]) arcRing(b, R + 0.012, 0.025, yy, 0, Math.PI * 2, MAT.steelBlue);
  // Fondo cónico interno (visible a través del líquido)
  b.add(lathe([[0.12, y0 + 0.1], [R - t - 0.01, y0 + 0.7], [R - t - 0.01, y0 + 0.74], [0.12, y0 + 0.14]], 0.01, 40), MAT.steelDark);
  // Canaleta perimetral y vertedero en V (dientes)
  const yWeir = y1 - 0.12;
  b.add(lathe([[R - t, yWeir - 0.16], [R - 0.24, yWeir - 0.16], [R - 0.24, yWeir + 0.02]], 0.01, 56), MAT.steelDark);
  const nT = 40;
  for (let k = 0; k < nT; k++) {
    const a = (k / nT) * Math.PI * 2;
    b.add(new THREE.ConeGeometry(0.035, 0.07, 3), MAT.steelDark, T(Math.sin(a) * (R - 0.24), yWeir + 0.055, Math.cos(a) * (R - 0.24), 0, a, 0));
  }
  // Rebose de la canaleta al drenaje de piso (retorno por drenaje: supuesto)
  const oa = 2.2;
  const on = new THREE.Vector3(Math.sin(oa), 0, Math.cos(oa));
  b.rod(on.clone().multiplyScalar(R - 0.1).setY(yWeir - 0.1), on.clone().multiplyScalar(R + 0.22).setY(yWeir - 0.1), 0.05, MAT.steel, 10);
  b.rod(on.clone().multiplyScalar(R + 0.22).setY(yWeir - 0.1), on.clone().multiplyScalar(R + 0.22).setY(0.12), 0.05, MAT.steel, 10);
  b.add(rbox(0.3, 0.1, 0.3, 0.02), MAT.concreteDark, T(on.x * (R + 0.22), 0.05, on.z * (R + 0.22)));

  // Puente diametral (x) con grating, barandas y accionamiento central
  const span = 2 * R + 0.36, bw = 0.6, yb = y1 + 0.06;
  b.add(rbox(span, 0.07, bw, 0.02), MAT.grating, T(0, yb, 0));
  for (const z of [bw / 2, -bw / 2]) b.add(rbox(span, 0.14, 0.06, 0.02), MAT.steelBlue, T(0, yb - 0.03, z));
  for (const z of [bw / 2 - 0.03, -bw / 2 + 0.03]) handrail(b, [new THREE.Vector3(-R + 0.05, yb + 0.04, z), new THREE.Vector3(R + 0.12, yb + 0.04, z)], 0.95, 1.2);
  b.add(rbox(0.42, 0.06, 0.42, 0.02), MAT.steelDark, T(0, yb + 0.06, 0));
  b.add(cyl(0.2, 0.22, 28), MAT.motor, T(0, yb + 0.2, 0));                        // reductor planetario
  b.add(cyl(0.09, 0.3, 20), MAT.motor, T(0.25, yb + 0.25, 0, 0, 0, Math.PI / 2)); // motor
  b.add(cyl(0.095, 0.05, 20, 0.07), MAT.steelDark, T(0.42, yb + 0.25, 0, 0, 0, -Math.PI / 2));
  b.add(rbox(0.08, 0.06, 0.07, 0.01), MAT.motor, T(0.22, yb + 0.37, 0));
  // Campana de alimentación central colgada del puente
  b.add(cyl(0.28, 0.7, 28, 0.28, true), MAT.steel, T(0, y1 - 0.3, 0));
  for (const z of [-0.22, 0.22]) b.rod(new THREE.Vector3(0, yb - 0.04, z), new THREE.Vector3(0, y1 + 0.02, z * 1.2), 0.015, MAT.steelBlue, 5);
  // Escalera de acceso al extremo este del puente
  ladder(b, new THREE.Vector3(R + 0.28, 0, 0), yb, new THREE.Vector3(1, 0, 0), true);

  // Entrada 'in': boquilla baja al norte → sube pegada a la pared → cruza sobre el borde → campana
  const pin = nozzle(b, new THREE.Vector3(0, 0.45, -R - 0.02), new THREE.Vector3(0, 0, -1), 0.13);
  const zr = -R - 0.15;
  b.add(new THREE.SphereGeometry(0.085, 12, 8), MAT.steel, T(0, 0.45, zr));
  b.rod(new THREE.Vector3(0, 0.45, zr), new THREE.Vector3(0, y1 + 0.35, zr), 0.075, MAT.steel, 12);
  b.add(new THREE.SphereGeometry(0.085, 12, 8), MAT.steel, T(0, y1 + 0.35, zr));
  b.rod(new THREE.Vector3(0, y1 + 0.35, zr), new THREE.Vector3(0, y1 + 0.35, -0.26), 0.075, MAT.steel, 12);
  b.rod(new THREE.Vector3(0, y1 + 0.35, -0.26), new THREE.Vector3(0, y1 - 0.1, -0.26), 0.075, MAT.steel, 12);
  for (const yy of [1.0, 2.0]) b.add(rbox(0.12, 0.05, 0.2, 0.01), MAT.steelBlue, T(0, yy, -R - 0.07));
  // Descarga de fondo 'out' (oeste) con válvula
  const pout = new THREE.Vector3(-R - 0.25, 0.45, 0);
  b.rod(new THREE.Vector3(-0.2, 0.45, 0), pout, 0.075, MAT.steel, 14);
  b.add(cyl(0.12, 0.04, 20), MAT.steel, T(pout.x + 0.02, 0.45, 0, 0, 0, Math.PI / 2));
  b.add(rbox(0.16, 0.18, 0.2, 0.03), MAT.steelDark, T(-R - 0.09, 0.45, 0));
  b.rod(new THREE.Vector3(-R - 0.09, 0.55, 0), new THREE.Vector3(-R - 0.09, 0.85, 0), 0.02, MAT.steel, 6);
  b.add(new THREE.TorusGeometry(0.09, 0.014, 6, 18), MAT.rail, T(-R - 0.09, 0.86, 0, Math.PI / 2, 0, 0));
  const meshes = b.build(root);

  // Rastra giratoria: eje, brazos de fondo con piquetes y desnatador en superficie
  const yL = yWeir + 0.02;
  const rake = new THREE.Group();
  const rb = new Batcher();
  rb.rod(new THREE.Vector3(0, y0 + 0.2, 0), new THREE.Vector3(0, yb, 0), 0.04, MAT.steel, 12);
  for (const s of [-1, 1]) {
    // brazo inclinado siguiendo el cono, con rasquetas
    const a0 = new THREE.Vector3(0, y0 + 0.3, 0), a1 = new THREE.Vector3(s * (R - 0.15), y0 + 0.82, 0);
    rb.rod(a0, a1, 0.025, MAT.steelBlue, 6);
    for (let k = 1; k <= 4; k++) {
      const p = a0.clone().lerp(a1, k / 4.6);
      rb.add(rbox(0.16, 0.06, 0.02, 0.005), MAT.steelBlue, T(p.x, p.y - 0.04, p.z, 0, s * 0.6, 0));
    }
    // piquetes verticales sobre el brazo (cerca de madera de la «picket fence»)
    for (let k = 1; k <= 6; k++) {
      const p = a0.clone().lerp(a1, k / 6.5);
      rb.rod(p, p.clone().setY(yL - 0.25), 0.012, MAT.steel, 5);
    }
    rb.rod(a1.clone().setY(yL - 0.25), new THREE.Vector3(s * 0.12, yL - 0.25, 0), 0.015, MAT.steel, 5);
  }
  // desnatador (en superficie, perpendicular a los brazos)
  rb.add(rbox(0.05, 0.12, 2 * R - 0.55, 0.01), MAT.steelDark, T(0, yL + 0.02, 0));
  rb.add(rbox(0.3, 0.05, 0.3, 0.01), MAT.rail, T(0, yb - 0.1, 0));
  rb.build(rake);
  root.add(rake);

  const liquid = createLiquidMaterial({ color: 0x4a3a26, hi: 0x9a8058, mode: 'ripple', speed: 0.4, scale: 0.8, opacity: 0.62, center: [spec.pos[0], spec.pos[1]] });
  const surf = new THREE.Mesh(new THREE.CircleGeometry(R - t - 0.01, 56), liquid.material);
  surf.rotation.x = -Math.PI / 2;
  surf.position.y = yL;
  surf.renderOrder = 1;
  // Manto de lodo espesado (sube con el flujo)
  const blanketMat = new THREE.MeshStandardMaterial({ color: PALETTE.sludge, roughness: 0.85, transparent: true, opacity: 0.85 });
  const blanket = new THREE.Mesh(cyl(R - t - 0.02, 1, 40), blanketMat);
  blanket.renderOrder = 0;
  root.add(surf, blanket);

  const lamp = createStatusLamp(new THREE.Vector3(R + 0.05, yb + 0.04, bw / 2 - 0.05));
  const outline = outlineProfile([[R + 0.05, 0.01], [R + 0.05, y1 + 0.02]], 4);

  return finalizeUnit({
    spec, root,
    localAnchors: {
      label: new THREE.Vector3(0, yb + 1.5, 0),
      focus: new THREE.Vector3(0, y1 * 0.5, 0),
      core: new THREE.Vector3(0, y0 + 0.9, 0),
      in: pin, out: pout,
    },
    radius: Math.hypot(R, H / 2) + 0.3,
    localBox: { min: [-R - 0.27, 0, -R - 0.24], max: [R + 0.5, yb + 1.0, R + 0.24] },
    pickTargets: [...meshes, surf],
    outline, glowRadius: R * 1.7, glowY: 0.015, lamp,
    animate(tt, s) {
      rake.rotation.y = tt * 0.35 * s.motion;
      liquid.uniforms.uTime.value = tt;
      liquid.uniforms.uMotion.value = 0.3 + 0.7 * s.motion;
      liquid.uniforms.uGlow.value = 0.03 + 0.16 * s.flow + (s.active ? 0.06 : 0);
      const hb = 0.55 + 0.6 * s.flow + 0.03 * Math.sin(tt * 0.4) * s.motion;
      blanket.scale.y = hb;
      blanket.position.y = y0 + 0.08 + hb / 2;
    },
  });
}
