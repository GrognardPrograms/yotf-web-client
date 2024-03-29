import { Coordinate, Rotation } from "../../../../geometry";

export class Entity {
  #position: Coordinate;
  #rotation: Rotation;

  constructor(posIn: Coordinate, rtnIn: Rotation) {
    this.#position = posIn;
    this.#rotation = rtnIn;
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

  getXRtn(): number {
    return this.#rotation.getXRtn();
  }

  getYRtn(): number {
    return this.#rotation.getYRtn();
  }

  getZRtn(): number {
    return this.#rotation.getZRtn();
  }

  moveX(delta: number): void {
    const x = this.#position.getX();
    this.#position.setX(x + delta);
  }

  moveY(delta: number): void {
    const y = this.#position.getY();
    this.#position.setY(y + delta);
  }

  moveZ(delta: number): void {
    const z = this.#position.getZ();
    this.#position.setZ(z + delta);
  }

  rotateX(delta: number): void {
    const x = this.#rotation.getXRtn();
    this.#rotation.setXRtn(x + delta);
  }

  rotateY(delta: number): void {
    const y = this.#rotation.getYRtn();
    this.#rotation.setYRtn(y + delta);
  }

  rotateZ(delta: number): void {
    const z = this.#rotation.getZRtn();
    this.#rotation.setZRtn(z + delta);
  }
}