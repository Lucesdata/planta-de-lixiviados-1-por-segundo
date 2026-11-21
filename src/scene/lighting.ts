/**
 * Iluminación con modos (fase 2): día (aspecto original), atardecer (sol bajo cálido, cielo azul petróleo
 * profundo, luminarias encendidas) y noche (ambiente azul verdoso oscuro sin negros aplastados; la planta
 * sigue legible; luminarias, ventanas, faros y charcos de luz encendidos). Mezcla continua con
 * setDaylight(x ∈ [0,1]) (0 = noche, 0,5 = atardecer, 1 = día). Determinista: sin parpadeos aleatorios.
 * Solo luces direccionales/hemisférica aquí; las pocas luces puntuales de la planta y todas las emisiones
 * nocturnas se gobiernan con applyNightFactor (materials.ts).
 */
import * as THREE from 'three';
import { SITE } from '../plant/layout';
import { applyNightFactor } from './materials';

export type LightingMode = 'day' | 'dusk' | 'night';

export interface Lighting {
  key: THREE.DirectionalLight;
  hemi: THREE.HemisphereLight;
  fill: THREE.DirectionalLight;
  rim: THREE.DirectionalLight;
}

export interface LightingRig extends Lighting {
  mode: LightingMode;
  daylight: number;
  /** Modo discreto (fija daylight 1 / 0,5 / 0). */
  setMode(mode: LightingMode): void;
  /** Mezcla continua 0 (noche) … 0,5 (atardecer) … 1 (día). */
  setDaylight(x: number): void;
  /** Factor de luminarias 0..1 que corresponde al daylight actual. */
  nightFactor(): number;
  update(t: number): void;
}

interface Key {
  sky: [string, string, string]; fog: number;
  hemiSky: number; hemiGround: number; hemiI: number;
  keyColor: number; keyI: number; keyDir: [number, number, number];
  fillColor: number; fillI: number; rimColor: number; rimI: number;
}

const KEYS: Record<LightingMode, Key> = {
  day: {
    sky: ['#c3cdf0', '#d6ddf6', '#e6eaf8'], fog: 0xe2e7f7,
    hemiSky: 0xffffff, hemiGround: 0xc6cee8, hemiI: 1.45,
    keyColor: 0xffffff, keyI: 2.3, keyDir: [-0.55, 1.0, 0.62],
    fillColor: 0xe4eaff, fillI: 0.7, rimColor: 0xdfe6ff, rimI: 0.4,
  },
  dusk: {
    sky: ['#0b1622', '#1a2a3a', '#4a3a36'], fog: 0x2a2c33,
    hemiSky: 0x9fb2cf, hemiGround: 0x4a4438, hemiI: 0.8,
    keyColor: 0xffb27a, keyI: 1.7, keyDir: [-0.9, 0.38, 0.35],
    fillColor: 0x9fb4d0, fillI: 0.35, rimColor: 0xd09a7a, rimI: 0.5,
  },
  night: {
    sky: ['#060d13', '#0b1820', '#12252c'], fog: 0x0f1e25,
    hemiSky: 0x6f96b0, hemiGround: 0x26333a, hemiI: 0.75,
    keyColor: 0xa8bfd8, keyI: 0.42, keyDir: [-0.3, 1.0, 0.45],
    fillColor: 0x7f9cb4, fillI: 0.22, rimColor: 0x8fb0c4, rimI: 0.3,
  },
};

const lerpC = (a: number, b: number, k: number) => new THREE.Color(a).lerp(new THREE.Color(b), k);
const lerpS = (a: string, b: string, k: number) => '#' + new THREE.Color(a).lerp(new THREE.Color(b), k).getHexString();
const lerp = (a: number, b: number, k: number) => a + (b - a) * k;

export function createLighting(scene: THREE.Scene, site = SITE): LightingRig {
  const cx = (site.minX + site.maxX) / 2, cz = (site.minZ + site.maxZ) / 2;
  const center = new THREE.Vector3(cx, 0, cz);
  const halfDiag = Math.hypot(site.maxX - site.minX, site.maxZ - site.minZ) / 2;

  const hemi = new THREE.HemisphereLight(0xcadbe0, 0x3a4643, 0.85);
  scene.add(hemi);

  // Principal: desde el suroeste-alto; las sombras caen hacia el noreste (lejos de la cámara).
  const key = new THREE.DirectionalLight(0xfff2e0, 2.8);
  key.target.position.copy(center);
  key.castShadow = true;
  key.shadow.mapSize.set(4096, 4096);
  const sc = key.shadow.camera;
  sc.left = -halfDiag - 2; sc.right = halfDiag + 2; sc.top = halfDiag + 2; sc.bottom = -halfDiag - 2;
  sc.near = 20; sc.far = 150;
  key.shadow.bias = -0.00025;
  key.shadow.normalBias = 0.025;
  key.shadow.radius = 2.5;
  scene.add(key, key.target);

  const fill = new THREE.DirectionalLight(0xd5e3ea, 0.55);
  fill.position.copy(center).add(new THREE.Vector3(0.9, 0.45, 0.7).multiplyScalar(60));
  fill.target.position.copy(center);
  scene.add(fill, fill.target);

  const rim = new THREE.DirectionalLight(0xbfd3dc, 0.45);
  rim.position.copy(center).add(new THREE.Vector3(0.2, 0.6, -1.0).multiplyScalar(60));
  rim.target.position.copy(center);
  scene.add(rim, rim.target);

  // Fondo con degradado redibujable (lienzo perezoso; sin DOM se usa un color plano)
  let canvas: HTMLCanvasElement | null = null;
  let tex: THREE.CanvasTexture | null = null;
  if (typeof document !== 'undefined') {
    canvas = document.createElement('canvas');
    canvas.width = 4; canvas.height = 256;
    tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
  }
  const paintSky = (cols: [string, string, string]) => {
    if (canvas && tex) {
      const g = canvas.getContext('2d');
      if (g) {
        const grd = g.createLinearGradient(0, 0, 0, 256);
        grd.addColorStop(0, cols[0]); grd.addColorStop(0.55, cols[1]); grd.addColorStop(1, cols[2]);
        g.fillStyle = grd; g.fillRect(0, 0, 4, 256);
        tex.needsUpdate = true;
        scene.background = tex;
        return;
      }
    }
    scene.background = new THREE.Color(cols[1]);
  };

  const rig: LightingRig = {
    key, hemi, fill, rim, mode: 'day', daylight: 1,
    setMode(mode) { rig.setDaylight(mode === 'day' ? 1 : mode === 'dusk' ? 0.5 : 0); rig.mode = mode; },
    nightFactor() { const x = rig.daylight; return Math.max(0, Math.min(1, (0.8 - x) / 0.4)); },
    setDaylight(x) {
      const d = Math.max(0, Math.min(1, Number.isFinite(x) ? x : 1));
      rig.daylight = d;
      rig.mode = d > 0.75 ? 'day' : d > 0.25 ? 'dusk' : 'night';
      const [A, B, k] = d >= 0.5 ? [KEYS.dusk, KEYS.day, (d - 0.5) / 0.5] : [KEYS.night, KEYS.dusk, d / 0.5];
      hemi.color.copy(lerpC(A.hemiSky, B.hemiSky, k));
      hemi.groundColor.copy(lerpC(A.hemiGround, B.hemiGround, k));
      hemi.intensity = lerp(A.hemiI, B.hemiI, k);
      key.color.copy(lerpC(A.keyColor, B.keyColor, k));
      key.intensity = lerp(A.keyI, B.keyI, k);
      const dir = new THREE.Vector3(...A.keyDir).lerp(new THREE.Vector3(...B.keyDir), k).normalize();
      key.position.copy(center).addScaledVector(dir, 80);
      fill.color.copy(lerpC(A.fillColor, B.fillColor, k)); fill.intensity = lerp(A.fillI, B.fillI, k);
      rim.color.copy(lerpC(A.rimColor, B.rimColor, k)); rim.intensity = lerp(A.rimI, B.rimI, k);
      paintSky([lerpS(A.sky[0], B.sky[0], k), lerpS(A.sky[1], B.sky[1], k), lerpS(A.sky[2], B.sky[2], k)]);
      if (scene.fog instanceof THREE.Fog) scene.fog.color.copy(lerpC(A.fog, B.fog, k));
      applyNightFactor(rig.nightFactor());
    },
    update(_t) { applyNightFactor(rig.nightFactor()); },
  };
  rig.setDaylight(1);
  return rig;
}
