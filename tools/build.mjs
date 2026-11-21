// Compila src/main.ts → dist/app.js y genera dist/index.html (un solo archivo autónomo, JS en línea).
import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
mkdirSync(dist, { recursive: true });

const res = await build({
  entryPoints: [join(root, 'src/main.ts')],
  bundle: true, format: 'iife', target: 'es2020', minify: true,
  write: false, legalComments: 'none', logLevel: 'warning',
});
const js = res.outputFiles[0].text;
writeFileSync(join(dist, 'app.js'), js);
const html = readFileSync(join(root, 'index.html'), 'utf8');
const marker = '<script type="module" src="./src/main.ts"></script>';
if (!html.includes(marker)) throw new Error('index.html: falta el marcador de script');
// Reemplazo con función: evita que «$&», «$'» del JS minificado se interpreten.
const single = html.replace(marker, () => `<script>${js.replace(/<\/script/gi, '<\\/script')}</script>`);
writeFileSync(join(dist, 'index.html'), single);
console.log(`dist/index.html ${(single.length / 1024).toFixed(0)} KB`);
