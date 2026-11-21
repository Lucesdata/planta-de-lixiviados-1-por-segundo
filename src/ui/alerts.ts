/** Registro de eventos del sistema: últimos 4, con sello de tiempo narrativo. */
import type { SimState } from '../sim/state';
import { fmtClock } from '../sim/signals';
import { tr, type Lang } from './i18n';
import { el, setClass, setText } from './styles';

export class AlertLog {
  readonly root: HTMLElement;
  private cap: HTMLElement;
  private count: HTMLElement;
  private rows: { r: HTMLElement; tm: HTMLElement; tx: HTMLElement }[] = [];
  constructor(parent: HTMLElement) {
    this.root = el('div', 'panel events', parent);
    const hd = el('div', 'hd', this.root);
    this.cap = el('div', 'cap', hd);
    this.count = el('div', 'cap mono', hd);
    const list = el('div', 'evlist', this.root);
    for (let i = 0; i < 4; i++) {
      const r = el('div', 'ev', list);
      const tm = el('span', 'tm', r);
      el('span', 'lv', r);
      const tx = el('span', 'tx', r);
      this.rows.push({ r, tm, tx });
    }
  }
  update(state: SimState, lang: Lang): void {
    setText(this.cap, tr('events', lang));
    setText(this.count, String(state.alerts.length).padStart(2, '0'));
    const last = state.alerts.slice(-4).reverse();
    this.rows.forEach((row, i) => {
      const a = last[i];
      row.r.style.visibility = a ? 'visible' : 'hidden';
      if (!a) return;
      setText(row.tm, fmtClock(a.t));
      setText(row.tx, a.text[lang]);
      row.r.className = `ev ${a.level}`;
      setClass(row.r, 'fresh', i === 0 && state.t - a.t < 2.5);
    });
  }
}
