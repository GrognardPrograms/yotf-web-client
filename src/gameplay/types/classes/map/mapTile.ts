import { TileType } from "../../enums";

export class MapTile {
  #tileType: TileType;

  constructor(tileType: TileType) {
    this.#tileType = tileType;
  }

  getTileType(): TileType {
    return this.#tileType;
  }
}