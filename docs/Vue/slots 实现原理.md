mountComponent setupComponent initSlots
updateComponent updateComponentPreRender updateSlots

注意 slot 里响应数据收集的依赖是嵌套的父节点，不是当前组件

component
- vnode
- subTree
- props
- slots


模板方面没有大的变更，只改了作用域插槽，2.x 的机制导致作用域插槽变了，父组件会重新渲染，而 3.0 把作用域插槽改成了函数的方式，这样只会影响子组件的重新渲染，提升了渲染的性能。
