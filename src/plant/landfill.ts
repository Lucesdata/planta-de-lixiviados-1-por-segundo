/**
 * Fase 3 · Vertedero (relleno sanitario) de origen del lixiviado — SUPUESTO VISUAL, sin planos ni cotas.
 * Narrativa: la lluvia cae sobre la basura → percola → canal perimetral → laguna de lixiviados → bombeo a la
 * cámara de llegada de la planta (INLET_POINT). Todo lo animado (lluvia, ondas, flujo del canal, topadora,
 * camión recolector, aves) es función pura de t; la variación usa hash01 (sin Math.random).
 */
import * as THREE from 'three';
import { CAMERA_DIR, DITCH, INLET_POINT, LANDFILL, POND } from './layout';
import { MAT } from '../scene/materials';
import { Batcher, cyl, hash01, rbox, T } from './units/common';

const std = (color: number, roughness = 0.9, metalness = 0, extra: THREE.MeshStandardMaterialParameters = {}) =>
  new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra });

const M = {
  cover: std(0x96c98a),
  coverDark: std(0x86bd7c),
  soil: std(0xd2b48a),
  garbageBed: std(0xb9ab92),
  liner: std(0x3a4560, 0.55),
  gravel: std(0xcfc9ba),
  concrete: std(0xe3e7f0, 0.85),
  pipe: std(0xd08a3a, 0.5, 0.1),
  steel: std(0x8f9ab4, 0.45, 0.4),
  yellow: std(0xf2b632, 0.5, 0.1),
  dark: std(0x2b2e30, 0.7, 0.2),
  truckBody: std(0x1fa88f, 0.5, 0.05),
  truckCab: std(0x2f5bea, 0.45),
  glass: std(0x9fb7c2, 0.15, 0.3),
  fence: std(0xb3bdd2, 0.5, 0.4),
  cloud: std(0xffffff, 1.0, 0, { transparent: true, opacity: 0.55, depthWrite: false }),
  bird: new THREE.MeshBasicMaterial({ color: 0x4a5578, side: THREE.DoubleSide }),
};

/** Tronco de pirámide (bordes rectos, normales planas): base [x0,x1]×[z0,z1] en y0, cima retirada `inset` en y1. */
function frustum(x0: number, x1: number, z0: number, z1: number, inset: number, y0: number, y1: number): THREE.BufferGeometry {
  const b = [[x0, z0], [x1, z0], [x1, z1], [x0, z1]];
  const t = [[x0 + inset, z0 + inset], [x1 - inset, z0 + inset], [x1 - inset, z1 - inset], [x0 + inset, z1 - inset]];
  const pos: number[] = [];
  const quad = (a: number[], c: number[], d: number[], e: number[]) => pos.push(...a, ...c, ...d, ...a, ...d, ...e);
  for (let i = 0; i < 4; i++) {
    const j = (i + 1) % 4;
    quad([b[i][0], y0, b[i][1]], [t[i][0], y1, t[i][1]], [t[j][0], y1, t[j][1]], [b[j][0], y0, b[j][1]]);
  }
  quad([t[0][0], y1, t[0][1]], [t[3][0], y1, t[3][1]], [t[2][0], y1, t[2][1]], [t[1][0], y1, t[1][1]]);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  // Orientación hacia fuera: si la cara superior mira hacia abajo, invertir.
  g.computeVertexNormals();
  const n = g.attributes.normal;
  const last = n.count - 1;
  if (n.getY(last) < 0) {
    const p = g.attributes.position.array as Float32Array;
    for (let i = 0; i < p.length; i += 9) for (let k = 0; k < 3; k++) { const tmp = p[i + 3 + k]; p[i + 3 + k] = p[i + 6 + k]; p[i + 6 + k] = tmp; }
    g.computeVertexNormals();
  }
  return g;
}

/** Agua que fluye (canal o laguna): bandas que avanzan en `dir` y anillos de gotas de lluvia. */
export function flowingWater(color: number, dir: [number, number], uTime: { value: number }, ripples: boolean): THREE.MeshStandardMaterial {
  const m = std(color, 0.25, 0.05, { emissive: color, emissiveIntensity: 0.12 });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = uTime;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWw;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWw = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWw;\nuniform float uTime;')
      .replace('#include <color_fragment>', `#include <color_fragment>
        vec2 dir = vec2(${dir[0].toFixed(3)}, ${dir[1].toFixed(3)});
        float along = dot(vWw.xz, dir), across = dot(vWw.xz, vec2(-dir.y, dir.x));
        float band = smoothstep(0.55, 1.0, fract(along * 0.8 - uTime * ${ripples ? '0.0' : '0.9'} + 0.35 * sin(across * 5.0 + along * 0.7)));
        diffuseColor.rgb *= 0.86 + ${ripples ? '0.0' : '0.32'} * band;
        ${ripples ? `
        vec2 cell = floor(vWw.xz / 0.9);
        float h = fract(sin(dot(cell, vec2(127.1, 311.7))) * 43758.5453);
        float ph = fract(uTime * 0.9 + h);
        vec2 c = (cell + 0.25 + 0.5 * vec2(h, fract(h * 7.31))) * 0.9;
        float r = length(vWw.xz - c);
        float ring = smoothstep(0.035, 0.0, abs(r - ph * 0.42)) * (1.0 - ph);
        diffuseColor.rgb += vec3(0.30, 0.26, 0.18) * ring;` : ''}`);
  };
  m.customProgramCacheKey = () => `ptl-water-${dir.join(',')}-${ripples}`;
  return m;
}

/** Lluvia: quads finos instanciados orientados a la cámara fija; y = f(t) (sin estado). */
function createRain(uTime: { value: number }, box: { x0: number; x1: number; z0: number; z1: number; top: number }, count: number): THREE.Mesh {
  const quad = new THREE.PlaneGeometry(0.03, 1.15);
  quad.rotateZ(0.12); // leve inclinación por viento
  const ry = Math.atan2(CAMERA_DIR[0], CAMERA_DIR[2]);
  quad.rotateY(ry);
  const g = new THREE.InstancedBufferGeometry();
  g.index = quad.index;
  g.setAttribute('position', quad.attributes.position);
  const seeds = new Float32Array(count * 4);
  for (let i = 0; i < count; i++) {
    seeds[i * 4] = box.x0 + (box.x1 - box.x0) * hash01(i, 1);
    seeds[i * 4 + 1] = box.z0 + (box.z1 - box.z0) * hash01(i, 2);
    seeds[i * 4 + 2] = hash01(i, 3);
    seeds[i * 4 + 3] = 0.85 + 0.3 * hash01(i, 4);
  }
  g.setAttribute('aSeed', new THREE.InstancedBufferAttribute(seeds, 4));
  g.instanceCount = count;
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uTime, uTop: { value: box.top } },
    vertexShader: `
      attribute vec4 aSeed;
      uniform float uTime; uniform float uTop;
      varying float vA;
      void main() {
        float y = mod(aSeed.z * uTop - uTime * 13.0 * aSeed.w, uTop);
        vec3 p = position + vec3(aSeed.x + (uTop - y) * 0.06, y + 0.6, aSeed.y);
        vA = smoothstep(0.0, 1.5, y) * smoothstep(uTop, uTop - 3.0, y);
        gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: `
      varying float vA;
      void main() { gl_FragColor = vec4(0.45, 0.58, 0.92, 0.55 * vA); }`,
  });
  const mesh = new THREE.Mesh(g, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = 5;
  mesh.name = 'rain';
  return mesh;
}

export interface Landfill {
  group: THREE.Group;
  /** Anclas para etiquetas y encuadre: 'landfill' (cima del frente), 'pond' (laguna). */
  anchors: Record<'landfill' | 'pond', THREE.Vector3>;
  /** Puntos que delimitan el vertedero y la laguna (encuadre de cámara). */
  framePoints: [number, number, number][];
  setRain(on: boolean): void;
  update(t: number): void;
}

export function buildLandfill(): Landfill {
  const group = new THREE.Group();
  group.name = 'landfill';
  const b = new Batcher();
  const uTime = { value: 0 };
  const L = LANDFILL, H = L.tierH, S = L.slope;

  // ——— Terrazas: T1 (0 → H) y T2 (H → 2H) con berma ———
  const t1 = [L.minX, L.maxX, L.minZ, L.maxZ] as const;
  const i2 = S + L.bench;
  const t2 = [L.minX + i2, L.maxX - i2, L.minZ + i2, L.maxZ - i2] as const;
  b.add(frustum(t1[0], t1[1], t1[2], t1[3], S, -0.03, H), M.cover);
  b.add(frustum(t2[0], t2[1], t2[2], t2[3], S, H - 0.02, 2 * H), M.coverDark);
  const topY = 2 * H;
  const top = { x0: t2[0] + S, x1: t2[1] - S, z0: t2[2] + S, z1: t2[3] - S };
  const f = L.face;

  // Frente de trabajo: lecho de basura en la cima y sobre el talud sur de T2 (mira a la cámara).
  b.add(rbox(f.maxX - f.minX, 0.12, top.z1 - top.z0 - 0.4, 0.03), M.garbageBed, T((f.minX + f.maxX) / 2, topY + 0.04, (top.z0 + top.z1) / 2));
  const slopeLen = Math.hypot(S, H), slopeAng = Math.atan2(H, S);
  b.add(new THREE.PlaneGeometry(f.maxX - f.minX, slopeLen), M.garbageBed,
    T((f.minX + f.maxX) / 2, H * 1.5 + 0.03, t2[3] - S / 2 + 0.03, -Math.PI / 2 + slopeAng, 0, 0));

  // Berma: canaleta de concreto al pie del talud de T2 (lado sur y este)
  b.add(rbox(t2[1] - t2[0], 0.14, 0.42, 0.03), M.concrete, T((t2[0] + t2[1]) / 2, H + 0.05, t2[3] + 0.45));
  b.add(rbox(0.42, 0.14, t2[3] - t2[2], 0.03), M.concrete, T(t2[1] + 0.45, H + 0.05, (t2[2] + t2[3]) / 2));
  // Bajante en el talud de T1 (esquina SE) hacia el canal perimetral
  b.add(rbox(0.5, 0.12, Math.hypot(S, H) + 0.2, 0.03), M.concrete, T(t1[1] - 1.6, H / 2 + 0.06, t1[3] - S / 2, slopeAng - Math.PI / 2 + Math.PI / 2 - 0.0, 0, 0));
  // Anclaje de geomembrana (franja negra) al pie de T1
  for (const [x, z, w, l] of [
    [(t1[0] + t1[1]) / 2, t1[3] + 0.25, t1[1] - t1[0] + 1, 0.5], [(t1[0] + t1[1]) / 2, t1[2] - 0.25, t1[1] - t1[0] + 1, 0.5],
    [t1[1] + 0.25, (t1[2] + t1[3]) / 2, 0.5, t1[3] - t1[2]], [t1[0] - 0.25, (t1[2] + t1[3]) / 2, 0.5, t1[3] - t1[2]],
  ] as const) b.add(rbox(w, 0.05, l, 0.01), M.liner, T(x, 0.0, z));

  // Chimeneas de venteo de biogás (zona clausurada, oeste de la cima)
  const vents: [number, number][] = [[top.x0 + 2.0, top.z0 + 1.6], [top.x0 + 5.2, top.z1 - 1.4], [top.x0 + 8.0, top.z0 + 2.6], [top.x0 + 1.8, top.z1 - 1.2], [f.minX - 2.2, top.z0 + 1.0]];
  for (const [x, z] of vents) {
    b.add(cyl(0.45, 0.35, 10), M.gravel, T(x, topY + 0.17, z));
    b.add(cyl(0.09, 1.7, 10), M.steel, T(x, topY + 0.85, z));
    b.add(rbox(0.5, 0.08, 0.14, 0.02), M.steel, T(x, topY + 1.72, z));
  }

  // ——— Canal perimetral de lixiviado (concreto en U) ———
  const D = DITCH, w = D.w;
  const ditchSegs: { a: [number, number]; b: [number, number]; dir: [number, number] }[] = [
    { a: [L.minX - 0.6, D.z], b: [D.x, D.z], dir: [1, 0] },                       // pie sur → este
    { a: [D.x, L.minZ - 0.6], b: [D.x, (POND.minZ + POND.maxZ) / 2], dir: [0, 1] },  // pie este (norte → laguna)
    { a: [D.x, D.z], b: [D.x, (POND.minZ + POND.maxZ) / 2], dir: [0, -1] },         // esquina SE → laguna
    { a: [D.x, (POND.minZ + POND.maxZ) / 2], b: [POND.minX + 0.2, (POND.minZ + POND.maxZ) / 2], dir: [1, 0] }, // entrada a la laguna
  ];
  const waterMeshes: THREE.Mesh[] = [];
  for (const s of ditchSegs) {
    const dx = s.b[0] - s.a[0], dz = s.b[1] - s.a[1], len = Math.hypot(dx, dz) + w;
    const cx = (s.a[0] + s.b[0]) / 2, cz = (s.a[1] + s.b[1]) / 2;
    const alongX = Math.abs(dx) > Math.abs(dz);
    const [sx, sz] = alongX ? [len, w] : [w, len];
    b.add(rbox(sx, 0.06, sz, 0.01), M.concrete, T(cx, 0.0, cz));
    for (const sgn of [-1, 1]) {
      const ox = alongX ? 0 : sgn * (w / 2 - 0.05), oz = alongX ? sgn * (w / 2 - 0.05) : 0;
      b.add(rbox(alongX ? len : 0.1, 0.3, alongX ? 0.1 : len, 0.02), M.concrete, T(cx + ox, 0.12, cz + oz));
    }
    const water = new THREE.Mesh(new THREE.PlaneGeometry(alongX ? len - 0.1 : w - 0.2, alongX ? w - 0.2 : len - 0.1).rotateX(-Math.PI / 2),
      flowingWater(0xc98b3c, s.dir, uTime, false));
    water.position.set(cx, 0.15, cz);
    water.receiveShadow = true;
    waterMeshes.push(water);
  }

  // ——— Laguna de lixiviados con geomembrana, cerco y bombeo a la planta ———
  const P = POND;
  const pcx = (P.minX + P.maxX) / 2, pcz = (P.minZ + P.maxZ) / 2, pw = P.maxX - P.minX, pl = P.maxZ - P.minZ;
  const berm = 0.75, bh = 0.6;
  for (const [x, z, sx, sz] of [
    [pcx, P.minZ - berm / 2 + 0.3, pw + 2 * berm - 0.6, berm], [pcx, P.maxZ + berm / 2 - 0.3, pw + 2 * berm - 0.6, berm],
    [P.maxX + berm / 2 - 0.3, pcz, berm, pl],
    // Berma oeste partida: paso del canal de llegada
    [P.minX - berm / 2 + 0.3, (P.minZ + pcz - 0.55) / 2, berm, pcz - 0.55 - P.minZ], [P.minX - berm / 2 + 0.3, (P.maxZ + pcz + 0.55) / 2, berm, P.maxZ - pcz - 0.55],
  ] as const) {
    b.add(rbox(sx, bh, sz, 0.12), M.soil, T(x, bh / 2 - 0.02, z));
  }
  b.add(rbox(pw - 0.5, 0.06, pl - 0.5, 0.02), M.liner, T(pcx, 0.02, pcz));
  for (const [x, z, sx, sz] of [
    [pcx, P.minZ + 0.32, pw - 0.6, 0.06], [pcx, P.maxZ - 0.32, pw - 0.6, 0.06], [P.maxX - 0.32, pcz, 0.06, pl - 0.6],
    [P.minX + 0.32, (P.minZ + 0.3 + pcz - 0.55) / 2, 0.06, pcz - 0.55 - P.minZ - 0.3], [P.minX + 0.32, (P.maxZ - 0.3 + pcz + 0.55) / 2, 0.06, P.maxZ - 0.3 - pcz - 0.55],
  ] as const) b.add(rbox(sx, bh, sz, 0.02), M.liner, T(x, bh / 2, z));
  const pond = new THREE.Mesh(new THREE.PlaneGeometry(pw - 0.7, pl - 0.7).rotateX(-Math.PI / 2), flowingWater(0xb57a35, [1, 0], uTime, true));
  pond.position.set(pcx, 0.42, pcz);
  pond.receiveShadow = true;
  waterMeshes.push(pond);
  // Cerco perimetral
  const fx0 = P.minX - berm - 0.3, fx1 = P.maxX + berm + 0.3, fz0 = P.minZ - berm - 0.3, fz1 = P.maxZ + berm + 0.3;
  const fenceRun = (a: THREE.Vector3, c: THREE.Vector3) => {
    const n = Math.max(1, Math.round(a.distanceTo(c) / 2.2));
    for (let k = 0; k <= n; k++) { const p = a.clone().lerp(c, k / n); b.add(rbox(0.07, 1.4, 0.07, 0.01), M.fence, T(p.x, 0.7, p.z)); }
    for (const y of [0.6, 1.3]) b.rod(new THREE.Vector3(a.x, y, a.z), new THREE.Vector3(c.x, y, c.z), 0.025, M.fence, 6);
  };
  const c00 = new THREE.Vector3(fx0, 0, fz0), c10 = new THREE.Vector3(fx1, 0, fz0), c11 = new THREE.Vector3(fx1, 0, fz1), c01 = new THREE.Vector3(fx0, 0, fz1);
  fenceRun(c00, c10); fenceRun(c10, c11); fenceRun(c11, c01);
  fenceRun(c01, new THREE.Vector3(fx0, 0, pcz + 0.6)); fenceRun(new THREE.Vector3(fx0, 0, pcz - 0.6), c00); // paso del canal
  // Bomba de lixiviado y tubería a la cámara de llegada
  const px = P.maxX + 1.4, py = 0.55;
  b.add(rbox(1.0, 0.18, 0.8, 0.03), M.concrete, T(px + 0.7, 0.09, pcz));
  b.add(cyl(0.2, 0.6, 16), M.steel, T(px + 0.5, 0.45, pcz, 0, 0, Math.PI / 2));
  b.add(cyl(0.16, 0.42, 16), MAT.steelBlue, T(px + 1.0, 0.45, pcz, 0, 0, Math.PI / 2));
  const inX = INLET_POINT[0], inZ = INLET_POINT[1];
  b.rod(new THREE.Vector3(P.maxX - 0.6, py, pcz), new THREE.Vector3(px + 0.2, py, pcz), 0.09, M.pipe, 12);
  b.rod(new THREE.Vector3(px + 1.2, py, pcz), new THREE.Vector3(inX - 0.3, py, pcz), 0.09, M.pipe, 12);
  if (Math.abs(pcz - inZ) > 0.05) b.rod(new THREE.Vector3(inX - 0.3, py, pcz), new THREE.Vector3(inX - 0.3, py, inZ), 0.09, M.pipe, 12);
  b.rod(new THREE.Vector3(inX - 0.3, py, inZ), new THREE.Vector3(inX - 0.3, 0.2, inZ), 0.09, M.pipe, 12);
  for (const x of [px + 2.4, inX - 0.9]) b.add(rbox(0.12, py - 0.05, 0.3, 0.02), M.concrete, T(x, (py - 0.05) / 2, pcz));

  b.build(group, true, true);
  for (const m of waterMeshes) group.add(m);

  // ——— Basura (instancias deterministas) ———
  const bagCols = [0x3a4256, 0x5b7cf0, 0x2fb07a, 0xf3f4f8, 0x4f8fe0, 0xb9c0d0, 0xf2c14a, 0xf3f4f8];
  const debCols = [0xd6b07a, 0xb98a5a, 0xe9675a, 0xffffff, 0x3fc0b0, 0xd6b07a, 0xc9ccd8];
  const NB = 900, ND = 650;
  const bags = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), std(0xffffff, 0.6), NB);
  const debris = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), std(0xffffff, 0.8), ND);
  const m4 = new THREE.Matrix4(), col = new THREE.Color();
  // Superficie del frente: cima (y = topY) o talud sur de T2 (y lineal con z).
  const faceY = (z: number) => z <= top.z1 ? topY : topY - (z - top.z1) / S * H;
  const placeOn = (i: number, salt: number): [number, number, number] => {
    const onSlope = hash01(i, salt + 9) < 0.42;
    const x = f.minX + 0.3 + (f.maxX - f.minX - 0.6) * hash01(i, salt + 1);
    const z = onSlope ? top.z1 + S * Math.pow(hash01(i, salt + 2), 0.8) : top.z0 + 0.4 + (top.z1 - top.z0 - 0.4) * hash01(i, salt + 2);
    return [x, faceY(z), z];
  };
  for (let i = 0; i < NB; i++) {
    const [x, y, z] = placeOn(i, 10);
    const s = 0.16 + 0.24 * hash01(i, 13);
    m4.compose(new THREE.Vector3(x, y + s * 0.55, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(hash01(i, 14) * 3, hash01(i, 15) * 6.28, 0)),
      new THREE.Vector3(s * 1.1, s * 0.8, s));
    bags.setMatrixAt(i, m4);
    bags.setColorAt(i, col.setHex(bagCols[Math.floor(hash01(i, 16) * bagCols.length)]));
  }
  for (let i = 0; i < ND; i++) {
    const [x, y, z] = placeOn(i, 30);
    const sx = 0.12 + 0.4 * hash01(i, 33), sy = 0.05 + 0.18 * hash01(i, 34), sz = 0.1 + 0.32 * hash01(i, 35);
    m4.compose(new THREE.Vector3(x, y + sy * 0.4, z), new THREE.Quaternion().setFromEuler(new THREE.Euler((hash01(i, 36) - 0.5) * 0.8, hash01(i, 37) * 6.28, (hash01(i, 38) - 0.5) * 0.8)),
      new THREE.Vector3(sx, sy, sz));
    debris.setMatrixAt(i, m4);
    debris.setColorAt(i, col.setHex(debCols[Math.floor(hash01(i, 39) * debCols.length)]));
  }
  for (const im of [bags, debris]) { im.castShadow = true; im.receiveShadow = true; im.instanceMatrix.needsUpdate = true; if (im.instanceColor) im.instanceColor.needsUpdate = true; group.add(im); }

  // ——— Topadora en el frente (va y viene empujando basura hacia el talud) ———
  const dozer = new THREE.Group();
  {
    const d = new Batcher();
    d.add(rbox(2.0, 0.75, 1.5, 0.08), M.yellow, T(0, 0.75, 0));
    d.add(rbox(0.95, 0.85, 1.15, 0.06), M.yellow, T(-0.45, 1.5, 0));
    d.add(rbox(0.8, 0.55, 1.18, 0.03), M.glass, T(-0.45, 1.55, 0));
    for (const z of [-0.72, 0.72]) d.add(rbox(2.3, 0.5, 0.36, 0.12), M.dark, T(0, 0.27, z));
    d.add(rbox(0.22, 0.85, 2.0, 0.04), M.yellow, T(1.45, 0.48, 0));
    for (const z of [-0.6, 0.6]) d.rod(new THREE.Vector3(0.8, 0.7, z), new THREE.Vector3(1.38, 0.45, z), 0.05, M.dark, 6);
    d.add(cyl(0.06, 0.5, 8), M.dark, T(0.2, 1.35, 0.4));
    d.build(dozer, true, true);
  }
  dozer.rotation.y = -Math.PI / 2; // hoja hacia +z (empuja hacia el talud sur, hacia la cámara)
  group.add(dozer);

  // ——— Camión recolector descargando en el frente ———
  const truck = new THREE.Group();
  const body = new THREE.Group();
  {
    const d = new Batcher();
    for (const x of [-1.4, 0.9, 1.9]) for (const z of [-0.95, 0.95]) d.add(cyl(0.42, 0.3, 14), M.dark, T(x, 0.42, z, Math.PI / 2, 0, 0));
    d.add(rbox(5.0, 0.3, 1.9, 0.04), M.dark, T(0.3, 0.75, 0));
    d.add(rbox(1.5, 1.6, 2.1, 0.12), M.truckCab, T(-2.0, 1.55, 0));
    d.add(rbox(0.05, 0.7, 1.8, 0.02), M.glass, T(-2.76, 1.85, 0));
    d.build(truck, true, true);
    const e = new Batcher();
    e.add(rbox(3.6, 1.9, 2.2, 0.15), M.truckBody, T(-1.8, 0.95, 0));
    e.add(rbox(0.25, 1.8, 2.1, 0.06), M.dark, T(-0.1, 0.95, 0));
    e.build(body, true, true);
  }
  // bisagra trasera (x = +3 en coordenadas del camión)
  body.position.set(3.0, 0.9, 0);
  truck.add(body);
  truck.position.set(f.minX + 2.6, topY + 0.1, top.z0 + 1.4);
  truck.rotation.y = 0.15;
  group.add(truck);
  // Montón recién descargado detrás del camión
  {
    const d = new Batcher();
    d.add(new THREE.IcosahedronGeometry(1, 1).scale(1.3, 0.55, 1.1), M.garbageBed, T(f.minX + 6.6, topY + 0.1, top.z0 + 1.9));
    d.build(group, true, true);
  }

  // ——— Nubes de lluvia y aves sobre el vertedero ———
  const clouds = new THREE.Group();
  for (let i = 0; i < 8; i++) {
    const c = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 3), M.cloud);
    c.scale.set(5 + 3 * hash01(i, 51), 1.2 + 0.6 * hash01(i, 52), 3.5 + 2 * hash01(i, 53));
    c.position.set(L.minX + 2 + (L.maxX - L.minX + 6) * (i / 7) + 2 * hash01(i, 54), 19 + 2.5 * hash01(i, 55), (L.minZ + L.maxZ) / 2 - 4 + 8 * hash01(i, 56));
    c.renderOrder = 6;
    clouds.add(c);
  }
  group.add(clouds);
  const birds: THREE.Mesh[] = [];
  const birdGeo = new THREE.BufferGeometry();
  birdGeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, -0.35, 0.08, 0.32, 0, 0, 0.12, 0, 0, 0, 0, 0, 0.12, 0.35, 0.08, 0.32], 3));
  for (let i = 0; i < 7; i++) { const m = new THREE.Mesh(birdGeo, M.bird); birds.push(m); group.add(m); }

  const rainBox = { x0: L.minX - 4, x1: POND.maxX + 1.5, z0: L.minZ - 3, z1: D.z + 0.5, top: 16 };
  const rain = createRain(uTime, rainBox, 3400);
  group.add(rain);

  const anchors = {
    landfill: new THREE.Vector3((f.minX + f.maxX) / 2, topY + 1.4, (top.z0 + top.z1) / 2),
    pond: new THREE.Vector3(pcx, 1.0, pcz),
  };
  const framePoints: [number, number, number][] = [
    [L.minX, 0, L.maxZ + 1], [L.maxX, 0, L.maxZ + 1], [L.minX, topY, L.minZ + 6], [L.maxX, topY, L.minZ + 6],
    [P.maxX + 1, 0, P.maxZ + 1], [P.maxX + 1, 0, P.minZ - 1], [(f.minX + f.maxX) / 2, topY + 3, top.z0],
  ];

  return {
    group, anchors, framePoints,
    setRain(on) { rain.visible = on; clouds.visible = on; },
    update(t) {
      uTime.value = t;
      // Topadora: avance lento (empuje) y retroceso más rápido, ciclo de 9 s, siempre mirando al talud.
      const cyc = 9, k = ((t % cyc) + cyc) % cyc / cyc;
      const s = k < 0.62 ? k / 0.62 : 1 - (k - 0.62) / 0.38;
      const e = s * s * (3 - 2 * s);
      dozer.position.set(f.maxX - 2.4 - 0.6 * Math.sin(t * 0.21), topY + 0.08, top.z0 + 1.3 + (top.z1 - top.z0 - 1.6) * e);
      // Camión recolector: volteo cíclico (sube, vacía, baja) con 14 s de periodo.
      const kc = ((t + 3) % 14) / 14;
      const tip = kc < 0.3 ? kc / 0.3 : kc < 0.55 ? 1 : kc < 0.8 ? 1 - (kc - 0.55) / 0.25 : 0;
      body.rotation.z = -0.75 * tip * tip * (3 - 2 * tip);
      // Aves (zopilotes) planeando en círculos amplios
      birds.forEach((m, i) => {
        const r = 4 + 3 * hash01(i, 61), w = 0.35 + 0.15 * hash01(i, 62), a = t * w + hash01(i, 63) * 6.28;
        const cx = (f.minX + f.maxX) / 2 + (hash01(i, 64) - 0.5) * 8, cz = (top.z0 + top.z1) / 2 + (hash01(i, 65) - 0.5) * 5;
        m.position.set(cx + r * Math.cos(a), topY + 6 + 2 * hash01(i, 66) + 0.4 * Math.sin(t * 1.3 + i), cz + r * Math.sin(a));
        m.rotation.set(0, -a, 0.25 * Math.sin(t * 6 + i * 1.7));
      });
    },
  };
}
