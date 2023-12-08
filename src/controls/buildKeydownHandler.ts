import { Unit } from "../types";

export const buildKeydownHandler = (playerCharacter: Unit) => {
  return (e: KeyboardEvent) => {
    const { code } = e;

    if(code === "ArrowUp" || code === "KeyW") {
      playerCharacter.moveY(1);
    } else if(code === "ArrowRight" || code === "KeyD") {
      playerCharacter.moveX(1);
    } else if(code === "ArrowDown" || code === "KeyS") {
      playerCharacter.moveY(-1);
    } else if(code === "ArrowLeft" || code === "KeyA") {
      playerCharacter.moveX(-1);
    }
  }
}