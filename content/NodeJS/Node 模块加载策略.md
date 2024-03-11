# Node 模块加载策略

- Node 模块路径
  - 文件系统路径
    - 绝对路径
    - 相对路径
  - URL
    - file: 本地文件
    - data: 数据协议
    - node: 内置模块
  - 模块包路径（以模块包名称开头）
    - [模块包路径解析策略](#模块包路径解析策略)
  - startWith `#`
    - package imports

## 模块包路径解析策略

- 解析算法遍历当前目录及其祖先，直到找到一个目录 node_modules，该目录下存在与模块包名匹配的
  - 文件
  - 包含 package.json 的文件夹，解析 package.json 入口模块
    - `main`
      - 子路径被解释为相对于包目录
    - `exports`
      - `exports` 字段的优先级高于 `main` 字段
        - 向后兼容 `main`
          ```json
          {
            "main": "./dist/src/main.js",
            // "exports": "./dist/src/main.js", 
            "exports": {
              ".": "./dist/src/main.js"
            }
          }
          ```
      - 自定义子路径导出，隐藏包的内部结构（一旦 `exports` 属性存在，就只能使用其中列出的）
        ```json
          {
            "exports": {
              "./util/errors": "./dist/src/util/my_errors.js",
              "./lib/*": "./dist/src/*.js", // 对应映射多个文件
              
              "./util/errors.js": "./dist/src/util/errors.js",
              "./*": "./dist/src/*",

              //
              "./internal/*": null,
            }
          }
        ```
      - 条件导出
        ```json
        {
          "type": "module",
          "exports": {
            ".": {
              "require": "./main.cjs",
              "import": "./src/main.js"
            }
          }
        }
        ```
    - 文件扩展名
      - `.js` 文件的加载取决于 package.json 里面 `type` 字段的设置
        - commonjs（默认）
        - module
      - `.mjs` 文件总是以 ES6 模块加载
      - `.cjs` 文件总是以 CommonJS 模块加载
  - 文件夹模块下的 index.js 文件


- module
- 文件导出
