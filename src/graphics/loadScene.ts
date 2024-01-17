import { Texture } from "three";

import { AreaMap, TileType } from "../gameplay";
import { Coordinate, Rotation } from "../geometry";
import { buildWallMesh } from "./meshes";

export const loadScene = (scene: any, textureDictionary: Map<string, Texture>, areaMap: AreaMap) => {
  scene.clear();

  const width: number = areaMap.getWidth();
  const height: number = areaMap.getHeight();
  const adjustX = Math.floor(width/2);
  const adjustY = Math.floor(height/2);

  for(let x = 0; x < width; x++) {
    for(let y = 0; y < height; y++) {
      const {tileType} = areaMap.getMapTile(x, y);

      if(tileType === TileType.Wall) {
        const wallTexture: Texture = textureDictionary.get('faceTexture');
        const wallMesh = buildWallMesh(wallTexture, new Coordinate(x - adjustX, 0, y - adjustY), new Rotation(0, 0, 0));
        
        scene.add(wallMesh);
      }
    }
  }
}