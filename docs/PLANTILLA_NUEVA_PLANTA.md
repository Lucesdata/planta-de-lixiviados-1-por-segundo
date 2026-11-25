# Plantilla · Nueva planta con el diseño «Agua Recuperada»

Sirve para crear otra planta de tratamiento (lixiviados, aguas residuales domésticas, industriales o potabilización) con el mismo estilo de este proyecto:
- planta 3D animada y pedagógica;
- interfaz clara con versión móvil;
- película de 50 s, corte vertical para redes y anuncios cortos.

**Cómo usarla**
1. Copia este archivo y rellena cada sección. Lo que no sepas, déjalo en blanco o escribe «sin dato»; no hace falta tenerlo todo.
2. Marca cada número con su clase:
   - **B**: dato del brief, plano o cliente;
   - **S**: supuesto editable;
   - **C**: cálculo (lo hago yo a partir de B y S).
3. Entrega la plantilla rellena junto con los planos o croquis que tengas, usando el mensaje de inicio de la sección 14.
4. Yo construyo la planta en una copia de este repositorio. El repositorio de Buenaventura no se toca.

> Ejemplo de referencia: cada sección trae entre corchetes cómo quedó Buenaventura.

---

## 1. Datos generales
| Campo | Valor | Clase |
|---|---|---|
| Nombre del proyecto / marca | [PTL Buenaventura · Agua Recuperada] | |
| Ubicación (ciudad, región, país) | [Buenaventura, Valle del Cauca, Colombia] | B |
| Tipo de agua a tratar | [Lixiviado de relleno sanitario] | B |
| Caudal de diseño (L/s) | [1,0] | B |
| Horas de operación por día | [8] | B |
| Clima (lluvia, temperatura media) | [Muy lluvioso, ~26 °C] | S |
| Público principal de la animación | [Comunidad campesina, colegios, autoridad ambiental] | |
| Idiomas | [Español (principal), inglés] | |

## 2. Entorno y contexto
| Elemento | Descripción |
|---|---|
| Origen del agua | [Vertedero con lluvia → zanja → laguna de lixiviados → bombeo] |
| Cuerpo receptor del agua tratada | [Humedal con juncos, aves y pasarela] (o río, mar, reúso, riego…) |
| Vías y accesos | [Vía externa de doble carril, portón, lazo interno de camiones] |
| Vecinos y comunidad | [Comunidad rural al lado; preocupación por olores y vista] |
| Mensaje central que queremos transmitir | [«Del lixiviado al agua recuperada»: el ciclo se cierra] |

## 3. Calidad del agua: entrada y metas
| Parámetro | Entrada | Salida esperada | Límite de referencia (norma) | Clase |
|---|---|---|---|---|
| DQO (mg/L) | [12 000] | [≈945] | [verificar norma vigente] | S / C |
| DBO₅ (mg/L) | | | | |
| SST (mg/L) | [800] | [≈64] | | S / C |
| N-NH₄ (mg/L) | | | | |
| pH | | | | |
| Otros (metales, cloruros, coliformes…) | | | | |

Los límites normativos se muestran como **referencia pendiente de verificación**, nunca como cumplimiento certificado.

## 4. Equipos (uno por fila)
Coordenadas en metros sobre un plano de planta: **x** hacia el este y **z** hacia el sur, con el origen en el centro del sitio. Si solo tienes un croquis, envíalo y las calculo yo, marcadas como S.

| id | Código | Nombre | Función (1 frase) | Etapa | Forma 3D | Centro x, z (m) | Dimensiones (m) | Cota base (m) | Volumen (m³) | Clase |
|---|---|---|---|---|---|---|---|---|---|---|
| [homog] | [TK-101] | [Tanque de homogenización] | [Amortigua caudal y carga] | [homog] | cyl | [-24, -8] | [Ø 3,2 × h 2,6] | [0,3] | [20] | B |
| [clar1] | [CL-101] | [Clarificador cónico 1] | [Sedimentación primaria] | [clar1] | cone-clarifier | [...] | [Ø 2,2 × h 3,1] | | | S |
| [uasb1] | [R-201] | [Reactor UASB 1] | [Digestión anaerobia, biogás] | [uasb] | cyl (UASB) | | [Ø 2,0 × h 3,2] | | [10] | B |
| | | | | | | | | | | |

**Formas 3D que ya existen** (se reutilizan tal cual):

| Forma | Ejemplo en Buenaventura |
|---|---|
| Tanque cilíndrico | homogenización, intermedio, floculador |
| Tanque rectangular | coagulación, MBBR |
| Clarificador cónico | CL-101, CL-201 |
| Reactor UASB | R-201…R-204 |
| Bomba | P-01, P-01B |
| Lecho plantado | filtro fitopedológico |
| Lecho de secado | LS-101 |
| Descarga | DS-501 |
| Rejilla | RJ-100 |
| Dosificador de químicos | DQ-101, DQ-102 |
| Espesador | ES-101 |
| Antorcha de biogás | QB-201 |
| Caseta de control | ED-01 |

Otros equipos posibles, como lodos activados, filtros de arena, ósmosis, desinfección UV o cloro y sedimentadores laminares, **se modelan nuevos**. Para cada uno, describe en una línea cómo es físicamente y, si puedes, adjunta una foto o un esquema.

## 5. Etapas del proceso (orden del recorrido)
Son las que aparecen numeradas en la línea de tiempo de la interfaz. Se recomiendan entre 6 y 10.

| N.º | id etapa | Nombre corto | Equipos que incluye | Qué ocurre (para el público) |
|---|---|---|---|---|
| 1 | [homog] | [Homogeneización] | [RJ-100, TK-101] | [El agua se calma y se mezcla] |
| 2 | | | | |

## 6. Conexiones (tuberías)
| id | Desde (equipo · puerto) | Hacia (equipo · puerto) | Fluido | Etapa |
|---|---|---|---|---|
| [p-homog-coag] | [TK-101 · salida] | [TK-102 · entrada] | [lixiviado] | [coag] |
| | | | | |

Tipos de fluido disponibles, cada uno con su color:

| Fluido | Uso |
|---|---|
| `leachate` | lixiviado o agua cruda |
| `clarified` | agua clarificada |
| `pumped` | agua impulsada por bombas |
| `anaerobic` | salida de reactores anaerobios |
| `treated` | agua tratada |
| `sludge` | lodos |
| `biogas` | biogás |
| `chemical` | químicos |
| `return` | retornos |

Si falta un tipo, se añade uno nuevo.

## 7. Supuestos y cálculos por equipo
Lo que se muestra en la ficha del inspector y en las notas técnicas de la escena.

| Equipo | Parámetro | Valor | Unidad | Clase | Base o fuente |
|---|---|---|---|---|---|
| [UASB] | [Remoción de DQO] | [70] | [%] | S | [UASB típico con lixiviado] |
| [MBBR] | [Llenado de soportes] | [50] | [%] | S | [PEAD, típico 40–60 %] |
| | | | | | |

## 8. Guion de la película (50 s)
| Tiempo (s) | Qué muestra la cámara | Subtítulo (es) | Subtítulo (en) |
|---|---|---|---|
| [0–2,6] | [Vertedero bajo la lluvia] | [La lluvia atraviesa el vertedero…] | |
| [2,6–4] | [Laguna y bombeo] | | |
| … | | | |
| [44–50] | [Plano general + receptor] | [El agua vuelve al humedal · el ciclo se cierra] | |

**Eventos clave para el registro**, por ejemplo: «Bomba P-01 activa», «UASB en línea 4/4», «Antorcha encendida».

## 9. Corte vertical para redes (≈18 s) y anuncios (≈11–12 s)
| Momento | Titular grande | Cifras a mostrar |
|---|---|---|
| 1 · Origen | [La lluvia atraviesa el vertedero y se vuelve lixiviado] | |
| 2 · Tratamiento | | |
| 3 · Energía / proceso clave | | |
| 4 · Resultado | | |
| Tarjeta final | [Explora la planta en 3D] + [enlace] | |

## 10. Logística y personas (opcional)
| Elemento | Detalle |
|---|---|
| Camiones | [Químicos (entrega), lodos (retiro)], horarios aproximados |
| Personal | [8 personas: operadores, laboratorio, mantenimiento] |
| Turnos / alumbrado | [Día; alumbrado nocturno opcional] |

## 11. Panel de impacto (4 cifras)
[Agua devuelta (m³/d) · DQO removida (%) · Carga evitada (kg/d) · Energía del biogás (kWh/d)]. Cámbialas por las que importen en esta planta, por ejemplo agua reutilizada, coliformes eliminados o CO₂ evitado.

## 12. Marca y estilo
| Campo | Valor |
|---|---|
| Nombre corto en pantalla | [PTL Buenaventura · Agua Recuperada] |
| Logo | [Gota en degradado azul-verde] (o adjuntar el tuyo en SVG/PNG) |
| Colores | [Interfaz clara: azul técnico #3267CE, verde #409B73]; tuberías en pastel con fluido vivo |
| Tono | [Pedagógico, optimista, sin tecnicismos en los subtítulos] |

## 13. Entregables
- [ ] Página web 3D interactiva (escritorio y móvil) publicada en Vercel
- [ ] Película de 50 s (1920×1080)
- [ ] Corte vertical para redes (1080×1920)
- [ ] Anuncios cortos con sonido y tarjeta final con enlace
- [ ] Texto para LinkedIn u otras redes
- [ ] Documentación de supuestos y balance de masa

## 14. Mensaje de inicio (para Claude Code)
> Quiero construir una nueva planta con el diseño «Agua Recuperada» de `Lucesdata/planta-de-lixiviados-1-por-segundo`. Adjunto la plantilla rellena y los planos. Crea un repositorio o carpeta nueva a partir de ese proyecto, sin modificar Buenaventura.
>
> Reglas:
> - respeta las clases B/S/C;
> - no inventes datos y muestra «sin dato» donde falte información;
> - reutiliza las formas 3D existentes y modela nuevas solo donde haga falta.
>
> Empieza por la planta 3D y la interfaz; después, la película y los cortes.

## 15. Dónde va cada sección en el código (referencia técnica)
| Sección | Archivo |
|---|---|
| 1 Caudal, horas | `src/plant/layout.ts` → `DESIGN` |
| 2 Entorno (origen, receptor, vías) | `src/plant/landfill.ts`, `src/plant/wetland.ts`, `src/plant/actors/road.ts` |
| 3 y 7 Calidad, supuestos, cálculos, balance | `src/plant/assumptions.ts` (`S`, `derive()`, `UNIT_FACTS`, `massBalance()`) |
| 4 Equipos | `src/plant/layout.ts` → `UNITS`; geometría en `src/plant/units/*.ts` |
| 5 y 6 Etapas y tuberías | `src/plant/processFlow.ts` → `STAGES`, `PIPES`, `LINE_COLORS` |
| 8 Guion, subtítulos, eventos | `src/motion/timeline.ts` (`ROUTE`, `STAGE_WINDOWS`, `CAPTIONS`); cámara en `src/motion/cameraStory.ts` |
| 9 Corte vertical | `src/render/social.ts`, `src/ui/social.ts` |
| 10 Logística | `src/motion/actors.ts`, `src/plant/actors/` |
| 11 Impacto | `src/ui/impact.ts` |
| 12 Marca e interfaz | `src/ui/i18n.ts`, `src/ui/styles.ts`, `src/ui/shell.ts` |
| Notas técnicas en escena | `src/ui/labels.ts` → `NOTES` |
| Pruebas | `npm test` (numéricas y de geometría) y `npm run test:browser` (rótulos e interfaz) |
