/**
 * Calidad de render adaptable (móvil y equipos de baja gama). Solo afecta a la nitidez y a las sombras:
 * geometría, cámara, simulación y cifras no cambian. ?q=low|high fuerza un nivel.
 */
import type * as THREE from 'three';

export type Quality = 'high' | 'low';

export function detectQuality(q: URLSearchParams, film: boolean): Quality {
  if (film) return 'high';
  const forced = q.get('q');
  if (forced === 'low' || forced === 'high') return forced;
  const nav = navigator as Navigator & { deviceMemory?: number };
  const cores = nav.hardwareConcurrency ?? 8;
  const mem = nav.deviceMemory ?? 8;
  const coarse = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;
  const small = Math.min(screen.width, screen.height) < 820;
  return coarse || small || cores <= 4 || mem <= 4 ? 'low' : 'high';
}

/** Tope de resolución interna (× píxeles CSS). */
export function pixelRatioCap(quality: Quality): number {
  const dpr = window.devicePixelRatio || 1;
  return quality === 'low' ? Math.min(dpr, 1.25) : Math.min(dpr, 2);
}

/**
 * Resolución dinámica: mide el tiempo de cuadro y baja o sube la resolución interna para sostener ~30 fps
 * (con histéresis; revisa cada ~1 s). No se usa en modo película.
 */
export class DynamicResolution {
  private ema = 16;
  private acc = 0;
  private pr: number;
  constructor(private renderer: THREE.WebGLRenderer, private cap: number, private floor = 0.6, private onChange?: () => void) {
    this.pr = cap;
  }
  setCap(cap: number): void { this.cap = cap; if (this.pr > cap) this.apply(cap); }
  get ratio(): number { return this.pr; }
  frame(dtMs: number): void {
    if (dtMs <= 0 || dtMs > 500) return;
    this.ema += (dtMs - this.ema) * 0.08;
    this.acc += dtMs;
    if (this.acc < 1000) return;
    this.acc = 0;
    if (this.ema > 38 && this.pr > this.floor) this.apply(Math.max(this.floor, this.pr - 0.15));
    else if (this.ema < 22 && this.pr < this.cap) this.apply(Math.min(this.cap, this.pr + 0.1));
  }
  private apply(pr: number): void {
    this.pr = Math.round(pr * 100) / 100;
    this.renderer.setPixelRatio(this.pr);
    this.onChange?.();
  }
}
