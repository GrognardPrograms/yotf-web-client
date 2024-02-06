import { Player } from "../../gameplay";

import { speed, tickTime } from "../constants";
import { moveCharacter } from "./utils";

import { ControlStateReader } from "../types";
import { hasCollided } from "../../gameplay/hasCollided";

export const buildCtrlLoop = (state: ControlStateReader, playerCharacter: Player) => {
  let run = true;

  const ctrlLoop = () => {
    const playerRtn = playerCharacter.getYRtn();

    const isMoving = state.getForward() || state.getBackward() || state.getRight() || state.getLeft();
    let directions = [];

    if(state.getForward()) {
      directions.push(0);
    } else if(state.getBackward()) {
      directions.push(Math.PI)
    }
    
    if(state.getRight() || state.getLeft()) {
      directions.push(Math.PI/2);
    }

    if(isMoving) {
      const rtnModCoef = state.getLeft() ? -1 : 1;
      const rtnMod = directions.reduce((prev, next) => prev + next, 0) / directions.length;
      
      moveCharacter(playerCharacter, playerRtn + (rtnModCoef * rtnMod), speed);
    }

    run && setTimeout(ctrlLoop, tickTime);
  }

  const killLoop = () => {
    run = false;
  }

  return { ctrlLoop, killLoop };
}