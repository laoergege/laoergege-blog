# JavaScript 函数式编程

- 函数式编程范式
    - 好处
      - 确定性、可预测性，便于文档化和移植、测试
      - 可做缓存
      - 并行代码：纯函数根本不需要访问共享的内存，而且根据其定义，纯函数也不会因副作用而进入竞争态（race condition）



## 代数效应（Algebraic Effects）

实际开发中是很难避免副作用。代数效应，就是把函数式编程中的副作用 Effect 当作代数，将副作用从函数中隔离开，着重关注函数主逻辑 What（做什么），而解耦副作用How（怎么实现），使函数关注点保持纯粹。

如何将副作用代数化，我总结了以下两种方法：

1. 函数参数模型：将副作用当作函数参数

```js
async function biz(id) {
  const infoId = /* do some calc */ id; // 这里可以理解为是一大段计算逻辑
  const info = await getInfo(infoId);   // 副作用，与 server 通信
  const dataId = /* do some calc */ info.dataId; // 这里可以理解为是一大段计算逻辑
  const data = getData(dataId);         // 副作用，非幂等操作
  return /* do some calc */ data.finalCalcData;  // 这里可以理解为是一大段计算逻辑
}
```

代数效应化后：

```js
async function biz(id, getInfo, getData) {
  const infoId = /* do some calc */ id; // 这里可以理解为是一大段计算逻辑
  const info = await getInfo(infoId);   // 副作用，与 server 通信
  const dataId = /* do some calc */ info.dataId; // 这里可以理解为是一大段计算逻辑
  const data = getData(dataId);         // 副作用，非幂等操作
  return /* do some calc */ data.finalCalcData;  // 这里可以理解为是一大段计算逻辑
}
```

2. 可恢复的调用栈模型：暂停函数执行，将控制权返回其他地方，由外部执行副作用结果后传回来重新执行

```js
function getName(user) {
  let name = user.name;
  if (name === null) {
    name = perform 'ask_name'; // 执行 代数
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

### 学习参考

- [函数式编程中的 algebraic effects 是什么？ - Malcolm Yu的回答 - 知乎](https://www.zhihu.com/question/300095154/answer/1744221759)




