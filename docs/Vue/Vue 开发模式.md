# Vue 应用的业务开发架构探索

业务流

- 业务逻辑
- 组件优先
  - 问题
    - 状态管理
    - 逻辑耦合
- 分层架构
- 安全
- 可访问性

- 业务逻辑
  - 数据逻辑
  - 交互逻辑
- 前端
  - 交互逻辑（主要）
    - 用户交互
    - 数据交互
      - 数据（消费）展示
      - （与后端）数据通信
  - 数据逻辑（部分）
    - 缓存数据
    - 状态管理

## 组件优先

智能组件/容器组件：与服务通信并渲染子组件

哑组件/展现组件：通过 Input 接受数据，通过 Output 发送数据变更

数据流向下，事件流向上。

单向数据流可以推动组件复用，并且可以提高性能

此规则偶尔会出现例外。当你拥有嵌套的哑组件时，在最顶层的哑组件中提供一个组件服务会更有效，子组件们可以共享状态，并通过最顶层的发射器来通报 ui 状态的变化

## 分层架构

MVC 是一种软件架构模式，通常用于开发用户界面，主要是在解决数据逻辑和视图逻辑的分离问题；**MVC 在不同编程领域有不同的通信模型变化**，而在 web 前端领域里通常是 MVP 和 MVVM 的 MVC 变种模型，并且前端的 MVC 对应整个 web 应用的 MVC 模型中的 V。



主要由三部分组成

- Model：应用的状态管理和业务逻辑
- View：视图渲染和视图逻辑管理
- Controller：控制器，接受、处理用户指令，调度数据模型和视图通信

![图 3](./images/1654518410646.png)  



- 视图层：前端业务开发本质上是视图驱动
  - 现代视图渲染引擎
    - UI = f(state)
    - MDV
    - Component First
- 逻辑层
  - 组件化：应用逻辑拆分、复用
  - 视图逻辑
  - 业务逻辑
- 数据层：
  - Service + Store/Model + IOC + Context
  - Servcie = Store + API


- 数据层
  - Store
  - Service：前端和后端的数据交互层
- 逻辑层
- 视图层
  - V
  - VM


一个前端组件应该包含以下两种类型的state：
1. 业务型state，这种一般由后端直接返回，跟后端的View是保持一致的

2. 交互型state，纯前端的state
怎样合理管理以上两种state决定了组件的复杂程度，可能需要解决两种逻辑分离？逻辑复用？解耦？

前后分离的，前端本身就没正真意义上的 Model，有也是缓存部分业务数据和用户交互的那部分业务逻辑

框架本身核心就是要提供一个更好用的视图层，框架的 model 还是服务于 view 的。至于业务的 model，并不是他们所关心的，而是要开发者自己去设计。

- 状态
  - UI 状态（对业务数据的聚合转换）
  - 部分业务状态
    - 状态机：业务本质就是状态之间的转移
- 逻辑
  - 视图逻辑：完成用户交互
  - 业务逻辑
    - 业务数据展示
    - 
- mvc
- 基于组件的架构
- component first + hooks composite
- 视图层 = 视图逻辑 + 视图状态
- 业务层 = 业务数据状态 + 交互指令
- 控制层 = 视图、业务指令调度
  - 不同端

组件是视图构成基本单位、视图模板与逻辑状态是最小复用单位

组件以视图为中心、视图驱动，视图模型 = 组件 + 视图逻辑，State 是围绕 View 的消费和交互需求而产生的，View 是组件真正核心的部分

- 过去思路：视图驱动，组件优先
  - State/View 放到一个函数里，还是 class 里，State/View 之间都构成了一一对应的绑定关系。State 是围绕 View 的消费和交互需求而产生的，View 是组件真正核心的部分。
  - 当 State 和 View 绑定起来时，难以达到最大化 Model 层代码复用的目标。
   1. state 离不开视图
   2. 需要什么请求什么



1. hook 分离
2. model = action + state
3. 视图层 数据消费
4. view 分层
   1. Container-Component；
   2. Atom-Component/Atom-Element；

## 视图驱动

前端在开发一个业务的时候，总是先从界面出发，看着界面想我这里要怎么做怎么做，等把界面交互大致写出来之后，再把产品文档里面的业务逻辑作为一些判断条件加入到写好的交互代码中，最终交付。

数据驱动：组件只做数据消费

我们如何才能合理的区分哪些代码是业务的，哪些代码是交互的，应该如何组织代码才能高效的解决自己遇到的烦恼？



## 状态管理

> 理解「状态」是什么，理解「状态」的类型

- 状态分类
  - UI 状态
    - 查询
  - 资源状态
    - [react-query](https://github.com/tannerlinsley/react-query)
  - 应用状态
  - 流程状态
    - 状态机
  - 业务流
  - 事件流
    - rxjs

"状态管理" 的核心就是解决数据通信及规范化问题，现代化前端的状态管理库基本有以下考量：
1. 如何驱动 UI
2. 组合与抽象
3. 全局单例 vs 树形结构的局部单例
4. 状态订阅
5. 状态更新的方法是同步或异步的、副作用隔离
6. TypeScript
7. 提供异步事件流管理方案

## 响应式体系下的组件化



- 实践
  - 元数据化
  - 去中心？
    - 顶层请求，下发数据 → 组件自身处理请求
    - 状态提升 → 组件自治
    - Provider & Container components → just Hooks
      - Container components 唯一单例


1. 视图层只做 data 消费，业务写在 Model 层，建立业务模型对象
2. 不要基于响应式实现业务逻辑
   1. 响应式开发下，关注点的已经是数据流
   2. 业务开发下，更应该关注的是业务模型，行为指令，这才是最好维护的。
3. 不要视图驱动业务模型
4. 不要在组件里写业务逻辑
5. 视图层只做 data 消费，业务写在 Model 层
6. 视图驱动
7. 组件只是应用逻辑划分，视图构成基本单位；
8. 通信
   1. 注入
   2. 领域

```js
class User {
  userID

  @asyncComputed
  user() {
    return fetch('/api/user/' + this.userID)
  }
}
```


- 如何组件化？
  - 组件 = 状态逻辑 + 渲染
  - 状态处置
    - 外置
      - props
      - context
    - 内置
  - 组件分类
    - 有状态：容器组件
    - 无状态：展示组件
    - 半状态：交互组件
      - 内部状态获取
        - event emit
        - context
  - 状态逻辑解耦思考
    1. 业务状态逻辑分散在各个组件，但组件树结构导致通信困难？
    2. Redux，将散落在组件里面的状态聚拢起来成单例模式，形成状态 action => store => component 的单向通模型
       - 范式啰嗦
       - 缺失模块化
    3. 状态逻辑：面向对象 + 面向组合
  - 状态共享：消除状态多级分割带来的痛心困难，以平铺一级的单例模式进行状态共享
  - 状态上下文：利用多级结构形成上下文控制
  - 状态依赖：响应式、数据流、组合计算
  - 组件状态逻辑复用：hooks + 组合
    - 原子
    - 容器

## 数据流设计

- Pina
 - TypeScript 支持
 - DevTools 支持
   - 动作、响应追踪
   - 商店出现在使用它们的组件中
   - 时间旅行和更容易的调试
 - 热模块更换
 - SSR 支持
 - 插件扩展
 - 轻量、tree-shaking
 - api
   - defineStore 定义数据模型
- featrue
  - class 范式
  - DI

```js
import { inject, provide, reactive } from "vue";
const STORE_KEY = "xxx";
export function useUserService(options) {
  return inject(STORE_KEY) && createUserService(options);
}
export function createUserService(options) {
  return provide(STORE_KEY, Service, options);
}

@Injectable()
class UserService {
  #name;

  constructor() {
    super();
  }
  get fullName() {
    return;
  }
}

class User {}

@Use(User)
class Student {}

export { createStore, useStore };
```

## Vue3 组件开发范式

```js
// 1.对象式 setup 组件
const App = {
  name: "xxx",
  props: ["xxx"],
  setup(props, ctx) {
    // 1.返回状态
    //return {}

    // 2.返回渲染函数
    return () => h("xxx");

    // 探索模板字符串标签
    // return () => vue`<div>{{xxx}}</div>`
  },
};

// 2.函数式组件（本质渲染函数，vue3 后函数组件的函数签名跟状态组件 setup 保持一致）
// const App = (props, ctx) => {
//   return <div>{xxx}</div>
// }

// 3. setup 函数
// const App = (props, ctx) => {
//   return () => <div>{xxx}</div>
// }
// defineComponent(App)

// App.props = ['value']
// App.emits = ['click']
```


  
try catch 分流

数据  =》 service
状态（对象在不同时间段所处的样子）
事件流

Model 不再跟 View 一块绑定到 Controller 的属性中。Model 是单独定义的，通过暴露的 React-Hooks API，在 React-DOM 组件里使用，同时它也可以在 React-Native 组件中使用。

## Vue 模块



## 参考

- [面向 Model 编程的前端架构设计](https://mp.weixin.qq.com/s/g4hnfirDmyeuXAdEt-zk9w)




