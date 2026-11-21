/**
 * Clarificadores cónicos CL-101 / CL-201: cilindro vertical + cono invertido sobre patas.
 * Ambos tienen válvula de purga de lodos en el vértice (puerto 'sludge'; en CL-201 es un supuesto de la
 * fase 2). Geometría coherente con los supuestos S.clarD_m / clarCylH_m / clarConeH_m (assumptions.ts). Ventana de inspección con partículas que sedimentan y capa de lodo.
 */
import * as THREE from 'three';
import type { PlantUnit } from '../types';
import { CAMERA_DIR, UNIT_BY_ID, type UnitSpec } from '../layout';
import { MAT, PALETTE, createLiquidMaterial, createWindowedShellMaterial } from '../../scene/materials';
import {
  Batcher, addInspectionWindow, arcRing, cameraPhi, createRoot, createStatusLamp, cyl, finalizeUnit,
  fract, hash01, lathe, nozzle, outlineProfile, rbox, setInstance, T,
} from './common';

interface ClarOpts {
  purge: boolean;
  liquid: number;
  particle: number;
  /** Altura máxima de la capa de lodo sobre el vértice (m). */
  sludgeMax: number;
  seed: number;
  /** Cota de la boquilla de entrada (m). */
  inY: number;
  /** Cota del puerto de purga (m). */
  purgeY: number;
}

/** Cotas del clarificador (hipótesis geométrica; ver docs/LAYOUT.md). */
export const CLAR_GEOM = { yApex: 0.85, yc: 1.7, rApex: 0.09, wall: 0.05 };

function createClarifier(spec: UnitSpec, o: ClarOpts): PlantUnit {
  const R = spec.size.d! / 2, y1 = spec.base + spec.size.h;
  const { yApex, yc, rApex, wall: t } = CLAR_GEOM;
  const rAt = (y: number) => (y >= yc ? R : rApex + (R - rApex) * (y - yApex) / (yc - yApex));
  const root = createRoot(spec);
  const b = new Batcher();
  const phi = cameraPhi(CAMERA_DIR);

  // Patas (4) con placas base y arriostramiento horizontal
  const legR = R * 0.78;
  const legs: THREE.Vector3[] = [];
  for (let k = 0; k < 4; k++) {
    const a = Math.PI / 4 + k * Math.PI / 2;
    const p = new THREE.Vector3(Math.sin(a) * legR, 0, Math.cos(a) * legR);
    legs.push(p);
    const yTop = yApex + ((legR - rApex) / (R - rApex)) * (yc - yApex) + 0.04; // apoyo bajo el cono
    b.add(rbox(0.1, yTop, 0.1, 0.015), MAT.steelBlue, T(p.x, yTop / 2, p.z));
    b.add(rbox(0.22, 0.03, 0.22, 0.01), MAT.steelDark, T(p.x, 0.015, p.z));
  }
  for (let k = 0; k < 4; k++) b.rod(legs[k].clone().setY(0.35), legs[(k + 1) % 4].clone().setY(0.35), 0.025, MAT.steelBlue, 6);
  arcRing(b, R + 0.012, 0.035, yc, 0, Math.PI * 2, MAT.steelBlue);

  // Carcasa (cono + cilindro, abierta arriba) con ventana
  const win = { phi, halfWidth: 0.38, y0: yApex + 0.3, y1: y1 - 0.38, r: R, yApex, rApex, yc };
  const shellMat = createWindowedShellMaterial(PALETTE.warmGray, win);
  b.add(lathe([[rApex, yApex], [R, yc], [R, y1], [R - t, y1], [R - t, yc + 0.02], [rApex - 0.03, yApex + 0.06]], 0.05, 64), shellMat);
  arcRing(b, R + 0.005, 0.04, y1, 0, Math.PI * 2, MAT.warmGray);
  const glass = addInspectionWindow(b, root, win, [[rAt(win.y0), win.y0], [R, yc], [R, win.y1]]);

  // Internos: canaleta perimetral, campana de alimentación central y puente
  b.add(lathe([[R - t, y1 - 0.14], [R - 0.2, y1 - 0.14], [R - 0.2, y1 - 0.03]], 0.01, 48), MAT.steelDark);
  b.add(cyl(0.28, 0.85, 32, 0.28, true), MAT.steel, T(0, y1 - 0.33, 0));
  b.add(rbox(2 * R + 0.1, 0.09, 0.16, 0.02), MAT.steelBlue, T(0, y1 + 0.05, 0));

  // Boquillas: entrada (oeste, cota baja del cilindro) y salida por rebose (este, cerca del borde)
  const pin = nozzle(b, new THREE.Vector3(-R + 0.02, o.inY, 0), new THREE.Vector3(-1, 0, 0), 0.18);
  const pout = nozzle(b, new THREE.Vector3(R - 0.02, 3.05, 0), new THREE.Vector3(1, 0, 0), 0.18);

  // Fondo del cono: purga con válvula (CL-101) o brida ciega (CL-201)
  b.rod(new THREE.Vector3(0, yApex + 0.03, 0), new THREE.Vector3(0, yApex - 0.14, 0), 0.07, MAT.steel, 14);
  b.add(cyl(0.115, 0.04, 20), MAT.steel, T(0, yApex - 0.15, 0));
  let sludgePort: THREE.Vector3 | null = null;
  if (o.purge) {
    // Válvula de compuerta: cuerpo, bonete, volante hacia la cámara
    b.add(rbox(0.2, 0.16, 0.18, 0.03), MAT.steelDark, T(0, yApex - 0.27, 0));
    b.rod(new THREE.Vector3(0, yApex - 0.27, 0.09), new THREE.Vector3(0, yApex - 0.27, 0.3), 0.022, MAT.steel, 8);
    b.add(new THREE.TorusGeometry(0.1, 0.016, 8, 24), MAT.rail, T(0, yApex - 0.27, 0.3));
    b.rod(new THREE.Vector3(0, yApex - 0.35, 0), new THREE.Vector3(0, o.purgeY, 0), 0.08, MAT.steel, 14);
    b.add(new THREE.SphereGeometry(0.085, 14, 10), MAT.steel, T(0, o.purgeY, 0));
    sludgePort = new THREE.Vector3(0, o.purgeY, -0.02);
  } else {
    b.add(cyl(0.115, 0.03, 20), MAT.steelDark, T(0, yApex - 0.185, 0));
  }

  const meshes = b.build(root);

  // Columna de líquido (sigue el cono) y capa de lodo en el cono (escala uniforme desde el vértice)
  const yLiq = y1 - 0.12;
  const rin = (y: number) => rAt(y) - t - 0.012;
  const liquid = createLiquidMaterial({ color: o.liquid, opacity: 0.4, mode: 'still' });
  const liqGeo = new THREE.LatheGeometry([
    new THREE.Vector2(0, yApex + 0.08), new THREE.Vector2(Math.max(0.02, rin(yApex + 0.08)), yApex + 0.08),
    new THREE.Vector2(rin(yc), yc + 0.005), new THREE.Vector2(rin(yLiq), yLiq), new THREE.Vector2(0, yLiq),
  ], 48);
  const liqMesh = new THREE.Mesh(liqGeo, liquid.material);
  liqMesh.renderOrder = 1;
  const surf = createLiquidMaterial({ color: o.liquid, hi: 0xd7c9a2, mode: 'ripple', speed: 0.35, scale: 0.8, center: [spec.pos[0], spec.pos[1]], opacity: 0.85 });
  const surfMesh = new THREE.Mesh(new THREE.CircleGeometry(rin(yLiq), 48), surf.material);
  surfMesh.rotation.x = -Math.PI / 2;
  surfMesh.position.y = yLiq;
  surfMesh.renderOrder = 1;

  const HS = 0.6;   // altura de referencia de la malla de lodo
  const sludgeMesh = new THREE.Mesh(new THREE.LatheGeometry([
    new THREE.Vector2(0, 0), new THREE.Vector2(rin(yApex + HS) * 0.98, HS), new THREE.Vector2(0, HS),
  ], 40), MAT.sludgeCake);
  sludgeMesh.position.y = yApex + 0.06;

  const NP = 40;
  const parts = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.03, 0), new THREE.MeshStandardMaterial({ color: o.particle, roughness: 0.85 }), NP);
  parts.frustumCulled = false;
  root.add(liqMesh, surfMesh, sludgeMesh, parts);

  const lamp = createStatusLamp(new THREE.Vector3(0.55, y1 + 0.1, 0));
  const outline = outlineProfile([[rApex + 0.04, yApex], [R + 0.05, yc], [R + 0.05, y1 + 0.02]], 4);

  const anchors: Record<string, THREE.Vector3> = {
    label: new THREE.Vector3(0, y1 + 0.95, 0),
    focus: new THREE.Vector3(0, (yApex + y1) / 2, 0),
    core: new THREE.Vector3(0, (yc + y1) / 2, 0),
    in: pin, out: pout,
  };
  if (sludgePort) anchors.sludge = sludgePort;

  return finalizeUnit({
    spec, root, localAnchors: anchors,
    radius: Math.hypot(R, spec.size.h / 2) + 0.2,
    localBox: { min: [-R - 0.05, 0, -R - 0.05], max: [R + 0.05, y1 + 0.12, R + 0.05] },
    pickTargets: [...meshes, glass],
    outline, glowRadius: R * 1.8, glowY: 0.015, lamp,
    animate(tt, s) {
      const m = s.motion;
      liquid.uniforms.uGlow.value = 0.04 + 0.2 * s.flow + (s.active ? 0.08 : 0);
      surf.uniforms.uTime.value = tt;
      surf.uniforms.uMotion.value = 0.3 + 0.7 * s.flow;
      surf.uniforms.uGlow.value = 0.03 + 0.15 * s.flow;
      const hs = 0.1 + o.sludgeMax * (0.25 + 0.75 * m) + 0.02 * Math.sin(tt * 0.3 + o.seed) * m;
      sludgeMesh.scale.setScalar(hs / HS);
      const ySl = yApex + 0.06 + hs;
      const vis = Math.min(1, m * 1.8);
      for (let i = 0; i < NP; i++) {
        const k = i + o.seed * 50;
        const f = fract(hash01(k, 1) + tt * (0.05 + 0.04 * hash01(k, 2)));
        const y = yLiq - 0.08 - f * (yLiq - 0.08 - ySl);
        const ang = phi + (hash01(k, 3) - 0.5) * 2 * win.halfWidth * 0.95;
        const rad = Math.min((0.25 + 0.7 * hash01(k, 4)) * (R - 0.12), rin(y) - 0.06);
        const sc = vis * (0.6 + 0.8 * hash01(k, 5)) * (f < 0.06 ? f / 0.06 : 1);
        setInstance(parts, i, Math.sin(ang) * rad, y, Math.cos(ang) * rad, Math.max(sc, 1e-4), tt * 0.7 + k, k, 0);
      }
      parts.instanceMatrix.needsUpdate = true;
    },
  });
}

export function createClarifier1(spec: UnitSpec = UNIT_BY_ID.clar1): PlantUnit {
  return createClarifier(spec, { purge: true, liquid: PALETTE.clarified, particle: 0x4a3018, sludgeMax: 0.42, seed: 1, inY: 1.75, purgeY: 0.38 });
}

export function createClarifier2(spec: UnitSpec = UNIT_BY_ID.clar2): PlantUnit {
  return createClarifier(spec, { purge: true, liquid: 0x5e6a4a, particle: 0x5a5530, sludgeMax: 0.22, seed: 2, inY: 2.85, purgeY: 0.45 });
}
