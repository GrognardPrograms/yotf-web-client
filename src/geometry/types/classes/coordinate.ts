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

  setX(value: number): void {
    this.#x = value;
  }

  setY(value: number): void {
    this.#y = value;
  }

  setZ(value: number): void {
    this.#z = value;
  }
}