/**
 * Mundo: renderizador (antialias, buffer preservado para captura de película, sRGB, mapeo tonal neutro,
 * sombras PCF suaves), fondo azul petróleo con degradado vertical y niebla leve, terreno y losa del sitio
 * con juntas de dilatación. Sin cámara (la define cameraRig.ts).
 */
import * as THREE from 'three';
import { SITE } from '../plant/layout';
import { createLighting, type LightingRig } from './lighting';

export const WORLD_COLORS = {
  skyTop: '#c3cdf0',
  skyMid: '#d6ddf6',
  horizon: '#e6eaf8',
  terrain: 0xd2d9f0,
  slab: 0xf2f4fa,
};

function gradientTexture(): THREE.Texture | null {
  if (typeof document === 'undefined') return null;
  const c = document.createElement('canvas');
  c.width = 4; c.height = 256;
  const g = c.getContext('2d');
  if (!g) return null;
  const grd = g.createLinearGradient(0, 0, 0, 256);
  grd.addColorStop(0, WORLD_COLORS.skyTop);
  grd.addColorStop(0.55, WORLD_COLORS.skyMid);
  grd.addColorStop(1, WORLD_COLORS.horizon);
  g.fillStyle = grd;
  g.fillRect(0, 0, 4, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** Losa con juntas cada 4 m y moteado muy leve (shader en coordenadas de mundo). */
function createSlabMaterial(): THREE.MeshStandardMaterial {
  const m = new THREE.MeshStandardMaterial({ color: WORLD_COLORS.slab, roughness: 0.92, metalness: 0 });
  m.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vSlabW;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvSlabW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vSlabW;')
      .replace('#include <color_fragment>', `#include <color_fragment>
        if (vSlabW.y > -0.01) {
          vec2 q = vSlabW.xz / 4.0;
          vec2 dj = abs(fract(q + 0.5) - 0.5) * 4.0;
          float j = 1.0 - smoothstep(0.012, 0.04, min(dj.x, dj.y));
          vec2 q2 = vSlabW.xz / 12.0;
          vec2 dj2 = abs(fract(q2 + 0.5) - 0.5) * 12.0;
          float j2 = 1.0 - smoothstep(0.02, 0.06, min(dj2.x, dj2.y));
          float mott = 0.5 + 0.5 * sin(vSlabW.x * 0.37 + sin(vSlabW.z * 0.23) * 2.0) * sin(vSlabW.z * 0.29 + 1.3);
          diffuseColor.rgb *= (1.0 - 0.12 * j - 0.1 * j2) * (0.97 + 0.05 * mott);
        }`);
  };
  m.customProgramCacheKey = () => 'ptl-slab';
  return m;
}

/** Terreno exterior (fase 3): pasto/tierra con manchas suaves en coordenadas de mundo (sin texturas). */
function createTerrainMaterial(): THREE.MeshStandardMaterial {
  const m = new THREE.MeshStandardMaterial({ color: WORLD_COLORS.terrain, roughness: 1 });
  m.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vTerW;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvTerW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vTerW;')
      .replace('#include <color_fragment>', `#include <color_fragment>
        vec2 q = vTerW.xz;
        float n1 = sin(q.x * 0.11 + sin(q.y * 0.07) * 2.3) * sin(q.y * 0.13 + 1.7);
        float n2 = sin(q.x * 0.53 + q.y * 0.31) * sin(q.y * 0.47 - q.x * 0.21);
        diffuseColor.rgb *= 0.985 + 0.025 * n1;`);
  };
  m.customProgramCacheKey = () => 'ptl-terrain';
  return m;
}

export function createGround(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'ground';
  const terrain = new THREE.Mesh(new THREE.PlaneGeometry(700, 700), createTerrainMaterial());
  terrain.rotation.x = -Math.PI / 2;
  terrain.position.y = -0.03;
  terrain.receiveShadow = true;
  const w = SITE.maxX - SITE.minX, l = SITE.maxZ - SITE.minZ;
  const slabGeo = new THREE.BoxGeometry(w, 0.24, l);
  const slab = new THREE.Mesh(slabGeo, createSlabMaterial());
  slab.position.set((SITE.minX + SITE.maxX) / 2, -0.12, (SITE.minZ + SITE.maxZ) / 2);
  slab.receiveShadow = true;
  // Bordillo perimetral levemente más oscuro
  const curbMat = new THREE.MeshStandardMaterial({ color: 0xc8d0e8, roughness: 0.9 });
  const curb = new THREE.Group();
  for (const [x, z, sx, sz] of [
    [(SITE.minX + SITE.maxX) / 2, SITE.minZ, w + 0.3, 0.3], [(SITE.minX + SITE.maxX) / 2, SITE.maxZ, w + 0.3, 0.3],
    [SITE.minX, (SITE.minZ + SITE.maxZ) / 2, 0.3, l], [SITE.maxX, (SITE.minZ + SITE.maxZ) / 2, 0.3, l],
  ] as const) {
    const c = new THREE.Mesh(new THREE.BoxGeometry(sx, 0.32, sz), curbMat);
    c.position.set(x, -0.08, z);
    c.receiveShadow = true;
    curb.add(c);
  }
  g.add(terrain, slab, curb);
  return g;
}

export function createWorld(container: HTMLElement): { renderer: THREE.WebGLRenderer; scene: THREE.Scene; lighting: LightingRig; resize(w: number, h: number): void } {
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = gradientTexture() ?? new THREE.Color(WORLD_COLORS.skyMid);
  scene.fog = new THREE.Fog(WORLD_COLORS.horizon, 170, 460);
  scene.add(createGround());
  const lighting = createLighting(scene);

  const resize = (w: number, h: number) => { renderer.setSize(w, h); };
  resize(container.clientWidth || 1600, container.clientHeight || 900);
  return { renderer, scene, lighting, resize };
}
