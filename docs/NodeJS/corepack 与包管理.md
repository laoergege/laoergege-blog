# Corepack 与包管理

- [Corepack：包管理器的管理器](https://nodejs.org/api/corepack.html)
  - 作用
    - 限制项目使用特定包管理工具
    - 不在需要专门安装包管理工具
  - [用法](#corepack-用法)
- 包管理(pnpm)
  - package.json 包描述文件
  - 创建现代化模块包
    - 编写单元测试
    - 自动化版本管理和发布
  - 依赖管理
    - 安装
    - 更新
    - 删除
  - 脚本运行
  - Workspaces
- 开发环境锁定
  - Node 版本
  - 包管理
  - 依赖版本
  - [nvm](https://github.com/nvm-sh/nvm) + [corepack](https://github.com/nodejs/corepack) + lockfile
  - [volta](https://github.com/volta-cli/volta) + lockfile


- 测试
- eslint
- typescript

## Corepack 用法

```
# 卸载全局 pnpm yarn
npm uninstall -g yarn pnpm

# 激活
corepack enable

# 禁用 npm
corepack disable npm 

# package.json 定义包管理器及限制版本 
"packageManager": "pnpm@7.16.0"

# 下载包管理，并激活为全局
corepack prepare pnpm@latest --activate

# 修改指定全局包管理
corepack prepare pnpm@7.16.0 --activate

# 离线手动安装包管理
corepack hydrate <path/to/corepack.tgz> 【--activate】
```

## Node 开发环境锁定

nvm
          - pnpm env
          - [Volta](https://docs.volta.sh/guide/)
          - package: `engines` + `.npmrc: engine-strict`
          - .npmrc: `use-node-version`



## 发包

pnpm 在默认情况下，如果可用的 packages 与已声明的可用范围相匹配，pnpm 将从 workspace 链接这些 packages，并在 package.json 以 `workspace:` 协议声明；而当发包的时候将动态标准化依赖为 `workspace:` 协议：

```json
{
  "dependencies": {
    "foo": "workspace:*",
    "bar": "workspace:~",
    "qar": "workspace:^",
    "zoo": "workspace:^1.5.0"
  }
}
```

将会被转化为：

```json
{
  "dependencies": {
    "foo": "1.5.0",
    "bar": "~1.5.0",
    "qar": "^1.5.0",
    "zoo": "^1.5.0"
  }
}
```

### Publish 工作流

> 以下基于 [github package npm 注册源](https://docs.github.com/cn/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)为例

1. 确认 package 相关信息（[package.json 常见字段](#packagejson-常见字段)）
2. Pack
3. Versions
4. Changelog
5. Register & Oauth

   - 注册源配置
     - .npmrc：`@laoergege:registry=https://npm.pkg.github.com/`
     - package.json#publishConfig：
       ```json
       "publishConfig": {
         "registry":"https://npm.pkg.github.com"
       }
       ```
   - 身份认证

     - 个人访问令牌
       - .npmrc：`//npm.pkg.github.com/:_authToken=TOKEN`
     - 命令行

       ```shell
       $ npm login --scope=@OWNER --registry=https://npm.pkg.github.com

       > Username: USERNAME
       > Password: TOKEN
       > Email: PUBLIC-EMAIL-ADDRESS
       ```

6. `pnpm publish`

## package.json 常见字段

> package.json 文档链接
>
> - [npm](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
> - [pnpm](https://pnpm.io/zh/package_json)

- package.json
  - 项目描述
    - name
    - version
    - description
    - keywords
    - homepage
    - license
    - people fields: author, contributors
    - files
    - repository
  - 开发声明
    - type
    - main
    - module
    - types
    - bin
    - scripts
    - 依赖
      - dependencies
      - devDependencies
      - peerDependencies
    - overrides：用于开发覆盖包做测试
    - workspaces
  - 发包配置
    - publishConfig
    - private
  - 环境声明
    - engines
