import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
} from '../../../threeJS/build/three.module.js';

function createCube() {
  // 创建几何体
  const geometry = new BoxGeometry(2, 2, 2);

  // 创建材质 默认白色基础材质
  // const material = new MeshBasicMaterial();
  // 将 MeshBasicMaterial 材质 切换至 MeshStandardMaterial
  const material = new MeshStandardMaterial({
    color: 'purple',
  });

  // 创建网格 (包含几何体与材质的网格)
  const cubeMesh = new Mesh(geometry, material);

  // 旋转网格对象
  cubeMesh.rotation.set(-0.5, -0.1, 0.8);

  return cubeMesh;
}

export { createCube };
