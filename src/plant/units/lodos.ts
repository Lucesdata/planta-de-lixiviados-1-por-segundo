/**
 * LS-101 · Lecho de secado cubierto (supuesto visual de la fase 2; 7 × 4 m = 28 m², assumptions.ts S.bedArea_m2).
 * Muros bajos de concreto con acceso de 1,6 m al sur (tablones bajos de cierre), lecho de arena sobre grava
 * con drenes, torta de lodo cuyo nivel y humedad dependen de setFlowLevel (húmeda = oscura y brillante;
 * seca = clara, mate y agrietada) y se «remueve» con setInternalMotion. Cubierta liviana de acero con
 * láminas translúcidas (policarbonato) sobre columnas: los lados quedan abiertos y la torta y las personas
 * se ven desde la cámara. Llegada 'in' por el muro este (desde ES-101), placa de impacto, dren inferior
 * 'drain' al norte (retorno a TK-101 por zanja). Luminarias estancas bajo la cubierta (nocturnas).
 */
import * as THREE from 'three';
import type { PlantUnit } from '../types';
import { UNIT_BY_ID, type UnitSpec } from '../layout';
import { MAT, MAT2, PALETTE, createLightPoolMaterial, createNightEmissive } from '../../scene/materials';
import { Batcher, createRoot, createStatusLamp, cyl, finalizeUnit, outlineBox, rbox, T } from './common';

/** Material de torta con humedad (uWet) y grietas de secado procedimentales en coordenadas de mundo. */
function createCakeMaterial(): { material: THREE.MeshStandardMaterial; u: { uWet: { value: number }; uTime: { value: number }; uStir: { value: number } } } {
  const m = new THREE.MeshStandardMaterial({ color: 0x5a4632, roughness: 0.9 });
  const u = { uWet: { value: 1 }, uTime: { value: 0 }, uStir: { value: 0 } };
  m.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, u);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vCakeW;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvCakeW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
varying vec3 vCakeW; uniform float uWet; uniform float uTime; uniform float uStir;
vec2 ckH(vec2 p){ p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3))); return fract(sin(p) * 43758.5453); }
float ckCell(vec2 x){ vec2 n = floor(x), f = fract(x); float d1 = 8.0, d2 = 8.0;
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) { vec2 g = vec2(float(i), float(j)); vec2 o = ckH(n + g);
    vec2 r = g + o - f; float d = dot(r, r); if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d; }
  return sqrt(d2) - sqrt(d1); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
  float crack = 1.0 - smoothstep(0.02, 0.07, ckCell(vCakeW.xz * 2.2));
  float dry = 1.0 - uWet;
  vec3 wetC = vec3(0.16, 0.11, 0.07), dryC = vec3(0.47, 0.39, 0.29);
  float mott = 0.5 + 0.5 * sin(vCakeW.x * 3.1 + sin(vCakeW.z * 2.3) * 1.7);
  vec3 col = mix(wetC, dryC, dry) * (0.92 + 0.12 * mott);
  col *= 1.0 - crack * dry * 0.55;
  float furrow = 0.5 + 0.5 * sin(vCakeW.z * 14.0 + vCakeW.x * 0.6);
  col *= 1.0 - uStir * 0.12 * furrow;
  diffuseColor.rgb = col;`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
  roughnessFactor = mix(0.32, 0.97, dry);`);
  };
  m.customProgramCacheKey = () => 'ptl-cake';
  return { material: m, u };
}

export const BED_GEOM = { wall: 0.2, gapHalf: 0.8, roofLow: 3.35, roofHigh: 3.85, colX: [-3.6, -1.2, 1.2, 3.6], colZ: 2.15 };

export function createSludgeHandling(spec: UnitSpec = UNIT_BY_ID.sludge): PlantUnit {
  const W = spec.size.w!, H = spec.size.h, L = spec.size.l!;
  const root = createRoot(spec);
  const b = new Batcher();
  const t = BED_GEOM.wall, g = BED_GEOM.gapHalf;

  // Muros (sur con acceso central) y tablones bajos en el acceso
  b.add(rbox(t, H, L, 0.04), MAT.concrete, T(-W / 2 + t / 2, H / 2, 0));
  b.add(rbox(t, H, L, 0.04), MAT.concrete, T(W / 2 - t / 2, H / 2, 0));
  b.add(rbox(W, H, t, 0.04), MAT.concrete, T(0, H / 2, -L / 2 + t / 2));
  const sw = (W / 2 - g);
  b.add(rbox(sw, H, t, 0.04), MAT.concrete, T(-W / 2 + sw / 2, H / 2, L / 2 - t / 2));
  b.add(rbox(sw, H, t, 0.04), MAT.concrete, T(W / 2 - sw / 2, H / 2, L / 2 - t / 2));
  b.add(rbox(2 * g, 0.12, t * 0.6, 0.02), MAT2.pallet, T(0, 0.06, L / 2 - t / 2));
  for (const s of [-1, 1]) b.add(rbox(0.06, H, 0.08, 0.01), MAT.steelDark, T(s * (g + 0.03), H / 2, L / 2 - t / 2));
  // Lecho: grava + arena; drenes perforados (visibles como canaletas en el borde)
  b.add(rbox(W - 2 * t + 0.02, 0.08, L - 2 * t + 0.02, 0.02), MAT.gravel, T(0, 0.04, 0));
  b.add(rbox(W - 2 * t + 0.02, 0.08, L - 2 * t + 0.02, 0.02), MAT2.sand, T(0, 0.12, 0));
  // Placa de impacto y llegada sobre el muro este
  b.add(rbox(0.5, 0.03, 0.5, 0.01), MAT.concreteDark, T(W / 2 - t - 0.35, 0.18, 0));
  const pin = new THREE.Vector3(W / 2 + 0.25, 0.95, 0);
  b.rod(pin, new THREE.Vector3(W / 2 - t - 0.3, 0.95, 0), 0.075, MAT.steel, 14);
  b.add(new THREE.SphereGeometry(0.085, 12, 8), MAT.steel, T(W / 2 - t - 0.3, 0.95, 0));
  b.rod(new THREE.Vector3(W / 2 - t - 0.3, 0.95, 0), new THREE.Vector3(W / 2 - t - 0.3, 0.55, 0), 0.075, MAT.steel, 14);
  b.add(cyl(0.125, 0.04, 20), MAT.steel, T(pin.x - 0.02, 0.95, 0, 0, 0, Math.PI / 2));
  // Dren inferior al norte: tubo corto a través del muro y codo hacia la zanja
  const dx = 1.2;
  b.rod(new THREE.Vector3(dx, 0.15, -L / 2 + t + 0.05), new THREE.Vector3(dx, 0.15, -L / 2 - 0.15), 0.065, MAT.steelDark, 12);
  b.add(new THREE.SphereGeometry(0.075, 12, 8), MAT.steelDark, T(dx, 0.15, -L / 2 - 0.15));
  b.rod(new THREE.Vector3(dx, 0.15, -L / 2 - 0.15), new THREE.Vector3(dx, 0.05, -L / 2 - 0.15), 0.065, MAT.steelDark, 12);
  const pdrain = new THREE.Vector3(dx, 0.05, -L / 2 - 0.15);

  // Cubierta: columnas, vigas, correas y láminas translúcidas (agua hacia el sur)
  const { roofLow: yS, roofHigh: yN, colX, colZ } = BED_GEOM;
  const yAt = (z: number) => yN + (yS - yN) * ((z + colZ) / (2 * colZ));
  for (const x of colX) for (const z of [-colZ, colZ]) {
    const yy = yAt(z);
    b.add(rbox(0.12, yy, 0.12, 0.015), MAT.steelBlue, T(x, yy / 2, z));
    b.add(rbox(0.26, 0.03, 0.26, 0.01), MAT.steelDark, T(x, 0.015, z));
  }
  for (const x of colX) {
    const a = new THREE.Vector3(x, yAt(-colZ - 0.15), -colZ - 0.15), c = new THREE.Vector3(x, yAt(colZ + 0.15), colZ + 0.15);
    b.rod(a, c, 0.06, MAT.steelBlue, 6);
  }
  for (let k = 0; k <= 5; k++) {
    const z = -colZ - 0.15 + k * ((2 * colZ + 0.3) / 5);
    b.rod(new THREE.Vector3(-W / 2 - 0.3, yAt(z) + 0.07, z), new THREE.Vector3(W / 2 + 0.3, yAt(z) + 0.07, z), 0.035, MAT.steel, 6);
  }
  for (const z of [-colZ, colZ]) b.rod(new THREE.Vector3(colX[0], yAt(z) - 0.08, z), new THREE.Vector3(colX[3], yAt(z) - 0.08, z), 0.05, MAT.steelBlue, 6);
  // Canaleta de aguas lluvia al borde sur
  b.add(rbox(W + 0.6, 0.08, 0.14, 0.02), MAT.steelDark, T(0, yAt(colZ + 0.15) + 0.02, colZ + 0.2));
  const meshes = b.build(root);

  const roofLen = Math.hypot(2 * colZ + 0.3, yN - yS);
  const roofMat = new THREE.MeshStandardMaterial({ color: 0xd6dfe0, roughness: 0.35, transparent: true, opacity: 0.22, depthWrite: false, side: THREE.DoubleSide });
  const roof = new THREE.Mesh(new THREE.PlaneGeometry(W + 0.6, roofLen), roofMat);
  roof.rotation.x = -Math.PI / 2 + Math.atan2(yN - yS, 2 * colZ + 0.3);
  roof.position.set(0, (yS + yN) / 2 + 0.11, 0);
  roof.renderOrder = 4;
  root.add(roof);

  // Luminarias estancas bajo la cubierta + charcos de luz sobre la torta
  const lensMat = createNightEmissive(0xffe2b0, 1.6, 0.04, 0xd8d4c4);
  const lb = new Batcher();
  const lampPos: THREE.Vector3[] = [];
  for (const x of [-2.4, 0, 2.4]) {
    const z = 0.0, y = yAt(z) - 0.12;
    lb.add(rbox(0.5, 0.07, 0.14, 0.03), lensMat, T(x, y, z));
    lampPos.push(new THREE.Vector3(x, y, z));
  }
  lb.build(root, false, false);
  const poolMat = createLightPoolMaterial(0xffdcaa, 0.28);
  const pools = new THREE.InstancedMesh(new THREE.PlaneGeometry(2.6, 2.6).rotateX(-Math.PI / 2), poolMat, lampPos.length);
  lampPos.forEach((p, i) => pools.setMatrixAt(i, new THREE.Matrix4().makeTranslation(p.x, 0.62, p.z)));
  pools.renderOrder = 3;
  root.add(pools);

  const cake = createCakeMaterial();
  const cakeMesh = new THREE.Mesh(new THREE.BoxGeometry(W - 2 * t, 1, L - 2 * t, 8, 1, 4), cake.material);
  cakeMesh.receiveShadow = true;
  root.add(cakeMesh);

  const lamp = createStatusLamp(new THREE.Vector3(W / 2 - t / 2, H, L / 2 - 0.25));
  const outline = outlineBox(new THREE.Vector3(-W / 2 - 0.04, 0, -L / 2 - 0.04), new THREE.Vector3(W / 2 + 0.04, H + 0.03, L / 2 + 0.04));

  return finalizeUnit({
    spec, root,
    localAnchors: {
      label: new THREE.Vector3(0, yN + 0.9, 0),
      focus: new THREE.Vector3(0, 1.0, 0.3),
      core: new THREE.Vector3(0, 0.3, 0.4),
      in: pin, drain: pdrain,
      /** Acceso sur (centro del hueco del muro) — ver rutas w-bed-a/b. */
      access: new THREE.Vector3(0, 0, L / 2),
    },
    radius: 4.0,
    localBox: { min: [-W / 2 - 0.3, 0, -colZ - 0.15], max: [W / 2 + 0.3, yN + 0.25, colZ + 0.3] },
    pickTargets: [...meshes, cakeMesh],
    outline, glowRadius: 4.0, glowY: 0.015, lamp,
    animate(tt, s) {
      const th = 0.04 + 0.22 * s.flow + 0.04 * s.motion;
      cakeMesh.scale.y = th;
      cakeMesh.position.y = 0.16 + th / 2;
      cake.u.uWet.value = Math.min(1, 0.15 + 0.85 * s.flow);
      cake.u.uStir.value = s.motion;
      cake.u.uTime.value = tt;
    },
  });
}

export const BED_PALETTE = PALETTE.sludge;
