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