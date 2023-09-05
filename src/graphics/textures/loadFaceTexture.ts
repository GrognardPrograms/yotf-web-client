import {TextureLoader} from 'three';

export const loadFaceTexture = () => {
  return new TextureLoader().load("https://upload.wikimedia.org/wikipedia/en/3/3f/Richard_d_james_album_cover.jpg");
}