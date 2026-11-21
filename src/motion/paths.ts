/**
 * Parcela héroe: posición en el mundo como función pura de t, a partir de pipe.pointAt(u)
 * y del ancla 'core' de cada unidad. Se divide en 4 sub-parcelas en el colector de reparto UASB
 * y se recombina en el colector hacia CL-201.
 */
import * as THREE from 'three';
import type { Plant, UnitId } from '../plant/types';
import { ROUTE, routeSegAt, treatmentProgress } from './timeline';
import { CAM_BASIS } from './cameraStory';
import { easeInOut, smoothstep, clamp } from '../sim/signals';

export const MAX_PARCELS = 4;
export const TRAIL_N = 4;
export const TRAIL_DT = 0.07;

const tmp = new THREE.Vector3();

/** Recorrido interno de una unidad: entrada → núcleo → salida, parametrizado por longitud de arco. */
function polyAt(pts: THREE.Vector3[], k: number, out: THREE.Vector3): THREE.Vector3 {
  const lens: number[] = [];
  let total = 0;
  for (let i = 1; i < pts.length; i++) { const l = pts[i].distanceTo(pts[i - 1]); lens.push(l); total += l; }
  if (total < 1e-6) return out.copy(pts[0]);
  let s = clamp(k) * total;
  for (let i = 0; i < lens.length; i++) {
    if (s <= lens[i] || i === lens.length - 1) return out.copy(pts[i]).lerp(pts[i + 1], lens[i] > 0 ? Math.min(1, s / lens[i]) : 1);
    s -= lens[i];
  }
  return out.copy(pts[pts.length - 1]);
}

function pipePoint(plant: Plant, id: string, u: number, out: THREE.Vector3): THREE.Vector3 {
  const p = plant.pipes[id];
  if (!p) return out.set(0, -100, 0);
  return out.copy(p.pointAt(clamp(u)));
}

/** Posición de la sub-parcela j (0..3) en t. Devuelve null si no es visible. */
export function parcelPosition(plant: Plant, t: number, j: number, out = new THREE.Vector3()): THREE.Vector3 | null {
  const r = routeSegAt(t);
  if (!r) return null;
  const { seg, index, k } = r;
  const n = seg.ids.length;
  if (j >= n) return null;
  if (seg.kind === 'pipe') return pipePoint(plant, seg.ids[j], k, out);
  // Unidad: entrada (fin de la tubería previa) → núcleo → salida (inicio de la siguiente)
  const unit = plant.units[seg.ids[j] as UnitId];
  const prev = ROUTE[index - 1], next = ROUTE[index + 1];
  const entry = new THREE.Vector3(), exit = new THREE.Vector3();
  if (prev) pipePoint(plant, prev.ids[Math.min(j, prev.ids.length - 1)], 1, entry); else entry.copy(unit.anchors.core);
  if (next) pipePoint(plant, next.ids[Math.min(j, next.ids.length - 1)], 0, exit); else exit.copy(unit.anchors.core);
  const core = unit.anchors.core ?? unit.anchors.focus;
  return polyAt([entry, core, exit], easeInOut(k), out);
}

/** Número de sub-parcelas visibles en t (1 o 4; 0 fuera del recorrido). */
export function parcelCount(t: number): number {
  const r = routeSegAt(t);
  return r ? r.seg.ids.length : 0;
}

const AMBER = new THREE.Color(0xd9a441);
const TEAL = new THREE.Color(0x5fb3a8);

/** Color de la parcela según el avance del tratamiento (ámbar → azul-verde). */
export function parcelColor(t: number, out = new THREE.Color()): THREE.Color {
  return out.copy(AMBER).lerp(TEAL, treatmentProgress(t));
}

interface Slot {
  group: THREE.Group;
  core: THREE.Mesh;
  halo: THREE.Mesh;
  disc: THREE.Mesh;
  trail: THREE.Mesh[];
}

/** Vista 3D de la parcela (esfera sobria + anillo tenue + estela de 4 puntos). */
export class ParcelView {
  readonly root = new THREE.Group();
  private slots: Slot[] = [];
  private coreMat: THREE.MeshBasicMaterial;
  private haloMat: THREE.MeshBasicMaterial;
  private discMat: THREE.MeshBasicMaterial;
  private rimMat!: THREE.MeshBasicMaterial;
  private trailMats: THREE.MeshBasicMaterial[] = [];

  constructor() {
    this.root.name = 'hero-parcel';
    const mk = (opacity: number) => new THREE.MeshBasicMaterial({ color: AMBER, transparent: true, opacity, depthTest: false, depthWrite: false });
    this.coreMat = mk(0.96);
    this.haloMat = mk(0.42);
    this.discMat = mk(0.11);
    for (let i = 0; i < TRAIL_N; i++) this.trailMats.push(mk(0.5 * (1 - (i + 1) / (TRAIL_N + 1))));
    const sph = new THREE.SphereGeometry(0.2, 20, 14);
    const ring = new THREE.RingGeometry(0.32, 0.37, 40);
    const disc = new THREE.CircleGeometry(0.5, 40);
    const dot = new THREE.SphereGeometry(0.1, 10, 8);
    const rimGeo = new THREE.RingGeometry(0.2, 0.25, 40);
    const rimMat = new THREE.MeshBasicMaterial({ color: 0x0b1418, transparent: true, opacity: 0.55, depthTest: false, depthWrite: false });
    this.rimMat = rimMat;
    // Los discos miran siempre a la cámara: la dirección de cámara es fija.
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(...CAM_BASIS.dir));
    for (let s = 0; s < MAX_PARCELS; s++) {
      const group = new THREE.Group();
      const core = new THREE.Mesh(sph, this.coreMat);
      const halo = new THREE.Mesh(ring, this.haloMat); halo.quaternion.copy(q);
      const discM = new THREE.Mesh(disc, this.discMat); discM.quaternion.copy(q);
      // Anillo oscuro fino: contraste sobre superficies claras (sin brillo artificial).
      const rim = new THREE.Mesh(rimGeo, rimMat); rim.quaternion.copy(q);
      core.renderOrder = 1002; halo.renderOrder = 1001; discM.renderOrder = 1000; rim.renderOrder = 1001;
      group.add(discM, rim, halo, core);
      const trail: THREE.Mesh[] = [];
      for (let i = 0; i < TRAIL_N; i++) {
        const m = new THREE.Mesh(dot, this.trailMats[i]);
        m.renderOrder = 999;
        trail.push(m);
        this.root.add(m);
      }
      this.root.add(group);
      this.slots.push({ group, core, halo, disc: discM, trail });
    }
  }

  /** Actualiza la parcela para el instante t (función pura de t y de la geometría). */
  update(plant: Plant, t: number, cameraDistance: number): void {
    const col = parcelColor(t);
    for (const m of [this.coreMat, this.haloMat, this.discMat, ...this.trailMats]) m.color.copy(col);
    // Escala aparente estable: más grande en planos abiertos.
    const sc = clamp(cameraDistance / 45, 0.55, 1.7);
    // Respiración leve del anillo (determinista).
    const breathe = 1 + 0.08 * Math.sin(t * 4.2);
    // Aparición/desaparición suaves en extremos del recorrido.
    const t0 = ROUTE[0].t0, t1 = ROUTE[ROUTE.length - 1].t1;
    const fade = smoothstep(t, t0, t0 + 0.35) * (1 - smoothstep(t, t1 - 0.35, t1));
    this.coreMat.opacity = 0.96 * fade;
    this.haloMat.opacity = 0.42 * fade;
    this.discMat.opacity = 0.11 * fade;
    this.rimMat.opacity = 0.55 * fade;
    for (let s = 0; s < MAX_PARCELS; s++) {
      const slot = this.slots[s];
      const p = parcelPosition(plant, t, s, tmp);
      slot.group.visible = !!p;
      if (p) {
        slot.group.position.copy(p);
        slot.group.scale.setScalar(sc);
        slot.halo.scale.setScalar(breathe);
      }
      for (let i = 0; i < TRAIL_N; i++) {
        const tt = t - (i + 1) * TRAIL_DT;
        const q = parcelPosition(plant, tt, s, tmp);
        const m = slot.trail[i];
        m.visible = !!q && !!p && fade > 0.05;
        if (q) { m.position.copy(q); m.scale.setScalar(sc * (1 - i * 0.16)); }
      }
    }
  }
}
