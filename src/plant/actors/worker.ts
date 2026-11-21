/**
 * Persona de planta (supuesto visual, escala «juguete premium», ~1,75 m). Una sola malla con piel rígida
 * (SkinnedMesh, colores por vértice): 1 llamada de dibujo por persona. Huesos: base → cadera → columna →
 * cabeza / hombros → codos → manos; cadera → muslos → rodillas. Herramientas (pala, rastrillo, tableta,
 * frasco de muestra, transpaleta) son huesos que se muestran con escala 1 solo en su acción.
 * Animación pura: setAction(action, phase, gait) fija rotaciones de huesos; sin estado temporal.
 * Rumbo: 0 = mirando +z; positivo = antihorario visto desde arriba (heading = atan2(dx, dz)).
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { WorkerAction, WorkerRig } from '../types';
import { rbox } from '../units/common';

export interface WorkerStyle {
  hat: number; vest: number; shirt: number; trousers: number; skin: number; boots?: number; glove?: number;
}

/** 8 estilos deterministas (casco blanco/amarillo, chaleco naranja/lima apagados). */
export const WORKER_STYLES: WorkerStyle[] = [
  { hat: 0xe9e6dc, vest: 0xd0743a, shirt: 0x46566a, trousers: 0x2c3440, skin: 0xc59b7a },
  { hat: 0xd9b53e, vest: 0xb6c54a, shirt: 0x5b6571, trousers: 0x2f3236, skin: 0x8d6248 },
  { hat: 0xe9e6dc, vest: 0xb6c54a, shirt: 0x3e4c5e, trousers: 0x30363d, skin: 0xa77b5c },
  { hat: 0xd9b53e, vest: 0xd0743a, shirt: 0x6a6f74, trousers: 0x262b31, skin: 0xd2ad8c },
  { hat: 0xe9e6dc, vest: 0xc98a3c, shirt: 0x4b5b52, trousers: 0x2b3038, skin: 0x7a553f },
  { hat: 0xd9b53e, vest: 0xa9bb52, shirt: 0x50606e, trousers: 0x353a40, skin: 0xb98a68 },
  { hat: 0xe9e6dc, vest: 0xd0743a, shirt: 0x5d5a56, trousers: 0x23282e, skin: 0x9a6e52 },
  { hat: 0xd9b53e, vest: 0xb6c54a, shirt: 0x445566, trousers: 0x2e3339, skin: 0xc8a080 },
];

const B = {
  base: 0, hips: 1, spine: 2, head: 3, shL: 4, elL: 5, shR: 6, elR: 7, hipL: 8, knL: 9, hipR: 10, knR: 11,
  shovel: 12, rake: 13, tablet: 14, bottle: 15, jack: 16,
} as const;

/** Posiciones de huesos en pose de reposo (mundo local de la persona). */
const J = {
  hips: [0, 0.95, 0], spine: [0, 1.02, 0], head: [0, 1.52, 0],
  shL: [0.21, 1.45, 0], elL: [0.23, 1.17, 0], shR: [-0.21, 1.45, 0], elR: [-0.23, 1.17, 0],
  hipL: [0.095, 0.93, 0], knL: [0.095, 0.5, 0], hipR: [-0.095, 0.93, 0], knR: [-0.095, 0.5, 0],
  handL: [0.23, 0.9, 0.02], handR: [-0.23, 0.9, 0.02],
} as const;

let workerMat: THREE.MeshStandardMaterial | null = null;
function material(): THREE.MeshStandardMaterial {
  if (!workerMat) workerMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.68, metalness: 0.02 });
  return workerMat;
}

const geoCache = new Map<string, THREE.BufferGeometry>();

function capsule(a: readonly number[], b: readonly number[], r: number): THREE.BufferGeometry {
  const A = new THREE.Vector3(...a), Bv = new THREE.Vector3(...b);
  const len = A.distanceTo(Bv);
  const g = new THREE.CapsuleGeometry(r, Math.max(0.001, len), 3, 10);
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), Bv.clone().sub(A).normalize());
  g.applyMatrix4(new THREE.Matrix4().compose(A.clone().add(Bv).multiplyScalar(0.5), q, new THREE.Vector3(1, 1, 1)));
  return g;
}

function buildGeometry(st: WorkerStyle): THREE.BufferGeometry {
  const key = JSON.stringify(st);
  const hit = geoCache.get(key);
  if (hit) return hit;
  const parts: THREE.BufferGeometry[] = [];
  const add = (g: THREE.BufferGeometry, color: number, bone: number) => {
    const ng = g.index ? g.toNonIndexed() : g;
    for (const k of Object.keys(ng.attributes)) if (k !== 'position' && k !== 'normal') ng.deleteAttribute(k);
    const n = ng.attributes.position.count;
    const c = new THREE.Color(color).convertSRGBToLinear();
    const col = new Float32Array(n * 3), si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
    for (let i = 0; i < n; i++) { col.set([c.r, c.g, c.b], i * 3); si[i * 4] = bone; sw[i * 4] = 1; }
    ng.setAttribute('color', new THREE.BufferAttribute(col, 3));
    ng.setAttribute('skinIndex', new THREE.BufferAttribute(si, 4));
    ng.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4));
    parts.push(ng);
  };
  const T = (x: number, y: number, z: number) => new THREE.Matrix4().makeTranslation(x, y, z);
  const boots = st.boots ?? 0x2a2622, glove = st.glove ?? 0x3a3a34;
  // Piernas
  for (const [s, hip, kn] of [[1, B.hipL, B.knL], [-1, B.hipR, B.knR]] as const) {
    const x = 0.095 * s;
    add(capsule([x, 0.9, 0], [x, 0.56, 0], 0.072), st.trousers, hip);
    add(capsule([x, 0.48, 0], [x, 0.14, 0], 0.058), st.trousers, kn);
    add(rbox(0.12, 0.1, 0.27, 0.035).applyMatrix4(T(x, 0.05, 0.04)), boots, kn);
  }
  // Pelvis y torso con chaleco y franjas reflectantes
  add(rbox(0.32, 0.17, 0.2, 0.06).applyMatrix4(T(0, 0.96, 0)), st.trousers, B.hips);
  add(rbox(0.34, 0.46, 0.21, 0.08).applyMatrix4(T(0, 1.26, 0)), st.shirt, B.spine);
  add(rbox(0.365, 0.38, 0.235, 0.08).applyMatrix4(T(0, 1.24, 0)), st.vest, B.spine);
  for (const y of [1.14, 1.29]) add(rbox(0.37, 0.032, 0.24, 0.012).applyMatrix4(T(0, y, 0)), 0xd8dcd6, B.spine);
  add(new THREE.CylinderGeometry(0.048, 0.052, 0.08, 10).applyMatrix4(T(0, 1.52, 0)), st.skin, B.head);
  // Cabeza, casco con ala y visera corta
  add(new THREE.SphereGeometry(0.102, 14, 10).applyMatrix4(T(0, 1.64, 0.005)), st.skin, B.head);
  add(new THREE.SphereGeometry(0.118, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2).applyMatrix4(T(0, 1.67, 0)), st.hat, B.head);
  add(new THREE.CylinderGeometry(0.135, 0.135, 0.014, 18).applyMatrix4(T(0, 1.672, 0.01)), st.hat, B.head);
  add(rbox(0.12, 0.012, 0.06, 0.004).applyMatrix4(T(0, 1.672, 0.14)), st.hat, B.head);
  // Brazos
  for (const [s, sh, el] of [[1, B.shL, B.elL], [-1, B.shR, B.elR]] as const) {
    const x = 0.22 * s;
    add(capsule([x, 1.43, 0], [x * 1.04, 1.2, 0], 0.05), st.vest, sh);
    add(capsule([x * 1.04, 1.15, 0], [x * 1.04, 0.95, 0.02], 0.042), st.shirt, el);
    add(new THREE.SphereGeometry(0.046, 10, 8).applyMatrix4(T(x * 1.04, 0.9, 0.02)), glove, el);
  }
  // Herramientas (cada una en su hueso; ocultas por escala 0)
  const hR = J.handR;
  add(new THREE.CylinderGeometry(0.016, 0.016, 1.15, 6).applyMatrix4(T(hR[0], hR[1] - 0.25, hR[2] + 0.02)), 0x8a6b45, B.shovel);
  add(rbox(0.22, 0.28, 0.02, 0.01).applyMatrix4(T(hR[0], hR[1] - 0.9, hR[2] + 0.05)), 0x5c6468, B.shovel);
  add(new THREE.CylinderGeometry(0.015, 0.015, 1.5, 6).applyMatrix4(T(hR[0], hR[1] - 0.4, hR[2] + 0.02)), 0x8a6b45, B.rake);
  add(rbox(0.45, 0.03, 0.03, 0.008).applyMatrix4(T(hR[0], hR[1] - 1.15, hR[2] + 0.02)), 0x4c555b, B.rake);
  for (let k = 0; k < 7; k++) add(rbox(0.012, 0.1, 0.012, 0.003).applyMatrix4(T(hR[0] - 0.2 + k * 0.066, hR[1] - 1.2, hR[2] + 0.02)), 0x4c555b, B.rake);
  const hL = J.handL;
  add(rbox(0.2, 0.28, 0.016, 0.012).applyMatrix4(T(hL[0], hL[1] + 0.02, hL[2] + 0.07)), 0x2b2f31, B.tablet);
  add(rbox(0.17, 0.23, 0.004, 0.004).applyMatrix4(T(hL[0], hL[1] + 0.02, hL[2] + 0.08)), 0x7fb1b0, B.tablet);
  add(new THREE.CylinderGeometry(0.034, 0.034, 0.15, 12).applyMatrix4(T(hR[0], hR[1] - 0.05, hR[2] + 0.04)), 0xe4e1d6, B.bottle);
  add(new THREE.CylinderGeometry(0.02, 0.02, 0.03, 10).applyMatrix4(T(hR[0], hR[1] + 0.035, hR[2] + 0.04)), 0x3f6a8a, B.bottle);
  // Transpaleta (delante, en el suelo): horquillas, cuerpo, rueda y timón
  for (const s of [-1, 1]) add(rbox(0.16, 0.06, 1.15, 0.015).applyMatrix4(T(s * 0.2, 0.06, 1.12)), 0xb4924f, B.jack);
  add(rbox(0.56, 0.32, 0.2, 0.03).applyMatrix4(T(0, 0.18, 0.48)), 0xb4924f, B.jack);
  add(new THREE.CylinderGeometry(0.07, 0.07, 0.08, 12).rotateZ(Math.PI / 2).applyMatrix4(T(0, 0.07, 0.42)), 0x2b2f31, B.jack);
  add(capsule([0, 0.3, 0.46], [0, 1.0, 0.3], 0.02), 0x2b2f31, B.jack);
  add(capsule([-0.15, 1.0, 0.3], [0.15, 1.0, 0.3], 0.022), 0x2b2f31, B.jack);
  const g = mergeGeometries(parts)!;
  g.computeBoundingSphere();
  geoCache.set(key, g);
  return g;
}

interface Bones { [k: string]: THREE.Bone }

class WorkerRigImpl implements WorkerRig {
  root = new THREE.Group();
  mesh: THREE.SkinnedMesh;
  bones: Bones = {};
  heading = 0;
  action: WorkerAction = 'idle';
  private visible = true;

  constructor(public id: string, style: WorkerStyle) {
    this.root.name = `worker:${id}`;
    const mk = (name: string, parent: THREE.Object3D | null, pos: readonly number[], parentPos: readonly number[] = [0, 0, 0]) => {
      const bn = new THREE.Bone();
      bn.name = name;
      bn.position.set(pos[0] - parentPos[0], pos[1] - parentPos[1], pos[2] - parentPos[2]);
      if (parent) parent.add(bn);
      this.bones[name] = bn;
      return bn;
    };
    const base = mk('base', null, [0, 0, 0]);
    const hips = mk('hips', base, J.hips);
    const spine = mk('spine', hips, J.spine, J.hips);
    mk('head', spine, J.head, J.spine);
    const shL = mk('shL', spine, J.shL, J.spine); mk('elL', shL, J.elL, J.shL);
    const shR = mk('shR', spine, J.shR, J.spine); const elR = mk('elR', shR, J.elR, J.shR);
    const hipL = mk('hipL', hips, J.hipL, J.hips); mk('knL', hipL, J.knL, J.hipL);
    const hipR = mk('hipR', hips, J.hipR, J.hips); mk('knR', hipR, J.knR, J.hipR);
    mk('shovel', elR, J.handR, J.elR);
    mk('rake', elR, J.handR, J.elR);
    mk('tablet', this.bones.elL, J.handL, J.elL);
    mk('bottle', elR, J.handR, J.elR);
    mk('jack', base, [0, 0, 0]);
    const order = ['base', 'hips', 'spine', 'head', 'shL', 'elL', 'shR', 'elR', 'hipL', 'knL', 'hipR', 'knR', 'shovel', 'rake', 'tablet', 'bottle', 'jack'];
    const list = order.map(n => this.bones[n]);
    this.mesh = new THREE.SkinnedMesh(buildGeometry(style), material());
    this.mesh.add(base);
    this.mesh.updateMatrixWorld(true);
    this.mesh.bind(new THREE.Skeleton(list));
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = false;
    this.mesh.frustumCulled = false;
    this.root.add(this.mesh);
    this.setAction('idle', 0, 0);
  }

  setPose(pos: THREE.Vector3, heading: number): void {
    this.root.position.copy(pos);
    this.root.rotation.set(0, heading, 0);
    this.heading = heading;
  }

  setVisible(on: boolean): void { this.visible = on; this.root.visible = on; }

  setAction(action: WorkerAction, phase: number, gait: number): void {
    this.action = action;
    const b = this.bones;
    for (const k of Object.keys(b)) { b[k].rotation.set(0, 0, 0); }
    b.hips.position.set(J.hips[0], J.hips[1], J.hips[2]);
    for (const k of ['shovel', 'rake', 'tablet', 'bottle', 'jack']) b[k].scale.setScalar(1e-4);
    const TAU = Math.PI * 2, ph = phase * TAU;
    const breathe = Math.sin(ph) * 0.015;
    // Marcha (también con transpaleta)
    const walking = action === 'walk' || action === 'carry';
    if (walking && gait !== 0) {
      const g = gait * TAU;
      const sw = Math.sin(g);
      const amp = action === 'carry' ? 0.38 : 0.5;
      b.hipL.rotation.x = -sw * amp; b.hipR.rotation.x = sw * amp;
      b.knL.rotation.x = Math.max(0, Math.sin(g + 1.3)) * 0.75;
      b.knR.rotation.x = Math.max(0, Math.sin(g + 1.3 + Math.PI)) * 0.75;
      b.hips.position.y = J.hips[1] - 0.018 + 0.018 * Math.abs(Math.cos(g));
      b.spine.rotation.y = sw * 0.06;
      if (action === 'walk') { b.shL.rotation.x = sw * 0.38; b.shR.rotation.x = -sw * 0.38; b.elL.rotation.x = -0.25; b.elR.rotation.x = -0.25; }
    }
    switch (action) {
      case 'idle':
        b.spine.rotation.x = 0.02 + breathe; b.shL.rotation.z = 0.06; b.shR.rotation.z = -0.06;
        b.head.rotation.y = 0.25 * Math.sin(ph * 0.5);
        break;
      case 'walk':
        b.spine.rotation.x = 0.05;
        break;
      case 'inspect': {
        b.tablet.scale.setScalar(1);
        b.shL.rotation.x = -0.75; b.elL.rotation.x = -1.0; b.shL.rotation.z = -0.15;
        const point = Math.max(0, Math.sin(ph)) ** 2;
        b.shR.rotation.x = -1.3 * point; b.shR.rotation.z = -0.15 * point; b.elR.rotation.x = -0.15 * point;
        b.head.rotation.y = 0.45 * Math.sin(ph); b.head.rotation.x = 0.12 - 0.2 * point;
        b.spine.rotation.x = 0.03 + breathe;
        break;
      }
      case 'shovel': {
        b.shovel.scale.setScalar(1);
        // 0..0.55 cavar (agacharse, empujar), 0.55..1 lanzar hacia arriba y a la izquierda
        const dig = phase < 0.55 ? Math.sin((phase / 0.55) * Math.PI) : 0;
        const thr = phase >= 0.55 ? Math.sin(((phase - 0.55) / 0.45) * Math.PI) : 0;
        b.spine.rotation.x = 0.25 + 0.45 * dig - 0.15 * thr;
        b.spine.rotation.y = 0.35 * thr;
        b.hips.position.y = J.hips[1] - 0.12 * dig;
        b.hipL.rotation.x = -0.35 * dig; b.hipR.rotation.x = -0.2 * dig;
        b.knL.rotation.x = 0.6 * dig; b.knR.rotation.x = 0.4 * dig;
        b.shR.rotation.x = -0.55 - 0.3 * dig - 1.1 * thr; b.elR.rotation.x = -0.35 + 0.2 * thr;
        b.shL.rotation.x = -0.9 - 0.2 * dig - 0.8 * thr; b.shL.rotation.z = -0.45; b.elL.rotation.x = -0.6;
        b.shovel.rotation.x = 0.9 - 0.6 * thr;
        break;
      }
      case 'rake': {
        b.rake.scale.setScalar(1);
        const s = Math.sin(ph);
        b.spine.rotation.x = 0.3 + 0.08 * s;
        b.shR.rotation.x = -0.75 - 0.35 * s; b.elR.rotation.x = -0.4 + 0.2 * s;
        b.shL.rotation.x = -0.95 - 0.3 * s; b.shL.rotation.z = -0.35; b.elL.rotation.x = -0.5;
        b.rake.rotation.x = 0.85 + 0.15 * s;
        b.hipL.rotation.x = -0.25; b.knL.rotation.x = 0.25; b.hipR.rotation.x = 0.1;
        break;
      }
      case 'carry':
        b.jack.scale.setScalar(1);
        b.spine.rotation.x = 0.12;
        b.shL.rotation.x = -0.75; b.shR.rotation.x = -0.75; b.elL.rotation.x = -0.35; b.elR.rotation.x = -0.35;
        b.shL.rotation.z = -0.12; b.shR.rotation.z = 0.12;
        break;
      case 'operate': {
        const tap = Math.max(0, Math.sin(ph * 2)) * 0.12;
        b.shR.rotation.x = -1.15 - tap; b.elR.rotation.x = -0.55 + tap; b.shR.rotation.z = 0.1;
        b.shL.rotation.z = 0.05; b.head.rotation.x = 0.1; b.spine.rotation.x = 0.04 + breathe;
        break;
      }
      case 'sample': {
        b.bottle.scale.setScalar(1);
        const dip = 0.5 + 0.5 * Math.sin(ph);
        b.hips.position.y = J.hips[1] - 0.42;
        b.hipL.rotation.x = -1.55; b.knL.rotation.x = 2.1;
        b.hipR.rotation.x = -0.9; b.knR.rotation.x = 1.9;
        b.spine.rotation.x = 0.45;
        b.shR.rotation.x = -0.75 - 0.25 * dip; b.elR.rotation.x = -0.2;
        b.shL.rotation.x = -0.4; b.elL.rotation.x = -0.9;
        b.head.rotation.x = 0.35;
        break;
      }
    }
    this.mesh.visible = this.visible;
  }

  /** Punto (mundo) sobre las horquillas de la transpaleta, para el tote transportado. */
  forkPoint(out = new THREE.Vector3()): THREE.Vector3 {
    const h = this.heading;
    return out.set(this.root.position.x + Math.sin(h) * 1.12, this.root.position.y + 0.1, this.root.position.z + Math.cos(h) * 1.12);
  }
}

export function createWorker(id: string, style: WorkerStyle | number = 0): WorkerRig & { forkPoint(out?: THREE.Vector3): THREE.Vector3; heading: number; action: WorkerAction } {
  const st = typeof style === 'number' ? WORKER_STYLES[((style % WORKER_STYLES.length) + WORKER_STYLES.length) % WORKER_STYLES.length] : style;
  return new WorkerRigImpl(id, st);
}
