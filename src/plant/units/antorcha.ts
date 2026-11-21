/**
 * QB-201 · Sello hidráulico y antorcha de biogás (supuesto visual de la fase 2).
 * Losa, pote de condensado con purga (bajo la llegada del colector, puerto 'in' hacia arriba), sello
 * hidráulico (recipiente con mirilla y rebose), arrestallamas en línea, chimenea Ø0,5 × 5 m con cortavientos,
 * línea de piloto, tablero de ignición y baliza roja de obstrucción. Llama: billboard cilíndrico con shader
 * determinista (ruido función de uTime), aditiva y sobria; intensidad = setInternalMotion (y altura con
 * setFlowLevel). Ondulación de calor muy tenue encima. Capacidad de quemado: supuesto (assumptions.ts).
 */
import * as THREE from 'three';
import type { PlantUnit } from '../types';
import { UNIT_BY_ID, type UnitSpec } from '../layout';
import { MAT, MAT2, NIGHT, createNightEmissive } from '../../scene/materials';
import { Batcher, createRoot, createStatusLamp, cyl, finalizeUnit, lathe, ladder, outlineBox, rbox, T } from './common';

const FLAME_VERT = /* glsl */`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const FLAME_FRAG = /* glsl */`
varying vec2 vUv;
uniform float uTime; uniform float uI; uniform float uShimmer;
float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
void main(){
  vec2 uv = vUv;
  float y = uv.y;
  float t = uTime;
  float n = n2(vec2(uv.x * 4.0, y * 3.0 - t * 2.3)) * 0.6 + n2(vec2(uv.x * 9.0 + 3.1, y * 7.0 - t * 3.7)) * 0.4;
  float w = (0.42 - 0.3 * y) * (0.75 + 0.5 * n);          // ancho que se afina hacia arriba
  float x = abs(uv.x - 0.5 + 0.06 * sin(y * 5.0 - t * 2.0) * y);
  float body = smoothstep(w, w * 0.35, x) * smoothstep(0.0, 0.08, y) * (1.0 - smoothstep(0.55 + 0.35 * n, 1.0, y));
  float core = smoothstep(w * 0.55, 0.0, x) * (1.0 - smoothstep(0.05, 0.45, y)) * smoothstep(0.0, 0.05, y);
  vec3 c = mix(vec3(0.95, 0.42, 0.12), vec3(1.0, 0.78, 0.42), core);
  float a = (body * 0.8 + core * 0.6) * uI;
  if (uShimmer > 0.5) { // ondulación de calor: velo muy tenue
    float s = n2(vec2(uv.x * 6.0, y * 4.0 - t * 1.5));
    a = smoothstep(0.3, 0.0, abs(uv.x - 0.5) - 0.15) * (1.0 - y) * y * 0.08 * s * uI;
    c = vec3(0.9, 0.85, 0.8);
  }
  gl_FragColor = vec4(c * a, a);
}`;

function flameMaterial(shimmer: boolean): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uI: { value: 0 }, uShimmer: { value: shimmer ? 1 : 0 } },
    vertexShader: FLAME_VERT, fragmentShader: FLAME_FRAG,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false,
  });
}

export function createFlare(spec: UnitSpec = UNIT_BY_ID.flare): PlantUnit {
  const rS = spec.size.d! / 2, Hs = spec.size.h, y0 = spec.base, yTop = y0 + Hs;
  const root = createRoot(spec);
  const b = new Batcher();

  // Losa y pedestal
  b.add(rbox(3.0, 0.15, 3.4, 0.03), MAT.concreteDark, T(-0.3, 0.075, 0.25));
  b.add(cyl(0.55, y0 - 0.15, 32), MAT.concrete, T(0, 0.15 + (y0 - 0.15) / 2, 0));
  // Chimenea: base con cartelas, fuste, cortavientos y quemador
  b.add(cyl(rS + 0.12, 0.05, 32), MAT.steelDark, T(0, y0 + 0.025, 0));
  for (let k = 0; k < 4; k++) {
    const a = k * Math.PI / 2 + Math.PI / 4;
    b.add(rbox(0.03, 0.45, 0.22, 0.008), MAT.steelDark, T(Math.sin(a) * (rS + 0.08), y0 + 0.25, Math.cos(a) * (rS + 0.08), 0, a, 0));
  }
  b.add(cyl(rS, Hs - 0.5, 32), MAT2.flareSteel, T(0, y0 + (Hs - 0.5) / 2, 0));
  for (const yy of [y0 + 1.2, y0 + 2.6, y0 + 3.9]) b.add(cyl(rS + 0.015, 0.06, 32), MAT.steelDark, T(0, yy, 0));
  b.add(lathe([[rS - 0.02, yTop - 0.52], [rS + 0.12, yTop - 0.42], [rS + 0.12, yTop], [rS + 0.08, yTop], [rS + 0.08, yTop - 0.38], [rS - 0.06, yTop - 0.46]], 0.02, 32), MAT.steelDark);
  b.add(cyl(rS * 0.55, 0.12, 20), MAT.rubber, T(0, yTop - 0.12, 0));
  // Línea de piloto y tablero de ignición
  b.rod(new THREE.Vector3(rS + 0.05, 0.9, 0.1), new THREE.Vector3(rS + 0.05, yTop - 0.1, 0.1), 0.015, MAT.steel, 6);
  b.add(rbox(0.05, 1.3, 0.05, 0.01), MAT.steelDark, T(0.95, 0.65 + 0.15, 0.9));
  b.add(rbox(0.36, 0.44, 0.16, 0.03), MAT.offWhite, T(0.95, 1.3, 0.85));
  b.add(cyl(0.03, 0.02, 10), MAT.rubber, T(0.95, 1.3, 0.94, Math.PI / 2, 0, 0));
  // Escalera de gato hasta media altura (inspección del arrestallamas superior / piloto)
  ladder(b, new THREE.Vector3(0, 0.15, -rS - 0.22), y0 + 2.3, new THREE.Vector3(0, 0, -1), true, 0.38);

  // Pote de condensado bajo la llegada del colector (puerto 'in' hacia arriba)
  const cx = -0.2, cz = 1.4;
  b.add(lathe([[0, 0], [0.17, 0], [0.17, 0.5], [0.08, 0.58], [0, 0.6]], 0.03, 24), MAT.steelBlue, T(cx, 0.3, cz));
  b.add(rbox(0.3, 0.15, 0.3, 0.02), MAT.concrete, T(cx, 0.22, cz));
  b.rod(new THREE.Vector3(cx, 0.88, cz), new THREE.Vector3(cx, 1.5, cz), 0.085, MAT.steel, 14);
  b.add(cyl(0.14, 0.045, 20), MAT.steel, T(cx, 1.48, cz));
  b.add(new THREE.SphereGeometry(0.11, 14, 10), MAT.steel, T(cx, 1.1, cz));
  b.rod(new THREE.Vector3(cx + 0.17, 0.42, cz), new THREE.Vector3(cx + 0.4, 0.42, cz), 0.02, MAT.steel, 6);   // purga de condensado
  b.add(rbox(0.08, 0.08, 0.08, 0.01), MAT.steelDark, T(cx + 0.33, 0.42, cz));
  // Línea al sello hidráulico
  const sx = -1.0, sz = 0.55, sR = 0.36, sH = 1.35;
  b.rod(new THREE.Vector3(cx, 1.1, cz), new THREE.Vector3(sx, 1.1, cz), 0.075, MAT.steel, 12);
  b.add(new THREE.SphereGeometry(0.085, 12, 8), MAT.steel, T(sx, 1.1, cz));
  b.rod(new THREE.Vector3(sx, 1.1, cz), new THREE.Vector3(sx, 1.1, sz + sR - 0.02), 0.075, MAT.steel, 12);
  // Sello: recipiente con cabezas toriesféricas, mirilla, rebose
  b.add(lathe([[0, 0.3], [sR - 0.05, 0.3], [sR, 0.38], [sR, 0.3 + sH - 0.08], [sR - 0.05, 0.3 + sH], [0.1, 0.3 + sH + 0.08], [0, 0.3 + sH + 0.08]], 0.03, 32), MAT.sage, T(sx, 0, sz));
  b.add(cyl(sR + 0.06, 0.08, 28), MAT.concrete, T(sx, 0.26, sz));
  b.add(rbox(0.06, 0.6, 0.03, 0.01), MAT.glass, T(sx + 0.2, 0.95, sz + sR * 0.86, 0, 0.5, 0));
  b.add(rbox(0.09, 0.68, 0.02, 0.01), MAT.steelDark, T(sx + 0.205, 0.95, sz + sR * 0.84, 0, 0.5, 0));
  b.rod(new THREE.Vector3(sx - sR, 0.9, sz), new THREE.Vector3(sx - sR - 0.25, 0.9, sz), 0.03, MAT.steel, 8);  // rebose del sello
  b.rod(new THREE.Vector3(sx - sR - 0.25, 0.9, sz), new THREE.Vector3(sx - sR - 0.25, 0.2, sz), 0.03, MAT.steel, 8);
  // Salida del sello → arrestallamas → base de la chimenea
  const yo = 0.3 + sH + 0.08, ya = 2.0;
  b.rod(new THREE.Vector3(sx, yo, sz), new THREE.Vector3(sx, ya, sz), 0.075, MAT.steel, 12);
  b.add(new THREE.SphereGeometry(0.085, 12, 8), MAT.steel, T(sx, ya, sz));
  b.rod(new THREE.Vector3(sx, ya, sz), new THREE.Vector3(0, ya, sz), 0.075, MAT.steel, 12);
  b.add(new THREE.SphereGeometry(0.085, 12, 8), MAT.steel, T(0, ya, sz));
  b.rod(new THREE.Vector3(0, ya, sz), new THREE.Vector3(0, ya, rS - 0.02), 0.075, MAT.steel, 12);
  const ax = -0.5;
  b.add(cyl(0.16, 0.28, 24), MAT.steelDark, T(ax, ya, sz, 0, 0, Math.PI / 2));
  for (let k = 0; k < 5; k++) b.add(cyl(0.18, 0.012, 24), MAT.steel, T(ax - 0.1 + k * 0.05, ya, sz, 0, 0, Math.PI / 2));
  for (const s of [-1, 1]) b.add(cyl(0.12, 0.03, 20), MAT.steel, T(ax + s * 0.16, ya, sz, 0, 0, Math.PI / 2));
  b.rod(new THREE.Vector3(ax, ya - 0.17, sz), new THREE.Vector3(ax, 0.15, sz), 0.03, MAT.steelBlue, 6);           // soporte
  // Bolardos de protección
  for (const [x, z] of [[1.15, 1.8], [-1.7, 1.8], [1.15, -1.2], [-1.7, -1.2]] as const) {
    b.add(cyl(0.08, 0.8, 14), MAT.rail, T(x, 0.55, z));
  }
  const meshes = b.build(root);

  // Baliza roja de obstrucción en la cima (encendida al atardecer y de noche, pulso lento determinista)
  const avMat = createNightEmissive(0xe2402c, 2.2, 0.15, 0x5a1a14);
  const av = new THREE.Mesh(new THREE.SphereGeometry(0.06, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), avMat);
  av.position.set(rS + 0.1, yTop + 0.02, 0);
  const avBase = new THREE.Mesh(cyl(0.05, 0.05, 10), MAT.steelDark);
  avBase.position.set(rS + 0.1, yTop - 0.01, 0);
  root.add(av, avBase);

  // Llama + velo de calor (billboards cilíndricos)
  const flameMat = flameMaterial(false), heatMat = flameMaterial(true);
  const flame = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).translate(0, 0.5, 0), flameMat);
  const heat = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).translate(0, 0.5, 0), heatMat);
  flame.renderOrder = 6; heat.renderOrder = 6;
  flame.frustumCulled = false; heat.frustumCulled = false;
  const wp = new THREE.Vector3();
  const face = (o: THREE.Object3D) => (_r: unknown, _s: unknown, cam: THREE.Camera) => {
    o.getWorldPosition(wp);
    o.rotation.y = Math.atan2(cam.position.x - wp.x, cam.position.z - wp.z);
    o.updateMatrix(); o.updateMatrixWorld();
  };
  flame.onBeforeRender = face(flame) as unknown as THREE.Object3D['onBeforeRender'];
  heat.onBeforeRender = face(heat) as unknown as THREE.Object3D['onBeforeRender'];
  root.add(flame, heat);
  // Luz real de la llama (sin sombras): intensidad = llama × (0,25 + noche), parpadeo función de t
  const flameLight = new THREE.PointLight(0xff9a4a, 0, 14, 1.8);
  flameLight.position.set(0, yTop + 0.6, 0);
  root.add(flameLight);

  const lamp = createStatusLamp(new THREE.Vector3(0.95, 1.52, 0.85));
  const outline = outlineBox(new THREE.Vector3(-1.5, 0, -0.9), new THREE.Vector3(1.2, yTop + 0.1, 2.0));

  return finalizeUnit({
    spec, root,
    localAnchors: {
      label: new THREE.Vector3(0, yTop + 1.9, 0),
      focus: new THREE.Vector3(-0.2, 2.3, 0.5),
      core: new THREE.Vector3(sx, 0.9, sz),
      in: new THREE.Vector3(cx, 1.5, cz),
      tip: new THREE.Vector3(0, yTop, 0),
    },
    radius: 3.0,
    localBox: { min: [-1.8, 0, -1.3], max: [1.25, yTop + 0.1, 1.9] },
    pickTargets: meshes,
    outline, glowRadius: 2.0, glowY: 0.16, lamp,
    animate(tt, s) {
      const I = s.motion;
      const h = (0.55 + 0.85 * Math.max(s.flow, 0.3)) * (0.92 + 0.08 * Math.sin(tt * 3.1) * Math.sin(tt * 1.7 + 0.6));
      flame.visible = I > 0.02;
      heat.visible = I > 0.02;
      flame.scale.set(0.55 + 0.25 * I, h * (0.6 + 0.4 * I), 1);
      flame.position.set(0, yTop - 0.05, 0);
      heat.scale.set(1.0, 2.2 * h, 1);
      heat.position.set(0, yTop + h * 0.5, 0);
      flameMat.uniforms.uTime.value = tt; flameMat.uniforms.uI.value = I;
      heatMat.uniforms.uTime.value = tt; heatMat.uniforms.uI.value = I;
      const fl = 0.85 + 0.1 * Math.sin(tt * 7.3) * Math.sin(tt * 3.1 + 1.0);
      flameLight.intensity = 9 * I * (0.25 + NIGHT.value) * fl;
      av.scale.setScalar(0.85 + 0.15 * (0.5 + 0.5 * Math.sin(tt * 2.1)));
    },
  });
}
