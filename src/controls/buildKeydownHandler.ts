import { PerspectiveCamera, Vector3 } from "three";
import { Unit } from "../types";

export const buildKeydownHandler = (playerCharacter: Unit, camera: PerspectiveCamera) => {
  return (e: KeyboardEvent) => {
    const { code } = e;

    if(code === "ArrowUp" || code === "KeyW") {
      playerCharacter.moveY(1);
      camera.position.add(new Vector3(0, 0, 1));
    } else if(code === "ArrowRight" || code === "KeyD") {
      playerCharacter.moveX(1);
      camera.position.add(new Vector3(-1, 0, 0));
    } else if(code === "ArrowDown" || code === "KeyS") {
      playerCharacter.moveY(-1);
      camera.position.add(new Vector3(0, 0, -1));
    } else if(code === "ArrowLeft" || code === "KeyA") {
      playerCharacter.moveX(-1);
      camera.position.add(new Vector3(1, 0, 0));
    }
  }
}