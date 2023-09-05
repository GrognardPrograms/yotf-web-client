export const buildAnimLoop = (renderer: any, scene: any, camera: any): void => {
  const animLoop = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(animLoop);
  }

  animLoop();
}