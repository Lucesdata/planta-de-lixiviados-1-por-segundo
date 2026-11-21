/** Rastreador de proceso (barra inferior): 9 pasos en el orden del brief. */
import type { SimState } from '../sim/state';
import { buildTracker } from '../sim/selectors';
import { GRID, el, setClass, setStyle, setText } from './styles';
import { tr, type Lang } from './i18n';

export class ProcessTracker {
  readonly root: HTMLElement;
  private cap: HTMLElement;
  private idx: HTMLElement;
  private steps: { r: HTMLElement; nd: HTMLElement; lb: HTMLElement }[] = [];
  private cons: HTMLElement[] = [];
  constructor(parent: HTMLElement) {
    this.root = el('div', 'panel tracker', parent);
    const hd = el('div', 'hd', this.root);
    this.cap = el('div', 'cap', hd);
    this.idx = el('div', 'cap mono', hd);
    const wrap = el('div', 'steps', this.root);
    const n = 9;
    const inner = GRID.tracker.x1 - GRID.tracker.x0 - 44;
    const x0 = 80, x1 = inner - 80;
    const xs = Array.from({ length: n }, (_, i) => x0 + ((x1 - x0) * i) / (n - 1));
    for (let i = 0; i < n - 1; i++) {
      const c = el('div', 'cn', wrap);
      c.style.left = `${xs[i] + 17}px`;
      c.style.width = `${xs[i + 1] - xs[i] - 34}px`;
      el('i', '', c);
      this.cons.push(c);
    }
    for (let i = 0; i < n; i++) {
      const r = el('div', 'stp', wrap);
      r.style.left = `${xs[i]}px`;
      r.dataset.step = String(i);
      const nd = el('div', 'nd', r, String(i + 1));
      const lb = el('div', 'lb', r);
      this.steps.push({ r, nd, lb });
    }
  }
  update(state: SimState, lang: Lang): void {
    const m = buildTracker(state, lang);
    setText(this.cap, tr('tracker', lang));
    const done = m.filter(s => s.done).length;
    const cur = state.trackerIndex >= 0 ? state.trackerIndex + 1 : done;
    setText(this.idx, `${String(cur).padStart(2, '0')} / 09`);
    m.forEach((s, i) => {
      const st = this.steps[i];
      setClass(st.r, 'done', s.done);
      setClass(st.r, 'active', s.active);
      setText(st.lb, s.name);
      setText(st.nd, String(i + 1));
      if (i < m.length - 1) {
        // El conector i se llena con el avance del paso i (completo al terminarlo).
        const f = s.done ? 1 : s.active ? s.progress : 0;
        setStyle(this.cons[i].firstChild as HTMLElement, 'width', `${(f * 100).toFixed(1)}%`);
      }
    });
  }
}
