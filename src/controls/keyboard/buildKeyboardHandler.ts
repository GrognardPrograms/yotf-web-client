import { ControlState, KeyboardHandler } from "../types";

export const buildKeyboardHandler = (state: ControlState): KeyboardHandler => {
  return (e: KeyboardEvent) => {
    const { code, type } = e;
    const isPressed = type === 'keydown';

    if(code === "ArrowUp" || code === "KeyW") {
      state.setForward(isPressed);
    } else if(code === "ArrowRight" || code === "KeyD") {
      state.setRight(isPressed);
    } else if(code === "ArrowDown" || code === "KeyS") {
      state.setBackward(isPressed);
    } else if(code === "ArrowLeft" || code === "KeyA") {
      state.setLeft(isPressed);
    }
  }
}