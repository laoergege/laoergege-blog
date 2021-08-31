TS 环境声明允许你在 Typescript 能力下更好得使用现有的 JavaScript 库，比如

1. 编译时类型检测
2. IDE 上搭配 ts server 提供对应的代码补全、接口提示等功能。



1. TS 源代码在编译的时候让 TS 编译器自动生成声明文件
2. 使用第三方没有 TS 声明文件的包
3. 结合 声明合并 特征来增强原有声明



- d.ts 仅声明变量，无需具体实现

- d.ts 文件仅仅会用于编译时的检查，在编译结果中会被删除。

  

声明文件根据源码类型也分为

- 全局声明文件
  - 声明全局变量
  - 扩展
- 模块声明文件



https://github.com/DefinitelyTyped/DefinitelyTyped
