/** Columna izquierda de tarjetas KPI (valores del brief y cálculos directos). */
import type { SimState } from '../sim/state';
import { buildKpis } from '../sim/selectors';
import { tr, type Lang, type I18nKey } from './i18n';
import { el, setClass, setText } from './styles';

interface Card { root: HTMLElement; cap: HTMLElement; v: HTMLElement; badge: HTMLElement; s: HTMLElement; key: I18nKey }

export class KpiPanel {
  readonly root: HTMLElement;
  private cards: Card[] = [];
  constructor(parent: HTMLElement) {
    this.root = el('div', 'kpis', parent);
    const keys: I18nKey[] = ['kpi_flow', 'kpi_ops', 'kpi_uasb', 'kpi_eff', 'kpi_sludge', 'kpi_staff', 'kpi_health'];
    for (const key of keys) {
      const root = el('div', 'panel kpi', this.root);
      root.style.position = 'relative';
      const cap = el('div', 'cap', root);
      const row = el('div', 'row', root);
      const v = el('div', 'v', row);
      const badge = el('div', 'badge', row);
      const s = el('div', 's', root);
      root.dataset.kpi = key;
      this.cards.push({ root, cap, v, badge, s, key });
    }
  }
  update(state: SimState, lang: Lang): void {
    const m = buildKpis(state, lang);
    const vals: [string, string, string, boolean, boolean][] = [
      // valor, sub, badge, encendido, valor apagado
      [m.flow, m.flowSub, 'B · brief', state.plantState === 'Active', false],
      [m.ops, m.opsSub, lang === 'es' ? 'C · cálculo' : 'C · calc.', true, false],
      [m.uasb, m.uasbSub, m.uasbOn === 4 ? tr('on', lang) : tr('wait', lang), m.uasbOn > 0, m.uasbOn === 0],
      [m.eff, m.effSub, '', m.effOn, !m.effOn],
      [m.sludge, m.sludgeSub, '', m.sludgeOn, !m.sludgeOn],
      [m.staff, m.staffSub, m.lights, m.trucksOn, false],
      [m.health, m.healthSub, '', true, false],
    ];
    this.cards.forEach((c, i) => {
      const [v, s, b, on, off] = vals[i];
      setText(c.cap, tr(c.key, lang));
      setText(c.v, v);
      setText(c.s, s);
      setText(c.badge, b);
      c.badge.style.display = b ? '' : 'none';
      setClass(c.badge, 'on', (on && i === 2) || (c.key === 'kpi_staff' && m.lightsOn));
      if (c.key === 'kpi_staff') c.badge.dataset.role = 'lights';
      setClass(c.root, 'on', on && i !== 1);
      setClass(c.root, 'warm', i === 1);
      setClass(c.v, 'off', off);
    });
  }
}
