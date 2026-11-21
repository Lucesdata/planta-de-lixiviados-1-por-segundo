/**
 * Ensamblado de la planta: unidades (UNITS), tuberías (PIPES), estructuras. Devuelve el objeto Plant
 * de la interfaz. Sin DOM: se puede ejecutar en Node para validación geométrica.
 */
import * as THREE from 'three';
import type { Footprint, Plant, PlantUnit, UnitId } from './types';
import { INLET_POINT, SITE, UNITS, type UnitSpec } from './layout';
import { PIPES, type PipeSpec } from './processFlow';
import { buildPipeNetwork } from './pipes';
import { buildStructures } from './structures';
import { createHomogenizer } from './units/homogeneizador';
import { createCoagulator } from './units/coagulador';
import { createFlocculator } from './units/floculador';
import { createClarifier1, createClarifier2 } from './units/clarificador';
import { createIntermediate } from './units/intermedio';
import { createPump } from './units/bomba';
import { createUASB } from './units/uasb';
import { createMBBR } from './units/mbbr';
import { createPhytoFilter } from './units/filtroFitopedologico';
import { createDischarge } from './units/descarga';
import { createSludgeHandling } from './units/lodos';
import { createScreen } from './units/rejilla';
import { createCoagDosing, createPolyDosing } from './units/dosificacion';
import { createFlare } from './units/antorcha';
import { createThickener } from './units/espesador';
import { createControlBuilding } from './units/caseta';
import { createActors } from './actors';
import { buildSiteLights } from './lights';
import { buildLandfill } from './landfill';
import { buildWetland } from './wetland';

function createUnit(spec: UnitSpec): PlantUnit {
  switch (spec.id) {
    case 'homog': return createHomogenizer(spec);
    case 'coag': return createCoagulator(spec);
    case 'floc': return createFlocculator(spec);
    case 'clar1': return createClarifier1(spec);
    case 'clar2': return createClarifier2(spec);
    case 'inter': return createIntermediate(spec);
    case 'pump': return createPump(spec);
    case 'uasb1': case 'uasb2': case 'uasb3': case 'uasb4': return createUASB(spec.id, spec);
    case 'mbbr': return createMBBR(spec);
    case 'filtro': return createPhytoFilter(spec);
    case 'discharge': return createDischarge(spec);
    case 'sludge': return createSludgeHandling(spec);
    case 'screen': return createScreen(spec);
    case 'dosC': return createCoagDosing(spec);
    case 'dosF': return createPolyDosing(spec);
    case 'pumpB': return createPump(spec, { cabinet: true });
    case 'flare': return createFlare(spec);
    case 'thick': return createThickener(spec);
    case 'control': return createControlBuilding(spec);
  }
}

/** Puntos de mundo de los extremos 'world': llegada (dentro de la cámara de llegada) y vertido. */
export function worldPorts(units: Record<UnitId, PlantUnit>): { inlet: THREE.Vector3; outfall: THREE.Vector3 } {
  const out = units.discharge.anchors.out;
  return {
    inlet: new THREE.Vector3(INLET_POINT[0], 0.25, INLET_POINT[1]),
    outfall: new THREE.Vector3(out.x, out.y, SITE.maxZ + 0.9),
  };
}

export function buildPlant(): Plant {
  const root = new THREE.Group();
  root.name = 'plant';
  const unitsGroup = new THREE.Group();
  unitsGroup.name = 'units';
  const units = {} as Record<UnitId, PlantUnit>;
  for (const spec of UNITS) {
    const u = createUnit(spec);
    units[spec.id] = u;
    unitsGroup.add(u.root);
  }

  const { group: structures, footprints: structFp } = buildStructures();
  const wp = worldPorts(units);

  const port = (unit: UnitId | 'world', name: string, world: THREE.Vector3): THREE.Vector3 => {
    if (unit === 'world') return world.clone();
    const p = units[unit].anchors[name];
    if (!p) throw new Error(`Puerto inexistente: ${unit}.${name}`);
    return p.clone();
  };
  const ports = (s: PipeSpec): [THREE.Vector3, THREE.Vector3] => [
    port(s.from, s.fromPort, wp.inlet),
    port(s.to, s.toPort, wp.outfall),
  ];
  const avoid: Footprint[] = [...Object.values(units).map(u => u.footprint), ...structFp.map(s => s.footprint)];
  const net = buildPipeNetwork(PIPES, ports, avoid);

  const lights = buildSiteLights();
  const actors = createActors();
  const landfill = buildLandfill();
  const wetland = buildWetland(wp.outfall);
  root.add(unitsGroup, net.root, structures, lights, actors.root, landfill.group, wetland.group);
  root.userData.siteLights = lights;

  // Caja del conjunto (unidades + tuberías)
  const box = new THREE.Box3();
  for (const u of Object.values(units)) {
    box.expandByPoint(new THREE.Vector3(...u.footprint.min));
    box.expandByPoint(new THREE.Vector3(...u.footprint.max));
  }
  for (const p of Object.values(net.pipes)) for (const q of p.points) box.expandByPoint(q);
  const bounds: Footprint = { min: box.min.toArray() as [number, number, number], max: box.max.toArray() as [number, number, number] };

  const unitList = Object.values(units);
  const pipeList = Object.values(net.pipes);
  return {
    root,
    units,
    pipes: net.pipes,
    bounds,
    layers: { pipes: net.root, structures },
    worldPorts: wp,
    actors,
    landfill,
    wetland: { anchor: wetland.anchor, framePoints: wetland.framePoints },
    update(t: number) {
      landfill.update(t);
      wetland.update(t);
      for (const u of unitList) u.update(t);
      for (const p of pipeList) p.update(t);
      actors.update(t);
    },
  };
}
