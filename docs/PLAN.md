# Plan de implementación

## Árbol de archivos

```
ptl-buenaventura-simulator/
├─ index.html                 plantilla; tools/build.mjs inyecta el bundle → dist/index.html (archivo único)
├─ package.json / tsconfig.json
├─ src/
│  ├─ main.ts                 arranque: mundo + planta + overlay + bucle (interactivo o película)
│  ├─ scene/  world.ts · lighting.ts · materials.ts · cameraRig.ts
│  ├─ plant/  types.ts* · layout.ts* · processFlow.ts* · buildPlant.ts · pipes.ts · structures.ts
│  │  └─ units/ homogeneizador · coagulador · floculador · clarificador (1 y 2) · intermedio · bomba
│  │           · uasb · mbbr · filtroFitopedologico · descarga · lodos · common
│  ├─ motion/ timeline.ts (evaluate(t) puro) · paths.ts (parcela héroe) · cameraStory.ts
│  ├─ ui/     overlay.ts · kpis.ts · detailPanel.ts · processTracker.ts · alerts.ts · labels.ts · i18n.ts · styles.ts
│  ├─ sim/    state.ts* · signals.ts · selectors.ts · collisionCheck.ts
│  └─ render/ capture.ts (API determinista window.__film) · exportFilm.ts
├─ tools/  build.mjs · validate.mjs (Node) · validate-browser.mjs (Playwright) · render-film.mjs (PNG→MP4)
└─ docs/   BRIEF.md · LAYOUT.md · SHOTS.md · PLAN.md
```
`*` = contratos compartidos entre los dos frentes de trabajo; cambios solo aditivos.

## Fases
1. **Contratos** (hecho): tipos de unidad/tubería, layout con volúmenes del brief, grafo de proceso, `SimState`.
2. **Agente A — geometría:** materiales mate con biseles, unidades parametrizadas, 4 UASB, tuberías ortogonales con pulsos de flujo, bomba, plataformas/pasarelas, losa del sitio, luces. `buildPlant()`.
3. **Agente B — simulación/UI/cámara:** `evaluate(t)` puro (fases A–F, 0–50 s), parcela héroe, cámara de dirección fija (solo pan/dolly/zoom), overlay 16:9 (barra, KPI, detalle, rastreador, alertas, leyenda, toggles), selección por clic, modo película determinista.
4. **Integración y validación:** solapes, cruces de tuberías, legibilidad de etiquetas, encuadre, rastreador, coherencia selección↔detalle; capturas reales; render MP4.
