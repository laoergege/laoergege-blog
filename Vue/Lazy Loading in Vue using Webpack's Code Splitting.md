> 本文参考自 [Lazy Loading in Vue using Webpack's Code Splitting](https://alexjoverm.github.io/2017/07/16/Lazy-load-in-Vue-using-Webpack-s-code-splitting/)

当一个 Vue 应用变大，延迟加载组件、路由或 vuex模块就变得更加必要了，通过使用Webpack代码分割功能，我们可以在需要的时候加载代码。

我们可以使用懒加载和代码分割在 Vue App 三个地方:
- Component
- Router
- Vuex Modules

但有一点他们都有共同点：他们使用 动态import，因为 Webpack2 能够识别理解。

## Lazy load in Vue components
结合 Vue 的异步组件和 Webpack 的代码分割功能，使用 webpack 2 + ES2015 的语法，可以轻松实现路由组件的懒加载。

在全局注册组件时，使用 import 函数。
```
Vue.component('AsyncCmp', () => import('./AsyncCmp'))
```

也可以在局部注册组件时:
```
new Vue({
  // ...
  components: {
    'AsyncCmp': () => import('./AsyncCmp')
  }
})
```

把 import 函数包裹在箭头函数里，当该组件被请求时，Vue 将执行该箭头函数，加载该模块。

如果要导入的组件在该模块文件中是 命名导出的，eg：
```
// myComponent.js
export function myComponent() {
     ....
}
```
你可以对返回的承诺使用 对象结构 。
```
...
components: {
  UiAlert: () => import('keen-ui').then(({ UiAlert }) => UiAlert)
}
...
```

## Lazy load in Vue router
Vue 路由器内置的懒加载的支持。这就像用导入函数导入组件一样简单。比如说我们想在登录路径中加载一个登录组件：
```
// Instead of: import Login from './login'
const Login = () => import('./login')

new VueRouter({
  routes: [
    { path: '/login', component: Login }
  ]
})
```

## Lazy load a Vuex module
vuex 有 *registerModule* 的方法，使我们能够动态地创建vuex模块。如果我们考虑到在 import函数返回ES模块作为有效负载的承诺，我们可以使用它来延迟加载模块：
```
const store = new Vuex.Store()

...

// Assume there is a "login" module we wanna load
import('./store/login').then(loginModule => {
  store.registerModule('login', loginModule)
})
```

## 总结
结合 vue异步组件 和 webpack2，使用懒加载非常简单。你可以从不同侧面去把你 vue 应用切割成不同的块，并且在需要的时候再去加载它们。

总的来说懒加载主要应用在 vue 的两个方面：
- 组件加载
- vuex 模块加载