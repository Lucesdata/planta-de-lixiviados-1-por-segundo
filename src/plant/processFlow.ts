/**
 * Grafo de proceso — INTERFAZ COMPARTIDA. Define las tuberías lógicas (id, extremos, tipo de línea)
 * en el orden del brief. El Agente A construye la geometría de cada id; el Agente B anima su estado.
 * No hay recirculación UASB. Fase 2 (por indicación del usuario, hipótesis visuales): rejilla, dosificación,
 * bomba de reserva, biogás con antorcha, purgas de UASB y CL-201, espesador, lecho de secado y retorno de drenado.
 */
import type { LineKind, StageId, UnitId } from './types';

export interface PipeSpec {
  id: string;
  from: UnitId | 'world';
  fromPort: string;
  to: UnitId | 'world';
  toPort: string;
  kind: LineKind;
  /** Paso del rastreador al que pertenece la línea (para resaltar la ruta activa). */
  stage: StageId;
}

const U = ['uasb1', 'uasb2', 'uasb3', 'uasb4'] as const;

export const PIPES: PipeSpec[] = [
  { id: 'p-inlet',        from: 'world', fromPort: 'inlet', to: 'screen', toPort: 'in', kind: 'leachate',  stage: 'homog' },
  { id: 'p-screen-homog', from: 'screen', fromPort: 'out',  to: 'homog', toPort: 'in',  kind: 'leachate',  stage: 'homog' },
  { id: 'p-homog-coag',   from: 'homog', fromPort: 'out',   to: 'coag',  toPort: 'in',  kind: 'leachate',  stage: 'coag' },
  { id: 'p-coag-floc',    from: 'coag',  fromPort: 'out',   to: 'floc',  toPort: 'in',  kind: 'leachate',  stage: 'floc' },
  { id: 'p-floc-clar1',   from: 'floc',  fromPort: 'out',   to: 'clar1', toPort: 'in',  kind: 'leachate',  stage: 'clar1' },
  { id: 'p-clar1-thick',  from: 'clar1', fromPort: 'sludge',to: 'thick', toPort: 'in',  kind: 'sludge',    stage: 'clar1' },
  { id: 'p-thick-bed',    from: 'thick', fromPort: 'out',   to: 'sludge',toPort: 'in',  kind: 'sludge',    stage: 'clar1' },
  { id: 'p-bed-return',   from: 'sludge',fromPort: 'drain', to: 'homog', toPort: 'return', kind: 'return', stage: 'clar1' },
  { id: 'p-dosC-coag',    from: 'dosC',  fromPort: 'out',   to: 'coag',  toPort: 'dose', kind: 'chemical', stage: 'coag' },
  { id: 'p-dosF-floc',    from: 'dosF',  fromPort: 'out',   to: 'floc',  toPort: 'dose', kind: 'chemical', stage: 'floc' },
  { id: 'p-clar1-inter',  from: 'clar1', fromPort: 'out',   to: 'inter', toPort: 'in',  kind: 'clarified', stage: 'uasb' },
  { id: 'p-inter-pump',   from: 'inter', fromPort: 'out',   to: 'pump',  toPort: 'in',  kind: 'clarified', stage: 'uasb' },
  // Reserva: succión y descarga de P-01B (en espera; se une al colector de impulsión aguas abajo de P-01)
  { id: 'p-inter-pumpB',  from: 'inter', fromPort: 'out',   to: 'pumpB', toPort: 'in',  kind: 'clarified', stage: 'uasb' },
  { id: 'p-pumpB-header', from: 'pumpB', fromPort: 'out',   to: 'pump',  toPort: 'header', kind: 'pumped', stage: 'uasb' },
  // Impulsión: bomba → colector de reparto (el colector forma parte de cada ramal p-feed-uasbN)
  ...U.map(u => ({ id: `p-feed-${u}`, from: 'pump' as const, fromPort: 'out', to: u, toPort: 'in', kind: 'pumped' as const, stage: 'uasb' as const })),
  ...U.map(u => ({ id: `p-${u}-clar2`, from: u, fromPort: 'out', to: 'clar2' as const, toPort: 'in', kind: 'anaerobic' as const, stage: 'clar2' as const })),
  // Biogás: domo de cada UASB → colector → sello hidráulico y antorcha
  ...U.map(u => ({ id: `p-gas-${u}`, from: u, fromPort: 'gas', to: 'flare' as const, toPort: 'in', kind: 'biogas' as const, stage: 'uasb' as const })),
  // Purgas de lodo: UASB y CL-201 → espesador (troncal compartido)
  ...U.map(u => ({ id: `p-purge-${u}`, from: u, fromPort: 'sludge', to: 'thick' as const, toPort: 'in', kind: 'sludge' as const, stage: 'uasb' as const })),
  { id: 'p-clar2-thick',  from: 'clar2', fromPort: 'sludge',to: 'thick', toPort: 'in',  kind: 'sludge',    stage: 'clar2' },
  { id: 'p-clar2-mbbr',   from: 'clar2', fromPort: 'out',   to: 'mbbr',  toPort: 'in',  kind: 'treated',   stage: 'mbbr' },
  { id: 'p-mbbr-filtro',  from: 'mbbr',  fromPort: 'out',   to: 'filtro',toPort: 'in',  kind: 'treated',   stage: 'filtro' },
  { id: 'p-filtro-discharge', from: 'filtro', fromPort: 'out', to: 'discharge', toPort: 'in', kind: 'treated', stage: 'discharge' },
  { id: 'p-outfall',      from: 'discharge', fromPort: 'out', to: 'world', toPort: 'outfall', kind: 'treated', stage: 'discharge' },
];

export const STAGES: { id: StageId; units: UnitId[] }[] = [
  { id: 'homog', units: ['screen', 'homog'] },
  { id: 'coag', units: ['dosC', 'coag'] },
  { id: 'floc', units: ['dosF', 'floc'] },
  { id: 'clar1', units: ['clar1', 'thick', 'sludge'] },
  { id: 'uasb', units: ['inter', 'pump', 'pumpB', 'uasb1', 'uasb2', 'uasb3', 'uasb4', 'flare'] },
  { id: 'clar2', units: ['clar2'] },
  { id: 'mbbr', units: ['mbbr'] },
  { id: 'filtro', units: ['filtro'] },
  { id: 'discharge', units: ['discharge'] },
];

/** Paleta de líneas (sRGB hex). Sobria, sin neón. */
export const LINE_COLORS: Record<LineKind, { pipe: number; fluid: number }> = {
  // Fase 4 · estilo claro: tuberías en tonos pastel del mismo matiz y fluido vivo.
  leachate:  { pipe: 0xc58f5a, fluid: 0xf39a2c },
  clarified: { pipe: 0xd2ad6a, fluid: 0xf6c443 },
  pumped:    { pipe: 0x8aa0dd, fluid: 0x4f7bff },
  anaerobic: { pipe: 0xa9b06a, fluid: 0xb5c832 },
  treated:   { pipe: 0x6cc8bd, fluid: 0x15c3b0 },
  sludge:    { pipe: 0x9a7552, fluid: 0xb06a32 },
  biogas:    { pipe: 0xe6c444, fluid: 0xffd84a },
  chemical:  { pipe: 0xab9fdc, fluid: 0x8f6dff },
  return:    { pipe: 0xb1b39f, fluid: 0xcdb98a },
};
