/**
 * Señales deterministas: funciones puras de t usadas por la línea de tiempo, la cámara y la UI.
 * Sin aleatoriedad ni estado: misma entrada → misma salida.
 */

export const clamp = (x: number, a = 0, b = 1): number => (x < a ? a : x > b ? b : x);
export const lerp = (a: number, b: number, k: number): number => a + (b - a) * k;

/** Rampa lineal 0→1 entre t0 y t1. */
export function ramp(t: number, t0: number, t1: number): number {
  if (t1 <= t0) return t >= t1 ? 1 : 0;
  return clamp((t - t0) / (t1 - t0));
}

/** Smoothstep cúbico (C1). */
export function smoothstep(t: number, t0: number, t1: number): number {
  const x = ramp(t, t0, t1);
  return x * x * (3 - 2 * x);
}

/** Smootherstep quíntico (C2), para cámara. */
export function smootherstep(t: number, t0: number, t1: number): number {
  const x = ramp(t, t0, t1);
  return x * x * x * (x * (x * 6 - 15) + 10);
}

/** Easing in/out sobre x∈[0,1]. */
export const easeInOut = (x: number): number => {
  const k = clamp(x);
  return k * k * (3 - 2 * k);
};

/** Pulso 0→1→0 con subida [t0,t1] y bajada [t1,t2]. */
export function pulse(t: number, t0: number, t1: number, t2: number): number {
  if (t <= t0 || t >= t2) return 0;
  return t < t1 ? smoothstep(t, t0, t1) : 1 - smoothstep(t, t1, t2);
}

export const lerp3 = (a: readonly number[], b: readonly number[], k: number): [number, number, number] =>
  [lerp(a[0], b[0], k), lerp(a[1], b[1], k), lerp(a[2], b[2], k)];

/** Formato de reloj narrativo mm:ss.s */
export function fmtClock(t: number): string {
  const tt = Math.max(0, t);
  const m = Math.floor(tt / 60);
  const s = tt - m * 60;
  const ss = s.toFixed(1).padStart(4, '0');
  return `${String(m).padStart(2, '0')}:${ss}`;
}

/** Número con coma decimal (es) o punto (en). */
export function fmtNum(x: number, digits: number, lang: 'es' | 'en'): string {
  const s = x.toFixed(digits);
  return lang === 'es' ? s.replace('.', ',') : s;
}
