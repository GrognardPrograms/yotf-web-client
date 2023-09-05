import { BoxGeometry, Mesh, MeshBasicMaterial, Texture, TextureLoader } from "three";

export const buildWall = (x?: number, y?: number, texture?: Texture): Mesh => {
  const wallGeometry = new BoxGeometry(0.5, 2, 2);
  const wallTexture = texture ?? new TextureLoader().load("https://upload.wikimedia.org/wikipedia/en/3/3f/Richard_d_james_album_cover.jpg");
  const wallMaterial = new MeshBasicMaterial({map: wallTexture});
  const wallMesh = new Mesh(wallGeometry, wallMaterial);

  return wallMesh;
}