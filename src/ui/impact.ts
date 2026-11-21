/**
 * Fase 5 · Impacto positivo y comparación antes/después.
 * Todo es cálculo (C) a partir de los supuestos de assumptions.ts; los valores «crecen» al entrar en línea
 * cada etapa (UNIT_ON del guion), así que son función pura de t.
 */
import type { SimState } from '../sim/state';
import type { UnitId } from '../plant/types';
import { S, derive } from '../plant/assumptions';
import { UNIT_ON } from '../motion/timeline';
import { smoothstep } from '../sim/signals';
import { el, setStyle, setText } from './styles';
import type { Lang } from './i18n';

const D = derive();
type Bi = { es: string; en: string };

/** Fracción 0..1 de una etapa en línea (rampa de 1,6 s desde su activación en el guion). */
const on = (id: UnitId, t: number) => { const t0 = UNIT_ON[id]; return t0 == null || !Number.isFinite(t0) ? 0 : smoothstep(t, t0, t0 + 1.6); };

export interface ImpactNow {
  /** DQO a la salida de la última etapa en línea (mg/L) y remoción acumulada (%). */
  codNow: number; removalPct: number;
  avoided_kgd: number; energy_kWhd: number; water_m3d: number;
  tssNow: number;
  /** 0..1: avance del agua hacia «limpia» (para colores). */
  clean: number;
}

export function impactAt(t: number): ImpactNow {
  const kP = on('clar1', t), kU = on('uasb1', t), kM = on('mbbr', t), kF = on('filtro', t);
  let c = S.codIn_mgL;
  c *= 1 - S.codRemPhysChem * kP;
  c *= 1 - S.codRemUasb * kU;
  c *= 1 - S.codRemMbbr * kM;
  c *= 1 - S.codRemFilter * kF;
  const removalPct = 100 * (1 - c / S.codIn_mgL);
  const kD = on('discharge', t);
  const tssNow = S.tssIn_mgL - (S.tssIn_mgL - D.tssOut) * (0.55 * kP + 0.2 * kU + 0.1 * kM + 0.15 * kF);
  return {
    codNow: c, removalPct,
    avoided_kgd: (D.Q_m3d * (S.codIn_mgL - c)) / 1000,
    energy_kWhd: D.energy_kWhd * kU,
    water_m3d: D.Q_m3d * kD,
    tssNow,
    clean: removalPct / D.codRemovalPct,
  };
}

const fmt = (x: number, d: number, lang: Lang) => {
  const s = x.toLocaleString(lang === 'es' ? 'es-CO' : 'en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
  return lang === 'es' ? s.replace(/ /g, ' ') : s;
};

interface Tile { k: HTMLElement; v: HTMLElement; u: HTMLElement; bar: HTMLElement; spec: { label: Bi; unit: string; digits: number; max: number; get(n: ImpactNow): number } }

/** Panel «Impacto · por día de operación» (columna izquierda, 2 × 2). */
export class ImpactPanel {
  readonly root: HTMLElement;
  private cap: HTMLElement;
  private tiles: Tile[] = [];
  constructor(parent: HTMLElement) {
    this.root = el('div', 'panel impact', parent);
    const hd = el('div', 'ihd', this.root);
    this.cap = el('div', 'cap', hd);
    el('span', 'cls C', hd, 'C');
    const grid = el('div', 'igrid', this.root);
    const specs: Tile['spec'][] = [
      { label: { es: 'Agua devuelta', en: 'Water returned' }, unit: 'm³/d', digits: 1, max: D.Q_m3d, get: n => n.water_m3d },
      { label: { es: 'DQO removida', en: 'COD removed' }, unit: '%', digits: 0, max: D.codRemovalPct, get: n => n.removalPct },
      { label: { es: 'Carga evitada', en: 'Load avoided' }, unit: 'kg DQO/d', digits: 0, max: D.codAvoided_kgd, get: n => n.avoided_kgd },
      { label: { es: 'Energía del biogás', en: 'Biogas energy' }, unit: 'kWh/d', digits: 0, max: D.energy_kWhd, get: n => n.energy_kWhd },
    ];
    for (const spec of specs) {
      const c = el('div', 'it', grid);
      const k = el('div', 'k', c);
      const r = el('div', 'vr', c);
      const v = el('span', 'v', r);
      const u = el('span', 'u', r);
      const b = el('div', 'ib', c);
      const bar = el('i', '', b);
      this.tiles.push({ k, v, u, bar, spec });
    }
  }
  update(state: SimState, lang: Lang): void {
    const n = impactAt(state.t);
    setText(this.cap, lang === 'es' ? 'Impacto · por día de operación' : 'Impact · per operating day');
    for (const tl of this.tiles) {
      const x = tl.spec.get(n);
      setText(tl.k, tl.spec.label[lang]);
      setText(tl.v, x > 1e-6 ? fmt(x, tl.spec.digits, lang) : '—');
      setText(tl.u, tl.spec.unit);
      setStyle(tl.bar, 'width', `${Math.max(0, Math.min(100, (100 * x) / tl.spec.max)).toFixed(1)}%`);
    }
  }
}

/** Tarjeta «Antes · Después»: frascos de lixiviado crudo y efluente final (columna derecha, abajo). */
export class CompareCard {
  readonly root: HTMLElement;
  visible = false;
  private cap: HTMLElement; private delta: HTMLElement; private foot: HTMLElement;
  private fillA: HTMLElement; private fillB: HTMLElement;
  private a: { n: HTMLElement; c: HTMLElement; s: HTMLElement };
  private b: { n: HTMLElement; c: HTMLElement; s: HTMLElement };
  constructor(parent: HTMLElement, top: number) {
    this.root = el('div', 'panel compare', parent);
    this.root.style.top = `${top}px`;
    const hd = el('div', 'chd', this.root);
    this.cap = el('div', 'cap', hd);
    this.delta = el('div', 'delta', hd);
    const row = el('div', 'crow', this.root);
    const side = () => {
      const w = el('div', 'side', row);
      const vial = el('div', 'vial', w);
      const fill = el('i', '', vial);
      const tx = el('div', 'tx', w);
      return { fill, n: el('div', 'n', tx), c: el('div', 'm', tx), s: el('div', 'm', tx) };
    };
    const A = side();
    el('div', 'arrow', row, '→');
    const B = side();
    this.fillA = A.fill; this.fillB = B.fill;
    this.a = A; this.b = B;
    this.foot = el('div', 'note', this.root);
  }
  update(state: SimState, lang: Lang): void {
    const t = state.t;
    this.visible = t >= 37.5;
    setStyle(this.root, 'display', this.visible ? 'block' : 'none');
    if (!this.visible) return;
    const n = impactAt(t);
    setText(this.cap, lang === 'es' ? 'Antes · Después' : 'Before · After');
    setText(this.delta, `−${fmt(n.removalPct, 0, lang)} % DQO`);
    setText(this.a.n, lang === 'es' ? 'Lixiviado crudo' : 'Raw leachate');
    setText(this.a.c, `DQO ${fmt(S.codIn_mgL, 0, lang)} mg/L`);
    setText(this.a.s, `SST ${fmt(S.tssIn_mgL, 0, lang)} mg/L`);
    setText(this.b.n, lang === 'es' ? 'Efluente final' : 'Final effluent');
    setText(this.b.c, `DQO ${fmt(n.codNow, 0, lang)} mg/L`);
    setText(this.b.s, `SST ${fmt(n.tssNow, 0, lang)} mg/L`);
    setText(this.foot, lang === 'es' ? 'Entrada: S supuesto · salida: C cálculo' : 'Inlet: S assumed · outlet: C calculated');
    setStyle(this.fillA, 'background', 'linear-gradient(180deg,#a8692a,#6e3f15)');
    // De ámbar a agua clara verde azulada según el avance de la remoción.
    const k = Math.max(0, Math.min(1, n.clean));
    const mix = (a: number[], b: number[]) => a.map((x, i) => Math.round(x + (b[i] - x) * k));
    const top = mix([168, 105, 42], [150, 228, 220]), bot = mix([110, 63, 21], [60, 190, 178]);
    setStyle(this.fillB, 'background', `linear-gradient(180deg,rgb(${top}),rgb(${bot}))`);
  }
}
