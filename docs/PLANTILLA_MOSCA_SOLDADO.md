# Plantilla · Planta de residuos orgánicos con mosca soldado negra (diseño «Agua Recuperada»)

Sirve para crear una planta de **bioconversión de residuos orgánicos con larvas de mosca soldado negra** (*Hermetia illucens*, BSF), con el mismo estilo del proyecto de lixiviados:
- planta 3D animada y pedagógica;
- interfaz clara con versión móvil;
- película, corte vertical y anuncios.

**Cómo usarla**
1. Rellena cada sección. Lo que no sepas, déjalo vacío o con «sin dato».
2. Marca cada número con su clase:
   - **B**: dato del cliente o del plano;
   - **S**: supuesto editable;
   - **C**: cálculo (lo hago yo).
3. Los valores entre corchetes son **ejemplos o rangos típicos de la literatura, para verificar**. No son datos de tu planta.

   Referencia de partida: Dortmans, Diener, Verstappen y Zurbrügg (2017), *Black Soldier Fly Biowaste Processing*, Eawag.
4. Entrega la plantilla rellena junto con los planos o croquis y el mensaje de inicio de la sección 14.

> Diferencia clave con la planta de lixiviados: aquí lo que se mueve son **sólidos** (kg o t por día), no agua (L/s), y el proceso tiene un **ciclo biológico**: huevos → larvas → pupas → moscas → huevos. El balance de masa se hace en kg de materia húmeda y seca.

---

## 1. Datos generales
| Campo | Valor | Clase |
|---|---|---|
| Nombre del proyecto / marca | [p. ej. «Mosca Soldado · Residuo a Recurso»] | |
| Ubicación | | B |
| Origen de los residuos | [plaza de mercado, restaurantes, agroindustria, residuos domiciliarios separados en la fuente] | B |
| Cantidad de residuo recibido (kg/d o t/d) | | B |
| Días de operación por semana | | B |
| Clima (temperatura y humedad relativa medias) | [la cría requiere ~27–30 °C y HR ~60–70 %] | S |
| Público principal de la animación | [comunidad, autoridad, compradores de harina o abono, colegios] | |
| Idiomas | [Español, inglés] | |

## 2. Entorno y contexto
| Elemento | Descripción |
|---|---|
| De dónde llega el residuo | [camiones recolectores, plaza de mercado vecina…] |
| Qué se evita | [que el residuo vaya al relleno sanitario: menos lixiviado, metano y olores] |
| Adónde van los productos | [harina de larva para alimento animal (pollos, peces, cerdos), aceite, abono (frass) para cultivos] |
| Vecinos / comunidad | [preocupaciones típicas: olores, moscas, ruido, tránsito de camiones] |
| Mensaje central | [«Del residuo al recurso»: lo que era basura vuelve como alimento y abono] |

## 3. Caracterización del residuo de entrada
| Parámetro | Valor | Clase |
|---|---|---|
| Composición (% frutas y verduras, comida cocida, otros) | | B / S |
| Humedad del residuo (%) | [típico 70–85 %] | S |
| Contenido de impropios (plástico, vidrio, huesos) (%) | | S |
| Densidad aparente (kg/m³) | | S |
| pH | | S |
| Relación C/N, si se conoce | | S |

## 4. Etapas del proceso (orden del recorrido)
Proceso típico. Elimina, cambia o agrega pasos según tu planta.

| N.º | id etapa | Nombre corto | Qué ocurre (para el público) |
|---|---|---|---|
| 1 | recepcion | Recepción y pesaje | Llega el camión, se pesa y se registra el residuo |
| 2 | clasificacion | Clasificación | Se retiran plásticos, vidrio y metales (impropios) |
| 3 | trituracion | Trituración y mezcla | El residuo se pica y se ajusta su humedad para que las larvas puedan comerlo |
| 4 | cria | Cría de moscas | Moscas adultas se aparean en jaulas iluminadas y ponen huevos en panales |
| 5 | guarderia | Guardería | Los huevos eclosionan y las larvas pequeñas crecen unos días con alimento controlado |
| 6 | bioconversion | Bioconversión | Las larvas comen el residuo en bandejas o camas durante ~12–14 días (S) |
| 7 | cosecha | Cosecha y tamizado | Se separan las larvas del residuo digerido (frass) |
| 8 | procesamiento | Procesamiento de larvas | Las larvas se escaldan, se secan y se muelen en harina; opcionalmente se extrae aceite |
| 9 | abono | Maduración del abono | El frass madura y se convierte en abono orgánico |
| 10 | despacho | Despacho | Salen harina, aceite y abono; una parte de las larvas vuelve a la cría |

## 5. Equipos y zonas (una fila por elemento)
Coordenadas en metros: **x** hacia el este y **z** hacia el sur, con el origen en el centro del sitio. Si solo tienes un croquis, envíalo y las calculo yo.

| id | Código | Nombre | Función | Etapa | Tipo 3D | Centro x, z (m) | Dimensiones (m) | Capacidad | Clase |
|---|---|---|---|---|---|---|---|---|---|
| [bascula] | [BA-101] | [Báscula de camiones] | [Pesaje de entrada] | recepcion | plataforma | | [3 × 8] | [t] | |
| [tolva] | [TO-101] | [Tolva de recepción] | | recepcion | tolva | | | [m³] | |
| [banda] | [BC-201] | [Banda de clasificación] | [Retiro manual de impropios] | clasificacion | banda transportadora | | | [kg/h] | |
| [triturador] | [TR-301] | [Triturador / picadora] | | trituracion | máquina | | | [kg/h] | |
| [mezclador] | [MZ-301] | [Mezclador de sustrato] | [Ajuste de humedad] | trituracion | tanque o mezclador | | | | |
| [jaulas] | [JA-401] | [Jaulas de apareamiento] | [Moscas adultas, luz] | cria | jaulas de malla | | | [nº jaulas] | |
| [guarderia] | [GU-501] | [Sala de guardería] | | guarderia | cuarto con estantes | | | | |
| [bandejas] | [BB-601] | [Racks de bandejas de bioconversión] | | bioconversion | racks apilados | | | [nº bandejas] | |
| [tamiz] | [TZ-701] | [Tamiz rotatorio] | [Separa larvas y frass] | cosecha | tamiz | | | | |
| [escaldado] | [ES-801] | [Escaldadora] | | procesamiento | tanque | | | | |
| [secador] | [SE-802] | [Secador] | | procesamiento | secador | | | | |
| [molino] | [MO-803] | [Molino / prensa de aceite] | | procesamiento | máquina | | | | |
| [compost] | [CO-901] | [Pilas o camas de maduración del frass] | | abono | pilas cubiertas | | | | |
| [bodega] | [BD-1001] | [Bodega de producto y despacho] | | despacho | edificio | | | | |
| [biofiltro] | [BF-1101] | [Biofiltro de olores] | [Control de olores] | — | lecho | | | | |
| [control] | [ED-01] | [Oficina, laboratorio, vestidores] | | — | edificio | | | | |

**Qué se reutiliza del proyecto de lixiviados:**
- la interfaz completa y la versión móvil;
- el motor de animación y los videos;
- personas y camiones;
- la caseta de control, las bombas, las tuberías (para el agua de lavado y el lixiviado de la mezcla) y los lechos.

**Qué se modela nuevo**, con base en tu descripción o fotos: báscula, tolva, banda, triturador, jaulas de moscas, racks de bandejas con larvas animadas, tamiz, escaldadora, secador, molino, pilas de abono y biofiltro.

## 6. Flujos de material (equivalen a las «tuberías»)
| id | Desde | Hacia | Material | Cómo se mueve |
|---|---|---|---|---|
| [f-recepcion] | [camión] | [tolva] | [residuo crudo] | [descarga] |
| [f-impropios] | [banda] | [contenedor de rechazo] | [impropios] | [manual] |
| [f-sustrato] | [mezclador] | [bandejas] | [sustrato preparado] | [carretilla / banda] |
| [f-neonatas] | [guardería] | [bandejas] | [larvas de 5 días] | [manual] |
| [f-cosecha] | [bandejas] | [tamiz] | [larvas + frass] | |
| [f-larvas] | [tamiz] | [escaldado] | [larvas] | |
| [f-frass] | [tamiz] | [compost] | [frass] | |
| [f-reproduccion] | [tamiz] | [jaulas] | [pupas para reproducción] | |
| [f-harina] | [molino] | [bodega] | [harina / aceite] | |

Materiales con color propio en la animación: residuo crudo, impropios, sustrato, larvas, frass/abono, harina, aceite, agua de lavado/lixiviado, aire con olor y aire tratado.

## 7. Supuestos de proceso y cálculos
Rangos de la literatura (Eawag 2017 y otros), **para verificar con tu operación**:

| Parámetro | Valor | Unidad | Clase | Nota |
|---|---|---|---|---|
| Edad de las larvas al sembrar | [5] | días | S | larvas de 5 días (5-DOL) |
| Días de bioconversión | [12–14] | d | S | |
| Densidad de larvas | [~40 000 por m² de bandeja] | larvas/m² | S | a verificar |
| Ración diaria por larva | [~100] | mg/larva·d | S | a verificar |
| Humedad del sustrato | [70–80] | % | S | |
| Reducción de residuo | [50–70] | % base húmeda | S | |
| Eficiencia de bioconversión | [~15–25] | % base seca | S | biomasa de larva / residuo |
| Proteína en harina de larva | [~35–45] | % base seca | S | |
| Grasa en larva | [~25–35] | % base seca | S | |
| Larvas reservadas para reproducción | [~1–5] | % | S | |
| Temperatura de cría / humedad relativa | [27–30 °C / 60–70 %] | | S | |

**Cálculos que haré (C):**
- balance de masa diario, en kg húmedos y secos: residuo → impropios → sustrato → larvas → harina y aceite → frass → abono;
- número de bandejas y área necesaria;
- producción diaria de harina, aceite y abono;
- agua y energía (escaldado, secado, ventilación);
- residuo desviado del relleno y CO₂e evitado, con un factor de emisión marcado como S.

## 8. Guion de la película (50 s)
| Tiempo (s) | Qué muestra la cámara | Subtítulo |
|---|---|---|
| [0–4] | [Camión llega con residuos de la plaza de mercado] | [Cada día llegan X kg de residuos orgánicos que antes iban al relleno] |
| [4–9] | [Pesaje, clasificación, trituración] | [Se separa lo que no sirve y se prepara el alimento de las larvas] |
| [9–16] | [Jaulas de moscas, panales con huevos] | [Las moscas soldado no pican ni transmiten enfermedades: solo ponen huevos] |
| [16–30] | [Bandejas con larvas comiendo; el residuo se reduce] | [En 12 días las larvas reducen el residuo a la mitad] |
| [30–38] | [Tamizado: larvas por un lado, abono por otro] | |
| [38–46] | [Secado y molienda → harina; pilas de abono] | [Proteína para animales y abono para el campo] |
| [46–50] | [Plano general + productos saliendo hacia fincas] | [Del residuo al recurso] |

**Eventos para el registro**, por ejemplo: «Camión pesado: 2,4 t», «Lote 14 listo para cosecha», «Secador en marcha».

## 9. Corte vertical (≈18 s) y anuncios (≈11 s)
| Momento | Titular grande | Cifra |
|---|---|---|
| 1 · El problema | [X toneladas de residuo orgánico al mes iban al relleno] | |
| 2 · Las aliadas | [Las larvas de mosca soldado se lo comen] | |
| 3 · El resultado | [Proteína y abono hechos con residuos] | |
| 4 · Impacto | [Menos relleno, menos metano, más alimento] | |
| Tarjeta final | [Explora la planta en 3D] + [enlace] | |

## 10. Logística y personas
| Elemento | Detalle |
|---|---|
| Camiones de entrada | [nº por día, horario, capacidad] |
| Salidas de producto | [harina en sacos, abono a granel; frecuencia] |
| Rechazo / impropios | [a dónde se llevan] |
| Personal y turnos | [operarios de clasificación, cría, cosecha, procesamiento, laboratorio] |
| Bioseguridad | [mallas, control de escapes de moscas, higiene] |

## 11. Panel de impacto (4 cifras)
[Residuo desviado del relleno (t/mes) · Harina proteica (kg/d) · Abono producido (kg/d) · CO₂e evitado (t/año)]

## 12. Marca y estilo
| Campo | Valor |
|---|---|
| Nombre en pantalla | |
| Logo | [adjuntar, o propongo uno] |
| Colores | [p. ej. verde hoja y ámbar de la larva sobre la interfaz clara] |
| Tono | [pedagógico y amable; desmontar el prejuicio de «moscas = suciedad»] |

## 13. Entregables
- [ ] Página web 3D interactiva (escritorio y móvil)
- [ ] Película de 50 s
- [ ] Corte vertical para redes
- [ ] Anuncios cortos con sonido y enlace
- [ ] Texto para LinkedIn
- [ ] Documento de supuestos y balance de masa

## 14. Mensaje de inicio (para Claude Code)
> Quiero construir una planta de residuos orgánicos con mosca soldado negra usando el diseño «Agua Recuperada» de `Lucesdata/planta-de-lixiviados-1-por-segundo`. Adjunto esta plantilla rellena y los planos. Trabaja en un repositorio aparte, sin modificar la planta de lixiviados.
>
> Reglas:
> - respeta las clases B/S/C y no inventes datos;
> - el balance de masa va en kg húmedos y secos;
> - modela nuevos los equipos propios de BSF (jaulas, racks de bandejas con larvas animadas, tamiz, secador, molino, pilas de abono).
>
> Empieza por la planta 3D y la interfaz; después, la película y los cortes.
