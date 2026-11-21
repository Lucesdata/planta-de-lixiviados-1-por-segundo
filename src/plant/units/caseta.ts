/**
 * ED-01 · Caseta de control y químicos (supuesto visual de la fase 2): edificio prefabricado 6 × 3 × 3,2 m.
 * Mitad oeste: bodega de químicos con cortina enrollable abierta al sur (hacia la vía), piso con bordillo de
 * contención y sumidero; los totes IBC almacenados los dibuja el módulo de actores (setStockedTotes).
 * Mitad este: sala de control con tableros MCC, escritorio con pantallas, dos ventanas al sur (iluminadas
 * de noche y más cálidas cuando la unidad está activa) y puerta de personal al este. Cubierta con alero
 * leve, equipo de A/A en la fachada este, apliques de muro y luces sobre las puertas (nocturnos).
 */
import * as THREE from 'three';
import type { PlantUnit } from '../types';
import { UNIT_BY_ID, type UnitSpec } from '../layout';
import { MAT, MAT2, NIGHT, createLightPoolMaterial, createNightEmissive } from '../../scene/materials';
import { Batcher, createRoot, createStatusLamp, cyl, finalizeUnit, outlineBox, rbox, T } from './common';

/** Geometría local (x: -3..3, z: -1.5..1.5). Usada también por el módulo de actores (huecos de totes). */
export const ED01_GEOM = {
  rollDoor: { x0: -2.45, x1: -0.55, h: 2.5 },
  persDoor: { z0: -0.45, z1: 0.45, h: 2.1 },
  plinth: 0.15,
  /** Huecos de totes en la bodega (centro local x,z); 2 niveles. */
  toteSlots: [[-2.2, -0.72], [-0.95, -0.72], [-2.2, 0.38], [-0.95, 0.38]] as [number, number][],
};

export function createControlBuilding(spec: UnitSpec = UNIT_BY_ID.control): PlantUnit {
  const W = spec.size.w!, H = spec.size.h, L = spec.size.l!;
  const root = createRoot(spec);
  const b = new Batcher();
  const t = 0.12, p = ED01_GEOM.plinth;
  const { rollDoor: rd, persDoor: pd } = ED01_GEOM;
  const yW = H; // altura de muros

  b.add(rbox(W + 0.2, p, L + 0.2, 0.02), MAT.concreteDark, T(0, p / 2, 0));
  // Muro norte y oeste completos
  b.add(rbox(W, yW - p, t, 0.02), MAT2.wall, T(0, p + (yW - p) / 2, -L / 2 + t / 2));
  b.add(rbox(t, yW - p, L, 0.02), MAT2.wall, T(-W / 2 + t / 2, p + (yW - p) / 2, 0));
  // Muro este con puerta de personal
  const eL0 = pd.z0 + L / 2, eL1 = L / 2 - pd.z1;
  b.add(rbox(t, yW - p, eL0, 0.02), MAT2.wall, T(W / 2 - t / 2, p + (yW - p) / 2, -L / 2 + eL0 / 2));
  b.add(rbox(t, yW - p, eL1, 0.02), MAT2.wall, T(W / 2 - t / 2, p + (yW - p) / 2, L / 2 - eL1 / 2));
  b.add(rbox(t, yW - p - pd.h, pd.z1 - pd.z0, 0.02), MAT2.wall, T(W / 2 - t / 2, p + pd.h + (yW - p - pd.h) / 2, 0));
  b.add(rbox(0.05, pd.h, pd.z1 - pd.z0 - 0.04, 0.01), MAT2.wallTrim, T(W / 2 + 0.005, p + pd.h / 2, 0));       // hoja cerrada
  b.add(rbox(0.04, 0.04, 0.14, 0.01), MAT.steel, T(W / 2 + 0.04, p + 1.0, pd.z0 + 0.14));
  // Muro sur: segmentos alrededor de la cortina (x0..x1) y de las ventanas
  const segs: [number, number][] = [[-W / 2, rd.x0], [rd.x1, W / 2]];
  for (const [a, c] of segs) b.add(rbox(c - a, yW - p, t, 0.02), MAT2.wall, T((a + c) / 2, p + (yW - p) / 2, L / 2 - t / 2));
  b.add(rbox(rd.x1 - rd.x0, yW - p - rd.h, t, 0.02), MAT2.wall, T((rd.x0 + rd.x1) / 2, p + rd.h + (yW - p - rd.h) / 2, L / 2 - t / 2));
  // Cajón de la cortina enrollada (abierta) y guías
  b.add(cyl(0.16, rd.x1 - rd.x0 + 0.1, 20), MAT2.rollDoor, T((rd.x0 + rd.x1) / 2, p + rd.h + 0.14, L / 2 + 0.12, 0, 0, Math.PI / 2));
  for (const x of [rd.x0, rd.x1]) b.add(rbox(0.06, rd.h, 0.08, 0.01), MAT.steelDark, T(x, p + rd.h / 2, L / 2 + 0.02));
  // Tabique interior bodega | sala
  b.add(rbox(t * 0.8, yW - p, L - 2 * t, 0.02), MAT2.wall, T(0, p + (yW - p) / 2, 0));
  // Bodega: bordillo de contención y sumidero
  b.add(rbox(-rd.x0 + rd.x1 + 0.4, 0.06, 0.1, 0.01), MAT2.bund, T((rd.x0 + rd.x1) / 2, p + 0.03, L / 2 - t - 0.06));
  b.add(rbox(0.3, 0.012, 0.3, 0.005), MAT.grating, T(-1.6, p + 0.006, -1.1));
  b.add(rbox(0.4, 0.5, 0.05, 0.01), MAT.offWhite, T(-1.6, 1.6, -L / 2 + t + 0.03));  // cartel de seguridad (hoja de datos)
  // Sala de control: tableros MCC al norte, escritorio con pantallas
  for (let k = 0; k < 4; k++) {
    const x = 0.55 + k * 0.6;
    b.add(rbox(0.56, 2.0, 0.42, 0.02), MAT.steelBlue, T(x, p + 1.0, -L / 2 + t + 0.22));
    b.add(rbox(0.5, 1.6, 0.01, 0.004), MAT.steelDark, T(x, p + 1.05, -L / 2 + t + 0.435));
    b.add(rbox(0.04, 0.04, 0.01, 0.005), MAT.rail, T(x - 0.15, p + 1.7, -L / 2 + t + 0.44));
  }
  b.add(rbox(1.6, 0.05, 0.6, 0.01), MAT.offWhite, T(1.75, p + 0.75, 0.75));
  for (const x of [1.25, 1.75, 2.25]) b.add(rbox(0.38, 0.26, 0.03, 0.01), MAT.rubber, T(x, p + 1.0, 0.62));
  // Cubierta con alero leve (0,35 m), goterón y bajante
  const ov = 0.35;
  b.add(rbox(W + 2 * ov, 0.16, L + 2 * ov, 0.04), MAT.steelBlue, T(0, yW + 0.08, 0));
  b.add(rbox(W + 2 * ov + 0.02, 0.06, L + 2 * ov + 0.02, 0.02), MAT.steelDark, T(0, yW + 0.19, 0));
  b.rod(new THREE.Vector3(-W / 2 - 0.1, yW, L / 2 + 0.1), new THREE.Vector3(-W / 2 - 0.1, 0.1, L / 2 + 0.1), 0.04, MAT.steelDark, 8);
  // A/A en fachada este (sobre ménsulas) y tubería de refrigerante
  const ac = { x: W / 2 + 0.33, y: 0.75, z: 1.0 };
  b.add(rbox(0.5, 0.6, 0.8, 0.04), MAT.offWhite, T(ac.x, ac.y, ac.z));
  b.add(cyl(0.22, 0.03, 24), MAT.steelDark, T(ac.x + 0.25, ac.y + 0.02, ac.z, 0, 0, Math.PI / 2));
  for (const z of [ac.z - 0.3, ac.z + 0.3]) b.add(rbox(0.5, 0.05, 0.05, 0.01), MAT.steelDark, T(ac.x - 0.02, ac.y - 0.33, z));
  b.rod(new THREE.Vector3(W / 2 + 0.05, ac.y + 0.2, ac.z - 0.35), new THREE.Vector3(W / 2 + 0.05, 2.4, ac.z - 0.35), 0.025, MAT.steelDark, 6);
  // Tablero eléctrico exterior (acometida) en fachada oeste
  b.add(rbox(0.2, 0.9, 0.6, 0.03), MAT.offWhite, T(-W / 2 - 0.1, 1.4, -0.4));
  // Rótulo de la caseta
  b.add(rbox(1.2, 0.3, 0.03, 0.01), MAT.steelDark, T(1.6, yW - 0.35, L / 2 + 0.02));
  b.add(rbox(1.1, 0.22, 0.01, 0.005), MAT.offWhite, T(1.6, yW - 0.35, L / 2 + 0.04));
  // Marcos de ventanas
  const wins: [number, number][] = [[0.55, 1.35], [1.85, 2.65]];
  const wy0 = 1.05, wy1 = 2.0;
  for (const [a, c] of wins) {
    for (const x of [a, c]) b.add(rbox(0.05, wy1 - wy0 + 0.05, 0.08, 0.01), MAT2.wallTrim, T(x, (wy0 + wy1) / 2, L / 2 + 0.01));
    for (const y of [wy0, wy1]) b.add(rbox(c - a + 0.05, 0.05, 0.08, 0.01), MAT2.wallTrim, T((a + c) / 2, y, L / 2 + 0.01));
    b.add(rbox(c - a, 0.04, 0.16, 0.01), MAT.concreteDark, T((a + c) / 2, wy0 - 0.05, L / 2 + 0.06));
  }
  const meshes = b.build(root);

  // Vidrio de ventanas (propio, no registrado: brillo = noche × actividad, ver animate)
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x2b3a40, roughness: 0.12, metalness: 0.2, emissive: 0xffd9a6, emissiveIntensity: 0 });
  const gb = new Batcher();
  for (const [a, c] of wins) gb.add(new THREE.PlaneGeometry(c - a - 0.04, wy1 - wy0 - 0.04), glassMat, T((a + c) / 2, (wy0 + wy1) / 2, L / 2 - t / 2 + 0.005));
  // El muro sur está macizo detrás del vidrio: el plano del vidrio se adelanta al paramento
  const glass = gb.build(root, false, true);
  glass.forEach(m => m.position.z = t / 2 + 0.01);

  // Luces: apliques sobre puertas y esquinas (lentes nocturnas) + charcos de luz
  const lens = createNightEmissive(0xffe6bc, 1.8, 0.04, 0xd8d4c4);
  const lb = new Batcher();
  const fixtures: [number, number, number, number][] = [
    [(rd.x0 + rd.x1) / 2, p + rd.h + 0.45, L / 2 + 0.12, 0],   // sobre cortina
    [W / 2 + 0.1, p + pd.h + 0.3, 0, Math.PI / 2],             // sobre puerta este
    [-W / 2 + 0.3, yW - 0.4, L / 2 + 0.1, 0],                   // esquina SO
    [W / 2 - 0.3, yW - 0.4, L / 2 + 0.1, 0],                    // esquina SE
  ];
  for (const [x, y, z, ry] of fixtures) {
    lb.add(rbox(0.22, 0.14, 0.12, 0.03), MAT.steelDark, T(x, y + 0.03, z, 0, ry, 0));
    lb.add(rbox(0.18, 0.04, 0.1, 0.015), lens, T(x, y - 0.05, z + (ry ? 0 : 0.02), 0, ry, 0));
  }
  lb.build(root);
  const poolMat = createLightPoolMaterial(0xffdcaa, 0.3);
  const pools = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), poolMat, 4);
  const pp: [number, number, number][] = [[(rd.x0 + rd.x1) / 2, L / 2 + 1.3, 3.6], [W / 2 + 1.2, 0, 2.8], [-W / 2 + 0.3, L / 2 + 1.0, 2.4], [W / 2 - 0.3, L / 2 + 1.0, 2.4]];
  pp.forEach(([x, z, s], i) => pools.setMatrixAt(i, new THREE.Matrix4().compose(new THREE.Vector3(x, 0.02, z), new THREE.Quaternion(), new THREE.Vector3(s, 1, s))));
  pools.renderOrder = 3;
  root.add(pools);

  const lamp = createStatusLamp(new THREE.Vector3(W / 2 - 0.2, yW + 0.22, L / 2 - 0.2));
  const outline = outlineBox(new THREE.Vector3(-W / 2 - 0.05, 0, -L / 2 - 0.05), new THREE.Vector3(W / 2 + 0.05, yW + 0.25, L / 2 + 0.05));

  return finalizeUnit({
    spec, root,
    localAnchors: {
      label: new THREE.Vector3(0, yW + 1.2, 0),
      focus: new THREE.Vector3(0, 1.6, 0.4),
      core: new THREE.Vector3(1.5, 1.2, 0),
      /** Exterior de la puerta de personal (este) y de la cortina de la bodega (sur). */
      door: new THREE.Vector3(W / 2 + 0.6, 0, 0),
      bay: new THREE.Vector3((rd.x0 + rd.x1) / 2, 0, L / 2 + 0.6),
    },
    radius: 3.6,
    localBox: { min: [-W / 2 - ov, 0, -L / 2 - ov], max: [W / 2 + 0.6, yW + 0.25, L / 2 + ov] },
    pickTargets: [...meshes, ...glass],
    outline, glowRadius: 3.8, glowY: 0.015, lamp,
    animate(_tt, s) {
      const act = s.active ? 1 : 0.55;
      glassMat.emissiveIntensity = NIGHT.value * 1.1 * act;
    },
  });
}
