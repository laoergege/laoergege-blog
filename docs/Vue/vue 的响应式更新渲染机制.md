# Vue 的响应式更新渲染机制

Vue 的响应式更新渲染机制，也就是 MDV（Model-Driven-View）数据驱动视图的原理。

只需要关注业务数据变化，状态如何映射到 UI，就交给视图层框架

```js
{
  data: () => {
    return {}
  },
  setup(){
    return {}
  }
  render() {}
}
```


## 渲染上下文建立数据与模板联系

模板对数据的引用是通过代理访问渲染上下文

渲染上下文
1. setupState
2. data
3. props
4. instance

代理访问顺序

渲染上下文创建过程

```js
// mountComponent => setupComponent => setupStatefulComponent
function setupStatefulComponent(
  instance: ComponentInternalInstance,
  isSSR: boolean
) {
  const Component = instance.type as ComponentOptions

  // 0. create render proxy property access cache
  instance.accessCache = Object.create(null)
  // 1. create public instance / render proxy
  // also mark it raw so it's never observed
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers))
  if (__DEV__) {
    exposePropsOnRenderContext(instance)
  }
  // 2. call setup()
  const { setup } = Component
  if (setup) {
    const setupContext = (instance.setupContext =
      setup.length > 1 ? createSetupContext(instance) : null)

    setCurrentInstance(instance)
    pauseTracking()
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      ErrorCodes.SETUP_FUNCTION,
      [__DEV__ ? shallowReadonly(instance.props) : instance.props, setupContext]
    )
    resetTracking()
    unsetCurrentInstance()

    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance)

      if (isSSR) {
        // return the promise so server-renderer can wait on it
        return setupResult
          .then((resolvedResult: unknown) => {
            handleSetupResult(instance, resolvedResult, isSSR)
          })
          .catch(e => {
            handleError(e, instance, ErrorCodes.SETUP_FUNCTION)
          })
      } else if (__FEATURE_SUSPENSE__) {
        // async setup returned Promise.
        // bail here and wait for re-entry.
        instance.asyncDep = setupResult
      } else if (__DEV__) {
        warn(
          `setup() returned a Promise, but the version of Vue you are using ` +
            `does not support it yet.`
        )
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR)
    }
  } else {
    finishComponentSetup(instance, isSSR)
  }
}
```


劫持数据的方式改成用 Proxy 实现 ， 以及收集的依赖由 watcher 实例变成了组件副作用渲染函数 。

组件 复用 数据+视图模板