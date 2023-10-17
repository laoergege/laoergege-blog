# Nodejs CLI

- CLI
  - 参数
    - 命令行参数
      - process.argv
        - process.argv 始终以用于运行代码的 Node.js 二进制文件的路径开头。接下来是我们脚本的路径。数组以传递给脚本的实际参数结束。换句话说：脚本的参数总是从索引 2 开始。
      - [commander.js](https://github.com/tj/commander.js#readme)
      - [clipanion](https://github.com/arcanis/clipanion)
      - [yargs](https://github.com/yargs/yargs)
      - [arg](https://github.com/vercel/arg)
    - 环境变量
      - process.env
      - 环境配置文件：[dotenv](https://github.com/motdotla/dotenv#readme)
  - 用户输入
    - [process.stdin](https://nodejs.org/api/process.html#processstdin)
    - readline
    - [inquirer](https://github.com/SBoudrias/Inquirer.js#readme)
    - [prompts](https://github.com/terkelg/prompts#readme)
    - [enquirer](https://github.com/enquirer/enquirer#built-in-prompts)
  - 打印输出
    - process.stdout
    - process.stderr
    - console.log
    - 美化
      - 文本
        - [chalk](https://github.com/chalk/chalk)
        - [kleur](https://github.com/lukeed/kleur)
        - [figlet](https://github.com/patorjk/figlet.js)
      - 文本框：[boxen](https://github.com/sindresorhus/boxen)
      - 进度
        - [ora](https://github.com/sindresorhus/ora#readme)
        - [cli-progress](https://github.com/npkgz/cli-progress)
        - [node-progress](https://github.com/visionmedia/node-progress#readme)
      - 列表
        - [listr](https://github.com/SamVerschueren/listr)
  - 子进程
  - 配置

    - 运行本地安装的 bin 脚本
      - `npm run` + `package scripts` 运行 bin 脚本
    - node_modules/bin
      - 通过包脚本运行 bin 脚本
      - pnpm exec
      - 通过 npx 运行 bin 脚本
      - 因为 npm 临时在 Unix $PATH 上添加了以下条目：

/Users/john/my-package/node_modules/.bin
/Users/john/node_modules/.bin
/Users/node_modules/.bin
/node_modules/.bin
  - 运行
    - pnpm run
- 工具包：[zx](https://github.com/google/zx)


- Shell 脚本
  - Unix Shellbag
    - `#!/usr/bin/node`：并非所有 Unix 都在该路径上安装 Node.js 二进制文件
    - `#!/usr/bin/env node`（优先）
      - 参数传递：`#!/usr/bin/env -S node --disable-proto=throw`
  - chmod u+x hello.mjs
- Npm bin
  - package.json `bin`