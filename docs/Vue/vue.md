- mountComponent 组件挂载
  - createComponentInstance 创建组件实例
  - setupComponent 设置组件 props, children
    - setupStatefulComponent 调用 setup 设置组件状态
      - handleSetupResult 处理 setup 返回结果
  - setupRenderEffect 设置渲染副作用


1. vue2 vue3 生命周期
2. 钩子注册
3. 组件生命周期执行顺序
4. onVnodeBeforeMount
5. onRenderTracked 和 onRenderTriggered

- 逻辑复用
- 视图逻辑：组件

1. 指令与组件生命周期关系
2. 指令注册
   1. 组件
   2. 应用
3. 指令执行原理
   1. 在组件上使用时，自定义指令将始终应用于组件的根节点
4. 内置指令源码分析
   1. v-model
   2. v-bind
   3. v-on
   4. v-memo
   5. v-pre

fiber 的 diff 过程

state => render => diff => patch

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