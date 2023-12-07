export class Coordinate {
  #x: number;
  #y: number;
  #z: number;

  constructor(x: number, y: number, z: number) {
    this.#x = x;
    this.#y = y;
    this.#z = z;
  }

  getX(): number {
    return this.#x;
  }

  getY(): number {
    return this.#y;
  }

  getZ(): number {
    return this.#z;
  }

  getCoordinateValues(): CoordinateSnapshot {
    return { x: this.#x, y: this.#y, z: this.#z };
  }

  setX(value: number): void {
    this.#x = value;
  }

  setY(value: number): void {
    this.#z = value;
  }

  setZ(value: number): void {
    this.#z = value;
  }
}

export interface CoordinateSnapshot {
  x: number,
  y: number,
  z: number
}