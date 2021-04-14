> 推荐阅读
>
> [关于现代包管理器的深度思考——为什么现在我更推荐 pnpm 而不是 npm/yarn?](https://mp.weixin.qq.com/s/1Wm-iYFBgJXMg_7SgWktXA)
>
> [Flat node_modules is not the only way](https://pnpm.js.org/blog/2020/05/27/flat-node-modules-is-not-the-only-way/)
>
> [Why should we use pnpm?](https://www.kochan.io/nodejs/why-should-we-use-pnpm.html#disqus_thread)
>
> [pnpm's strictness helps to avoid silly bugs](https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html)



- 特点

  - 安装快，磁盘空间利用效率高

    - 不会重复安装同一个包
    - 版本管理单位为 单文件
    - 基于内容寻址

  - 支持 monorepo

  - 安全性高

    - 校验包完整性

    - npm/yarn 依赖管理

      - npm 3 之前 `嵌套结构`
        - 过度嵌套
        - 重复安装、占用空间
      - npm 3 之后及 yarn `扁平化结构`
        - 依赖结构的**不确定性**，依据声明顺序
        - 扁平化算法本身的**复杂性**很高，耗时较长
        - 项目中仍然可以**非法访问**没有声明过依赖的包，因为 Node Module Resolution

    - pnpm 独创的依赖管理

      - node_modules 只存在 package 上声明的依赖，保证结构对应，清晰明了；

        而且你的代码就只能加载到项目 node_modules 里的依赖，保证安全性、严谨性

        <img src="${images}/image-20210324174810561.png" alt="image-20210324174810561" style="zoom:50%;" />

        但点开 qiankun 并没有发 node_modules，那 qiankun 的依赖呢？

        <img src="${images}/image-20210324220122020.png" alt="image-20210324220122020" style="zoom:50%;" />

      - qiankun 只是个软链接，映射到 .pnpm/qiankun@2.4.0

        <img src="${images}/image-20210327112011578.png" alt="image-20210327112011578" style="zoom:50%;" />

        pnpm 会把 qiankun 及其依赖平级放在 node_modules 目录下，这种设计巧妙得利用并兼容 Node Module Resolution 机制使用 qiankun 能够访问其依赖，而它的依赖也同样是软链接，映射到 .pnpm 下的包

        <img src="${images}/image-20210327112333206.png" alt="image-20210327112333206" style="zoom:50%;" />

        > `.pnpm/`会以平铺的形式储存着所有的包，每个包都可以在这种命名模式的文件夹中被找到：
        >
        > `.pnpm/<name>@<version>/node_modules/<name>`
        >
        > 
        >
        > 并且每个包及其依赖以平级形式放在 node_modules 下,  如
        >
        > ```txt
        > qiankun@2.4.0
        > └── node_modules
        >     ├── @babel
        >     │   └── runtime -> ../../../@babel/runtime@7.13.10/node_modules/@babel/runtime
        >     ├── import-html-entry -> ../../import-html-entry@1.11.1/node_modules/import-html-entry
        >     ├── lodash -> ../../lodash@4.17.21/node_modules/lodash
        >     ├── qiankun
        >     │   ├── LICENSE
        >     │   ├── README.md
        >     │   ├── dist
        >     │   ├── es
        >     │   ├── lib
        >     │   └── package.json
        >     ├── single-spa -> ../../single-spa@5.8.1/node_modules/single-spa
        >     └── tslib -> ../../tslib@1.14.1/node_modules/tslib
        > ```
        >
        > 

        

        > pnpm 这个评级的结构与 npm v3,4,5,6 或 yarn v1 不同的是，它对包之间进行相互隔离。
        >
        > <img src="${images}/image-20210324223321353.png" alt="image-20210324223321353" style="zoom:50%;" />
        >
        > 因为中间多了个 .pnpm 阻碍了 Node Module Resolution 机制
        >
        > 1. 它完全适配了 Node.js。
        > 2. 包与包的依赖很好的被分组在一起。

        

- Monorepo 操作

  - 依赖操作
    - root 
      - add 默认只能在 workspace 中，`-W` 可作用于 root workspace
    - 所有子项/单个子项目 `--filter xxx`
      - pnpm add qiankun --filter="{projects}" 对所有
    - 默认提升全局 `hoist: true`
  - 任务操作





