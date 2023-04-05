## Dockerfile

Dockerfile 是一个文本文件，其内包含了一条条的 指令(Instruction)，每一条指令构建一层，因此每一条指令的内容，就是描述该层应当如何构建。

> 只有 RUN, COPY, ADD 会创建层数会增加镜像的体积

构建镜像必须使用 `FROM` 制定基础镜像，scratch 是一个特殊的镜像，表示一个空白的镜像。

```
FROM scratch
...
```

 
- FROM：指定基础镜像
- COPY：从构建上下文中复制文件到镜像中
- ADD：
  - 除了从构建上下文中复制文件到镜像中，还能从 URL
  - 自动解压
- WORKDIR：设置工作目录
- RUN：RUN 通常会是 Dockerfile 里最复杂的指令，会包含很多的 Shell 命令，但 Dockerfile 里一条指令只能是一行，所以有的 RUN 指令会在每行的末尾使用续行符 \，命令之间也会用 && 来连接，这样保证在逻辑上是一行
- CMD、ENTRYPOINT：容器启动时的运行命令，必须指定 CMD 或 ENTRYPOINT 其中的一个
  - 多个重复指令会覆盖
  - ENTRYPOINT 优先级高于 CMD
  - CMD 会被运行容器时指定命令覆盖；ENTRYPOINT 则将可运行容器时的命令作为传参
  - CMD 适合作为服务启动命令；ENTRYPOINT 适合将容器作为可执行程序
- ARG：ARG 创建的变量只在镜像构建过程中可见，容器运行时不可见
- ENV：ENV 创建的变量不仅能够在构建镜像的过程中使用，在容器运行时也能够以环境变量的形式被应用程序使用
- EXPOSE：声明容器对外服务的端口号，实际并不会自动端口映射
- VOLUME：创建一个外部挂载

### 镜像分层缓存

一旦层发生变化，所有下游层也必须重新创建

### 多阶段构建

```
FROM XX AS XXX
...

FROM
...

```




