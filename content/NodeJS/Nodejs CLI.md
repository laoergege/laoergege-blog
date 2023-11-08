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
  - 如果我们全局安装软件包，链接将添加到 $PATH 中列出的目录中
  - 如果我们在本地安装软件包（作为依赖项），链接将添加到 node_modules/.bin/
- npm publish --dry-run
  - 空运行 npm install 运行命令而不上传任何内容
  - 检查将上传哪些文件
- npm publish 
"publishConfig": {
  "access": "public"
}

major.minor.patch
We increase major if we made breaking changes.
如果我们进行了重大更改，则会增加 major 。
We increase minor if we made backward-compatible changes.
如果我们进行向后兼容的更改，我们会增加 minor 。
We increase patch if we made small fixes that don’t really change the API.
如果我们进行了没有真正改变 API 的小修复，我们会增加 patch 。

"scripts": {
  "build": "tsc",
  "test": "mocha --ui qunit",
  "dry": "npm publish --dry-run",
  "prepublishOnly": "npm run test && npm run build"
}


- 通过 npm 包脚本运行跨平台任务
  - npm run <script-name>
  - Pre and post scripts
    - "scripts": {
  "hello": "echo hello",
  "prehello": "echo BEFORE",
  "posthello": "echo AFTER"
},
  - Life cycle scripts



- spawn
  - exec
  - execFile
  - 模式
    - 仅命令模式： args 被省略， command 包含整个shell命令
    - 参数模式： command 只包含命令的名称， args 包含其参数
  - 参数
    - shell
      - 在Windows上，此选项几乎总是 true
      - 在Unix上，如果 .shell 是 false ，则只有核心shell功能（例如管道，I/O重定向，文件名通配符和变量）不可用
      - 如果 .shell 是 true ，我们必须小心用户输入并对其进行清理，因为它很容易执行任意代码。如果我们想把元字符用作非元字符，我们也必须对它们进行转义
      - shell 设置为shell可执行文件的路径
    - cwd: string | URL
    - stdio
      - 子进程的每个标准I/O流都有一个数字ID，即所谓的文件描述符：
        - 标准输入（stdin）的文件描述符为0。
        - 标准输出（stdout）的文件描述符为1。
        - 标准错误（stderr）的文件描述符为2。
      - 值
        - 数组
        - pipe
        - ignore
        - inherit 将子进程的流通过管道传输到父进程的相应流
    - env
    - signal: AbortSignal
    - timeout
  - handler
    - exitCode
      - 0（零）表示正常退出。
      - 大于零的数字表示发生了错误
      - null 表示进程尚未退出
    - signalCode
      - 用来杀死子进程的POSIX信号
    - 流
      - .stdin
      - .stdout
      - .stderr
    - pid
    - kill(signalCode?: number | string = 'SIGTERM'): boolean
    - .on('exit', (exitCode: number|null, signalCode: string|null) => {})
      - 执行完成
      - shell中出现错误
      - 进程被杀死
    - .on('error', (err: Error) => {})
      - 无法派生子进程