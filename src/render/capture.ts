/**
 * API determinista de película: window.__film = { duration, fps, ready, renderFrame(t) }.
 * renderFrame(t) fija t, evalúa, aplica estado, actualiza el DOM del overlay de forma síncrona
 * y dibuja WebGL una vez; luego espera un cuadro de composición para que la captura sea fiel.
 */
export interface FilmApi {
  duration: number;
  fps: number;
  ready: Promise<void>;
  renderFrame(t: number): Promise<void>;
}

const nextFrame = () => new Promise<void>(r => requestAnimationFrame(() => r()));

export function installFilmApi(opts: { duration: number; fps: number; renderFrame(t: number): void }): FilmApi {
  const api: FilmApi = {
    duration: opts.duration,
    fps: opts.fps,
    ready: (async () => {
      opts.renderFrame(0);
      await nextFrame();
      await nextFrame();
    })(),
    async renderFrame(t: number) {
      opts.renderFrame(t);
      await nextFrame();
    },
  };
  (window as unknown as { __film: FilmApi }).__film = api;
  return api;
}
