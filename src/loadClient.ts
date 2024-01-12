import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

import { buildAnimLoop, buildTextureDictionary, loadScene } from "./graphics";
import { AreaMap, Coordinate, Player, Rotation } from "./types";
import { buildKeyboardHandler } from "./controls/buildKeyboardHandler";
import { buildMouseHandler } from "./controls/buildMouseHandler";
import { buildCtrlLoop } from "./controls/buildCtrlLoop";
import { ControlState } from "./controls/types/controlState";

export const loadClient = (parentDomElement) => {
  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerHeight * 0.75, window.innerHeight * 0.75);
  const scene = new Scene();
  const camera: PerspectiveCamera = new PerspectiveCamera(114, 1, 0.1, 100);
  camera.rotation.y += Math.PI;
  camera.position.z += 0;

  const playerCharacter = new Player(new Coordinate(0, 0, 0), new Rotation(0, 0, 0), camera);

  const controlState = new ControlState();

  const animLoop = buildAnimLoop(renderer, scene, camera);
  const { ctrlLoop, killLoop } = buildCtrlLoop(controlState, playerCharacter);
  const keyboardHandler = buildKeyboardHandler(controlState);
  const mouseHandler = buildMouseHandler(playerCharacter);

  const textureDictionary = buildTextureDictionary();

  const areaMap = new AreaMap(11, 11, [new Coordinate(7, 5, 0), new Coordinate(3, 5, 0), new Coordinate(7, 7, 0), new Coordinate(7, 9, 0), new Coordinate(3, 9, 0)]);
  loadScene(scene, textureDictionary, areaMap);

  parentDomElement.appendChild(renderer.domElement);
  parentDomElement.addEventListener('keydown', keyboardHandler);
  parentDomElement.addEventListener('keyup', keyboardHandler);
  parentDomElement.addEventListener('mousemove', mouseHandler);
  parentDomElement.addEventListener('keydown', async (e) => {if(e.key === '~') {console.log("~");await renderer.domElement.requestPointerLock()}});

  animLoop();
  ctrlLoop();
}