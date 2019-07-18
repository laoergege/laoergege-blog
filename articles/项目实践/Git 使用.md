
## git 用法
### 开始
学习使用命令行时，最好的方式就是多用 help 命令查看其他命令的相关用法。在控制台输入 `git help` 可查看 git 不同命令使用场景:

![git 命令](https://raw.githubusercontent.com/laoergege/laoergege-blog/master/images/gc.png)

> `git help <command>` 可查看相关命令文档，`git <command> -h` 可在控制台直接简洁打印查看用法。

### 配置设置
git 使用前必须设置 git 用户信息（邮箱、用户名），主要用于记录提交得用户信息。

```
git config --list

git config --local user.username "xxx"
git config --local user.email "xxx"
```

配置信息有三种不同级别，优先级分别是:  
local > global > system

### 基本使用
```
// 初始化
git init

// 暂存文件
git add . // 暂存所有文件
git add <file> // 仅暂存对应文件

// 提交版本
git commit -m "xxx"
```

### 进阶使用
```
// 面向工作区 
git add -u // 只暂存已跟踪文件，避免把工作区没准备好的新文件直接加到暂存区了。
git rm <file> // 删除文件
git mv <source> <destination>

// 面向暂存区
git rm --cached <file> // 取消文件暂存
git reset --hard <commit> // 重置工作区和暂存区

// 面向储存版本
```
**Tip**:
- 多用 `git status` 查看文件状态，git 会有接下来相关操作提示。
- 使用 `git log` 和 `gitk` 能够查看提交日志，`gitk` 会打开图形化界面。(windows 下 gitk 界面乱码，可输入配置命令 `git config gui.encoding utf-8`，重新打开即可。)

## git 原理探索

