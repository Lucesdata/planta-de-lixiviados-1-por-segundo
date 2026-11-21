/**
 * Tarjeta de detalle (columna derecha). La miniatura es una ventana transparente:
 * main.ts dibuja ahí una segunda pasada WebGL (scissor) apuntada a la unidad seleccionada.
 */
import type { UnitId } from '../plant/types';
import type { SimState } from '../sim/state';
import { buildDetail, buildSplit } from '../sim/selectors';
import { tr, type Lang } from './i18n';
import { el, setClass, setStyle, setText } from './styles';
import { icon } from './shell';
import { UNIT_BY_ID } from '../plant/layout';
import { fmtClock } from '../sim/signals';

export type InspTab = 'general' | 'design' | 'operation';

/** Inspector de equipos (SPEC v3 §7): encabezado, vista existente, pestañas General · Diseño · Operación. */
export class DetailPanel {
  readonly root: HTMLElement;
  private ph: HTMLElement;
  private nm: HTMLElement; private tagid: HTMLElement; private chips: HTMLElement;
  private fn: HTMLElement; private flow: HTMLElement; private role: HTMLElement;
  private kFn: HTMLElement; private kFlow: HTMLElement; private kRole: HTMLElement;
  private kVol: HTMLElement; private vol: HTMLElement; private kHrt: HTMLElement; private hrt: HTMLElement;
  private volB: HTMLElement; private hrtB: HTMLElement;
  private factsCap: HTMLElement; private factsGrid: HTMLElement; private dims: HTMLElement;
  private opGrid: HTMLElement; private opEv: HTMLElement;
  private factsKey = '';
  private foot: HTMLElement; private empty: HTMLElement; private filled: HTMLElement;
  private tabsEl: HTMLElement; private tabs: { k: InspTab; b: HTMLButtonElement }[] = [];
  private secs: Record<InspTab, HTMLElement>;
  private lastKey = '';
  tab: InspTab = 'general';
  /** Unidad mostrada (para el gancho de validación). */
  shown: UnitId | null = null;

  constructor(parent: HTMLElement, private film = false, onClose: () => void = () => {}) {
    this.root = el('aside', 'detail insp3', parent);
    this.root.dataset.role = 'detail';
    const hdr = el('div', 'hdr', this.root);
    const ht = el('div', 'ht', hdr);
    this.nm = el('div', 'nm', ht);
    this.nm.dataset.role = 'detail-name';
    const tl = el('div', 'tagline', ht);
    this.tagid = el('span', 'tagid mono', tl);
    this.tagid.dataset.role = 'detail-tag';
    this.chips = el('div', 'chips', tl);
    if (!film) {
      const x = el('button', 'ib sm pe', hdr) as HTMLButtonElement;
      x.type = 'button'; x.innerHTML = icon('close'); x.setAttribute('aria-label', 'Cerrar inspector'); x.dataset.tip = 'Cerrar';
      x.onclick = onClose;
    }
    const thumb = el('div', 'thumb', this.root);
    this.ph = el('div', 'ph', thumb);
    this.tabsEl = el('div', 'itabs pe', this.root);
    this.tabsEl.setAttribute('role', 'tablist');
    for (const k of ['general', 'design', 'operation'] as InspTab[]) {
      const b = el('button', 'itab', this.tabsEl) as HTMLButtonElement;
      b.type = 'button'; b.setAttribute('role', 'tab');
      b.onclick = () => { this.tab = k; };
      this.tabs.push({ k, b });
    }
    this.body = el('div', 'body', this.root);
    this.empty = el('div', 'empty', this.body);
    this.filled = el('div', '', this.body);
    const g = el('section', 'isec', this.filled);
    const kv = el('div', 'kv', g);
    this.kFn = el('div', 'k', kv); this.fn = el('div', 'v', kv);
    this.kFlow = el('div', 'k', kv); this.flow = el('div', 'v big', kv);
    this.kRole = el('div', 'k', kv); this.role = el('div', 'v', kv);
    const kv2 = el('div', 'kv2', g);
    const a = el('div', '', kv2), b2 = el('div', '', kv2);
    this.kVol = el('div', 'cap', a); const va = el('div', 'vrow', a); this.vol = el('span', 'v', va); this.volB = el('span', 'cls', va);
    this.kHrt = el('div', 'cap', b2); const vb = el('div', 'vrow', b2); this.hrt = el('span', 'v', vb); this.hrtB = el('span', 'cls', vb);
    const d = el('section', 'isec facts', this.filled);
    this.factsCap = el('div', 'k', d);
    this.factsGrid = el('div', 'fgrid', d);
    this.dims = el('div', 'dims', d);
    const o = el('section', 'isec', this.filled);
    this.opGrid = el('div', 'opg', o);
    this.opEv = el('div', 'opev', o);
    this.secs = { general: g, design: d, operation: o };
    this.foot = el('div', 'foot', this.root);
  }
  private body: HTMLElement;

  update(state: SimState, selected: UnitId | null, lang: Lang): void {
    const d = buildDetail(state, selected, lang);
    this.shown = d ? d.id : null;
    const es = lang === 'es';
    setStyle(this.ph, 'display', d ? 'none' : 'flex');
    setText(this.ph, tr('none_selected', lang));
    setStyle(this.empty, 'display', d ? 'none' : 'block');
    setStyle(this.filled, 'display', d ? 'block' : 'none');
    setText(this.empty, tr('hint_click', lang));
    setText(this.foot, tr('cls_legend', lang));
    const names: Record<InspTab, string> = { general: 'General', design: es ? 'Diseño' : 'Design', operation: es ? 'Operación' : 'Operation' };
    for (const t of this.tabs) { setText(t.b, names[t.k]); setClass(t.b, 'on', this.tab === t.k); t.b.setAttribute('aria-selected', String(this.tab === t.k)); }
    // Película: sin pestañas, General + Diseño apilados (determinista, como antes).
    setStyle(this.tabsEl, 'display', this.film || !d ? 'none' : 'flex');
    for (const k of Object.keys(this.secs) as InspTab[]) setStyle(this.secs[k], 'display', this.film ? (k === 'operation' ? 'none' : 'block') : (this.tab === k ? 'block' : 'none'));
    if (!d) { setText(this.nm, tr('detail', lang)); setText(this.tagid, '—'); this.chips.textContent = ''; this.lastKey = ''; return; }
    this.root.dataset.unit = d.id;
    setText(this.nm, d.name);
    setText(this.tagid, d.tag);
    const key = `${d.id}|${lang}|${d.active}`;
    if (key !== this.lastKey) {
      this.lastKey = key;
      this.chips.textContent = '';
      for (const c of d.tags.filter(c => c.key === 'active' || c.key === 'standby')) el('span', `chip ${c.key}`, this.chips, c.text);
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
    this.hrt.title = d.hrtNote;
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
      if (!d.facts.length) el('div', 'nodata', this.factsGrid, es ? 'Sin parámetros adicionales declarados.' : 'No additional parameters declared.');
      // Dimensiones del modelo 3D (layout.ts): hipótesis geométrica, clase S.
      const sz = UNIT_BY_ID[d.id].size;
      const parts = sz.d != null ? [`Ø ${sz.d} m`, `h ${sz.h} m`] : [`${sz.w} × ${sz.l} m`, `h ${sz.h} m`];
      this.dims.innerHTML = '';
      el('span', 'k', this.dims, es ? 'Dimensiones del modelo' : 'Model dimensions');
      el('span', 'v mono', this.dims, parts.join(' · '));
      el('span', 'cls S', this.dims, 'S');
    }
    setText(this.factsCap, tr('d_facts', lang));
    // Operación: variables simuladas de la unidad y eventos que la mencionan por su código.
    const us = state.units[d.id];
    const pct = (x: number | undefined) => `${Math.round(100 * (x ?? 0))} %`;
    const okey = `${d.id}|${lang}|${us?.status}|${pct(us?.flow)}|${pct(us?.motion)}|${state.alerts.length}`;
    if (this.opGrid.dataset.k !== okey) {
      this.opGrid.dataset.k = okey;
      this.opGrid.textContent = '';
      const row = (k: string, v: string) => { const r = el('div', 'or', this.opGrid); el('span', 'k', r, k); el('span', 'v', r, v); };
      row(es ? 'Estado' : 'Status', d.active ? (es ? 'En funcionamiento' : 'Running') : (es ? 'En espera' : 'Standby'));
      row(es ? 'Nivel de flujo (simulado)' : 'Flow level (simulated)', pct(us?.flow));
      row(es ? 'Actividad interna (simulada)' : 'Internal activity (simulated)', pct(us?.motion));
      this.opEv.textContent = '';
      el('div', 'k', this.opEv, es ? 'Eventos asociados' : 'Related events');
      const evs = state.alerts.filter(a => a.text.es.includes(d.tag)).slice(-4).reverse();
      if (!evs.length) el('div', 'nodata', this.opEv, es ? 'Sin eventos de esta unidad hasta ahora.' : 'No events for this unit so far.');
      for (const a of evs) { const r = el('div', 'oe', this.opEv); el('span', 'mono', r, fmtClock(a.t)); el('span', '', r, a.text[lang]); }
    }
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
