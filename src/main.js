import { World } from './World/World.js';

// 创建入口函数
function main() {
  const container = document.querySelector('#scene-container');

  const world = new World(container);

  world.render();
}

// 调用入口函数启动程序
main();
