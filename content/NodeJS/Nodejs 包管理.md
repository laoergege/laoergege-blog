---
discussionID: xwJdUgnvRfm2UYF8Ju4tG
---

# Nodejs 包管理

> [Pnpm](https://pnpm.io/) 为主

- 包管理
  - [包描述文件：package.json](#packagejson-常见字段)
  - 创建现代化模块包
    - 构建 CommonJS (CJS) 和 ECMAScript (ESM) 模块格式
    - 编写单元测试
    - 自动化版本管理和发布
      - 语义版本控制
  - 依赖管理
    - 安装
    - 更新
      - 补丁
    - 删除
    - 联调
      - `link`
    - 查看
  - 脚本运行
  - Workspaces
- Node 开发环境锁定
  - Node 版本
    - [nvm](https://github.com/nvm-sh/nvm)
    - [volta](https://github.com/volta-cli/volta)
  - 包管理
    - [corepack](https://github.com/nodejs/corepack)
    - package: `engines` + `.npmrc: engine-strict`
    - .npmrc: `use-node-version`
    - pnpm env
  - 依赖版本：lockfile

## 创建现代化模块包

- 创建现代化模块包
  - 构建 CommonJS (CJS) 和 ECMAScript (ESM) 模块格式
  - 配置 package.json
    - 常见字段
    - 
  - 编写单元测试
  - 自动化版本管理和发布
    - 语义版本控制

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
  - 自动化版本管理
    - [semantic-release](https://github.com/semantic-release/semantic-release)
4. Changelog
5. Register & Oauth

   - 注册源配置
     - .npmrc：`@laoergege:registry=https://npm.pkg.github.com/`
     - package.json#publishConfig：
       ```json
       "publishConfig": {
         "registry":"https://npm.pkg.github.com",
         "access": "public"
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
      - Global names
      - `@scope/name`
    - version
      - 语义版本控制
    - description
    - keywords
    - homepage
    - license
    - people fields: author, contributors
    - repository
    - workspaces
  - 模块描述
    - type
    - main
    - module
    - types
    - 依赖关系
      - dependencies
      - devDependencies
      - peerDependencies
    - overrides：通常用于开发覆盖包做测试
  - 脚本命令
    - bin
    - scripts
  - 发包配置
    - publishConfig
    - private
    - files
  - 环境声明
    - engines

### 语义版本控制

- `major[.minor][.patch]`
  - major version：当进行不兼容的 API 更改时，主要版增加
  - minor version：当以向后兼容的方式添加功能时，次要版本增加
  - patch version：当进行向后兼容的错误修复时，补丁版本递增
  - 修饰符
    - * 匹配任何版本
    - >=version表示安装的版本必须是version或更高
    - <=version表示安装的版本必须是version或更低
    - version1-version2 等同于>=version1 <=version2
    - ^version：主版本必须相同
    - 