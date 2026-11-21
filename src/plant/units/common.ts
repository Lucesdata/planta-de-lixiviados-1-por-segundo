/**
 * Utilidades comunes de las unidades: agrupador de geometría estática por material, primitivas con
 * biseles, perfiles de torno redondeados, boquillas, barandas, escaleras, lámpara de estado, contorno de
 * selección y halo. Y `finalizeUnit`, que implementa la API PlantUnit sobre un estado mínimo.
 * Sin Math.random ni Date: la variación usa `hash01` determinista.
 */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { Footprint, PlantUnit, UnitId, UnitStatus } from '../types';
import type { UnitSpec } from '../layout';
import { MAT, STATUS_COLORS, createGroundGlowMaterial, createLampMaterial } from '../../scene/materials';

/* ------------------------------------------------------------------ */
/* Hash determinista                                                    */
/* ------------------------------------------------------------------ */
export function hash01(n: number, salt = 0): number {
  const s = Math.sin(n * 127.1 + salt * 311.7 + 17.13) * 43758.5453;
  return s - Math.floor(s);
}
export const fract = (x: number) => x - Math.floor(x);

/* ------------------------------------------------------------------ */
/* Transformaciones                                                     */
/* ------------------------------------------------------------------ */
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
export function T(x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, s: number | [number, number, number] = 1): THREE.Matrix4 {
  const sc = typeof s === 'number' ? new THREE.Vector3(s, s, s) : new THREE.Vector3(...s);
  _q.setFromEuler(_e.set(rx, ry, rz));
  return new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), _q, sc);
}

/** Matriz que lleva un cilindro unitario (eje Y, alto 1, centrado) al segmento a→b. */
export function segMatrix(a: THREE.Vector3, b: THREE.Vector3): THREE.Matrix4 {
  const d = new THREE.Vector3().subVectors(b, a);
  const len = d.length();
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().normalize());
  return new THREE.Matrix4().compose(a.clone().add(b).multiplyScalar(0.5), q, new THREE.Vector3(1, len, 1));
}

/* ------------------------------------------------------------------ */
/* Agrupador de geometría estática por material                         */
/* ------------------------------------------------------------------ */
export class Batcher {
  private groups = new Map<THREE.Material, THREE.BufferGeometry[]>();

  add(geom: THREE.BufferGeometry, mat: THREE.Material, m?: THREE.Matrix4): void {
    const g = geom.clone();
    for (const name of Object.keys(g.attributes)) {
      if (name !== 'position' && name !== 'normal' && name !== 'uv') g.deleteAttribute(name);
    }
    if (!g.attributes.uv) {
      g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    }
    if (!g.attributes.normal) g.computeVertexNormals();
    if (!g.index) {
      const n = g.attributes.position.count;
      const idx = new Uint32Array(n);
      for (let i = 0; i < n; i++) idx[i] = i;
      g.setIndex(new THREE.BufferAttribute(idx, 1));
    }
    g.clearGroups();
    if (m) g.applyMatrix4(m);
    // Normalizar tipo de índice (mezcla de Uint16/Uint32 falla al fusionar).
    if (!(g.index!.array instanceof Uint32Array)) g.setIndex(new THREE.BufferAttribute(Uint32Array.from(g.index!.array), 1));
    const list = this.groups.get(mat) ?? [];
    list.push(g);
    this.groups.set(mat, list);
  }

  /** Cilindro entre dos puntos. */
  rod(a: THREE.Vector3, b: THREE.Vector3, r: number, mat: THREE.Material, seg = 8): void {
    this.add(unitCyl(r, seg), mat, segMatrix(a, b));
  }

  build(parent: THREE.Object3D, cast = true, receive = true): THREE.Mesh[] {
    const out: THREE.Mesh[] = [];
    for (const [mat, list] of this.groups) {
      const merged = mergeGeometries(list, false);
      if (!merged) continue;
      merged.computeBoundingSphere();
      const mesh = new THREE.Mesh(merged, mat);
      mesh.castShadow = cast && !(mat as THREE.Material).transparent;
      mesh.receiveShadow = receive;
      parent.add(mesh);
      out.push(mesh);
      for (const g of list) g.dispose();
    }
    this.groups.clear();
    return out;
  }
}

/* ------------------------------------------------------------------ */
/* Primitivas                                                           */
/* ------------------------------------------------------------------ */
const unitCylCache = new Map<number, THREE.CylinderGeometry>();
function unitCyl(r: number, seg: number): THREE.BufferGeometry {
  const key = seg;
  let g = unitCylCache.get(key);
  if (!g) { g = new THREE.CylinderGeometry(1, 1, 1, seg, 1, false); unitCylCache.set(key, g); }
  return g.clone().scale(r, 1, r);
}

export const rbox = (w: number, h: number, d: number, r = 0.04, seg = 2) =>
  new RoundedBoxGeometry(w, h, d, seg, Math.min(r, w / 2 - 1e-3, h / 2 - 1e-3, d / 2 - 1e-3));

export const cyl = (r: number, h: number, seg = 32, rTop = r, open = false) =>
  new THREE.CylinderGeometry(rTop, r, h, seg, 1, open);

/** Redondea las esquinas de una polilínea 2D (r, y) con arcos de `rad` y `steps` segmentos. */
export function filletProfile(pts: [number, number][], rad: number, steps = 4): THREE.Vector2[] {
  const out: THREE.Vector2[] = [];
  const P = pts.map(p => new THREE.Vector2(p[0], p[1]));
  out.push(P[0].clone());
  for (let i = 1; i < P.length - 1; i++) {
    const a = P[i - 1], b = P[i], c = P[i + 1];
    const d1 = new THREE.Vector2().subVectors(a, b); const l1 = d1.length(); d1.normalize();
    const d2 = new THREE.Vector2().subVectors(c, b); const l2 = d2.length(); d2.normalize();
    const rr = Math.min(rad, l1 * 0.45, l2 * 0.45);
    if (rr < 1e-4 || Math.abs(d1.dot(d2)) > 0.999) { out.push(b.clone()); continue; }
    const p0 = b.clone().addScaledVector(d1, rr);
    const p1 = b.clone().addScaledVector(d2, rr);
    // Bézier cuadrática b como control: suave y suficiente para biseles.
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * b.x + t * t * p1.x;
      const y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * b.y + t * t * p1.y;
      out.push(new THREE.Vector2(Math.max(0, x), y));
    }
  }
  out.push(P[P.length - 1].clone());
  return out;
}

export function lathe(pts: [number, number][], fillet = 0.05, seg = 48, phiStart = 0, phiLength = Math.PI * 2): THREE.LatheGeometry {
  return new THREE.LatheGeometry(filletProfile(pts, fillet), seg, phiStart, phiLength);
}

/** Tanque cilíndrico de pared gruesa. Abierto o con techo. Coordenadas locales: base en y0. */
export function tankShellProfile(r: number, y0: number, h: number, t = 0.05, open = true, floor = 0.06): [number, number][] {
  const y1 = y0 + h;
  if (open) {
    return [[0, y0], [r, y0], [r, y1], [r - t, y1], [r - t, y0 + floor], [0, y0 + floor]];
  }
  // Techo cerrado: interior (techo → pared → fondo) → eje → exterior (fondo → pared → techo)
  return [[0, y1 - t], [r - t, y1 - t], [r - t, y0 + floor], [0, y0 + floor], [0, y0], [r, y0], [r, y1], [0, y1]];
}

/** Boquilla: tubo corto desde el punto de pared en dirección `dir` con brida en el extremo. Devuelve el puerto. */
export function nozzle(batch: Batcher, wall: THREE.Vector3, dir: THREE.Vector3, len = 0.18, r = 0.085, mat: THREE.Material = MAT.steel): THREE.Vector3 {
  const d = dir.clone().normalize();
  const end = wall.clone().addScaledVector(d, len);
  batch.rod(wall.clone().addScaledVector(d, -0.03), end, r, mat, 16);
  batch.rod(end.clone().addScaledVector(d, -0.045), end, r * 1.65, mat, 20);
  return end;
}

/** Placa de registro (manhole) sobre pared cilíndrica en el ángulo phi (convención torno). */
export function manway(batch: Batcher, r: number, y: number, phi: number, size = 0.28, mat: THREE.Material = MAT.steelDark): void {
  const n = new THREE.Vector3(Math.sin(phi), 0, Math.cos(phi));
  const c = n.clone().multiplyScalar(r);
  batch.rod(c.clone().addScaledVector(n, -0.02), c.clone().addScaledVector(n, 0.07), size, mat, 24);
  batch.rod(c.clone().addScaledVector(n, 0.07), c.clone().addScaledVector(n, 0.1), size * 0.82, mat, 24);
  // asa
  batch.rod(c.clone().addScaledVector(n, 0.1).add(new THREE.Vector3(0, size * 0.35, 0)), c.clone().addScaledVector(n, 0.1).add(new THREE.Vector3(0, -size * 0.35, 0)), 0.015, MAT.steel, 6);
  void y;
}

/** Baranda: postes cada ≤ maxSpan y pasamanos superior + intermedio a lo largo de una polilínea. */
export function handrail(batch: Batcher, path: THREE.Vector3[], h = 1.0, maxSpan = 1.4, mat: THREE.Material = MAT.rail): void {
  const r = 0.022;
  for (let i = 0; i < path.length - 1; i++) {
    const a = path[i], b = path[i + 1];
    const len = a.distanceTo(b);
    const n = Math.max(1, Math.ceil(len / maxSpan));
    for (let k = 0; k <= n; k++) {
      if (k === 0 && i > 0) continue;
      const p = a.clone().lerp(b, k / n);
      batch.rod(p, p.clone().add(new THREE.Vector3(0, h, 0)), r, mat, 6);
    }
    batch.rod(a.clone().setY(a.y + h), b.clone().setY(b.y + h), r * 1.15, mat, 8);
    batch.rod(a.clone().setY(a.y + h * 0.5), b.clone().setY(b.y + h * 0.5), r * 0.9, mat, 6);
  }
}

/** Escalera de gato vertical con jaula opcional. `out` = dirección hacia afuera de la pared. */
export function ladder(batch: Batcher, base: THREE.Vector3, y1: number, out: THREE.Vector3, cage = false, w = 0.42): void {
  const o = out.clone().normalize();
  const side = new THREE.Vector3(0, 1, 0).cross(o).normalize();
  const a = base.clone().addScaledVector(side, -w / 2);
  const b = base.clone().addScaledVector(side, w / 2);
  const top = y1 + 0.9;
  batch.rod(a, a.clone().setY(top), 0.022, MAT.rail, 6);
  batch.rod(b, b.clone().setY(top), 0.022, MAT.rail, 6);
  for (let y = base.y + 0.3; y < y1 + 0.05; y += 0.3) batch.rod(a.clone().setY(y), b.clone().setY(y), 0.014, MAT.rail, 5);
  if (cage) {
    const hoopG = new THREE.TorusGeometry(0.36, 0.014, 4, 12, Math.PI);
    // Toro en el plano XY (semicírculo hacia +Y): X→lateral, Y→afuera, Z→arriba.
    const basis = new THREE.Matrix4().makeBasis(side, o, new THREE.Vector3(0, -1, 0)); // diestra
    for (let y = base.y + 2.2; y <= top; y += 0.7) {
      const c = base.clone().setY(y).addScaledVector(o, 0.04);
      batch.add(hoopG, MAT.rail, new THREE.Matrix4().makeTranslation(c.x, c.y, c.z).multiply(basis));
    }
  }
}

/* ------------------------------------------------------------------ */
/* Lámpara de estado, contorno y halo                                   */
/* ------------------------------------------------------------------ */
export interface StatusLamp { object: THREE.Group; set(mode: UnitStatus, active: boolean): void }

export function createStatusLamp(pos: THREE.Vector3): StatusLamp {
  const g = new THREE.Group();
  g.position.copy(pos);
  const base = new THREE.Mesh(cyl(0.06, 0.06, 12), MAT.steelDark);
  base.position.y = 0.03;
  const lensMat = createLampMaterial();
  const lens = new THREE.Mesh(new THREE.SphereGeometry(0.055, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), lensMat);
  lens.position.y = 0.06;
  g.add(base, lens);
  return {
    object: g,
    set(mode, active) {
      const c = STATUS_COLORS[mode];
      lensMat.color.setHex(c);
      lensMat.emissive.setHex(c);
      lensMat.emissiveIntensity = mode === 'idle' ? 0.12 : active ? 1.25 : 0.8;
    },
  };
}

/** Contorno: circunferencias en cada cota del perfil (r, y) + generatrices verticales. */
export function outlineProfile(profile: [number, number][], verticals = 4, seg = 64): THREE.LineSegments {
  const pos: number[] = [];
  for (const [r, y] of profile) {
    if (r < 0.02) continue;
    for (let i = 0; i < seg; i++) {
      const a0 = (i / seg) * Math.PI * 2, a1 = ((i + 1) / seg) * Math.PI * 2;
      pos.push(Math.sin(a0) * r, y, Math.cos(a0) * r, Math.sin(a1) * r, y, Math.cos(a1) * r);
    }
  }
  for (let k = 0; k < verticals; k++) {
    const a = Math.PI / 4 + (k / verticals) * Math.PI * 2;
    for (let i = 0; i < profile.length - 1; i++) {
      const [r0, y0] = profile[i], [r1, y1] = profile[i + 1];
      pos.push(Math.sin(a) * r0, y0, Math.cos(a) * r0, Math.sin(a) * r1, y1, Math.cos(a) * r1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  const ls = new THREE.LineSegments(g, MAT.outline);
  ls.renderOrder = 5;
  return ls;
}

export function outlineBox(min: THREE.Vector3, max: THREE.Vector3): THREE.LineSegments {
  const size = new THREE.Vector3().subVectors(max, min);
  const g = new THREE.EdgesGeometry(new THREE.BoxGeometry(size.x, size.y, size.z));
  g.translate((min.x + max.x) / 2, (min.y + max.y) / 2, (min.z + max.z) / 2);
  const ls = new THREE.LineSegments(g, MAT.outline);
  ls.renderOrder = 5;
  return ls;
}

export function createGlowDisk(radius: number, y: number): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.CircleGeometry(radius, 48), createGroundGlowMaterial());
  m.rotation.x = -Math.PI / 2;
  m.position.y = y;
  m.renderOrder = 3;
  return m;
}

/* ------------------------------------------------------------------ */
/* Ensamblado de la unidad                                              */
/* ------------------------------------------------------------------ */
export interface UnitRuntime {
  active: boolean;
  selected: boolean;
  flow: number;
  motion: number;
  status: UnitStatus;
}

export interface UnitAssembly {
  spec: UnitSpec;
  /** Grupo raíz ya posicionado en (pos.x, 0, pos.z). */
  root: THREE.Group;
  /** Anclas en coordenadas LOCALES de root (se convierten a mundo). */
  localAnchors: Record<string, THREE.Vector3>;
  radius: number;
  /** Caja local (min/max) del cuerpo principal. */
  localBox: { min: [number, number, number]; max: [number, number, number] };
  pickTargets: THREE.Object3D[];
  outline: THREE.Object3D;
  glowRadius: number;
  glowY: number;
  lamp: StatusLamp;
  /** Animación procedimental (pura) con el estado actual. */
  animate?(t: number, s: UnitRuntime): void;
  /** Reacción inmediata a cambios de estado (opcional). */
  onState?(s: UnitRuntime): void;
}

export function createRoot(spec: UnitSpec): THREE.Group {
  const g = new THREE.Group();
  g.name = spec.id;
  g.position.set(spec.pos[0], 0, spec.pos[1]);
  return g;
}

export function finalizeUnit(a: UnitAssembly): PlantUnit {
  const s: UnitRuntime = { active: false, selected: false, flow: 0, motion: 0, status: 'idle' };
  const origin = a.root.position.clone();
  const anchors: Record<string, THREE.Vector3> = {};
  for (const [k, v] of Object.entries(a.localAnchors)) anchors[k] = v.clone().add(origin);
  const footprint: Footprint = {
    min: [a.localBox.min[0] + origin.x, a.localBox.min[1], a.localBox.min[2] + origin.z],
    max: [a.localBox.max[0] + origin.x, a.localBox.max[1], a.localBox.max[2] + origin.z],
  };
  a.outline.visible = false;
  a.root.add(a.outline);
  const glow = createGlowDisk(a.glowRadius, a.glowY);
  glow.visible = false;
  a.root.add(glow);
  a.root.add(a.lamp.object);
  a.lamp.set('idle', false);
  for (const o of a.pickTargets) o.userData.unitId = a.spec.id as UnitId;
  const changed = () => { a.lamp.set(s.status, s.active); a.onState?.(s); };
  return {
    id: a.spec.id,
    root: a.root,
    anchors,
    radius: a.radius,
    footprint,
    pickTargets: a.pickTargets,
    setActive(on) { s.active = on; changed(); },
    setSelected(on) { s.selected = on; a.outline.visible = on; glow.visible = on; },
    setFlowLevel(x) { s.flow = clamp01(x); changed(); },
    setInternalMotion(x) { s.motion = clamp01(x); changed(); },
    setStatus(mode) { s.status = mode; changed(); },
    update(t) { a.animate?.(t, s); },
  };
}

export const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : Number.isFinite(x) ? x : 0);

/** Fija la matriz de una instancia. */
const _m4 = new THREE.Matrix4();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();
const _qq = new THREE.Quaternion();
const _ee = new THREE.Euler();
export function setInstance(mesh: THREE.InstancedMesh, i: number, x: number, y: number, z: number, scale: number | [number, number, number], rx = 0, ry = 0, rz = 0): void {
  if (typeof scale === 'number') _s.set(scale, scale, scale); else _s.set(scale[0], scale[1], scale[2]);
  _qq.setFromEuler(_ee.set(rx, ry, rz));
  mesh.setMatrixAt(i, _m4.compose(_p.set(x, y, z), _qq, _s));
}

/** Ángulo (rad, convención torno) de la dirección horizontal hacia la cámara fija. */
export function cameraPhi(dir: readonly [number, number, number]): number {
  return Math.atan2(dir[0], dir[2]);
}

/* ------------------------------------------------------------------ */
/* Piezas de tanque: anillos parciales y ventana de inspección           */
/* ------------------------------------------------------------------ */

/** Anillo (toro) horizontal de radio r a la cota y, desde phiFrom con longitud phiLen (convención torno). */
export function arcRing(batch: Batcher, r: number, tube: number, y: number, phiFrom: number, phiLen: number, mat: THREE.Material): void {
  const segs = Math.max(8, Math.ceil((phiLen / (Math.PI * 2)) * 64));
  const g = new THREE.TorusGeometry(r, tube, 8, segs, phiLen);
  // Toro en XY: theta → (cos, sin, 0). RotX(-90°) da phi = theta + 90°; RotY(beta) suma beta.
  batch.add(g, mat, T(0, y, 0, 0, phiFrom - Math.PI / 2, 0).multiply(T(0, 0, 0, -Math.PI / 2, 0, 0)));
}

export interface InspectionWindow {
  phi: number; halfWidth: number; y0: number; y1: number;
}

/**
 * Marco y vidrio de la ventana de inspección. `profile` = puntos (r, y) de la superficie exterior entre
 * y0 e y1 (permite ventana en zona cónica). Devuelve la malla de vidrio (ya agregada a `root`).
 */
export function addInspectionWindow(batch: Batcher, root: THREE.Object3D, w: InspectionWindow, profile: [number, number][]): THREE.Mesh {
  const at = (r: number, y: number, a: number) => new THREE.Vector3(Math.sin(a) * r, y, Math.cos(a) * r);
  for (const a of [w.phi - w.halfWidth, w.phi + w.halfWidth]) {
    for (let i = 0; i < profile.length - 1; i++) {
      batch.rod(at(profile[i][0] + 0.01, profile[i][1], a), at(profile[i + 1][0] + 0.01, profile[i + 1][1], a), 0.03, MAT.steelDark, 8);
    }
  }
  const [rb, yb] = profile[0];
  const [rt, yt] = profile[profile.length - 1];
  arcRing(batch, rb + 0.01, 0.03, yb, w.phi - w.halfWidth, 2 * w.halfWidth, MAT.steelDark);
  arcRing(batch, rt + 0.01, 0.03, yt, w.phi - w.halfWidth, 2 * w.halfWidth, MAT.steelDark);
  const pts = profile.map(([r, y]) => new THREE.Vector2(r - 0.02, y));
  const glass = new THREE.Mesh(new THREE.LatheGeometry(pts, 24, w.phi - w.halfWidth, 2 * w.halfWidth), MAT.glass);
  glass.renderOrder = 2;
  root.add(glass);
  return glass;
}
