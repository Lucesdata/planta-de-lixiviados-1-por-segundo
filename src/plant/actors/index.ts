/**
 * Actores (fase 2): vía, 8 personas, 2 camiones, rutas con nombre, tote transportado y totes almacenados
 * en la bodega de ED-01. Implementa la interfaz `Actors` de types.ts. Nada de esto es seleccionable
 * (no entra en pickTargets). La coreografía (función pura de t) la hace el Agente B.
 * Metadatos para validación en `root.userData`: { routeMeta, roadFootprints }.
 */
import * as THREE from 'three';
import type { Actors, TruckKind, TruckRig } from '../types';
import { UNIT_BY_ID } from '../layout';
import { ED01_GEOM } from '../units/caseta';
import { buildRoad } from './road';
import { buildRoutes } from './routes';
import { createTruck } from './truck';
import { createToteSet } from './tote';
import { createWorker } from './worker';

export { createWorker, WORKER_STYLES } from './worker';
export { createTruck, TRUCK_DIM } from './truck';
export { ROAD_PATHS, distToRoad } from './road';

/** Ids de las 8 personas (el índice fija el estilo: casco/chaleco/piel). */
export const WORKER_IDS = ['op-1', 'op-2', 'op-3', 'op-4', 'op-5', 'op-6', 'op-7', 'op-8'] as const;

export function createActors(): Actors {
  const root = new THREE.Group();
  root.name = 'actors';
  const road = buildRoad();
  root.add(road.group);

  const workers = WORKER_IDS.map((id, i) => createWorker(id, i));
  for (const w of workers) { root.add(w.root); w.setVisible(false); }

  const trucks: Record<TruckKind, TruckRig> = { chemical: createTruck('chemical'), sludge: createTruck('sludge') };
  for (const t of Object.values(trucks)) { root.add(t.root); t.setVisible(false); }

  const { routes, meta } = buildRoutes();

  // Totes almacenados en la bodega de ED-01: 4 huecos de piso + 4 apilados
  const c = UNIT_BY_ID.control;
  const p = ED01_GEOM.plinth;
  const slots: THREE.Matrix4[] = [];
  for (const level of [0, 1]) for (const [x, z] of ED01_GEOM.toteSlots) slots.push(new THREE.Matrix4().makeTranslation(c.pos[0] + x, p + level * 1.18, c.pos[1] + z));
  const stock = createToteSet(slots);
  root.add(stock.group);

  // Tote transportado (sobre las horquillas de la transpaleta)
  const carried = createToteSet([new THREE.Matrix4()]);
  carried.setCount(1);
  carried.group.visible = false;
  root.add(carried.group);
  let carrier: (typeof workers)[number] | null = null;
  const tmp = new THREE.Vector3();

  root.userData.routeMeta = meta;
  root.userData.roadFootprints = road.footprints;

  return {
    root, workers, trucks, routes,
    setCarriedTote(workerId) {
      carrier = workerId ? workers.find(w => w.id === workerId) ?? null : null;
      carried.group.visible = !!carrier;
    },
    setStockedTotes(n) { stock.setCount(n); },
    update(_t) {
      if (carrier) {
        carrier.forkPoint(tmp);
        carried.group.position.copy(tmp);
        carried.group.rotation.set(0, carrier.heading, 0);
        carried.group.visible = carrier.root.visible;
      }
    },
  };
}
