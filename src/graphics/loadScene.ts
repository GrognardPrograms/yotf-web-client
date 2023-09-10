import { Texture } from "three";

import { AreaMap, Coordinate, Rotation, TileType } from "../types";
import { buildWallMesh } from "./meshes";

export const loadScene = (scene: any, textureDictionary: Map<string, Texture>, areaMap: AreaMap) => {
  scene.clear();

  const width: number = areaMap.getWidth();
  const height: number = areaMap.getHeight();
  const adjustX = Math.floor(width/2);
  const adjustY = Math.floor(height/2);

  for(let x = 0; x < width; x++) {
    for(let y = 0; y < height; y++) {
      const mapTile = areaMap.getMapTile(x, y);

      if(mapTile.getTileType() === TileType.Empty) {
      } else if(mapTile.getTileType() === TileType.Wall) {
        console.log((x - adjustX) + " " + (y - adjustY));
        const wallMesh = buildWallMesh(textureDictionary.get('faceTexture'), new Coordinate(x - adjustX, 0, y - adjustY), new Rotation(0, 0, 0));
        console.log("ADDING");
        console.log(wallMesh.position.x + " " + wallMesh.position.y + " " + wallMesh.position.z)
        
        scene.add(wallMesh);
      }
    }
  }
}