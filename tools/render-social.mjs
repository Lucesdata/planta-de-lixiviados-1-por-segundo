// Corte vertical para redes (fase 5): dist/index.html?film=1&social=1 a 1080×1920 (dsf 1), renderiza cada
// cuadro con window.__film.renderFrame(t), captura PNG en out/frames/%05d.png y ffmpeg → MP4 (h264, yuv420p, crf 18).
// Opciones: --fps 30 --from 0 --to 50 --step 1 --lang es --html dist/index.html --out out/ptl-buenaventura-film.mp4
import { createRequire } from 'node:module';
import { mkdirSync, rmSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const { chromium } = createRequire(import.meta.url)('playwright');
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const arg = (k, d) => { const i = argv.indexOf(`--${k}`); return i >= 0 ? argv[i + 1] : d; };
const fps = Number(arg('fps', 30));
const from = Number(arg('from', 0));
const to = Number(arg('to', 0));
const step = Math.max(1, Number(arg('step', 1)));
const lang = arg('lang', 'es');
const html = resolve(arg('html', join(root, 'dist/index.html')));
const outFile = resolve(arg('out', join(root, 'out/ptl-buenaventura-social.mp4')));
const W = 1080, H = 1920;
if (!existsSync(html)) { console.error(`No existe ${html}: ejecute npm run build`); process.exit(2); }

const framesDir = join(root, 'out/frames-social');
rmSync(framesDir, { recursive: true, force: true });
mkdirSync(framesDir, { recursive: true });
mkdirSync(dirname(outFile), { recursive: true });


const launch = async () => {
  try { return await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] }); }
  catch { return await chromium.launch(); }
};
const browser = await launch();
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
page.on('pageerror', e => console.error('pageerror:', e.message));
await page.goto(`${pathToFileURL(html).href}?film=1&social=1&fps=${fps}&w=${W}&h=${H}&lang=${lang}`);
await page.waitForFunction(() => window.__film, null, { timeout: 60000 });
await page.evaluate(() => window.__film.ready);
const dur = await page.evaluate(() => window.__film.duration);
const end = to > 0 ? Math.min(to, dur) : dur;
const times = [];
for (let i = Math.ceil(from * fps - 1e-9); i <= Math.floor(end * fps - 1e-9); i += step) times.push(i / fps);

const t0 = Date.now();
for (let n = 0; n < times.length; n++) {
  await page.evaluate(t => window.__film.renderFrame(t), times[n]);
  await page.screenshot({ path: join(framesDir, `${String(n).padStart(5, '0')}.png`) });
  if (n % 30 === 0 || n === times.length - 1) {
    const el = (Date.now() - t0) / 1000;
    process.stdout.write(`\rcuadro ${n + 1}/${times.length} (t=${times[n].toFixed(2)} s) · ${(el / (n + 1)).toFixed(2)} s/cuadro   `);
  }
}
process.stdout.write('\n');
await browser.close();

const outFps = fps / step;
const ff = spawnSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(outFps), '-i', join(framesDir, '%05d.png'),
  '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-preset', 'medium', '-movflags', '+faststart', outFile], { stdio: 'inherit' });
if (ff.status !== 0) { console.error('ffmpeg falló'); process.exit(1); }
console.log(`${outFile} · ${times.length} cuadros a ${outFps} fps (${(times.length / outFps).toFixed(1)} s)`);
