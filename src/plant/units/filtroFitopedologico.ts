/**
 * Filtro fitopedológico FF-401: lecho bajo con muros de concreto, medio filtrante, tubería de
 * distribución perforada con laterales, macollas de juncos (InstancedMesh, semilla determinista) y
 * lámina de agua que avanza sobre el lecho según el flujo fijado.
 */
import * as THREE from 'three';
import type { PlantUnit } from '../types';
import { UNIT_BY_ID, type UnitSpec } from '../layout';
import { MAT, MAT2, PALETTE, createLiquidMaterial } from '../../scene/materials';
import { Batcher, createRoot, createStatusLamp, cyl, finalizeUnit, hash01, outlineBox, rbox, T } from './common';
import { S } from '../assumptions';

export function createPhytoFilter(spec: UnitSpec = UNIT_BY_ID.filtro): PlantUnit {
  const W = spec.size.w!, H = spec.size.h, L = spec.size.l!;
  const root = createRoot(spec);
  const b = new Batcher();
  const t = 0.2;
  const yBed = H - 0.18;

  b.add(rbox(t, H, L, 0.05), MAT.concrete, T(-W / 2 + t / 2, H / 2, 0));
  b.add(rbox(t, H, L, 0.05), MAT.concrete, T(W / 2 - t / 2, H / 2, 0));
  b.add(rbox(W, H, t, 0.05), MAT.concrete, T(0, H / 2, -L / 2 + t / 2));
  b.add(rbox(W, H, t, 0.05), MAT.concrete, T(0, H / 2, L / 2 - t / 2));
  b.add(rbox(W - 2 * t + 0.02, yBed, L - 2 * t + 0.02, 0.02), MAT.soil, T(0, yBed / 2, 0));
  // Franja de grava junto a la distribución y en la salida
  b.add(rbox(W - 2 * t - 0.2, 0.03, 0.7, 0.01), MAT.gravel, T(0, yBed + 0.01, 0));
  b.add(rbox(0.6, 0.03, L - 2 * t - 0.1, 0.01), MAT.gravel, T(-W / 2 + t + 0.32, yBed + 0.01, 0));

  // Distribución: entra por el muro este a 1,1 m, baja y recorre el eje del lecho con laterales
  const yD = yBed + 0.12;
  const xIn = W / 2 + 0.25;
  b.rod(new THREE.Vector3(xIn, 1.1, 0), new THREE.Vector3(W / 2 - t - 0.15, 1.1, 0), 0.085, MAT.steelDark, 14);
  b.rod(new THREE.Vector3(W / 2 - t - 0.15, 1.1, 0), new THREE.Vector3(W / 2 - t - 0.15, yD, 0), 0.085, MAT.steelDark, 14);
  b.add(new THREE.SphereGeometry(0.085, 12, 8), MAT.steelDark, T(W / 2 - t - 0.15, 1.1, 0));
  b.rod(new THREE.Vector3(W / 2 - t - 0.15, yD, 0), new THREE.Vector3(-W / 2 + t + 0.8, yD, 0), 0.07, MAT.steelDark, 12);
  for (let x = W / 2 - t - 0.8; x > -W / 2 + t + 0.9; x -= 1.15) {
    b.rod(new THREE.Vector3(x, yD, -1.6), new THREE.Vector3(x, yD, 1.6), 0.035, MAT.steelDark, 8);
  }
  b.rod(new THREE.Vector3(xIn - 0.05, 1.1, 0), new THREE.Vector3(xIn, 1.1, 0), 0.14, MAT.steel, 18);
  // Salida: caja colectora al oeste y boquilla baja
  b.add(rbox(0.5, 0.35, 0.7, 0.03), MAT.concreteDark, T(-W / 2 + t + 0.3, yBed + 0.06, 0));
  b.rod(new THREE.Vector3(-W / 2 + 0.02, 0.4, 0), new THREE.Vector3(-W / 2 - 0.2, 0.4, 0), 0.085, MAT.steel, 14);
  b.rod(new THREE.Vector3(-W / 2 - 0.245, 0.4, 0), new THREE.Vector3(-W / 2 - 0.2, 0.4, 0), 0.14, MAT.steel, 18);
  // Fase 8 · corte didáctico del lecho en el muro sur (cara hacia la cámara): capas supuestas grava · arena · suelo
  const zf = L / 2 + 0.012, cw = 2.6, cx = 0.9;
  const layers: [number, number, THREE.Material][] = [
    [0, S.filterGravel_m, MAT.gravel],
    [S.filterGravel_m, S.filterSand_m, MAT2.sand],
    [S.filterGravel_m + S.filterSand_m, S.filterSoil_m, MAT.soil],
  ];
  for (const [y0, h, m] of layers) b.add(rbox(cw, h - 0.006, 0.02, 0.004), m, T(cx, y0 + h / 2, zf));
  b.add(rbox(cw + 0.08, 0.035, 0.035, 0.005), MAT.concreteDark, T(cx, yBed + 0.02, zf + 0.005));
  for (const x of [cx - cw / 2 - 0.02, cx + cw / 2 + 0.02]) b.add(rbox(0.035, yBed, 0.035, 0.005), MAT.concreteDark, T(x, yBed / 2, zf + 0.005));
  // Dren inferior perforado (visible en el corte) que corre hacia la caja de salida
  const yDr = S.filterGravel_m * 0.45;
  b.rod(new THREE.Vector3(W / 2 - t - 0.2, yDr, L / 2 - t - 0.25), new THREE.Vector3(-W / 2 + t + 0.3, yDr, L / 2 - t - 0.25), 0.055, MAT.steelDark, 10);
  b.add(cyl(0.06, 0.025, 14), MAT.steel, T(cx, yDr, zf + 0.01, Math.PI / 2, 0, 0));
  // Salida con nivel regulable: tubo vertical en la caja colectora
  b.rod(new THREE.Vector3(-W / 2 + t + 0.3, yBed - 0.1, 0), new THREE.Vector3(-W / 2 + t + 0.3, yBed + 0.32, 0), 0.05, MAT.offWhite, 10);
  // Piezómetros de observación (2) con tapa
  for (const [px, pz] of [[1.8, -1.3], [-1.6, 1.2]] as const) {
    b.rod(new THREE.Vector3(px, 0.1, pz), new THREE.Vector3(px, yBed + 0.35, pz), 0.04, MAT.offWhite, 10);
    b.add(cyl(0.055, 0.05, 12), MAT.steelBlue, T(px, yBed + 0.37, pz));
  }

  const meshes = b.build(root);

  // Lámina de agua (avanza de este a oeste)
  const sheen = createLiquidMaterial({
    color: PALETTE.treated, hi: 0xbfe3dc, mode: 'sheen', opacity: 0.62, speed: 1, scale: 1,
    center: [spec.pos[0] + W / 2 - t, spec.pos[1]], dir: [-1, 0], span: W - 2 * t,
  });
  const water = new THREE.Mesh(new THREE.PlaneGeometry(W - 2 * t, L - 2 * t), sheen.material);
  water.rotation.x = -Math.PI / 2;
  water.position.y = yBed + 0.035;
  water.renderOrder = 1;
  root.add(water);

  // Juncos: macollas deterministas, evitando la franja de distribución
  const clusters: [number, number][] = [];
  for (let i = 0; clusters.length < 46 && i < 400; i++) {
    const x = (hash01(i, 11) - 0.5) * (W - 2 * t - 0.6);
    const z = (hash01(i, 12) - 0.5) * (L - 2 * t - 0.5);
    if (Math.abs(z) < 0.5 || x < -W / 2 + t + 0.75) continue;
    if (clusters.some(([cx, cz]) => Math.hypot(cx - x, cz - z) < 0.62)) continue;
    clusters.push([x, z]);
  }
  const PER = 9;
  const blades = new THREE.InstancedMesh(new THREE.ConeGeometry(0.028, 1, 5, 1).translate(0, 0.5, 0), MAT.plant, clusters.length * PER);
  const heads = new THREE.InstancedMesh(new THREE.CapsuleGeometry(0.025, 0.1, 3, 6), MAT.plant, clusters.length * 3);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), sc = new THREE.Vector3();
  const col = new THREE.Color();
  let n = 0, nh = 0;
  clusters.forEach(([cx, cz], ci) => {
    for (let k = 0; k < PER; k++) {
      const s = ci * 31 + k;
      const a = hash01(s, 1) * Math.PI * 2, r = 0.05 + 0.16 * hash01(s, 2);
      const h = 0.55 + 0.6 * hash01(s, 3);
      p.set(cx + Math.sin(a) * r, yBed, cz + Math.cos(a) * r);
      e.set(Math.cos(a) * 0.22 * hash01(s, 4), 0, -Math.sin(a) * 0.22 * hash01(s, 4));
      q.setFromEuler(e);
      sc.set(1, h, 1);
      blades.setMatrixAt(n, m4.compose(p, q, sc));
      col.setHex(PALETTE.reed).offsetHSL(0.02 * (hash01(s, 5) - 0.5), -0.05 * hash01(s, 6), 0.08 * (hash01(s, 7) - 0.5));
      blades.setColorAt(n, col);
      n++;
      if (k < 3) {
        const top = new THREE.Vector3(0, h, 0).applyQuaternion(q).add(p);
        heads.setMatrixAt(nh, m4.compose(top, q, sc.set(1, 1, 1)));
        heads.setColorAt(nh, col.setHex(0x7d6a48));
        nh++;
      }
    }
  });
  blades.castShadow = true;
  blades.receiveShadow = true;
  root.add(blades, heads);

  const lamp = createStatusLamp(new THREE.Vector3(W / 2 - t / 2, H, L / 2 - 0.4));
  const outline = outlineBox(new THREE.Vector3(-W / 2 - 0.04, 0, -L / 2 - 0.04), new THREE.Vector3(W / 2 + 0.04, H + 0.03, L / 2 + 0.04));

  return finalizeUnit({
    spec, root,
    localAnchors: {
      label: new THREE.Vector3(0, H + 1.7, 0),
      focus: new THREE.Vector3(0, H * 0.6, 0),
      core: new THREE.Vector3(0, yBed + 0.1, 0),
      in: new THREE.Vector3(xIn, 1.1, 0),
      out: new THREE.Vector3(-W / 2 - 0.245, 0.4, 0),
      // Fase 8 · puntos para notas técnicas
      tLayers: new THREE.Vector3(cx - cw / 2 + 0.3, S.filterGravel_m + S.filterSand_m * 0.5, zf),
      tDrain: new THREE.Vector3(cx, yDr, zf),
      tDist: new THREE.Vector3(1.2, yD, 0),
      tReeds: new THREE.Vector3(2.4, yBed + 1.0, 1.4),
      tOutlet: new THREE.Vector3(-W / 2 + t + 0.3, yBed + 0.32, 0),
    },
    radius: Math.hypot(W, L) / 2,
    localBox: { min: [-W / 2, 0, -L / 2], max: [W / 2, H + 1.2, L / 2] },
    pickTargets: [...meshes, water],
    outline, glowRadius: W * 0.62, glowY: 0.015, lamp,
    animate(tt, s) {
      sheen.uniforms.uTime.value = tt;
      sheen.uniforms.uMotion.value = s.motion;
      sheen.uniforms.uSpread.value = 0.04 + 1.0 * s.flow;
      sheen.uniforms.uGlow.value = 0.03 + 0.12 * s.flow + (s.active ? 0.05 : 0);
    },
  });
}
