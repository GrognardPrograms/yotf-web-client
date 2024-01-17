import { Player } from "../gameplay";
import { ControlStateReader } from "./types";

export const buildCtrlLoop = (state: ControlStateReader, playerCharacter: Player) => {
  let run = true;

  const speed = 1/24;

  const ctrlLoop = () => {
    const playerRtn = playerCharacter.getYRtn();

    if(state.getForward()) {
      playerCharacter.moveX(Math.sin(playerRtn) * speed);
      playerCharacter.moveY(Math.cos(playerRtn) * speed);
    } else if(state.getRight()) {
      const modRtn = playerRtn + Math.PI/2;

      playerCharacter.moveX(Math.sin(modRtn) * speed);
      playerCharacter.moveY(Math.cos(modRtn) * speed);
    } else if(state.getBackward()) {
      const modRtn = playerRtn + Math.PI;

      playerCharacter.moveX(Math.sin(modRtn) * speed);
      playerCharacter.moveY(Math.cos(modRtn) * speed);
    } else if(state.getLeft()) {
      const modRtn = playerRtn - Math.PI/2;

      playerCharacter.moveX(Math.sin(modRtn) * speed);
      playerCharacter.moveY(Math.cos(modRtn) * speed);
    }

    run && setTimeout(ctrlLoop, 100/6);
  }

  const killLoop = () => {
    run = false;
  }

  return { ctrlLoop, killLoop };
}