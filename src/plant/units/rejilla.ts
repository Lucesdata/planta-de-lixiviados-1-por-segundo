/**
 * Pretratamiento RJ-100 (supuesto visual de la fase 2): canal de concreto con rejilla de barras inclinada,
 * desarenador (tramo ensanchado y más profundo con arena acumulada), bandeja de escurrido, contenedor de
 * cribado y peldaño de operación con grating al sur. El agua fluye de oeste ('in') a este ('out').
 * La elevación hasta TK-101 (2,45 m) implica un bombeo de cabecera: supuesto, sin curva.
 */
import * as THREE from 'three';
import type { PlantUnit } from '../types';
import { UNIT_BY_ID, type UnitSpec } from '../layout';
import { MAT, MAT2, PALETTE, createLiquidMaterial } from '../../scene/materials';
import { Batcher, createRoot, createStatusLamp, cyl, finalizeUnit, handrail, nozzle, outlineBox, rbox, T } from './common';

export function createScreen(spec: UnitSpec = UNIT_BY_ID.screen): PlantUnit {
  const W = spec.size.w!, H = spec.size.h, L = spec.size.l!;
  const root = createRoot(spec);
  const b = new Batcher();
  const t = 0.12;
  const yW = 0.42; // lámina de agua

  // Losa, muros longitudinales y cabeceras
  b.add(rbox(W + 0.1, 0.1, L + 0.1, 0.02), MAT.concreteDark, T(0, 0.05, 0));
  b.add(rbox(W, H, t, 0.03), MAT.concrete, T(0, H / 2, -L / 2 + t / 2));
  b.add(rbox(W, H, t, 0.03), MAT.concrete, T(0, H / 2, L / 2 - t / 2));
  b.add(rbox(t, H, L, 0.03), MAT.concrete, T(-W / 2 + t / 2, H / 2, 0));
  b.add(rbox(t, H, L, 0.03), MAT.concrete, T(W / 2 - t / 2, H / 2, 0));
  // Desarenador: tolva de arena acumulada en el tramo este (x > 0,2)
  b.add(rbox(0.8, 0.12, L - 2 * t, 0.04), MAT2.grit, T(0.6, 0.17, 0));
  b.add(rbox(0.04, 0.5, L - 2 * t, 0.01), MAT.steelDark, T(0.18, 0.35, 0)); // deflector de entrada al desarenador
  // Rejilla de barras inclinada (~60°) con marco
  const xs = -0.45, ang = Math.PI / 6;
  const nBars = 11, inner = L - 2 * t - 0.04;
  for (let k = 0; k < nBars; k++) {
    const z = -inner / 2 + (k + 0.5) * (inner / nBars);
    b.add(rbox(0.018, 1.05, 0.012, 0.004), MAT.steel, T(xs, 0.55, z, 0, 0, -ang));
  }
  b.add(rbox(0.05, 0.05, inner + 0.04, 0.01), MAT.steelDark, T(xs - Math.sin(ang) * 0.5, 0.55 + 0.45, 0));
  b.add(rbox(0.05, 0.05, inner + 0.04, 0.01), MAT.steelDark, T(xs + Math.sin(ang) * 0.48, 0.12, 0));
  // Bandeja perforada de escurrido sobre el muro, junto a la rejilla
  b.add(rbox(0.5, 0.04, 0.42, 0.01), MAT.grating, T(xs - 0.45, H + 0.02, -0.12));
  // Cubiertas de grating en el tramo de entrada y sobre el desarenador
  b.add(rbox(0.5, 0.04, L - 0.05, 0.01), MAT.grating, T(-0.9, H + 0.02, 0));
  b.add(rbox(0.75, 0.04, L - 0.05, 0.01), MAT.grating, T(0.62, H + 0.02, 0));
  // Compuerta de aislamiento (volante) a la salida
  b.add(rbox(0.06, 0.55, L - 2 * t, 0.01), MAT.steelDark, T(W / 2 - t - 0.08, 0.5, 0));
  b.rod(new THREE.Vector3(W / 2 - t - 0.08, H, 0), new THREE.Vector3(W / 2 - t - 0.08, H + 0.35, 0), 0.02, MAT.steel, 6);
  b.add(new THREE.TorusGeometry(0.1, 0.015, 6, 20), MAT.rail, T(W / 2 - t - 0.08, H + 0.36, 0, Math.PI / 2, 0, 0));

  // Contenedor de cribado (lado norte) con tapa entreabierta
  const cx = -0.55, cz = -L / 2 - 0.42;
  b.add(rbox(0.62, 0.78, 0.55, 0.05), MAT2.peBlue, T(cx, 0.43, cz));
  b.add(rbox(0.66, 0.05, 0.58, 0.02), MAT.steelDark, T(cx, 0.85, cz + 0.02, -0.35, 0, 0));
  for (const sx of [-0.22, 0.22]) b.add(cyl(0.05, 0.04, 12), MAT.rubber, T(cx + sx, 0.05, cz - 0.2, 0, 0, Math.PI / 2));
  // Peldaño de operación con grating y baranda (lado sur)
  const pz0 = L / 2 + 0.05, pz1 = L / 2 + 0.8, py = 0.3;
  b.add(rbox(W, 0.05, pz1 - pz0, 0.01), MAT.grating, T(0, py - 0.025, (pz0 + pz1) / 2));
  for (const x of [-W / 2 + 0.1, -0.2, W / 2 - 0.03]) b.add(rbox(0.06, py - 0.05, 0.06, 0.01), MAT.steelBlue, T(x, (py - 0.05) / 2, pz1 - 0.05));
  handrail(b, [new THREE.Vector3(-W / 2 + 0.05, py, pz1 - 0.03), new THREE.Vector3(0.3, py, pz1 - 0.03)], 0.95, 1.2); // acceso por el extremo este

  const pin = nozzle(b, new THREE.Vector3(-W / 2 + 0.02, yW, 0), new THREE.Vector3(-1, 0, 0), 0.15);
  const pout = nozzle(b, new THREE.Vector3(W / 2 - 0.02, yW, 0), new THREE.Vector3(1, 0, 0), 0.15);
  const meshes = b.build(root);

  const liquid = createLiquidMaterial({ color: PALETTE.leachate, hi: 0xb08a55, mode: 'flow', dir: [1, 0], speed: 0.8, scale: 1.4, center: [spec.pos[0], spec.pos[1]] });
  const surf = new THREE.Mesh(new THREE.PlaneGeometry(W - 2 * t, L - 2 * t), liquid.material);
  surf.rotation.x = -Math.PI / 2;
  surf.position.y = yW;
  surf.receiveShadow = true;
  root.add(surf);

  const lamp = createStatusLamp(new THREE.Vector3(W / 2 - 0.06, H, -L / 2 + 0.06));
  const outline = outlineBox(new THREE.Vector3(-W / 2 - 0.04, 0, -L / 2 - 0.04), new THREE.Vector3(W / 2 + 0.04, H + 0.03, L / 2 + 0.04));

  return finalizeUnit({
    spec, root,
    localAnchors: {
      label: new THREE.Vector3(0, H + 1.1, 0),
      focus: new THREE.Vector3(0, 0.5, 0.2),
      core: new THREE.Vector3(0, yW - 0.1, 0),
      in: pin, out: pout,
      /** Puesto del operador (rastrillado de la rejilla), sobre el peldaño. */
      operator: new THREE.Vector3(xs - 0.15, py, L / 2 + 0.45),
    },
    radius: 1.6,
    localBox: { min: [-W / 2 - 0.05, 0, cz - 0.32], max: [W / 2 + 0.05, H + 0.1, pz1] },
    pickTargets: [...meshes, surf],
    outline, glowRadius: 1.7, glowY: 0.015, lamp,
    animate(tt, s) {
      liquid.uniforms.uTime.value = tt;
      liquid.uniforms.uMotion.value = Math.max(s.motion, s.flow);
      liquid.uniforms.uGlow.value = 0.03 + 0.18 * s.flow + (s.active ? 0.06 : 0);
    },
  });
}
