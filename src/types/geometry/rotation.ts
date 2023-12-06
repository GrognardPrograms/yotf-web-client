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
}

export interface RotationSnapshot {
  x: number;
  y: number;
  z: number;
}