import { Player } from "../../gameplay";
import { degToRad } from "../../geometry";

import {
  highViewBound,
  lowViewBound,
  xRtnAdj,
  yRtnAdj
} from "../constants";

import { MouseHandler } from "../types";

export const buildMouseHandler = (playerCharacter: Player): MouseHandler => {
  return (e: MouseEvent) => {
    playerCharacter.rotateX(degToRad(e.movementY) / xRtnAdj);
    playerCharacter.rotateY(degToRad(e.movementX) / yRtnAdj);

    const x = playerCharacter.getXRtn();

    if(x < highViewBound) {
      const correction = highViewBound - x;
      playerCharacter.rotateX(correction);
    } else if(x > lowViewBound) {
      const correction = lowViewBound - x;
      playerCharacter.rotateX(correction);
    }
  }
}