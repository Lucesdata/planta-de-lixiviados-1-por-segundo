/**
 * Capa de textos del corte vertical (1080×1920): marca, paso de la historia, titular, cifras de impacto
 * y tarjeta final. Determinista: función de (τ, t).
 */
import { SOCIAL_ENDCARD, SOCIAL_SEGMENTS, socialToFilm } from '../render/social';
import { impactAt } from './impact';
import { derive } from '../plant/assumptions';
import { TITLE, type Lang } from './i18n';
import { el, setStyle, setText } from './styles';
import { smoothstep } from '../sim/signals';

const D = derive();
const fmt = (x: number, d: number, lang: Lang) => x.toLocaleString(lang === 'es' ? 'es-CO' : 'en-US', { minimumFractionDigits: d, maximumFractionDigits: d });

export const SOCIAL_CSS = `
.soc{position:absolute;left:0;top:0;width:1080px;height:1920px;transform-origin:0 0;pointer-events:none;font-family:var(--font);color:var(--txt)}
.soc .brand{position:absolute;left:48px;top:56px;right:48px;height:96px;display:flex;align-items:center;gap:20px;padding:0 30px;background:rgba(255,255,255,.95);border-radius:26px;box-shadow:var(--shadow)}
.soc .drop{width:34px;height:34px;border-radius:50% 0 50% 50%;transform:rotate(-45deg);background:linear-gradient(200deg,#5b84ff 0%,#2f5bea 45%,#15c3b0 100%);flex:none;margin:0 6px}
.soc .bt{font-size:33px;font-weight:800;letter-spacing:-.01em}
.soc .bs{font-size:18px;color:var(--muted);margin-top:2px}
.soc .shade{position:absolute;left:0;right:0;top:1180px;bottom:0;background:linear-gradient(180deg,rgba(226,232,248,0) 0%,rgba(226,232,248,.9) 22%,rgba(226,232,248,.97) 100%)}
.soc .step{position:absolute;left:48px;top:1330px;font-size:24px;font-weight:800;color:#fff;background:var(--cyan);border-radius:14px;padding:8px 18px;letter-spacing:.02em}
.soc .dots{position:absolute;right:56px;top:1344px;display:flex;gap:10px}
.soc .dots i{width:46px;height:8px;border-radius:4px;background:rgba(47,91,234,.2)}
.soc .dots i.on{background:var(--cyan)}
.soc .head{position:absolute;left:48px;right:48px;top:1400px;font-size:56px;line-height:1.12;font-weight:800;letter-spacing:-.02em;color:var(--txt);text-shadow:0 2px 0 rgba(255,255,255,.6)}
.soc .chips{position:absolute;left:48px;right:48px;top:1660px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.soc .chip2{background:rgba(255,255,255,.96);border-radius:22px;padding:18px 20px;box-shadow:var(--shadow)}
.soc .chip2 .k{font-size:18px;color:var(--muted);font-weight:600}
.soc .chip2 .v{font-size:40px;font-weight:800;color:var(--green);letter-spacing:-.02em;margin-top:2px}
.soc .chip2 .u{font-size:20px;color:var(--muted);font-weight:600;margin-left:6px}
.soc .note{position:absolute;left:48px;right:48px;top:1860px;font-size:16px;color:var(--muted);text-align:center}
.soc .end{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;background:rgba(236,240,252,.88)}
.soc .end .ed{width:110px;height:110px;border-radius:50% 0 50% 50%;transform:rotate(-45deg);background:linear-gradient(200deg,#5b84ff 0%,#2f5bea 45%,#15c3b0 100%)}
.soc .end .et{font-size:64px;font-weight:800;text-align:center;line-height:1.08;letter-spacing:-.02em;max-width:900px}
.soc .end .es{font-size:26px;color:var(--muted);text-align:center;max-width:860px}
.soc .end .eg{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;width:900px}
`;

export class SocialOverlay {
  readonly root: HTMLElement;
  private step: HTMLElement; private head: HTMLElement; private dots: HTMLElement[] = [];
  private chips: { k: HTMLElement; v: HTMLElement; u: HTMLElement }[] = [];
  private end: HTMLElement; private endChips: { k: HTMLElement; v: HTMLElement; u: HTMLElement }[] = [];
  private bs: HTMLElement; private note: HTMLElement; private et: HTMLElement; private es: HTMLElement;

  constructor(parent: HTMLElement) {
    const st = document.createElement('style');
    st.textContent = SOCIAL_CSS;
    document.head.appendChild(st);
    this.root = el('div', 'soc', parent);
    const brand = el('div', 'brand', this.root);
    el('div', 'drop', brand);
    const bx = el('div', '', brand);
    el('div', 'bt', bx, TITLE);
    this.bs = el('div', 'bs', bx);
    el('div', 'shade', this.root);
    this.step = el('div', 'step', this.root);
    const dots = el('div', 'dots', this.root);
    for (let i = 0; i < SOCIAL_SEGMENTS.length; i++) this.dots.push(el('i', '', dots));
    this.head = el('div', 'head', this.root);
    const chips = el('div', 'chips', this.root);
    const chip = (parent: HTMLElement) => { const c = el('div', 'chip2', parent); const k = el('div', 'k', c); const r = el('div', '', c); const v = el('span', 'v', r); const u = el('span', 'u', r); return { k, v, u }; };
    for (let i = 0; i < 3; i++) this.chips.push(chip(chips));
    this.note = el('div', 'note', this.root);
    this.end = el('div', 'end', this.root);
    el('div', 'ed', this.end);
    this.et = el('div', 'et', this.end);
    this.es = el('div', 'es', this.end);
    const eg = el('div', 'eg', this.end);
    for (let i = 0; i < 4; i++) this.endChips.push(chip(eg));
  }

  setScale(k: number): void { this.root.style.transform = `scale(${k})`; }

  update(tau: number, lang: Lang): void {
    const { t, seg } = socialToFilm(tau);
    const S = SOCIAL_SEGMENTS[seg];
    const n = impactAt(t);
    setText(this.bs, lang === 'es' ? 'Simulación didáctica · todos los valores son supuestos' : 'Educational simulation · all values are assumptions');
    setText(this.step, S.kicker[lang]);
    this.dots.forEach((d, i) => d.classList.toggle('on', i <= seg));
    setText(this.head, S.title[lang]);
    const vals: [string, number, number, string][] = [
      [lang === 'es' ? 'DQO removida' : 'COD removed', n.removalPct, 0, '%'],
      [lang === 'es' ? 'Energía biogás' : 'Biogas energy', n.energy_kWhd, 0, 'kWh/d'],
      [lang === 'es' ? 'Agua devuelta' : 'Water returned', n.water_m3d, 1, 'm³/d'],
    ];
    vals.forEach(([k, v, d, u], i) => {
      setText(this.chips[i].k, k);
      setText(this.chips[i].v, v > 1e-6 ? fmt(v, d, lang) : '—');
      setText(this.chips[i].u, u);
    });
    setText(this.note, lang === 'es' ? 'Cifras calculadas a partir de supuestos editables (1 L/s, 8 h/día) · no son mediciones' : 'Figures calculated from editable assumptions (1 L/s, 8 h/day) · not measurements');
    const ke = smoothstep(tau, SOCIAL_ENDCARD, SOCIAL_ENDCARD + 0.6);
    setStyle(this.end, 'opacity', ke.toFixed(3));
    setStyle(this.end, 'display', ke > 0.001 ? 'flex' : 'none');
    if (ke > 0.001) {
      setText(this.et, lang === 'es' ? 'Del lixiviado al agua recuperada' : 'From leachate to recovered water');
      setText(this.es, TITLE);
      const ev: [string, number, number, string][] = [
        [lang === 'es' ? 'Agua devuelta' : 'Water returned', D.Q_m3d, 1, 'm³/d'],
        [lang === 'es' ? 'DQO removida' : 'COD removed', D.codRemovalPct, 0, '%'],
        [lang === 'es' ? 'Carga evitada' : 'Load avoided', D.codAvoided_kgd, 0, 'kg/d'],
        [lang === 'es' ? 'Energía biogás' : 'Biogas energy', D.energy_kWhd, 0, 'kWh/d'],
      ];
      ev.forEach(([k, v, d, u], i) => { setText(this.endChips[i].k, k); setText(this.endChips[i].v, fmt(v, d, lang)); setText(this.endChips[i].u, u); });
    }
  }
}
