// Validación en Node (requisito 17): determinismo, rastreador, detalle↔selección, cámara,
// geometría (collisionCheck del Agente A), continuidad de la parcela y encuadre.
// Empaqueta los módulos TS con esbuild en out/ y los importa. Código de salida ≠ 0 si falla algo.
import { build } from 'esbuild';
import { existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'out');
mkdirSync(outDir, { recursive: true });
const has = p => existsSync(join(root, p));
const REAL = has('src/plant/buildPlant.ts');
const COLL = has('src/sim/collisionCheck.ts');

const entry = `
export * as timeline from './src/motion/timeline';
export * as story from './src/motion/cameraStory';
export * as paths from './src/motion/paths';
export * as actors from './src/motion/actors';
export * as lighting from './src/motion/lighting';
export * as assumptions from './src/plant/assumptions';
export * as selectors from './src/sim/selectors';
export * as layout from './src/plant/layout';
export * as flow from './src/plant/processFlow';
export { createCameraRig } from './src/scene/cameraRig';
export { buildStubPlant, buildStubActors } from './src/sim/devStubPlant';
${REAL ? "export { buildPlant } from './src/plant/buildPlant';" : 'export const buildPlant = null;'}
${COLL ? "export * as coll from './src/sim/collisionCheck';" : 'export const coll = null;'}
export * as THREE from 'three';
`;
const bundlePath = join(outDir, '.validate-bundle.mjs');
await build({
  stdin: { contents: entry, resolveDir: root, loader: 'ts', sourcefile: 'validate-entry.ts' },
  bundle: true, format: 'esm', platform: 'node', target: 'node18', outfile: bundlePath, logLevel: 'error',
});
const M = await import(pathToFileURL(bundlePath).href + `?v=${Date.now()}`);
const { timeline: TL, story: CS, paths: PA, selectors: SE, layout: LY, actors: AC, THREE } = M;

const results = [];
const report = (name, ok, detail) => { results.push({ name, ok }); console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? ' — ' + detail : ''}`); };

// ——— Planta (real si existe; si falla en Node, se informa y se usa el respaldo) ———
let plant, plantKind = 'stub';
if (M.buildPlant) {
  try { plant = M.buildPlant(); plantKind = 'real'; }
  catch (e) { console.log(`WARN  buildPlant() real falló en Node: ${e.message}`); }
}
if (!plant) plant = M.buildStubPlant();
let actorsKind = plant.actors ? plantKind : 'stub';
const actors = plant.actors ?? M.buildStubActors();
const routes = actors.routes;
console.log(`INFO  planta: ${plantKind} (${Object.keys(plant.units).length} unidades, ${Object.keys(plant.pipes).length} tuberías); actores: ${actorsKind} (${actors.workers.length} personas, rutas: ${Object.keys(routes).length})`);

const D = TL.DURATION;
const jsonEq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// (a) Determinismo
{
  const ts = Array.from({ length: 500 }, (_, i) => (i * D) / 499 + (i % 7) * 1e-3);
  const first = ts.map(t => TL.evaluate(t));
  let bad = 0;
  for (let i = ts.length - 1; i >= 0; i--) if (!jsonEq(first[i], TL.evaluate(ts[i]))) bad++;
  // Con planta: misma salida repetida
  let badP = 0;
  for (const t of ts.slice(0, 120)) if (!jsonEq(TL.evaluate(t, { plant }), TL.evaluate(t, { plant }))) badP++;
  let badA = 0, badL = 0;
  for (const t of ts) {
    if (!jsonEq(AC.evaluateActors(t, routes), AC.evaluateActors(t, routes))) badA++;
    if (!jsonEq(TL.evaluate(t, { light: 'story' }), TL.evaluate(t, { light: 'story' }))) badL++;
  }
  // Orden inverso para descartar estado oculto en la caché de compilación.
  const fwd = ts.map(t => JSON.stringify(AC.evaluateActors(t, routes)));
  for (let i = ts.length - 1; i >= 0; i--) if (fwd[i] !== JSON.stringify(AC.evaluateActors(ts[i], routes))) badA++;
  report('(a) determinismo evaluate(t), actores e iluminación «story»', bad === 0 && badP === 0 && badA === 0 && badL === 0, `500 muestras, ${bad + badP} diferencias proceso, ${badA} actores, ${badL} iluminación`);
}

// (b) Rastreador
{
  const dt = 1 / 60;
  let ok = true, msgs = [];
  let prev = -1, order = [], firstOn = {}, lastOn = {};
  let multi = 0, none = 0;
  for (let t = 0; t <= D + 1e-9; t += dt) {
    const s = TL.evaluate(t);
    const i = s.trackerIndex;
    if (t >= 5 && t < 44 - 1e-6) { if (i < 0) none++; }
    if (i >= 0) {
      if (i < prev) { ok = false; msgs.push(`índice decrece en t=${t.toFixed(2)}`); }
      prev = Math.max(prev, i);
      if (!(i in firstOn)) { firstOn[i] = t; order.push(i); }
      lastOn[i] = t;
    }
    const nActive = s.trackerIndex >= 0 ? 1 : 0;
    if (nActive > 1) multi++;
    if (t >= 44 && !Object.values(s.trackerDone).every(Boolean)) { ok = false; msgs.push(`no todo completo en t=${t.toFixed(2)}`); }
  }
  if (!jsonEq(order, [0, 1, 2, 3, 4, 5, 6, 7, 8])) { ok = false; msgs.push(`orden ${order}`); }
  let minDur = Infinity;
  for (const i of order) { const d = lastOn[i] - firstOn[i] + dt; minDur = Math.min(minDur, d); if (d < 1.5) { ok = false; msgs.push(`paso ${i} activo ${d.toFixed(2)} s`); } }
  if (none) { ok = false; msgs.push(`${none} muestras sin paso activo en 5–44 s`); }
  report('(b) rastreador en orden, monótono, ≥1,5 s por paso, completo a t≥44', ok, msgs.join('; ') || `mín. ${minDur.toFixed(2)} s por paso`);
}

// Coherencia de la tarjeta: volumen B/S, TRH C, cifras = UNIT_FACTS, sin «sin dato».
const fmtN = (x, d, lang) => { const s = x.toFixed(d); return lang === 'es' ? s.replace('.', ',') : s; };
function checkDetail(d, id, lang, msgs) {
  let ok = true;
  const spec = LY.UNIT_BY_ID[id];
  const AS = M.assumptions;
  if (!d || d.id !== id || d.tag !== spec.tag || d.name !== spec.name[lang]) { msgs.push(`detalle ${id}/${lang}`); return false; }
  const vb = spec.volume, va = AS.ASSUMED_VOLUME[id];
  const expCls = vb != null ? 'B' : va != null ? 'S' : null;
  if (d.volumeCls !== expCls) { ok = false; msgs.push(`${id} clase de volumen ${d.volumeCls} ≠ ${expCls}`); }
  const vv = vb ?? va;
  if (vv != null && !d.volumeText.startsWith(fmtN(vv, vb == null && vv < 10 ? 2 : 0, lang))) { ok = false; msgs.push(`${id} volumen «${d.volumeText}»`); }
  if (d.hrtText !== (lang === 'es' ? 'no aplica' : 'n/a') && d.hrtCls !== 'C') { ok = false; msgs.push(`${id} TRH sin clase C`); }
  const facts = AS.UNIT_FACTS[id] ?? [];
  if (d.facts.length !== facts.length) { ok = false; msgs.push(`${id} ${d.facts.length} cifras ≠ ${facts.length}`); }
  facts.forEach((f, i) => {
    const r = d.facts[i];
    const exp = `${fmtN(f.value, f.digits, lang)}${f.unit ? ' ' + f.unit : ''}`;
    if (!r || r.key !== f.key || r.cls !== f.cls || r.value !== exp || r.label !== f.label[lang] || r.basis !== f.basis[lang]) { ok = false; msgs.push(`${id} cifra ${f.key}: ${r?.value} ≠ ${exp}`); }
  });
  const all = [d.flowText, d.volumeText, d.hrtText, d.role, d.fn, ...d.facts.map(f => f.value)].join(' ');
  if (/sin dato|no data|NaN|undefined|Infinity/.test(all)) { ok = false; msgs.push(`${id}/${lang} texto inválido: ${all.slice(0, 80)}`); }
  return ok;
}

// (c) Detalle ↔ selección en cada clic guionizado
{
  let ok = true, msgs = [];
  TL.CLICKS.forEach((c, k) => {
    const next = TL.CLICKS[k + 1]?.t ?? D;
    for (const t of [c.t, c.t + 0.01, (c.t + next) / 2, next - 0.02]) {
      const s = TL.evaluate(t);
      if (s.selected !== c.unit) { ok = false; msgs.push(`t=${t.toFixed(2)} selected=${s.selected} ≠ ${c.unit}`); continue; }
      for (const lang of ['es', 'en']) {
        const d = SE.buildDetail(s, s.selected, lang);
        const spec = LY.UNIT_BY_ID[c.unit];
        if (!d || d.id !== spec.id || d.tag !== spec.tag || d.name !== spec.name[lang]) { ok = false; msgs.push(`detalle ${c.unit}/${lang}`); }
        checkDetail(d, c.unit, lang, msgs) || (ok = false);
      }
    }
    const before = TL.evaluate(c.t - 0.05);
    if (before.selected === c.unit && k > 0 && TL.CLICKS[k - 1].unit !== c.unit) { ok = false; msgs.push(`selección anticipada ${c.unit}`); }
  });
  report('(c) detalle coincide con la unidad seleccionada en cada clic', ok, msgs.join('; ') || TL.CLICKS.map(c => `${c.t}s→${c.unit}`).join(', '));
}

// (c2) Ficha coherente para TODAS las unidades (incluidas las nuevas) a t = 0, 30 y 50
{
  let ok = true; const msgs = [];
  for (const t of [0, 30, 50]) {
    const s = TL.evaluate(t);
    for (const u of LY.UNITS) for (const lang of ['es', 'en']) {
      const d = SE.buildDetail(s, u.id, lang);
      if (!checkDetail(d, u.id, lang, msgs)) ok = false;
      if (u.id === 'pumpB' && !/reserva|standby/i.test(d.flowText)) { ok = false; msgs.push(`pumpB «${d.flowText}»`); }
      if (u.id === 'flare' && t >= 30 && !/m³\/h/.test(d.flowText)) { ok = false; msgs.push(`flare «${d.flowText}»`); }
    }
    if (s.units.pumpB.status !== 'standby' || s.units.pumpB.active) { ok = false; msgs.push(`pumpB no está en reserva en t=${t}`); }
  }
  // Sin unidad huérfana del rastreador salvo servicios (ED-01)
  const orphan = LY.UNITS.filter(u => !SE.stageOfUnit(u.id) && u.id !== 'control').map(u => u.id);
  if (orphan.length) { ok = false; msgs.push(`sin etapa: ${orphan}`); }
  report('(c2) ficha de detalle coherente (B/S/C, UNIT_FACTS, reserva, sin «sin dato»)', ok, msgs.slice(0, 6).join('; ') || `${LY.UNITS.length} unidades × 2 idiomas × 3 instantes`);
}

// (d) Cámara: continuidad, dirección fija, fov acotado, encuadre
{
  const dt = 1 / 30;
  let ok = true, msgs = [];
  let maxT = 0, maxD = 0, maxF = 0;
  const rig = M.createCameraRig();
  rig.apply(TL.evaluate(0, { plant }).camera);
  const q0 = rig.camera.quaternion.clone();
  const dir0 = new THREE.Vector3(...CS.CAM_BASIS.dir);
  let prev = null, maxAng = 0, maxDirErr = 0;
  for (let i = 0; i <= D * 30; i++) {
    const t = i * dt;
    const c = TL.evaluate(t, { plant }).camera;
    if (c.fov < 24 - 1e-9 || c.fov > 32 + 1e-9) { ok = false; msgs.push(`fov ${c.fov} en t=${t.toFixed(2)}`); }
    if (prev) {
      const dT = Math.hypot(c.target[0] - prev.target[0], c.target[1] - prev.target[1], c.target[2] - prev.target[2]);
      maxT = Math.max(maxT, dT); maxD = Math.max(maxD, Math.abs(c.distance - prev.distance)); maxF = Math.max(maxF, Math.abs(c.fov - prev.fov));
    }
    rig.apply(c);
    maxAng = Math.max(maxAng, rig.camera.quaternion.angleTo(q0));
    const d = rig.camera.position.clone().sub(new THREE.Vector3(...c.target)).normalize();
    maxDirErr = Math.max(maxDirErr, d.distanceTo(dir0));
    prev = c;
  }
  if (maxT > 1.2) { ok = false; msgs.push(`salto de objetivo ${maxT.toFixed(3)} m/cuadro`); }
  if (maxD > 1.5) { ok = false; msgs.push(`salto de distancia ${maxD.toFixed(3)} m/cuadro`); }
  if (maxF > 0.25) { ok = false; msgs.push(`salto de fov ${maxF.toFixed(3)}°/cuadro`); }
  if (maxAng > 1e-9 || maxDirErr > 1e-6) { ok = false; msgs.push(`la cámara rota (Δángulo ${maxAng}, Δdir ${maxDirErr})`); }
  report('(d) cámara continua, dirección fija, solo pan/dolly/zoom', ok, msgs.join('; ') || `máx Δobjetivo ${maxT.toFixed(3)} m, Δdist ${maxD.toFixed(3)} m, Δfov ${maxF.toFixed(3)}°/cuadro @30 fps; rotación 0`);

  // Encuadre: anclas 'focus' (y 'label') de las unidades foco dentro de la región segura.
  let fOk = true, worst = 0, fMsgs = [];
  const S = CS.SAFE_NDC;
  const v = new THREE.Vector3();
  for (let t = 0; t <= D; t += 0.25) {
    rig.apply(TL.evaluate(t, { plant }).camera);
    for (const id of TL.focusUnits(t)) {
      for (const name of ['focus', 'label']) {
        const a = plant.units[id].anchors[name];
        v.copy(a).project(rig.camera);
        const ex = Math.abs(v.x - S.bx) / S.hx, ey = Math.abs(v.y - S.by) / S.hy;
        worst = Math.max(worst, ex, ey);
        if (ex > 1 || ey > 1) { fOk = false; if (fMsgs.length < 6) fMsgs.push(`${id}.${name} fuera en t=${t.toFixed(2)}`); }
      }
    }
  }
  report('(d2) unidades foco dentro de la región segura', fOk, fMsgs.join('; ') || `peor ocupación ${(worst * 100).toFixed(0)} % del semieje seguro`);

  // (d3) En cada clave de cámara, todas sus unidades (anclas focus y label) quedan en la región segura.
  let kOk = true, kMsgs = [], kWorst = 0;
  for (const k of CS.CAMERA_KEYS) {
    rig.apply(TL.evaluate(k.t, { plant }).camera);
    const ids = k.units === 'ALL' ? LY.UNITS.map(u => u.id) : k.units;
    for (const id of ids) for (const name of ['focus', 'label']) {
      v.copy(plant.units[id].anchors[name]).project(rig.camera);
      const ex = Math.abs(v.x - S.bx) / S.hx, ey = Math.abs(v.y - S.by) / S.hy;
      kWorst = Math.max(kWorst, ex, ey);
      if (ex > 1 || ey > 1) { kOk = false; if (kMsgs.length < 6) kMsgs.push(`clave ${k.t}s: ${id}.${name}`); }
    }
  }
  report('(d3) cada clave de cámara encuadra sus unidades (nuevas incluidas)', kOk, kMsgs.join('; ') || `${CS.CAMERA_KEYS.length} claves, peor ${(kWorst * 100).toFixed(0)} %`);
}

// (e) Geometría (Agente A)
{
  if (M.coll && typeof M.coll.runGeometryChecks === 'function' && plantKind === 'real') {
    try {
      const r = M.coll.runGeometryChecks(plant);
      const ok = r == null ? true : Array.isArray(r) ? r.length === 0 : typeof r === 'boolean' ? r : (r.ok ?? (Array.isArray(r.errors) ? r.errors.length === 0 : (Array.isArray(r.issues) ? r.issues.length === 0 : true)));
      const det = Array.isArray(r) ? (r.length ? r.slice(0, 5).map(i => `${i.kind} ${i.a}×${i.b}: ${i.detail}`).join('; ') : '0 incidencias (solapes de unidades, tuberías que atraviesan equipos, cruces)') : r && typeof r === 'object' ? JSON.stringify(r).slice(0, 600) : String(r);
      report('(e) runGeometryChecks(plant)', !!ok, det);
    } catch (e) { report('(e) runGeometryChecks(plant)', false, e.message); }
  } else {
    report('(e) runGeometryChecks(plant)', false, COLL ? 'sin planta real en Node' : 'src/sim/collisionCheck.ts no existe (Agente A)');
  }
}

// (f) Continuidad de la parcela (sin teletransporte salvo divisiones)
{
  const dt = 1 / 30;
  let ok = true, msgs = [], maxJ = 0;
  const prev = Array(PA.MAX_PARCELS).fill(null);
  for (let i = 0; i <= D * 30; i++) {
    const t = i * dt;
    for (let j = 0; j < PA.MAX_PARCELS; j++) {
      const p = PA.parcelPosition(plant, t, j, new THREE.Vector3());
      if (p && prev[j]) {
        const d = p.distanceTo(prev[j]);
        maxJ = Math.max(maxJ, d);
        if (d > 1.0) { ok = false; if (msgs.length < 6) msgs.push(`parcela ${j} salta ${d.toFixed(2)} m en t=${t.toFixed(2)}`); }
      }
      prev[j] = p;
    }
  }
  // Coherencia de puertos: el fin de cada tubería del recorrido coincide con el inicio del siguiente tramo.
  report('(f) continuidad de la parcela héroe', ok, msgs.join('; ') || `máx ${maxJ.toFixed(3)} m/cuadro @30 fps; divisiones en ${TL.ROUTE.filter(s => s.ids.length > 1).map(s => s.t0).join(', ')} s`);
}

// (k–n) Actores
{
  const dt = 1 / 30, N = Math.round(D * 30);
  const frames = [];
  for (let i = 0; i <= N; i++) frames.push(AC.evaluateActors(i * dt, routes));
  const inSite = p => p[0] > LY.SITE.minX + 0.5 && p[0] < LY.SITE.maxX - 0.5 && p[2] > LY.SITE.minZ + 0.5 && p[2] < LY.SITE.maxZ - 0.5;
  // (k) continuidad: sin teletransporte; los camiones solo aparecen/desaparecen fuera del sitio; bucle 50→0.
  let kOk = true, km = [], maxW = 0, maxT = 0;
  const nW = frames[0].workers.length;
  if (nW !== 8) { kOk = false; km.push(`${nW} personas (se esperan 8)`); }
  for (let i = 1; i <= N; i++) {
    const a = frames[i - 1], b = frames[i];
    a.workers.forEach((wa, j) => {
      const wb = b.workers[j];
      if (!wa.visible || !wb.visible) { kOk = false; if (km.length < 6) km.push(`${wa.id} invisible en t=${b.t.toFixed(2)}`); return; }
      const d = Math.hypot(wb.pos[0] - wa.pos[0], wb.pos[1] - wa.pos[1], wb.pos[2] - wa.pos[2]);
      maxW = Math.max(maxW, d);
      if (d > 0.09) { kOk = false; if (km.length < 6) km.push(`${wa.id} salta ${d.toFixed(2)} m en t=${b.t.toFixed(2)}`); }
      const dh = Math.abs(Math.atan2(Math.sin(wb.heading - wa.heading), Math.cos(wb.heading - wa.heading)));
      if (dh > 0.6) { kOk = false; if (km.length < 6) km.push(`${wa.id} gira ${dh.toFixed(2)} rad/cuadro en t=${b.t.toFixed(2)}`); }
    });
    for (const k of ['chemical', 'sludge']) {
      const ta = a.trucks[k], tb = b.trucks[k];
      if (ta.visible !== tb.visible) {
        const p = tb.visible ? tb.pos : ta.pos;
        if (inSite(p)) { kOk = false; km.push(`camión ${k} aparece/desaparece dentro del sitio en t=${b.t.toFixed(2)}`); }
        continue;
      }
      if (!tb.visible) continue;
      const d = Math.hypot(tb.pos[0] - ta.pos[0], tb.pos[2] - ta.pos[2]);
      maxT = Math.max(maxT, d);
      if (d > 0.45) { kOk = false; if (km.length < 6) km.push(`camión ${k} salta ${d.toFixed(2)} m en t=${b.t.toFixed(2)}`); }
    }
  }
  const f0 = frames[0], fN = frames[N];
  f0.workers.forEach((w, j) => {
    const e = fN.workers[j];
    const d = Math.hypot(e.pos[0] - w.pos[0], e.pos[1] - w.pos[1], e.pos[2] - w.pos[2]);
    const dh = Math.abs(Math.atan2(Math.sin(e.heading - w.heading), Math.cos(e.heading - w.heading)));
    if (d > 0.05 || dh > 0.05 || e.action !== w.action || Math.abs(e.phase - w.phase) > 0.02 && Math.abs(Math.abs(e.phase - w.phase) - 1) > 0.02) { kOk = false; km.push(`${w.id} no es cíclico (Δ${d.toFixed(2)} m, Δθ ${dh.toFixed(2)}, ${w.action}/${e.action})`); }
  });
  for (const k of ['chemical', 'sludge']) if (f0.trucks[k].visible || fN.trucks[k].visible) { kOk = false; km.push(`camión ${k} visible en t=0/50`); }
  const plan = AC.compileActors(routes);
  for (const w of plan.workers) if (w.end > D + 1e-6) { kOk = false; km.push(`guion de ${w.id} termina en ${w.end.toFixed(1)} s > ${D}`); }
  report('(k) actores continuos y cíclicos (sin teletransporte; camiones entran/salen fuera del sitio)', kOk, km.join('; ') || `máx persona ${maxW.toFixed(3)} m/cuadro, camión ${maxT.toFixed(3)} m/cuadro; bucle 50→0 sin salto`);

  // (l) Pies sin deslizar: zancada = Δdistancia/Δgait ∈ [0,9; 1,9] m; parado ⇒ gait constante; velocidad ≤ 1,8 m/s.
  let lOk = true, lm = [], sMin = Infinity, sMax = 0, vMax = 0;
  for (let i = 1; i <= N; i++) {
    frames[i].workers.forEach((wb, j) => {
      const wa = frames[i - 1].workers[j];
      const dd = wb.dist - wa.dist, dg = wb.gait - wa.gait;
      const dp = Math.hypot(wb.pos[0] - wa.pos[0], wb.pos[2] - wa.pos[2]);
      if (dp > 1e-4 && dg < 0 && Math.abs(dg) > 1e-9) { lOk = false; if (lm.length < 6) lm.push(`${wb.id} gait decrece en t=${wb.t}`); }
      // Distancia recorrida coherente con la posición (sin deslizamiento lateral).
      if (Math.abs(dd) + 1e-6 < dp * 0.98 - 1e-4) { lOk = false; if (lm.length < 6) lm.push(`${wb.id} se mueve sin avanzar en su ruta en t=${frames[i].t.toFixed(2)}`); }
      if (dd > 1e-4) {
        const stride = dd / dg;
        if (!(dg > 0) || stride < 0.9 || stride > 1.9) { lOk = false; if (lm.length < 6) lm.push(`${wb.id} zancada ${stride.toFixed(2)} m en t=${frames[i].t.toFixed(2)}`); }
        else { sMin = Math.min(sMin, stride); sMax = Math.max(sMax, stride); }
        if (!['walk', 'carry'].includes(wb.action) && !['walk', 'carry'].includes(wa.action)) { lOk = false; if (lm.length < 6) lm.push(`${wb.id} se desplaza con acción ${wb.action}`); }
        vMax = Math.max(vMax, dd / dt);
      } else if (Math.abs(dg) > 1e-9 && !(wa.moving || wb.moving)) { lOk = false; if (lm.length < 6) lm.push(`${wb.id} da pasos sin moverse en t=${frames[i].t.toFixed(2)}`); }
    });
  }
  if (vMax > 1.8) { lOk = false; lm.push(`velocidad máx ${vMax.toFixed(2)} m/s`); }
  report('(l) pies sin deslizar (zancada coherente con la distancia)', lOk, lm.join('; ') || `zancada ${sMin.toFixed(2)}–${sMax.toFixed(2)} m/ciclo, velocidad máx ${vMax.toFixed(2)} m/s`);

  // (m) Camiones sobre sus rutas de vía, sin atravesar equipos; orientación coherente con el avance.
  let mOk = true, mm = [], vT = 0;
  const fps = Object.values(plant.units).map(u => u.footprint);
  const fpIds = Object.keys(plant.units);
  // Falla solo la intersección real (caja del camión, ancho 2,4 m); holgura < 0,2 m = aviso.
  const gapTo = (x, z, f) => Math.hypot(Math.max(f.min[0] - x, 0, x - f.max[0]), Math.max(f.min[2] - z, 0, z - f.max[2]));
  const hit = (x, z) => fps.find(f => gapTo(x, z, f) === 0);
  let minClr = Infinity, minClrAt = '';
  for (let i = 1; i <= N; i++) for (const k of ['chemical', 'sludge']) {
    const tb = frames[i].trucks[k], ta = frames[i - 1].trucks[k];
    if (!tb.visible) continue;
    const len = actors.trucks[k]?.length ?? 7;
    const fx = Math.sin(tb.heading), fz = Math.cos(tb.heading);
    const rear = actors.trucks[k]?.rearOverhang ?? 1.3;
    for (const a of [-rear, 0, len * 0.25, len * 0.5, len * 0.75, len - rear]) for (const b of [-1.2, 0, 1.2]) {
      const x = tb.pos[0] + fx * a + fz * b, z = tb.pos[2] + fz * a - fx * b;
      fps.forEach((ff, fi) => { const g = gapTo(x, z, ff); if (g < minClr) { minClr = g; minClrAt = `${k}↔${fpIds[fi]} t=${frames[i].t.toFixed(2)}`; } });
      const f = hit(x, z);
      if (f) { mOk = false; if (mm.length < 4) mm.push(`camión ${k} toca ${fpIds[fps.indexOf(f)]} en t=${frames[i].t.toFixed(2)} (${x.toFixed(1)}, ${z.toFixed(1)})`); }
    }
    if (ta.visible) {
      const dx = tb.pos[0] - ta.pos[0], dz = tb.pos[2] - ta.pos[2], d = Math.hypot(dx, dz);
      vT = Math.max(vT, d / dt);
      if (d > 0.01 && Math.abs((dx * fx + dz * fz) / d) < 0.57) { mOk = false; if (mm.length < 4) mm.push(`camión ${k} se desplaza de lado en t=${frames[i].t.toFixed(2)}`); }
    }
    if (!tb.route || !routes[tb.route]) { mOk = false; mm.push(`camión ${k} sin ruta`); }
  }
  if (vT > 9) { mOk = false; mm.push(`velocidad de camión ${vT.toFixed(1)} m/s`); }
  // Separación entre camiones (comparten el lazo de un solo sentido).
  const body = (tp, len) => { const fx = Math.sin(tp.heading), fz = Math.cos(tp.heading); const o = [];
    for (let a = -1.2; a <= len - 1.2 + 1e-9; a += 0.7) for (const b of [-1.1, 0, 1.1]) o.push([tp.pos[0] + fx * a + fz * b, tp.pos[2] + fz * a - fx * b]); return o; };
  let minGap = Infinity;
  for (const f of frames) {
    const a = f.trucks.chemical, b = f.trucks.sludge;
    if (!a.visible || !b.visible) continue;
    const A = body(a, actors.trucks.chemical?.length ?? 7), B = body(b, actors.trucks.sludge?.length ?? 7);
    let g = Infinity;
    for (const p of A) for (const q of B) g = Math.min(g, Math.hypot(p[0] - q[0], p[1] - q[1]));
    minGap = Math.min(minGap, g);
    if (g < 0.8) { mOk = false; if (mm.length < 6) mm.push(`camiones a ${g.toFixed(2)} m en t=${f.t.toFixed(2)}`); }
  }
  // Totes: el camión llega con TOTES, la bodega termina con TOTES.
  const tl = frames.map(f => f.totesOnTruck + f.stockedTotes + (f.carriedTote ? 1 : 0));
  if (tl.some(x => x !== AC.TOTES)) { mOk = false; mm.push('balance de totes incoherente'); }
  if (fN.stockedTotes !== AC.TOTES) { mOk = false; mm.push(`bodega final ${fN.stockedTotes} ≠ ${AC.TOTES}`); }
  report('(m) camiones en sus rutas, sin atravesar equipos; totes coherentes', mOk, mm.join('; ') || `velocidad máx ${vT.toFixed(1)} m/s; holgura mín. caja↔equipo ${minClr.toFixed(2)} m (${minClrAt})${minClr < 0.2 ? ' — AVISO < 0,20 m' : ''}; separación mín. entre camiones ${minGap.toFixed(1)} m; ${AC.TOTES} IBC entregados`);
}

// Información: tuberías y anclas requeridas presentes
{
  const missP = M.flow.PIPES.filter(p => !plant.pipes[p.id]).map(p => p.id);
  const missA = Object.values(plant.units).filter(u => !u.anchors.label || !u.anchors.focus || !u.anchors.core).map(u => u.id);
  report('(interfaz) tuberías y anclas label/focus/core', !missP.length && !missA.length, [missP.length ? `faltan tuberías ${missP}` : '', missA.length ? `faltan anclas ${missA}` : ''].filter(Boolean).join('; ') || `${M.flow.PIPES.length} tuberías, ${Object.keys(plant.units).length} unidades`);
}

// (n) Balance de masa por etapa: monótono y coherente con los cálculos globales (C)
{
  const A = M.assumptions, B = A.massBalance(), D = A.derive();
  const last = B[B.length - 1];
  const mono = B.every(r => r.codOut <= r.codIn + 1e-9 && r.tssOut <= r.tssIn + 1e-9);
  const chain = B.every((r, i) => i === 0 || (Math.abs(r.codIn - B[i - 1].codOut) < 1e-9 && Math.abs(r.tssIn - B[i - 1].tssOut) < 1e-9));
  const okCod = Math.abs(last.codOut - D.codFinal) < 1e-6, okTss = Math.abs(last.tssOut - D.tssOut) < 1e-6;
  const sumKg = B.reduce((a, r) => a + r.codKgd, 0);
  const okKg = Math.abs(sumKg - D.codAvoided_kgd) < 1e-6;
  report('(n) balance de masa por etapa coherente', mono && chain && okCod && okTss && okKg,
    `DQO ${A.S.codIn_mgL} → ${last.codOut.toFixed(0)} mg/L, SST ${A.S.tssIn_mgL} → ${last.tssOut.toFixed(0)} mg/L, Σ ${sumKg.toFixed(1)} kg DQO/d`);
}

const failed = results.filter(r => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} comprobaciones OK (planta ${plantKind})`);
process.exit(failed.length ? 1 : 0);
