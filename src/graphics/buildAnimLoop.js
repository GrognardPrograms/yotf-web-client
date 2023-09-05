export const buildAnimLoop = (renderer, scene, camera) => {
  const animLoop = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(animLoop);
  }

  animLoop();
}