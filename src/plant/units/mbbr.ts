/**
 * Reactor MBBR R-301: tanque rectangular abierto de concreto, soportes móviles flotando y girando,
 * patrón de aireación en superficie y burbujas; colector de aire con bajantes como pista de la parrilla.
 * Soplante B-301 (por indicación del usuario): patín de émbolos rotativos al noreste, con filtro de
 * aspiración, silenciador, antirretorno, manómetro y línea de aire hasta el colector. HIPÓTESIS visual:
 * caudal de aire, presión y potencia son supuestos (assumptions.ts).
 */
import * as THREE from 'three';
import type { PlantUnit } from '../types';
import { UNIT_BY_ID, type UnitSpec } from '../layout';
import { MAT, PALETTE, createLiquidMaterial } from '../../scene/materials';
import {
  Batcher, createRoot, createStatusLamp, cyl, finalizeUnit, fract, hash01, ladder, nozzle, outlineBox, rbox,
  setInstance, T, handrail,
} from './common';

export function createMBBR(spec: UnitSpec = UNIT_BY_ID.mbbr): PlantUnit {
  const W = spec.size.w!, H = spec.size.h, L = spec.size.l!, y0 = spec.base, y1 = y0 + H;
  const root = createRoot(spec);
  const b = new Batcher();
  const t = 0.18;

  b.add(rbox(W + 0.3, y0, L + 0.3, 0.04), MAT.concreteDark, T(0, y0 / 2, 0));
  b.add(rbox(W, 0.15, L, 0.03), MAT.concrete, T(0, y0 + 0.075, 0));
  b.add(rbox(t, H, L, 0.04), MAT.concrete, T(-W / 2 + t / 2, y0 + H / 2, 0));
  b.add(rbox(t, H, L, 0.04), MAT.concrete, T(W / 2 - t / 2, y0 + H / 2, 0));
  b.add(rbox(W, H, t, 0.04), MAT.concrete, T(0, y0 + H / 2, -L / 2 + t / 2));
  b.add(rbox(W, H, t, 0.04), MAT.concrete, T(0, y0 + H / 2, L / 2 - t / 2));

  // Colector de aire en el borde norte con bajantes (pista de la parrilla de difusores)
  const za = -L / 2 + t / 2;
  b.rod(new THREE.Vector3(-W / 2 + 0.2, y1 + 0.12, za), new THREE.Vector3(W / 2 - 0.2, y1 + 0.12, za), 0.05, MAT.steel, 12);
  for (let k = 0; k < 4; k++) {
    const x = -W / 2 + 0.6 + k * ((W - 1.2) / 3);
    b.rod(new THREE.Vector3(x, y1 + 0.12, za), new THREE.Vector3(x, y1 + 0.12, za + 0.25), 0.035, MAT.steel, 10);
    b.rod(new THREE.Vector3(x, y1 + 0.12, za + 0.25), new THREE.Vector3(x, y0 + 0.4, za + 0.25), 0.035, MAT.steel, 10);
    b.add(rbox(0.1, 0.08, 0.06, 0.01), MAT.steelDark, T(x, y1 + 0.12, za));
  }
  // Tamiz de salida (retención de soportes) en la pared sur
  b.add(rbox(0.45, 0.4, 0.06, 0.01), MAT.grating, T(1.0, 2.05, L / 2 - t - 0.05));
  // Escalera y baranda corta en la pared este
  ladder(b, new THREE.Vector3(W / 2 + 0.2, 0, -0.5), y1, new THREE.Vector3(1, 0, 0), false);
  handrail(b, [new THREE.Vector3(W / 2 - t / 2, y1, -1.0), new THREE.Vector3(W / 2 - t / 2, y1, 0.0)], 0.9, 1.0);

  // ---- Soplante B-301 (patín al noreste de la pared este) ----
  const bx = W / 2 + 1.25, bz = -0.85, by = 0.12, ax = by + 0.34; // centro del patín y cota del eje
  const RX = (x: number, y: number, z: number) => T(x, y, z, 0, 0, Math.PI / 2);
  b.add(rbox(1.25, by, 0.85, 0.03), MAT.concrete, T(bx, by / 2, bz));                 // pedestal
  b.add(rbox(1.1, 0.06, 0.7, 0.02), MAT.steelDark, T(bx, by + 0.03, bz));             // bastidor
  const cx = bx - 0.25;                                                                // carcasa de émbolos
  b.add(rbox(0.42, 0.4, 0.4, 0.06), MAT.steelBlue, T(cx, ax, bz));
  b.add(rbox(0.46, 0.06, 0.44, 0.02), MAT.steelDark, T(cx, ax - 0.2, bz));
  b.add(cyl(0.13, 0.05, 24), MAT.steelDark, RX(cx + 0.235, ax, bz));                   // tapa de engranajes
  const mx = bx + 0.3;                                                                 // motor horizontal
  b.add(cyl(0.14, 0.38, 28), MAT.motor, RX(mx, ax, bz));
  for (let k = 0; k < 6; k++) b.add(cyl(0.152, 0.016, 28), MAT.motor, RX(mx - 0.15 + k * 0.06, ax, bz));
  b.add(cyl(0.145, 0.08, 28, 0.11), MAT.steelDark, T(mx + 0.23, ax, bz, 0, 0, -Math.PI / 2));
  b.add(rbox(0.11, 0.08, 0.1, 0.015), MAT.motor, T(mx, ax + 0.18, bz));
  // Acople directo motor–soplante: soporte bajo el eje (el acople giratorio va aparte)
  b.add(rbox(0.1, ax - by - 0.12, 0.16, 0.02), MAT.steelDark, T(bx + 0.06, (ax + by) / 2 - 0.03, bz));
  // Filtro de aspiración sobre la carcasa
  b.rod(new THREE.Vector3(cx + 0.08, ax + 0.2, bz), new THREE.Vector3(cx + 0.08, ax + 0.34, bz), 0.05, MAT.steel, 12);
  b.add(cyl(0.12, 0.2, 24), MAT.offWhite, T(cx + 0.08, ax + 0.44, bz));
  b.add(cyl(0.13, 0.03, 24, 0.09), MAT.steelDark, T(cx + 0.08, ax + 0.555, bz));
  // Descarga: silenciador vertical, antirretorno y subida hasta el colector de aire
  const sx = cx - 0.36;
  b.rod(new THREE.Vector3(cx - 0.21, ax, bz), new THREE.Vector3(sx, ax, bz), 0.05, MAT.steel, 12);
  b.add(cyl(0.11, 0.5, 24), MAT.steel, T(sx, ax + 0.2, bz));
  b.add(cyl(0.115, 0.03, 24), MAT.steelDark, T(sx, ax - 0.05, bz));
  b.add(cyl(0.115, 0.03, 24), MAT.steelDark, T(sx, ax + 0.45, bz));
  const aTop = y1 + 0.12, zr = -L / 2 + t / 2;                                         // = colector existente
  const r0 = new THREE.Vector3(sx, ax + 0.45, bz), r1 = new THREE.Vector3(sx, aTop, bz);
  const r2 = new THREE.Vector3(sx, aTop, zr), r3 = new THREE.Vector3(W / 2 - 0.2, aTop, zr);
  b.rod(r0, r1, 0.05, MAT.steel, 12); b.rod(r1, r2, 0.05, MAT.steel, 12); b.rod(r2, r3, 0.05, MAT.steel, 12);
  b.add(rbox(0.13, 0.13, 0.13, 0.02), MAT.steelDark, T(sx, aTop, bz));                  // codos
  b.add(rbox(0.13, 0.13, 0.13, 0.02), MAT.steelDark, T(sx, aTop, zr));
  b.add(rbox(0.12, 0.16, 0.12, 0.02), MAT.steelBlue, T(sx, ax + 0.75, bz));             // antirretorno
  b.rod(new THREE.Vector3(sx, ax + 0.95, bz), new THREE.Vector3(sx + 0.12, ax + 0.95, bz), 0.012, MAT.steel, 6);
  b.add(cyl(0.045, 0.02, 16), MAT.offWhite, T(sx + 0.13, ax + 0.95, bz, Math.PI / 2, 0, 0)); // manómetro
  b.rod(new THREE.Vector3(sx, aTop, (bz + zr) / 2), new THREE.Vector3(sx, 0, (bz + zr) / 2), 0.025, MAT.steelDark, 6); // soporte

  // Fase 7 · sonda de OD con transmisor en la pared sur y toma de muestra
  const dx = -W / 2 + t + 0.55, dz = L / 2 - t / 2;
  b.add(rbox(0.16, 0.2, 0.1, 0.02), MAT.offWhite, T(dx, y1 + 0.25, dz + 0.02));
  b.add(rbox(0.12, 0.05, 0.02, 0.005), MAT.steelBlue, T(dx, y1 + 0.28, dz + 0.075));
  b.rod(new THREE.Vector3(dx, y1 + 0.15, dz), new THREE.Vector3(dx, y1 + 0.05, dz), 0.02, MAT.steel, 6);
  b.rod(new THREE.Vector3(dx, y1 + 0.05, dz), new THREE.Vector3(dx, y1 + 0.05, dz - 0.3), 0.02, MAT.steel, 6);
  b.rod(new THREE.Vector3(dx, y1 + 0.05, dz - 0.3), new THREE.Vector3(dx, y0 + 1.0, dz - 0.3), 0.022, MAT.steelDark, 8);
  // Fase 7 · rejilla de difusores en el fondo (tubos laterales bajo los bajantes)
  for (let k = 0; k < 4; k++) {
    const x = -W / 2 + 0.6 + k * ((W - 1.2) / 3);
    b.rod(new THREE.Vector3(x, y0 + 0.4, za + 0.25), new THREE.Vector3(x, y0 + 0.4, L / 2 - t - 0.2), 0.03, MAT.steelDark, 8);
  }

  const pin = new THREE.Vector3(-W / 2 + t + 0.17, y1 - 0.05, 0);
  b.rod(pin.clone().setY(y1 - 0.05), pin.clone().setY(y1 - 0.35), 0.085, MAT.steel, 14);
  const pout = nozzle(b, new THREE.Vector3(1.0, 2.0, L / 2 - 0.02), new THREE.Vector3(0, 0, 1), 0.17);
  const meshes = b.build(root);

  const yL = y1 - 0.22;
  const liquid = createLiquidMaterial({ color: 0x4f6a4e, hi: 0xcfe0cc, mode: 'aeration', speed: 1.0, scale: 1.0, opacity: 0.82 });
  const surf = new THREE.Mesh(new THREE.PlaneGeometry(W - 2 * t, L - 2 * t), liquid.material);
  surf.rotation.x = -Math.PI / 2;
  surf.position.y = yL;
  surf.renderOrder = 1;

  const NC = 150;
  const carriers = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.055, 0.055, 0.045, 10, 1, true), new THREE.MeshStandardMaterial({ color: PALETTE.carrier, roughness: 0.6, side: THREE.DoubleSide }), NC);
  carriers.castShadow = false;
  carriers.frustumCulled = false;
  const NB = 60;
  const bubbles = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.03, 1), MAT.bubble, NB);
  bubbles.frustumCulled = false;
  root.add(surf, carriers, bubbles);

  // Acople motor–soplante (gira con la actividad; un perno en ocre marca el giro)
  const pulley = new THREE.Group();
  pulley.position.set(bx + 0.06, ax, bz);
  const hub = new THREE.Mesh(cyl(0.06, 0.09, 18), MAT.steelDark);
  hub.rotation.z = Math.PI / 2;
  pulley.add(hub);
  for (let k = 0; k < 4; k++) {
    const bolt = new THREE.Mesh(rbox(0.1, 0.02, 0.02, 0.005), k === 0 ? MAT.rail : MAT.steel);
    const a = (k / 4) * Math.PI * 2;
    bolt.position.set(0, Math.cos(a) * 0.045, Math.sin(a) * 0.045);
    pulley.add(bolt);
  }
  root.add(pulley);

  const lamp = createStatusLamp(new THREE.Vector3(W / 2 - t / 2, y1, 0.6));
  const outline = outlineBox(new THREE.Vector3(-W / 2 - 0.04, 0, -L / 2 - 0.04), new THREE.Vector3(W / 2 + 0.04, y1 + 0.03, L / 2 + 0.04));
  const ix = (W - 2 * t - 0.2) / 2, iz = (L - 2 * t - 0.2) / 2;

  return finalizeUnit({
    spec, root,
    localAnchors: {
      label: new THREE.Vector3(0, y1 + 1.1, 0),
      focus: new THREE.Vector3(0, y0 + H * 0.5, 0),
      core: new THREE.Vector3(0, y0 + H * 0.55, 0),
      in: pin, out: pout,
      // Fase 7 · puntos para notas técnicas
      tMedia: new THREE.Vector3(-0.3, yL, 0.2),
      tAir: new THREE.Vector3(-W / 2 + 0.6, y1 + 0.12, za),
      tBlower: new THREE.Vector3(bx - 0.25, ax + 0.4, bz),
      tScreen: new THREE.Vector3(1.0, 2.15, L / 2 - t),
      tDo: new THREE.Vector3(dx, y1 + 0.35, dz),
    },
    radius: 2.6,
    localBox: { min: [-W / 2 - 0.15, 0, -L / 2 - 0.15], max: [bx + 0.65, y1 + 0.2, L / 2 + 0.15] },
    pickTargets: [...meshes, surf],
    outline, glowRadius: 3.1, glowY: 0.015, lamp,
    animate(tt, s) {
      const m = s.motion;
      pulley.rotation.x = tt * 12 * m;
      liquid.uniforms.uTime.value = tt;
      liquid.uniforms.uMotion.value = m;
      liquid.uniforms.uGlow.value = 0.03 + 0.18 * s.flow + (s.active ? 0.06 : 0);
      const amp = 0.08 + 0.3 * m;
      for (let i = 0; i < NC; i++) {
        const x0 = (hash01(i, 1) * 2 - 1) * ix, z0 = (hash01(i, 2) * 2 - 1) * iz;
        const ph = hash01(i, 3) * 6.283;
        const x = x0 + amp * Math.sin(tt * 0.55 + ph);
        const z = z0 + amp * 0.7 * Math.cos(tt * 0.43 + ph * 1.3);
        const y = yL - 0.06 + 0.07 * Math.sin(tt * 1.3 * (0.4 + m) + ph * 2.1);
        setInstance(carriers, i, Math.max(-ix, Math.min(ix, x)), y, Math.max(-iz, Math.min(iz, z)), 1,
          ph + tt * 1.6 * m, ph * 0.7 + tt * 1.1 * m, ph * 1.9);
      }
      carriers.instanceMatrix.needsUpdate = true;
      const vis = Math.min(1, m * 1.6);
      for (let i = 0; i < NB; i++) {
        const k = i + 300;
        const f = fract(hash01(k, 1) + tt * (0.9 + 0.6 * hash01(k, 2)));
        const x = (hash01(k, 3) * 2 - 1) * ix, z = (hash01(k, 4) * 2 - 1) * iz;
        const sc = vis * (0.5 + 0.7 * hash01(k, 5)) * (f > 0.85 ? (1 - f) / 0.15 : 1);
        setInstance(bubbles, i, x, yL - 0.18 + f * 0.2, z, Math.max(sc, 1e-4));
      }
      bubbles.instanceMatrix.needsUpdate = true;
    },
  });
}
