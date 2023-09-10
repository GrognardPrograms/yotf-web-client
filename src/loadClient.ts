import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

import { buildAnimLoop, buildTextureDictionary } from "./graphics";
import { AreaMap, Coordinate } from "./types";
import { loadScene } from "./graphics/loadScene";

export const loadClient = (parentDomElement) => {
  const textureDictionary = buildTextureDictionary();

  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerHeight * 0.75, window.innerHeight * 0.75);
  const scene = new Scene();
  const camera = new PerspectiveCamera(90, 1, 0.1, 100);
  camera.rotation.y += Math.PI;
  camera.position.z += 0;

  const areaMap = new AreaMap(11, 11, [new Coordinate(5, 7, 0)]);
  loadScene(scene, textureDictionary, areaMap);

  parentDomElement.appendChild(renderer.domElement);

  const animLoop = buildAnimLoop(renderer, scene, camera);
  animLoop();
}