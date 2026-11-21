/**
 * Patines de dosificación (supuestos visuales de la fase 2):
 *  DQ-101 coagulante: tanque día de PE de 200 L (Ø0,62 × 0,72 m) sobre bandeja de contención, dos bombas
 *  dosificadoras de diafragma (servicio/reserva), calibración, tablero local.
 *  DQ-102 polímero: tanque de preparación de 500 L (Ø0,82 × 0,95 m) con agitador lento y tolva de polvo,
 *  dos bombas dosificadoras, tablero local.
 * Volúmenes según assumptions.ts (S.coagDayTank_L, S.polyTank_L). El nivel visible del tanque depende de
 * setFlowLevel; el agitador (DQ-102) y el cabezal de las bombas giran/laten con setInternalMotion.
 * Puerto 'out': extremo superior de la subida de descarga en la parte trasera (norte) del patín.
 */
import * as THREE from 'three';
import type { PlantUnit } from '../types';
import { UNIT_BY_ID, type UnitSpec } from '../layout';
import { MAT, MAT2, createLiquidMaterial } from '../../scene/materials';
import { Batcher, createRoot, createStatusLamp, cyl, finalizeUnit, lathe, outlineBox, rbox, T } from './common';

export type DosingKind = 'coag' | 'poly';

/** x local de la subida de descarga (alineada con la lanza del tanque de destino). */
const OUT_X: Record<DosingKind, number> = { coag: 0.55, poly: 0.2 };

export function createDosingSkid(spec: UnitSpec, kind: DosingKind): PlantUnit {
  const W = spec.size.w!, L = spec.size.l!;
  const root = createRoot(spec);
  const b = new Batcher();
  const poly = kind === 'poly';

  // Bandeja de contención (bund) con borde
  const bh = 0.16;
  b.add(rbox(W, 0.05, L, 0.015), MAT2.bund, T(0, 0.025, 0));
  for (const [x, z, w, l] of [[0, -L / 2 + 0.02, W, 0.04], [0, L / 2 - 0.02, W, 0.04], [-W / 2 + 0.02, 0, 0.04, L], [W / 2 - 0.02, 0, 0.04, L]] as const) {
    b.add(rbox(w, bh, l, 0.01), MAT2.bund, T(x, bh / 2, z));
  }
  b.add(rbox(W - 0.1, 0.02, L - 0.1, 0.005), MAT.grating, T(0, bh - 0.02, 0)); // rejilla de piso

  // Tanque
  const R = poly ? 0.41 : 0.31, Ht = poly ? 0.95 : 0.72;
  const tx = poly ? -0.24 : -0.3, tz = -0.02, ty = bh;
  b.add(lathe([[0, 0], [R, 0], [R, Ht - 0.06], [R - 0.06, Ht], [0.12, Ht], [0.12, Ht + 0.04], [0, Ht + 0.04]], 0.03, 40), MAT2.pe, T(tx, ty, tz));
  for (const yy of [0.25, 0.55]) b.add(new THREE.TorusGeometry(R + 0.004, 0.012, 6, 40), MAT2.pe, T(tx, ty + yy * Ht, tz, Math.PI / 2, 0, 0));
  // Regla de nivel (tubo transparente) y etiqueta
  b.rod(new THREE.Vector3(tx + R * 0.7, ty + 0.05, tz + R * 0.72), new THREE.Vector3(tx + R * 0.7, ty + Ht - 0.05, tz + R * 0.72), 0.012, MAT.glass, 6);
  b.add(rbox(0.16, 0.12, 0.01, 0.004), MAT.offWhite, T(tx, ty + Ht * 0.62, tz + R + 0.006));
  // Succión al colector de bombas
  b.rod(new THREE.Vector3(tx + R - 0.02, ty + 0.08, tz), new THREE.Vector3(0.18, ty + 0.08, tz), 0.018, MAT.steel, 8);
  // Columna de calibración
  b.add(cyl(0.035, 0.35, 12), MAT.glass, T(0.12, ty + 0.3, tz - 0.28));
  b.rod(new THREE.Vector3(0.12, ty + 0.08, tz - 0.28), new THREE.Vector3(0.12, ty + 0.12, tz), 0.012, MAT.steel, 6);

  // Bombas dosificadoras de diafragma (2): motor + cabezal
  const pumpZ = [0.22, -0.2];
  const heads: THREE.Vector3[] = [];
  for (const z of pumpZ) {
    const px = 0.38;
    b.add(rbox(0.26, 0.06, 0.2, 0.015), MAT.steelDark, T(px, ty + 0.03, z));
    b.add(cyl(0.065, 0.2, 18), MAT.motor, T(px + 0.04, ty + 0.13, z, 0, 0, Math.PI / 2));
    b.add(rbox(0.11, 0.14, 0.12, 0.02), MAT2.peBlue, T(px - 0.1, ty + 0.13, z));
    b.add(cyl(0.06, 0.04, 18), MAT.offWhite, T(px - 0.17, ty + 0.13, z, 0, 0, Math.PI / 2));
    heads.push(new THREE.Vector3(px - 0.2, ty + 0.13, z));
    b.rod(new THREE.Vector3(px - 0.17, ty + 0.21, z), new THREE.Vector3(px - 0.17, ty + 0.34, z), 0.01, MAT.steel, 6);
  }
  // Colector de descarga y subida trasera hasta el puerto
  const ox = OUT_X[kind], oz = -L / 2 + 0.1, oy = 1.3;
  b.rod(new THREE.Vector3(0.21, ty + 0.34, pumpZ[0]), new THREE.Vector3(0.21, ty + 0.34, oz), 0.016, MAT.steel, 6);
  b.rod(new THREE.Vector3(0.21, ty + 0.34, oz), new THREE.Vector3(ox, ty + 0.34, oz), 0.016, MAT.steel, 6);
  b.rod(new THREE.Vector3(ox, ty + 0.34, oz), new THREE.Vector3(ox, oy, oz), 0.022, MAT.steel, 8);
  b.add(rbox(0.07, 0.12, 0.07, 0.01), MAT.steelDark, T(ox, ty + 0.62, oz));                 // válvula de contrapresión
  b.add(cyl(0.035, 0.02, 14), MAT.offWhite, T(ox, ty + 0.82, oz + 0.04, Math.PI / 2, 0, 0)); // manómetro
  b.add(rbox(0.05, oy - 0.05, 0.05, 0.01), MAT.steelBlue, T(ox + 0.07, (oy - 0.05) / 2, oz)); // poste soporte

  // Tablero local con lámpara (frente sudeste)
  const lx = W / 2 - 0.14, lz = L / 2 - 0.08;
  b.add(rbox(0.05, 1.2, 0.05, 0.01), MAT.steelDark, T(lx, 0.6, lz));
  b.add(rbox(0.3, 0.36, 0.14, 0.03), MAT.offWhite, T(lx, 1.15, lz - 0.02));
  b.add(rbox(0.05, 0.05, 0.02, 0.008), MAT.rubber, T(lx - 0.07, 1.1, lz + 0.055));
  b.add(rbox(0.05, 0.05, 0.02, 0.008), MAT.rubber, T(lx + 0.07, 1.1, lz + 0.055));

  // Agitador lento del tanque de polímero y tolva de polvo
  let mixer: THREE.Group | null = null;
  if (poly) {
    const yTop = ty + Ht + 0.04;
    b.add(rbox(2 * R + 0.06, 0.05, 0.12, 0.01), MAT.steelBlue, T(tx, yTop + 0.025, tz));
    b.add(rbox(0.16, 0.12, 0.16, 0.02), MAT.motor, T(tx, yTop + 0.11, tz));
    b.add(cyl(0.075, 0.2, 18), MAT.motor, T(tx, yTop + 0.27, tz));
    b.add(cyl(0.08, 0.035, 18, 0.06), MAT.steelDark, T(tx, yTop + 0.385, tz));
    // Tolva de polvo con eyector
    b.add(cyl(0.12, 0.18, 18, 0.16), MAT.offWhite, T(tx + 0.24, yTop + 0.25, tz + 0.18));
    b.add(cyl(0.04, 0.12, 12, 0.12), MAT.offWhite, T(tx + 0.24, yTop + 0.1, tz + 0.18));
    mixer = new THREE.Group();
    mixer.position.set(tx, yTop - 0.02, tz);
    const collar = new THREE.Mesh(cyl(0.04, 0.05, 14), MAT.steel);
    const mark = new THREE.Mesh(rbox(0.02, 0.052, 0.02, 0.004), MAT.rail);
    mark.position.x = 0.04;
    mixer.add(collar, mark);
    root.add(mixer);
  }
  const meshes = b.build(root);

  // Líquido visible a través del PE translúcido (nivel según flujo)
  const liq = createLiquidMaterial({ color: poly ? 0xb9b39a : 0x7a4a26, opacity: 0.55, mode: 'still' });
  const col = new THREE.Mesh(cyl(R - 0.025, 1, 32), liq.material);
  col.position.set(tx, 0, tz);
  col.renderOrder = 1;
  root.add(col);

  // Cabezales de bomba (pulso de carrera)
  const pulse = new THREE.InstancedMesh(cyl(0.045, 0.03, 14), MAT.steel, heads.length);
  pulse.frustumCulled = false;
  root.add(pulse);
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, Math.PI / 2));

  const lamp = createStatusLamp(new THREE.Vector3(lx, 1.33, lz - 0.02));
  const outline = outlineBox(new THREE.Vector3(-W / 2 - 0.03, 0, -L / 2 - 0.03), new THREE.Vector3(W / 2 + 0.03, 1.5, L / 2 + 0.03));

  return finalizeUnit({
    spec, root,
    localAnchors: {
      label: new THREE.Vector3(0, 2.1, 0),
      focus: new THREE.Vector3(0, 0.6, 0),
      core: new THREE.Vector3(tx, ty + Ht * 0.5, tz),
      out: new THREE.Vector3(ox, oy, oz),
      /** Puesto del operador frente al tablero local. */
      operator: new THREE.Vector3(lx, 0, L / 2 + 0.45),
    },
    radius: 1.0,
    localBox: { min: [-W / 2, 0, -L / 2], max: [W / 2, 1.7, L / 2] },
    pickTargets: [...meshes, col],
    outline, glowRadius: 1.1, glowY: 0.015, lamp,
    animate(tt, s) {
      const lvl = Ht * (0.35 + 0.5 * (1 - 0.4 * s.flow)) - 0.04;
      col.scale.y = lvl;
      col.position.y = ty + 0.03 + lvl / 2;
      liq.uniforms.uGlow.value = 0.02 + 0.12 * s.flow + (s.active ? 0.05 : 0);
      if (mixer) mixer.rotation.y = tt * 1.6 * s.motion;
      for (let i = 0; i < heads.length; i++) {
        const st = i === 0 ? s.motion : 0; // bomba de servicio; la segunda en reserva
        const dx = 0.012 * st * Math.sin(tt * 9.0);
        m4.compose(new THREE.Vector3(heads[i].x - 0.01 + dx, heads[i].y, heads[i].z), q, new THREE.Vector3(1, 1, 1));
        pulse.setMatrixAt(i, m4);
      }
      pulse.instanceMatrix.needsUpdate = true;
    },
  });
}

export const createCoagDosing = (spec: UnitSpec = UNIT_BY_ID.dosC) => createDosingSkid(spec, 'coag');
export const createPolyDosing = (spec: UnitSpec = UNIT_BY_ID.dosF) => createDosingSkid(spec, 'poly');
