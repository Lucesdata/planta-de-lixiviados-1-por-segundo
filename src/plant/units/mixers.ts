/**
 * Piezas comunes de agitación: puente sobre el tanque, motorreductor vertical y eje con collar giratorio.
 */
import * as THREE from 'three';
import { MAT } from '../../scene/materials';
import { Batcher, cyl, rbox, T } from './common';

/** Puente + motorreductor vertical en (0, yTop, 0). Devuelve el grupo giratorio (collar del eje). */
export function addAgitator(b: Batcher, root: THREE.Object3D, span: number, yTop: number, yShaftEnd: number, scale = 1): THREE.Group {
  const s = scale;
  b.add(rbox(span, 0.09 * s, 0.16 * s, 0.02), MAT.steelBlue, T(0, yTop + 0.045 * s, 0));
  b.add(rbox(0.24 * s, 0.16 * s, 0.24 * s, 0.03), MAT.motor, T(0, yTop + 0.17 * s, 0));          // reductor
  b.add(cyl(0.11 * s, 0.3 * s, 24), MAT.motor, T(0, yTop + 0.4 * s, 0));                         // motor
  b.add(cyl(0.115 * s, 0.05 * s, 24, 0.09 * s), MAT.steelDark, T(0, yTop + 0.575 * s, 0));       // tapa ventilador
  b.add(rbox(0.09 * s, 0.07 * s, 0.07 * s, 0.015), MAT.steelDark, T(0.12 * s, yTop + 0.45 * s, 0)); // caja de bornes
  b.rod(new THREE.Vector3(0, yTop, 0), new THREE.Vector3(0, yShaftEnd, 0), 0.025 * s, MAT.steel, 10);
  const rot = new THREE.Group();
  rot.position.y = yTop - 0.06 * s;
  const collar = new THREE.Mesh(cyl(0.055 * s, 0.07 * s, 16), MAT.steel);
  const mark = new THREE.Mesh(rbox(0.03 * s, 0.072 * s, 0.03 * s, 0.006), MAT.rail);
  mark.position.x = 0.055 * s;
  rot.add(collar, mark);
  collar.castShadow = true;
  root.add(rot);
  return rot;
}
