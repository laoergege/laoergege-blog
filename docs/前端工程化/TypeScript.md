# TypeScript

- TypeScript
  - 类型系统
    - 函数类型
    - 属性修饰符
      - 可选属性
      - 只读属性(onlyread)
      - 索引签名
  - 类型推断
  - tsconfig
  - 类型声明文件(d.ts)
    - 类型增强
  - 类型声明库 [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)
  - VSCode 集成
    - TypeScript Language Service
  - 工程实践
    - JS + JSDoc + DTS
    - 配置复用 extends
      > 配置文件中的相对路径都是相对起源配置文件 
    - 模块声明解析


VS Code 中指定项目 ts 版本

{
  "typescript.tsdk": "node_modules/typescript/lib"
}

All relative paths found in the configuration file will be resolved relative to the configuration file they originated in.