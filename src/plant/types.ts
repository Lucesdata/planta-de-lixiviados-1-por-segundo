/**
 * INTERFAZ COMPARTIDA entre geometría (Agente A) y simulación/UI (Agente B).
 * Cambios solo aditivos. Unidades: metros, eje Y hacia arriba, plano de suelo y = 0.
 */
import type * as THREE from 'three';

export type UnitId =
  | 'homog' | 'coag' | 'floc' | 'clar1' | 'inter' | 'pump'
  | 'uasb1' | 'uasb2' | 'uasb3' | 'uasb4'
  | 'clar2' | 'mbbr' | 'filtro' | 'discharge' | 'sludge'
  // Fase 2 (equipos auxiliares, hipótesis visuales; ver docs/BRIEF.md §Fase 2)
  | 'screen' | 'dosC' | 'dosF' | 'pumpB' | 'flare' | 'thick' | 'control';

/** Pasos del rastreador de proceso (orden fijo del brief). */
export type StageId =
  | 'homog' | 'coag' | 'floc' | 'clar1' | 'uasb' | 'clar2' | 'mbbr' | 'filtro' | 'discharge';

export type UnitStatus = 'idle' | 'active' | 'standby' | 'alert';

/** Tipo de línea → color de tubería y de flujo. */
export type LineKind =
  | 'leachate'   // lixiviado crudo / acondicionado (ámbar oscuro)
  | 'clarified'  // clarificado primario (ámbar más claro)
  | 'pumped'     // impulsión a UASB
  | 'anaerobic'  // efluente UASB
  | 'treated'    // pulido / tratado (azul-verde)
  | 'sludge'     // lodos (marrón oscuro)
  | 'biogas'     // biogás UASB → sello → antorcha (amarillo apagado)
  | 'chemical'   // dosificación de coagulante / polímero (gris violáceo)
  | 'return';    // retorno de drenado del lecho de secado a cabecera

export interface Footprint {
  /** Caja alineada a ejes en coordenadas de mundo (para validación de solapes). */
  min: [number, number, number];
  max: [number, number, number];
}

export interface PlantUnit {
  id: UnitId;
  root: THREE.Group;
  /**
   * Puntos de mundo con nombre. Obligatorios:
   *  'label'  – punto sobre el equipo donde se ancla la etiqueta HTML
   *  'focus'  – centro visual para encuadre de cámara
   *  'core'   – punto interior por el que pasa la parcela héroe
   * Además los puertos usados por las tuberías ('in', 'out', 'sludge', ...).
   */
  anchors: Record<string, THREE.Vector3>;
  /** Radio aproximado (m) del volumen visible, para encuadre. */
  radius: number;
  footprint: Footprint;
  /** Mallas que reciben el raycast de selección. */
  pickTargets: THREE.Object3D[];
  setActive(on: boolean): void;
  setSelected(on: boolean): void;
  /** 0..1 nivel/intensidad de flujo que atraviesa la unidad. */
  setFlowLevel(x: number): void;
  /** 0..1 intensidad de la actividad interna (mezcla, remolino, burbujeo, sedimentación). */
  setInternalMotion(x: number): void;
  setStatus(mode: UnitStatus): void;
  /** Animación procedimental determinista: depende SOLO de t (s) y del estado fijado. */
  update(t: number): void;
}

/* ------------------------------------------------------------------ */
/* Fase 2 · Actores: personas y camiones (INTERFAZ A↔B)                 */
/* El Agente A construye modelos y rutas; el Agente B coreografía con   */
/* una función pura de t (src/motion/actors.ts).                        */
/* ------------------------------------------------------------------ */
export type WorkerAction = 'idle' | 'walk' | 'inspect' | 'shovel' | 'carry' | 'operate' | 'sample' | 'rake';

export interface WorkerRig {
  id: string;
  root: THREE.Group;
  /** pos sobre el suelo/plataforma; heading en rad (0 = mirando +z, positivo antihorario visto desde arriba). */
  setPose(pos: THREE.Vector3, heading: number): void;
  /** gait = fase de paso acumulada (ciclos; 0 = quieto), action y su fase 0..1 (cíclica). */
  setAction(action: WorkerAction, phase: number, gait: number): void;
  setVisible(on: boolean): void;
}

export type TruckKind = 'chemical' | 'sludge';

export interface TruckRig {
  id: string;
  kind: TruckKind;
  root: THREE.Group;
  /** pos = centro del eje trasero sobre el suelo; heading como WorkerRig. wheelTurns = vueltas acumuladas de rueda. */
  setPose(pos: THREE.Vector3, heading: number, wheelTurns: number): void;
  /** 0..1 carga visible (químico: totes IBC a bordo; lodos: nivel en la tolva). */
  setLoad(x: number): void;
  /** 0..1 maniobra de carga/descarga (químico: plataforma trasera; lodos: compuerta/tolva). */
  setWork(x: number): void;
  setBeacon(on: boolean, t: number): void;
  setVisible(on: boolean): void;
  /** Longitud del vehículo (m), para ajustar paradas. */
  length: number;
}

export interface ActorRoute {
  /** Polilínea libre de colisiones en mundo (y = cota del piso por el que se camina/circula). */
  points: THREE.Vector3[];
  length: number;
  pointAt(u: number): THREE.Vector3;
  /** heading en u (dirección de avance). */
  headingAt(u: number): number;
}

export interface Actors {
  root: THREE.Group;
  workers: WorkerRig[];
  trucks: Record<TruckKind, TruckRig>;
  /** Rutas con nombre (ver ACTOR_ROUTES en layout.ts). */
  routes: Record<string, ActorRoute>;
  /** Tote IBC suelto que una persona transporta (se muestra en las manos/transpaleta durante 'carry'). */
  setCarriedTote(workerId: string | null): void;
  /** 0..n totes descargados y apilados junto a la caseta de químicos. */
  setStockedTotes(n: number): void;
  update(t: number): void;
}

export interface PipeRun {
  id: string;
  kind: LineKind;
  from: UnitId | 'world';
  to: UnitId | 'world';
  root: THREE.Group;
  /** Polilínea ortogonal en mundo (codos a 90°). */
  points: THREE.Vector3[];
  /** Longitud total (m). */
  length: number;
  /** Punto de mundo a fracción u∈[0,1] de la longitud (sentido del flujo). */
  pointAt(u: number): THREE.Vector3;
  /** 0..1 caudal visual (pulsos/flechas). 0 = línea en reposo. */
  setFlow(x: number): void;
  /** 0..1 avance del frente de llenado (parcela héroe); 1 = línea completamente activa. */
  setFront(x: number): void;
  setHighlighted(on: boolean): void;
  setVisible(on: boolean): void;
  update(t: number): void;
}

export interface Plant {
  root: THREE.Group;
  units: Record<UnitId, PlantUnit>;
  pipes: Record<string, PipeRun>;
  /** Caja del conjunto de la planta (encuadre de vista general). */
  bounds: Footprint;
  /** Etiquetas/plataformas/pasarelas (para toggles). */
  layers: { labels?: THREE.Object3D; pipes: THREE.Object3D; structures: THREE.Object3D };
  /** (Aditivo) Extremos 'world' de las tuberías: llegada del lixiviado y punto de vertido tras el cabezal. */
  worldPorts?: { inlet: THREE.Vector3; outfall: THREE.Vector3 };
  /** (Fase 2) Personas, camiones y rutas. */
  actors?: Actors;
  /** (Fase 3) Vertedero de origen y laguna de lixiviados: anclas de etiqueta y puntos de encuadre. */
  /** (Fase 5) Humedal receptor del agua tratada. */
  wetland?: { anchor: THREE.Vector3; framePoints: [number, number, number][] };
  landfill?: { anchors: Record<'landfill' | 'pond', THREE.Vector3>; framePoints: [number, number, number][]; setRain(on: boolean): void };
  update(t: number): void;
}
