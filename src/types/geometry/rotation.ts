export class Rotation {
  #xRtn: number;
  #yRtn: number;
  #zRtn: number;

  constructor(xRtn: number, yRtn: number, zRtn: number) {
    this.#xRtn = xRtn;
    this.#yRtn = yRtn;
    this.#zRtn = zRtn;
  }

  getXRtnDeg(): number {
    return this.#xRtn;
  }

  getYRtnDeg(): number {
    return this.#yRtn;
  }

  getZRtnDeg(): number {
    return this.#zRtn;
  }

  getRtnDegValues(): RotationSnapshot {
    return { x: this.#xRtn, y: this.#yRtn, z: this.#zRtn };
  }

  getXRtnRad(): number {
    return this.#degToRad(this.#xRtn);
  }

  getYRtnRad(): number {
    return this.#degToRad(this.#yRtn);
  }

  getZRtnRad(): number {
    return this.#degToRad(this.#zRtn);
  }

  getRtnRadValues(): RotationSnapshot {
    return {
      x: this.getXRtnRad(),
      y: this.getYRtnRad(),
      z: this.getZRtnRad()
    };
  }

  #degToRad(deg: number) {
    return deg * Math.PI / 180;
  }
}

export interface RotationSnapshot {
  x: number;
  y: number;
  z: number;
}