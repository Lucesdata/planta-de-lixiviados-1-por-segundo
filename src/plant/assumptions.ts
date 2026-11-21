/**
 * SUPUESTOS DEL ESCENARIO — todo es hipótesis editable (no proviene de documentos oficiales ni mediciones).
 * Clases:  B = dato del brief del usuario · S = supuesto (valor típico asumido) · C = cálculo a partir de B/S.
 * Cambiar un supuesto aquí recalcula los valores C derivados (función pura, sin estado).
 */
import type { UnitId } from './types';
import { DESIGN } from './layout';

export type FactClass = 'B' | 'S' | 'C';
export interface Fact {
  key: string;
  label: { es: string; en: string };
  value: number;
  unit: string;
  digits: number;
  cls: FactClass;
  basis: { es: string; en: string };
}

/** Supuestos base (S). Editar aquí. */
export const S = {
  // Calidad de entrada asumida (lixiviado)
  codIn_mgL: 12000,          // DQO afluente
  tssIn_mgL: 800,            // SST afluente
  codRemPhysChem: 0.25,      // remoción DQO fisicoquímico
  codRemUasb: 0.70,          // remoción DQO en UASB
  codRemMbbr: 0.50,          // remoción DQO residual en MBBR
  codRemFilter: 0.30,        // remoción DQO residual en el filtro fitopedológico (fase 5)
  tssRemOverall: 0.92,       // remoción global de SST (fase 5, antes/después)
  ch4Lhv_kWhm3: 9.97,        // poder calorífico inferior del metano (energía contenida)
  // Químicos
  coagDose_mgL: 300,         // FeCl3 como producto
  coagSolution: 0.40,        // fracción másica de la solución comercial
  coagDensity: 1.42,         // kg/L de la solución
  coagDayTank_L: 200,
  polyDose_mgL: 2,
  polyPrepConc: 0.001,       // 0,1 % preparado
  polyTank_L: 500,
  // Biogás
  ch4Yield_m3kg: 0.35,       // m³ CH4 por kg DQO removida (CNTP)
  ch4Fraction: 0.65,
  flareCapacity_m3h: 15,
  // Aireación MBBR
  airPerVolume_m3m3h: 3.0,   // Nm³ aire / (m³ reactor · h)
  blowerPressure_bar: 0.35,
  blowerMotor_kW: 2.2,
  mbbrFill: 0.5,             // fracción de llenado con soportes (fase 7)
  carrierSsa_m2m3: 500,      // superficie protegida del soporte, m²/m³ (tipo K1)
  doSet_mgL: 2.5,            // consigna de oxígeno disuelto
  uasbSepAngle_deg: 50,      // inclinación de las campanas del separador trifásico
  // Filtro fitopedológico (fase 8): capas del lecho y vegetación
  filterGravel_m: 0.25, filterSand_m: 0.20, filterSoil_m: 0.27,
  filterPlant: 'Typha (enea)',
  // Pretratamiento (fase 9): gradientes de velocidad y viscosidad del agua a ~25 °C
  coagG_s: 300, flocG_s: 40, waterMu_Pas: 0.00089,
  // Bombeo
  pumpHead_m: 8,
  pumpEfficiency: 0.55,
  pumpMotor_kW: 0.75,
  // Lodos
  primarySludge_kgm3: 0.6,   // kg SS por m³ tratado (fisicoquímico)
  uasbYield_kgSSkgCOD: 0.05,
  clar2Sludge_kgd: 2,
  purgeSolids: 0.02,         // 2 % de sólidos en purga
  thickSolids: 0.05,         // 5 % tras espesador
  cakeSolids: 0.25,          // 25 % torta seca
  truckCapacity_m3: 6,
  // Geometría asumida para volúmenes no dados en el brief (coherente con el modelo 3D)
  clarD_m: 2.2, clarCylH_m: 1.7, clarConeH_m: 0.85,
  thickD_m: 2.4, thickH_m: 2.6,
  filterArea_m2: 45, filterDepth_m: 0.9,
  bedArea_m2: 28,
};

const Q_m3h = DESIGN.flow_Ls * 3.6;
const Q_m3d = Q_m3h * DESIGN.hoursPerDay;
const kgPerH = (mgL: number) => (mgL / 1000) * Q_m3h;

/** Cálculos derivados (C). */
export function derive(s = S) {
  const clarArea = Math.PI * (s.clarD_m / 2) ** 2;
  const clarVol = clarArea * s.clarCylH_m + (clarArea * s.clarConeH_m) / 3;
  const thickVol = Math.PI * (s.thickD_m / 2) ** 2 * s.thickH_m;
  const codUasbIn = s.codIn_mgL * (1 - s.codRemPhysChem);
  const codRemovedUasb_kgh = kgPerH(codUasbIn * s.codRemUasb);
  const ch4_m3h = codRemovedUasb_kgh * s.ch4Yield_m3kg;
  const biogas_m3h = ch4_m3h / s.ch4Fraction;
  const coag_kgh = kgPerH(s.coagDose_mgL);
  const coagSol_Lh = coag_kgh / s.coagSolution / s.coagDensity;
  const poly_kgh = kgPerH(s.polyDose_mgL);
  const polySol_Lh = poly_kgh / s.polyPrepConc;
  const air_m3h = s.airPerVolume_m3m3h * 20;
  const pumpHyd_kW = (1000 * 9.81 * (DESIGN.flow_Ls / 1000) * s.pumpHead_m) / 1000;
  const primary_kgd = s.primarySludge_kgm3 * Q_m3d;
  const uasbSludge_kgd = codRemovedUasb_kgh * DESIGN.hoursPerDay * s.uasbYield_kgSSkgCOD;
  const totalSS_kgd = primary_kgd + uasbSludge_kgd + s.clar2Sludge_kgd;
  const purge_m3d = totalSS_kgd / (s.purgeSolids * 1000);
  const thick_m3d = totalSS_kgd / (s.thickSolids * 1000);
  const cake_kgd = totalSS_kgd / s.cakeSolids;
  const cake_m3d = cake_kgd / (DESIGN.apparentDensity_tm3 * 1000);
  const codOut = codUasbIn * (1 - s.codRemUasb) * (1 - s.codRemMbbr);
  // Fase 5 · impacto (por día de operación de 8 h)
  const codFinal = codOut * (1 - s.codRemFilter);
  const codRemovalPct = 100 * (1 - codFinal / s.codIn_mgL);
  const codAvoided_kgd = (Q_m3d * (s.codIn_mgL - codFinal)) / 1000;
  const ch4_m3d = ch4_m3h * DESIGN.hoursPerDay;
  const energy_kWhd = ch4_m3d * s.ch4Lhv_kWhm3;
  const tssOut = s.tssIn_mgL * (1 - s.tssRemOverall);
  return {
    codFinal, codRemovalPct, codAvoided_kgd, ch4_m3d, energy_kWhd, tssOut,
    Q_m3h, Q_m3d, clarArea, clarVol, thickVol, codUasbIn, codRemovedUasb_kgh, ch4_m3h, biogas_m3h,
    coag_kgh, coagSol_Lh, poly_kgh, polySol_Lh, air_m3h, pumpHyd_kW, primary_kgd, uasbSludge_kgd,
    totalSS_kgd, purge_m3d, thick_m3d, cake_kgd, cake_m3d, codOut,
    clarSurfaceLoad_mh: Q_m3h / clarArea,
    // Fase 9 · pretratamiento (TK-102 y TK-103 de 1 m³, brief), lodos y biogás
    coagHrt_min: (1 / Q_m3h) * 60,
    coagPower_W: s.coagG_s ** 2 * s.waterMu_Pas * 1,
    flocHrt_min: (1 / Q_m3h) * 60,
    flocPower_W: s.flocG_s ** 2 * s.waterMu_Pas * 1,
    thickSlr_kgm2d: totalSS_kgd / (Math.PI * (s.thickD_m / 2) ** 2),
    bedLoad_kgm2y: (totalSS_kgd * 365) / s.bedArea_m2,
    flareUse_pct: (100 * biogas_m3h) / s.flareCapacity_m3h,
    // Fase 8 · clarificadores: carga sobre el vertedero perimetral (canaleta a R − 0,2 m) y ángulo del cono del modelo
    clarWeir_m3mh: Q_m3h / (Math.PI * (s.clarD_m - 0.4)),
    clarConeAngle_deg: (Math.atan(s.clarConeH_m / (s.clarD_m / 2 - 0.09)) * 180) / Math.PI,
    // Fase 7 · detalle técnico UASB (por reactor, reparto equitativo, Ø 2,0 m y 10 m³) y MBBR (20 m³)
    uasbVup_mh: Q_m3h / DESIGN.uasbCount / (Math.PI * 1.0 ** 2),
    uasbOlr_kgm3d: (Q_m3d / DESIGN.uasbCount) * codUasbIn / 1000 / 10,
    mbbrArea_m2: 20 * s.mbbrFill * s.carrierSsa_m2m3,
    mbbrSalr_gm2d: (Q_m3d * codUasbIn * (1 - s.codRemUasb)) / (20 * s.mbbrFill * s.carrierSsa_m2m3),
    filterHydLoad_md: Q_m3d / s.filterArea_m2,
    truckDays: s.truckCapacity_m3 / cake_m3d,
    coagDayTankDays: s.coagDayTank_L / (coagSol_Lh * DESIGN.hoursPerDay),
  };
}

const D = derive();
const f = (key: string, es: string, en: string, value: number, unit: string, digits: number, cls: FactClass, bes: string, ben: string): Fact =>
  ({ key, label: { es, en }, value, unit, digits, cls, basis: { es: bes, en: ben } });

/** Volumen supuesto (m³) para unidades sin volumen en el brief. null = no aplica (bomba, caseta…). */
export const ASSUMED_VOLUME: Partial<Record<UnitId, number>> = {
  clar1: D.clarVol, clar2: D.clarVol, thick: D.thickVol,
  filtro: S.filterArea_m2 * S.filterDepth_m,
  dosC: S.coagDayTank_L / 1000, dosF: S.polyTank_L / 1000,
};

/** Cifras por equipo para la tarjeta de detalle (además de volumen y TRH). */
export const UNIT_FACTS: Partial<Record<UnitId, Fact[]>> = {
  homog: [f('codIn', 'DQO afluente', 'Influent COD', S.codIn_mgL, 'mg/L', 0, 'S', 'lixiviado típico asumido', 'assumed typical leachate')],
  dosC: [
    f('coagDose', 'Dosis de FeCl₃', 'FeCl₃ dose', S.coagDose_mgL, 'mg/L', 0, 'S', 'ensayo de jarras no realizado', 'no jar test'),
    f('coagKg', 'Consumo', 'Consumption', D.coag_kgh, 'kg/h', 2, 'C', 'dosis × Q', 'dose × Q'),
    f('coagSol', 'Solución 40 %', '40 % solution', D.coagSol_Lh, 'L/h', 2, 'C', 'consumo / (0,40 × 1,42 kg/L)', 'consumption / (0.40 × 1.42 kg/L)'),
    f('coagDays', 'Autonomía tanque 200 L', '200 L tank autonomy', D.coagDayTankDays, 'd', 1, 'C', 'a 8 h/día', 'at 8 h/day'),
  ],
  coag: [
    f('G', 'Gradiente de velocidad G', 'Velocity gradient G', S.coagG_s, 's⁻¹', 0, 'S', 'mezcla rápida típica', 'typical rapid mix'),
    f('P', 'Potencia útil del agitador', 'Mixer useful power', D.coagPower_W, 'W', 0, 'C', 'P = G²·μ·V', 'P = G²·μ·V'),
  ],
  floc: [
    f('G', 'Gradiente de velocidad G', 'Velocity gradient G', S.flocG_s, 's⁻¹', 0, 'S', 'mezcla lenta típica', 'typical slow mix'),
    f('P', 'Potencia útil del agitador', 'Mixer useful power', D.flocPower_W, 'W', 1, 'C', 'P = G²·μ·V', 'P = G²·μ·V'),
  ],
  dosF: [
    f('polyDose', 'Dosis de polímero', 'Polymer dose', S.polyDose_mgL, 'mg/L', 1, 'S', 'aniónico, típico', 'anionic, typical'),
    f('polySol', 'Solución 0,1 %', '0.1 % solution', D.polySol_Lh, 'L/h', 1, 'C', 'dosis × Q / 0,1 %', 'dose × Q / 0.1 %'),
  ],
  clar1: [
    f('clarSL', 'Carga superficial', 'Surface loading', D.clarSurfaceLoad_mh, 'm/h', 2, 'C', 'Q / área Ø2,2 m', 'Q / Ø2.2 m area'),
    f('weir', 'Carga sobre vertedero', 'Weir loading', D.clarWeir_m3mh, 'm³/m·h', 2, 'C', 'Q / perímetro de la canaleta (Ø 1,8 m)', 'Q / launder perimeter (Ø 1.8 m)'),
    f('primSS', 'Lodo primario', 'Primary sludge', D.primary_kgd, 'kg SS/d', 1, 'C', '0,6 kg SS/m³ (S) × 28,8 m³/d', '0.6 kg SS/m³ (S) × 28.8 m³/d'),
  ],
  pump: [
    f('head', 'Altura supuesta', 'Assumed head', S.pumpHead_m, 'm', 0, 'S', 'sin curva de bomba', 'no pump curve'),
    f('hyd', 'Potencia hidráulica', 'Hydraulic power', D.pumpHyd_kW, 'kW', 3, 'C', 'ρ·g·Q·H', 'ρ·g·Q·H'),
    f('motor', 'Motor', 'Motor', S.pumpMotor_kW, 'kW', 2, 'S', 'tamaño comercial asumido', 'assumed commercial size'),
  ],
  pumpB: [f('motorB', 'Motor', 'Motor', S.pumpMotor_kW, 'kW', 2, 'S', 'igual a P-01', 'same as P-01')],
  uasb1: [], uasb2: [], uasb3: [], uasb4: [],
  flare: [
    f('biogas', 'Biogás (4 UASB)', 'Biogas (4 UASB)', D.biogas_m3h, 'm³/h', 1, 'C', '0,35 m³ CH₄/kg DQO rem. ÷ 65 % CH₄', '0.35 m³ CH₄/kg COD rem. ÷ 65 % CH₄'),
    f('ch4', 'Metano', 'Methane', D.ch4_m3h, 'm³/h', 1, 'C', 'DQO removida × rendimiento', 'COD removed × yield'),
    f('flareUse', 'Uso de la capacidad', 'Capacity used', D.flareUse_pct, '%', 0, 'C', 'biogás / capacidad', 'biogas / capacity'),
    f('flareCap', 'Capacidad de antorcha', 'Flare capacity', S.flareCapacity_m3h, 'm³/h', 0, 'S', 'margen sobre el caudal estimado', 'margin over estimated flow'),
  ],
  clar2: [f('c2SS', 'Lodo secundario', 'Secondary sludge', S.clar2Sludge_kgd, 'kg SS/d', 1, 'S', 'arrastre UASB asumido', 'assumed UASB carry-over')],
  mbbr: [
    f('air', 'Aire de proceso', 'Process air', D.air_m3h, 'Nm³/h', 0, 'C', '3 Nm³/(m³·h) (S) × 20 m³', '3 Nm³/(m³·h) (S) × 20 m³'),
    f('area', 'Superficie protegida', 'Protected surface', D.mbbrArea_m2, 'm²', 0, 'C', `20 m³ × llenado × ${S.carrierSsa_m2m3} m²/m³ (S)`, `20 m³ × fill × ${S.carrierSsa_m2m3} m²/m³ (S)`),
    f('salr', 'Carga superficial DQO', 'Surface COD load', D.mbbrSalr_gm2d, 'g/m²·d', 1, 'C', 'DQO de entrada × Q / superficie', 'inlet COD × Q / surface'),
    f('codOut', 'DQO estimada a la salida', 'Estimated outlet COD', D.codOut, 'mg/L', 0, 'C', 'remociones supuestas en cadena', 'chained assumed removals'),
  ],
  filtro: [
    f('fhl', 'Carga hidráulica', 'Hydraulic loading', D.filterHydLoad_md, 'm/d', 2, 'C', '28,8 m³/d / 45 m² (S)', '28.8 m³/d / 45 m² (S)'),
    f('fRem', 'Remoción DQO', 'COD removal', S.codRemFilter * 100, '%', 0, 'S', 'pulimento típico en lecho plantado', 'typical polishing in planted bed'),
    f('fOut', 'DQO a la salida', 'Outlet COD', D.codFinal, 'mg/L', 0, 'C', 'remociones supuestas en cadena', 'chained assumed removals'),
  ],
  thick: [
    f('ssTot', 'Sólidos a espesar', 'Solids to thicken', D.totalSS_kgd, 'kg SS/d', 1, 'C', 'primario + UASB + CL-201', 'primary + UASB + CL-201'),
    f('slr', 'Carga de sólidos', 'Solids loading', D.thickSlr_kgm2d, 'kg/m²·d', 1, 'C', `SS / área Ø ${S.thickD_m} m`, `SS / Ø ${S.thickD_m} m area`),
    f('purge', 'Purga al 2 %', 'Purge at 2 %', D.purge_m3d, 'm³/d', 2, 'C', 'SS / 20 kg/m³', 'SS / 20 kg/m³'),
    f('thk', 'Espesado al 5 %', 'Thickened at 5 %', D.thick_m3d, 'm³/d', 2, 'C', 'SS / 50 kg/m³', 'SS / 50 kg/m³'),
  ],
  sludge: [
    f('bedL', 'Carga del lecho', 'Bed loading', D.bedLoad_kgm2y, 'kg SS/m²·año', 0, 'C', `SS × 365 / ${S.bedArea_m2} m²`, `SS × 365 / ${S.bedArea_m2} m²`),
    f('cake', 'Torta al 25 %', 'Cake at 25 %', D.cake_kgd, 'kg/d', 0, 'C', 'SS / 0,25', 'SS / 0.25'),
    f('cakeV', 'Volumen de torta', 'Cake volume', D.cake_m3d, 'm³/d', 3, 'C', 'densidad aparente 0,75 t/m³ (brief)', 'apparent density 0.75 t/m³ (brief)'),
    f('truck', 'Retiro con camión de 6 m³', '6 m³ truck pick-up', D.truckDays, 'd', 0, 'C', 'cada cuántos días', 'every N days'),
  ],
};
/* Biogás por reactor (C), reparto equitativo */
for (const u of ['uasb1', 'uasb2', 'uasb3', 'uasb4'] as const) {
  UNIT_FACTS[u] = [
    f('rem', 'Remoción DQO', 'COD removal', S.codRemUasb * 100, '%', 0, 'S', 'UASB típico con lixiviado', 'typical UASB on leachate'),
    f('vup', 'Velocidad ascensional', 'Upflow velocity', D.uasbVup_mh, 'm/h', 2, 'C', 'Q ÷ 4 / área Ø 2,0 m', 'Q ÷ 4 / Ø 2.0 m area'),
    f('olr', 'Carga orgánica (COV)', 'Organic loading (OLR)', D.uasbOlr_kgm3d, 'kg DQO/m³·d', 1, 'C', 'por día de operación de 8 h', 'per 8 h operating day'),
  ];
}


/* ------------------------------------------------------------------ */
/* Fase 9 · Balance de masa por etapa (C) con las mismas remociones S. */
/* SST: la remoción global (S.tssRemOverall) se reparte 55 % fisicoquímico, 20 % CL-201 (arrastre UASB),
   10 % MBBR y 15 % filtro, igual que el panel de impacto. */
export interface BalanceRow { id: string; tag: string; es: string; en: string; codIn: number; codOut: number; tssIn: number; tssOut: number; codKgd: number }
export function massBalance(s = S): BalanceRow[] {
  const d = derive(s);
  const dT = s.tssIn_mgL - d.tssOut;
  const steps: [string, string, string, string, number, number][] = [
    ['homog', 'TK-101', 'Homogeneización', 'Equalization', 0, 0],
    ['coagfloc', 'TK-102/103', 'Coagulación y floculación', 'Coagulation & flocculation', 0, 0],
    ['clar1', 'CL-101', 'Clarificador 1 (fisicoquímico)', 'Clarifier 1 (phys-chem)', s.codRemPhysChem, 0.55],
    ['uasb', 'R-201…204', 'UASB ×4', 'UASB ×4', s.codRemUasb, 0],
    ['clar2', 'CL-201', 'Clarificador 2', 'Clarifier 2', 0, 0.2],
    ['mbbr', 'R-301', 'MBBR', 'MBBR', s.codRemMbbr, 0.1],
    ['filtro', 'FF-401', 'Filtro fitopedológico', 'Phyto-filter', s.codRemFilter, 0.15],
  ];
  let c = s.codIn_mgL, t = s.tssIn_mgL;
  return steps.map(([id, tag, es, en, rc, wt]) => {
    const codIn = c, tssIn = t;
    c = c * (1 - rc); t = t - dT * wt;
    return { id, tag, es, en, codIn, codOut: c, tssIn, tssOut: t, codKgd: (d.Q_m3d * (codIn - c)) / 1000 };
  });
}
