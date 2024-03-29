- 软件
  - 程序 = 算法 + 数据结构
  - [编程范式](#编程范式)
  - 软件设计
    - 设计模式
    - 软件架构
  - 软件工程

## 编程范式

- 编程范式
  - 编程范式指的是程序的编写模式，意味着主要使用的是什么样的代码结构
    - **编程范式的本质主要是对程序员的能力施加了约束**
  - 编程语言的发展就是一个逐步远离计算机硬件，向着待解决的领域问题靠近的过程。从结构化编程到面向对象编程，再到函数式编程，离图灵机模型越来越远，但抽象程度越来越高，与领域问题的距离越来越近
  - 分类：宏观上，编程语言可以大致分为两类，一类是命令式，一类是声明式：
    - 命令式：通过一系列顺序指令来告诉计算机怎么做
    - 声明式：只需要说明实现的目标，总而言之就是它是定义结果而不是定义步骤
  - 主流编程模型
    - 结构化编程，也称作过程式编程，或面向过程编程
      - 第一次软件危机的根源在于软件的“逻辑”变得非常复杂：软件规模越来越庞大、goto 指令的灵活滥用导致面条似的代码逻辑 => 结构化程序设计方法
        - 限制使用 goto 语句，**对程序控制权的直接转移施加了约束**，采取“自顶向下、逐步细化、模块化”的指导思想
        - 结构化程序设计本质上还是一种面向过程的设计思想，但通过“自顶向下、逐步细化、模块化”的方法，将软件的复杂度控制在一定范围内，从而从整体上降低了软件开发的复杂度
      - 通过一些结构化的控制结构进行程序的构建
        - 顺序结构
        - 选择结构 if/switch/match 
        - 循环结构 for/while
      - 缺点
        - 自定而下功能分解，这种结构下模块具有**强依赖性**、**抽象性不够**：一旦需求变动，经常是牵一发而动全身，关联的模块由于依赖关系的存在都需要变动，**无法有效隔离变化**
        - **可测试性不够**
    - [面向对象编程](./面向对象编程.md)
    - [函数式编程](./函数式编程.md)