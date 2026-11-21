/**
 * Estado de simulación — INTERFAZ COMPARTIDA. Producido por motion/timeline.evaluate(t),
 * función PURA de t (sin aleatoriedad, sin estado oculto). Consumido por escena y UI.
 */
import type { StageId, UnitId, UnitStatus } from '../plant/types';
import type { LightingState } from '../motion/lighting';

/** Fase 2 · estado de un camión (texto en la tarjeta Logística). */
export type TruckPhase = 'away' | 'enroute' | 'bay' | 'unloading' | 'loading' | 'leaving';

/** Fase 2 · logística (aditivo): solo depende de t; las cantidades son las que se ven en pantalla. */
export interface LogisticsState {
  personnel: number;
  trucks: { chemical: TruckPhase; sludge: TruckPhase };
}

export type PhaseId = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'idle';
export type PlantState = 'Stable' | 'Active' | 'Alert';

export interface UnitState {
  active: boolean;
  flow: number;     // 0..1
  motion: number;   // 0..1
  status: UnitStatus;
}

export interface PipeState {
  flow: number;     // 0..1
  front: number;    // 0..1
  highlight: boolean;
}

export interface Alert {
  id: string;
  t: number;              // instante de emisión
  level: 'info' | 'notice' | 'warn';
  text: { es: string; en: string };
}

export interface CameraShot {
  /** Punto mirado (mundo). */
  target: [number, number, number];
  /** Distancia de la cámara al objetivo a lo largo de la dirección fija (dolly). */
  distance: number;
  /** Campo visual vertical en grados (zoom óptico leve). */
  fov: number;
}

export interface CursorState {
  visible: boolean;
  /** Unidad sobre la que está el cursor (su ancla 'focus' proyectada) o null. */
  unitId: UnitId | null;
  /** Interpolación entre la posición anterior y la de unitId (0..1). */
  travel: number;
  fromUnitId: UnitId | null;
  /** 0..1 animación de clic (pulsación). */
  press: number;
}

export interface Parcel {
  visible: boolean;
  /** Si está en una tubería: id y fracción. Si está en una unidad: unitId y progreso interno. */
  pipeId: string | null;
  unitId: UnitId | null;
  u: number;
  /** Ramales paralelos UASB: la parcela se divide en 4 sub-parcelas. */
  split: boolean;
}

export interface SimState {
  t: number;
  duration: number;
  phase: PhaseId;
  /** Índice del paso activo del rastreador (-1 = ninguno). */
  trackerIndex: number;
  trackerDone: Record<StageId, boolean>;
  units: Record<UnitId, UnitState>;
  pipes: Record<string, PipeState>;
  parcel: Parcel;
  selected: UnitId | null;
  alerts: Alert[];       // alertas emitidas hasta t (más recientes al final)
  camera: CameraShot;
  cursor: CursorState;
  plantState: PlantState;
  /** Caption narrativo breve (subtítulo de la película). */
  caption: { es: string; en: string } | null;
  /** (Fase 2, aditivo) Personal y camiones. */
  logistics?: LogisticsState;
  /** (Fase 2, aditivo) Iluminación de escena. */
  lighting?: LightingState;
}
