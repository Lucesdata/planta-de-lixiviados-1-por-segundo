// Validación en navegador (Playwright) sobre dist/index.html?film=1, cada 0,5 s:
// (g) etiquetas legibles (sin solapes, dentro del escenario, fuera de los paneles)
// (h) encuadre: ancla 'focus' de las unidades activas dentro de la región segura
// (i) rastreador: exactamente un paso activo en 5–44 s
// (j) la tarjeta de detalle coincide con la selección (window.__sim.getState())
// (k) tarjeta Logística/Personal y nota de alumbrado coherentes con el estado
// Guarda capturas de verificación en out/checks/. Uso: node tools/validate-browser.mjs [--html ruta] [--light day|dusk|night|story]
//   [--times 3,8,13] (solo esos instantes) [--stub] (planta de respaldo)
import { createRequire } from 'node:module';
// Playwright puede estar instalado globalmente (NODE_PATH): se resuelve con require.
const { chromium } = createRequire(import.meta.url)('playwright');
import { mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const arg = (k, d) => { const i = argv.indexOf(`--${k}`); return i >= 0 ? argv[i + 1] : d; };
const html = resolve(arg('html', join(root, 'dist/index.html')));
if (!existsSync(html)) { console.error(`No existe ${html}: ejecute npm run build`); process.exit(2); }
const light = arg('light', 'day');
const stub = argv.includes('--stub');
const checks = join(root, light === 'day' ? 'out/checks' : `out/checks-${light}`);
mkdirSync(checks, { recursive: true });
const STILLS = new Set([3, 8, 13, 17, 21, 27, 33, 36, 41, 48]);
const TIMES = arg('times', null) ? arg('times').split(',').map(Number) : Array.from({ length: 101 }, (_, k) => k * 0.5);

const launch = async () => {
  try { return await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] }); }
  catch { return await chromium.launch(); }
};
const browser = await launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
const errors = [];
page.on('pageerror', e => errors.push(e.message));
await page.goto(pathToFileURL(html).href + `?film=1&light=${light}${stub ? '&stub=1' : ''}`);
await page.waitForFunction(() => window.__film && window.__sim, null, { timeout: 60000 });
await page.evaluate(() => window.__film.ready);

const fails = { g: [], h: [], i: [], j: [], k: [] };
let samples = 0, labelCount = 0, auxCount = 0;
const info = await page.evaluate(() => { const S = window.__sim.getState(); return { plantKind: S.plantKind, hasRealActors: S.hasRealActors, lightMode: S.lightMode }; });
console.log(`INFO  planta «${info.plantKind}», actores ${info.hasRealActors ? 'reales' : 'de respaldo'}, iluminación ${info.lightMode}`);
for (const t of TIMES) {
  await page.evaluate(t => window.__film.renderFrame(t), t);
  const r = await page.evaluate(() => {
    const S = window.__sim.getState();
    const g = window.__sim.grid;
    const vis = e => e && getComputedStyle(e).display !== 'none' && e.offsetParent !== null;
    const rect = e => { const b = e.getBoundingClientRect(); return { x0: b.left, y0: b.top, x1: b.right, y1: b.bottom }; };
    const labels = [...document.querySelectorAll('.lbl')].filter(vis).map(e => ({ id: e.dataset.unit, ...rect(e) }));
    const panels = ['.top', '.kpi', '.legend', '.events', '.detail .hdr', '.detail .body', '.detail .thumb', '.split', '.caption > span', '.tracker']
      .flatMap(sel => [...document.querySelectorAll(sel)].filter(vis).map(e => ({ sel, ...rect(e) })));
    const focus = S.focusUnits.map(id => ({ id, p: window.__sim.projectAnchor(id, 'focus') }));
    const active = document.querySelectorAll('.stp.active').length;
    const dn = document.querySelector('[data-role=detail-name]');
    const dt = document.querySelector('[data-role=detail-tag]');
    const info = S.selected ? window.__sim.unitInfo(S.selected) : null;
    const staff = document.querySelector('[data-kpi=kpi_staff]');
    const foot = document.querySelector('[data-role=lights]');
    const facts = [...document.querySelectorAll('.detail .fr')].filter(vis).map(e => ({ key: e.dataset.fact, v: e.querySelector('.fv span')?.textContent, cls: e.querySelector('.cls')?.textContent }));
    const detailBody = document.querySelector('.detail .body');
    const split = document.querySelector('.split');
    return {
      t: S.t, selected: S.selected, detailUnit: S.detailUnit, labels, panels, focus, active, safe: g.safe,
      staffV: staff?.querySelector('.v')?.textContent, staffS: staff?.querySelector('.s')?.textContent, foot: foot?.textContent,
      lg: S.state.logistics, lit: S.state.lighting, facts,
      bodyRect: detailBody && vis(detailBody) ? rect(detailBody) : null, splitRect: split && vis(split) ? rect(split) : null,
      aux: labels.filter(l => ['screen', 'dosC', 'dosF', 'pumpB', 'flare', 'thick', 'control'].includes(l.id) || l.id.startsWith('truck-')).length,
      detailName: dn && vis(dn) ? dn.textContent : null, detailTag: dt && vis(dt) ? dt.textContent : null, info,
    };
  });
  samples++;
  labelCount += r.labels.length;
  auxCount += r.aux;
  // (k) Logística/alumbrado
  if (!/: 8$/.test(r.staffV ?? '')) fails.k.push(`t=${t} personal «${r.staffV}»`);
  const TK = { away: 'Fuera', enroute: 'En ruta', bay: 'En bahía', unloading: 'Descargando', loading: 'Cargando', leaving: 'Salida' };
  if (r.lg && r.staffS !== `Químicos: ${TK[r.lg.trucks.chemical]} · Lodos: ${TK[r.lg.trucks.sludge]}`) fails.k.push(`t=${t} camiones «${r.staffS}»`);
  if (r.foot !== `Alumbrado: ${r.lit?.fixtures ? 'Encendido' : 'Apagado'}`) fails.k.push(`t=${t} alumbrado «${r.foot}»`);
  // (j2) cifras de la ficha = UNIT_FACTS (comprobado en Node); aquí: la ficha no invade la tarjeta de reparto.
  if (r.bodyRect && r.splitRect && r.bodyRect.y1 > r.splitRect.y0 - 2) fails.j.push(`t=${t} ficha (${r.bodyRect.y1.toFixed(0)}) solapa reparto (${r.splitRect.y0.toFixed(0)})`);
  if (r.bodyRect && r.bodyRect.y1 > 936) fails.j.push(`t=${t} ficha excede la columna (${r.bodyRect.y1.toFixed(0)})`);
  const ov = (a, b) => Math.max(0, Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0)) * Math.max(0, Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0));
  // (g)
  for (let a = 0; a < r.labels.length; a++) {
    const A = r.labels[a];
    if (A.x0 < 0 || A.y0 < 0 || A.x1 > 1920 || A.y1 > 1080) fails.g.push(`t=${t} ${A.id} fuera del escenario`);
    for (let b = a + 1; b < r.labels.length; b++) if (ov(A, r.labels[b]) > 6) fails.g.push(`t=${t} ${A.id}×${r.labels[b].id} se solapan`);
    for (const P of r.panels) if (ov(A, P) > 2) fails.g.push(`t=${t} ${A.id} bajo panel ${P.sel}`);
  }
  // (h)
  for (const f of r.focus) {
    if (!f.p) { fails.h.push(`t=${t} ${f.id} sin ancla focus`); continue; }
    const [x, y] = f.p;
    if (x < r.safe.x0 || x > r.safe.x1 || y < r.safe.y0 || y > r.safe.y1) fails.h.push(`t=${t} ${f.id} en (${x.toFixed(0)}, ${y.toFixed(0)}) fuera de la región segura`);
  }
  // (i)
  if (t >= 5 && t < 44 && r.active !== 1) fails.i.push(`t=${t} pasos activos=${r.active}`);
  // (j)
  if (r.selected) {
    if (r.detailUnit !== r.selected || r.detailName !== r.info.name.es || r.detailTag !== r.info.tag) fails.j.push(`t=${t} selected=${r.selected} tarjeta=${r.detailName}/${r.detailTag}`);
  } else if (r.detailName) fails.j.push(`t=${t} tarjeta con datos sin selección`);
  if (STILLS.has(t)) await page.screenshot({ path: join(checks, `check_t${String(t).padStart(2, '0')}.png`) });
}
await browser.close();

const names = { g: '(g) etiquetas legibles', h: '(h) encuadre de unidades activas', i: '(i) un único paso activo 5–44 s', j: '(j) tarjeta de detalle = selección y dentro de su columna', k: '(k) tarjeta Logística/Personal y alumbrado coherentes' };
let bad = 0;
for (const k of ['g', 'h', 'i', 'j', 'k']) {
  const f = fails[k];
  if (f.length) bad++;
  console.log(`${f.length ? 'FAIL' : 'PASS'}  ${names[k]}${f.length ? ' — ' + f.slice(0, 6).join('; ') + (f.length > 6 ? ` (+${f.length - 6})` : '') : ''}`);
}
if (errors.length) { bad++; console.log(`FAIL  errores de página: ${errors.slice(0, 3).join(' | ')}`); }
console.log(`\n${samples} instantes (iluminación ${light}), ${(labelCount / samples).toFixed(1)} etiquetas visibles de media (${(auxCount / samples).toFixed(1)} auxiliares/camiones); capturas en ${checks}`);
process.exit(bad ? 1 : 0);
