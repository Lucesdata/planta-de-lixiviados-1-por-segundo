/**
 * Controles interactivos: transporte (reproducir/pausa, barra 0–50 s, velocidad, bucle),
 * modo de cámara (Narrativa / Vista general / volver a la narrativa) y atajos de teclado.
 * Ocultos en modo película.
 */
import { fmtClock } from '../sim/signals';
import { tr, type Lang } from './i18n';
import { el, setClass, setText } from './styles';

export type CamMode = 'narrative' | 'overview' | 'free' | 'film';

export interface ControlsState {
  playing: boolean;
  speed: number;
  loop: boolean;
  t: number;
  duration: number;
  mode: CamMode;
}

export interface ControlsHandlers {
  togglePlay(): void;
  seek(t: number): void;
  setSpeed(s: number): void;
  toggleLoop(): void;
  setMode(m: 'narrative' | 'overview'): void;
  step(dt: number): void;
  toggle(name: 'labels' | 'pipes' | 'flow' | 'sludge' | 'actors'): void;
  cycleLight(): void;
}

export class Controls {
  readonly root: HTMLElement;
  private play: HTMLButtonElement;
  private range: HTMLInputElement;
  private tm: HTMLElement;
  private speeds: HTMLButtonElement[] = [];
  private loopB: HTMLButtonElement;
  private mNar: HTMLButtonElement;
  private mOv: HTMLButtonElement;
  private back: HTMLButtonElement;
  private scrubbing = false;

  constructor(parent: HTMLElement, private h: ControlsHandlers) {
    this.root = el('div', 'panel controls pe', parent);
    this.play = el('button', 'btn', this.root) as HTMLButtonElement;
    this.play.onclick = () => h.togglePlay();
    this.range = el('input', '', this.root) as HTMLInputElement;
    this.range.type = 'range'; this.range.min = '0'; this.range.max = '50'; this.range.step = '0.01';
    this.range.oninput = () => { this.scrubbing = true; h.seek(parseFloat(this.range.value)); };
    this.range.onchange = () => { this.scrubbing = false; };
    this.tm = el('span', 'tm', this.root);
    const seg = el('div', 'seg', this.root);
    for (const s of [0.5, 1, 2]) {
      const b = el('button', 'btn', seg, `×${s}`) as HTMLButtonElement;
      b.onclick = () => h.setSpeed(s);
      b.dataset.speed = String(s);
      this.speeds.push(b);
    }
    this.loopB = el('button', 'btn', this.root) as HTMLButtonElement;
    this.loopB.onclick = () => h.toggleLoop();
    const seg2 = el('div', 'seg', this.root);
    this.mNar = el('button', 'btn', seg2) as HTMLButtonElement;
    this.mOv = el('button', 'btn', seg2) as HTMLButtonElement;
    this.mNar.onclick = () => h.setMode('narrative');
    this.mOv.onclick = () => h.setMode('overview');
    this.back = el('button', 'btn', this.root) as HTMLButtonElement;
    this.back.onclick = () => h.setMode('narrative');

    window.addEventListener('keydown', e => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' && (e.target as HTMLInputElement).type !== 'range') return;
      if (e.code === 'Space') { e.preventDefault(); h.togglePlay(); }
      else if (e.code === 'ArrowLeft') { e.preventDefault(); h.step(-1); }
      else if (e.code === 'ArrowRight') { e.preventDefault(); h.step(1); }
      else if (e.code === 'KeyL') h.toggle('labels');
      else if (e.code === 'KeyP') h.toggle('pipes');
      else if (e.code === 'KeyF') h.toggle('flow');
      else if (e.code === 'KeyV') h.toggle('actors');
      else if (e.code === 'KeyN') h.cycleLight();
    });
  }

  update(s: ControlsState, lang: Lang): void {
    setText(this.play, s.playing ? `❚❚ ${tr('pause', lang)}` : `▶ ${tr('play', lang)}`);
    if (!this.scrubbing) this.range.value = s.t.toFixed(2);
    setText(this.tm, `${fmtClock(s.t)} / ${fmtClock(s.duration)}`);
    for (const b of this.speeds) setClass(b, 'on', parseFloat(b.dataset.speed!) === s.speed);
    setText(this.loopB, `⟲ ${tr('loop', lang)}`);
    setClass(this.loopB, 'on', s.loop);
    setText(this.mNar, tr('mode_narrative', lang));
    setText(this.mOv, tr('mode_overview', lang));
    setClass(this.mNar, 'on', s.mode === 'narrative');
    setClass(this.mOv, 'on', s.mode === 'overview');
    setText(this.back, `↺ ${tr('back_story', lang)}`);
    setClass(this.back, 'hide', s.mode !== 'free');
  }
}
