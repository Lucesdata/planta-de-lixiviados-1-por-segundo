/**
 * Tuberías: trazado ortogonal (codos a 90° redondeados), geometría de tubo con atributo de longitud de
 * arco `aS`, material con frente de llenado / pulsos / chevrones, y red con troncales compartidos.
 *
 * Troncales compartidos: los ramales de un mismo colector (mismo origen —impulsión de la bomba— o mismo
 * destino —colector de efluente UASB→CL-201—) recorren tramos idénticos. Cada PipeRun conserva su
 * polilínea COMPLETA (pointAt sigue todo el recorrido), pero la geometría se descompone en «cadenas»
 * únicas: el tramo común se dibuja una sola vez y su estado visual es el agregado de sus miembros
 * (flujo = máx., frente = máx. de lo avanzado dentro del tramo, resaltado/visible = alguno).
 */
import * as THREE from 'three';
import type { Footprint, LineKind, PipeRun, UnitId } from './types';
import { LINE_COLORS, type PipeSpec } from './processFlow';
import { MAT, createPipeMaterial } from '../scene/materials';
import { Batcher, clamp01, cyl, rbox, T } from './units/common';

/** Cotas y ejes de trazado (hipótesis de este escenario; ver docs/LAYOUT.md). */
export const ROUTING = {
  /** Colector de reparto de la impulsión sobre rack al norte de la fila UASB. */
  feedHeaderY: 4.2,
  feedHeaderZ: -2.2,
  /** Colector de efluente UASB al sur de la fila, hacia CL-201. */
  collectorY: 2.85,
  collectorZ: 2.4,
  collectorTurnX: 6.0,
  /** Subida de la línea TK-101 → TK-102 junto a la plataforma. */
  homogRiserX: -20.4,
  pipeR: 0.085,
  trunkR: 0.105,
  sludgeR: 0.075,
  chemR: 0.035,
  cornerR: 0.24,
  /** Fase 2 (supuestos): colector de biogás elevado sobre la fila UASB y bajada a QB-201. */
  gasY: 4.8,
  gasZ: 0.5,
  gasX: 6.3,
  /** Troncal de purgas de lodo (UASB, CL-201, CL-101) a ES-101: sobre durmientes a 0,45 m. */
  purgeY: 0.45,
  purgeZ: 2.0,
  purgeX: -9.6,
  /** Cota del eje de las tuberías en zanja cubierta con rejilla (bajo la losa). */
  trenchY: -0.2,
  /** Cruce del corredor x = 5,2 por la purga de CL-201 (en zanja). */
  purgeTrenchX: [4.5, 5.9] as const,
  /** Líneas químicas: pasan sobre la plataforma con ≥ 2,1 m libres sobre el piso (1,2 m). */
  chemY: { coag: 3.45, floc: 3.55 },
  /** Retorno del drenado de LS-101: zanja por x = −20,0 y z = −5,75 hasta TK-101. */
  returnX: -20.0,
  returnZ: -5.75,
  /** Espesador → lecho: cruza el lazo vial en zanja; sube junto al lecho en x = −16,9. */
  thickBedRiserX: -16.9,
  thickBedDropX: -11.6,
} as const;

const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);

/* ------------------------------------------------------------------ */
/* Trazado                                                              */
/* ------------------------------------------------------------------ */

/** Polilínea ortogonal desde el puerto `a` (origen) al puerto `b` (destino). */
export function routePipe(spec: PipeSpec, a: THREE.Vector3, b: THREE.Vector3): THREE.Vector3[] {
  const R = ROUTING;
  let pts: THREE.Vector3[];
  if (spec.id === 'p-inlet') {
    pts = [a, V(a.x, b.y, a.z), b];
  } else if (spec.id === 'p-homog-coag') {
    pts = [a, V(R.homogRiserX, a.y, a.z), V(R.homogRiserX, b.y, a.z), b];
  } else if (spec.id.startsWith('p-feed-')) {
    const hy = R.feedHeaderY, hz = R.feedHeaderZ;
    pts = [a, V(a.x, hy, a.z), V(a.x, hy, hz), V(b.x, hy, hz), V(b.x, hy, b.z), b];
  } else if (/^p-uasb\d-clar2$/.test(spec.id)) {
    const cy = R.collectorY, cz = R.collectorZ, tx = R.collectorTurnX;
    pts = [a, V(a.x, cy, a.z), V(a.x, cy, cz), V(tx, cy, cz), V(tx, cy, b.z), V(tx, b.y, b.z), b];
  } else if (spec.id === 'p-screen-homog') {
    pts = [a, V(a.x, b.y, a.z), b];
  } else if (spec.id.startsWith('p-gas-')) {
    const gy = R.gasY;
    pts = [a, V(a.x, gy, a.z), V(R.gasX, gy, a.z), V(R.gasX, gy, b.z), V(b.x, gy, b.z), b];
  } else if (spec.id.startsWith('p-purge-')) {
    const py = R.purgeY, pz = R.purgeZ, px = R.purgeX;
    pts = [a, V(a.x, py, a.z), V(a.x, py, pz), V(px, py, pz), V(px, py, b.z), b];
  } else if (spec.id === 'p-clar2-thick') {
    const py = R.purgeY, pz = R.purgeZ, px = R.purgeX, ty = R.trenchY, [tx0, tx1] = R.purgeTrenchX;
    pts = [a, V(a.x, ty, a.z), V(a.x, ty, pz), V(tx0, ty, pz), V(tx0, py, pz), V(px, py, pz), V(px, py, b.z), b];
    void tx1;
  } else if (spec.id === 'p-clar1-thick') {
    const py = R.purgeY, pz = R.purgeZ, px = R.purgeX, ty = R.trenchY;
    pts = [a, V(a.x, ty, a.z), V(px, ty, a.z), V(px, ty, pz - 0.6), V(px, py, pz - 0.6), V(px, py, b.z), b];
  } else if (spec.id === 'p-thick-bed') {
    const ty = R.trenchY;
    pts = [a, V(R.thickBedDropX, a.y, a.z), V(R.thickBedDropX, ty, a.z), V(R.thickBedRiserX, ty, a.z), V(R.thickBedRiserX, b.y, a.z), V(R.thickBedRiserX, b.y, b.z), b];
  } else if (spec.id === 'p-bed-return') {
    const ty = R.trenchY;
    pts = [a, V(a.x, ty, a.z), V(R.returnX, ty, a.z), V(R.returnX, ty, R.returnZ), V(b.x, ty, R.returnZ), V(b.x, ty, b.z), b];
  } else if (spec.id === 'p-dosC-coag' || spec.id === 'p-dosF-floc') {
    const cy = spec.id === 'p-dosC-coag' ? R.chemY.coag : R.chemY.floc;
    pts = [a, V(a.x, cy, a.z), V(a.x, cy, b.z), V(b.x, cy, b.z), b];
  } else if (spec.id === 'p-inter-pumpB') {
    const tx = -4.6;
    pts = [a, V(tx, a.y, a.z), V(tx, a.y, b.z), b];
  } else if (spec.id === 'p-pumpB-header') {
    pts = [a, V(a.x, b.y, a.z), b];
  } else if (spec.id === 'p-clar1-inter' || spec.id === 'p-clar2-mbbr') {
    pts = [a, V(b.x, a.y, a.z), b];
  } else if (spec.id === 'p-mbbr-filtro') {
    const z1 = a.z + 0.7;
    pts = [a, V(a.x, a.y, z1), V(a.x, b.y, z1), V(a.x, b.y, b.z), b];
  } else {
    // Genérico: x → z a la cota de origen, luego vertical.
    pts = [a, V(b.x, a.y, a.z), V(b.x, a.y, b.z), b];
  }
  return simplify(pts);
}

/** Elimina puntos repetidos y vértices colineales. */
export function simplify(pts: THREE.Vector3[]): THREE.Vector3[] {
  const out: THREE.Vector3[] = [];
  for (const p of pts) if (!out.length || out[out.length - 1].distanceTo(p) > 1e-4) out.push(p.clone());
  for (let i = out.length - 2; i >= 1; i--) {
    const d1 = out[i].clone().sub(out[i - 1]).normalize();
    const d2 = out[i + 1].clone().sub(out[i]).normalize();
    if (d1.dot(d2) > 0.9999) out.splice(i, 1);
  }
  return out;
}

export function polylineLength(pts: THREE.Vector3[]): number {
  let L = 0;
  for (let i = 1; i < pts.length; i++) L += pts[i].distanceTo(pts[i - 1]);
  return L;
}

/* ------------------------------------------------------------------ */
/* Geometría de tubo ortogonal                                          */
/* ------------------------------------------------------------------ */

interface Ring { c: THREE.Vector3; t: THREE.Vector3; n: THREE.Vector3; s: number }

const UP = new THREE.Vector3(0, 1, 0);

function horizNormal(t: THREE.Vector3): THREE.Vector3 {
  return UP.clone().addScaledVector(t, -t.y).normalize();
}

/** Interpola dos vectores horizontales unitarios girando alrededor del eje vertical. */
function slerpH(a: THREE.Vector3, b: THREE.Vector3, k: number): THREE.Vector3 {
  const a0 = Math.atan2(a.z, a.x);
  let d = Math.atan2(b.z, b.x) - a0;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  const ang = a0 + d * k;
  return new THREE.Vector3(Math.cos(ang), 0, Math.sin(ang));
}

function buildRings(P: THREE.Vector3[], cornerR: number, K = 8): Ring[] {
  const n = P.length;
  const d: THREE.Vector3[] = [], L: number[] = [], S: number[] = [0];
  for (let i = 0; i < n - 1; i++) {
    const v = P[i + 1].clone().sub(P[i]);
    L.push(v.length());
    d.push(v.normalize());
    S.push(S[i] + L[i]);
  }
  const rc: number[] = new Array(n).fill(0);
  for (let i = 1; i < n - 1; i++) rc[i] = Math.min(cornerR, 0.45 * L[i - 1], 0.45 * L[i]);
  const isV = (v: THREE.Vector3) => Math.abs(v.y) > 0.999;
  const rings: Ring[] = [];
  for (let i = 0; i < n - 1; i++) {
    const a = P[i].clone().addScaledVector(d[i], rc[i]);
    const b = P[i + 1].clone().addScaledVector(d[i], -rc[i + 1]);
    const sa = S[i] + rc[i], sb = S[i + 1] - rc[i + 1];
    if (isV(d[i])) {
      const vy = Math.sign(d[i].y);
      const hp = i > 0 && !isV(d[i - 1]) ? d[i - 1].clone().multiplyScalar(-vy) : null;
      const hn = i < n - 2 && !isV(d[i + 1]) ? d[i + 1].clone().multiplyScalar(-vy) : null;
      const Na = hp ?? hn ?? new THREE.Vector3(1, 0, 0);
      const Nb = hn ?? Na;
      const steps = Na.dot(Nb) > 0.999 ? 1 : 12;
      for (let k = 0; k <= steps; k++) {
        const f = k / steps;
        rings.push({ c: a.clone().lerp(b, f), t: d[i].clone(), n: slerpH(Na, Nb, f), s: sa + (sb - sa) * f });
      }
    } else {
      rings.push({ c: a, t: d[i].clone(), n: horizNormal(d[i]), s: sa });
      rings.push({ c: b, t: d[i].clone(), n: horizNormal(d[i]), s: sb });
    }
    if (i < n - 2 && rc[i + 1] > 1e-4) {
      const din = d[i], dout = d[i + 1], r = rc[i + 1], Vx = P[i + 1];
      const C = Vx.clone().addScaledVector(din, -r).addScaledVector(dout, r);
      for (let k = 1; k < K; k++) {
        const th = (k / K) * Math.PI / 2;
        const c = C.clone().addScaledVector(dout, -r * Math.cos(th)).addScaledVector(din, r * Math.sin(th));
        const t = din.clone().multiplyScalar(Math.cos(th)).addScaledVector(dout, Math.sin(th)).normalize();
        rings.push({ c, t, n: horizNormal(t), s: S[i + 1] - r + 2 * r * (k / K) });
      }
    }
  }
  return rings;
}

/** Acumulador de geometría con atributo aS (para fusionar tubo + bridas + accesorios en una malla). */
class TubeGeo {
  pos: number[] = []; nrm: number[] = []; uv: number[] = []; aS: number[] = []; idx: number[] = [];
  constructor(public length: number) {}

  addRings(rings: Ring[], R: number, RS = 14): void {
    const base = this.pos.length / 3;
    for (const r of rings) {
      const bvec = new THREE.Vector3().crossVectors(r.n, r.t); // n × t
      for (let j = 0; j <= RS; j++) {
        const v = (j / RS) * Math.PI * 2;
        const nx = Math.cos(v) * r.n.x + Math.sin(v) * bvec.x;
        const ny = Math.cos(v) * r.n.y + Math.sin(v) * bvec.y;
        const nz = Math.cos(v) * r.n.z + Math.sin(v) * bvec.z;
        this.pos.push(r.c.x + R * nx, r.c.y + R * ny, r.c.z + R * nz);
        this.nrm.push(nx, ny, nz);
        this.uv.push(r.s / this.length, j / RS);
        this.aS.push(r.s);
      }
    }
    for (let i = 1; i < rings.length; i++) {
      for (let j = 1; j <= RS; j++) {
        const a = base + (RS + 1) * (i - 1) + (j - 1);
        const b = base + (RS + 1) * i + (j - 1);
        const c = base + (RS + 1) * i + j;
        const d = base + (RS + 1) * (i - 1) + j;
        this.idx.push(a, b, d, b, c, d);
      }
    }
  }

  /** Añade una geometría indexada con aS constante (bridas, accesorios). uv.y = 0.5 → sin chevrones. */
  addStatic(g: THREE.BufferGeometry, m: THREE.Matrix4, s: number): void {
    const gg = g.index ? g : g;
    const p = gg.attributes.position, nn = gg.attributes.normal;
    const nm = new THREE.Matrix3().getNormalMatrix(m);
    const base = this.pos.length / 3;
    const v = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i).applyMatrix4(m);
      this.pos.push(v.x, v.y, v.z);
      v.fromBufferAttribute(nn, i).applyMatrix3(nm).normalize();
      this.nrm.push(v.x, v.y, v.z);
      this.uv.push(s / this.length, 0.5);
      this.aS.push(s);
    }
    if (gg.index) for (let i = 0; i < gg.index.count; i++) this.idx.push(base + gg.index.getX(i));
    else for (let i = 0; i < p.count; i++) this.idx.push(base + i);
  }

  build(): THREE.BufferGeometry {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nrm, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setAttribute('aS', new THREE.Float32BufferAttribute(this.aS, 1));
    g.setIndex(this.idx);
    g.computeBoundingSphere();
    return g;
  }
}

/** Matriz que orienta un cilindro (eje Y) a lo largo de `dir`, centrado en `p`. */
function alongMatrix(p: THREE.Vector3, dir: THREE.Vector3, len = 1): THREE.Matrix4 {
  const q = new THREE.Quaternion().setFromUnitVectors(UP, dir.clone().normalize());
  return new THREE.Matrix4().compose(p, q, new THREE.Vector3(1, len, 1));
}

/* ------------------------------------------------------------------ */
/* PipeRun                                                              */
/* ------------------------------------------------------------------ */

class PipeTube {
  members: { run: PipeRunImpl; offset: number }[] = [];
  constructor(public mesh: THREE.Mesh, public uniforms: ReturnType<typeof createPipeMaterial>['uniforms'], public length: number) {}

  refresh(t: number): void {
    let flow = 0, front = 0, hi = false, vis = false;
    for (const m of this.members) {
      const r = m.run;
      if (!r.visibleFlag) continue;
      vis = true;
      flow = Math.max(flow, r.flowValue);
      front = Math.max(front, Math.min(this.length, Math.max(0, r.frontValue * r.length - m.offset)));
      hi = hi || r.highlighted;
    }
    const u = this.uniforms;
    u.uTime.value = t;
    u.uFlow.value = flow;
    u.uFront.value = front;
    u.uHighlight.value = hi ? 1 : 0;
    this.mesh.visible = vis;
  }
}

class PipeRunImpl implements PipeRun {
  root = new THREE.Group();
  length: number;
  flowValue = 0;
  frontValue = 0;
  highlighted = false;
  visibleFlag = true;
  tubes: PipeTube[] = [];
  private cum: number[] = [0];

  constructor(public id: string, public kind: LineKind, public from: UnitId | 'world', public to: UnitId | 'world', public points: THREE.Vector3[]) {
    for (let i = 1; i < points.length; i++) this.cum.push(this.cum[i - 1] + points[i].distanceTo(points[i - 1]));
    this.length = this.cum[this.cum.length - 1];
    this.root.name = id;
  }

  pointAt(u: number): THREE.Vector3 {
    const d = clamp01(u) * this.length;
    let i = 1;
    while (i < this.cum.length - 1 && this.cum[i] < d) i++;
    const seg = this.cum[i] - this.cum[i - 1];
    const f = seg > 1e-9 ? (d - this.cum[i - 1]) / seg : 0;
    return this.points[i - 1].clone().lerp(this.points[i], f);
  }

  setFlow(x: number): void { this.flowValue = clamp01(x); }
  setFront(x: number): void { this.frontValue = clamp01(x); }
  setHighlighted(on: boolean): void { this.highlighted = on; }
  setVisible(on: boolean): void { this.visibleFlag = on; for (const t of this.tubes) t.refresh(t.uniforms.uTime.value); }
  update(t: number): void { for (const tube of this.tubes) tube.refresh(t); }
}

/* ------------------------------------------------------------------ */
/* Descomposición en cadenas únicas                                     */
/* ------------------------------------------------------------------ */

interface Chain {
  points: THREE.Vector3[];
  owners: string[];
  members: { id: string; offset: number }[];
  kind: LineKind;
  /** El inicio/fin coincide con un nudo interior (tee) de algún miembro. */
  startJunction: boolean;
  endJunction: boolean;
}

const pkey = (p: THREE.Vector3) => `${p.x.toFixed(3)},${p.y.toFixed(3)},${p.z.toFixed(3)}`;

function onSegmentInterior(p: THREE.Vector3, a: THREE.Vector3, b: THREE.Vector3): number | null {
  const ab = b.clone().sub(a);
  const L = ab.length();
  if (L < 1e-6) return null;
  const t = p.clone().sub(a).dot(ab) / (L * L);
  if (t <= 1e-6 || t >= 1 - 1e-6) return null;
  const q = a.clone().addScaledVector(ab, t);
  return q.distanceTo(p) < 1e-4 ? t : null;
}

export interface PipeGeomInput { id: string; kind: LineKind; points: THREE.Vector3[]; group: string | null }

export function decomposeChains(pipes: PipeGeomInput[]): Chain[] {
  const chains: Chain[] = [];
  const groups = new Map<string, PipeGeomInput[]>();
  for (const p of pipes) {
    const g = p.group;
    if (g && pipes.filter(q => q.group === g).length > 1) {
      if (!groups.has(g)) groups.set(g, []);
      groups.get(g)!.push(p);
    } else {
      chains.push({ points: p.points.map(v => v.clone()), owners: [p.id], members: [{ id: p.id, offset: 0 }], kind: p.kind, startJunction: false, endJunction: false });
    }
  }
  for (const list of groups.values()) {
    const verts = list.flatMap(p => p.points);
    // Atomizar cada polilínea en los vértices de todo el grupo
    const atomized = new Map<string, THREE.Vector3[]>();
    for (const p of list) {
      const out: THREE.Vector3[] = [p.points[0].clone()];
      for (let i = 1; i < p.points.length; i++) {
        const a = p.points[i - 1], b = p.points[i];
        const inner = verts.map(v => ({ v, t: onSegmentInterior(v, a, b) })).filter(x => x.t !== null) as { v: THREE.Vector3; t: number }[];
        inner.sort((x, y) => x.t - y.t);
        for (const x of inner) if (out[out.length - 1].distanceTo(x.v) > 1e-4) out.push(x.v.clone());
        out.push(b.clone());
      }
      atomized.set(p.id, out);
    }
    const owners = new Map<string, Set<string>>();
    for (const [id, pts] of atomized) {
      for (let i = 1; i < pts.length; i++) {
        const k = pkey(pts[i - 1]) + '>' + pkey(pts[i]);
        if (!owners.has(k)) owners.set(k, new Set());
        owners.get(k)!.add(id);
      }
    }
    const byKey = new Map<string, Chain>();
    for (const p of list) {
      const pts = atomized.get(p.id)!;
      let i = 1, dist = 0;
      while (i < pts.length) {
        const own = [...owners.get(pkey(pts[i - 1]) + '>' + pkey(pts[i]))!].sort();
        const ok = own.join('|');
        const run: THREE.Vector3[] = [pts[i - 1]];
        const startDist = dist;
        while (i < pts.length && [...owners.get(pkey(pts[i - 1]) + '>' + pkey(pts[i]))!].sort().join('|') === ok) {
          dist += pts[i].distanceTo(pts[i - 1]);
          run.push(pts[i]);
          i++;
        }
        const ck = ok + '@' + pkey(run[0]);
        let c = byKey.get(ck);
        if (!c) {
          c = {
            points: simplify(run), owners: own, members: [], kind: p.kind,
            startJunction: startDist > 1e-6, endJunction: i < pts.length,
          };
          byKey.set(ck, c);
          chains.push(c);
        }
        c.members.push({ id: p.id, offset: startDist });
      }
    }
  }
  return chains;
}

/* ------------------------------------------------------------------ */
/* Construcción                                                         */
/* ------------------------------------------------------------------ */

export interface PipeRunOptions {
  /** Polilínea precalculada (si no, se usa routePipe). */
  points?: THREE.Vector3[];
  radius?: number;
}

function radiusFor(kind: LineKind, trunk: boolean): number {
  if (kind === 'chemical') return ROUTING.chemR;
  if (trunk) return kind === 'sludge' ? ROUTING.sludgeR * 1.2 : ROUTING.trunkR;
  return kind === 'sludge' || kind === 'return' ? ROUTING.sludgeR : ROUTING.pipeR;
}

/** Radio con que se dibuja/valida una línea (exportado para collisionCheck). */
export function pipeRadius(kind: LineKind): number {
  return radiusFor(kind, kind === 'pumped' || kind === 'anaerobic' || kind === 'biogas');
}

/** Crea la malla de una cadena (tubo + bridas en extremos con unidad + accesorios en nudos). */
function buildTube(c: Chain, R: number, opts: { flangeStart: boolean; flangeEnd: boolean; junctionR: number }): PipeTube {
  const L = polylineLength(c.points);
  const geo = new TubeGeo(L);
  const rings = buildRings(c.points, ROUTING.cornerR);
  geo.addRings(rings, R);
  const disc = new THREE.CylinderGeometry(1, 1, 1, 22);
  const first = rings[0], last = rings[rings.length - 1];
  const fl = (p: THREE.Vector3, t: THREE.Vector3, s: number) => {
    const m = alongMatrix(p, t, 0.045).multiply(new THREE.Matrix4().makeScale(R * 1.65, 1, R * 1.65));
    geo.addStatic(disc, m, s);
  };
  if (opts.flangeStart) fl(first.c.clone().addScaledVector(first.t, 0.0225), first.t, 0);
  if (opts.flangeEnd) fl(last.c.clone().addScaledVector(last.t, -0.0225), last.t, L);
  const ball = new THREE.SphereGeometry(1, 16, 12);
  const collar = (p: THREE.Vector3, t: THREE.Vector3, s: number) => {
    geo.addStatic(ball, new THREE.Matrix4().compose(p, new THREE.Quaternion(), new THREE.Vector3().setScalar(opts.junctionR * 1.18)), s);
    const m = alongMatrix(p.clone().addScaledVector(t, s === 0 ? 0.1 : -0.1), t, 0.1).multiply(new THREE.Matrix4().makeScale(R * 1.3, 1, R * 1.3));
    geo.addStatic(disc, m, s);
  };
  if (c.startJunction) collar(first.c, first.t, 0);
  if (c.endJunction) collar(last.c, last.t, L);
  const col = LINE_COLORS[c.kind];
  const { material, uniforms } = createPipeMaterial(col.pipe, col.fluid);
  uniforms.uLength.value = L;
  const mesh = new THREE.Mesh(geo.build(), material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return new PipeTube(mesh, uniforms, L);
}

/** Crea una tubería autónoma (sin troncales compartidos): toda su geometría en su propio root. */
export function createPipeRun(spec: PipeSpec, fromPoint: THREE.Vector3, toPoint: THREE.Vector3, opts: PipeRunOptions = {}): PipeRun {
  const points = opts.points ?? routePipe(spec, fromPoint, toPoint);
  const run = new PipeRunImpl(spec.id, spec.kind, spec.from, spec.to, points);
  const R = opts.radius ?? radiusFor(spec.kind, false);
  const tube = buildTube({ points, owners: [spec.id], members: [{ id: spec.id, offset: 0 }], kind: spec.kind, startJunction: false, endJunction: false }, R,
    { flangeStart: spec.from !== 'world', flangeEnd: spec.to !== 'world', junctionR: R });
  tube.members.push({ run, offset: 0 });
  tube.mesh.userData.pipeId = spec.id;
  run.root.add(tube.mesh);
  run.tubes.push(tube);
  return run;
}

export interface PipeNetwork {
  root: THREE.Group;
  pipes: Record<string, PipeRun>;
  /** Huellas de los postes/durmientes de soporte (para validar rutas de personas y camiones). */
  supports: Footprint[];
}

/**
 * Red completa: trazado, descomposición en cadenas, mallas, soportes y válvulas decorativas.
 * `ports(spec)` devuelve [origen, destino] en mundo. `avoid` = huellas donde no se apoyan soportes.
 */
export function buildPipeNetwork(specs: PipeSpec[], ports: (s: PipeSpec) => [THREE.Vector3, THREE.Vector3], avoid: Footprint[]): PipeNetwork {
  const root = new THREE.Group();
  root.name = 'pipes';
  const runs = new Map<string, PipeRunImpl>();
  const inputs: PipeGeomInput[] = [];
  for (const s of specs) {
    const [a, b] = ports(s);
    const pts = routePipe(s, a, b);
    runs.set(s.id, new PipeRunImpl(s.id, s.kind, s.from, s.to, pts));
    // Grupo de troncal: misma impulsión (origen) o mismo destino de colector
    const sameFrom = specs.filter(q => q.from === s.from && q.fromPort === s.fromPort && q.from !== 'world').length > 1;
    const sameTo = specs.filter(q => q.to === s.to && q.toPort === s.toPort && q.to !== 'world').length > 1;
    const group = sameFrom ? `from:${s.from}.${s.fromPort}` : sameTo ? `to:${s.to}.${s.toPort}` : null;
    inputs.push({ id: s.id, kind: s.kind, points: pts, group });
  }
  const specById = new Map(specs.map(s => [s.id, s]));
  const chains = decomposeChains(inputs);
  const supportFp: Footprint[] = [];
  const statics = new Batcher();
  for (const c of chains) {
    const trunk = c.owners.length > 1;
    const R = radiusFor(c.kind, trunk);
    const m0 = c.members[0];
    const run0 = runs.get(m0.id)!;
    const spec0 = specById.get(m0.id)!;
    const flangeStart = !c.startJunction && spec0.from !== 'world';
    const lastMember = specById.get(c.members[c.members.length - 1].id)!;
    const flangeEnd = !c.endJunction && spec0.to !== 'world' && lastMember.toPort !== 'header';
    const tube = buildTube(c, R, { flangeStart, flangeEnd, junctionR: ROUTING.trunkR });
    for (const m of c.members) {
      const r = runs.get(m.id)!;
      tube.members.push({ run: r, offset: m.offset });
      r.tubes.push(tube);
    }
    tube.mesh.userData.pipeIds = c.owners;
    run0.root.add(tube.mesh);
    addSupports(statics, c.points, R, avoid, supportFp);
    addTrenchCovers(statics, c.points);
  }
  addValves(statics, runs, chains);
  // Tee de llegada de P-01B a la subida de descarga de P-01
  const hb = runs.get('p-pumpB-header');
  if (hb) {
    const p = hb.points[hb.points.length - 1];
    statics.add(new THREE.SphereGeometry(ROUTING.trunkR * 1.25, 16, 12), MAT.steelDark, T(p.x, p.y, p.z));
  }
  // Extremo abierto de la descarga al exterior: brida y anillo
  const out = runs.get('p-outfall');
  if (out) {
    const p = out.points[out.points.length - 1];
    statics.add(cyl(ROUTING.pipeR * 1.6, 0.05, 22), MAT.steelDark, T(p.x, p.y, p.z - 0.025, Math.PI / 2, 0, 0));
  }
  for (const r of runs.values()) root.add(r.root);
  const sm = statics.build(root);
  for (const m of sm) m.name = 'pipe-supports';
  const pipes: Record<string, PipeRun> = {};
  for (const [id, r] of runs) pipes[id] = r;
  root.userData.supports = supportFp;
  return { root, pipes, supports: supportFp };
}

/* ------------------------------------------------------------------ */
/* Soportes y válvulas (estáticos)                                      */
/* ------------------------------------------------------------------ */

function inFootprints(x: number, z: number, avoid: Footprint[], pad: number): boolean {
  return avoid.some(f => x > f.min[0] - pad && x < f.max[0] + pad && z > f.min[2] - pad && z < f.max[2] + pad);
}

/** Tapa de rejilla a nivel de losa sobre los tramos en zanja (y < 0), con angulares de borde. */
function addTrenchCovers(b: Batcher, pts: THREE.Vector3[]): void {
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], c = pts[i];
    if (a.y >= 0 || c.y >= 0) continue;
    const ax = new THREE.Vector3().subVectors(c, a).setY(0);
    const L = ax.length();
    if (L < 1e-3) continue;
    const ext = 0.25;
    const ry = Math.atan2(ax.x, ax.z);
    const m = a.clone().add(c).multiplyScalar(0.5);
    b.add(rbox(0.56, 0.03, L + ext * 2, 0.008), MAT.grating, T(m.x, 0.028, m.z, 0, ry, 0));
    const perp = new THREE.Vector3(Math.cos(ry), 0, -Math.sin(ry));
    for (const s of [-1, 1]) {
      const q = m.clone().addScaledVector(perp, s * 0.3);
      b.add(rbox(0.05, 0.035, L + ext * 2, 0.008), MAT.steelDark, T(q.x, 0.02, q.z, 0, ry, 0));
    }
    // barras transversales de la rejilla (lectura de «grating» de cerca)
    const n = Math.floor((L + ext * 2) / 0.18);
    const dir = ax.clone().normalize();
    for (let k = 0; k <= n; k++) {
      const q = a.clone().addScaledVector(dir, -ext + k * 0.18);
      b.add(rbox(0.54, 0.012, 0.025, 0.004), MAT.steelDark, T(q.x, 0.046, q.z, 0, ry, 0));
    }
  }
}

function addSupports(b: Batcher, pts: THREE.Vector3[], R: number, avoid: Footprint[], out: Footprint[]): void {
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], c = pts[i];
    if (Math.abs(a.y - c.y) > 1e-3) continue;
    if (a.y < 0) continue; // tramo en zanja: sin soportes
    const L = a.distanceTo(c);
    if (L < 1.4) continue;
    const y = a.y;
    const dir = c.clone().sub(a).normalize();
    const perp = new THREE.Vector3(-dir.z, 0, dir.x);
    const n = Math.max(1, Math.round(L / 3.0));
    for (let k = 0; k < n; k++) {
      const f = (k + 0.5) / n;
      const p = a.clone().lerp(c, f);
      if (inFootprints(p.x, p.z, avoid, 0.3)) continue;
      const ry = Math.atan2(perp.x, perp.z);
      if (y - R < 0.55) {
        // Durmiente de concreto bajo líneas bajas
        const h = Math.max(0.05, y - R);
        b.add(rbox(0.22, h, 0.42, 0.03), MAT.concreteDark, T(p.x, h / 2, p.z, 0, ry, 0));
        out.push({ min: [p.x - 0.22, 0, p.z - 0.22], max: [p.x + 0.22, y + R, p.z + 0.22] });
        continue;
      }
      const heavy = y > 3.0;
      const w = heavy ? 0.13 : 0.08;
      const top = y - R - 0.06;
      b.add(rbox(w, top, w, 0.015), MAT.steelBlue, T(p.x, top / 2, p.z));
      out.push({ min: [p.x - w * 1.3, 0, p.z - w * 1.3], max: [p.x + w * 1.3, y + R, p.z + w * 1.3] });
      b.add(rbox(w * 2.6, 0.03, w * 2.6, 0.01), MAT.steelDark, T(p.x, 0.015, p.z));
      b.add(rbox(heavy ? 0.7 : 0.42, 0.06, 0.07, 0.012), MAT.steelBlue, T(p.x, top + 0.03, p.z, 0, ry + Math.PI / 2, 0));
      // Abrazadera
      const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
      b.add(new THREE.TorusGeometry(R + 0.012, 0.012, 6, 18), MAT.steel, new THREE.Matrix4().compose(p, q, new THREE.Vector3(1, 1, 1)));
      if (heavy) {
        // Riostra en rodilla
        const k1 = p.clone().setY(top - 0.55).addScaledVector(perp, 0);
        const k2 = p.clone().setY(top).addScaledVector(perp, 0.3);
        b.rod(k1, k2, 0.025, MAT.steelBlue, 6);
      }
    }
  }
}

function gateValve(b: Batcher, p: THREE.Vector3, axis: THREE.Vector3, R: number, stem: THREE.Vector3): void {
  const m = alongMatrix(p, axis, 0.2);
  b.add(cyl(R * 1.75, 1, 20), MAT.steelDark, m);
  b.add(new THREE.SphereGeometry(R * 1.55, 16, 10), MAT.steelDark, T(p.x, p.y, p.z));
  const s1 = p.clone().addScaledVector(stem, R * 1.5), s2 = p.clone().addScaledVector(stem, R * 1.5 + 0.22);
  b.rod(s1, s2, 0.025, MAT.steel, 8);
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), stem);
  b.add(new THREE.TorusGeometry(0.1, 0.016, 8, 24), MAT.rail, new THREE.Matrix4().compose(s2, q, new THREE.Vector3(1, 1, 1)));
}

function butterflyValve(b: Batcher, p: THREE.Vector3, axis: THREE.Vector3, R: number): void {
  b.add(cyl(R * 1.9, 1, 22), MAT.steelDark, alongMatrix(p, axis, 0.09));
  const top = p.clone().setY(p.y + R * 1.9);
  b.rod(top, top.clone().setY(top.y + 0.1), 0.02, MAT.steel, 6);
  const side = new THREE.Vector3(-axis.z, 0, axis.x).normalize();
  b.rod(top.clone().setY(top.y + 0.1), top.clone().setY(top.y + 0.1).addScaledVector(axis, 0.22).addScaledVector(side, 0.0), 0.016, MAT.rail, 6);
}

function addValves(b: Batcher, runs: Map<string, PipeRunImpl>, chains: Chain[]): void {
  // Impulsión: válvula de retención (bulbo) y de compuerta en la subida de la bomba
  const riser = chains.find(c => c.owners.length === 4 && c.kind === 'pumped');
  if (riser && riser.points.length > 1) {
    const a = riser.points[0];
    gateValve(b, new THREE.Vector3(a.x, 1.75, a.z), UP, ROUTING.trunkR, new THREE.Vector3(0, 0, 1));
    b.add(cyl(ROUTING.trunkR * 1.5, 0.26, 18), MAT.steelDark, T(a.x, 1.25, a.z));
  }
  // Válvula de mariposa de reparto en cada ramal UASB (tramo norte-sur antes de la bajada)
  for (const c of chains) {
    if (c.kind !== 'pumped' || c.owners.length !== 1) continue;
    const pts = c.points;
    for (let i = 1; i < pts.length; i++) {
      const d = pts[i].clone().sub(pts[i - 1]);
      if (Math.abs(d.z) > 1.0 && Math.abs(d.y) < 1e-3) {
        butterflyValve(b, pts[i - 1].clone().lerp(pts[i], 0.5), d.normalize(), ROUTING.pipeR);
        break;
      }
    }
  }
  // Succión de las bombas: válvula de compuerta en cada ramal (tras la tee del colector de succión)
  const suc = runs.get('p-inter-pump');
  if (suc) {
    const p = suc.pointAt(0.78);
    gateValve(b, p, new THREE.Vector3(1, 0, 0), ROUTING.pipeR, UP);
  }
  const sucB = runs.get('p-inter-pumpB');
  if (sucB) {
    const last = sucB.points[sucB.points.length - 1], prev = sucB.points[sucB.points.length - 2];
    gateValve(b, prev.clone().lerp(last, 0.45), new THREE.Vector3(1, 0, 0), ROUTING.pipeR, UP);
  }
  // Descarga de P-01B: retención y compuerta en su subida (como P-01)
  const disB = runs.get('p-pumpB-header');
  if (disB) {
    const a = disB.points[0];
    gateValve(b, new THREE.Vector3(a.x, 1.75, a.z), UP, ROUTING.pipeR, new THREE.Vector3(0, 0, 1));
    b.add(cyl(ROUTING.pipeR * 1.5, 0.26, 18), MAT.steelDark, T(a.x, 1.25, a.z));
  }
  // Biogás: válvula de bola en cada subida de domo y válvula de aislamiento antes de QB-201
  for (const [id, r] of runs) {
    if (!id.startsWith('p-gas-')) continue;
    const a = r.points[0];
    gateValve(b, new THREE.Vector3(a.x, a.y + 0.45, a.z), UP, ROUTING.pipeR, new THREE.Vector3(0, 0, 1));
  }
  const g1 = runs.get('p-gas-uasb1');
  if (g1) {
    const e = g1.points[g1.points.length - 1];
    gateValve(b, new THREE.Vector3(e.x, 3.3, e.z), UP, ROUTING.trunkR, new THREE.Vector3(1, 0, 0));
  }
}
