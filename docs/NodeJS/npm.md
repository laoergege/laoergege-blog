# npm

- npm
  - 配置相关
    - npm 配置及切换 npm 源
    - package.json
      - [语义化版本](http://nodejs.cn/learn/semantic-versioning-using-npm)
  - 依赖相关
    - npm install 及 lock
    - 包操作
  - npm script/npx

## 依赖相关

### 包操作

```shell
// 查看依赖版本
npm view <package-name> version

// 安装制定版本的依赖
npm install <package>@<version>

// 依赖查看
npm list

// 依赖过期查看
npm outdated

// 依赖更新
npm update

// 卸载依赖
npm uninstall <package-name>

// 避免安装开发依赖项
npm install --production 
```