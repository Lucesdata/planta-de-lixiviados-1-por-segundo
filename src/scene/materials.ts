/**
 * Paleta de materiales compartida (Agente A). Pintura mate con brillo sutil, acero, concreto,
 * fluidos y materiales animados por shader (superficies de líquido, tuberías con pulsos).
 * Toda animación de shader depende de uniformes fijados desde update(t): determinista.
 * Sin DOM en la carga del módulo: las texturas de lienzo se crean de forma perezosa y protegida.
 */
import * as THREE from 'three';

const std = (color: number, roughness = 0.62, metalness = 0, extra: THREE.MeshStandardMaterialParameters = {}) =>
  new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra });

/** Colores base (sRGB). Sobrios: salvia desaturado, gris cálido, gris acero azulado, ocre apagado. */
export const PALETTE = {
  // Fase 4 · estilo claro: equipos blancos, estructura azul viva, barandas amarillas.
  sage: 0xe9edf6,
  sageDark: 0xc6cfe4,
  warmGray: 0xdde2ee,
  offWhite: 0xf6f7fb,
  steelBlue: 0x3d66e6,
  motor: 0x2f5bea,
  concrete: 0xe2e6f0,
  concreteDark: 0xc3cadc,
  ochre: 0xf2b632,
  steel: 0xc9d0dd,
  steelDark: 0x5a6584,
  grating: 0xa3adc6,
  rubber: 0x2b2f3a,
  soil: 0x9a8466,
  gravel: 0xc4bfb3,
  leachate: 0x8e5c26,
  clarified: 0xa07e3e,
  anaerobic: 0x857e3a,
  treated: 0x1fb5a6,
  sludge: 0x5c4026,
  carrier: 0xf2e8c6,
  reed: 0x5fb05a,
  outline: 0x2f6bff,
};

/** Materiales estáticos compartidos (singletons). */
export const MAT = {
  concrete: std(PALETTE.concrete, 0.86),
  concreteDark: std(PALETTE.concreteDark, 0.9),
  sage: std(PALETTE.sage, 0.6, 0.02),
  sageDark: std(PALETTE.sageDark, 0.62, 0.02),
  warmGray: std(PALETTE.warmGray, 0.62),
  offWhite: std(PALETTE.offWhite, 0.58),
  steelBlue: std(PALETTE.steelBlue, 0.55, 0.12),
  motor: std(PALETTE.motor, 0.48, 0.25),
  steel: std(PALETTE.steel, 0.38, 0.72),
  steelDark: std(PALETTE.steelDark, 0.5, 0.55),
  grating: std(PALETTE.grating, 0.72, 0.35),
  rail: std(PALETTE.ochre, 0.55, 0.08),
  rubber: std(PALETTE.rubber, 0.75),
  soil: std(PALETTE.soil, 0.96),
  gravel: std(PALETTE.gravel, 0.92),
  sludgeCake: std(PALETTE.sludge, 0.78),
  carrier: std(PALETTE.carrier, 0.6),
  /** Instancias con instanceColor (plantas): color base blanco. */
  plant: std(0xffffff, 0.78),
  bubble: std(0xdfe6e2, 0.25, 0, { transparent: true, opacity: 0.75, emissive: 0x9fb2ae, emissiveIntensity: 0.25 }),
  flocSpeck: std(0x3d2a16, 0.8),
  glass: new THREE.MeshPhysicalMaterial({
    color: 0xc4dadb, roughness: 0.08, metalness: 0, transparent: true, opacity: 0.16,
    depthWrite: false, side: THREE.DoubleSide,
  }),
  paint: std(0xd8d4c4, 0.7),          // marcas de pavimento (multiplicado por opacidad)
  walkway: std(0xf2b632, 0.85, 0, { transparent: true, opacity: 0.55, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }),
  outline: new THREE.LineBasicMaterial({ color: PALETTE.outline, transparent: true, opacity: 0.7, depthWrite: false }),
};

/* ------------------------------------------------------------------ */
/* Textura de halo radial (perezosa, solo si hay DOM).                  */
/* ------------------------------------------------------------------ */
let glowTex: THREE.Texture | null | undefined;
function getGlowTexture(): THREE.Texture | null {
  if (glowTex !== undefined) return glowTex;
  if (typeof document === 'undefined') { glowTex = null; return null; }
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  if (!g) { glowTex = null; return null; }
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,0.9)');
  grd.addColorStop(0.45, 'rgba(255,255,255,0.35)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  glowTex = new THREE.CanvasTexture(c);
  glowTex.colorSpace = THREE.SRGBColorSpace;
  return glowTex;
}

/** Halo de suelo de selección: aditivo, opacidad baja. */
export function createGroundGlowMaterial(): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({
    color: PALETTE.outline, map: getGlowTexture(), transparent: true, opacity: 0.28,
    blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
  });
}

/* ------------------------------------------------------------------ */
/* Lámpara de estado                                                    */
/* ------------------------------------------------------------------ */
export const STATUS_COLORS = {
  idle: 0x7f8789,
  active: 0x7fc07a,
  standby: 0xd9a441,
  alert: 0xe2643c,
} as const;

export function createLampMaterial(): THREE.MeshStandardMaterial {
  return std(STATUS_COLORS.idle, 0.35, 0, { emissive: STATUS_COLORS.idle, emissiveIntensity: 0.15 });
}

/* ------------------------------------------------------------------ */
/* Material de líquido con patrón procedimental (onBeforeCompile).      */
/* ------------------------------------------------------------------ */
export type LiquidMode = 'still' | 'ripple' | 'swirl' | 'flow' | 'sheen' | 'aeration';
const MODE_ID: Record<LiquidMode, number> = { still: 0, ripple: 1, swirl: 2, flow: 3, sheen: 4, aeration: 5 };

export interface LiquidOptions {
  color: number;
  /** Color de los reflejos/patrón (más claro). */
  hi?: number;
  mode?: LiquidMode;
  opacity?: number;
  /** Centro del patrón (mundo, x/z). */
  center?: [number, number];
  /** Dirección del flujo (mundo, x/z) para 'flow' y 'sheen'. */
  dir?: [number, number];
  /** Velocidad angular/lineal del patrón. */
  speed?: number;
  /** Escala espacial del patrón. */
  scale?: number;
  /** Longitud (m) del recorrido para 'sheen'. */
  span?: number;
  roughness?: number;
  side?: THREE.Side;
}

export interface LiquidMaterial {
  material: THREE.MeshStandardMaterial;
  uniforms: {
    uTime: { value: number }; uMotion: { value: number }; uGlow: { value: number };
    uSpread: { value: number }; uMode: { value: number };
    uCenter: { value: THREE.Vector2 }; uDir: { value: THREE.Vector2 };
    uSpeed: { value: number }; uScale: { value: number }; uSpan: { value: number };
    uHi: { value: THREE.Color };
  };
}

const LIQUID_FRAG_HEAD = /* glsl */`
varying vec3 vWPosL;
uniform float uTime; uniform float uMotion; uniform float uGlow; uniform float uSpread; uniform float uMode;
uniform vec2 uCenter; uniform vec2 uDir; uniform float uSpeed; uniform float uScale; uniform float uSpan;
uniform vec3 uHi;
float lqHash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float lqPattern(out float mask){
  mask = 1.0;
  vec2 d = vWPosL.xz - uCenter;
  float r = length(d);
  float a = atan(d.y, d.x);
  float m = uMotion;
  if (uMode < 0.5) return 0.0;
  if (uMode < 1.5) { // ondas suaves con giro lento (mezclador)
    float w = sin(r * 9.0 * uScale - uTime * 1.6 * uSpeed + sin(a * 3.0 + uTime * 0.4 * uSpeed) * 1.4);
    return smoothstep(0.75, 1.0, w) * (0.3 + 0.7 * m);
  }
  if (uMode < 2.5) { // remolino espiral
    float w = sin(a * 4.0 + r * 11.0 * uScale - uTime * uSpeed);
    float w2 = sin(a * 7.0 - r * 6.0 * uScale - uTime * uSpeed * 0.7);
    return smoothstep(0.35, 1.0, w * 0.7 + w2 * 0.3) * (0.25 + 0.75 * m);
  }
  if (uMode < 3.5) { // flujo en canal
    vec2 dir = normalize(uDir);
    vec2 pp = vec2(-dir.y, dir.x);
    float s = dot(d, dir); float q = dot(d, pp);
    float w = sin(s * 7.0 * uScale - uTime * 3.2 * uSpeed + sin(q * 9.0 + s * 1.7) * 1.3);
    float w2 = sin(s * 13.0 * uScale - uTime * 4.1 * uSpeed + q * 5.0);
    return smoothstep(0.7, 1.0, w * 0.7 + w2 * 0.3) * (0.3 + 0.7 * m);
  }
  if (uMode < 4.5) { // lámina de agua que avanza sobre el lecho
    vec2 dir = normalize(uDir);
    float s = dot(d, dir);
    float front = uSpread * uSpan;
    mask = 1.0 - smoothstep(front - 0.8, front, s);
    float w = sin(s * 4.0 * uScale - uTime * 1.2 * uSpeed + sin(dot(d, vec2(-dir.y, dir.x)) * 3.0) * 1.2);
    return mask * (0.25 + 0.5 * smoothstep(0.2, 1.0, w)) * (0.4 + 0.6 * m);
  }
  // aireación: celdas con anillos que brotan
  vec2 g = vWPosL.xz * 1.7 * uScale;
  vec2 cell = floor(g);
  vec2 f = fract(g) - 0.5;
  float h = lqHash(cell);
  float rr = length(f);
  float ring = sin(rr * 30.0 - uTime * (4.0 + 2.0 * h) * uSpeed + h * 6.283);
  float boil = 0.5 + 0.5 * sin(dot(vWPosL.xz, vec2(3.1, 2.3)) + uTime * 1.7) * sin(dot(vWPosL.xz, vec2(-2.2, 3.7)) - uTime * 1.3);
  return (smoothstep(0.8, 1.0, ring) * (1.0 - smoothstep(0.1, 0.42, rr)) * 0.7 + boil * 0.35) * m;
}
`;

export function createLiquidMaterial(o: LiquidOptions): LiquidMaterial {
  const opacity = o.opacity ?? 1;
  const material = std(o.color, o.roughness ?? 0.22, 0.0, {
    transparent: opacity < 1, opacity, depthWrite: opacity >= 1, side: o.side ?? THREE.FrontSide,
    emissive: o.color, emissiveIntensity: 0.0,
  });
  const uniforms: LiquidMaterial['uniforms'] = {
    uTime: { value: 0 }, uMotion: { value: 0 }, uGlow: { value: 0 }, uSpread: { value: 1 },
    uMode: { value: MODE_ID[o.mode ?? 'still'] },
    uCenter: { value: new THREE.Vector2(o.center?.[0] ?? 0, o.center?.[1] ?? 0) },
    uDir: { value: new THREE.Vector2(o.dir?.[0] ?? 1, o.dir?.[1] ?? 0) },
    uSpeed: { value: o.speed ?? 1 }, uScale: { value: o.scale ?? 1 }, uSpan: { value: o.span ?? 1 },
    uHi: { value: new THREE.Color(o.hi ?? 0xcfc0a0) },
  };
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPosL;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWPosL = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\n' + LIQUID_FRAG_HEAD)
      .replace('#include <color_fragment>', `#include <color_fragment>
        float lqMask; float lqP = lqPattern(lqMask);
        diffuseColor.rgb = mix(diffuseColor.rgb, uHi, clamp(lqP * 0.22, 0.0, 1.0));
        diffuseColor.a *= lqMask;`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        totalEmissiveRadiance += uHi * (lqP * 0.05 * (0.5 + uGlow)) + diffuseColor.rgb * uGlow * 0.3;`);
  };
  material.customProgramCacheKey = () => 'ptl-liquid';
  return { material, uniforms };
}

/* ------------------------------------------------------------------ */
/* Carcasa con ventana de inspección (descarte en el shader).           */
/* ------------------------------------------------------------------ */
export interface WindowSpec {
  /** Ángulo central (rad) en convención de LatheGeometry: phi = atan2(x, z) local. */
  phi: number;
  halfWidth: number;
  y0: number;
  y1: number;
  /** Radio de la carcasa cilíndrica. */
  r: number;
  /** Para conos: cota del vértice y radio en el vértice; cono hasta yc. Sin cono: yc = -1e3. */
  yApex?: number;
  rApex?: number;
  yc?: number;
}

const shellCache = new Map<string, THREE.MeshStandardMaterial>();

/** Material de carcasa de tanque con una ranura de inspección hacia la cámara. Coordenadas locales de la malla. */
export function createWindowedShellMaterial(color: number, w: WindowSpec, roughness = 0.6): THREE.MeshStandardMaterial {
  const key = `${color}|${JSON.stringify(w)}`;
  const hit = shellCache.get(key);
  if (hit) return hit;
  const m = std(color, roughness, 0.02, { side: THREE.DoubleSide });
  const u = {
    uWin: { value: new THREE.Vector4(w.phi, w.halfWidth, w.y0, w.y1) },
    uCone: { value: new THREE.Vector4(w.r, w.yApex ?? -1e3, w.rApex ?? w.r, w.yc ?? -1e3) },
  };
  m.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, u);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vLocalP;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvLocalP = position;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vLocalP; uniform vec4 uWin; uniform vec4 uCone;')
      .replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
        {
          float ph = atan(vLocalP.x, vLocalP.z);
          float dph = abs(mod(ph - uWin.x + 3.14159265, 6.2831853) - 3.14159265);
          float rr = length(vLocalP.xz);
          float rs = vLocalP.y > uCone.w ? uCone.x : mix(uCone.z, uCone.x, clamp((vLocalP.y - uCone.y) / max(uCone.w - uCone.y, 1e-3), 0.0, 1.0));
          if (dph < uWin.y && vLocalP.y > uWin.z && vLocalP.y < uWin.w && abs(rr - rs) < 0.12) discard;
        }`);
  };
  m.customProgramCacheKey = () => 'ptl-shell-window';
  shellCache.set(key, m);
  return m;
}

/* ------------------------------------------------------------------ */
/* Material de tubería con frente de llenado, pulsos y chevrones.       */
/* ------------------------------------------------------------------ */
export interface PipeUniforms {
  uTime: { value: number };
  uFlow: { value: number };
  /** Frente de llenado en metros desde el inicio del tramo. */
  uFront: { value: number };
  uLength: { value: number };
  uHighlight: { value: number };
  uFluid: { value: THREE.Color };
}

const PIPE_FRAG_HEAD = /* glsl */`
varying float vS; varying float vAng;
uniform float uTime; uniform float uFlow; uniform float uFront; uniform float uLength; uniform float uHighlight;
uniform vec3 uFluid;
`;

export function createPipeMaterial(pipeColor: number, fluidColor: number): { material: THREE.MeshStandardMaterial; uniforms: PipeUniforms } {
  const material = std(pipeColor, 0.5, 0.18);
  const uniforms: PipeUniforms = {
    uTime: { value: 0 }, uFlow: { value: 0 }, uFront: { value: 0 }, uLength: { value: 1 },
    uHighlight: { value: 0 }, uFluid: { value: new THREE.Color(fluidColor) },
  };
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aS; varying float vS; varying float vAng;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvS = aS; vAng = uv.y;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\n' + PIPE_FRAG_HEAD)
      .replace('#include <color_fragment>', `#include <color_fragment>
        float pLit = 1.0 - smoothstep(uFront - 0.12, uFront + 0.02, vS);
        pLit *= step(0.001, uFront);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.72 + uFluid * 0.3, pLit * 0.7);
        diffuseColor.rgb *= 1.0 + uHighlight * 0.15;`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        {
          // 0 = generatriz superior, 1 = inferior
          float side = abs(fract(vAng + 0.5) - 0.5) * 2.0;
          // Pulsos suaves a lo largo del tubo (todo el perímetro, intensidad baja)
          float kp = fract((vS - uTime * 1.1) / 1.6);
          float soft = exp(-pow((kp - 0.5) / 0.09, 2.0));
          // Chevrón fino solo en la franja superior (apunta en el sentido del flujo)
          float topBand = 1.0 - smoothstep(0.22, 0.32, side);
          float kc = fract((vS + side * 0.9 - uTime * 1.1) / 1.6);
          float chev = smoothstep(0.0, 0.015, kc) * (1.0 - smoothstep(0.035, 0.06, kc)) * topBand;
          float act = uFlow * (0.35 + 0.65 * pLit);
          float headOn = step(0.02, uFront) * (1.0 - step(uLength - 0.02, uFront));
          float head = headOn * exp(-pow((vS - uFront) / 0.3, 2.0));
          vec3 nrm = normalize(normal);
          float fres = pow(1.0 - abs(dot(nrm, normalize(vViewPosition))), 2.5);
          totalEmissiveRadiance += uFluid * (pLit * 0.03 + act * (soft * 0.22 + chev * 0.8) + head * 0.75)
            + vec3(0.37, 0.83, 0.88) * fres * uHighlight * 0.35;
        }`);
  };
  material.customProgramCacheKey = () => 'ptl-pipe';
  return { material, uniforms };
}

/** Material estático (accesorios/bridas) del color de una línea; cacheado por color. */
const fitCache = new Map<number, THREE.MeshStandardMaterial>();
export function getFittingMaterial(pipeColor: number): THREE.MeshStandardMaterial {
  let m = fitCache.get(pipeColor);
  if (!m) { m = std(pipeColor, 0.48, 0.25); fitCache.set(pipeColor, m); }
  return m;
}

/* ------------------------------------------------------------------ */
/* Fase 2: materiales adicionales                                       */
/* ------------------------------------------------------------------ */
export const MAT2 = {
  /** Polietileno de tanques día (blanco cálido, levemente translúcido). */
  pe: std(0xd9d3c2, 0.45, 0, { transparent: true, opacity: 0.88 }),
  peBlue: std(0x3d6fe6, 0.5),
  bund: std(0xc9d0e3, 0.7, 0.05),
  asphalt: std(0xbcc6e6, 0.95),
  curb: std(0xe4e8f4, 0.9),
  roadPaint: std(0xffffff, 0.8, 0, { polygonOffset: true, polygonOffsetFactor: -2 }),
  roadPaintYellow: std(0xf2b632, 0.8, 0, { polygonOffset: true, polygonOffsetFactor: -2 }),
  apron: std(0xdfe4f2, 0.92),
  sand: std(0xdcd2b8, 0.95),
  roofSteel: std(0x3d66e6, 0.5, 0.2, { side: THREE.DoubleSide }),
  wall: std(0xf5f6fa, 0.7),
  wallTrim: std(0x2f5bea, 0.55, 0.12),
  rollDoor: std(0xdfe4ef, 0.5, 0.2),
  ibcCage: std(0xb9c1d0, 0.4, 0.6),
  ibcTank: std(0xe4e1d6, 0.4, 0, { transparent: true, opacity: 0.82 }),
  pallet: std(0xc9a46a, 0.85),
  ductTape: std(0x3e4448, 0.6),
  sludgeDry: std(0x7a5a3a, 0.95),
  flareSteel: std(0x9aa4b8, 0.55, 0.4),
  grit: std(0xcdc7b6, 0.95),
};

/**
 * Registro de materiales nocturnos: luminarias, ventanas y faros cuya emisión depende del modo de
 * iluminación (día / atardecer / noche). `applyNightFactor(f)` lo fija el rig de lighting.ts; f ∈ [0,1].
 */
interface NightEntry { m: THREE.MeshStandardMaterial | THREE.MeshBasicMaterial; on: number; off: number; kind: 'emissive' | 'opacity' }
const nightRegistry: NightEntry[] = [];
export const NIGHT = { value: 0 };

/** Lente/fuente emisiva cuyo brillo sigue al modo de iluminación (encendida al atardecer y de noche). */
export function createNightEmissive(color: number, on = 1.6, off = 0.05, base = 0x2a2d2e): THREE.MeshStandardMaterial {
  const m = std(base, 0.35, 0, { emissive: color, emissiveIntensity: off });
  nightRegistry.push({ m, on, off, kind: 'emissive' });
  return m;
}

let poolTex: THREE.Texture | null | undefined;
function getPoolTexture(): THREE.Texture | null {
  if (poolTex !== undefined) return poolTex;
  if (typeof document === 'undefined') { poolTex = null; return null; }
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  if (!g) { poolTex = null; return null; }
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.35, 'rgba(255,255,255,0.55)');
  grd.addColorStop(0.7, 'rgba(255,255,255,0.15)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  poolTex = new THREE.CanvasTexture(c);
  poolTex.colorSpace = THREE.SRGBColorSpace;
  return poolTex;
}

/** Charco de luz en el suelo (decal aditivo). Opacidad ∝ factor nocturno. */
export function createLightPoolMaterial(color = 0xffd9a0, on = 0.34): THREE.MeshBasicMaterial {
  const m = new THREE.MeshBasicMaterial({
    color, map: getPoolTexture(), transparent: true, opacity: 0, blending: THREE.AdditiveBlending,
    depthWrite: false, toneMapped: false, polygonOffset: true, polygonOffsetFactor: -4,
  });
  nightRegistry.push({ m, on, off: 0, kind: 'opacity' });
  return m;
}

/** Ventanas: vidrio oscuro de día, cálido encendido de noche (el edificio activo añade `boost`). */
export function createWindowMaterial(): THREE.MeshStandardMaterial {
  const m = std(0x2c3a40, 0.15, 0.2, { emissive: 0xffd8a0, emissiveIntensity: 0.05 });
  nightRegistry.push({ m, on: 1.1, off: 0.05, kind: 'emissive' });
  return m;
}

const nightLights: { l: THREE.Light; on: number }[] = [];
/** Luz real cuya intensidad = on × factor nocturno. */
/** (Siempre visibles: cambiar la cantidad de luces recompilaría los shaders al cambiar de modo.) */
export function registerNightLight(l: THREE.Light, on: number): void { nightLights.push({ l, on }); l.intensity = 0; }

export function applyNightFactor(f: number): void {
  NIGHT.value = f;
  for (const e of nightLights) e.l.intensity = e.on * f;
  for (const e of nightRegistry) {
    const v = e.off + (e.on - e.off) * f;
    if (e.kind === 'emissive') (e.m as THREE.MeshStandardMaterial).emissiveIntensity = v * ((e.m.userData.boost as number) ?? 1);
    else { e.m.opacity = v; e.m.visible = v > 0.002; }
  }
}
