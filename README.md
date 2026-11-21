# PTL Buenaventura · Agua Recuperada

Simulador 3D interactivo y escena filmable de la planta de tratamiento de lixiviados de Buenaventura (TypeScript + Three.js r170).

> **Origen y modo:** *Simulación dinámica didáctica · todo es supuesto (B brief · S supuesto · C cálculo).* Tiempo narrativo comprimido (50 s). No hay telemetría ni calibración; los TRH mostrados son cálculo directo V/Q. Los supuestos están en [`docs/BRIEF.md`](docs/BRIEF.md).

## Uso

```bash
npm install
npm run build          # dist/index.html — un solo archivo, offline
npm run serve          # http://localhost:8790
npm run typecheck      # tsc --noEmit
npm test               # validación Node: determinismo, rastreador, detalle, cámara, geometría, parcela
npm run test:browser   # validación Playwright: etiquetas, encuadre, rastreador DOM, tarjeta de detalle
npm run film           # out/ptl-buenaventura-film.mp4 (1920×1080, 30 fps)
npm run social         # out/ptl-buenaventura-social.mp4 (1080×1920, 18,6 s, corte vertical para redes)
node tools/render-film.mjs --from 20 --to 23 --fps 30   # clip de prueba
```

Parámetros de URL: `?film=1` (modo película, API `window.__film`), `?t=12.5` (congelar en un instante), `&lang=en`, `&fps=`, `&w=&h=`, `&light=day|dusk|night|story` (iluminación; la película usa día por defecto; `story` = día → atardecer con alumbrado a 32,5 s), `&stub=1` (planta de respaldo de desarrollo).

### Controles (modo interactivo)
- **Narrativa / Vista general**: la cámara sigue la historia o queda en vista general; arrastrar = pan libre, rueda = dolly; botón para volver a la historia.
- **Clic** en un equipo: lo selecciona (contorno, brillo de suelo, ruta resaltada, tarjeta de detalle).
- Línea de tiempo: reproducir/pausa, barra 0–50 s, velocidad ×0,5/×1/×2, bucle.
- Teclado: `espacio` reproducir/pausa · `←/→` ±1 s · `L` etiquetas · `P` tuberías · `F` flujo · `V` personas/vehículos · `N` iluminación (día → atardecer → noche). Interruptores de tuberías, etiquetas, flujo, línea de lodos, personas/vehículos, iluminación e idioma ES/EN en la barra superior.

## Arquitectura

| Carpeta | Responsabilidad |
|---|---|
| `src/plant/types.ts`, `layout.ts`, `processFlow.ts` | Interfaces: API de unidades (`setActive/Selected/FlowLevel/InternalMotion/Status`, `update(t)`), layout con volúmenes del brief, grafo de tuberías y paleta de líneas |
| `src/plant/units/*` | Una fábrica por equipo (`createHomogenizationTank`, `createUASB(id)`, `createPump`…), geometría procedural con biseles, sin modelos importados |
| `src/plant/pipes.ts`, `structures.ts`, `buildPlant.ts` | Enrutado ortogonal, colectores compartidos, shader de flujo (pulsos, frente de llenado, chevrones), plataformas y pasarelas |
| `src/scene/` | Renderizador, luces, materiales; `cameraRig.ts` con dirección fija (solo pan/dolly/zoom) |
| `src/motion/` | `timeline.ts → evaluate(t)` función pura; parcela héroe (`paths.ts`); historia de cámara (`cameraStory.ts`) |
| `src/sim/` | Tipos de estado, señales/selectores para la UI, comprobaciones geométricas (`collisionCheck.ts`) |
| `src/ui/` | Overlay HTML 16:9: barra superior, KPI, detalle con miniatura, rastreador, eventos, reparto UASB, leyenda, etiquetas, i18n |
| `src/render/` | API determinista de captura (`window.__film`) y exportación |
| `tools/` | build (esbuild), validaciones Node/navegador, render de película (Playwright → PNG → ffmpeg) |

Determinismo: ningún módulo usa `Math.random` ni `Date`; todo lo visible es función de `t`, así que cada cuadro de la película es reproducible.

Documentos: [`docs/BRIEF.md`](docs/BRIEF.md) (supuestos y discrepancias) · [`docs/LAYOUT.md`](docs/LAYOUT.md) (hipótesis geométricas) · [`docs/SHOTS.md`](docs/SHOTS.md) (planos y tiempos) · [`docs/PLAN.md`](docs/PLAN.md).
