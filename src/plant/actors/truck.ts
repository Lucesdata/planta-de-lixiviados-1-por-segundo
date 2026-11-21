/**
 * Camiones (supuesto visual, escala «juguete premium», 7,2 m): cabina con ventanas, chasis, ruedas
 * instanciadas que giran (wheelTurns), faros (emisión nocturna compartida), baliza ámbar (parpadeo
 * determinista función de t) y retrovisores.
 *  'chemical': plataforma con barandas y hasta 4 totes IBC (setLoad → n = round(4x)); plataforma
 *              elevadora trasera (setWork: 0..0,4 despliega, 0,4..1 baja al suelo).
 *  'sludge':   volteo con caja abierta (torta de lodo visible con setLoad); setWork bascula la caja y
 *              abre la compuerta trasera.
 * Marco local: +z hacia adelante, origen = centro del eje trasero sobre el suelo.
 */
import * as THREE from 'three';
import type { TruckKind, TruckRig } from '../types';
import { MAT, MAT2, createNightEmissive } from '../../scene/materials';

const TRUCK_PAINT = {
  cab: new THREE.MeshStandardMaterial({ color: 0x2f5bea, roughness: 0.45, metalness: 0.1 }),
  white: new THREE.MeshStandardMaterial({ color: 0xf3f5fa, roughness: 0.5 }),
  teal: new THREE.MeshStandardMaterial({ color: 0x1fa88f, roughness: 0.5, metalness: 0.05 }),
};
import { Batcher, cyl, rbox, T } from '../units/common';
import { createToteSet, TOTE, type ToteSet } from './tote';

export const TRUCK_DIM = { length: 7.2, width: 2.4, rearOverhang: 1.3, wheelbase: 4.2, wheelR: 0.5, height: 3.2 };

let headlightMat: THREE.MeshStandardMaterial | null = null;
let tailMat: THREE.MeshStandardMaterial | null = null;
let wheelGeo: THREE.BufferGeometry | null = null;
let wheelMat: THREE.MeshStandardMaterial | null = null;

function wheel(): { geo: THREE.BufferGeometry; mat: THREE.MeshStandardMaterial } {
  if (!wheelGeo) {
    const R = TRUCK_DIM.wheelR;
    const parts: [THREE.BufferGeometry, number][] = [
      [new THREE.CylinderGeometry(R, R, 0.3, 24), 0x26292b],
      [new THREE.CylinderGeometry(R * 0.6, R * 0.6, 0.31, 18), 0x9ea6aa],
      [new THREE.BoxGeometry(0.08, 0.32, R * 1.0), 0x5c6468],       // radio marcado: se ve el giro
    ];
    const pos: number[] = [], nrm: number[] = [], col: number[] = [];
    for (const [g0, c] of parts) {
      const g = g0.toNonIndexed();
      g.rotateZ(Math.PI / 2);
      const cc = new THREE.Color(c).convertSRGBToLinear();
      pos.push(...(g.attributes.position.array as Float32Array));
      nrm.push(...(g.attributes.normal.array as Float32Array));
      for (let i = 0; i < g.attributes.position.count; i++) col.push(cc.r, cc.g, cc.b);
    }
    wheelGeo = new THREE.BufferGeometry();
    wheelGeo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    wheelGeo.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
    wheelGeo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    wheelMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 });
  }
  return { geo: wheelGeo, mat: wheelMat! };
}

class TruckRigImpl implements TruckRig {
  root = new THREE.Group();
  length = TRUCK_DIM.length;
  private wheels: THREE.InstancedMesh;
  private wheelPos: [number, number][] = [];
  private beaconMat: THREE.MeshStandardMaterial;
  private totes: ToteSet | null = null;
  private lift: THREE.Group | null = null;
  private body: THREE.Group | null = null;
  private gate: THREE.Group | null = null;
  private cake: THREE.Mesh | null = null;
  private m4 = new THREE.Matrix4();

  constructor(public id: string, public kind: TruckKind) {
    this.root.name = `truck:${id}`;
    const D = TRUCK_DIM, b = new Batcher();
    // Estilo claro (fase 4): cabina azul viva; caja de lodos verde azulada, plataforma química blanca.
    const paint = TRUCK_PAINT.cab;
    const bodyPaint = kind === 'chemical' ? TRUCK_PAINT.white : TRUCK_PAINT.teal;
    const accent = kind === 'chemical' ? MAT.steelBlue : MAT.rail;
    const zF = D.wheelbase, zFront = D.length - D.rearOverhang, zR = -D.rearOverhang;
    // Chasis
    for (const s of [-1, 1]) b.add(rbox(0.16, 0.22, zFront - zR - 0.3, 0.02), MAT.steelDark, T(s * 0.45, 0.78, (zFront + zR) / 2 - 0.1));
    b.add(rbox(0.5, 0.4, 0.9, 0.06), MAT.steelDark, T(-0.95, 0.75, 2.2));                // depósito
    b.add(rbox(0.5, 0.35, 0.6, 0.05), MAT.rubber, T(0.95, 0.75, 2.4));                   // cajón de baterías
    for (const s of [-1, 1]) b.add(rbox(0.04, 0.12, 2.2, 0.01), MAT.steel, T(s * 1.15, 0.55, 1.95)); // defensa lateral
    for (const s of [-1, 1]) for (const z of [0, zF]) b.add(rbox(0.5, 0.06, 0.9, 0.02), MAT.steelDark, T(s * 0.95, 1.05, z)); // guardabarros
    // Cabina
    const cz0 = zF - 0.2, cz1 = zFront;
    b.add(rbox(D.width, 1.85, cz1 - cz0, 0.18, 3), paint, T(0, 1.05 + 0.925, (cz0 + cz1) / 2));
    b.add(rbox(D.width + 0.02, 0.16, cz1 - cz0 + 0.02, 0.05), accent, T(0, 1.55, (cz0 + cz1) / 2));
    const glass = new THREE.MeshStandardMaterial({ color: 0x22313a, roughness: 0.1, metalness: 0.4 });
    b.add(rbox(D.width - 0.3, 0.75, 0.04, 0.03), glass, T(0, 2.35, cz1 + 0.005));          // parabrisas
    for (const s of [-1, 1]) b.add(rbox(0.04, 0.65, 0.95, 0.03), glass, T(s * (D.width / 2 + 0.005), 2.35, cz1 - 0.65)); // laterales
    b.add(rbox(D.width - 0.4, 0.28, 0.06, 0.02), MAT.steelDark, T(0, 1.35, cz1 + 0.02));   // parrilla
    b.add(rbox(D.width + 0.05, 0.22, 0.2, 0.04), MAT.steelDark, T(0, 0.85, cz1 + 0.08));   // parachoques
    for (const s of [-1, 1]) {                                                              // retrovisores
      b.rod(new THREE.Vector3(s * D.width / 2, 2.4, cz1 - 0.3), new THREE.Vector3(s * (D.width / 2 + 0.25), 2.4, cz1 - 0.2), 0.015, MAT.steelDark, 5);
      b.add(rbox(0.06, 0.3, 0.16, 0.02), MAT.steelDark, T(s * (D.width / 2 + 0.27), 2.35, cz1 - 0.2));
    }
    b.rod(new THREE.Vector3(-0.95, 1.2, cz0 - 0.1), new THREE.Vector3(-0.95, 3.25, cz0 - 0.1), 0.05, MAT.steel, 10); // escape
    b.add(rbox(0.3, 0.08, 0.3, 0.02), MAT.steelDark, T(0, 2.93, cz0 + 0.5));               // base de la baliza
    // Faros delanteros y pilotos traseros (emisión nocturna compartida)
    if (!headlightMat) headlightMat = createNightEmissive(0xfff0d0, 2.4, 0.08, 0xe8e4d8);
    if (!tailMat) tailMat = createNightEmissive(0xc0302a, 1.6, 0.15, 0x5a1a14);
    for (const s of [-1, 1]) {
      b.add(rbox(0.3, 0.16, 0.04, 0.03), headlightMat, T(s * 0.85, 1.32, cz1 + 0.03));
      b.add(rbox(0.22, 0.1, 0.04, 0.02), tailMat, T(s * 1.0, 0.95, zR - 0.02));
    }
    b.add(rbox(D.width, 0.12, 0.06, 0.02), MAT.steelDark, T(0, 0.9, zR + 0.03));           // paragolpes trasero

    // Carrocería
    if (kind === 'chemical') {
      const bz0 = zR, bz1 = cz0 - 0.1, by = 1.15;
      b.add(rbox(D.width, 0.12, bz1 - bz0, 0.02), MAT2.pallet, T(0, by - 0.06, (bz0 + bz1) / 2));
      for (const s of [-1, 1]) b.add(rbox(0.05, 0.35, bz1 - bz0, 0.01), accent, T(s * (D.width / 2 - 0.03), by + 0.18, (bz0 + bz1) / 2));
      b.add(rbox(D.width, 1.3, 0.08, 0.02), accent, T(0, by + 0.65, bz1 - 0.04));          // mampara
      for (let k = 0; k < 5; k++) b.add(rbox(0.04, 0.32, 0.04, 0.01), MAT.steelDark, T(-D.width / 2 + 0.03, by + 0.17, bz0 + 0.3 + k * ((bz1 - bz0 - 0.6) / 4)));
      // Columnas de la plataforma elevadora
      for (const s of [-1, 1]) b.add(rbox(0.1, 1.1, 0.1, 0.02), MAT.steelDark, T(s * (D.width / 2 - 0.1), 0.6, zR - 0.05));
      const slots: THREE.Matrix4[] = [];
      for (let i = 0; i < 4; i++) slots.push(new THREE.Matrix4().makeTranslation(0, by, bz1 - 0.15 - TOTE.l / 2 - i * (TOTE.l + 0.12)));
      this.totes = createToteSet(slots);
      this.root.add(this.totes.group);
      // Plataforma elevadora (pivote en el borde trasero)
      const lift = new THREE.Group();
      lift.position.set(0, by, zR);
      const lb = new Batcher();
      lb.add(rbox(D.width - 0.2, 0.06, 1.4, 0.015), MAT.grating, T(0, 0, -0.7));
      lb.add(rbox(D.width - 0.2, 0.08, 0.05, 0.01), MAT.rail, T(0, 0.04, -1.38));
      lb.build(lift);
      this.lift = lift;
      this.root.add(lift);
    } else {
      // Caja de volteo con pivote trasero
      const body = new THREE.Group();
      const hz = zR + 0.1, by = 1.3, bl = 4.6, bw = 2.3, bh = 1.05;
      body.position.set(0, by, hz);
      const bb = new Batcher();
      bb.add(rbox(bw, 0.1, bl, 0.03), bodyPaint, T(0, 0.05, bl / 2));
      for (const s of [-1, 1]) bb.add(rbox(0.08, bh, bl, 0.02), bodyPaint, T(s * (bw / 2 - 0.04), bh / 2, bl / 2));
      bb.add(rbox(bw, bh + 0.2, 0.08, 0.02), bodyPaint, T(0, (bh + 0.2) / 2, bl - 0.04));
      bb.add(rbox(bw + 0.1, 0.1, 0.9, 0.02), bodyPaint, T(0, bh + 0.15, bl + 0.35));            // visera sobre cabina
      for (let k = 0; k < 4; k++) for (const s of [-1, 1]) bb.add(rbox(0.05, bh, 0.06, 0.01), accent, T(s * (bw / 2 + 0.01), bh / 2, 0.4 + k * 1.2));
      bb.build(body);
      const cake = new THREE.Mesh(new THREE.BoxGeometry(bw - 0.18, 1, bl - 0.2, 6, 1, 10), MAT2.sludgeDry);
      cake.position.set(0, 0.1, bl / 2);
      cake.receiveShadow = true;
      body.add(cake);
      // Compuerta trasera colgada arriba
      const gate = new THREE.Group();
      gate.position.set(0, bh, 0.0);
      const gm = new THREE.Mesh(rbox(bw, bh, 0.08, 0.02), bodyPaint);
      gm.position.set(0, -bh / 2, -0.04);
      gm.castShadow = true;
      gate.add(gm);
      body.add(gate);
      this.body = body; this.gate = gate; this.cake = cake;
      this.root.add(body);
      // Cilindro de volteo (estático, visual)
      b.add(cyl(0.08, 1.1, 12), MAT.steel, T(0, 1.0, 2.6, 0.5, 0, 0));
    }
    b.build(this.root);

    // Baliza ámbar
    this.beaconMat = new THREE.MeshStandardMaterial({ color: 0x6a4a1a, emissive: 0xffa03a, emissiveIntensity: 0, roughness: 0.3, transparent: true, opacity: 0.92 });
    const beacon = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.18, 14), this.beaconMat);
    beacon.position.set(0, 3.06, cz0 + 0.5);
    this.root.add(beacon);

    // Ruedas: delanteras simples, traseras dobles
    for (const s of [-1, 1]) {
      this.wheelPos.push([s * 1.02, zF]);
      this.wheelPos.push([s * 1.05, 0], [s * 0.72, 0]);
    }
    const w = wheel();
    this.wheels = new THREE.InstancedMesh(w.geo, w.mat, this.wheelPos.length);
    this.wheels.castShadow = true;
    this.wheels.frustumCulled = false;
    this.root.add(this.wheels);
    this.root.traverse(o => { if ((o as THREE.Mesh).isMesh && !(o as THREE.InstancedMesh).isInstancedMesh) o.castShadow = true; });
    this.setPose(new THREE.Vector3(), 0, 0);
    this.setLoad(0); this.setWork(0); this.setBeacon(false, 0);
  }

  setPose(pos: THREE.Vector3, heading: number, wheelTurns: number): void {
    this.root.position.copy(pos);
    this.root.rotation.set(0, heading, 0);
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(wheelTurns * Math.PI * 2, 0, 0));
    const one = new THREE.Vector3(1, 1, 1);
    this.wheelPos.forEach(([x, z], i) => this.wheels.setMatrixAt(i, this.m4.compose(new THREE.Vector3(x, TRUCK_DIM.wheelR, z), q, one)));
    this.wheels.instanceMatrix.needsUpdate = true;
  }

  setLoad(x: number): void {
    const v = Math.max(0, Math.min(1, x));
    if (this.totes) this.totes.setCount(Math.round(4 * v));
    if (this.cake) {
      const h = 0.02 + 0.85 * v;
      this.cake.scale.y = h;
      this.cake.position.y = 0.1 + h / 2;
      this.cake.visible = v > 0.01;
    }
  }

  setWork(x: number): void {
    const v = Math.max(0, Math.min(1, x));
    if (this.lift) {
      const a = Math.min(1, v / 0.4), d = Math.max(0, (v - 0.4) / 0.6);
      this.lift.rotation.x = (Math.PI / 2) * (1 - a);
      this.lift.position.y = 1.15 - (1.15 - 0.06) * d;
    }
    if (this.body && this.gate) {
      this.body.rotation.x = -0.75 * v;
      this.gate.rotation.x = 0.9 * Math.min(1, v * 2);
    }
  }

  setBeacon(on: boolean, t: number): void {
    const p = 0.5 + 0.5 * Math.cos(t * Math.PI * 2 * 1.4);
    this.beaconMat.emissiveIntensity = on ? 0.3 + 2.2 * p * p : 0;
  }

  setVisible(on: boolean): void { this.root.visible = on; }
}

export function createTruck(kind: TruckKind, id: string = `truck-${kind}`): TruckRig {
  return new TruckRigImpl(id, kind);
}
