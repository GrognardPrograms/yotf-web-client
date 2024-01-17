import { TileType } from "./enums";

export interface MapTileReader {
  getTileType: () => TileType
}