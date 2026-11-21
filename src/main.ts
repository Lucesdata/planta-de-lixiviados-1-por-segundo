/**
 * Arranque de «PTL Buenaventura · Agua Recuperada».
 * mundo (Agente A) + planta (Agente A) + rig de cámara + parcela héroe + overlay + bucle.
 * Modos: interactivo (RAF, controles) o película (?film=1: API determinista window.__film).
 */
import * as THREE from 'three';
import { createWorld } from './scene/world';
import { buildPlant } from './plant/buildPlant';
import { buildStubActors, buildStubPlant } from './sim/devStubPlant';
import { applyActorsFrame, evaluateActors, setDefaultActorRoutes, type ActorsFrame } from './motion/actors';
import { nextLightMode, parseLightMode, type LightMode, type LightingState } from './motion/lighting';
import type { Plant, UnitId } from './plant/types';
import { PIPES } from './plant/processFlow';
import { UNIT_BY_ID } from './plant/layout';
import type { CameraShot, SimState } from './sim/state';
import { DURATION, evaluate, focusUnits } from './motion/timeline';
import { CAM_BASIS, overviewShot, unitShot } from './motion/cameraStory';
import { ParcelView, parcelPosition, MAX_PARCELS } from './motion/paths';
import { createCameraRig } from './scene/cameraRig';
import { Overlay, type Toggles } from './ui/overlay';
import type { CamMode } from './ui/controls';
import type { Lang } from './ui/i18n';
import { GRID, type Rect } from './ui/styles';
import { lerp, smoothstep } from './sim/signals';
import { installFilmApi } from './render/capture';
import { SocialOverlay } from './ui/social';
import { SOCIAL_DURATION, socialToFilm } from './render/social';
import { setFraming } from './motion/cameraStory';

// ——— Parámetros de URL ———
const q = new URLSearchParams(location.search);
const FILM = q.get('film') === '1';
const FPS = Number(q.get('fps')) || 30;
const FW = Number(q.get('w')) || 1920;
const FH = Number(q.get('h')) || 1080;
/** Corte vertical para redes (?film=1&social=1&w=1080&h=1920). */
const SOCIAL = FILM && q.get('social') === '1';
let lang: Lang = q.get('lang') === 'en' ? 'en' : 'es';
const T_FREEZE = q.has('t') ? Number(q.get('t')) : null;
/** Iluminación: ?light=day|dusk|night|story. La película usa «día» por defecto. */
let lightMode: LightMode = parseLightMode(q.get('light')) ?? 'day';

// ——— DOM: escenario 16:9 centrado (letterbox) ———
const app = document.getElementById('app') ?? document.body.appendChild(document.createElement('div'));
const stage = document.createElement('div');
stage.className = 'stage';
app.appendChild(stage);
if (FILM) document.documentElement.classList.add('film');
const canvasHost = document.createElement('div');
canvasHost.style.cssText = 'position:absolute;inset:0';
stage.appendChild(canvasHost);

const world = createWorld(canvasHost);
const { renderer, scene } = world;
/** Planta real (Agente A); ?stub=1 o un fallo de construcción → planta de respaldo. */
function makePlant(): Plant {
  if (q.get('stub') === '1') return buildStubPlant();
  try { return buildPlant(); }
  catch (e) { console.error('buildPlant() falló; se usa la planta de respaldo', e); return buildStubPlant(); }
}
const plant: Plant = makePlant();
// Actores: los de la planta; si aún no existen, los de respaldo (?stubActors=0 para omitirlos).
if (!plant.actors && q.get('stubActors') !== '0') plant.actors = buildStubActors();
if (plant.actors && !plant.actors.root.parent) scene.add(plant.actors.root);
if (plant.actors) setDefaultActorRoutes(plant.actors.routes);
scene.add(plant.root);

/** Rig de iluminación del Agente A (opcional: se usa si existe). */
type LightRig = { setMode?(m: 'day' | 'dusk' | 'night'): void; setDaylight?(x: number): void };
const lightRig = (world as unknown as { lighting?: LightRig }).lighting;
let lastLightKey = '';
function applyLighting(l: LightingState | undefined): void {
  if (!l || !lightRig) return;
  const key = `${l.mode}|${l.daylight.toFixed(3)}|${l.fixturesLevel.toFixed(3)}`;
  if (key === lastLightKey) return;
  lastLightKey = key;
  // El rig del Agente A deriva las luminarias de la luz de día (misma ley que lighting.ts).
  if (lightRig.setDaylight) lightRig.setDaylight(l.daylight);
  else lightRig.setMode?.(l.preset);
}
const rig = createCameraRig();
const parcel = new ParcelView();
scene.add(parcel.root);
const thumbCam = new THREE.PerspectiveCamera(26, (GRID.thumb.x1 - GRID.thumb.x0) / (GRID.thumb.y1 - GRID.thumb.y0), 0.3, 300);

// ——— Estado de la aplicación (no del proceso) ———
let t = T_FREEZE ?? 0;
let playing = !FILM && T_FREEZE == null;
let speed = 1;
let loop = true;
let mode: CamMode = FILM ? 'film' : 'narrative';
/** Selección manual (undefined = seguir la selección del guion). */
let userSel: UnitId | null | undefined = undefined;
const toggles: Toggles = { pipes: true, labels: true, flow: true, sludge: true, actors: true };
let stageW = 1920, stageH = 1080;
let lastState: SimState = evaluate(t, { plant, light: lightMode });
let lastActors: ActorsFrame | null = null;
let lastSelected: UnitId | null = null;
/** Transición suave de cámara al cambiar de modo (solo interactivo, reloj de pared). */
let blend: { from: CameraShot; t0: number } | null = null;

const overlay = new Overlay(stage, FILM, {
  togglePlay() { if (t >= DURATION && !playing) t = 0; playing = !playing; },
  seek(v) { t = Math.min(DURATION, Math.max(0, v)); },
  setSpeed(s) { speed = s; },
  toggleLoop() { loop = !loop; },
  setMode(m) { startBlend(); mode = m; userSel = undefined; },
  step(dt) { playing = false; t = Math.min(DURATION, Math.max(0, Math.round(t + dt))); },
  toggle(name) { toggles[name] = !toggles[name]; },
  setLang(l) { lang = l; document.documentElement.lang = l; },
  cycleLight() { lightMode = nextLightMode(lightMode); },
});

function startBlend(): void {
  blend = { from: { ...rig.shot, target: [...rig.shot.target] as [number, number, number] }, t0: performance.now() };
}

// ——— Tamaño del escenario ———
// Corte vertical: sin overlay de escritorio ni etiquetas; encuadre 9:16 con zona libre bajo la marca y sobre los textos.
const social = SOCIAL ? new SocialOverlay(stage) : null;
if (SOCIAL) {
  overlay.root.style.display = 'none';
  setFraming(FW / FH, { bx: 0, by: 0.2, hx: 0.9, hy: 0.56 });
}

function layout(): void {
  if (FILM) { stageW = FW; stageH = FH; }
  else {
    const W = window.innerWidth, H = window.innerHeight;
    stageW = Math.floor(Math.min(W, (H * 16) / 9));
    stageH = Math.floor((stageW * 9) / 16);
  }
  stage.style.width = `${stageW}px`;
  stage.style.height = `${stageH}px`;
  renderer.setPixelRatio(FILM ? 1 : Math.min(window.devicePixelRatio || 1, 2));
  world.resize(stageW, stageH);
  rig.setAspect(SOCIAL ? stageW / stageH : 16 / 9);
  overlay.setScale(stageW / 1920);
  social?.setScale(stageW / 1080);
}
layout();
window.addEventListener('resize', () => { layout(); if (!playing) applyFrame(t); });

// ——— Aplicación de un instante t a escena + overlay + render ———
function currentSelection(state: SimState): UnitId | null {
  return userSel !== undefined ? userSel : state.selected;
}

function applyFrame(time: number): SimState {
  const state = evaluate(time, { plant, light: lightMode });
  applyLighting(state.lighting);
  const sel = currentSelection(state);
  for (const id of Object.keys(plant.units) as UnitId[]) {
    const u = plant.units[id];
    const us = state.units[id];
    if (!us) continue;
    u.setActive(us.active);
    u.setStatus(us.status);
    u.setFlowLevel(us.flow);
    u.setInternalMotion(us.motion);
    u.setSelected(id === sel);
  }
  for (const spec of PIPES) {
    const p = plant.pipes[spec.id];
    const ps = state.pipes[spec.id];
    if (!p || !ps) continue;
    p.setFront(ps.front);
    p.setFlow(toggles.flow ? ps.flow : 0);
    p.setHighlighted(sel !== null && (spec.from === sel || spec.to === sel));
    p.setVisible(toggles.pipes && (spec.kind !== 'sludge' || toggles.sludge));
  }
  plant.update(state.t);

  // Personas y camiones (función pura de t + rutas del Agente A).
  const truckTags: { kind: 'chemical' | 'sludge'; pos: THREE.Vector3 }[] = [];
  if (plant.actors) {
    plant.actors.root.visible = toggles.actors;
    const af = evaluateActors(state.t, plant.actors.routes);
    applyActorsFrame(plant.actors, af);
    lastActors = af;
    if (toggles.actors) for (const k of ['chemical', 'sludge'] as const) {
      const tp = af.trucks[k];
      if (!tp.visible) continue;
      const len = plant.actors.trucks[k]?.length ?? 7;
      // Etiqueta sobre el centro de la caja (eje trasero + media longitud hacia delante).
      truckTags.push({ kind: k, pos: new THREE.Vector3(tp.pos[0] + Math.sin(tp.heading) * len * 0.35, tp.pos[1] + 3.6, tp.pos[2] + Math.cos(tp.heading) * len * 0.35) });
    }
  }

  // Cámara
  let shot: CameraShot;
  if (mode === 'narrative' || mode === 'film') shot = state.camera;
  else if (mode === 'overview') shot = overviewShot(plant);
  else shot = rig.shot;
  if (blend && !FILM) {
    const k = smoothstep(performance.now(), blend.t0, blend.t0 + 900);
    if (k >= 1 || mode === 'free') blend = null;
    else shot = {
      target: [lerp(blend.from.target[0], shot.target[0], k), lerp(blend.from.target[1], shot.target[1], k), lerp(blend.from.target[2], shot.target[2], k)],
      distance: lerp(blend.from.distance, shot.distance, k), fov: lerp(blend.from.fov, shot.fov, k),
    };
  }
  rig.apply(shot);
  parcel.update(plant, state.t, rig.shot.distance);

  // Zonas de la parcela héroe en pantalla (las etiquetas las evitan).
  const obstacles: Rect[] = [];
  for (let j = 0; j < MAX_PARCELS; j++) {
    const p = parcelPosition(plant, state.t, j, v3);
    if (!p) continue;
    const [sx, sy] = project(p);
    obstacles.push({ x0: sx - 20, y0: sy - 20, x1: sx + 20, y1: sy + 20 });
  }
  overlay.update(state, {
    mode, lang, selected: sel, toggles, obstacles, trucks: truckTags,
    controls: { playing, speed, loop, t: state.t, duration: DURATION, mode },
  }, plant, rig.camera);

  render(SOCIAL ? null : sel);
  lastState = state;
  lastSelected = sel;
  return state;
}

function render(sel: UnitId | null): void {
  const size = renderer.getSize(new THREE.Vector2());
  renderer.setScissorTest(false);
  renderer.setViewport(0, 0, size.x, size.y);
  renderer.render(scene, rig.camera);
  if (!sel) return;
  // Miniatura del panel de detalle: segunda pasada en un recorte del mismo lienzo.
  const k = size.x / 1920;
  const r = GRID.thumb;
  const x = r.x0 * k, y = size.y - r.y1 * k, w = (r.x1 - r.x0) * k, h = (r.y1 - r.y0) * k;
  const s = unitShot(sel, plant);
  thumbCam.fov = s.fov;
  thumbCam.updateProjectionMatrix();
  // Misma dirección fija que la cámara principal.
  const d = new THREE.Vector3(...CAM_BASIS.dir);
  thumbCam.position.set(s.target[0] + d.x * s.distance, s.target[1] + d.y * s.distance, s.target[2] + d.z * s.distance);
  thumbCam.quaternion.copy(rig.camera.quaternion);
  thumbCam.updateMatrixWorld(true);
  const parcelVis = parcel.root.visible;
  parcel.root.visible = false;
  renderer.setViewport(x, y, w, h);
  renderer.setScissor(x, y, w, h);
  renderer.setScissorTest(true);
  renderer.render(scene, thumbCam);
  renderer.setScissorTest(false);
  renderer.setViewport(0, 0, size.x, size.y);
  parcel.root.visible = parcelVis;
}

// ——— Interacción: arrastre = pan (modo libre), rueda = dolly, clic = selección ———
const raycaster = new THREE.Raycaster();
const pickMap = new Map<THREE.Object3D, UnitId>();
for (const id of Object.keys(plant.units) as UnitId[]) for (const o of plant.units[id].pickTargets ?? []) pickMap.set(o, id);
const pickList = [...pickMap.keys()];

function pick(clientX: number, clientY: number): UnitId | null {
  const rect = renderer.domElement.getBoundingClientRect();
  const ndc = new THREE.Vector2(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
  raycaster.setFromCamera(ndc, rig.camera);
  for (const hit of raycaster.intersectObjects(pickList, true)) {
    let o: THREE.Object3D | null = hit.object;
    while (o) { const id = pickMap.get(o); if (id) return id; o = o.parent; }
  }
  return null;
}

if (!FILM) {
  const cv = renderer.domElement;
  cv.style.touchAction = 'none';
  let down: { x: number; y: number; moved: boolean } | null = null;
  cv.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY, moved: false }; cv.setPointerCapture(e.pointerId); });
  cv.addEventListener('pointermove', e => {
    if (!down) {
      cv.style.cursor = pick(e.clientX, e.clientY) ? 'pointer' : 'default';
      return;
    }
    const dx = e.clientX - down.x, dy = e.clientY - down.y;
    if (!down.moved && Math.hypot(dx, dy) < 4) return;
    if (!down.moved) { down.moved = true; if (mode !== 'free') { blend = null; mode = 'free'; } }
    const s = 1080 / stageH;
    rig.panPixels(dx * s, dy * s, 1080);
    down.x = e.clientX; down.y = e.clientY;
  });
  cv.addEventListener('pointerup', e => {
    if (down && !down.moved) userSel = pick(e.clientX, e.clientY);
    down = null;
  });
  cv.addEventListener('wheel', e => {
    e.preventDefault();
    if (mode !== 'free') { blend = null; mode = 'free'; }
    rig.dolly(Math.pow(1.1, e.deltaY / 100));
  }, { passive: false });
}

// ——— Gancho de depuración/validación ———
const v3 = new THREE.Vector3();
function project(p: THREE.Vector3): [number, number] {
  v3.copy(p).project(rig.camera);
  return [(v3.x * 0.5 + 0.5) * 1920, (-v3.y * 0.5 + 0.5) * 1080];
}
(window as unknown as Record<string, unknown>).__sim = {
  getState: () => ({
    t: lastState.t,
    state: lastState,
    selected: lastSelected,
    detailUnit: overlay.detail.shown,
    mode,
    shot: rig.shot,
    labelRects: overlay.labels.lastRects,
    focusUnits: focusUnits(lastState.t),
    actors: lastActors,
    lightMode,
    hasRealActors: !!plant.actors && plant.actors.root.name !== 'stub-actors',
    plantKind: plant.root.name,
  }),
  projectPoint: (x: number, y: number, z: number) => project(new THREE.Vector3(x, y, z)),
  setLight: (m: LightMode) => { lightMode = m; lastLightKey = ''; },
  projectAnchor: (id: UnitId, name = 'focus') => { const a = plant.units[id]?.anchors[name]; return a ? project(a) : null; },
  seek: (v: number) => { t = v; playing = false; applyFrame(t); },
  grid: GRID,
  unitInfo: (id: UnitId) => ({ tag: UNIT_BY_ID[id].tag, name: UNIT_BY_ID[id].name }),
};

// ——— Bucle ———
if (FILM) {
  const api = installFilmApi({ duration: SOCIAL ? SOCIAL_DURATION : DURATION, fps: FPS, renderFrame: (time: number) => {
    if (social) { const m = socialToFilm(time); t = m.t; applyFrame(m.t); social.update(time, lang); }
    else { t = time; applyFrame(time); }
  } });
  void api;
} else {
  let last = performance.now();
  const tick = (now: number) => {
    const dt = Math.min(0.1, Math.max(0, (now - last) / 1000));
    last = now;
    if (playing) {
      t += dt * speed;
      if (t >= DURATION) { if (loop) t = 0; else { t = DURATION; playing = false; } }
    }
    applyFrame(t);
    requestAnimationFrame(tick);
  };
  applyFrame(t);
  requestAnimationFrame(tick);
}
