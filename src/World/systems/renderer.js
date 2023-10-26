import { WebGLRenderer } from '../../../threeJS/build/three.module.js';

function createRenderer() {
  // antialias 抗锯齿
  const renderer = new WebGLRenderer({ antialias: true });

  // 打开物理上正确的光照
  renderer.useLegacyLights = true;

  return renderer;
}

export { createRenderer };
