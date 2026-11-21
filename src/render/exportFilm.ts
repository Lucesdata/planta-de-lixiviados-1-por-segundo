/**
 * Utilidades de exportación (compartidas por tools/render-film.mjs): nombres de cuadro y
 * lista de instantes a renderizar. Funciones puras.
 */
export interface FilmRange { fps: number; from: number; to: number; step: number }

/** Instantes t de cada cuadro: t_i = i / fps dentro de [from, to), saltando de step en step. */
export function frameTimes(r: FilmRange): number[] {
  const out: number[] = [];
  const i0 = Math.ceil(r.from * r.fps - 1e-9), i1 = Math.floor(r.to * r.fps - 1e-9);
  for (let i = i0; i <= i1; i += Math.max(1, r.step)) out.push(i / r.fps);
  return out;
}

export const frameName = (n: number) => `${String(n).padStart(5, '0')}.png`;
