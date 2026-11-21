/**
 * Layout del sitio — INTERFAZ COMPARTIDA.
 * Coordenadas en planta: x (oeste→este), z (norte→sur, +z hacia la cámara por defecto).
 * Volúmenes: los del brief. Dimensiones geométricas: HIPÓTESIS de este escenario narrativo,
 * derivadas del volumen (ver docs/LAYOUT.md). No son cotas de diseño ni as-built.
 */
import type { StageId, UnitId } from './types';

export type Shape = 'cyl' | 'box' | 'cone-clarifier' | 'pump' | 'bed' | 'outfall' | 'sludge-bed';

export interface UnitSpec {
  id: UnitId;
  tag: string;
  name: { es: string; en: string };
  fn: { es: string; en: string };
  stage: StageId | null;
  shape: Shape;
  /** Centro en planta [x, z]. */
  pos: [number, number];
  /** cyl: diámetro × altura; box/bed: ancho(x) × alto × fondo(z). */
  size: { d?: number; w?: number; h: number; l?: number };
  /** Cota de apoyo (m) sobre el suelo (losa/plataforma/soportes). */
  base: number;
  /** Volumen del brief (m³) o null = no dado en el brief (el valor supuesto vive en assumptions.ts). */
  volume: number | null;
}

export const DESIGN = {
  flow_Ls: 1.0,
  hoursPerDay: 8,
  uasbCount: 4,
  uasbRecirculation: false,
  apparentDensity_tm3: 0.75,
} as const;

/** Caudal en m³/h y volumen diario derivados (cálculo directo, no medición). */
export const DERIVED = {
  flow_m3h: DESIGN.flow_Ls * 3.6,
  daily_m3: DESIGN.flow_Ls * 3.6 * DESIGN.hoursPerDay,
  /** Caudal por UASB con reparto equitativo (hipótesis de reparto). */
  perUasb_Ls: DESIGN.flow_Ls / 4,
};

/** Tiempo de retención hidráulico (h) = V / Q. null si no hay volumen. */
export function hrtHours(volume: number | null, flowLs: number = DESIGN.flow_Ls): number | null {
  if (volume == null) return null;
  return volume / (flowLs * 3.6);
}

export const UNITS: UnitSpec[] = [
  { id: 'homog', tag: 'TK-101', stage: 'homog', shape: 'cyl', pos: [-24, -8], size: { d: 3.2, h: 2.6 }, base: 0.3, volume: 20,
    name: { es: 'Tanque de homogenización', en: 'Homogenization tank' },
    fn: { es: 'Recibe el lixiviado y amortigua variaciones de caudal y carga.', en: 'Receives leachate and equalizes flow and load.' } },
  { id: 'coag', tag: 'TK-102', stage: 'coag', shape: 'box', pos: [-18.5, -8], size: { w: 1.0, h: 1.0, l: 1.0 }, base: 1.2, volume: 1,
    name: { es: 'Tanque de coagulación', en: 'Coagulation tank' },
    fn: { es: 'Mezcla rápida con coagulante para desestabilizar coloides.', en: 'Rapid mix with coagulant to destabilize colloids.' } },
  { id: 'floc', tag: 'TK-103', stage: 'floc', shape: 'cyl', pos: [-15.5, -8], size: { d: 1.1, h: 1.05 }, base: 1.2, volume: 1,
    name: { es: 'Tanque de floculación', en: 'Flocculation tank' },
    fn: { es: 'Mezcla lenta para formar flóculos sedimentables.', en: 'Slow mix to grow settleable flocs.' } },
  { id: 'clar1', tag: 'CL-101', stage: 'clar1', shape: 'cone-clarifier', pos: [-11.5, -8], size: { d: 2.2, h: 3.4 }, base: 0.0, volume: null,
    name: { es: 'Clarificador cónico 1', en: 'Conical clarifier 1' },
    fn: { es: 'Sedimentación primaria; el lodo se purga por el cono.', en: 'Primary settling; sludge is drawn from the cone.' } },
  { id: 'sludge', tag: 'LS-101', stage: null, shape: 'sludge-bed', pos: [-21.2, 6.85], size: { w: 7.0, h: 0.8, l: 4.0 }, base: 0.0, volume: null,
    name: { es: 'Lecho de secado cubierto', en: 'Covered sludge drying bed' },
    fn: { es: 'Deshidrata el lodo espesado; el drenado vuelve a cabecera y la torta se retira en camión.', en: 'Dewaters thickened sludge; drainage returns to the headworks and cake leaves by truck.' } },
  { id: 'inter', tag: 'TK-104', stage: 'uasb', shape: 'cyl', pos: [-7, -8], size: { d: 1.5, h: 1.15 }, base: 0.3, volume: 2,
    name: { es: 'Tanque intermedio', en: 'Intermediate tank' },
    fn: { es: 'Pulmón de succión para el bombeo a los UASB.', en: 'Suction buffer for pumping to the UASB train.' } },
  { id: 'pump', tag: 'P-01', stage: 'uasb', shape: 'pump', pos: [-3.0, -8], size: { w: 0.9, h: 0.7, l: 0.5 }, base: 0.15, volume: null,
    name: { es: 'Bomba de alimentación UASB', en: 'UASB feed pump' },
    fn: { es: 'Impulsa el clarificado al colector de reparto UASB.', en: 'Lifts clarified flow to the UASB distribution header.' } },
  { id: 'uasb1', tag: 'R-201', stage: 'uasb', shape: 'cyl', pos: [-8, 0.5], size: { d: 2.0, h: 3.2 }, base: 0.3, volume: 10,
    name: { es: 'Reactor UASB 1', en: 'UASB reactor 1' },
    fn: { es: 'Digestión anaerobia de flujo ascendente con manto de lodo.', en: 'Upflow anaerobic sludge blanket digestion.' } },
  { id: 'uasb2', tag: 'R-202', stage: 'uasb', shape: 'cyl', pos: [-4.4, 0.5], size: { d: 2.0, h: 3.2 }, base: 0.3, volume: 10,
    name: { es: 'Reactor UASB 2', en: 'UASB reactor 2' },
    fn: { es: 'Digestión anaerobia de flujo ascendente con manto de lodo.', en: 'Upflow anaerobic sludge blanket digestion.' } },
  { id: 'uasb3', tag: 'R-203', stage: 'uasb', shape: 'cyl', pos: [-0.8, 0.5], size: { d: 2.0, h: 3.2 }, base: 0.3, volume: 10,
    name: { es: 'Reactor UASB 3', en: 'UASB reactor 3' },
    fn: { es: 'Digestión anaerobia de flujo ascendente con manto de lodo.', en: 'Upflow anaerobic sludge blanket digestion.' } },
  { id: 'uasb4', tag: 'R-204', stage: 'uasb', shape: 'cyl', pos: [2.8, 0.5], size: { d: 2.0, h: 3.2 }, base: 0.3, volume: 10,
    name: { es: 'Reactor UASB 4', en: 'UASB reactor 4' },
    fn: { es: 'Digestión anaerobia de flujo ascendente con manto de lodo.', en: 'Upflow anaerobic sludge blanket digestion.' } },
  { id: 'clar2', tag: 'CL-201', stage: 'clar2', shape: 'cone-clarifier', pos: [8, 0.5], size: { d: 2.2, h: 3.4 }, base: 0.0, volume: null,
    name: { es: 'Clarificador cónico 2', en: 'Conical clarifier 2' },
    fn: { es: 'Separa sólidos arrastrados del efluente anaerobio.', en: 'Separates solids carried over from the anaerobic effluent.' } },
  { id: 'mbbr', tag: 'R-301', stage: 'mbbr', shape: 'box', pos: [13.5, 0.5], size: { w: 4.0, h: 2.0, l: 2.5 }, base: 0.3, volume: 20,
    name: { es: 'Reactor MBBR', en: 'MBBR reactor' },
    fn: { es: 'Biopelícula aerobia sobre soportes móviles, aireada por el soplante B-301; pulimento.', en: 'Aerobic biofilm on moving carriers, aerated by blower B-301; polishing.' } },
  { id: 'filtro', tag: 'FF-401', stage: 'filtro', shape: 'bed', pos: [9, 9], size: { w: 9.0, h: 0.9, l: 5.0 }, base: 0.0, volume: null,
    name: { es: 'Filtro fitopedológico', en: 'Phytopedological filter' },
    fn: { es: 'Lecho plantado de suelo/medio; afinamiento final.', en: 'Planted soil/media bed; final polishing.' } },
  { id: 'discharge', tag: 'DS-501', stage: 'discharge', shape: 'outfall', pos: [1, 9], size: { w: 1.6, h: 0.9, l: 1.6 }, base: 0.0, volume: null,
    name: { es: 'Descarga de efluente tratado', en: 'Treated effluent discharge' },
    fn: { es: 'Cámara de salida y punto de descarga del efluente.', en: 'Outlet chamber and effluent discharge point.' } },
  // ---------------- Fase 2: equipos auxiliares (supuestos visuales; valores de proceso en assumptions.ts) ----------------
  { id: 'screen', tag: 'RJ-100', stage: 'homog', shape: 'box', pos: [-28.3, -8], size: { w: 2.2, h: 0.9, l: 0.9 }, base: 0.0, volume: null,
    name: { es: 'Rejilla y desarenador', en: 'Screen and grit channel' },
    fn: { es: 'Retiene sólidos gruesos y arenas antes de la homogenización.', en: 'Removes coarse solids and grit ahead of equalization.' } },
  { id: 'dosC', tag: 'DQ-101', stage: 'coag', shape: 'box', pos: [-19.0, -5.95], size: { w: 1.4, h: 1.5, l: 1.0 }, base: 0.0, volume: null,
    name: { es: 'Dosificación de coagulante', en: 'Coagulant dosing' },
    fn: { es: 'Tanque y bomba dosificadora de coagulante hacia TK-102.', en: 'Coagulant day tank and metering pump to TK-102.' } },
  { id: 'dosF', tag: 'DQ-102', stage: 'floc', shape: 'box', pos: [-15.5, -5.95], size: { w: 1.4, h: 1.5, l: 1.0 }, base: 0.0, volume: null,
    name: { es: 'Preparación y dosificación de polímero', en: 'Polymer make-up and dosing' },
    fn: { es: 'Preparación de floculante y bomba dosificadora hacia TK-103.', en: 'Flocculant make-up and metering pump to TK-103.' } },
  { id: 'pumpB', tag: 'P-01B', stage: 'uasb', shape: 'pump', pos: [-3, -9.6], size: { w: 0.9, h: 0.7, l: 0.5 }, base: 0.15, volume: null,
    name: { es: 'Bomba de reserva UASB', en: 'UASB standby pump' },
    fn: { es: 'Bomba de reserva en paralelo con P-01 (en espera).', en: 'Standby pump in parallel with P-01.' } },
  { id: 'flare', tag: 'QB-201', stage: 'uasb', shape: 'cyl', pos: [6.5, -13], size: { d: 0.5, h: 5.0 }, base: 0.3, volume: null,
    name: { es: 'Sello hidráulico y antorcha de biogás', en: 'Biogas seal pot and flare' },
    fn: { es: 'Recoge el biogás de los 4 UASB y lo quema en antorcha.', en: 'Collects biogas from the 4 UASB and burns it in a flare.' } },
  { id: 'thick', tag: 'ES-101', stage: null, shape: 'cyl', pos: [-9.6, 6.8], size: { d: 2.4, h: 2.6 }, base: 0.3, volume: null,
    name: { es: 'Espesador de lodos', en: 'Sludge thickener' },
    fn: { es: 'Concentra los lodos de CL-101, de los UASB y de CL-201 antes del secado.', en: 'Thickens sludge from CL-101, the UASB and CL-201 before drying.' } },
  { id: 'control', tag: 'ED-01', stage: null, shape: 'box', pos: [-24.5, -2.2], size: { w: 6.0, h: 3.2, l: 3.0 }, base: 0.0, volume: null,
    name: { es: 'Caseta de control y químicos', en: 'Control and chemical building' },
    fn: { es: 'Sala de control, tablero eléctrico (MCC) y bodega de químicos.', en: 'Control room, MCC panel and chemical store.' } },
];

export const UNIT_BY_ID: Record<UnitId, UnitSpec> = Object.fromEntries(UNITS.map(u => [u.id, u])) as Record<UnitId, UnitSpec>;

/** Punto de entrada del lixiviado al sitio (borde oeste). */
export const INLET_POINT: [number, number] = [-31, -8];

/**
 * Fase 2 · Vía de acceso y rutas de actores (planta). La vía entra por el portón oeste y termina en un
 * área de maniobra; el Agente A construye la calzada y las rutas exactas (libres de colisión) con estos nombres:
 *  Camiones: 'chem-arrive', 'chem-leave' (portón ↔ bahía frente a ED-01),
 *            'sludge-arrive', 'sludge-leave' (portón ↔ punto de carga junto a LS-101).
 *  Personas: 'w-operator' (ED-01 ↔ dosificación ↔ plataforma TK-102/103), 'w-uasb' (pasarela UASB),
 *            'w-bed-a', 'w-bed-b' (borde del lecho ↔ camión de lodos), 'w-unload' (camión químico ↔ puerta ED-01),
 *            'w-mbbr' (MBBR ↔ soplante B-301), 'w-patrol' (recorrido largo de la planta), 'w-screen' (rejilla RJ-100).
 */
export const ROAD = {
  gate: [-33, 2.5] as [number, number], z: 2.5, width: 3.6,
  /** Fin del tramo recto norte (inicio de la curva NE del lazo). */
  endX: -17.6,
  /**
   * Lazo de retorno de un solo sentido (hipótesis de Agente A, sustituye al «martillo»): se entra por el
   * portón hacia el este por z = 2,5, se gira al sur en x = −13,6, se vuelve al oeste por z = 11,4 y se
   * sube por x = −28,8 hasta la curva de salida al portón. Radio de curva en el eje: 4 m.
   */
  loop: { eastX: -13.6, southZ: 11.4, westX: -28.8, r: 4.0 },
  /** Paradas (centro del eje trasero, rumbo): químico frente a ED-01 (rumbo este), lodos junto a LS-101 (rumbo oeste). */
  chemStop: { x: -24.0, z: 2.5 },
  sludgeStop: { x: -20.2, z: 11.4 },
};

/** Límite del sitio (losa general) en planta. */
export const SITE = { minX: -33, maxX: 19, minZ: -18.5, maxZ: 13.5 };

/**
 * Dirección FIJA de la cámara (del objetivo hacia la cámara, sin normalizar).
 * Lenguaje de cámara único: solo pan (mover objetivo), dolly (distancia) y zoom (fov). Nunca rota.
 * Vista tres cuartos elevada desde el sureste (≈ 36° de elevación).
 */
export const CAMERA_DIR: [number, number, number] = [0.45, 0.8, 1.0];

/**
 * Fase 3 · Vertedero (relleno sanitario) de origen del lixiviado — SUPUESTO VISUAL, al oeste de la planta.
 * Celda escalonada en 2 bermas, frente de trabajo con basura expuesta hacia la cámara (sur), resto con
 * cobertura vegetal. Lluvia sobre el vertedero → percolación → canal perimetral → laguna de lixiviados → tubería
 * a la cámara de llegada (INLET_POINT). Ninguna dimensión proviene de planos: escala didáctica.
 */
export const LANDFILL = {
  minX: -84, maxX: -46, minZ: -27, maxZ: -4,
  /** Altura de cada terraza y retiro horizontal del talud. */
  tierH: 2.6, slope: 3.2, bench: 1.4,
  /** Frente de trabajo (basura expuesta) en planta, sobre la terraza superior y su talud sur. */
  face: { minX: -66, maxX: -55 },
};
/** Laguna de lixiviados (supuesto visual) entre el vertedero y la cámara de llegada. */
export const POND = { minX: -42.5, maxX: -36.5, minZ: -11.5, maxZ: -4.5, depth: 1.2 };
/** Canal perimetral de lixiviado: pie sur (z) y pie este (x) del vertedero. */
export const DITCH = { z: -2.6, x: -44.6, w: 0.7 };
/** Vía externa (doble carril) desde el portón hacia el oeste; carril de entrada al norte (+z), de salida al sur. */
export const EXT_ROAD = { farX: -118, spawnX: -96, despawnX: -66, laneIn: 4.3, laneOut: 0.7, shiftX0: -44, shiftX1: -37.5, width: 7.4 };

/**
 * Fase 5 · Humedal receptor (supuesto visual) al sur del sitio: cierra el ciclo del agua tratada.
 * Elipse de agua clara con orilla, juncos, nenúfares, árboles, garzas y patos; canal desde el vertido.
 */
export const WETLAND = { cx: 3.5, cz: 22.0, rx: 9.5, rz: 5.2 };
