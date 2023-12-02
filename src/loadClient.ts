import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

import { buildAnimLoop, buildTextureDictionary } from "./graphics";
import { AreaMap, Coordinate } from "./types";
import { loadScene } from "./graphics/loadScene";
import { buildKeydownHandler } from "./controls/buildKeydownHandler";
import { Unit } from "./types/unit";

export const loadClient = (parentDomElement) => {
  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerHeight * 0.75, window.innerHeight * 0.75);
  const scene = new Scene();
  const camera: PerspectiveCamera = new PerspectiveCamera(114, 1, 0.1, 100);
  camera.rotation.y += Math.PI;
  camera.position.z += 0;

  const animLoop = buildAnimLoop(renderer, scene, camera);
  const keydownHandler = buildKeydownHandler(new Unit(new Coordinate(0, 0, 0)), camera);

  const textureDictionary = buildTextureDictionary();

  const areaMap = new AreaMap(11, 11, [new Coordinate(7, 5, 0), new Coordinate(3, 5, 0), new Coordinate(7, 7, 0), new Coordinate(7, 9, 0), new Coordinate(3, 9, 0)]);
  loadScene(scene, textureDictionary, areaMap);

  parentDomElement.appendChild(renderer.domElement);
  parentDomElement.addEventListener('keydown', keydownHandler);

  animLoop();
}