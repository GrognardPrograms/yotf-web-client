import { Player } from "../../gameplay";

import { speed, tickTime } from "../constants";
import { moveCharacter } from "./utils";

import { ControlStateReader } from "../types";

export const buildCtrlLoop = (state: ControlStateReader, playerCharacter: Player) => {
  let run = true;

  const ctrlLoop = () => {
    const playerRtn = playerCharacter.getYRtn();

    if(state.getForward()) {
      moveCharacter(playerCharacter, playerRtn, speed);
    } else if(state.getRight()) {
      const modRtn = playerRtn + Math.PI/2;

      moveCharacter(playerCharacter, modRtn, speed);
    } else if(state.getBackward()) {
      const modRtn = playerRtn + Math.PI;

      moveCharacter(playerCharacter, modRtn, speed);
    } else if(state.getLeft()) {
      const modRtn = playerRtn - Math.PI/2;

      moveCharacter(playerCharacter, modRtn, speed);
    }

    run && setTimeout(ctrlLoop, tickTime);
  }

  const killLoop = () => {
    run = false;
  }

  return { ctrlLoop, killLoop };
}