(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{498:function(e,t,a){"use strict";a.r(t);var r=a(47),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的镜像中，然后发布到任何流行的 Linux或Windows 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。")]),e._v(" "),a("h2",{attrs:{id:"核心概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[e._v("#")]),e._v(" 核心概念")]),e._v(" "),a("p",[e._v("容器 === 镜像")]),e._v(" "),a("h2",{attrs:{id:"操作命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作命令"}},[e._v("#")]),e._v(" 操作命令")]),e._v(" "),a("h3",{attrs:{id:"下载镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像"}},[e._v("#")]),e._v(" 下载镜像")]),e._v(" "),a("ul",[a("li",[e._v("docker search 查找镜像")]),e._v(" "),a("li",[e._v("docker pull 获取镜像")])]),e._v(" "),a("h3",{attrs:{id:"查看镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看镜像"}},[e._v("#")]),e._v(" 查看镜像")]),e._v(" "),a("ul",[a("li",[e._v("docker images 查看镜像")]),e._v(" "),a("li",[e._v("docker images -a 为了加速镜像构建、重复利用资源，Docker 会利用中间层镜像，-a 显示包括中间层镜像在内的所有镜像的话")]),e._v(" "),a("li",[e._v("docker inspect 查看容器/镜像详细信息")]),e._v(" "),a("li",[e._v("docker history 镜像文件由多个层组成，查看镜像各层创建信息")])]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("docker images")]),e._v(" 查看镜像大小信息只是表示了该镜像的逻辑体积大小， 实际上由于相同的镜像层本地只会存储一份， 物理上占用的存储空间会小于各镜像逻辑体积之和。")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/laoergege/laoergege-blog/master/images/20190918232256.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"删除、清理镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除、清理镜像"}},[e._v("#")]),e._v(" 删除、清理镜像")]),e._v(" "),a("ul",[a("li",[e._v("docker rmi IMAGE [IMAGE ... ] 删除镜像 -f 强删")]),e._v(" "),a("li",[e._v("docker image prune 清理些临时的镜像文件， 以及一些没有被使用的镜像")])]),e._v(" "),a("blockquote",[a("ul",[a("li",[e._v("删除可以 tag 或者镜像 ID")]),e._v(" "),a("li",[e._v("镜像删除行为分为两类，一类是 "),a("code",[e._v("Untagged")]),e._v("，另一类是 "),a("code",[e._v("Deleted")])]),e._v(" "),a("li",[e._v("一个镜像可以对应多个标签，当该镜像所有的标签都被取消了，才会是 "),a("code",[e._v("Deleted")]),e._v(" 行为")]),e._v(" "),a("li",[e._v("镜像是多层存储结构，因此在删除的时候也是从上层向基础层方向依次进行判断删除。如果某个其它镜像正依赖于当前镜像的某一层，是不会触发删除该层的行为")]),e._v(" "),a("li",[e._v("容器依赖的镜像也不会被删除")])])]),e._v(" "),a("h3",{attrs:{id:"创建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建镜像"}},[e._v("#")]),e._v(" 创建镜像")]),e._v(" "),a("ul",[a("li",[e._v("docker commit 创建镜像")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker commit [选项] <容器ID或容器名> [<仓库名>[:<标签>]]\n")])])]),a("ul",[a("li",[a("p",[e._v("docker create 创建容器")])]),e._v(" "),a("li",[a("p",[e._v("docker start 启动容器")])]),e._v(" "),a("li",[a("p",[e._v("docker ps 查看容器进程")])]),e._v(" "),a("li",[a("p",[e._v("docker exec")])]),e._v(" "),a("li",[a("p",[e._v("docker run 创建并启动容器")])]),e._v(" "),a("li",[a("p",[e._v("docker login")])]),e._v(" "),a("li",[a("p",[e._v("docker push")])])]),e._v(" "),a("h3",{attrs:{id:"构建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像"}},[e._v("#")]),e._v(" 构建镜像")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// docker build [选项] <上下文路径/URL/->\ndocker build -t xxx:tag .\n")])])]),a("h4",{attrs:{id:"多阶段构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多阶段构建"}},[e._v("#")]),e._v(" 多阶段构建")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("FROM\n...\n\nFROM\n...\n\n")])])]),a("h3",{attrs:{id:"容器的三种运行模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器的三种运行模式"}},[e._v("#")]),e._v(" 容器的三种运行模式")]),e._v(" "),a("p",[e._v("概括而言，Docker容器大体上有三种运行模式，如下：")]),e._v(" "),a("h4",{attrs:{id:"运行后退出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行后退出"}},[e._v("#")]),e._v(" 运行后退出")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// 下面语句创建的容器，在运行后会退出。\n$ docker run centos echo "hellowrold"\n')])])]),a("h4",{attrs:{id:"常驻内存-就是守护进程的模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常驻内存-就是守护进程的模式"}},[e._v("#")]),e._v(" 常驻内存，就是守护进程的模式")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 如果容器中运行一个守护进程，则容器会一直处于运行状态，如：\n$ docker run -d -p 80:80 nginx\n")])])]),a("h4",{attrs:{id:"交互式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交互式"}},[e._v("#")]),e._v(" 交互式")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 我们也可以在运行容器时，直接与容器交互。 \n// --rm 容器退出后随之将其删除\n$ docker run -it --rm centos /bin/bash\n")])])]),a("p",[e._v("-f, --fiter filter: 过滤输出内容；\n--format string: 格式化输出内容；")]),e._v(" "),a("h2",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[e._v("#")]),e._v(" dockerfile")]),e._v(" "),a("p",[e._v("Dockerfile 是一个文本文件，其内包含了一条条的 指令(Instruction)，每一条指令构建一层，因此每一条指令的内容，就是描述该层应当如何构建。")]),e._v(" "),a("p",[e._v("构建镜像必须使用 "),a("code",[e._v("FROM")]),e._v(" 制定基础镜像，scratch 是一个特殊的镜像，表示一个空白的镜像。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("FROM scratch\n...\n")])])]),a("h3",{attrs:{id:"构建缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建缓存"}},[e._v("#")]),e._v(" 构建缓存")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#leverage-build-cache",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Docker 镜像构建是分层的，一条指令一层，在没有带 "),a("code",[e._v("--no-cache=true")]),e._v(" 指令的情况下如果某一层没有改动，Docker 就不会重新构建这一层而是会使用缓存。简单来说就是如果第n层有改动，则n层以后的缓存都会失效，大多数情况下判断有无改动的方法是判断这层的指令和缓存中的构建指令是否一致，但是对于 "),a("code",[e._v("COPY")]),e._v(" 和 "),a("code",[e._v("ADD")]),e._v(" 命令会计算镜像内的文件和构建目录文件的校验和然后做比较来判断本层是否有改动。")]),e._v(" "),a("p",[e._v("实践应用 "),a("a",{attrs:{href:"https://segmentfault.com/a/1190000018222648",target:"_blank",rel:"noopener noreferrer"}},[e._v("利用构建缓存机制缩短Docker镜像构建时间"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"数据管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据管理"}},[e._v("#")]),e._v(" 数据管理")]),e._v(" "),a("p",[e._v("默认情况下，在容器内创建的所有文件都存储在可写容器层上。这意味着：")]),e._v(" "),a("ul",[a("li",[e._v("当该容器不再存在时，数据将不会持久保存")]),e._v(" "),a("li",[e._v("并且很难从容器中取出数据给其他地方共享使用。")])]),e._v(" "),a("p",[e._v("docker 提供了三种将容器的数据挂载到主机文件系统上以做持久化的方式：")]),e._v(" "),a("ul",[a("li",[e._v("volume 数据卷")]),e._v(" "),a("li",[e._v("bind mount")]),e._v(" "),a("li",[e._v("tmpfs")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://docs.docker.com/storage/images/types-of-mounts.png",alt:""}})]),e._v(" "),a("p",[e._v("无论您选择使用哪种方式，它在容器的文件系统中显示为目录或单个文件。")]),e._v(" "),a("h3",{attrs:{id:"volume-数据卷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volume-数据卷"}},[e._v("#")]),e._v(" volume 数据卷")]),e._v(" "),a("p",[e._v("存储在主机文件系统的一部分中，该文件系统由Docker管理，非Docker进程不应修改文件系统的这一部分。卷是在Docker中持久保存数据的最佳方法。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker volume create // 命令显式创建卷\ndocker volume ls // 查看卷列表\ndocker volume rm // 删除卷\ndocker volume prune // 删除未使用的卷\ndocker run --mount source=a,target=/b ... // 启动一个挂载数据卷的容器，将容器卷a挂载到容器文件系统 b 目录\ndocker volume inspect // 查看卷信息\n")])])]),a("blockquote",[a("p",[e._v("需要注意的是，与bind mount不同的是，如果volume是空的而container中的目录有内容，那么 docker 会将container目录中的内容拷贝到 volume 中，而 mount 会将外部的目录覆盖容器内部目录。")])]),e._v(" "),a("h4",{attrs:{id:"共享数据-待"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#共享数据-待"}},[e._v("#")]),e._v(" 共享数据（待）")]),e._v(" "),a("h4",{attrs:{id:"备份-待"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份-待"}},[e._v("#")]),e._v(" 备份（待）")]),e._v(" "),a("h3",{attrs:{id:"bind-mount-绑定挂载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bind-mount-绑定挂载"}},[e._v("#")]),e._v(" bind mount 绑定挂载")]),e._v(" "),a("ul",[a("li",[e._v("使用绑定挂载时，可以存储在主机系统上的任何位置，"),a("strong",[e._v("主机上的文件或目录将安装到容器中")]),e._v("，Docker 主机或 Docker 容器上的非Docker进程可以随时对其进行修改，")]),e._v(" "),a("li",[e._v("设置挂载文件系统路径时，文件或目录由主机上的完整路径引用。该文件或目录不需要在Docker主机上已经存在。如果尚不存在，则按需创建。绑定挂载性能非常好，但是它们依"),a("strong",[e._v("赖于具有特定目录结构的主机文件系统")]),e._v("。")])]),e._v(" "),a("blockquote",[a("p",[e._v("安全注意：使用绑定挂载，您可以通过容器中运行的进程来更改主机文件系统 ，包括创建，修改或删除重要的系统文件或目录。")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 挂载主机目录必须时绝对路径\ndocker run --mount type=bind,source=/a,target=/b ...\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// --mount 标记也可以从主机挂载单个文件到容器中\ndocker run --rm -it \\\n   # -v $HOME/.bash_history:/root/.bash_history \\\n   --mount type=bind,source=$HOME/.bash_history,target=/root/.bash_history \\\n")])])]),a("p",[e._v("相比下，在不保证 Docker 主机具体的目录或文件结构时，使用数据卷可帮助您将Docker主机的配置与容器运行时解耦。")]),e._v(" "),a("h3",{attrs:{id:"tmpfs-内存文件系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tmpfs-内存文件系统"}},[e._v("#")]),e._v(" tmpfs 内存文件系统")]),e._v(" "),a("p",[e._v("tmpfs 存储在主机系统的内存中，并且永远不会写入主机系统的文件系统中。容器在其生存期内可以使用它来存储非持久状态或敏感信息。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.docker.com/storage/tmpfs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方 tmpfs 文档"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"mount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mount"}},[e._v("#")]),e._v(" --mount")]),e._v(" "),a("p",[e._v("绑定挂载和数据卷都可以使用 "),a("code",[e._v("-v")]),e._v(" 或 "),a("code",[e._v("--volume")]),e._v(" 标志安装到容器中，但是两者的语法略有不同。对于 tmpfs 安装，您可以使用该 "),a("code",[e._v("--tmpfs")]),e._v(" 标志。但是，在 Docker 17.06 及更高版本中，建议将 "),a("code",[e._v("--mount")]),e._v(" 统一安装挂载，因为语法更清晰。")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-v")]),e._v(" 或 "),a("code",[e._v("--volume")]),e._v("：由三个字段组成，以冒号（:）分隔。这些字段必须以正确的顺序排列，并且每个字段的含义不是立即显而易见的。\n"),a("ul",[a("li",[e._v("对于命名卷，第一个字段是卷的名称，在给定的主机上是唯一的。对于匿名卷，将省略第一个字段。")]),e._v(" "),a("li",[e._v("第二个字段是文件或目录在容器中的安装路径。")])])]),e._v(" "),a("li",[a("code",[e._v("--mount")]),e._v("：包含多个键值对，以逗号分隔，每个键值对都由一个"),a("key",[e._v("="),a("value",[e._v("元组组成。该 "),a("code",[e._v("--mount")]),e._v(" 语法比更详细的 "),a("code",[e._v("-v")]),e._v(" 或 "),a("code",[e._v("--volume")]),e._v("，但按键的顺序并不显著，并且标志的价值更容易理解。\n"),a("ul",[a("li",[e._v("type，其可以是bind，volume，或 tmpfs。默认 volume。")]),e._v(" "),a("li",[e._v("source。对于命名卷，这是卷的名称。对于匿名卷，将省略此字段。可以指定为source 或src。")]),e._v(" "),a("li",[e._v("destination，其中的文件或目录被安装在容器的路径。可以指定为 destination，dst 或 target。")]),e._v(" "),a("li",[e._v("readonly，会使绑定安装以只读方式安装到容器中。")]),e._v(" "),a("li",[e._v("volume-opt可以多次指定的选项采用键值对，该键值对由选项名称及其值组成。")])])])],1)],1)]),e._v(" "),a("hr"),e._v(" "),a("Vssue",{attrs:{title:e.$title}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);