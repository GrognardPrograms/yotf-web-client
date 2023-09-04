import {BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer} from 'three';

export const loadClient = (parentDomElement) => {
  const camera = new PerspectiveCamera();
  const scene = new Scene();
  const renderer = new WebGLRenderer();

  parentDomElement.appendChild(renderer.domElement);

  const cubeGeometry = new BoxGeometry();
  const cubeMaterial = new MeshBasicMaterial({color: '000000'});
  const cubeMesh = new Mesh(cubeGeometry, cubeMaterial)

  scene.add(cubeMesh);

  renderer.render(scene, camera);

  return 0;
}