/**
 * Fase 5 · Humedal receptor del efluente tratado — SUPUESTO VISUAL (sin planos). Cierra el ciclo:
 * lluvia → vertedero → lixiviado → planta → agua devuelta a un humedal con vida. Animación función pura de t.
 */
import * as THREE from 'three';
import { WETLAND } from './layout';
import { flowingWater } from './landfill';
import { Batcher, cyl, hash01, rbox, T } from './units/common';

const std = (color: number, roughness = 0.85, metalness = 0, extra: THREE.MeshStandardMaterialParameters = {}) =>
  new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra });

const M = {
  meadow: std(0xb7dca2),
  sand: std(0xe9dcbc),
  stone: std(0xd3d7e2),
  wood: std(0xc99a62, 0.8),
  trunk: std(0x9a7452),
  leafA: std(0x7cc47a), leafB: std(0x5fb36e), leafC: std(0x9fd18a),
  reed: std(0x5ea85a), reedHead: std(0x9a7452),
  pad: std(0x58b26a), flower: std(0xf3a6c8),
  white: std(0xf7f8fb, 0.6), beak: std(0xf2b632, 0.5), dark: std(0x3a4256, 0.6),
  duck: std(0x8a6a4a, 0.7), duckHead: std(0x2f8f6a, 0.5),
};

export interface Wetland {
  group: THREE.Group;
  anchor: THREE.Vector3;
  framePoints: [number, number, number][];
  update(t: number): void;
}

/** Disco elíptico plano (y hacia arriba). */
const ellipse = (rx: number, rz: number, seg = 64) => new THREE.CircleGeometry(1, seg).rotateX(-Math.PI / 2).scale(rx, 1, rz);

export function buildWetland(outfall: THREE.Vector3): Wetland {
  const group = new THREE.Group();
  group.name = 'wetland';
  const W = WETLAND, uTime = { value: 0 };
  const b = new Batcher();
  // Pradera, orilla de arena y agua
  b.add(ellipse(W.rx + 6, W.rz + 4.5), M.meadow, T(W.cx, -0.015, W.cz + 0.6));
  b.add(ellipse(W.rx + 1.0, W.rz + 0.9), M.sand, T(W.cx, -0.005, W.cz));
  const water = new THREE.Mesh(ellipse(W.rx, W.rz), flowingWater(0x46c9c0, [0, 1], uTime, true));
  water.position.set(W.cx, 0.02, W.cz);
  water.receiveShadow = true;
  group.add(water);
  // Canal de piedra desde el vertido hasta la orilla norte del humedal
  const z0 = outfall.z - 0.2, z1 = W.cz - W.rz + 0.6, cx = outfall.x;
  const len = z1 - z0;
  b.add(rbox(1.9, 0.08, len, 0.02), M.stone, T(cx, -0.02, (z0 + z1) / 2));
  for (const s of [-1, 1]) b.add(rbox(0.25, 0.28, len, 0.06), M.stone, T(cx + s * 0.9, 0.1, (z0 + z1) / 2));
  const ch = new THREE.Mesh(new THREE.PlaneGeometry(1.5, len).rotateX(-Math.PI / 2), flowingWater(0x46c9c0, [0, 1], uTime, false));
  ch.position.set(cx, 0.06, (z0 + z1) / 2);
  group.add(ch);
  // Piedras de la orilla
  for (let i = 0; i < 34; i++) {
    const a = (i / 34) * Math.PI * 2 + hash01(i, 3) * 0.1;
    const r = 1.02 + 0.05 * hash01(i, 4);
    const s = 0.18 + 0.2 * hash01(i, 5);
    b.add(new THREE.IcosahedronGeometry(1, 0).scale(s * 1.3, s * 0.7, s), M.stone, T(W.cx + Math.cos(a) * W.rx * r, 0.05, W.cz + Math.sin(a) * W.rz * r, 0, a, 0));
  }
  // Pasarela de madera con mirador (lado este)
  const px = W.cx + W.rx * 0.55, pz0 = W.cz + W.rz + 1.2, pz1 = W.cz + 0.8;
  b.add(rbox(1.3, 0.1, pz0 - pz1, 0.02), M.wood, T(px, 0.32, (pz0 + pz1) / 2));
  for (let z = pz1; z <= pz0 + 1e-6; z += 1.2) for (const s of [-1, 1]) {
    b.add(cyl(0.05, 0.6, 8), M.wood, T(px + s * 0.6, 0.1, z));
    b.add(cyl(0.035, 0.75, 8), M.wood, T(px + s * 0.6, 0.72, z));
  }
  for (const s of [-1, 1]) b.add(rbox(0.06, 0.06, pz0 - pz1, 0.01), M.wood, T(px + s * 0.6, 1.08, (pz0 + pz1) / 2));
  b.add(rbox(2.4, 0.1, 1.8, 0.02), M.wood, T(px, 0.32, pz1 - 0.6));
  // Banca y letrero
  b.add(rbox(1.6, 0.08, 0.45, 0.02), M.wood, T(W.cx - 4, 0.45, W.cz + W.rz + 2.2));
  for (const s of [-1, 1]) b.add(rbox(0.08, 0.45, 0.4, 0.02), M.dark, T(W.cx - 4 + s * 0.7, 0.22, W.cz + W.rz + 2.2));
  b.add(cyl(0.05, 1.4, 8), M.wood, T(cx + 1.6, 0.7, z1 - 0.6));
  b.add(rbox(1.1, 0.6, 0.06, 0.03), M.white, T(cx + 1.6, 1.45, z1 - 0.6));
  // Juncos en matas alrededor de la orilla
  const reedGeo = new THREE.CylinderGeometry(0.018, 0.025, 1, 5);
  const NR = 420;
  const reeds = new THREE.InstancedMesh(reedGeo, M.reed, NR);
  const heads = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.045, 0.045, 0.22, 6), M.reedHead, NR);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  for (let i = 0; i < NR; i++) {
    const clump = Math.floor(hash01(i, 11) * 14);
    const a = (clump / 14) * Math.PI * 2 + 0.35 + (hash01(i, 12) - 0.5) * 0.28;
    const r = 0.86 + 0.16 * hash01(i, 13);
    const x = W.cx + Math.cos(a) * W.rx * r, z = W.cz + Math.sin(a) * W.rz * r;
    const h = 0.9 + 0.8 * hash01(i, 14);
    q.setFromEuler(e.set((hash01(i, 15) - 0.5) * 0.25, 0, (hash01(i, 16) - 0.5) * 0.25));
    m4.compose(new THREE.Vector3(x, h / 2, z), q, new THREE.Vector3(1, h, 1));
    reeds.setMatrixAt(i, m4);
    m4.compose(new THREE.Vector3(x, h + 0.05, z), q, new THREE.Vector3(1, hash01(i, 17) < 0.5 ? 1 : 0.001, 1));
    heads.setMatrixAt(i, m4);
  }
  // Nenúfares y flores
  const NP = 30;
  const pads = new THREE.InstancedMesh(new THREE.CircleGeometry(0.32, 14, 0.4, Math.PI * 2 - 0.4).rotateX(-Math.PI / 2), M.pad, NP);
  const flowers = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.11, 0), M.flower, NP);
  for (let i = 0; i < NP; i++) {
    const a = hash01(i, 21) * Math.PI * 2, r = 0.25 + 0.55 * Math.sqrt(hash01(i, 22));
    const x = W.cx - 2 + Math.cos(a) * W.rx * 0.6 * r, z = W.cz + Math.sin(a) * W.rz * 0.7 * r;
    const s = 0.8 + 0.6 * hash01(i, 23);
    m4.compose(new THREE.Vector3(x, 0.035, z), q.setFromEuler(e.set(0, hash01(i, 24) * 6.28, 0)), new THREE.Vector3(s, 1, s));
    pads.setMatrixAt(i, m4);
    m4.compose(new THREE.Vector3(x + 0.05, 0.08, z), q, new THREE.Vector3(hash01(i, 25) < 0.4 ? 1 : 0.001, 1, 1));
    flowers.setMatrixAt(i, m4);
  }
  // Árboles de copa redonda alrededor
  const trees: [number, number, number][] = [];
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2 + hash01(i, 31) * 0.2;
    if (Math.sin(a) < -0.55 && Math.abs(Math.cos(a)) < 0.45) continue; // deja libre el canal (norte)
    const r = 1.35 + 0.25 * hash01(i, 32);
    trees.push([W.cx + Math.cos(a) * (W.rx + 2.5) * r * 0.85, W.cz + Math.sin(a) * (W.rz + 2) * r * 0.9, 0.8 + 0.5 * hash01(i, 33)]);
  }
  trees.forEach(([x, z, s], i) => {
    b.add(cyl(0.12 * s, 1.4 * s, 8), M.trunk, T(x, 0.7 * s, z));
    const leaf = [M.leafA, M.leafB, M.leafC][i % 3];
    b.add(new THREE.IcosahedronGeometry(1, 1).scale(1.1 * s, 1.0 * s, 1.1 * s), leaf, T(x, 1.9 * s, z));
    b.add(new THREE.IcosahedronGeometry(1, 1).scale(0.75 * s, 0.7 * s, 0.75 * s), leaf, T(x + 0.45 * s, 2.5 * s, z - 0.2 * s));
  });
  // Garzas blancas (quietas, picoteando con un vaivén leve)
  const herons: THREE.Group[] = [];
  const heronAt: [number, number, number][] = [[W.cx - W.rx * 0.7, W.cz - 0.6, 0.6], [W.cx + 2.5, W.cz + W.rz * 0.75, -2.2], [W.cx - 3.5, W.cz + W.rz * 0.85, 2.6]];
  for (const [x, z, h] of heronAt) {
    const g = new THREE.Group();
    const hb = new Batcher();
    hb.add(new THREE.SphereGeometry(1, 12, 8).scale(0.32, 0.2, 0.18), M.white, T(0, 0.75, 0));
    for (const s of [-0.06, 0.06]) hb.add(cyl(0.012, 0.6, 5), M.beak, T(-0.02, 0.3, s));
    hb.build(g, true, true);
    const neck = new THREE.Group();
    neck.position.set(0.22, 0.82, 0);
    const nb = new Batcher();
    nb.add(cyl(0.035, 0.42, 6), M.white, T(0.05, 0.2, 0, 0, 0, -0.25));
    nb.add(new THREE.SphereGeometry(0.075, 10, 8), M.white, T(0.1, 0.42, 0));
    nb.add(new THREE.ConeGeometry(0.03, 0.22, 6).rotateZ(-Math.PI / 2), M.beak, T(0.25, 0.42, 0));
    nb.build(neck, true, true);
    g.add(neck);
    g.position.set(x, 0, z);
    g.rotation.y = h;
    group.add(g);
    herons.push(g);
  }
  // Patos que nadan en círculos lentos
  const ducks: THREE.Group[] = [];
  for (let i = 0; i < 4; i++) {
    const g = new THREE.Group();
    const db = new Batcher();
    db.add(new THREE.SphereGeometry(1, 10, 8).scale(0.24, 0.12, 0.15), M.duck, T(0, 0.08, 0));
    db.add(new THREE.SphereGeometry(0.08, 10, 8), M.duckHead, T(0.18, 0.2, 0));
    db.add(new THREE.ConeGeometry(0.03, 0.09, 6).rotateZ(-Math.PI / 2), M.beak, T(0.28, 0.19, 0));
    db.build(g, true, true);
    group.add(g);
    ducks.push(g);
  }
  // Aves en vuelo sobre el humedal
  const birdGeo = new THREE.BufferGeometry();
  birdGeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, -0.3, 0.07, 0.28, 0, 0, 0.1, 0, 0, 0, 0, 0, 0.1, 0.3, 0.07, 0.28], 3));
  const birdMat = new THREE.MeshBasicMaterial({ color: 0x4a5578, side: THREE.DoubleSide });
  const birds = Array.from({ length: 5 }, () => { const m = new THREE.Mesh(birdGeo, birdMat); group.add(m); return m; });

  b.build(group, true, true);
  for (const im of [reeds, heads, pads, flowers]) { im.castShadow = true; im.receiveShadow = true; im.instanceMatrix.needsUpdate = true; group.add(im); }

  return {
    group,
    anchor: new THREE.Vector3(W.cx - 1.5, 1.6, W.cz - 0.5),
    framePoints: [
      [W.cx - W.rx - 2, 0, W.cz], [W.cx + W.rx + 2, 0, W.cz], [W.cx, 0, W.cz - W.rz - 1], [W.cx, 0, W.cz + W.rz + 2.5],
      [W.cx - W.rx, 3, W.cz], [W.cx + W.rx, 3, W.cz],
    ],
    update(t) {
      uTime.value = t;
      herons.forEach((g, i) => {
        const neck = g.children[g.children.length - 1];
        const k = Math.max(0, Math.sin(t * 0.9 + i * 2.1));
        neck.rotation.z = -0.9 * k * k * k;
      });
      ducks.forEach((g, i) => {
        const w = 0.18 + 0.05 * i, a = t * w + i * 1.7;
        const rx = W.rx * (0.35 + 0.1 * i), rz = W.rz * (0.3 + 0.08 * i);
        g.position.set(W.cx + 1 + Math.cos(a) * rx, 0.02 + 0.01 * Math.sin(t * 3 + i), W.cz + Math.sin(a) * rz);
        g.rotation.y = -Math.atan2(Math.cos(a) * rz, -Math.sin(a) * rx);
      });
      birds.forEach((m, i) => {
        const a = t * (0.3 + 0.07 * i) + i * 1.3, r = 5 + 2 * hash01(i, 41);
        m.position.set(W.cx + r * Math.cos(a), 6 + i * 0.5 + 0.3 * Math.sin(t * 1.5 + i), W.cz + 0.6 * r * Math.sin(a));
        m.rotation.set(0, -a, 0.25 * Math.sin(t * 6 + i));
      });
    },
  };
}
