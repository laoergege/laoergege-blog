- Linux 信号
  - `kill -l`：查看所有信号
  - `kill <pid>`：默认发送 SIGTERM（15）信号，终止进程
  - `kill -<sig> <pid>`
  - 进程信号处理 
    - 默认缺省行为
    - 忽略
    - 捕获，自定义处理
      - SIGSTOP（19）和 SIGKILL（9）用户无法捕获自定义处理，自能默认系统行为
  - 常见信号
    - SIGKILL（9）：强制终止进程
    - SIGTERM（15）：终止进程



```shell
cat /proc/1/status | grep -i SigCgt
SigCgt:     0000000000010002
```