- SSH(Secure Shell)
  - SSH 的软件架构是服务器-客户端模式（Server - Client）
    - ssh 客户端
    - sshd 服务端
  - 资料
    - [ssh-tutorial](https://github.com/wangdoc/ssh-tutorial)
  - 用法
    - 登录服务器
      - `ssh hostname`
      - `ssh user@hostname`
    - 连接
      - 首次连接会提示远程服务器为陌生地址
      - 服务器指纹
        - 指的是 SSH 服务器公钥的哈希值
        - 每台 SSH 服务器都有唯一一对密钥，用于跟客户端通信，其中公钥的哈希值就可以用来识别服务器
        - SSH 会将本机连接过的所有服务器公钥的指纹，都储存在本机的 `~/.ssh/known_hosts` 文件中
          - 服务器密钥变更
            - 服务器的公钥指纹跟 `~/.ssh/known_hosts` 文件储存的不一样
            - 确认新的公钥：`ssh-keygen -R hostname`
      - SSH 默认采用密码登录
      - SSH 密钥登录
        - SSH 密钥登录采用的是非对称加密，私钥用于签名，公钥用于验证签名
          - ssh-keygen：生成密钥
            - 配置
              - `-t`：指定加密算法，默认 RSA
              - `-C`：指定新的注释，格式为`username@host`
            - 设定密码保护（passphrase）
          - ssh-copy-id：自动上传公钥
            - `ssh-copy-id -i key_file user@host`
            - OpenSSH 规定，用户公钥保存在服务器的 `~/.ssh/authorized_keys` 文件，只要把公钥添加到这个文件之中，就相当于公钥上传到服务器了
            - ssh-copy-id 是直接拼接在 `authorized_keys` 文件内容末尾，需要确保末尾是一个换行符
        - 客户端向服务器发起 SSH 登录的请求
        - 服务器收到用户 SSH 登录的请求，发送一些随机数据给用户，要求用户证明自己的身份
        - 客户端收到服务器发来的数据，使用私钥对数据进行签名，然后再发还给服务器
        - 服务器收到客户端发来的加密签名后，使用对应的公钥解密，然后跟原始数据比较。如果一致，就允许用户登录
        - 关闭密码登录：为了安全性，启用密钥登录之后，最好关闭服务器的密码登录
          - `/etc/ssh/sshd_config`，`PasswordAuthentication no`
      - 客户端配置文件
        - 全局配置文件：`/etc/ssh/ssh_config`
        - 用户个人的配置文件：`~/.ssh/config`
          - 优先级高于全局配置文件
        - 主机设置
          ```
          Host *
          Port 2222
          
          Host remoteserver
          HostName remote.example.com
          User neo
          Port 2112
          ```
    - 执行远程命令
      - SSH 登录成功后，用户就进入了远程主机的命令行环境
      - 直接执行远程命令：`ssh username@hostname command`
        - 提供互动式 Shell：`ssh -t server.example.com emacs`
    - sshd
      - sshd 的配置文件在 `/etc/ssh` 目录，主配置文件是 `sshd_config`，此外还有一些安装时生成的密钥
      - 指定配置：`sshd -f /usr/local/ssh/my_config`
      - sshd 使用非对称密钥
        - 通过配置文件 `sshd_config` 的 `HostKey` 配置项指定私钥
    - 端口转发（port forwarding）/SSH 隧道（tunnel）：利用 SSH 充当服务之间的安全通道转发数据
      - 隧道、端口转发
        - 指的是將网络上的 A、B 兩個端点用某种方式连接起來，形成一個“隧道”
        - 隧道有两个端点，因为 SSH 隧道的目标是连接两个的端口,而过程就像是把对点 A 上的某个端口 X 发送的数据转发到点 B 上的端口 Y,所以 SSH 隧道又称为端口转发
      - 原理
        - ssh 与 sshd 建立连接
        - 把 sshd 当作跳板机，即 sshd 代理转发
      - 模式
        - 本地转发
          - `ssh -L [bind_address:]<port>:<host>:<host_port> <SSH Server>`
          - 将客户端主机某个端口的数据发送到 sshd，再由它转发到目标服务器
        - 远程转发
          - `ssh -R [bind_address:]<port>:<host>:<host_port> <SSH Server>`
          - 将 sshd 远程主机上某个端口接受到的数据转发到客户机，再由客户机转发到目标服务器
        - 动态转发
          - `ssh -D [bind_address:]<port> <SSH Server>`
          - 将客户端主机某个端口的数据发送到 sshd，由它动态转发
        - 配合到其他的 ssh 启动参数
          - `-N` 表示这个 SSH 连接只进行端口转发，不登录远程 Shell，不能执行远程命令，只能充当隧道
          - `-f` 参数表示 SSH 连接在后台运行
      - 连接保持
          - `~/.ssh/config`、`/etc/ssh/ssh_config`
            - ServerAliveInterval
            - ServerAliveCountMax
          - [autossh](https://linux.die.net/man/1/autossh)