export class Coordinate {
  #x: number;
  #y: number;
  #z: number;

  constructor(x: number, y: number, z: number) {
    this.#x = x;
    this.#y = y;
    this.#z = z;
  }

  getX() {
    return this.#x;
  }

  getY() {
    return this.#y;
  }

  getZ() {
    return this.#z;
  }
}