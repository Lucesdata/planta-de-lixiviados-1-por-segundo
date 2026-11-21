# Lista de planos — película de 50 s

**Origen y modo:** Simulación dinámica didáctica · todo es supuesto (**B** brief · **S** supuesto · **C** cálculo). Nada proviene de documentos oficiales ni de mediciones. Tiempo narrativo comprimido.
Todo es función pura de `t`: proceso en `src/motion/timeline.ts → evaluate(t)`, personas y camiones en `src/motion/actors.ts → evaluateActors(t, rutas)`, iluminación en `src/motion/lighting.ts → lightingAt(t, modo)`. La película se renderiza cuadro a cuadro con `window.__film.renderFrame(t)`.

## Lenguaje de cámara

- Dirección **fija** `CAMERA_DIR = [0.45, 0.8, 1.0]` (vista tres cuartos desde el sureste). La cámara **nunca rota**.
- Solo **pan** (objetivo), **dolly** (distancia) y **zoom** leve (fov 26–31°, límites duros 24–32°).
- Los encuadres se calculan desde las huellas y el ancla `label` de cada unidad (`cameraStory.ts → fitShot`); las claves pueden añadir puntos extra: la parada de cada camión (fin de `chem-arrive` / `sludge-arrive`, caja de 7 m orientada según la ruta) y el portón.
- Región segura: `SAFE_PX = {x0 364, x1 1556, y0 92, y1 840}` en el escenario 1920×1080 (fuera de columnas KPI y detalle, barra superior y subtítulo/rastreador).
- Interpolación smootherstep (C2) entre claves. Validado: Δobjetivo ≤ 1,2 m, Δdistancia ≤ 1,5 m, Δfov ≤ 0,25° por cuadro a 30 fps; cada clave encuadra todas sus unidades (prueba d3).

## Claves de cámara

Valores calculados con la planta real (huellas y anclas del Agente A; se recalculan si la geometría cambia).

| t (s) | Encuadre (unidades + extras) | Objetivo (x, y, z) m | Distancia m | fov ° |
|---|---|---|---|---|
| 0.0 | planta completa | (-4.6, -0.7, 2.3) | 93.1 | 30 |
| 1.6 | planta completa | (-4.6, -0.7, 2.3) | 93.1 | 30 |
| 4.6 | screen, homog, dosC, coag | (-23.2, 1.3, -6.5) | 27.5 | 28 |
| 7.4 | homog, dosC, dosF, coag, floc, clar1, control + parada camión de químicos | (-18.1, 1.7, -2.4) | 46.3 | 28 |
| 10.0 | floc, clar1, thick, sludge | (-16.6, 0.1, 2.4) | 58.0 | 27 |
| 12.8 | clar1, thick, sludge, inter + parada camión de lodos | (-15.3, 0.8, 3.3) | 64.9 | 27 |
| 15.6 | clar1, inter, pump, pumpB | (-6.6, 1.8, -7.9) | 26.6 | 27 |
| 18.4 | inter, pump, pumpB, uasb1, uasb2, uasb3, uasb4 | (-3.6, 0.5, -1.7) | 42.2 | 28 |
| 21.0 | pump, uasb1, uasb2, uasb3, uasb4 | (-3.2, 0.5, -0.8) | 37.6 | 27 |
| 23.8 | uasb1, uasb2, uasb3, uasb4 | (-2.2, 2.1, 1.3) | 34.1 | 26 |
| 26.6 | uasb1, uasb2, uasb3, uasb4, flare | (0.2, 1.4, -4.4) | 55.7 | 27 |
| 29.4 | uasb1, uasb2, uasb3, uasb4, clar2 | (0.4, 1.9, 1.5) | 43.5 | 26 |
| 31.8 | uasb4, clar2, mbbr | (10.0, 1.9, 1.4) | 36.2 | 27 |
| 33.8 | clar2, mbbr | (12.5, 1.7, 1.3) | 29.6 | 26 |
| 36.0 | mbbr, filtro | (11.5, 0.5, 6.5) | 40.1 | 27 |
| 38.8 | mbbr, filtro, discharge | (9.3, 0.1, 7.5) | 48.1 | 28 |
| 41.6 | filtro, discharge | (7.2, 0.4, 10.8) | 33.7 | 27 |
| 43.2 | filtro, discharge | (7.2, 0.4, 10.8) | 33.7 | 27 |
| 47.0 | planta completa + portón | (-6.7, -1.4, 3.3) | 105.2 | 31 |
| 50.0 | planta completa + portón | (-6.7, -1.4, 3.3) | 105.2 | 31 |

**Fase 3:** la apertura (0–0,6 s, en pausa) encuadra el vertedero con lluvia, el canal y la laguna. De 0,6 a 3,2 s baja a la laguna, la bomba y RJ-100; desde 4,6 s el guion es el de antes. Los camiones llegan por la vía externa desde el vertedero y aparecen fuera de cuadro en x = −96: el de lodos de 0,05 a 13,6 s y el de químicos de 2,6 a 13,8 s. Se ven estacionados en las claves de 12,8 y 14,4 s. Salen hacia el vertedero, el de lodos de 37,4 a 46,0 s y el de químicos de 39,2 a 49,8 s, y desaparecen detrás de la columna de KPI en x = −66.

## Secuencia

| t (s) | Fase | Parcela héroe | Eventos / alertas | Subtítulo (ES) |
|---|---|---|---|---|
| 0–1,5 | — | oculta | 0,3 Lluvia sobre el vertedero (planta Estable) | Lluvia sobre el vertedero · el agua percola la basura y se vuelve lixiviado (supuesto) |
| 1,5–2,6 | — | oculta | 1,6 Laguna de lixiviados → bombeo a RJ-100 | Canal perimetral → laguna de lixiviados → bombeo a la planta |
| 2,6–5 | — | `p-inlet` → rejilla RJ-100 (3,9–4,7) → `p-screen-homog` | 2,6 Ingreso de lixiviado · rejilla RJ-100 · 3,0 P-01B en reserva | Ingreso de lixiviado · cribado RJ-100 · 1,0 L/s (B) |
| 5–10 | A | TK-101 → TK-102 → TK-103 → CL-101 | 5,2 Homogenización · 6,5 **Dosificación de coagulante activa** · 6,9 Mezcla rápida · 8,0 **Polímero DQ-102 en dosificación** · 8,4 Floculación | Acondicionamiento … (FeCl₃ 300 mg/L, supuesto) |
| 10–16 | B | CL-101 (sedimentación) → `p-clar1-inter` | 10,0 CL-101 · 11,0 Camión de químicos en bahía · 11,2 **Purga CL-101 → espesador ES-101** · 11,4 Camión de lodos en carga · 12,2 Entrega de coagulante · 3 IBC · 14,2 Lodo espesado al lecho LS-101 | Clarificación primaria · lodo → espesador → lecho de secado cubierto |
| 16–23 | C | TK-104 → P-01 → colector; **se divide en 4** a 18,8 s | 16,0 TK-104 · 18,0 Bomba P-01 · 19,8 Reparto al tren UASB · 20,0 Retorno de drenado LS-101 → TK-101 | Bombeo P-01 y reparto equitativo a 4 UASB (hipótesis) |
| 23–31 | D | 4 sub-parcelas en R-201…R-204; se recombinan (29,6–31 s) | 23,0 UASB 4/4 · 25,2 **Antorcha QB-201 encendida · biogás de 4 UASB** · 27,5 **Purga de lodos UASB → espesador** | Tratamiento anaerobio UASB · 0,25 L/s por reactor · biogás a antorcha |
| 31–38 | E | CL-201 → MBBR | 31,0 CL-201 · 32,4 Purga CL-201 → espesador · 34,2 Soplante B-301 · 34,6 Pulimento | Clarificación secundaria y pulimento aerobio MBBR |
| 38–44 | E | MBBR → FF-401 → DS-501 → vertido | 38,6 Filtro · 39,2 **Camión de lodos sale con torta** · 42,4 Descarga · 44,0 Todas las etapas en línea | Filtro fitopedológico y descarga de efluente tratado |
| 44–50 | F | oculta | — | Planta en operación · todas las etapas en línea |

Líneas secundarias (sin parcela héroe; frente de llenado + caudal visual): `p-dosC-coag` 6,5–7,0 · `p-dosF-floc` 8,0–8,5 · `p-clar1-thick` 11,2–12,6 · `p-thick-bed` 13,0–14,2 · `p-bed-return` 20,0–22,6 · `p-gas-uasb1…4` 23,8–25,0 · `p-purge-uasb1…4` 27,5–29,4 · `p-clar2-thick` 32,4–33,6. P-01B y sus líneas (`p-inter-pumpB`, `p-pumpB-header`) quedan **en reserva** todo el tiempo (estado `standby`, sin caudal).

Activación de equipos auxiliares: DQ-101 6,5 · DQ-102 8,0 · ES-101 12,6 · LS-101 14,2 · QB-201 25,0 · ED-01 2,0 (servicios).

## Personas y camiones (`src/motion/actors.ts`)

Coreografía determinista; la pose en t = 50 coincide con la de t = 0 (bucle sin salto). Rutas con nombre de `layout.ts` (las construye el Agente A). Las paradas se localizan por proximidad a las unidades de `layout.ts`, así que el guion sigue siendo válido si cambian las rutas. Paso: zancada nominal 1,35 m/ciclo, ciclos enteros por tramo (pie quieto en cada parada); marcha 1,2 m/s, con transpaleta 1,05 m/s.

| Actor | Guion |
|---|---|
| Camión de lodos | `sludge-arrive` 1,8–10,2 (baliza encendida en marcha) · tolva 10,6–11,4 · carga 0 → 0,85 entre 12,0 y 37,5 · cierre 38,0–38,8 · `sludge-leave` 39,2–46,8. Entra primero: comparte el lazo de un solo sentido y su parada está más adelante |
| Camión de químicos | `chem-arrive` 5,2–11,0 · plataforma 11,3–12,2 (abajo) · 36,2–37,2 (arriba) · `chem-leave` 41,2–49,0 (sale con el tramo sur ya libre) |
| w-unload | espera en la puerta de ED-01; desde 12,3 lleva **3 IBC** (el número que muestra el camión: `setLoad(n/4)`, el rig muestra `round(4·x)` totes) con transpaleta del camión a la bodega; los totes bajan en el camión y suben en la bodega |
| w-operator | ED-01 → DQ-101 `operate` 6,0–8,2 → DQ-102 `operate` 11,1–13,3 → TK-102 `inspect` → ED-01; segunda ronda 30–40 s |
| w-screen | `rake` en RJ-100 1,0–6,6, inspección al extremo de su ruta, vuelve a rastrillar |
| w-bed-a | `shovel` en el lecho; desde 12 s viajes lecho ↔ camión (lanzamiento a la tolva) mientras quepan antes de 37,5 s |
| w-bed-b | `rake` en el lecho; guía al camión (inspección junto a él) hacia 13 s y 32 s |
| w-uasb | sale por la pasarela hacia 20 s; `sample` en R-202 24,0–30,0; inspección en R-203; vuelve |
| w-mbbr | inspección del MBBR; `inspect` del soplante B-301 33,0–37,0 |
| w-patrol | ronda lenta continua (0,8 m/s), número entero de vueltas en 50 s |

Rumbo de camión: cuerda entre el eje trasero y un punto 4,2 m más adelante sobre la ruta (el eje delantero sigue la vía y la caja corta hacia el interior de la curva). Rumbo de persona: tangente suavizada (±0,55 m) y giros de 0,45–0,6 s al arrancar o al encarar un equipo.

## Iluminación (`?light=day|dusk|night|story`, tecla N, botón «Luz»)

- Película: **día** por defecto.
- `story`: día → atardecer entre 16 y 48 s (luz de día 1 → 0,5). Las luminarias siguen la misma ley que el rig de iluminación (`factor = (0,8 − luz)/0,4`): se encienden hacia 30 s, con el evento «Alumbrado de planta encendido».
- La tarjeta «Logística / Personal» muestra «Alumbrado: Encendido/Apagado».

## Clics guionizados (cursor)

| t (s) | Unidad | Tarjeta de detalle |
|---|---|---|
| 5,8 | TK-101 Tanque de homogenización | 20 m³ (B) · TRH 5,6 h (C) · DQO afluente 12 000 mg/L (S) |
| 11,0 | CL-101 Clarificador cónico 1 | 7,54 m³ (S) · TRH 2,1 h (C) · carga superficial, lodo primario (C) |
| 24,6 | R-202 Reactor UASB 2 | 10 m³ (B) · 0,25 L/s (reparto equitativo, hipótesis) · TRH 11,1 h (C) |
| 27,6 | QB-201 Antorcha | Biogás ≈ 12,2 m³/h (C) · metano (C) · capacidad 15 m³/h (S) |
| 35,4 | R-301 Reactor MBBR | 20 m³ (B) · TRH 5,6 h (C) · aire, soplante, DQO de salida |
| 39,8 | FF-401 Filtro fitopedológico | 40,5 m³ (S) · TRH (C) · carga hidráulica (C) |

## Etiquetas

22 unidades + 2 camiones. Las 15 principales siguen la prioridad seleccionada > activa > resto. Las 7 auxiliares (RJ-100, DQ-101, DQ-102, P-01B, QB-201, ES-101, ED-01) usan una etiqueta compacta de una línea y solo aparecen si están seleccionadas, si pertenecen a la etapa activa del rastreador o si forman parte del plano actual. Los camiones llevan una etiqueta pequeña mientras están en el sitio. La anticolisión prueba 8 posiciones y oculta lo que no cabe en la región segura.

## Rastreador (9 pasos, sin cambios)

Homogenización 3,9–6,8 (incluye RJ-100) · Coagulación 6,8–8,4 · Floculación 8,4–10,0 · Clarificador 1 10,0–16,0 (incluye ES-101 y LS-101) · UASB 16,0–31,0 (TK-104, P-01, P-01B, QB-201) · Clarificador 2 31,0–34,6 · MBBR 34,6–38,0 · Filtro 38,0–42,4 · Descarga 42,4–44,0.

## Cifras mostradas

Todo es supuesto del escenario (`src/plant/assumptions.ts`), con su clase:

- **B** brief: caudal 1,0 L/s, 8 h/día, volúmenes de TK-101/102/103/104, UASB y MBBR, densidad aparente.
- **S** supuesto: volúmenes de CL-101/CL-201 (7,54 m³), ES-101, FF-401, tanques de dosificación; dosis, calidad de entrada, remociones, potencias.
- **C** cálculo: TRH = V/Q, biogás, consumos, lodos (kg SS/d), cargas.
- Estado de planta: Estable (t < 2 s) / Activa. Nunca se simula una alarma.
