- VueCore 源码方法调用路径
  - mountComponent 组件挂载
    - createComponentInstance 创建组件实例
    - setupComponent 设置组件 children
      - initProps 初始化 props
      - setupStatefulComponent 调用 setup 设置组件状态
        - handleSetupResult 处理 setup 返回结果
    - setupRenderEffect 设置渲染副作用
  - updateComponent 更新组件
    - shouldUpdateComponent 判断子组件是否需要更新
  - setupRenderEffect 设置组件渲染副作用
    - componentUpdateFn 组件更新方法
      - updateComponentPreRender 调用组件 render 前的任务操作
        - updateProps


1. vue2 vue3 生命周期
2. 钩子注册
3. 组件生命周期执行顺序
4. onVnodeBeforeMount
5. onRenderTracked 和 onRenderTriggered

6. 指令与组件生命周期关系
7. 指令注册
   1. 组件
   2. 应用
8. 指令执行原理
   1. 在组件上使用时，自定义指令将始终应用于组件的根节点
9. 内置指令源码分析
   1. v-model
   2. v-bind
   3. v-on
   4. v-memo
   5. v-pre





```js
function workLoop() {
  while (wip && shouldYield()) {
    performUnitOfWork();
  }

  if (!wip && wipRoot) {
    commitRoot();
  }
}

function performUnitOfWork() {
  const { tag } = wip;

  switch (tag) {
    case HostComponent:
      updateHostComponent(wip);
      break;

    case FunctionComponent:
      updateFunctionComponent(wip);
      break;

    case ClassComponent:
      updateClassComponent(wip);
      break;
    case Fragment:
      updateFragmentComponent(wip);
      break;
    case HostText:
      updateHostTextComponent(wip);
      break;
    default:
      break;
  }

  if (wip.child) {
    wip = wip.child;
    return;
  }

  let next = wip;

  while (next) {
    if (next.sibling) {
      wip = next.sibling;
      return;
    }
    next = next.return;
  }

  wip = null;
}

function updateClassComponent(wip) {
  const { type, props } = wip;
  const instance = new type(props);
  const children = instance.render();

  reconcileChildren(wip, children);
}

function updateFunctionComponent(wip) {
  renderWithHooks(wip);

  const { type, props } = wip;

  const children = type(props);
  reconcileChildren(wip, children);
}
```

props 分流 attrs props， why？
事件派发如何处理？
shouldUpdateComponent
needCastKeys 是什么




```ts
function setFullProps(
  instance: ComponentInternalInstance,
  rawProps: Data | null,
  props: Data,
  attrs: Data
) {
  const [options, needCastKeys] = instance.propsOptions
  let hasAttrsChanged = false
  let rawCastValues: Data | undefined
  if (rawProps) {
    for (let key in rawProps) {
      // key, ref are reserved and never passed down
      if (isReservedProp(key)) {
        continue
      }

      const value = rawProps[key]
      // prop option names are camelized during normalization, so to support
      // kebab -> camel conversion here we need to camelize the key.
      let camelKey
      if (options && hasOwn(options, (camelKey = camelize(key)))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value
        } else {
          ;(rawCastValues || (rawCastValues = {}))[camelKey] = value
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value
          hasAttrsChanged = true
        }
      }
    }
  }

  if (needCastKeys) {
    const rawCurrentProps = toRaw(props)
    const castValues = rawCastValues || EMPTY_OBJ
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i]
      props[key] = resolvePropValue(
        options!,
        rawCurrentProps,
        key,
        castValues[key],
        instance,
        !hasOwn(castValues, key)
      )
    }
  }

  return hasAttrsChanged
}
```