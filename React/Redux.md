## [Redux](#redux)

虽然 Redux 并不是 React 的一部分，但在开发过程 React 只是帮我们管理视图部分，数据状态管交给了我们自己，而 Redux 经常搭配 React，作为 React 的状态管理，当然这也是可选的。

目前前端开发主要有两个意识：
- 组件化
- MDV（Model Driven View）

所谓组件化，很容易理解，把视图按照功能，切分为若干基本单元，所得的东西就可以称为组件，而组件又可以一级一级组合而成复合组件，从而在整个应用的规模上，形成一棵倒置的组件树。

而 MDV，则是对很多低级 DOM 操作的简化，把对DOM的手动修改屏蔽了，通过从数据到视图的一个映射关系，达到了只要操作数据，就能改变视图的效果。视图只是状态的一种映射，像 Angular、Vue、React 这类框架会帮我们自动同步视图。

但是实际开发中 Model 并不是完全、一对一对应我们的视图，有可能我们仅需要这个 Model 的部分数据进行显示或者我们还需要其他 Model 上的数据，故通常我们会提供一个 ViewModel 层，这个 ViewModel 层才是真正对应我们 View 层，我们在 ViewModel 提供 View 层所需要显示的数据模型和处理用户界面事件的方法。

### Redux主要由三部分组成：store，reducer，action

#### Action

Action 本质上是 JavaScript 普通对象，**用来描述一个动作或事件，并且承载数据**。action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。多数情况下，type 会被定义成字符串常量。当应用规模越来越大时，建议使用单独的模块或文件来存放 action。
```
/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';

/*
 * action 创建函数
 */

export function addTodo(text) {
  // 返回action对象
  return { type: ADD_TODO, text }
}

```

#### Reducer

Action 只是描述了有事情发生了这一事实，并没有指明应用如何更新 state。而这正是 reducer 要做的事情（如何执行动作）。
Reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
```
(previousState, action) => newState
```
> 开发复杂的应用时，不可避免会有一些数据相互引用。建议你尽可能地把 state 范式化，不存在嵌套。把所有数据放到一个对象里，每个数据以 ID 为主键，不同实体或列表间通过 ID 相互引用数据。

>  reducer 一定要保持纯净。只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。

> **一个 reducer 代表、处理着一部分 state**。每个 reducer 的 state 参数都不同，分别对应它管理的那部分 state 数据, 最后把每个 Reducer 合成一个总的应用 Reducer, 每个 Reducer 对应 state 也合成成了整个应用的 state。

实例代码：
```
//todo demo
// todo state
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}
// filter state
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
// 整个 state
function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}
```

#### Store
**Redux 应用只有一个单一的 store**， store 存储着整个应用的 state。

Store 有以下职责：
- 维持应用的 state；
- 提供 getState() 方法获取 state；
- 提供 dispatch(action) 方法更新 state；
- 通过 subscribe(listener) 注册监听器;

#### store，reducer，action 开发流程

1. 构建 actionCreator 创建 action
2. 构建 reducer 函数，使用 combineReducers 组合所有 reducer
3. 调用 creatStore(reducers, init, middlewares) ，传入 reducers，创建 store 
4. store.subscribe(listener)
5. store.dispatch(action)

```JavaScript
// actionCreator
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

// reducer
// 如果 state 是个引用类型，返回新的引用
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}
​
// 当有多个 reducer 时， 使用 combineReducers 组合
const store = createStore(todos, ['Use Redux'])

// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
​
// 分发动作
store.dispatch(addTodo('Read the docs'))
​
// 停止监听 state 更新
unsubscribe();
```

### Redux 应用中数据的生命周期
1. 调用 store.dispatch(action)。
2. Redux store 调用传入的 reducer 函数。
3. 根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树。
4. Redux store 保存了根 reducers  返回的完整 state 树。
  4.1 所有订阅 store.subscribe(listener) 的监听器都将被调用；监听器里可以调用 store.getState() 获得当前 state。

### 异步 Action && middleware
默认情况下，createStore() 所创建的 Redux store 没有使用 middleware，所以只支持 同步数据流。

你可以使用 applyMiddleware() 来增强 createStore()。虽然这不是必须的，但是它可以帮助你用简便的方式来描述异步的 action。

Middleware 格式定义为 
```
middleware = store => next => action => { next(action) } 
```
我们可以使用上述的参数 store、next、 action，编写中间件逻辑。

观看支持 Promise 的 redux-promise 中间件源码:
```javascript
import { isFSA } from 'flux-standard-action';

//判断参数是否为函数
function isPromise(val) {
  return val && typeof val.then === 'function';
}

export default function promiseMiddleware({ dispatch }) {
  return next => action => {
    // 主体

    // action 不为标准的 Flux Action 格式
    if (!isFSA(action)) {
        // 判断 action 是否为 promise
      return isPromise(action)
        ? action.then(dispatch)
        : next(action);
    }

    // action 为标准的 Flux Action 格式
    // 判断 action.payload 是否为 promise
    return isPromise(action.payload)
      ? action.payload.then(
          result => dispatch({ ...action, payload: result }),
          error => {
            dispatch({ ...action, payload: error, error: true });
            return Promise.reject(error);
          }
        )
      : next(action);
  };
}
```

