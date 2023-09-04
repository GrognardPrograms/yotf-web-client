import { BoxGeometry, Camera, Mesh, MeshBasicMaterial, Scene, TextureLoader, WebGLRenderer } from "three";

export const loadClient = async (parentDomElement) => {

  const renderer = new WebGLRenderer();
  renderer.setSize(300, 300);
  const scene = new Scene();
  const camera = new Camera();

  const wallGeometry = new BoxGeometry();
  const wallTexture = new TextureLoader().load("https://upload.wikimedia.org/wikipedia/en/3/3f/Richard_d_james_album_cover.jpg");
  await new Promise((resolve) => {setTimeout(() => {resolve()}, 1000)})
  const wallMaterial = new MeshBasicMaterial({map: wallTexture});
  const wallMesh = new Mesh(wallGeometry, wallMaterial);

  wallMesh.rotation.x = 0.78
  wallMesh.rotation.y = 0.78

  scene.add(wallMesh)

  parentDomElement.appendChild(renderer.domElement);

  renderer.render(scene, camera)

  return 0;
}