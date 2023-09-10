import { BoxGeometry, Mesh, MeshBasicMaterial, Texture, TextureLoader } from "three";
import { Coordinate, Rotation } from "../../types";

export const buildWallMesh = (texture: Texture, position: Coordinate, rotation: Rotation): Mesh => {
  const wallGeometry = new BoxGeometry(2, 2, 2);
  const wallTexture = texture ?? new TextureLoader().load("https://upload.wikimedia.org/wikipedia/en/3/3f/Richard_d_james_album_cover.jpg");
  const wallMaterial = new MeshBasicMaterial({map: wallTexture});
  const wallMesh = new Mesh(wallGeometry, wallMaterial);

  wallMesh.position.x = position.getX();
  wallMesh.position.y = position.getY();
  wallMesh.position.z = position.getZ();
  
  wallMesh.rotation.x = rotation.getXRtnRad();
  wallMesh.rotation.y = rotation.getYRtnRad();
  wallMesh.rotation.z = rotation.getZRtnRad();

  return wallMesh;
}