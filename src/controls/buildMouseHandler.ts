import { Unit } from "../types";
import { degToRad } from "../utils/geometry/degToRad";

export const buildMouseHandler = (playerCharacter: Unit) => {
  return (e: MouseEvent) => {
    const { x } = playerCharacter.getRtnValues();
    //playerCharacter.rotateY(degToRad(e.movementX));

    console.log("x: " + x);
    console.log("e.movementY: " + e.movementY);

    if ((
      x > -0.35 || e.movementY > 0
    ) && (
      x < 0.35 || e.movementY < 0
    )) {
      playerCharacter.rotateX(degToRad(e.movementY));
    }
  }
}