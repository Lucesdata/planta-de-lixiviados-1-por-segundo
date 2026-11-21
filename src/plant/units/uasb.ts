/**
 * Reactor UASB (R-201…R-204). Cilindro con techo, cúpula del separador trifásico y venteo.
 * Ventana de inspección hacia la cámara: manto de lodo (banda con brillo) y burbujas finas ascendentes.
 * Fase 2: salida de biogás en la cúpula (puerto 'gas') y válvula de purga de lodo baja (puerto 'sludge'),
 * ambas como supuestos visuales.
 */
import * as THREE from 'three';
import type { PlantUnit, UnitId } from '../types';
import { CAMERA_DIR, UNIT_BY_ID, type UnitSpec } from '../layout';
import { MAT, PALETTE, createLiquidMaterial, createWindowedShellMaterial } from '../../scene/materials';
import {
  Batcher, cameraPhi, createRoot, createStatusLamp, finalizeUnit, fract, hash01, lathe, manway,
  nozzle, outlineProfile, setInstance, tankShellProfile, cyl, T, addInspectionWindow, arcRing, rbox,
} from './common';


export const UASB_WALL = 0.06;

export function createUASB(id: UnitId, spec: UnitSpec = UNIT_BY_ID[id]): PlantUnit {
  const R = spec.size.d! / 2, H = spec.size.h, y0 = spec.base, y1 = y0 + H;
  const root = createRoot(spec);
  const b = new Batcher();
  const phi = cameraPhi(CAMERA_DIR);
  const seed = UNIT_BY_ID[id] ? ['uasb1', 'uasb2', 'uasb3', 'uasb4'].indexOf(id) + 1 : 1;

  // Pedestal de concreto
  b.add(lathe([[0, 0], [R + 0.14, 0], [R + 0.14, y0], [0, y0]], 0.04, 48), MAT.concrete);

  // Carcasa con ventana
  const win = { phi, halfWidth: 0.36, y0: y0 + 0.3, y1: y1 - 0.5, r: R };
  const shellMat = createWindowedShellMaterial(PALETTE.sage, win);
  b.add(lathe(tankShellProfile(R, y0, H, UASB_WALL, false), 0.05, 64), shellMat);
  arcRing(b, R + 0.012, 0.03, y0 + 0.04, 0, Math.PI * 2, MAT.sageDark);
  arcRing(b, R + 0.012, 0.035, y1 - 0.02, 0, Math.PI * 2, MAT.sageDark);
  for (const yy of [y0 + 1.15, y0 + 2.1]) arcRing(b, R + 0.01, 0.024, yy, phi + win.halfWidth + 0.06, Math.PI * 2 - 2 * (win.halfWidth + 0.06), MAT.sageDark);
  const glass = addInspectionWindow(b, root, win, [[R, win.y0], [R, win.y1]]);

  // Separador trifásico interno (visible por la ventana): campana invertida y deflectores
  b.add(cyl(0.62, 0.5, 24, 0.12, true), MAT.steelDark, T(0, y1 - 0.75, 0));
  b.add(cyl(R - UASB_WALL - 0.02, 0.28, 32, R - 0.3, true), MAT.steelDark, T(0, y1 - 1.15, 0));
  // Bajante de alimentación interna (desde la boquilla del techo hasta el fondo)
  b.rod(new THREE.Vector3(0, y1, -0.65), new THREE.Vector3(0, y0 + 0.25, -0.65), 0.045, MAT.steel, 10);

  // Fase 7 · distribuidor de alimentación en el fondo: cruz de tubos con boquillas hacia abajo (visible por la ventana)
  const yd = y0 + 0.2, rd = R - UASB_WALL - 0.12;
  b.rod(new THREE.Vector3(0, y0 + 0.25, -0.65), new THREE.Vector3(0, yd, 0), 0.04, MAT.steel, 8);
  for (const a of [phi, phi + Math.PI / 2]) {
    const d = new THREE.Vector3(Math.sin(a), 0, Math.cos(a));
    b.rod(d.clone().multiplyScalar(-rd).setY(yd), d.clone().multiplyScalar(rd).setY(yd), 0.035, MAT.steel, 8);
    for (const k of [-0.75, -0.4, 0.4, 0.75]) b.add(cyl(0.03, 0.08, 8), MAT.steelDark, T(d.x * rd * k, yd - 0.05, d.z * rd * k));
  }
  // Fase 7 · deflectores inclinados del separador trifásico (S: 50°) y vertedero dentado de efluente
  for (let k = 0; k < 2; k++) {
    const yy = y1 - 1.3 + k * 0.32;
    b.add(cyl(R - UASB_WALL - 0.02, 0.22, 32, R - 0.42, true), MAT.steel, T(0, yy, 0));
  }
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    b.add(rbox(0.05, 0.06, 0.012, 0.003), MAT.steelDark, T(Math.sin(a) * (R - 0.2), 3.1, Math.cos(a) * (R - 0.2), 0, a, 0));
  }
  // Fase 7 · indicador de nivel magnético (columna lateral) y trampa de condensado bajo la salida de gas
  const la = phi - win.halfWidth - 0.2, ln = new THREE.Vector3(Math.sin(la), 0, Math.cos(la));
  const lp = ln.clone().multiplyScalar(R + 0.09);
  b.rod(lp.clone().setY(y0 + 0.4), lp.clone().setY(y1 - 0.2), 0.028, MAT.offWhite, 10);
  for (const yy of [y0 + 0.4, y1 - 0.2]) b.rod(ln.clone().multiplyScalar(R).setY(yy), lp.clone().setY(yy), 0.018, MAT.steel, 6);
  b.add(rbox(0.05, 0.42, 0.05, 0.01), MAT.rail, T(lp.x, y1 - 0.75, lp.z));

  // Techo: cúpula del separador / campana de gas y venteo con sombrerete
  b.add(lathe([[0, y1], [0.5, y1], [0.5, y1 + 0.1], [0.3, y1 + 0.3], [0, y1 + 0.33]], 0.05, 40), MAT.warmGray);
  // Salida de biogás (puerto 'gas') y válvula de alivio presión/vacío con sombrerete, desplazada
  const pgas = nozzle(b, new THREE.Vector3(0, y1 + 0.3, 0), new THREE.Vector3(0, 1, 0), 0.15, 0.07);
  b.add(cyl(0.075, 0.035, 16), MAT.steel, T(0, y1 + 0.3, 0));
  b.rod(new THREE.Vector3(0.3, y1 + 0.18, 0.12), new THREE.Vector3(0.3, y1 + 0.48, 0.12), 0.035, MAT.steel, 10);
  b.add(cyl(0.07, 0.12, 16), MAT.steelDark, T(0.3, y1 + 0.5, 0.12));
  b.add(lathe([[0, 0], [0.1, 0], [0.1, 0.02], [0.03, 0.07], [0, 0.08]], 0.012, 16), MAT.steelDark, T(0.3, y1 + 0.56, 0.12));
  // Purga de lodo de fondo (puerto 'sludge'): boquilla radial baja con válvula de compuerta
  const pa = -0.45, pn = new THREE.Vector3(Math.sin(pa), 0, Math.cos(pa));
  const psl = nozzle(b, pn.clone().multiplyScalar(R - 0.02).setY(0.45), pn, 0.37, 0.07);
  const pv = pn.clone().multiplyScalar(R + 0.17).setY(0.45);
  b.add(new THREE.SphereGeometry(0.1, 14, 10), MAT.steelDark, T(pv.x, pv.y, pv.z));
  b.rod(pv.clone().setY(0.52), pv.clone().setY(0.78), 0.02, MAT.steel, 6);
  b.add(new THREE.TorusGeometry(0.085, 0.014, 6, 18), MAT.rail, T(pv.x, 0.79, pv.z, Math.PI / 2, 0, 0));

  // Boquillas: entrada por el techo (alimentación) y salida lateral sur (efluente)
  const pin = nozzle(b, new THREE.Vector3(0, y1 - 0.02, -0.65), new THREE.Vector3(0, 1, 0), 0.12);
  const xo = -0.3;
  const pout = nozzle(b, new THREE.Vector3(xo, 2.85, Math.sqrt(R * R - xo * xo) - 0.02), new THREE.Vector3(0, 0, 1), 0.2);
  // Canaleta de efluente interna (anillo cerca de la cota de salida)
  b.add(lathe([[R - UASB_WALL, 2.97], [R - 0.2, 2.97], [R - 0.2, 3.07]], 0.01, 48), MAT.steelDark);

  // Registro inferior y tomas de muestra junto a la ventana
  manway(b, R, y0 + 0.75, -0.95);
  for (const yy of [y0 + 0.7, y0 + 1.4, y0 + 2.1]) {
    const a = phi + win.halfWidth + 0.14;
    const n = new THREE.Vector3(Math.sin(a), 0, Math.cos(a));
    const p0 = n.clone().multiplyScalar(R).setY(yy);
    b.rod(p0, p0.clone().addScaledVector(n, 0.12), 0.018, MAT.steel, 8);
    b.rod(p0.clone().addScaledVector(n, 0.12), p0.clone().addScaledVector(n, 0.12).setY(yy - 0.06), 0.012, MAT.steel, 6);
  }

  const meshes = b.build(root);

  // Interior dinámico: columna de líquido, manto de lodo y burbujas
  const rIn = R - UASB_WALL - 0.012;
  const yLiq = y1 - 0.42;
  const liquid = createLiquidMaterial({ color: PALETTE.anaerobic, hi: 0x9a8d55, opacity: 0.34, mode: 'still' });
  const liqMesh = new THREE.Mesh(cyl(rIn, yLiq - (y0 + 0.06), 40), liquid.material);
  liqMesh.position.y = (yLiq + y0 + 0.06) / 2;
  liqMesh.renderOrder = 1;
  const blanketTop = y0 + 1.05;
  const blanketMat = new THREE.MeshStandardMaterial({ color: 0x3e2b19, roughness: 0.85, emissive: 0x7a4f22, emissiveIntensity: 0.12 });
  const blanket = new THREE.Mesh(cyl(rIn - 0.01, blanketTop - (y0 + 0.06), 40), blanketMat);
  blanket.position.y = (blanketTop + y0 + 0.06) / 2;
  const bandMat = new THREE.MeshStandardMaterial({ color: 0x6a4a26, roughness: 0.7, emissive: 0xa0682c, emissiveIntensity: 0.2, transparent: true, opacity: 0.45, depthWrite: false });
  const band = new THREE.Mesh(cyl(rIn - 0.012, 0.32, 40, rIn - 0.012, true), bandMat);
  band.position.y = blanketTop + 0.16;
  band.renderOrder = 1;

  const NB = 34;
  const bubbles = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.026, 1), MAT.bubble, NB);
  bubbles.frustumCulled = false;
  bubbles.renderOrder = 0;
  root.add(liqMesh, blanket, band, bubbles);

  const lamp = createStatusLamp(new THREE.Vector3(Math.sin(phi) * 0.72, y1, Math.cos(phi) * 0.72));
  const outline = outlineProfile([[R + 0.05, 0.01], [R + 0.05, y1 + 0.01], [0.52, y1 + 0.12]], 4);

  return finalizeUnit({
    spec, root,
    localAnchors: {
      label: new THREE.Vector3(0, y1 + 1.75, 0),
      focus: new THREE.Vector3(0, y0 + H * 0.5, 0),
      core: new THREE.Vector3(0, y0 + 1.6, 0),
      in: pin, out: pout, gas: pgas, sludge: psl,
      // Fase 7 · puntos para notas técnicas (sobre la ventana de inspección)
      tGls: new THREE.Vector3(Math.sin(phi) * R, y1 - 1.0, Math.cos(phi) * R),
      tBlanket: new THREE.Vector3(Math.sin(phi) * R, y0 + 1.2, Math.cos(phi) * R),
      tBed: new THREE.Vector3(Math.sin(phi) * R, y0 + 0.45, Math.cos(phi) * R),
      tGas: new THREE.Vector3(0, y1 + 0.42, 0),
    },
    radius: Math.hypot(R, H / 2) + 0.2,
    localBox: { min: [-R - 0.14, 0, -R - 0.14], max: [R + 0.14, y1 + 0.6, R + 0.14] },
    pickTargets: [...meshes, glass],
    outline, glowRadius: R * 1.7, glowY: 0.015, lamp,
    animate(t, s) {
      const m = s.motion;
      liquid.uniforms.uGlow.value = 0.03 + 0.14 * s.flow + (s.active ? 0.05 : 0);
      const pulse = 0.6 + 0.4 * Math.sin(t * 1.15 + seed * 1.7);
      blanketMat.emissiveIntensity = 0.06 + (0.2 * m + 0.06 * s.flow) * pulse;
      bandMat.emissiveIntensity = 0.08 + 0.32 * m * pulse;
      bandMat.opacity = 0.25 + 0.3 * Math.max(m, s.flow);
      const vis = Math.min(1, m * 1.6);
      const h = yLiq - blanketTop - 0.1;
      for (let i = 0; i < NB; i++) {
        const k = i + seed * 100;
        const ang = phi + (hash01(k, 1) - 0.5) * 2 * (win.halfWidth * 0.95);
        const rad = (0.3 + 0.62 * Math.sqrt(hash01(k, 2))) * (rIn - 0.06);
        const sp = 0.28 + 0.22 * hash01(k, 3);
        const f = fract(hash01(k, 4) + t * sp / h);
        const wob = 0.025 * Math.sin(t * 3.1 + k);
        const sc = vis * (0.55 + 0.6 * hash01(k, 5)) * (0.7 + 0.5 * f) * (f > 0.96 ? (1 - f) / 0.04 : 1);
        setInstance(bubbles, i, Math.sin(ang) * rad + wob, blanketTop + 0.06 + f * h, Math.cos(ang) * rad, Math.max(sc, 1e-4));
      }
      bubbles.instanceMatrix.needsUpdate = true;
    },
  });
}
