










### props 、state
#### props
- props几乎可以传递所有的内容，包括变量、函数、甚至是组件本身。
- 组件只能根据传入的props渲染界面，而不能在其内部对props进行修改。

#### state
在 React 中 state 是我们进行数据交互的地方，又或者叫做state management状态管理。

组件可分为业务组件和功能组件，业务组件一般用来承载业务数据和与后台交互，通过 state 进行保存业务数据，通过 props 把业务数据以及数据操作传递给功能子组件去展示并且与用户交互。假如 state 分散在应用的各个组件当中，有的负责后端数据交互，有的负责处理用户输入，有的负责界面变换逻辑等等，后期维护起来是相当困难的。因此在开发React应用的过程中，我们应该尽量把 state 集中统一管理，通过 props 把 state 的数据传递到需要的组件当中。

但并不是功能组件就不能拥有自己 state，功能组件可通过 state 保存自己组件状态（除业务数据外），比如 tab组件的 index 状态，并使用 `this.setState` 控制组件渲染。

随着我们开发应用的逐步扩展，它的state会变得越来越庞大复杂，假如分散到各个组件当中，对于日后应用的维护者来说将是一个噩梦。怎么处理怎么储存应用的state非常值得我们深入去思考，由此也就引发了一个问题——状态管理。这也正是我们学习过React之后，在下一个部分的教程中将要介绍的Redux专注解决的问题。

#### this.setState(updater, callback)
- `setState()` 是一次请求而不是一次立即执行更新组件的命令。
- 为了更为客观的性能，React可能会推迟它，稍后会一次性更新这些组件。React不会保证在setState之后，能够立刻拿到改变的结果。使用componentDidUpdate或一个setState回调（setState(updater, callback)）可保证拿到更新后结果，或者使用带签名的updater函数`(prevState, props) => stateChange `
- 除非 shouldComponentUpdate() 返回false，否则setState()永远都会导致重渲。我们可以在此优化组件，**仅当新状态不同于之前状态时调用setState()，将避免不必要的重渲**。











### 事件处理
- React事件绑定属性的命名采用驼峰式写法，而不是小写。
- 在 React 中另一个不同是你不能使用返回 false 的方式阻止默认行为。你必须明确的使用 preventDefault。
- 必须谨慎对待 JSX 回调函数中的 this，因为 JaveScript 函数的特性，类的方法默认是不会绑定当前对象 this 的。可通过类属性初始化使用箭头函数：
```
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```
#### 事件传参
```
//通过箭头函数的方式，事件对象必须显式的进行传递
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
//通过 bind 的方式，事件对象将会被隐式的进行传递，为最后一个
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```


## Redux
### 三大原则
- 单一数据源
  - 整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。
- State 是只读的
  - 唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
- 使用纯函数来执行修改
  - 为了描述 action 如何改变 state tree ，你需要编写 reducers。
### 管理应用状态
> 首先强调一点 redux 并不是必须的。
![容器组件和展示组件.png](http://upload-images.jianshu.io/upload_images/3368741-d811e94d1f28fe52.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![问题.png](http://upload-images.jianshu.io/upload_images/3368741-61ef8b02e4a66a94.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![react + redux 应用结构.png](http://upload-images.jianshu.io/upload_images/3368741-5cd73ee4f7e0ab91.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)








### react + redux + react-redux
Redux 和 React 之间没有关系，Redux 可作为 React 的数据处理中心，来管理应用状态。一般，我们都在容器组件中做数据处理, 创建一些容器组件把这些展示组件和 Redux 关联起来。技术上讲，容器组件就是使用 `store.subscribe()` 从 Redux state 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件。你可以手工来开发容器组件，但建议使用  react-redux 库的 connect() 方法来生成，react-redux 就是为我们把提供  react + redux 联系在一起提供更多方便。

只使用redux的工作流：
> component --> dispatch(action) --> reducer --> subscribe --> getState --> component

使用 react-redux 的工作流：
> component --> actionCreator(data) --> reducer --> component

react-redux 协助组件对 store 的数据订阅管理，并且做了性能优化来避免很多不必要的重复渲染。（这样你就不必为了性能而手动实现 [React 性能优化建议](https://facebook.github.io/react/docs/advanced-performance.html) 中的 shouldComponentUpdate 方法。）

store的三大功能：dispatch，subscribe，getState都不需要手动来写了。react-redux帮我们做了这些，同时它提供了两个好基友 Provider 和 Connect。

- connect(mapStateToProps, mapDispatchToProps, mergeProps, options)  
接受四个参数并且再返回一个函数--wrapWithConnect，wrapWithConnect 接受一个组件作为参数 wrapWithConnect(component)，它内部定义一个新组件Connect(容器组件)并将传入的组件(ui组件)作为Connect的子组件然后return出去。  
所以它的完整写法是这样的：connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(component)
  - mapStateToProps(state, [ownProps])  
  接受两个参数，store的state和自定义的props，并返回一个新的对象，这个对象会作为props的一部分传入ui组件。我们可以根据组件所需要的数据自定义返回一个对象。**如果你省略了这个参数，你的组件将不会监听 Redux store**。ownProps 的变化也会触发 mapStateToProps
  - mapDispatchToProps(dispatch, [ownProps])
    - 如果传递 mapDispatchToProps 是对象，对象属性为 Redux action creator。会被包装成 dispatch ，并合并到 props 中。
    - 如果为函数：mapDispatchToProps(dispatch, [ownProps])，则 dispatch 会作为参数被传入。（提示：你也许会用到 Redux 的辅助函数 bindActionCreators() 把 actionCreators 和 dispatch 包装并作为返回对象属性返回）。
    ```
    export default connect(
      (state) => {
          return {
              count: state.count
          }
      },
      //传递函数
      // (dispatch) => {
      //     return {
      //         increase: () => { dispatch(increase(1)) },
      //         descrease: () => { dispatch(descrease(1)) },
      //     }
      // }
      // 传递对象
      {
          increase,
          descrease
      }
    )(Counter);
    ```
    - 如果你省略这个 mapDispatchToProps 参数，默认情况下，dispatch 会注入到你的组件 props 中。
  - mergeProps(stateProps, dispatchProps, ownProps)：  
  将mapStateToProps() 与 mapDispatchToProps()返回的对象和组件自身的props合并成新的props并传入组件。默认返回 Object.assign({}, ownProps, stateProps, dispatchProps) 的结果。
  - options：
  pure = true 表示Connect容器组件将在shouldComponentUpdate中对store的state和ownProps进行浅对比，判断是否发生变化，优化性能。为false则不对比。

- Provider  
  `<Provider store>` 把根组件嵌套在内，使组件层级中的 connect() 方法产生容器组件都能够获得 Redux store。

更多详细的 react-redux [api](http://cn.redux.js.org/docs/react-redux/api.html)。

#### react --> redux --> react 流程：
![react + redux + react-redux.png](http://upload-images.jianshu.io/upload_images/3368741-574eff9e46c2d712.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

如果 state 发生了变化，react-redux 会对新旧两个state进行浅对比，如果不相同则调用 `this.setState()` 触发Connect组件的更新， 并在 shouldComponentUpdate 生命周期 `return true`。传入新的 props 到 ui组件，触发ui组件的更新。


### 异步 Action
既然 Redux 作为我们的数据处理中心，那 Redux 究竟是如何处理异步数据流的呢?
当调用异步 API 时，你可能需要 dispatch 至少三种 action：
- 发起请求的 action：来告诉 UI 来显示加载界面。
- 请求成功的 action：UI 则会隐藏加载界面，并显示接收到的数据。
- 请求失败的 action：UI 里提示错误信息。

我们可以用一个 action 来表示这个三个 action，就好比如去上班这个一个动作（你要先搭公交再做地铁）。

其实 Redux 异步 Action 很简单，我们只要保证能拿到 dispatch 方法，能够在一个异步动作完成后再发起另一个动作。

- connect(mapStateToProps, mapDispatchToProps, mergeProps, options) 方法第二个参数mapDispatchToProps, 传递为一个回调函数，该函数就能接受 react-redux 传递的 dispatch。

- 用一个函数 action 来表示多个异步 action, 通过中间件注入 dispatch：
  ```
  // 函数 action
  export function getData(params) {
    return function (dispatch) {
        //发起请求，通知 UI 显示加载动画
        dispatch({
            type: FETCH_POSTS_REQUEST
        })
        return fetch(params).then((res) => {
            //请求成功，通知 UI 显示数据
            dispatch({
                type: FETCH_POSTS_SUCCESS,
                data: res.json()
            })
        });
    }
  }
  ```
  ```
  export default connect(
    (state) => {
        return {
            count: state.count
        }
    },
    //传递函数
    (dispatch) => {
        return {
            increase: () => { dispatch(increase(1)) },
            descrease: () => { dispatch(descrease(1)) },
            //将该 dispatch 注入到 props
            getData: getData('./mock/data.json')
        }
    }
    // 传递对象
    // {
    //     increase,
    //     descrease
    // }
  )(Counter);
  ```
  中间件：
  ```
  export default ({ dispatch, getState }) => next => action => {
    if(typeof action === 'function'){
        next(action(dispatch, getState))
    }   
    next(action);
  }
  ```
