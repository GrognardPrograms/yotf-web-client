import { Player } from "../../../gameplay";

export const moveCharacter = (playerChar: Player, rtn: number, speed: number): void => {
  playerChar.moveX(Math.sin(rtn) * speed);
  playerChar.moveY(Math.cos(rtn) * speed);
}