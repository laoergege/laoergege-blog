# JavaScript 模块

- JavaScript 模块
  - 模块化发展历程
  - ES Modules

**模块化是前端重要的开发范式之一**，把复杂的代码按照功能划分为不同的模块单独维护，从而提高开发效率、降低维护成本；
**模块化是工程化的基础**：只有能将代码模块化，拆分为合理单元，才具备调度整合的能力，才有架构和工程一说。

到底什么是模块化？简单来说就是：**对于一个复杂的应用程序，与其将所有代码一股脑地放在一个文件当中，不如按照一定的语法，遵循确定的规则（规范）拆分成几个互相独立的文件。这些文件应该具有原子特性，也就是说，其内部完成共同的或者类似的逻辑，通过对外暴露一些数据或调用方法，与外部完成整合。**

![图 1](./images/be1ede347fb8cd6151de0ca660b3e9553c9aa280b686154f558d997e2e96461b.png)  

## JavaScript 模块发展历程

1. 原始阶段
   1. 文件划分
   2. 对象命名空间
   3. IIFE
2. 社区标准化阶段
   1. CommonJS
   2. AMD
      1. RequireJS
   3. CMD
   4. UMD
3. ES Modules
### 文件划分、对象命名空间方式、IIFE

- 文件划分：以文件形式上模块化划分变量
- IIFE + 对象命名空间：解决了全局污染、解决命名冲突、成员访问控制

```js
// module-a.js
;(function () {
  var name = 'module-a'
  function method1 () {
    console.log(name + '#method1')
  }

  window.moduleA = {
    method1: method1
  }
})()

// module-b.js
;(function () {
  var name = 'module-b'
  function method1 () {
    console.log(name + '#method1')
  }

  window.moduleB = {
    method1: method1
  }
})()


<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Stage 2</title>
</head>
<body>
  <script src="module-a.js"></script>
  <script src="module-b.js"></script>
  <script>
    moduleA.method1()
    moduleB.method1()
  </script>
</body>
</html>
```
### 模块化标准

- CommonJS  
  适用于服务端的同步模块加载机制  
  通过 require 函数载入模块  
  module.exports 导出成员
- AMD  
  适用于浏览器的异步模块加载机制 
- UMD  
  通用模块标准
- ES Modules
## ES Modules

