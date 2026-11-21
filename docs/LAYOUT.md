# LAYOUT — geometría del escenario narrativo

**Modo:** simulación dinámica didáctica. Todas las dimensiones, cotas y trazados de este documento son
**hipótesis geométricas de visualización** derivadas de los volúmenes del brief. No son cotas de diseño, as-built
ni datos de campo. Todo lo que el brief no da es un **supuesto** editable (`src/plant/assumptions.ts`); la
geometría de este documento es coherente con esos supuestos (no hay curvas de bomba ni pérdidas de carga).

Ejes: `x` oeste→este, `z` norte→sur (+z hacia la cámara), `y` arriba; suelo/losa en `y = 0`.

## 1. Unidades: volumen ↔ tamaño

| Id | Tag | Forma | Tamaño (m) | Base (m) | Volumen geométrico | Volumen del brief |
|---|---|---|---|---|---|---|
| homog | TK-101 | cilindro abierto | Ø3,2 × 2,6 | 0,3 | π·1,6²·2,6 = 20,9 m³ | 20 m³ |
| coag | TK-102 | caja abierta | 1,0 × 1,0 × 1,0 | 1,2 (plataforma) | 1,0 m³ | 1 m³ |
| floc | TK-103 | cilindro abierto | Ø1,1 × 1,05 | 1,2 (plataforma) | 1,0 m³ | 1 m³ |
| clar1 / clar2 | CL-101 / CL-201 | cilindro + cono sobre patas | Ø2,2 × 3,4 total | 0 | 7,54 m³ | supuesto (Ø2,2; cilindro 1,7 + cono 0,85) |
| inter | TK-104 | cilindro cerrado | Ø1,5 × **1,15** | 0,3 | π·0,75²·1,15 = 2,03 m³ | 2 m³ |
| pump | P-01 | patín | 0,9 × 0,7 × 0,5 | 0,15 | — | — |
| uasb1…4 | R-201…204 | cilindro cerrado | Ø2,0 × 3,2 | 0,3 | π·1²·3,2 = 10,05 m³ | 10 m³ c/u |
| mbbr | R-301 | caja abierta | 4,0 × **2,0** × 2,5 | 0,3 | 20,0 m³ | 20 m³ |
| filtro | FF-401 | lecho de muros bajos | 9,0 × 0,9 × 5,0 | 0 | — | supuesto (45 m² × 0,9 m) |
| discharge | DS-501 | cámara + canal + cabezal | 1,6 × 0,9 × 1,6 (cámara) | 0 | — | — |
| sludge | LS-101 | lecho de secado cubierto | 7,0 × 0,8 × 4,0 | 0 | 28 m² | supuesto |
| thick | ES-101 | cilindro + puente + rastra | Ø2,4 × 2,6 | 0,3 | 11,8 m³ | supuesto |
| dosC / dosF | DQ-101 / DQ-102 | patín 1,4 × 1,0 | tanque Ø0,62 × 0,72 / Ø0,82 × 0,95 | 0 | 0,22 / 0,50 m³ | supuesto (200 L / 500 L) |

Clarificadores (hipótesis visual, `CLAR_GEOM` en `src/plant/units/clarificador.ts`): vértice del cono a 0,85 m,
unión cono/cilindro a 1,70 m, borde a 3,40 m: cono 0,85 m + cilindro 1,70 m, coherente con `S.clarD_m`,
`S.clarCylH_m`, `S.clarConeH_m` (7,54 m³, supuesto).

## 2. Cambios respecto de la interfaz inicial (Agente A)

| Cambio | Antes | Ahora | Motivo / impacto |
|---|---|---|---|
| `pump.pos` | [-4,5, -8] | **[-3,0, -8]** | La subida de impulsión quedaba a 0,35 m del ramal de R-202 (tee y ramal superpuestos). Con la bomba en x = −3,0 la tee del colector queda entre R-202 y R-203 (ramales de 1,1 m y 2,5 m). Solo cambia la posición: la línea TK-104→P-01 se alarga 1,5 m. |
| `inter.size.h` | 1,3 | **1,15** | Coherencia volumen↔tamaño (2,30 m³ → 2,03 m³ para V = 2 m³). |
| `mbbr.size.h` | 2,2 | **2,0** | Coherencia volumen↔tamaño (22 m³ → 20 m³ para V = 20 m³). |
| `types.ts` (aditivo) | — | `Plant.worldPorts?` | Extremos `'world'`: llegada (dentro de la cámara de llegada en `INLET_POINT`, y = 0,25) y vertido (tras el cabezal de DS-501, z = `SITE.maxZ` + 0,9). |

Ids, volúmenes y el resto de posiciones no se modificaron.

## 3. Trazado de tuberías (`src/plant/pipes.ts`, `ROUTING`)

Todas las polilíneas son ortogonales con codos de 90° redondeados (radio ≤ 0,24 m). `pointAt(u)` recorre la
polilínea por longitud de arco (esquinas vivas); el tubo dibujado redondea los codos.

| Línea | Recorrido |
|---|---|
| p-inlet | Cámara de llegada (−31, 0,25, −8) → entrada del canal RJ-100 a 0,42 m. |
| p-homog-coag | Salida baja de TK-101 (0,75 m) → sube en x = −20,4 (junto a la plataforma) → entra a TK-102 a 1,85 m. |
| p-coag-floc / p-floc-clar1 | Rectas sobre la plataforma a 1,85 m / 1,75 m (sin barandas este/oeste para no cruzarlas). |
| p-clar1-thick | Bajo el cono de CL-101 baja a zanja, este hasta x = −9,6, sur en zanja hasta z = 1,4, sube a 0,45 m y se une al troncal de purgas hasta ES-101. |
| p-clar1-inter | Rebose de CL-101 a 3,05 m → baja al techo de TK-104 (1,53 m). |
| p-inter-pump | Succión a 0,50 m con válvula de compuerta. |
| p-feed-uasbN | Descarga vertical de P-01 (retención + compuerta) → 4,20 m → norte-sur hasta el colector en z = −2,2 → este/oeste → ramal con válvula de mariposa → baja al techo de R-20N (3,60 m). |
| p-uasbN-clar2 | Boquilla sur de R-20N a 2,85 m → colector en z = 2,4 → este hasta x = 6,0 → entra a CL-201 a 2,85 m. |
| p-clar2-mbbr | Rebose de CL-201 a 3,05 m → baja dentro de R-301 (2,25 m). |
| p-mbbr-filtro | Salida sur de R-301 a 2,0 m → baja a 1,1 m → al sur por x = 14,5 → entra a FF-401 por el este (distribución perforada interna). |
| p-filtro-discharge | Salida baja oeste de FF-401 a 0,40 m → DS-501. |
| p-outfall | Del cabezal de DS-501 (z = 12,9) al punto de vertido exterior (z = 14,4), con enrocado. |

**Troncales compartidos.** Los 4 ramales `p-feed-*` comparten la subida y el colector de reparto; los 4
`p-uasbN-clar2` comparten el colector de efluente. Cada `PipeRun` conserva su polilínea completa, pero la
geometría se descompone en cadenas únicas (`decomposeChains`): el tramo común se dibuja **una sola vez** (radio
0,105 m frente a 0,085 m de los ramales) y su estado visual es el agregado de sus miembros:
flujo = máximo, frente = máximo de lo avanzado dentro del tramo, resaltado/visible = alguno de ellos.
`setVisible(false)` oculta un tramo compartido solo cuando todos sus miembros están ocultos. Las tees llevan
accesorio esférico con collarín.

Soportes: postes en T cada ~3 m en tramos horizontales elevados (con riostra en rodilla sobre 3 m), durmientes
de concreto bajo líneas bajas; se omiten donde el apoyo caería dentro de una unidad o estructura.

## 4. Estructuras (`src/plant/structures.ts`)

- Plataforma TK-102/TK-103: x [−19,6, −14,5], z [−9,1, −6,9], piso a 1,2 m; barandas norte y sur; escalera al sur en x = −17,0.
- Pasarela UASB: x [−9,6, 4,4], z [−1,85, −0,7], piso a 1,95 m (fase 2; antes 3,0), baranda norte (tope 2,9 m) con 2,25 m libres bajo los ramales de alimentación (4,2 m); escalera de gato con jaula en el extremo oeste.
- Marcas de circulación pintadas, bolardos (bomba, llegada, descarga), postes de cerco perimetral escasos (lado sur sin pasamanos para no tapar la vista), cámara de llegada en `INLET_POINT`.

## 5. Legibilidad desde la cámara fija (`CAMERA_DIR`, sureste, ~36°)

- Lo alto (UASB 4,4 m con venteo, rack a 4,2 m) está al norte del eje de vista de los equipos bajos del sur; la «sombra de vista» de la fila UASB termina en z ≈ −5,8, antes de la fila de proceso (z = −8).
- Ventanas de inspección (UASB, clarificadores, TK-104) orientadas hacia la cámara (φ = atan2(0,45, 1,0) ≈ 24°): se ven el manto de lodo y las burbujas, las partículas que sedimentan y la capa de lodo en el cono, y el nivel. La ventana es un descarte en el shader de la carcasa (`createWindowedShellMaterial`) con marco y vidrio.
- Anclas `label` sobre el punto más alto de cada unidad (UASB 4,75 m, TK-101 4,5 m).

## 6. Validación (`src/sim/collisionCheck.ts`)

`runGeometryChecks(plant)`: solapes entre unidades (holgura 0,4 m), tramos que atraviesan huellas de unidades o
estructuras ajenas a sus extremos (radio + 0,05 m) y cruces entre tuberías (ejes a ≥ 0,25 m: los cruces deben ir
a distinta cota). Exclusiones intencionales y documentadas: pares del mismo colector (mismo `from` o mismo `to`,
distinto de `'world'`) y la cámara de llegada para `p-inlet` (`hosts`). Resultado actual: **0 incidencias**.

## Soplante B-301 (MBBR)

Por indicación del usuario se completa el MBBR R-301 con su soplante, como parte de la misma unidad (no es una etapa nueva del recorrido ni un equipo seleccionable aparte). Patín de 1,25 × 0,85 m al noreste de la pared este (centro local x = W/2 + 1,25, z = −0,85; mundo ≈ (16,75; −0,35)), con soplante de émbolos rotativos y acople directo a un motor horizontal, filtro de aspiración, silenciador de descarga, válvula antirretorno y manómetro. La línea de aire sube a 0,12 m sobre la coronación y entra al colector existente del borde norte. Todas las medidas son hipótesis visuales; caudal de aire, presión y potencia: supuestos (assumptions.ts). La huella del MBBR se amplía para incluir el patín; las comprobaciones de colisión cubren ese volumen.

## 7. Fase 2 · equipos auxiliares, vía, personas, camiones e iluminación (supuestos visuales)

Todo lo de esta sección lo pidió el usuario y es **supuesto visual**; los valores de proceso viven en
`src/plant/assumptions.ts`. Ninguna cifra es dato de campo.

### 7.1 Posiciones (layout.ts) y cambios hechos por el Agente A

| Id | Tag | Posición [x, z] | Nota |
|---|---|---|---|
| screen | RJ-100 | [−28,3; −8] | canal 2,2 × 0,9 × 0,9 m, rejilla inclinada 60°, desarenador, contenedor de cribado al norte, peldaño de operación (0,3 m) al sur con acceso por el este. La subida a TK-101 (2,45 m) implica un bombeo de cabecera (supuesto, sin curva). |
| dosC | DQ-101 | **[−19,0; −5,95]** (antes [−19,5; −5,2]) | sobre la línea pintada del corredor; se movió al sur de la plataforma, entre la plataforma y el corredor, y al oeste de la escalera. |
| dosF | DQ-102 | **[−15,5; −5,95]** (antes [−16; −5,2]) | solapaba la escalera de la plataforma (x −17,4…−16,6). |
| pumpB | P-01B | [−3; −9,6] | mismo modelo que P-01; armario de arrancadores al sureste (x −2,0…−1,3; z −10,4…−10,0). |
| flare | QB-201 | **[6,5; −13]** (antes [5,5; −13]) | alinea la bajada del colector de biogás (x = 6,3) fuera de la franja peatonal x = 5,2. ≥ 9 m de cualquier otra unidad. |
| thick | ES-101 | **[−9,6; 6,8]** (antes [−14; 7]) | fuera del lazo vial (holgura con la caja del camión químico en la curva); la línea de CL-101 y el troncal de purgas llegan en recto por x = −9,6. |
| sludge | LS-101 | **[−21,2; 6,85]** (antes [−22; 7,5]) | dentro del lazo vial, ≥ 2,05 m del eje de la calzada por ambos lados. |
| control | ED-01 | **[−24,5; −2,2]** (antes [−20; −2,2]) | la cortina de la bodega queda frente a la parada del camión químico (que debe caber en el recto norte antes de la curva). |
| — | `ROAD` | portón [−33; 2,5], ancho 3,6, recto norte hasta x = −17,6 | **lazo de un solo sentido** en lugar del «martillo»: este por z = 2,5, curva al sur (x = −13,6), oeste por z = 11,4, norte por x = −28,8 y curva de salida al portón; radio de eje 4 m. Sin maniobras de reversa. |
| — | `CATWALK.deckY` | **1,95 m** (antes 3,0) | con 3,0 m una persona chocaba con los ramales de alimentación a 4,2 m; ahora quedan 2,25 m libres (≥ 2,1). |
| — | corredor pintado sur | empieza en x = −8,6 (antes −10) | el troncal de purgas sube por x = −9,6. |

`SITE` no cambió.

### 7.2 Puertos nuevos

- R-201…R-204: `gas` (cúpula, y = 3,95), `sludge` (purga radial baja a 0,45 m con válvula, φ = −0,45 rad).
- CL-201: `sludge` (vértice del cono, 0,45 m). CL-101 `sludge` a 0,38 m (sin cambio).
- TK-101: `return` (boquilla sur con codo hacia abajo, 0,35 m). TK-102 / TK-103: `dose` (lanza vertical en el borde sur, ~2,3 m).
- P-01: `header` (tee en la subida de descarga a 2,3 m, sobre la retención a 1,25 m y la compuerta a 1,75 m).
- ES-101: `in` (norte, 0,45 m; sube por la pared hasta la campana central), `out` (fondo, oeste, 0,45 m, con válvula).
- LS-101: `in` (sobre el muro este, 0,95 m), `drain` (dren inferior norte con codo a la zanja), `access` (hueco sur).
- DQ-10x: `out` (subida trasera a 1,3 m), `operator`. RJ-100: `in`/`out` a 0,42 m, `operator`. ED-01: `door` (este), `bay` (cortina sur). QB-201: `in` (pote de condensado, 1,5 m, hacia arriba), `tip`.

### 7.3 Trazado de las líneas nuevas (`ROUTING` en pipes.ts)

| Línea | Recorrido |
|---|---|
| p-screen-homog | salida del canal (0,42 m) sube a 2,45 m y entra a TK-101 por el oeste. |
| p-gas-uasbN | domo → 4,8 m → colector este-oeste en z = 0,5 sobre la fila UASB → x = 6,3 → norte hasta z = −11,6 → baja al pote de condensado de QB-201 (1,5 m). Cota distinta del colector de alimentación (4,2) y del de efluente (2,85). Válvula en cada subida y válvula de aislamiento en la bajada. |
| p-purge-uasbN | purga (0,45 m) → sur a z = 2,0 → troncal oeste a 0,45 m sobre durmientes → x = −9,6 → sur a ES-101. |
| p-clar2-thick | vértice de CL-201 → zanja → oeste en zanja (cruza la franja peatonal x = 5,2) → sube en x = 4,5 al troncal. |
| p-clar1-thick | ver §3. Los 6 ramales comparten el troncal (dibujado una vez). |
| p-thick-bed | fondo de ES-101 → zanja bajo la calzada del lazo → sube en x = −16,9 → entra a LS-101 por el muro este. |
| p-bed-return | dren de LS-101 → zanja por x = −20,0 (cruza la calzada norte y el corredor) → z = −5,75 → sube a la boquilla `return` de TK-101. |
| p-dosC-coag / p-dosF-floc | subida trasera del patín → 3,45 / 3,55 m (≥ 2,1 m libres sobre el piso de la plataforma) → sobre la baranda sur → baja a la lanza. Ø de tubing 0,07 m. |
| p-inter-pumpB | comparte la succión de TK-104 hasta la tee en x = −4,6 y va al sur a P-01B (compuerta en el ramal). |
| p-pumpB-header | subida de P-01B (retención + compuerta) → 2,3 m → norte hasta la tee de la subida de P-01. |

Zanjas: el eje del tubo va a y = −0,2 (bajo la losa); a nivel de piso se dibuja una rejilla con angulares de
borde y barras transversales (visual). Sin soportes en zanja.

### 7.4 Actores (`src/plant/actors/`)

- `road.ts`: calzada (cinta de asfalto), bordillos y líneas de borde solo donde no hay otra calzada al lado,
  flechas de sentido único, recuadro amarillo de la bahía química, explanada de carga de lodos, portón con hoja
  corredera abierta y caseta de guardia. `ROAD_PATHS` (ejes) y `distToRoad`.
- `worker.ts`: `createWorker(id, style)` — SkinnedMesh rígida con colores por vértice (1 llamada por persona);
  acciones walk/idle/inspect/shovel/rake/carry/operate/sample; herramientas solo en su acción.
- `truck.ts`: `createTruck('chemical' | 'sludge')` — 7,2 m; origen en el centro del eje trasero, +z adelante.
- `tote.ts`: tote IBC 1,2 × 1,0 × 1,16 m, conjuntos instanciados.
- `routes.ts`: rutas con nombre. Camiones (todas hacia adelante): `chem-arrive` (portón → eje trasero en
  (−24,0; 2,5), rumbo este), `chem-leave` (sigue el lazo y sale), `sludge-arrive` (→ eje trasero en
  (−20,2; 11,4), rumbo oeste), `sludge-leave`. No hace falta `sludge-reverse`. Personas: `w-operator`,
  `w-uasb` (incluye la subida vertical por la escalera de gato: el rumbo se toma del tramo horizontal más
  cercano), `w-bed-a`, `w-bed-b` (y = 0,2 dentro del lecho), `w-unload`, `w-mbbr` (sube 1,5 m por la escalera),
  `w-patrol` (ida por z = −4,75, vuelta por z = −4,25), `w-screen` (peldaño a 0,3 m).
- **Orden de camiones**: ambos usan el mismo carril. Si coinciden, el de lodos debe llegar antes y salir antes
  que el químico (el químico estacionado bloquea la entrada; el de lodos estacionado bloquea la salida).

### 7.5 Iluminación (`src/scene/lighting.ts`, `src/plant/lights.ts`)

`createWorld()` devuelve `lighting: LightingRig` con `setMode('day' | 'dusk' | 'night')`, `setDaylight(x)`
(0 noche … 0,5 atardecer … 1 día, mezcla continua de colores, intensidades, dirección del sol, cielo y niebla),
`nightFactor()` y `update(t)`. Las emisiones nocturnas (lentes, ventanas de ED-01, faros y pilotos de camión,
baliza de la antorcha, charcos de luz aditivos) siguen `applyNightFactor`. Luces reales: 4 PointLight sin sombras
(bodega ED-01, plataforma, pasarela UASB, lecho) + la de la llama (intensidad ∝ llama); siempre presentes en
la escena (intensidad 0 de día) para no recompilar shaders al cambiar de modo. Accesorios: 4 postes de vía
(7 m), 5 torres de reflectores (9,5 m, 3 proyectores), luminarias en postes de baranda (plataforma, pasarela,
MBBR), luces de emergencia en escaleras, luz del portón, apliques de ED-01 y luminarias bajo la cubierta del lecho.

### 7.6 Validación ampliada

`runGeometryChecks` añade: unidades vs. estructuras y postes/torres (holgura 0,2 m; TK-102/103 alojados en la
plataforma y R-20x adosados a la pasarela, intencional), huellas sobre la calzada (semiancho + 0,2 m), rutas vs.
huellas de unidades, estructuras, soportes de tubería, postes, portón y caseta (personas r = 0,28 m, alto
1,8 m; camiones r = 1,3 m, alto 3,6 m; cada ruta puede tocar las huellas de sus extremos, listadas en
`ROUTE_META`), camiones con ≥ 4,5 m libres bajo tuberías y personas con ≥ 2,1 m (las zanjas no cuentan), y la
tee de P-01B en la subida de P-01 (se tolera 0,35 m junto al puerto común). Resultado: **0 incidencias**.
