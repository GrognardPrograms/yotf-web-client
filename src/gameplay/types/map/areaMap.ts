import { Coordinate } from "../../../utils/geometry/types/coordinate";
import { MapTile, MapTileValues } from "./mapTile";
import { TileType } from "./tileType";

export class AreaMap {
  #width: number;
  #height: number;
  #mapGrid: Array<Array<MapTile>>;

  constructor(width: number, height: number, wallList: Array<Coordinate>) {
    this.#width = width;
    this.#height = height;
    this.#mapGrid = [];

    for(let x = 0; x < width; x++) {
      this.#mapGrid.push([]);

      for(let y = 0; y < height; y++) {
        this.#mapGrid[x].push(new MapTile(TileType.Empty));
      }
    }

    for(let i = 0; i < wallList.length; i++) {
      const coordinate = wallList[i];
      const x = coordinate.getX();
      const y = coordinate.getY();

      this.#mapGrid[x][y] = new MapTile(TileType.Wall);
    }
  }

  getMapTile(x: number, y: number): MapTileValues {
    return this.#mapGrid[x][y].getMapTileValues();
  }

  getWidth() {
    return this.#width;
  }

  getHeight() {
    return this.#height;
  }
}