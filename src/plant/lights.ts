/**
 * Alumbrado del sitio (supuesto visual de la fase 2): postes LED de vía (7 m), torres de reflectores (9,5 m,
 * 3 proyectores orientados a la planta), luminarias en postes de baranda (plataforma TK-102/103, pasarela
 * UASB, MBBR), luces de emergencia en escaleras y luz del portón. Geometría estática fusionada por material;
 * lentes con emisión nocturna (materials.ts · registro nocturno); charcos de luz como calcos aditivos
 * instanciados. Luces reales: 4 PointLight sin sombras cuya intensidad sigue al factor nocturno
 * (registerNightLight); la de la antorcha la gestiona su unidad.
 * Huellas de postes/torres en `group.userData.footprints` (validación de rutas).
 */
import * as THREE from 'three';
import { MAT, createLightPoolMaterial, createNightEmissive, registerNightLight } from '../scene/materials';
import { Batcher, cyl, rbox, T } from './units/common';
import { CATWALK, PLATFORM } from './structures';
import { ROAD, SITE } from './layout';

export const STREET_POLES: [number, number, number][] = [
  // x, z, rumbo del brazo (rad, 0 = hacia +z)
  [-31.0, 0.1, 0], [-19.0, 0.1, 0], [-31.8, 10.0, Math.PI / 2], [-13.0, 11.8, -Math.PI * 0.75],
];
export const FLOOD_MASTS: [number, number][] = [[-13.55, -12.2], [-5.5, -3.2], [11.8, -5.6], [-3.0, 6.4], [-15.0, -0.8]];

export function buildSiteLights(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'site-lights';
  const b = new Batcher();
  const lens = createNightEmissive(0xfff1d6, 2.0, 0.03, 0xcfd2cc);
  const emerg = createNightEmissive(0x9fe0b0, 1.4, 0.25, 0x3e5a48);
  const fps: { id: string; min: [number, number, number]; max: [number, number, number] }[] = [];
  const pools: [number, number, number, number][] = []; // x, y, z, tamaño

  // Postes de vía
  STREET_POLES.forEach(([x, z, ry], i) => {
    const h = 7.0;
    b.add(rbox(0.32, 0.12, 0.32, 0.02), MAT.concreteDark, T(x, 0.06, z));
    b.add(cyl(0.07, h, 12, 0.05), MAT.steelBlue, T(x, h / 2, z));
    const ax = Math.sin(ry), az = Math.cos(ry);
    const tip = new THREE.Vector3(x + ax * 1.3, h + 0.12, z + az * 1.3);
    b.rod(new THREE.Vector3(x, h - 0.05, z), tip, 0.035, MAT.steelBlue, 8);
    b.add(rbox(0.62, 0.1, 0.28, 0.04), MAT.steelDark, T(tip.x, tip.y, tip.z, 0, ry + Math.PI / 2, 0));
    b.add(rbox(0.52, 0.02, 0.2, 0.01), lens, T(tip.x, tip.y - 0.06, tip.z, 0, ry + Math.PI / 2, 0));
    pools.push([tip.x + ax * 0.6, 0.03, tip.z + az * 0.6, 9]);
    fps.push({ id: `street-pole-${i + 1}`, min: [x - 0.18, 0, z - 0.18], max: [x + 0.18, h, z + 0.18] });
  });

  // Torres de reflectores: 3 proyectores hacia el centro de la planta
  const cx = -6, cz = -2;
  FLOOD_MASTS.forEach(([x, z], i) => {
    const h = 9.5;
    b.add(rbox(0.6, 0.3, 0.6, 0.04), MAT.concrete, T(x, 0.15, z));
    b.add(cyl(0.11, h, 12, 0.07), MAT.steelBlue, T(x, 0.3 + h / 2, z));
    const yaw = Math.atan2(cx - x, cz - z);
    b.add(rbox(1.3, 0.08, 0.12, 0.02), MAT.steelDark, T(x, h + 0.2, z, 0, yaw + Math.PI / 2, 0));
    for (const k of [-1, 0, 1]) {
      const ox = Math.cos(yaw) * 0.5 * k, oz = -Math.sin(yaw) * 0.5 * k;
      const yy = yaw + k * 0.45;
      b.add(rbox(0.36, 0.26, 0.12, 0.03), MAT.steelDark, T(x + ox, h + 0.42, z + oz, -0.55, yy, 0));
      b.add(rbox(0.3, 0.2, 0.02, 0.01), lens, T(x + ox + Math.sin(yy) * 0.06, h + 0.38, z + oz + Math.cos(yy) * 0.06, -0.55, yy, 0));
      pools.push([x + Math.sin(yy) * 7, 0.03, z + Math.cos(yy) * 7, 11]);
    }
    fps.push({ id: `flood-mast-${i + 1}`, min: [x - 0.3, 0, z - 0.3], max: [x + 0.3, h + 0.6, z + 0.3] });
  });

  // Luminarias en postes de baranda
  const railLamp = (x: number, y: number, z: number, ry: number, poolY: number) => {
    b.rod(new THREE.Vector3(x, y, z), new THREE.Vector3(x, y + 0.55, z), 0.02, MAT.steelDark, 6);
    b.add(rbox(0.26, 0.08, 0.14, 0.03), MAT.steelDark, T(x, y + 0.6, z, 0, ry, 0));
    b.add(rbox(0.2, 0.015, 0.1, 0.006), lens, T(x, y + 0.555, z, 0, ry, 0));
    pools.push([x, poolY, z, 3.2]);
  };
  const py = 1.2 + 1.0;
  railLamp(PLATFORM.minX + 0.08, py, PLATFORM.maxZ - 0.03, 0, 1.22);
  railLamp(PLATFORM.maxX - 0.08, py, PLATFORM.maxZ - 0.03, 0, 1.22);
  const cy = CATWALK.deckY + CATWALK.railH;
  for (const x of [-8.0, -2.6, 2.8]) railLamp(x, cy, CATWALK.minZ + 0.03, 0, CATWALK.deckY + 0.02);
  railLamp(15.41, 2.3 + 0.9, -0.5, Math.PI / 2, 0.03);
  // Luces de emergencia (verde tenue permanente) en escaleras
  for (const [x, y, z] of [[PLATFORM.stairX + 0.45, py - 0.2, PLATFORM.maxZ], [CATWALK.minX + 0.05, cy - 0.2, -1.6]] as const) {
    b.add(rbox(0.16, 0.1, 0.06, 0.02), emerg, T(x, y, z));
  }
  // Luz del portón (sobre el poste sur)
  b.add(rbox(0.16, 0.1, 0.12, 0.02), lens, T(SITE.minX + 0.45, 2.34, ROAD.z + ROAD.width / 2 + 0.45));
  b.build(group);

  const poolMat = createLightPoolMaterial(0xffdcae, 0.26);
  const im = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), poolMat, pools.length);
  pools.forEach(([x, y, z, s], i) => im.setMatrixAt(i, new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion(), new THREE.Vector3(s, 1, s))));
  im.renderOrder = 3;
  im.frustumCulled = false;
  group.add(im);

  // Pocas luces reales (sin sombras), encendidas con el factor nocturno
  const real: [number, number, number, number, number][] = [
    [-26.0, 3.0, 0.8, 0xffd6a0, 6], [-17.0, 3.6, -6.2, 0xffe2b8, 5], [-2.6, 3.8, -1.4, 0xffe2b8, 8], [-21.2, 3.0, 6.8, 0xffd6a0, 7],
  ];
  for (const [x, y, z, c, d] of real) {
    const l = new THREE.PointLight(c, 0, d * 1.6, 1.6);
    l.position.set(x, y, z);
    l.castShadow = false;
    registerNightLight(l, 7);
    group.add(l);
  }
  group.userData.footprints = fps;
  return group;
}
