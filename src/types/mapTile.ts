import { TileType } from "./tileType";

export class MapTile {
  #tileType: TileType;

  constructor(tileType: TileType) {
    this.#tileType = tileType;
  }

  getTileType() {
    return this.#tileType;
  }

  clone() {
    return new MapTile(this.#tileType);
  }
}