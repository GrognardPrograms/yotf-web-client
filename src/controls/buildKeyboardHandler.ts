import { ControlState } from "./types";

export const buildKeyboardHandler = (state: ControlState) => {
  return (e: KeyboardEvent) => {
    const { code, type } = e;

    if(code === "ArrowUp" || code === "KeyW") {
      if(type === 'keydown') {
        state.setForward(true);
      } else if(type === 'keyup') {
        state.setForward(false);
      }
    } else if(code === "ArrowRight" || code === "KeyD") {
      if(type === 'keydown') {
        state.setRight(true);
      } else if(type === 'keyup') {
        state.setRight(false);
      }
    } else if(code === "ArrowDown" || code === "KeyS") {
      if(type === 'keydown') {
        state.setBackward(true);
      } else if(type === 'keyup') {
        state.setBackward(false);
      }
    } else if(code === "ArrowLeft" || code === "KeyA") {
      if(type === 'keydown') {
        state.setLeft(true);
      } else if(type === 'keyup') {
        state.setLeft(false);
      }
    }
  }
}