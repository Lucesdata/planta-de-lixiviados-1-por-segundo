# BRIEF — PTL Buenaventura · Agua Recuperada

**Modo:** simulación dinámica didáctica en tiempo narrativo comprimido: unos 50 s de película muestran el recorrido de una parcela de lixiviado que en la planta tardaría horas.

**Todo es supuesto.** No se usan documentos oficiales, planos, mediciones ni telemetría. Cada cifra lleva una clase:

- **B** — dato del brief del usuario.
- **S** — supuesto: un valor típico asumido, editable.
- **C** — cálculo hecho a partir de B y S.

Los valores están en dos archivos:

- `src/plant/layout.ts` — brief y posiciones de los equipos.
- `src/plant/assumptions.ts` — supuestos S y cálculos C.

## Datos del brief (B)

| Parámetro | Valor |
|---|---|
| Caudal | 1,0 L/s (3,6 m³/h) |
| Operación | 8 h/día → 28,8 m³/d (C) |
| UASB | 4 en paralelo × 10 m³, sin recirculación |
| Homogenización / coagulación / floculación / intermedio / MBBR | 20 / 1 / 1 / 2 / 20 m³ |
| Densidad aparente de la torta de lodo | 0,75 t/m³ |

## Supuestos principales (S) y resultados (C)

| Tema | Supuesto (S) | Resultado (C) |
|---|---|---|
| Calidad de entrada | DQO 12 000 mg/L; SST 800 mg/L | — |
| Remociones de DQO | fisicoquímico 25 %; UASB 70 %; MBBR 50 % | DQO de salida del MBBR ≈ 1 350 mg/L |
| Coagulante FeCl₃ | 300 mg/L; solución al 40 %; tanque de 200 L | 1,08 kg/h; 1,9 L/h; autonomía ≈ 13 d |
| Polímero | 2 mg/L, preparado al 0,1 % | 7,2 L/h |
| Biogás | 0,35 m³ CH₄/kg DQO removida; 65 % CH₄; antorcha de 15 m³/h | ≈ 12,2 m³/h en total; 3,05 m³/h por UASB |
| Aire MBBR (B-301) | 3 Nm³/(m³·h); 0,35 bar; motor de 2,2 kW | 60 Nm³/h |
| Bomba P-01 / P-01B | altura 8 m; motor de 0,75 kW; sin curva | potencia hidráulica 0,078 kW |
| Clarificadores | Ø2,2 m; cilindro de 1,7 m + cono de 0,85 m | 7,5 m³; carga superficial 0,95 m/h |
| Espesador | Ø2,4 × 2,6 m | 11,8 m³ |
| Filtro fitopedológico | 45 m² × 0,9 m | carga hidráulica 0,64 m/d |
| Lodos | primario 0,6 kg SS/m³; UASB 0,05 kg SS/kg DQO; CL-201 2 kg/d; purga al 2 %, espesado al 5 %, torta al 25 %; camión de 6 m³ | 28,4 kg SS/d; torta de 113 kg/d (0,15 m³/d); un retiro cada ≈ 40 d |

Las posiciones, dimensiones y trazados de la escena también son supuestos visuales: tuberías, soplante, biogás y antorcha, dosificación, línea de lodos, vía, alumbrado, personas y camiones.

## Fase 2 · Equipos auxiliares, personas, camiones y alumbrado

Se añadieron por indicación del usuario:

- rejilla y desarenador RJ-100;
- dosificación DQ-101 (coagulante) y DQ-102 (polímero);
- bomba de reserva P-01B;
- colector de biogás, sello hidráulico y antorcha QB-201;
- purgas de lodo de los UASB y de CL-201;
- espesador ES-101 y lecho de secado cubierto LS-101;
- retorno del drenado a TK-101;
- mezclador en TK-101;
- caseta de control y químicos ED-01;
- vía de acceso con portón;
- 8 personas y 2 camiones (químicos y lodos);
- alumbrado de planta con modos Día, Atardecer y Noche.

La coreografía es determinista. Las cantidades que se muestran, como los totes, son las mismas que se ven en pantalla.

## Fase 3 · Vertedero de origen, camiones, iluminación y rótulos

- **Vertedero (supuesto visual):** está al oeste de la planta. Es una celda de dos terrazas con cobertura vegetal y un frente de trabajo con basura expuesta, donde trabajan una topadora y un camión recolector que vuelca. Tiene chimeneas de venteo y aves. Los valores están en `LANDFILL`, `POND`, `DITCH` y `EXT_ROAD` (`src/plant/layout.ts`) y la geometría en `src/plant/landfill.ts`.
- **Recorrido del lixiviado:** lluvia sobre el vertedero → percolación → canal perimetral → laguna con geomembrana → bomba → cámara de llegada de RJ-100. La película abre sobre el vertedero (0–3,2 s).
- **Camiones:** la vía continúa fuera del sitio con doble carril. Los camiones aparecen y desaparecen fuera de cuadro, a una velocidad máxima de 8,5 m/s. El volteo de lodos se carga con la caja horizontal.
- **Iluminación:** el terreno exterior, el cielo y las luces de día son más claros (exposición 1,12).
- **Rótulos:** se muestran menos. Hay un solo rótulo «UASB ×4», solo se rotulan las unidades del plano y la vista general lleva un rótulo por etapa.

## Fase 4 · Estilo claro

La escena y la interfaz pasan a un estilo claro, más amable para presentar el proyecto. La interfaz usa paneles blancos y acento azul. La escena tiene fondo lavanda, equipos blancos con estructura azul, líneas de proceso de color vivo y camiones con cabina azul. Solo cambian los colores: la geometría y los supuestos no cambian.

## Fase 5 · Narrativa positiva «Agua Recuperada»

| Indicador (C, por día de 8 h) | Valor | Base |
|---|---|---|
| Agua devuelta al humedal | 28,8 m³/d | caudal del brief |
| DQO removida | 92 % | 12 000 → 945 mg/L: fisicoquímico 25 %, UASB 70 %, MBBR 50 %, filtro 30 % (S) |
| Carga de DQO evitada | 318 kg/d | 28,8 m³/d × (12 000 − 945) mg/L |
| Energía contenida en el biogás | 633 kWh/d | 63,5 m³ CH₄/d × 9,97 kWh/m³ (PCI, S) |
| SST de salida | 64 mg/L | remoción global 92 % (S) |

- **Humedal receptor:** supuesto visual al sur del sitio (`WETLAND` en `layout.ts`, geometría en `src/plant/wetland.ts`).
- **Antes · Después:** tarjeta desde 37,5 s.
- **Corte vertical para redes:** `npm run social` → `out/ptl-buenaventura-social.mp4` (1080×1920, 18,6 s). Los tramos están en `src/render/social.ts`.
- **Marca:** «PTL Buenaventura · Agua Recuperada».
