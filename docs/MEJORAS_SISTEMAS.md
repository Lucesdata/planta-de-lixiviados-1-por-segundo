# Mejoras de sistemas (rama `mejoras-sistemas`)

Mismo criterio que la UASB y el MBBR (D-60): notas técnicas discretas mientras la etapa está en foco, detalle 3D como hipótesis visual y cifras con su clase **B** (brief), **S** (supuesto) o **C** (cálculo).

## Clarificadores CL-101 y CL-201
- **3D:**
  - vertedero dentado triangular (36 dientes) en el borde de la canaleta perimetral;
  - deflector de espumas;
  - baranda del puente.
  - Ya existían la campana central, la canaleta, el cono y la purga.
- **Notas:**
  - campana central de alimentación;
  - vertedero con 0,64 m³/m·h (C: Q / perímetro de la canaleta de Ø 1,8 m);
  - cono de 40° (S, geometría del modelo) con carga superficial de 0,95 m/h (C);
  - purga de lodo: 17,3 kg SS/d en CL-101 (C) y 2,0 kg SS/d en CL-201 (S).
- **Ficha:** se añade la carga sobre el vertedero (C).

## Filtro fitopedológico FF-401
- **3D:**
  - corte didáctico del lecho en el muro sur con tres capas supuestas: grava 0,25, arena 0,20 y suelo 0,27 m (suman los 0,72 m del lecho del modelo);
  - dren inferior perforado;
  - salida con tubo de nivel regulable;
  - dos piezómetros de observación.
- **Notas:**
  - distribución perforada con 0,64 m/d (C);
  - vegetación *Typha* (enea) (S) con remoción de DQO del 30 % (S);
  - capas del lecho (S);
  - dren inferior;
  - salida con DQO de 945 mg/L (C).
- **Ficha:** se añaden la remoción de DQO (S) y la DQO a la salida (C).

Nuevos supuestos en `assumptions.ts`: `filterGravel_m`, `filterSand_m`, `filterSoil_m` y `filterPlant`. Nuevos cálculos: `clarWeir_m3mh` y `clarConeAngle_deg`.

Verificación: `npm test` 13/13 y `npm run test:browser` (g–k) en verde.

## Fase 9 · Biogás, lodos, pretratamiento y balance
La geometría 3D de estos equipos ya era detallada (sello hidráulico, arrestallamas, pote de condensado, rastra del espesador, lecho con drenes, agitadores). Se añaden notas, cifras y el balance.
- **Pretratamiento:**
  - TK-101: ecualización de 20 m³ (B) con TRH de 5,6 h (C), y retorno del drenado del lecho de secado.
  - TK-102: mezcla rápida con G = 300 s⁻¹ (S) y P = G²·μ·V = 80 W (C); FeCl₃ a 300 mg/L (S), que da 1,90 L/h de solución (C).
  - TK-103: mezcla lenta con G = 40 s⁻¹ (S), TRH de 17 min (C) y 1,4 W (C); polímero a 2 mg/L (S), que da 7,2 L/h al 0,1 % (C).
  - Supuestos nuevos: `coagG_s`, `flocG_s` y `waterMu_Pas` (viscosidad del agua a unos 25 °C).
- **Lodos:**
  - Espesador ES-101: carga de sólidos de 6,3 kg SS/m²·d (C), espesado al 5 % (S).
  - Lecho de secado LS-101: 28 m², torta al 25 % (S), retiro cada 40 días (C) y carga del lecho de 370 kg SS/m²·año (C).
  - Esa carga del lecho supera los valores habituales de diseño (≈100–200 kg/m²·año para lechos descubiertos). Es una señal del cálculo con los supuestos actuales, no se ocultó: queda como punto de revisión del ensayo.
- **Biogás (QB-201):** la antorcha trabaja al 81 % de su capacidad (C), con 65 % de CH₄ (S). Notas: pote de condensado, sello hidráulico y arrestallamas.
- **Balance de masa por etapa:** función `massBalance()` en `assumptions.ts`. Tabla en `docs/BALANCE.md`. Comprobación nueva `(n)` en `npm test`: el balance es monótono, encadenado y coherente con la DQO final, los SST finales y la carga evitada del panel de impacto.

Verificación: `npm test` 14/14 y `npm run test:browser` (g–k) en verde.
