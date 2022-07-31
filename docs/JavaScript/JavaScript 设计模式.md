## SOLID

- SOLID：面向对象设计原则
  - SOLID 原则是为构建模块化、封装、可扩展和可组合的组件而设计的
  - 原则
    - S：单一职责原则：类的职责应该单一，不要承担过多的职责
    - O：开放封闭原则：对修改封闭转向对外开放扩展（[例子](#开闭原则原则例子)）
      - 实现开放：关键是抽象化
        - 接口
        - 抽象类/基类
          - 里氏代换原则是对“开-闭”原则的补充。基类与子类的继承关系就是抽象化的具体实现，所以里氏代换原则是对实现抽象化的具体步骤的规范
    - L：里氏替换原则：任何基类出现的地方其子类都可以替换，意味着子类可以扩展父类的功能，但尽量不要修改父类的方法
      - 子类可以实现父类的抽象方法，但不能覆盖父类的非抽象方法
      - 当子类的方法重载父类的方法时，方法的前置条件（即方法的输入参数）要比父类的方法更宽松，方法的后置条件（即方法的的输出/返回值）要比父类的方法更严格或相等
      - [SOLID Principles in JavaScript: What Does the "L" Stand For?](https://hackernoon.com/solid-principles-in-javascript-what-does-the-l-stand-for)
    - I：接口隔离原则：接口设计应偏向原子性
    - D：依赖倒置原则（实现开闭原则的基础）：对于功能的依赖应该是依赖抽象而不是具体实现
- 面向抽象，面向组合

### 开闭原则原则例子

```ts
enum LoginType {
  WeChat,
  TaoBao,
  TikTok,
  // ...
}
// 每当新增一个 LoginType，就要对 handler 进行修改
class Login {
  public static handler(type: LoginType) {
    if (type === LoginType.WeChat) { }
    else if (type === LoginType.TikTok) { }
    else if (type === LoginType.TaoBao) { }
    else {
      throw new Error("Invalid Login Type!")
    }
  }
}
```

通过抽象接口，分离具体实现：

```ts
abstract class LoginHandler {
  abstract handler(): void
}

class WeChatLoginHandler implements LoginHandler {
  handler() { }
}

class TaoBaoLoginHandler implements LoginHandler {
  handler() { }
}

class TikTokLoginHandler implements LoginHandler {
  handler() { }
}

class Login {
  public static handlerMap: Record<LoginType, LoginHandler> = {
    [LoginType.TaoBao]: new TaoBaoLoginHandler(),
    [LoginType.TikTok]: new TikTokLoginHandler(),
    [LoginType.WeChat]: new WeChatLoginHandler(),

  }
  public static handler(type: LoginType) {
    Login.handlerMap[type].handler() // 多态：动态调用
  }
}
```


