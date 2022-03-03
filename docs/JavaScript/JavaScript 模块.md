---
tags:
 - javascript
 - 模块
---

# JavaScript 模块

- JavaScript 模块
  - 模块化发展历程
  - ES Modules

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

- CommonJS 适用于服务端的同步模块加载机制  
  通过 require 函数载入模块  
  module.exports 导出成员
- AMD 适用于浏览器的异步模块加载机制
- UMD 通用模块标准

## ES Modules

- export 声明
  - `export let a` 单变量声明导出
  - `export {a, b, c}`  变量名列表导出
  - `export default let a` 默认导出 
  - `export default a` 表达式导出 
- import 声明
  - `import x from "./a.js"` 默认引入
  - `import {a as x, modify} from "./a.js"` 成员引入
  - `import * as x from "./a.js"` 把模块中所有的变量以类似对象属性的方式引入
- 导入导出
  - `export * from 'a.js'`


- 第一种方法是在函数的 package.json 文件中指定“类型”。通过将类型设置为“module”，您可以将包中的所有“.js”文件指定为 ES 模块。
- 以文件扩展名指定类型，以 .cjs 结尾的文件名始终被视为 CommonJS 模块，以.mjs结尾的文件名始终被视为 ES 模块。以.js结尾的文件名从 package.json 中继承其类型（默认情况下，package.json 被指定为 CommonJS）


引用传递？