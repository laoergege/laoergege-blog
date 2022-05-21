# Vue 应用的业务开发架构

- 数据层：Service + Store/Model + IOC + Context
  - Servcie = Store + API
- 逻辑层：组件化 => 应用逻辑拆分、复用
- 视图层
  - 视图逻辑抽象 => Virtual-DOM
  - `UI is a calculation` => `UI = f(state)` => `不应该参杂副作用 useEffect` 、`组合模式、参考函数式编程`
- 底层渲染层：dom + css

## 状态

> 理解「状态」是什么，理解「状态」的类型

- 状态分类
  - UI 状态
  - 资源状态
    - [react-query](https://github.com/tannerlinsley/react-query)
  - 应用会话
  - 流程状态
    - 状态机
  - 事件流
    - rxjs

## 业务体系下的组件化

- 业务本质就是状态之间的转移
- 最佳范式：以面向对象进行业务逻辑状态建模，以 UI = f(state) 偏函数式进行状态逻辑组合、UI 计算
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

## 数据流设计

- Pina
 - TypeScript 支持
 - 插件机制
 - 热模块更换
   - 在不重新加载页面的情况下修改您的商店
   - 在开发时保持现有状态任何
 - 开发工具支持
   - 动作、响应追踪
   - 商店出现在使用它们的组件中
   - 时间旅行和更容易的调试
 - 服务器端渲染支持
 - api
   - defineStore

```js
import { inject, provide, reactive } from "vue";
const STORE_KEY = "xxx";
export function useUserService() {
  return inject(STORE_KEY);
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
