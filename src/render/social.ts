/**
 * Fase 5 · Corte vertical para redes (9:16, ~18,6 s): «lluvia → planta → biogás → agua limpia».
 * Cada segmento reutiliza un tramo de la película (misma simulación, función pura de t) con cortes secos.
 * socialToFilm(τ) traduce el tiempo del corte al tiempo de la película.
 */
export interface SocialSeg { from: number; to: number; title: { es: string; en: string }; kicker: { es: string; en: string } }

export const SOCIAL_SEGMENTS: SocialSeg[] = [
  { from: 0.0, to: 4.4, kicker: { es: '1 · Origen', en: '1 · Source' }, title: { es: 'La lluvia atraviesa el vertedero y se vuelve lixiviado', en: 'Rain seeps through the landfill and becomes leachate' } },
  { from: 10.6, to: 14.4, kicker: { es: '2 · Tratamiento', en: '2 · Treatment' }, title: { es: 'La planta lo recibe, lo clarifica y separa los lodos', en: 'The plant receives it, clarifies it and removes sludge' } },
  { from: 24.2, to: 28.2, kicker: { es: '3 · Energía', en: '3 · Energy' }, title: { es: 'Cuatro reactores UASB lo digieren y producen biogás', en: 'Four UASB reactors digest it and produce biogas' } },
  { from: 43.6, to: 50.0, kicker: { es: '4 · Agua recuperada', en: '4 · Recovered water' }, title: { es: 'El agua tratada vuelve a un humedal lleno de vida', en: 'Treated water returns to a living wetland' } },
];

export const SOCIAL_DURATION = SOCIAL_SEGMENTS.reduce((a, s) => a + (s.to - s.from), 0);
/** Tarjeta final de cierre (últimos segundos del corte). */
export const SOCIAL_ENDCARD = SOCIAL_DURATION - 3.2;

export function socialToFilm(tau: number): { t: number; seg: number; local: number } {
  let acc = 0;
  const x = Math.max(0, Math.min(SOCIAL_DURATION - 1e-6, tau));
  for (let i = 0; i < SOCIAL_SEGMENTS.length; i++) {
    const s = SOCIAL_SEGMENTS[i], d = s.to - s.from;
    if (x < acc + d) return { t: s.from + (x - acc), seg: i, local: x - acc };
    acc += d;
  }
  const last = SOCIAL_SEGMENTS[SOCIAL_SEGMENTS.length - 1];
  return { t: last.to, seg: SOCIAL_SEGMENTS.length - 1, local: last.to - last.from };
}
