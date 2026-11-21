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
