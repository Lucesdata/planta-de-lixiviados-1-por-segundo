/**
 * Iluminación narrativa (función pura de t). Modos fijos: día / atardecer / noche.
 * Modo 'story': día → atardecer a lo largo de los 50 s; el alumbrado de planta se enciende hacia 30–35 s.
 * Hipótesis visual: no hay datos de luminarias ni horarios de operación.
 */
import { smoothstep } from '../sim/signals';

export type LightPreset = 'day' | 'dusk' | 'night';
export type LightMode = LightPreset | 'story';

/** Luminarias según la luz de día (misma ley que el rig del Agente A: nightFactor = (0,8 − d)/0,4). */
export function fixturesFromDaylight(d: number): number {
  return Math.max(0, Math.min(1, (0.8 - d) / 0.4));
}
const STORY_T0 = 16, STORY_T1 = 48;
const storyDaylight = (t: number) => 1 - 0.5 * smoothstep(t, STORY_T0, STORY_T1);
export const LIGHT_STORY = {
  /** Inicio y fin del paso día → atardecer. */
  t0: STORY_T0, t1: STORY_T1,
  /** Instante en que se encienden las luminarias (primer t con factor > 0,02; ≈ 30 s). */
  fixturesOn: (() => { for (let i = 0; i <= 5000; i++) { const t = i / 100; if (fixturesFromDaylight(storyDaylight(t)) > 0.02) return Math.round(t * 10) / 10; } return 50; })(),
};

export interface LightingState {
  mode: LightMode;
  /** Preset efectivo más cercano (para el rig del Agente A si solo admite modos). */
  preset: LightPreset;
  /** 1 = pleno día, 0.5 = atardecer, 0 = noche. */
  daylight: number;
  /** Luminarias encendidas. */
  fixtures: boolean;
  /** 0..1 encendido progresivo de luminarias. */
  fixturesLevel: number;
}

const DAYLIGHT: Record<LightPreset, number> = { day: 1, dusk: 0.5, night: 0 };

export function lightingAt(t: number, mode: LightMode): LightingState {
  if (mode !== 'story') {
    const fl = fixturesFromDaylight(DAYLIGHT[mode]);
    return { mode, preset: mode, daylight: DAYLIGHT[mode], fixtures: fl > 0.02, fixturesLevel: fl };
  }
  const daylight = storyDaylight(t);
  const fl = fixturesFromDaylight(daylight);
  return { mode, preset: daylight > 0.75 ? 'day' : 'dusk', daylight, fixtures: t >= LIGHT_STORY.fixturesOn, fixturesLevel: fl };
}

export function parseLightMode(s: string | null | undefined): LightMode | null {
  return s === 'day' || s === 'dusk' || s === 'night' || s === 'story' ? s : null;
}

/** Ciclo del atajo N / botón: día → atardecer → noche → día. */
export function nextLightMode(m: LightMode): LightPreset {
  return m === 'day' ? 'dusk' : m === 'dusk' ? 'night' : 'day';
}
