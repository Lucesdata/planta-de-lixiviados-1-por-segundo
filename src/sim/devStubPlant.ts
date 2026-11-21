/**
 * Planta y mundo de RESPALDO (desarrollo / pruebas en Node). Geometría mínima desde layout.ts:
 * cajas y cilindros + polilíneas ortogonales. No reemplaza a la geometría del Agente A.
 */
import * as THREE from 'three';
import type { Actors, ActorRoute, Plant, PlantUnit, PipeRun, TruckKind, TruckRig, UnitId, UnitStatus, WorkerRig } from '../plant/types';
import { UNITS, INLET_POINT, SITE, ROAD } from '../plant/layout';
import { PIPES, LINE_COLORS } from '../plant/processFlow';

function polyPointAt(points: THREE.Vector3[], u: number): THREE.Vector3 {
  let total = 0;
  const lens: number[] = [];
  for (let i = 1; i < points.length; i++) { const l = points[i].distanceTo(points[i - 1]); lens.push(l); total += l; }
  let s = Math.max(0, Math.min(1, u)) * total;
  for (let i = 0; i < lens.length; i++) {
    if (s <= lens[i] || i === lens.length - 1) return points[i].clone().lerp(points[i + 1], lens[i] > 0 ? Math.min(1, s / lens[i]) : 1);
    s -= lens[i];
  }
  return points[points.length - 1].clone();
}

export function buildStubPlant(): Plant {
  const root = new THREE.Group();
  root.name = 'stub-plant';
  const units = {} as Record<UnitId, PlantUnit>;
  for (const s of UNITS) {
    const g = new THREE.Group();
    const w = s.size.d ?? s.size.w ?? 1, l = s.size.d ?? s.size.l ?? 1, h = s.size.h;
    const mat = new THREE.MeshStandardMaterial({ color: 0x7c8a8f, roughness: 0.8, metalness: 0.1 });
    const geo = s.size.d ? new THREE.CylinderGeometry(w / 2, w / 2, h, 28) : new THREE.BoxGeometry(w, h, l);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(s.pos[0], s.base + h / 2, s.pos[1]);
    g.add(mesh);
    root.add(g);
    const top = s.base + h;
    const anchors: Record<string, THREE.Vector3> = {
      label: new THREE.Vector3(s.pos[0], top + 0.6, s.pos[1]),
      focus: new THREE.Vector3(s.pos[0], s.base + h / 2, s.pos[1]),
      core: new THREE.Vector3(s.pos[0], s.base + h / 2, s.pos[1]),
      in: new THREE.Vector3(s.pos[0] - w / 2, s.base + Math.min(h * 0.6, 1.0), s.pos[1]),
      out: new THREE.Vector3(s.pos[0] + w / 2, s.base + Math.min(h * 0.6, 1.0), s.pos[1]),
      sludge: new THREE.Vector3(s.pos[0], 0.25, s.pos[1] - l / 2),
    };
    let active = false, selected = false;
    const refresh = () => {
      mat.color.set(selected ? 0x9fc4c8 : active ? 0x8fa0a4 : 0x6a777b);
      mat.emissive.set(selected ? 0x0c2a2e : 0x000000);
    };
    units[s.id] = {
      id: s.id, root: g, anchors, radius: Math.max(w, l, h) / 2,
      footprint: { min: [s.pos[0] - w / 2, 0, s.pos[1] - l / 2], max: [s.pos[0] + w / 2, top, s.pos[1] + l / 2] },
      pickTargets: [mesh],
      setActive(on) { active = on; refresh(); },
      setSelected(on) { selected = on; refresh(); },
      setFlowLevel() {}, setInternalMotion() {}, setStatus(_m: UnitStatus) {},
      update() {},
    };
  }
  const pipes: Record<string, PipeRun> = {};
  const pipesLayer = new THREE.Group();
  root.add(pipesLayer);
  for (const p of PIPES) {
    const a = p.from === 'world' ? new THREE.Vector3(INLET_POINT[0], 1.0, INLET_POINT[1]) : units[p.from].anchors[p.fromPort] ?? units[p.from].anchors.out;
    const b = p.to === 'world' ? new THREE.Vector3(units.discharge.anchors.out.x - 0.5, 0.4, SITE.maxZ - 0.5) : units[p.to].anchors[p.toPort] ?? units[p.to].anchors.in;
    const mx = (a.x + b.x) / 2;
    const pts = [a.clone(), new THREE.Vector3(mx, a.y, a.z), new THREE.Vector3(mx, a.y, b.z), new THREE.Vector3(mx, b.y, b.z), b.clone()]
      .filter((v, i, arr) => i === 0 || v.distanceTo(arr[i - 1]) > 1e-4);
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: LINE_COLORS[p.kind].pipe, roughness: 0.6 });
    for (let i = 1; i < pts.length; i++) {
      const len = pts[i].distanceTo(pts[i - 1]);
      const m = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, len, 8), mat);
      m.position.copy(pts[i]).add(pts[i - 1]).multiplyScalar(0.5);
      m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pts[i].clone().sub(pts[i - 1]).normalize());
      g.add(m);
    }
    pipesLayer.add(g);
    let length = 0;
    for (let i = 1; i < pts.length; i++) length += pts[i].distanceTo(pts[i - 1]);
    let front = 0, hl = false;
    const refresh = () => {
      mat.color.set(front >= 1 ? LINE_COLORS[p.kind].fluid : LINE_COLORS[p.kind].pipe);
      mat.emissive.set(hl ? 0x1d3f44 : 0x000000);
    };
    pipes[p.id] = {
      id: p.id, kind: p.kind, from: p.from, to: p.to, root: g, points: pts, length,
      pointAt: u => polyPointAt(pts, u),
      setFlow() {}, setFront(x) { front = x; refresh(); }, setHighlighted(on) { hl = on; refresh(); },
      setVisible(on) { g.visible = on; }, update() {},
    };
  }
  const structures = new THREE.Group();
  root.add(structures);
  const slab = new THREE.Mesh(new THREE.BoxGeometry(SITE.maxX - SITE.minX, 0.1, SITE.maxZ - SITE.minZ), new THREE.MeshStandardMaterial({ color: 0x3a4246 }));
  slab.position.set((SITE.maxX + SITE.minX) / 2, -0.05, (SITE.maxZ + SITE.minZ) / 2);
  structures.add(slab);
  const actors = buildStubActors();
  root.add(actors.root);
  return {
    root, units, pipes,
    bounds: { min: [SITE.minX, 0, SITE.minZ], max: [SITE.maxX, 4, SITE.maxZ] },
    layers: { pipes: pipesLayer, structures },
    actors,
    update() {},
  };
}

// ———————————————————— Actores de respaldo (rutas rectas, cápsulas y cajas) ————————————————————

/** Ruta poligonal con parametrización por longitud de arco. */
export function makeRoute(pts: THREE.Vector3[]): ActorRoute {
  let length = 0;
  const cum = [0];
  for (let i = 1; i < pts.length; i++) { length += pts[i].distanceTo(pts[i - 1]); cum.push(length); }
  const segAt = (u: number) => {
    const s = Math.max(0, Math.min(1, u)) * length;
    let i = 1;
    while (i < pts.length - 1 && cum[i] < s) i++;
    return { i, k: cum[i] > cum[i - 1] ? (s - cum[i - 1]) / (cum[i] - cum[i - 1]) : 1 };
  };
  return {
    points: pts, length,
    pointAt(u) { const { i, k } = segAt(u); return pts[i - 1].clone().lerp(pts[i], Math.min(1, Math.max(0, k))); },
    headingAt(u) { const { i } = segAt(u); const d = pts[i].clone().sub(pts[i - 1]); return Math.atan2(d.x, d.z); },
  };
}

const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
const flat = (xz: [number, number][], y = 0) => xz.map(([x, z]) => V(x, y, z));

/** Redondea los codos de una polilínea con arcos de radio r (acotado por los tramos). */
function fillet(pts: THREE.Vector3[], r: number): THREE.Vector3[] {
  if (pts.length < 3 || r <= 0) return pts;
  const out = [pts[0].clone()];
  for (let i = 1; i < pts.length - 1; i++) {
    const a = pts[i - 1], b = pts[i], c = pts[i + 1];
    const d1 = b.clone().sub(a), d2 = c.clone().sub(b);
    const l1 = d1.length(), l2 = d2.length();
    d1.normalize(); d2.normalize();
    const ang = Math.acos(Math.max(-1, Math.min(1, d1.dot(d2))));
    if (ang < 1e-3) { out.push(b.clone()); continue; }
    const tl = Math.min(r * Math.tan(ang / 2), l1 * 0.48, l2 * 0.48);
    const p0 = b.clone().addScaledVector(d1, -tl), p1 = b.clone().addScaledVector(d2, tl);
    const n = 8;
    for (let k = 0; k <= n; k++) {
      // Bézier cuadrática p0 → b → p1 (aproxima el arco).
      const u = k / n;
      out.push(p0.clone().multiplyScalar((1 - u) * (1 - u)).addScaledVector(b, 2 * u * (1 - u)).addScaledVector(p1, u * u));
    }
  }
  out.push(pts[pts.length - 1].clone());
  return out.filter((v, i, arr) => i === 0 || v.distanceTo(arr[i - 1]) > 1e-4);
}

/** Rutas de respaldo con los nombres de la interfaz (layout.ts). Libres de unidades en planta. */
export function buildStubRoutes(): Record<string, ActorRoute> {
  const L = ROAD.loop, cs = ROAD.chemStop, ss = ROAD.sludgeStop, z0 = ROAD.z, gx = ROAD.gate[0] - 5;
  // Lazo de un solo sentido (aprox. poligonal): entrada por z0 → este x=L.eastX → sur z=L.southZ → oeste x=L.westX → salida.
  const exitZ = z0 + 2.0;
  const R: Record<string, [number, number][]> = {
    'chem-arrive': [[gx, z0], [cs.x, cs.z]],
    'chem-leave': [[cs.x, cs.z], [L.eastX, z0], [L.eastX, L.southZ], [L.westX, L.southZ], [L.westX, exitZ], [gx, exitZ]],
    'sludge-arrive': [[gx, z0], [L.eastX, z0], [L.eastX, L.southZ], [ss.x, ss.z]],
    'sludge-leave': [[ss.x, ss.z], [L.westX, L.southZ], [L.westX, exitZ], [gx, exitZ]],
    'w-operator': [[-23, -4.1], [-23, -4.9], [-14.6, -4.9]],
    'w-unload': [[-24.5, -0.35], [-24.5, 0.4], [-26.6, 0.4], [-26.6, 1.6]],
    'w-bed-a': [[-21.0, 7.6], [-21.0, 9.3], [-20.0, 9.3], [-20.0, 9.9]],
    'w-bed-b': [[-23.2, 7.2], [-23.2, 9.3], [-22.4, 9.3]],
    'w-mbbr': [[13.5, -1.2], [16.6, -1.2]],
    'w-patrol': [[-6, -11.5], [18, -11.5], [18, -3], [-6, -3], [-6, -11.5]],
    'w-screen': [[-29.6, -9.0], [-27.0, -9.0], [-27.0, -10.5]],
  };
  const out: Record<string, ActorRoute> = {};
  for (const [k, v] of Object.entries(R)) out[k] = makeRoute(fillet(flat(v), k.includes('arrive') || k.includes('leave') ? 4 : 0.6));
  out['w-uasb'] = makeRoute(flat([[-9.2, -0.9], [4.0, -0.9]], 3.6));
  return out;
}

function stubWorker(id: string, color: number): WorkerRig {
  const root = new THREE.Group();
  root.name = id;
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.7 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.9, 4, 10), mat);
  body.position.y = 0.65;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 8), new THREE.MeshStandardMaterial({ color: 0xe8d36a }));
  head.position.y = 1.5;
  const nose = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.2), mat);
  nose.position.set(0, 1.45, 0.16);
  root.add(body, head, nose);
  return {
    id, root,
    setPose(p, h) { root.position.copy(p); root.rotation.y = h; },
    setAction(_a, _ph, gait) { body.position.y = 0.65 + 0.04 * Math.abs(Math.sin(Math.PI * 2 * gait)); },
    setVisible(on) { root.visible = on; },
  };
}

function stubTruck(kind: TruckKind): TruckRig {
  const root = new THREE.Group();
  root.name = `truck-${kind}`;
  const length = 7;
  const body = new THREE.Mesh(new THREE.BoxGeometry(2.3, 2.2, 5), new THREE.MeshStandardMaterial({ color: kind === 'chemical' ? 0xd0d4d6 : 0x8a6a3a }));
  body.position.set(0, 1.5, 1.2);
  const cab = new THREE.Mesh(new THREE.BoxGeometry(2.3, 2.4, 1.8), new THREE.MeshStandardMaterial({ color: 0x2f5d7a }));
  cab.position.set(0, 1.5, 4.7);
  const fill = new THREE.Mesh(new THREE.BoxGeometry(2.1, 1, 4.8), new THREE.MeshStandardMaterial({ color: kind === 'chemical' ? 0xf0f0e8 : 0x3a2a1a }));
  const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffa020 }));
  beacon.position.set(0, 2.85, 4.7);
  root.add(body, cab, fill, beacon);
  return {
    id: `truck-${kind}`, kind, root, length,
    setPose(p, h) { root.position.copy(p); root.rotation.y = h; },
    setLoad(x) { fill.visible = x > 0.01; fill.scale.y = Math.max(0.01, x); fill.position.set(0, 2.6 + 0.5 * x, 1.2); },
    setWork(_x) {},
    setBeacon(on, t) { beacon.visible = on && Math.sin(t * 12) > 0; },
    setVisible(on) { root.visible = on; },
  };
}

export function buildStubActors(): Actors {
  const root = new THREE.Group();
  root.name = 'stub-actors';
  const ids = ['w-operator', 'w-uasb', 'w-bed-a', 'w-bed-b', 'w-unload', 'w-mbbr', 'w-patrol', 'w-screen'];
  const workers = ids.map((id, i) => stubWorker(id, [0xe07a2c, 0xd9c23c, 0x3c8fd9][i % 3]));
  for (const w of workers) root.add(w.root);
  const trucks = { chemical: stubTruck('chemical'), sludge: stubTruck('sludge') };
  root.add(trucks.chemical.root, trucks.sludge.root);
  const toteGeo = new THREE.BoxGeometry(1.0, 1.0, 1.2);
  const toteMat = new THREE.MeshStandardMaterial({ color: 0xeeeeea });
  const carried = new THREE.Mesh(toteGeo, toteMat);
  carried.scale.setScalar(0.8);
  root.add(carried);
  const stock: THREE.Mesh[] = [];
  for (let i = 0; i < 6; i++) { const m = new THREE.Mesh(toteGeo, toteMat); m.position.set(-21.6 + (i % 3) * 1.1, 0.5, -0.25); m.visible = false; stock.push(m); root.add(m); }
  let carrier: string | null = null;
  return {
    root, workers, trucks, routes: buildStubRoutes(),
    setCarriedTote(id) { carrier = id; },
    setStockedTotes(n) { stock.forEach((m, i) => { m.visible = i < n; }); },
    update() {
      const w = workers.find(x => x.id === carrier);
      carried.visible = !!w && w.root.visible;
      if (w) { carried.position.copy(w.root.position); carried.position.y += 0.45; carried.position.x += 0.7 * Math.sin(w.root.rotation.y); carried.position.z += 0.7 * Math.cos(w.root.rotation.y); }
    },
  };
}

/** Mundo mínimo: renderer + escena con luces. */
export function createStubWorld(container: HTMLElement): { renderer: THREE.WebGLRenderer; scene: THREE.Scene; resize(w: number, h: number): void } {
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1);
  container.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x14202a);
  scene.add(new THREE.HemisphereLight(0xcfe3ea, 0x1a2228, 1.4));
  const sun = new THREE.DirectionalLight(0xffffff, 1.6);
  sun.position.set(20, 40, 25);
  scene.add(sun);
  return { renderer, scene, resize(w, h) { renderer.setSize(w, h, false); } };
}
