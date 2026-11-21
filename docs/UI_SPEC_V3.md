# Interfaz v3.0 · Light Industrial Interface (rama `panel-nuevo`)

Rediseño **solo de presentación**: no cambian geometría, materiales, cálculos, simulación, guion, cámara ni selección 3D.

## Auditoría: límites entre interfaz y simulador
| Pieza | Archivo | ¿Cambia? |
|---|---|---|
| Canvas, renderer y bucle | `src/main.ts`, `src/scene/*` | No. Solo `clearSelection` y que la miniatura se dibuje si el inspector está visible |
| Cámara (encuadre, región segura `SAFE_PX`) | `src/motion/cameraStory.ts` | No |
| Selección 3D (raycast) | `src/main.ts` | No |
| Estado de reproducción y simulación | `src/main.ts`, `src/sim/*`, `src/motion/timeline.ts` | No |
| Cálculos e indicadores | `src/plant/assumptions.ts`, `src/sim/selectors.ts`, `src/ui/impact.ts` | No (solo se leen) |
| Interfaz | `src/ui/shell.ts` (nuevo), `overlay.ts`, `detailPanel.ts`, `styles.ts` | Sí |

## Componentes (capas HTML sobre el canvas 1920×1080 escalado)
- **Header** blanco de 56 px:
  - izquierda: logo, título y descriptor;
  - centro: Planta · Operación · Análisis · Escenarios · Documentación;
  - derecha: estado, tiempo, reproducir y configuración.
  - *Escenarios* está deshabilitado porque este simulador no tiene escenarios definidos.
- **Rail** de 52 px: muestra u oculta Planta (panel de operación), Proceso (etapas), Equipos (inspector), Análisis, Eventos, Documentación y Configuración. Tiene tooltips y foco por teclado.
- **Panel de operación**: un solo panel con tres secciones (operación, estado general, impacto); se puede ocultar.
- **Inspector**:
  - encabezado con nombre, código, estado y cierre;
  - miniatura existente (segunda pasada del mismo renderer);
  - pestañas General · Diseño · Operación.
  - No hay pestaña de Mantenimiento porque no hay datos.
  - Las dimensiones vienen del modelo 3D y se marcan como S.
- **Toolbar 3D**: vista narrativa, vista general, capas, pantalla completa y ocultar interfaz.
- **Timeline** de dos filas:
  - fila 1: reproducir, reiniciar, nombre, tiempo, progreso con arrastre, velocidad ×0,5/×1/×2 y bucle;
  - fila 2: las 9 etapas, que se pueden pulsar.
  - La etapa en curso es azul sólido, las completadas azul suave y las pendientes gris. Un punto verde indica, por separado, que hay equipos en funcionamiento.
- **Registro de eventos**: oculto por defecto; muestra hora, evento, severidad y origen («Simulado»).
- **Documentación**: clases B/S/C y tabla de supuestos y cálculos por equipo, tomada de `UNIT_FACTS`.
- **Modo inmersivo** (botón o tecla `I`; `Esc` para salir): deja solo la toolbar y el timeline compacto.
- Animaciones de 120–240 ms; con `prefers-reduced-motion` se desactivan; en modo película no hay transiciones.

## Verificación (misma resolución, cámara, tiempo y parámetros)
- Canvas de 1920×1080 antes y después, con las mismas distancias de cámara en t = 8, 21, 36 y 48 s (44,477 · 37,558 · 40,109 · 117,536).
- `npm test` 13/13; `npm run test:browser` (g–k) pasa con los selectores de los paneles nuevos.
- Interactivo:
  - el clic sobre la planta selecciona el equipo (los paneles no capturan eventos fuera de su superficie);
  - las pestañas, la toolbar, las capas, el modo inmersivo y el salto por etapas funcionan sin errores de consola.

## Ajuste 1 · panel compacto, móvil y baja gama
- **Panel de operación:**
  - más angosto (204 px en lugar de 240);
  - filas de una línea; los subtítulos quedan en el tooltip, salvo el de logística;
  - impacto en un bloque 2×2 compacto.
- **Calidad adaptable** (`src/render/quality.ts`):
  - Nivel «low» automático en táctil, pantallas pequeñas, ≤4 núcleos o ≤4 GB de RAM, o forzado con `?q=low|high`.
  - En «low»: sin antialias, sombras de 1024 px PCF (en lugar de 4096 PCFSoft) y resolución máxima de 1,25×.
  - Resolución dinámica: la resolución baja o sube entre 0,6× y el tope para sostener unos 30 fps.
  - No cambian geometría, cámara, simulación ni cifras. La película siempre usa calidad alta.
- **Interfaz compacta** (escenario < 1100 px; `src/ui/mobile.ts`):
  - barra superior con título, tiempo, reproducir e «Info»;
  - barra inferior con la etapa actual, anterior/siguiente, vista general, subtítulo, progreso con arrastre y las 9 etapas;
  - hoja «Info» con la ficha del equipo tocado, la operación y el impacto (con clases B/S/C).
  - En vertical las barras ocupan las franjas libres alrededor del escenario 16:9 y aparece la sugerencia de girar el teléfono.
- **Táctil:** un dedo desplaza la vista, dos dedos hacen zoom (pellizco) y un toque selecciona un equipo.

## Ajuste 2 · móvil a pantalla completa
- **Pantalla completa:** en la interfaz compacta la planta ocupa toda la pantalla, no una franja 16:9. El encuadre usa la forma real del teléfono y deja libres las barras: `setFraming(W/H, región libre)`, el mismo mecanismo del corte vertical. La cámara y su dirección son las mismas.
- **Resolución por presupuesto de píxeles:** 1,4 Mpx en calidad baja y 3,6 Mpx en alta, con un mínimo de 1× y un máximo de 2×. En un teléfono de 3× se renderiza a unos 2×, de modo que se ve nítido sin el costo de una pantalla de escritorio. La resolución dinámica no baja del 60 % del tope.
