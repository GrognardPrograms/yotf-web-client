export class Rotation {
  #xRtn: number;
  #yRtn: number;
  #zRtn: number;

  constructor(xRtn: number, yRtn: number, zRtn: number) {
    this.#xRtn = xRtn;
    this.#yRtn = yRtn;
    this.#zRtn = zRtn;
  }

  getXRtn(): number {
    return this.#xRtn;
  }

  getYRtn(): number {
    return this.#yRtn;
  }

  getZRtn(): number {
    return this.#zRtn;
  }

  getRtnValues(): RotationSnapshot {
    return {
      x: this.#xRtn,
      y: this.#yRtn,
      z: this.#zRtn
    };
  }

  setXRtn(value: number): void {
    this.#xRtn = value;
  }

  setYRtn(value: number): void {
    this.#yRtn = value;
  }

  setZRtn(value: number): void {
    this.#zRtn = value;
  }
}

export interface RotationSnapshot {
  x: number;
  y: number;
  z: number;
}