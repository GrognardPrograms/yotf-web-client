import { Camera, Scene, WebGLRenderer } from "three";

import { buildAnimLoop, buildTextureDictionary } from "./graphics";
import { buildWallMesh } from "./graphics/meshes";
import { Coordinate, Rotation } from "./types";

export const loadClient = (parentDomElement) => {
  const textureDictionary = buildTextureDictionary();

  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerHeight * 0.75, window.innerHeight * 0.75);
  const scene = new Scene();
  const camera = new Camera();

  const wallMesh = buildWallMesh(textureDictionary.get('faceTexture'), new Coordinate(0, 0, 0), new Rotation(0, 0, 0));
  scene.add(wallMesh);

  parentDomElement.appendChild(renderer.domElement);

  buildAnimLoop(renderer, scene, camera);
}