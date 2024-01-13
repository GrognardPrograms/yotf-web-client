import { Camera, Vector3 } from "three";

import { Unit } from "./unit";
import { Rotation } from "../../../utils/geometry/types/rotation";
import { Coordinate } from "../../../utils/geometry/types/coordinate";

export class Player extends Unit {
  #camera

  constructor(posIn: Coordinate, rtnIn: Rotation, camIn: Camera) {
    super(posIn, rtnIn);

    this.#camera = camIn;
  }

  moveX(delta: number): void {
    super.moveX(delta);

    this.#camera.position.add(new Vector3(-delta, 0, 0));
  }

  moveY(delta: number): void {
    super.moveY(delta);

    this.#camera.position.add(new Vector3(0, 0, delta));
  }

  moveZ(delta: number): void {
    super.moveZ(delta);
  }

  rotateX(delta: number): void {
    super.rotateX(delta);

    const { x: camRtnX, y: camRtnY, z: camRtnZ } = this.#camera.rotation;
    this.#camera.rotation.set(camRtnX - delta, camRtnY, camRtnZ, 'YXZ');
  }

  rotateY(delta: number): void {
    super.rotateY(delta);
    
    const { x: camRtnX, y: camRtnY, z: camRtnZ } = this.#camera.rotation;
    this.#camera.rotation.set(camRtnX, camRtnY - delta, camRtnZ, 'YXZ');
  }

  rotateZ(delta: number): void {
    super.rotateZ(delta);
    
    const { x: camRtnX, y: camRtnY, z: camRtnZ } = this.#camera.rotation;
    this.#camera.rotation.set(camRtnX, camRtnY, camRtnZ - delta, 'YXZ');
  }
}