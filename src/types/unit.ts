import { Coordinate, CoordinateValues } from "./geometry/coordinate";

export class Unit {
  #position: Coordinate;

  constructor(positionIn: Coordinate) {
    this.#position = positionIn;
  }

  getX(): number {
    return this.#position.getX();
  }

  getY(): number {
    return this.#position.getY();
  }

  getZ(): number {
    return this.#position.getZ();
  }

  getCoordinateValues(): CoordinateValues {
    return this.#position.getCoordinateValues();
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