import { Camera, Vector3 } from "three";

import { Unit } from "./unit";
import { Rotation } from "../geometry/rotation";
import { Coordinate } from "../geometry/coordinate";

const xRtnAdj = 2;
const yRtnAdj = 2;
const zRtnAdj = 1;

export class Player extends Unit {
  #camera

  constructor(positionIn: Coordinate, rotationIn: Rotation, cameraIn: Camera) {
    super(positionIn, rotationIn);

    this.#camera = cameraIn;
  }

  moveX(delta: number): void {
    super.moveX(delta);

    if(delta > 0) {
      this.#camera.position.add(new Vector3(-1, 0, 0));
    } else {
      this.#camera.position.add(new Vector3(1, 0, 0));
    }
  }

  moveY(delta: number): void {
    super.moveY(delta);

    if(delta > 0) {
      this.#camera.position.add(new Vector3(0, 0, 1));
    } else {
      this.#camera.position.add(new Vector3(0, 0, -1));
    }
  }

  moveZ(delta: number): void {
    super.moveZ(delta);
  }

  rotateX(delta: number): void {
    super.rotateX(delta);
    camera and entity rotation are desyncing due to the check in mouse handler checking rotations and the camera being set here
    const {x: cameraX, y: cameraY, z: cameraZ} = this.#camera.rotation;

    const tempCameraX = cameraX - delta / xRtnAdj;
    const newCameraX = Math.max(Math.min(tempCameraX, 0.35), -0.35);
    this.#camera.rotation.set(newCameraX, cameraY, cameraZ, 'YXZ');
  }

  rotateY(delta: number): void {
    super.rotateY(delta);
    
    const {x: cameraX, y: cameraY, z: cameraZ} = this.#camera.rotation;
    this.#camera.rotation.set(cameraX, cameraY - delta / yRtnAdj, cameraZ, 'YXZ');
  }

  rotateZ(delta: number): void {
    super.rotateZ(delta);
    
    const {x: cameraX, y: cameraY, z: cameraZ} = this.#camera.rotation;
    this.#camera.rotation.set(cameraX, cameraY, cameraZ - delta / zRtnAdj, 'YXZ');
  }
}