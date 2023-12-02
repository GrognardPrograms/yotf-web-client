import { PerspectiveCamera, Vector3 } from "three";
import { Unit } from "../types/unit";

export const buildKeydownHandler = (playerCharacter: Unit, camera: PerspectiveCamera) => {
  return (e: KeyboardEvent) => {
    if(e.code === "ArrowUp") {
      playerCharacter.moveY(1);
      camera.position.add(new Vector3(0, 0, 1));
    } else if(e.code === "ArrowRight") {
      playerCharacter.moveX(1);
      camera.position.add(new Vector3(-1, 0, 0));
    } else if(e.code === "ArrowDown") {
      playerCharacter.moveY(-1);
      camera.position.add(new Vector3(0, 0, -1));
    } else if(e.code === "ArrowLeft") {
      playerCharacter.moveX(-1);
      camera.position.add(new Vector3(1, 0, 0));
    }
  }
}