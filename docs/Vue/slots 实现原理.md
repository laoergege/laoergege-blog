mountComponent setupComponent initSlots
updateComponent updateComponentPreRender updateSlots

注意 slot 里响应数据收集的依赖是嵌套的父节点，不是当前组件

component
- vnode
- subTree
- props
- slots