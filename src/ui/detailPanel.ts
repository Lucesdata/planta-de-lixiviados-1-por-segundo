/**
 * Tarjeta de detalle (columna derecha). La miniatura es una ventana transparente:
 * main.ts dibuja ahí una segunda pasada WebGL (scissor) apuntada a la unidad seleccionada.
 */
import type { UnitId } from '../plant/types';
import type { SimState } from '../sim/state';
import { buildDetail, buildSplit } from '../sim/selectors';
import { tr, type Lang } from './i18n';
import { el, setClass, setStyle, setText } from './styles';

export class DetailPanel {
  readonly root: HTMLElement;
  private cap: HTMLElement;
  private stageCap: HTMLElement;
  private ph: HTMLElement;
  private body: HTMLElement;
  private nm: HTMLElement;
  private tagid: HTMLElement;
  private chips: HTMLElement;
  private fn: HTMLElement; private flow: HTMLElement; private role: HTMLElement;
  private kFn: HTMLElement; private kFlow: HTMLElement; private kRole: HTMLElement;
  private kVol: HTMLElement; private vol: HTMLElement; private kHrt: HTMLElement; private hrt: HTMLElement;
  private volB: HTMLElement; private hrtB: HTMLElement;
  private note: HTMLElement;
  private factsWrap: HTMLElement; private factsCap: HTMLElement; private factsGrid: HTMLElement;
  private factsKey = '';
  private foot: HTMLElement;
  private empty: HTMLElement;
  private filled: HTMLElement;
  private lastKey = '';
  /** Unidad mostrada (para el gancho de validación). */
  shown: UnitId | null = null;

  constructor(parent: HTMLElement) {
    this.root = el('div', 'detail', parent);
    this.root.dataset.role = 'detail';
    const hdr = el('div', 'panel hdr', this.root);
    hdr.style.position = 'absolute'; hdr.style.left = '0'; hdr.style.top = '0'; hdr.style.width = '320px';
    const row = el('div', 'row', hdr);
    this.cap = el('div', 'cap', row);
    this.stageCap = el('div', 'cap mono', row);
    el('div', 'frameL', this.root);
    el('div', 'frameR', this.root);
    const thumb = el('div', 'thumb', this.root);
    this.ph = el('div', 'ph', thumb);
    this.body = el('div', 'panel body', this.root);
    this.empty = el('div', 'empty', this.body);
    this.filled = el('div', '', this.body);
    this.nm = el('div', 'nm', this.filled);
    this.nm.dataset.role = 'detail-name';
    const tl = el('div', 'tagline', this.filled);
    this.tagid = el('span', 'tagid', tl);
    this.tagid.dataset.role = 'detail-tag';
    this.chips = el('div', 'chips', this.filled);
    const kv = el('div', 'kv', this.filled);
    this.kFn = el('div', 'k', kv); this.fn = el('div', 'v', kv);
    this.kFlow = el('div', 'k', kv); this.flow = el('div', 'v big', kv);
    this.kRole = el('div', 'k', kv); this.role = el('div', 'v', kv);
    const kv2 = el('div', 'kv2', this.filled);
    const a = el('div', '', kv2), b = el('div', '', kv2);
    this.kVol = el('div', 'cap', a); const va = el('div', 'vrow', a); this.vol = el('span', 'v', va); this.volB = el('span', 'cls', va);
    this.kHrt = el('div', 'cap', b); const vb = el('div', 'vrow', b); this.hrt = el('span', 'v', vb); this.hrtB = el('span', 'cls', vb);
    this.note = el('div', 'note', this.filled);
    this.factsWrap = el('div', 'facts', this.filled);
    this.factsCap = el('div', 'k', this.factsWrap);
    this.factsGrid = el('div', 'fgrid', this.factsWrap);
    this.foot = el('div', 'foot', this.body);
  }

  update(state: SimState, selected: UnitId | null, lang: Lang): void {
    const d = buildDetail(state, selected, lang);
    this.shown = d ? d.id : null;
    setText(this.cap, tr('detail', lang));
    setText(this.stageCap, d ? d.tag : '—');
    setStyle(this.ph, 'display', d ? 'none' : 'flex');
    setText(this.ph, tr('none_selected', lang));
    setStyle(this.empty, 'display', d ? 'none' : 'block');
    setStyle(this.filled, 'display', d ? 'block' : 'none');
    setText(this.empty, tr('hint_click', lang));
    setText(this.foot, tr('cls_legend', lang));
    if (!d) return;
    this.root.dataset.unit = d.id;
    setText(this.nm, d.name);
    setText(this.tagid, d.tag);
    const key = `${d.id}|${lang}|${d.active}`;
    if (key !== this.lastKey) {
      this.lastKey = key;
      this.chips.textContent = '';
      for (const c of d.tags) el('span', `chip ${c.key}`, this.chips, c.text);
    }
    setText(this.kFn, tr('d_function', lang)); setText(this.fn, d.fn);
    setText(this.kFlow, tr('d_flow', lang)); setText(this.flow, d.flowText);
    setText(this.kRole, tr('d_role', lang)); setText(this.role, d.role);
    setText(this.kVol, tr('d_volume', lang)); setText(this.vol, d.volumeText);
    setText(this.kHrt, tr('d_hrt', lang)); setText(this.hrt, d.hrtText);
    setClass(this.vol, 'nd', d.volumeCls == null);
    setClass(this.hrt, 'nd', d.hrtCls == null);
    badge(this.volB, d.volumeCls, lang);
    badge(this.hrtB, d.hrtCls, lang);
    setText(this.note, '');
    setStyle(this.note, 'display', 'none');
    this.hrt.title = d.hrtNote;
    // Tabla de supuestos/cálculos (se reconstruye solo si cambia la unidad o el idioma).
    const fk = `${d.id}|${lang}`;
    if (fk !== this.factsKey) {
      this.factsKey = fk;
      this.factsGrid.textContent = '';
      setClass(this.factsGrid, 'two', d.facts.length >= 3);
      for (const f of d.facts) {
        const r = el('div', 'fr', this.factsGrid);
        r.dataset.fact = f.key;
        r.title = `${f.cls} · ${tr(`cls_${f.cls}` as const, lang)}: ${f.basis}`;
        el('div', 'fl', r, f.label);
        const vr = el('div', 'fv', r);
        el('span', '', vr, f.value);
        const bb = el('span', `cls ${f.cls}`, vr, f.cls);
        bb.title = f.basis;
      }
    }
    setStyle(this.factsWrap, 'display', d.facts.length ? 'block' : 'none');
    setText(this.factsCap, tr('d_facts', lang));
  }
}

function badge(e: HTMLElement, cls: 'B' | 'S' | 'C' | null, lang: Lang): void {
  setStyle(e, 'display', cls ? '' : 'none');
  if (!cls) return;
  setText(e, cls);
  e.className = `cls ${cls}`;
  e.title = tr(`cls_${cls}` as const, lang);
}

/** Tarjeta de reparto UASB (4 barras del 25 %). */
export class SplitCard {
  readonly root: HTMLElement;
  private cap: HTMLElement;
  private noteEl: HTMLElement;
  private rows: { l: HTMLElement; bar: HTMLElement; p: HTMLElement; q: HTMLElement }[] = [];
  constructor(parent: HTMLElement, top: number) {
    this.root = el('div', 'panel split', parent);
    this.root.style.top = `${top}px`;
    this.cap = el('div', 'cap', this.root);
    const rows = el('div', 'rows', this.root);
    for (let i = 0; i < 4; i++) {
      const r = el('div', 'r', rows);
      const l = el('span', 'l', r);
      const b = el('div', 'bar', r);
      const bar = el('i', '', b);
      const p = el('span', 'p', r);
      const q = el('span', 'q', r);
      this.rows.push({ l, bar, p, q });
    }
    this.noteEl = el('div', 'note', this.root);
  }
  update(state: SimState, lang: Lang): void {
    const m = buildSplit(state, lang);
    setStyle(this.root, 'display', m.visible ? 'block' : 'none');
    if (!m.visible) return;
    setText(this.cap, tr('split', lang));
    setText(this.noteEl, `Σ 1,00 L/s · ${tr('split_note', lang)}`.replace('1,00', lang === 'es' ? '1,00' : '1.00'));
    m.rows.forEach((r, i) => {
      const row = this.rows[i];
      setText(row.l, r.label);
      setStyle(row.bar, 'width', `${(r.fill * 25).toFixed(2)}%`); // escala 0–100 % del caudal total
      setText(row.p, r.pct);
      setText(row.q, r.q);
    });
  }
}
