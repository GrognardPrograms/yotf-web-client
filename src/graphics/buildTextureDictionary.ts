import { Texture } from "three";

import { loadFaceTexture } from "./textures";

export const buildTextureDictionary = () => {
  const textures: Map<string, Texture> = new Map();

  textures.set('faceTexture', loadFaceTexture())

  return textures;
}