# Balance de masa por etapa (C)

Cálculo con los supuestos de `src/plant/assumptions.ts` (Q = 1 L/s, 8 h/día = 28,8 m³/d). Generado con `massBalance()` y verificado en `npm test` (n). No son mediciones.

| Etapa | Código | DQO entrada (mg/L) | DQO salida (mg/L) | Remoción DQO (kg/d) | SST entrada (mg/L) | SST salida (mg/L) |
|---|---|---:|---:|---:|---:|---:|
| Homogeneización | TK-101 | 12.000 | 12.000 | 0,0 | 800 | 800 |
| Coagulación y floculación | TK-102/103 | 12.000 | 12.000 | 0,0 | 800 | 800 |
| Clarificador 1 (fisicoquímico) | CL-101 | 12.000 | 9.000 | 86,4 | 800 | 395 |
| UASB ×4 | R-201…204 | 9.000 | 2.700 | 181,4 | 395 | 395 |
| Clarificador 2 | CL-201 | 2.700 | 2.700 | 0,0 | 395 | 248 |
| MBBR | R-301 | 2.700 | 1.350 | 38,9 | 248 | 174 |
| Filtro fitopedológico | FF-401 | 1.350 | 945 | 11,7 | 174 | 64 |
| **Total** | | **12.000** | **945** | **318,4** | **800** | **64** |

Remociones supuestas (S): fisicoquímico 25 %, UASB 70 %, MBBR 50 %, filtro 30 % de la DQO que llega a cada etapa. SST: remoción global 92 % (S), repartida 55 % CL-101 · 20 % CL-201 · 10 % MBBR · 15 % filtro.
