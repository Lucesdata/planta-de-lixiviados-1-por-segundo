/**
 * Rig de cámara de dirección fija: la orientación se fija una vez y NUNCA cambia.
 * Solo se mueven el objetivo (pan), la distancia (dolly) y el fov (zoom leve).
 */
import * as THREE from 'three';
import type { CameraShot } from '../sim/state';
import { CAM_BASIS, ASPECT } from '../motion/cameraStory';

export const FOV_MIN = 24;
export const FOV_MAX = 32;

export interface CameraRig {
  camera: THREE.PerspectiveCamera;
  /** Último plano aplicado. */
  shot: CameraShot;
  apply(shot: CameraShot): void;
  /** Desplaza el objetivo en el plano del suelo según un arrastre en píxeles del escenario 1920×1080. */
  panPixels(dx: number, dy: number, stageH: number): void;
  dolly(factor: number): void;
  setAspect(aspect: number): void;
}

export function createCameraRig(): CameraRig {
  const camera = new THREE.PerspectiveCamera(30, ASPECT, 0.5, 600);
  const dir = new THREE.Vector3(...CAM_BASIS.dir);
  // Orientación constante: mirar a lo largo de -dir con Y arriba.
  camera.up.set(0, 1, 0);
  camera.position.copy(dir);
  camera.lookAt(0, 0, 0);
  const fixedQuat = camera.quaternion.clone();

  const rig: CameraRig = {
    camera,
    shot: { target: [0, 0, 0], distance: 40, fov: 30 },
    apply(shot) {
      rig.shot = { target: [...shot.target] as [number, number, number], distance: shot.distance, fov: shot.fov };
      const fov = Math.min(FOV_MAX, Math.max(FOV_MIN, shot.fov));
      camera.position.set(
        shot.target[0] + dir.x * shot.distance,
        shot.target[1] + dir.y * shot.distance,
        shot.target[2] + dir.z * shot.distance,
      );
      camera.quaternion.copy(fixedQuat);
      if (camera.fov !== fov) { camera.fov = fov; camera.updateProjectionMatrix(); }
      camera.updateMatrixWorld(true);
    },
    panPixels(dx, dy, stageH) {
      const s = rig.shot;
      const worldPerPx = (2 * s.distance * Math.tan((s.fov * Math.PI) / 360)) / stageH;
      // Pan sobre el suelo: derecha de cámara y «adelante» proyectado en XZ.
      const r = CAM_BASIS.right;
      const f = new THREE.Vector3(CAM_BASIS.fwd[0], 0, CAM_BASIS.fwd[2]).normalize();
      const k = worldPerPx;
      const ky = k / Math.max(0.3, Math.sin(Math.asin(CAM_BASIS.dir[1])));
      rig.apply({
        target: [s.target[0] - r[0] * dx * k + f.x * dy * ky, s.target[1], s.target[2] - r[2] * dx * k + f.z * dy * ky],
        distance: s.distance, fov: s.fov,
      });
    },
    dolly(factor) {
      const s = rig.shot;
      rig.apply({ target: s.target, distance: Math.min(140, Math.max(6, s.distance * factor)), fov: s.fov });
    },
    setAspect(aspect) {
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
    },
  };
  rig.apply(rig.shot);
  return rig;
}
