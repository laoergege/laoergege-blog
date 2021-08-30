# Pnpm

> 推荐阅读
>
> [关于现代包管理器的深度思考——为什么现在我更推荐 pnpm 而不是 npm/yarn?](https://mp.weixin.qq.com/s/1Wm-iYFBgJXMg_7SgWktXA)
>
> [pnpm](https://pnpm.io/zh/)

## pnpm 介绍

pnpm 可以看作 npm 功能的增强版。

pnpm 特点：
1. 安装快，磁盘空间利用效率高
   - 不会重复安装同一个包
   - 以单文件为版本管理单位
   - 基于内容寻址
2. 支持 monorepo
3. 安全性高
   - 校验包完整性
   - 代码严格访问模式

## pnpm 独创的依赖管理

对比下 npm/yarn 、pnpm 依赖管理：

- npm/yarn 
  - npm 3 之前 `嵌套结构`
    - 过度嵌套
    - 重复安装、占用空间
  - npm 3 之后及 yarn `扁平化结构`
    - 依赖结构的**不确定性**，依据声明顺序
    
      lock 文件除了保证依赖版本一致性，维持依赖结构
    
    - 扁平化算法本身的**复杂性**很高，耗时较长
    
    - 项目中仍然可以**非法访问**没有声明过依赖的包，因为 Node Module Resolution

具体内容例子可以参考推荐阅读。

下边例子，我们用 pnpm 创建一个项目并且 `pnpm install qiankun` 来观察：

  - pnpm 创建了的是一个**非扁平非嵌套**的依赖结构
    - node_modules 只存在 package 上声明的依赖，保证结构对应，清晰明了；

      **而且你的代码就只能加载到项目 node_modules 里的依赖，保证安全性、严谨性**

      <img src="./images/image-20210324174810561.png" alt="image-20210324174810561" style="zoom:50%;" />

      但点开 qiankun 并没有发 node_modules，那 qiankun 的依赖呢？

      <img src="./images/image-20210324220122020.png" alt="image-20210324220122020" style="zoom:50%;" />

    - qiankun 只是个**软链接**，映射到 .pnpm/qiankun@2.4.0

      > `.pnpm/`会以平铺的形式储存着所有的包，每个包都可以在这种命名模式的文件夹中被找到：
      >
      > `.pnpm/<name>@<version>/node_modules/<name>`
      >
      > 与 npm3+ 以及 yarn 平铺方式不同的是
      >
      > `<name>@<version>` 的命名模式保证了包之间的相互隔离
      
      <img src="./images/image-20210327112011578.png" alt="image-20210327112011578" style="zoom:50%;" />
      
    - pnpm 会把 qiankun 及其依赖平级放在 node_modules 目录下

      这种设计巧妙得利用并兼容 Node Module Resolution 机制使用 qiankun 能够访问其依赖，而它的依赖也同样是**软链接**，映射到 .pnpm 下的包

      <img src="./images/image-20210327112333206.png" alt="image-20210327112333206" style="zoom:50%;" />

在最后 `node_modules/.pnpm/qiankun@2.4.0` 是**硬链接**到全局存储的文件中去，节省磁盘空间！

可参考阅读：
- [《符号链接的 node_modules 结构》](https://pnpm.io/zh/symlinked-node-modules-structure)
- [扁平的 node_modules 不是唯一的方法](https://pnpm.io/zh/blog/2020/05/27/flat-node-modules-is-not-the-only-way)

### pnpm 为什么使用硬链接？

## Pnpm 半严格模式

如果仔细发现上面的案例，`node_modules/.pnpm` 路径下竟然会有 `node_modules` 文件，这样虽然我们自己的代码是被严格限制了，但第三方依赖包还是可以根据 Node Module Resolution 机制偷偷访问到其他包！

<img src="./images/image-20210611145816518.png" alt="image-20210611145816518" style="zoom:50%;" />

默认情况下，pnpm v5 创建一个“半严格” 的 node_modules。
默认配置如下所示：
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

## Monorepo

Monorepo 操作

- 依赖操作
  - root 
    - add 默认只能在 workspace 中，`-W` 可作用于 root workspace
  - 所有子项/单个子项目 `--filter xxx`
    - pnpm add qiankun --filter="{projects}" 对所有
  - 默认提升全局 `hoist: true`
- 任务操作