/**
 * Selectores: transforman SimState en modelos de presentación (texto ya formateado).
 * Todo es supuesto del escenario: B = brief, S = supuesto (src/plant/assumptions.ts), C = cálculo.
 */
import type { StageId, UnitId } from '../plant/types';
import type { SimState, TruckPhase } from './state';
import { DERIVED, DESIGN, UNIT_BY_ID, hrtHours } from '../plant/layout';
import { ASSUMED_VOLUME, UNIT_FACTS, derive, type FactClass } from '../plant/assumptions';
import { STAGES } from '../plant/processFlow';
import { STAGE_WINDOWS, stageProgress } from '../motion/timeline';
import { fmtNum } from './signals';
import { STAGE_NAMES, tr, type I18nKey, type Lang } from '../ui/i18n';

type Bi = { es: string; en: string };

/** Rol de cada equipo en la cadena de proceso (clasificación, no dato de diseño). */
const ROLES: Record<UnitId, Bi> = {
  homog: { es: 'Pretratamiento · ecualización', en: 'Pretreatment · equalization' },
  coag: { es: 'Fisicoquímico · coagulación', en: 'Physicochemical · coagulation' },
  floc: { es: 'Fisicoquímico · floculación', en: 'Physicochemical · flocculation' },
  clar1: { es: 'Tratamiento primario · sedimentación', en: 'Primary treatment · settling' },
  sludge: { es: 'Línea de lodos · secado', en: 'Sludge line · drying' },
  inter: { es: 'Bombeo · pulmón de succión', en: 'Pumping · suction buffer' },
  pump: { es: 'Bombeo a tren UASB', en: 'Pumping to UASB train' },
  uasb1: { es: 'Secundario anaerobio · 1 de 4 en paralelo', en: 'Anaerobic secondary · 1 of 4 parallel' },
  uasb2: { es: 'Secundario anaerobio · 1 de 4 en paralelo', en: 'Anaerobic secondary · 1 of 4 parallel' },
  uasb3: { es: 'Secundario anaerobio · 1 de 4 en paralelo', en: 'Anaerobic secondary · 1 of 4 parallel' },
  uasb4: { es: 'Secundario anaerobio · 1 de 4 en paralelo', en: 'Anaerobic secondary · 1 of 4 parallel' },
  clar2: { es: 'Clarificación secundaria', en: 'Secondary clarification' },
  mbbr: { es: 'Pulimento aerobio · biopelícula · aire: soplante B-301', en: 'Aerobic polishing · biofilm · air: blower B-301' },
  filtro: { es: 'Afinamiento final · lecho plantado', en: 'Final polishing · planted bed' },
  discharge: { es: 'Salida de efluente tratado', en: 'Treated effluent outlet' },
  screen: { es: 'Pretratamiento · cribado', en: 'Pretreatment · screening' },
  dosC: { es: 'Fisicoquímico · dosificación', en: 'Physicochemical · dosing' },
  dosF: { es: 'Fisicoquímico · dosificación de polímero', en: 'Physicochemical · polymer dosing' },
  pumpB: { es: 'Bombeo · reserva', en: 'Pumping · standby' },
  flare: { es: 'Biogás · combustión controlada', en: 'Biogas · controlled combustion' },
  thick: { es: 'Línea de lodos · espesamiento', en: 'Sludge line · thickening' },
  control: { es: 'Servicios · control y químicos', en: 'Services · control and chemicals' },
};

/** Equipos sin caudal de proceso declarado (dosis, lodos, biogás, reserva, servicios): no se calcula TRH. */
const NO_FLOW: UnitId[] = ['sludge', 'thick', 'dosC', 'dosF', 'pumpB', 'flare', 'control'];

const isUasb = (id: UnitId) => id.startsWith('uasb');

/** Etapa del rastreador a la que pertenece una unidad (lodos → clarificador 1). */
export function stageOfUnit(id: UnitId): StageId | null {
  return STAGES.find(s => s.units.includes(id))?.id ?? null;
}

/** Caudal de referencia (L/s) que atraviesa la unidad: brief o reparto equitativo. */
export function unitFlowLs(id: UnitId): number | null {
  if (NO_FLOW.includes(id)) return null;
  return isUasb(id) ? DERIVED.perUasb_Ls : DESIGN.flow_Ls;
}

export function fmtHrt(h: number | null, lang: Lang): string {
  if (h == null) return tr('not_applicable', lang);
  if (h < 1) return `${fmtNum(h * 60, 0, lang)} min`;
  return `${fmtNum(h, 1, lang)} h`;
}

const DV = derive();

export interface FactRow { key: string; label: string; value: string; cls: FactClass; basis: string }

/** Valor con unidad y decimales según el idioma. */
export function fmtFact(value: number, digits: number, unit: string, lang: Lang): string {
  return `${fmtNum(value, digits, lang)}${unit ? ' ' + unit : ''}`;
}

/** Volumen mostrado: brief (B) o supuesto (S); null = no aplica (bomba, caseta, antorcha…). */
export function unitVolume(id: UnitId): { v: number; cls: FactClass } | null {
  const b = UNIT_BY_ID[id].volume;
  if (b != null) return { v: b, cls: 'B' };
  const a = ASSUMED_VOLUME[id];
  return a != null ? { v: a, cls: 'S' } : null;
}

export function buildFacts(id: UnitId, lang: Lang): FactRow[] {
  return (UNIT_FACTS[id] ?? []).map(f => ({ key: f.key, label: f.label[lang], value: fmtFact(f.value, f.digits, f.unit, lang), cls: f.cls, basis: f.basis[lang] }));
}

export interface DetailModel {
  id: UnitId;
  tag: string;
  name: string;
  fn: string;
  role: string;
  stage: string;
  flowText: string;
  volumeText: string;
  volumeCls: FactClass | null;
  hrtText: string;
  hrtCls: FactClass | null;
  hrtNote: string;
  facts: FactRow[];
  active: boolean;
  tags: { key: 'active' | 'standby' | 'selected' | 'stage'; text: string }[];
}

export function buildDetail(state: SimState, id: UnitId | null, lang: Lang): DetailModel | null {
  if (!id) return null;
  const s = UNIT_BY_ID[id];
  const us = state.units[id];
  const active = !!us?.active;
  const q = unitFlowLs(id);
  let flowText: string;
  if (id === 'pumpB') flowText = tr('flow_reserve', lang);
  else if (!active) flowText = tr('flow_off', lang);
  else if (id === 'sludge' || id === 'thick') flowText = `${tr('flow_sludge', lang)} · ${fmtNum(DV.totalSS_kgd, 1, lang)} kg SS/d (${tr('cls_C', lang)})`;
  else if (id === 'flare') flowText = `${tr('flow_flare', lang)} ≈ ${fmtNum(DV.biogas_m3h, 1, lang)} m³/h (${tr('cls_C', lang)})`;
  else if (id === 'dosC') flowText = `FeCl₃ ${fmtNum(UNIT_FACTS.dosC?.[0]?.value ?? 0, 0, lang)} mg/L (${tr('cls_S', lang)})`;
  else if (id === 'dosF') flowText = `${tr('flow_poly', lang)} ${fmtNum(UNIT_FACTS.dosF?.[0]?.value ?? 0, 1, lang)} mg/L (${tr('cls_S', lang)})`;
  else if (id === 'control') flowText = tr('flow_control', lang);
  else if (isUasb(id)) flowText = `${fmtNum(DERIVED.perUasb_Ls, 2, lang)} L/s · ${tr('flow_uasb', lang)}`;
  else if (id === 'pump') flowText = `${tr('flow_pump', lang)} · ${fmtNum(DESIGN.flow_Ls, 1, lang)} L/s`;
  else flowText = `${tr('flow_on', lang)} · ${fmtNum(DESIGN.flow_Ls, 1, lang)} L/s`;
  const vol = unitVolume(id);
  const hrt = q == null || !vol ? null : hrtHours(vol.v, q);
  const st = stageOfUnit(id);
  const stage = st ? STAGE_NAMES[st][lang] : '—';
  return {
    id, tag: s.tag, name: s.name[lang], fn: s.fn[lang], role: ROLES[id][lang], stage,
    flowText,
    volumeText: vol ? `${fmtNum(vol.v, vol.v < 10 && vol.cls === 'S' ? 2 : 0, lang)} m³` : tr('not_applicable', lang),
    volumeCls: vol ? vol.cls : null,
    hrtText: fmtHrt(hrt, lang),
    hrtCls: hrt == null ? null : 'C',
    hrtNote: hrt == null || !vol ? '' : `${fmtNum(vol.v, vol.v < 10 && vol.cls === 'S' ? 2 : 0, lang)} m³ / ${fmtNum((q ?? 0) * 3.6, 2, lang)} m³/h`,
    facts: buildFacts(id, lang),
    active,
    tags: [
      { key: active ? 'active' : 'standby', text: tr(active ? 'tag_active' : id === 'pumpB' ? 'tag_reserve' : 'tag_standby', lang) },
      { key: 'selected', text: tr('tag_selected', lang) },
      { key: 'stage', text: stage },
    ],
  };
}

export interface KpiModel {
  flow: string; flowSub: string;
  ops: string; opsSub: string;
  uasb: string; uasbOn: number; uasbSub: string;
  eff: string; effOn: boolean; effSub: string;
  sludge: string; sludgeOn: boolean; sludgeSub: string;
  health: string; healthSub: string;
  staff: string; staffSub: string; trucksOn: boolean;
  lights: string; lightsOn: boolean;
}

const TRUCK_KEY: Record<TruckPhase, I18nKey> = {
  away: 'tk_away', enroute: 'tk_enroute', bay: 'tk_bay', unloading: 'tk_unloading', loading: 'tk_loading', leaving: 'tk_leaving',
};

export function buildKpis(state: SimState, lang: Lang): KpiModel {
  const uasbOn = (['uasb1', 'uasb2', 'uasb3', 'uasb4'] as UnitId[]).filter(u => state.units[u].active).length;
  const effOn = state.units.discharge.active;
  const lg = state.logistics;
  const sludgeOn = (state.pipes['p-clar1-thick']?.front ?? 0) > 0;
  return {
    flow: `${fmtNum(DESIGN.flow_Ls, 1, lang)} L/s`,
    flowSub: `${fmtNum(DERIVED.flow_m3h, 1, lang)} m³/h · ${tr('kpi_flow_sub', lang)}`,
    ops: `${DESIGN.hoursPerDay} ${tr('kpi_ops_unit', lang)}`,
    opsSub: `${fmtNum(DERIVED.daily_m3, 1, lang)} m³/d`,
    uasb: `${uasbOn}/${DESIGN.uasbCount}`, uasbOn,
    uasbSub: tr('kpi_uasb_sub', lang),
    eff: tr(effOn ? 'on' : 'wait', lang), effOn, effSub: tr(effOn ? 'eff_sub_on' : 'eff_sub_off', lang),
    sludge: tr(sludgeOn ? 'on' : 'wait', lang), sludgeOn, sludgeSub: tr(sludgeOn ? 'sludge_sub_on' : 'sludge_sub_off', lang),
    health: tr('kpi_health_val', lang), healthSub: tr('kpi_health_sub', lang),
    staff: `${tr('staff_on_site', lang)}: ${lg?.personnel ?? 0}`,
    staffSub: lg ? `${tr('truck_chem', lang)}: ${tr(TRUCK_KEY[lg.trucks.chemical], lang)} · ${tr('truck_sludge', lang)}: ${tr(TRUCK_KEY[lg.trucks.sludge], lang)}` : '—',
    trucksOn: !!lg && (lg.trucks.chemical !== 'away' || lg.trucks.sludge !== 'away'),
    lights: `${tr('lights', lang)}: ${tr(state.lighting?.fixtures ? 'lights_on' : 'lights_off', lang)}`,
    lightsOn: !!state.lighting?.fixtures,
  };
}

export interface TrackerStep { id: StageId; name: string; done: boolean; active: boolean; progress: number }

export function buildTracker(state: SimState, lang: Lang): TrackerStep[] {
  return STAGE_WINDOWS.map((w, i) => ({
    id: w.id,
    name: STAGE_NAMES[w.id][lang],
    done: state.trackerDone[w.id],
    active: state.trackerIndex === i,
    progress: stageProgress(i, state.t),
  }));
}

/** Reparto UASB: fracción y caudal por reactor + avance de llenado de cada ramal. */
export function buildSplit(state: SimState, lang: Lang): { visible: boolean; rows: { id: UnitId; label: string; pct: string; q: string; fill: number }[] } {
  const ids: UnitId[] = ['uasb1', 'uasb2', 'uasb3', 'uasb4'];
  const visible = (state.pipes['p-feed-uasb1']?.front ?? 0) > 0;
  return {
    visible,
    rows: ids.map(id => ({
      id,
      label: UNIT_BY_ID[id].tag,
      pct: `${fmtNum(100 / DESIGN.uasbCount, 0, lang)} %`,
      q: `${fmtNum(DERIVED.perUasb_Ls, 2, lang)} L/s`,
      fill: state.pipes[`p-feed-${id}`]?.front ?? 0,
    })),
  };
}
