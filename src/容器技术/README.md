- Docker
  - 简介  
    Docker 是一种虚拟化技术，基于 Linux 的容器机制（Linux Containers，简称 LXC），你可以把它近似地理解成是一个“轻量级的虚拟机”，只消耗较少的资源就能实现对**进程的隔离保护**。  

    使用 Docker 可以把应用程序和它相关的各种依赖（如底层库、组件等）“打包”在一起，这就是 Docker 镜像（Docker image）。Docker 镜像可以让应用程序不再顾虑环境的差异，**在任意的系统中以容器的形式运行**（当然必须要基于 Docker 环境），极大地增强了应用部署的**灵活性和适应性**。
  - 基本概念
  - 镜像制作
    - docker build & dockerfile
      - [dockerfile](./容器技术/dockerfile.md)
    - docker commit
      - https://yeasy.gitbook.io/docker_practice/image/commit
  - 容器运行
  - 容器编排
    - docker-compose
    - Kubernetes
  - 原理深入
  - IED with Docker
    - https://code.visualstudio.com/docs/containers/overview
    - https://code.visualstudio.com/docs/remote/containers
  - 下一代容器工具
    - [podman](https://github.com/containers/podman)

