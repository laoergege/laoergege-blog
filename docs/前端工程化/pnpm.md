---
release: true
tags:
 - pnpm
 - 包管理
desc: pnpm 知识汇总
---

# pnpm

- pnpm
  - [依赖管理](#依赖管理)
    - 对比 yarn/npm@3
      - 安全性：本质上是**依赖提升**带来的问题
        - 扁平化依赖结构带来的不稳定性
        - 幽灵依赖
        - npm 分身
    - pnpm 的依赖结构：`平铺结构 + 符号链接`  
      ![图 2](./images/1647703499774.png)  
      - 所有的包都平铺在 `.pnpm` 内，并通过**符号链接**依赖关系
      - 所有的包通过硬链接到 store 内部真实文件位置
    - [半严格模式](#半严格模式)
  - 存储管理
    - store
    - 基于内容寻址
    - hardlink
  - monorepo

## 依赖管理

- 对比 yarn/npm
  - npm@3 之前： `嵌套结构`
    - 过度嵌套
    - 依赖重复、占用空间
  - yarn/npm@3 之后：`扁平化结构`
    - 依赖结构的**不确定性**，依据声明顺序
      - lock 文件虽在一定程度维持依赖结构，但随着包升级还是可能带来结构破坏
    - 扁平化算法本身的**复杂性**很高，耗时较长
    - 幽灵依赖：项目中仍然可以**非法访问**没有声明过依赖的包，因为 `Node Module Resolution` 机制
- pnpm 的依赖结构：`平铺结构 + 符号链接`
  - 半严格模式

下边例子，我们用 pnpm 创建一个项目并且 `pnpm install qiankun` 来观察：

1. 项目 node_modules 只存在 package 上声明的依赖，既消除项目“幽灵依赖”的问题，又使得 node_modules 结构清晰明了  
  
![](./images/image-20210324174810561.png)

2. qiankun 只是个**软链接**，解析模块时，Node 会解析符号链接，寻找符号链接原本的位置，即 `.pnpm/qiankun@2.4.0/node_modules/qiankun`

> `.pnpm/`会以平铺的形式储存着所有的包，每个包都可以在这种命名模式的文件夹中被找到：`.pnpm/<name>@<version>/node_modules/<name>`  
> 
> 与 npm3+ 以及 yarn 处理同包不同版本的是：`<name>@<version>` 的命名模式保证了包之间的相互隔离
      
![](./images/image-20210327112011578.png)
      
3. pnpm 会将包本身和依赖同样平铺在同一个 node_module 下

![](./images/image-20210327112333206.png)

这样的好处：

- 兼容 Node Module Resolution 机制
- 避免了循环符号链接造成[文件循环嵌套显示的问题](https://github.com/pnpm/pnpm/discussions/4207)

4. 除了 qiankun 是**硬链接**到全局真实存储的文件，其他依赖项都是继续**符号链接**到 .pnpm 下的包

### 半严格模式

如果仔细发现上面的案例，`node_modules/.pnpm` 路径下竟然会有 `node_modules` 文件，这样虽然我们自己的代码是被严格限制了，但第三方依赖包还是可以根据 Node Module Resolution 机制偷偷访问到其他包！

![](./images/image-20210611145816518.png)

默认情况下，pnpm v5 创建一个“半严格” 的 node_modules。默认配置如下所示：

```yaml
; 提升所有包到 node_modules/.pnpm/node_modules
hoist-pattern[]=*

; 提升所有名称包含types的包至根，以便Typescript能找到
public-hoist-pattern[]=*types*

; 提升所有ESLint相关的包至根
public-hoist-pattern[]=*eslint*
```

可通过 `hoist=false` 来禁止包提升，更多配置详情参考[《pnpm的node_modules配置选项》](https://pnpm.io/zh/blog/2020/10/17/node-modules-configuration-options-with-pnpm)。

总的来说，**无论是我们还是第三方包的代码都要严格的代码访问，pnpm 的 hoist 主要是为了兼容滥用 node 特性的包**。

## Monorepo: PNPM + Rush

- Monorepo 操作
  - 依赖管理：pnpm
  - 开发
    - 本地 link 模式
    - 线上版本模式
  - 任务编排：rush
    - 过滤
    - 拓扑排序
    - 增量构建
  - 发版模式
    - independent
    - fixed
- Rush
  - 命令统一

## 参考阅读

- [pnpm](https://pnpm.io/zh/)
- [平铺的结构不是 node_modules 的唯一实现方式](https://pnpm.io/zh/blog/2020/05/27/flat-node-modules-is-not-the-only-way)
- [关于现代包管理器的深度思考——为什么现在我更推荐 pnpm 而不是 npm/yarn?](https://mp.weixin.qq.com/s/1Wm-iYFBgJXMg_7SgWktXA)