import { TileType } from "./tileType";

export class MapTile {
  #tileType: TileType;

  constructor(tileType: TileType) {
    this.#tileType = tileType;
  }

  getTileType(): TileType {
    return this.#tileType;
  }

  getMapTileValues(): MapTileValues {
    return {tileType: this.#tileType};
  }
}

export interface MapTileValues {
  tileType: TileType;
}