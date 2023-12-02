import { Rotation, RotationValues } from "../geometry/rotation";
import { Coordinate, CoordinateValues } from "../geometry/coordinate";

export class Entity {
  #position: Coordinate;
  #rotation: Rotation;

  constructor(positionIn: Coordinate, rotationIn: Rotation) {
    this.#position = positionIn;
    this.#rotation = rotationIn;
  }

  getXPos(): number {
    return this.#position.getX();
  }

  getYPos(): number {
    return this.#position.getY();
  }

  getZPos(): number {
    return this.#position.getZ();
  }

  getCoordinateValues(): CoordinateValues {
    return this.#position.getCoordinateValues();
  }

  getXRtnDeg(): number {
    return this.#rotation.getXRtnDeg();
  }

  getYRtnDeg(): number {
    return this.#rotation.getYRtnDeg();
  }

  getZRtnDeg(): number {
    return this.#rotation.getZRtnDeg();
  }

  getRtnDegValues(): CoordinateValues {
    return this.#rotation.getRtnDegValues();
  }

  getXRtnRad(): number {
    return this.#rotation.getXRtnRad();
  }

  getYRtnRad(): number {
    return this.#rotation.getYRtnRad();
  }

  getZRtnRad(): number {
    return this.#rotation.getZRtnRad();
  }

  getRtnRadValues(): RotationValues {
    return this.#rotation.getRtnRadValues();
  }

  moveX(delta: number): void {
    const x = this.#position.getX();
    this.#position.setX(x + delta);
  }

  moveY(delta: number): void {
    const y= this.#position.getY();
    this.#position.setY(y + delta);
  }

  moveZ(delta: number): void {
    const z = this.#position.getZ();
    this.#position.setZ(z + delta);
  }
}