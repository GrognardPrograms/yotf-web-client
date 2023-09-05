import { Camera, Scene, WebGLRenderer } from "three";

import { buildAnimLoop } from "./graphics";
import { buildWall } from "./graphics/meshes/buildWall";

export const loadClient = async (parentDomElement) => {

  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerHeight * 0.75, window.innerHeight * 0.75);
  const scene = new Scene();
  const camera = new Camera();

  const wallMesh = buildWall();

  scene.add(wallMesh);

  parentDomElement.appendChild(renderer.domElement);

  buildAnimLoop(renderer, scene, camera);

  return 0;
}