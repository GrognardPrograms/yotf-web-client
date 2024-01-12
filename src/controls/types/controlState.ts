export class ControlState {
  #forward: boolean;
  #right: boolean;
  #backward: boolean;
  #left: boolean;

  constructor() {
    this.#forward = false;
    this.#right = false;
    this.#backward = false;
    this.#left = false;
  }

  getForward(): boolean {
    return this.#forward;
  }

  getRight(): boolean {
    return this.#right;
  }

  getBackward(): boolean {
    return this.#backward;
  }

  getLeft(): boolean {
    return this.#left;
  }

  setForward(forward: boolean): void {
    this.#forward = forward;
  }

  setRight(right: boolean): void {
    this.#right = right;
  }

  setBackward(backward: boolean): void {
    this.#backward = backward;
  }

  setLeft(left: boolean): void {
    this.#left = left;
  }
}