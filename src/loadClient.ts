import { Camera, Scene, WebGLRenderer } from "three";

import { buildAnimLoop, buildTextureDictionary } from "./graphics";
import { buildWall } from "./graphics/meshes";

export const loadClient = (parentDomElement) => {
  const textureDictionary = buildTextureDictionary();

  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerHeight * 0.75, window.innerHeight * 0.75);
  const scene = new Scene();
  const camera = new Camera();

  const wallMesh = buildWall(textureDictionary.get('faceTexture'));

  scene.add(wallMesh);

  parentDomElement.appendChild(renderer.domElement);

  buildAnimLoop(renderer, scene, camera);
}