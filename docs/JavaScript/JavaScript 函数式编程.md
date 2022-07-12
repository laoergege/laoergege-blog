函数，两个集合的单向映射关系

纯函数
- 纯函数必须带参数
- 相同的输入（参数）将始终产生相同的输出（返回）
- 没有副作用，即不依赖于外部状态、API

函数组合
- pipe
- compose 从右往左

- Thunk
- Curry

## Monad

## 代数效应（Algebraic Effects）

代数效应，就是把函数式中的副作用 Effect 当作代数。

我们实际开发中是很难避免副作用，把副作用当作代数，相当于变相消除副作用，着重关注函数主逻辑 What（做什么），而将副作用How（怎么实现）解耦分离开，使函数关注点保持纯粹。

函数参数模型：将副作用当作函数参数

```js
function x() {}
function y() {}
function z() {}

function getNum() {
    const a = 2 * x()
    const b = 3 * y()
    const c = 4 * z()
    return a + b + c
}

// getNum 直接依赖外部 x、y、z 副作用

// 把依赖当作函数参数变量传递
function getNum(x, y, z) {
    const a = 2 * x()
    const b = 3 * y()
    const c = 4 * z()
    return a + b + c
}
```

调用栈模型：暂停函数执行，将控制权返回其他地方，由外部执行副作用结果后传回来重新执行

```js
function getName(user) {
  let name = user.name;
  if (name === null) {
    name = perform 'ask_name';
  }
  return name;
}

function makeFriends(user1, user2) {
  user1.friendNames.add(getName(user2));
  user2.friendNames.add(getName(user1));
}

const arya = { name: null };
const gendry = { name: 'Gendry' };
try {
  makeFriends(arya, gendry);
} handle (effect) {
  if (effect === 'ask_name') {
    resume with 'Arya Stark';
  }
}
```

### 参考

- [函数式编程中的 algebraic effects 是什么？ - Malcolm Yu的回答 - 知乎](https://www.zhihu.com/question/300095154/answer/1744221759)


- react 为什么走函数式组件开发范式