## 模块化

在 `base-threeJS` 项目的基础上进行模块化拆分；

在使用 threeJS 的实现功能的时候，直接引用 World 类；

```js

import { World } from './World/World.js';

// 创建入口函数
function main() {
  const container = document.querySelector('#scene-container');

  const world = new World(container);

  world.render();
}

// 调用入口函数启动程序
main();


```
