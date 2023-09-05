export class Rotation {
  #xRtn: number;
  #yRtn: number;
  #zRtn: number;

  constructor(xRtn: number, yRtn: number, zRtn: number) {
    this.#xRtn = xRtn;
    this.#yRtn = yRtn;
    this.#zRtn = zRtn;
  }

  getXRtnDeg() {
    return this.#xRtn;
  }

  getYRtnDeg() {
    return this.#yRtn;
  }

  getZRtnDeg() {
    return this.#zRtn;
  }

  getXRtnRad() {
    return this.#degToRad(this.#xRtn);
  }

  getYRtnRad() {
    return this.#degToRad(this.#yRtn);
  }

  getZRtnRad() {
    return this.#degToRad(this.#zRtn);
  }

  #degToRad(deg: number) {
    return deg * Math.PI / 180;
  }
}