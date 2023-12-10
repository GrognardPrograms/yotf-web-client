import { Unit } from "../types";
import { degToRad } from "../utils/geometry/degToRad";

const xRtnAdj = 2;
const yRtnAdj = 2;

const highViewBound = -0.375;
const lowViewBound = 0.375;

export const buildMouseHandler = (playerCharacter: Unit) => {
  return (e: MouseEvent) => {
    playerCharacter.rotateX(degToRad(e.movementY) / xRtnAdj);
    playerCharacter.rotateY(degToRad(e.movementX) / yRtnAdj);

    const x = playerCharacter.getRtnValues().x;
    const above = x < highViewBound;
    const below = x > lowViewBound;

    if(above) {
      const correction = highViewBound - x;
      playerCharacter.rotateX(correction);
    } else if(below) {
      const correction = lowViewBound - x;
      playerCharacter.rotateX(correction);
    }
  }
}