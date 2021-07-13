

创建应用
挂载应用
渲染流程
创建 vnode
渲染 vnode
patch(diff)

function _createVNode(
  type: VNodeTypes | ClassComponent | typeof NULL_DYNAMIC_COMPONENT,
  props: (Data & VNodeProps) | null = null,
  children: unknown = null,
  patchFlag: number = 0,
  dynamicProps: string[] | null = null,
  isBlockNode = false
): VNode {


normalizeChildren

功能
vnode block
ref
project、inject
keeplive


hasVnodeHook
export const isReservedProp = /*#__PURE__*/ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ',key,ref,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted'
)

1. shapeFlag、VNodeTypes
   为什么要单独分开 text 等类型

2. shapeFlag 编码作用
以便在后面的 patch 阶段，可以根据不同的类型执行相应的处理逻辑

3. // 标准化子节点，把不同数据类型的 children 转成数组或者文本类型normalizeChildren(vnode, children)

patch 、processXXX、mountXXX/updateXXX、... 、hostXXX

4. reactive 中的 flush

5. diff children

shapeFlag 是什么

optimized

面试
1. 为什么需要响应式数据
2. diff 算法，vue2 与 vue3 diff算法区别


updateComponentPreRender(instance, next, optimized)

更新过程，patchFlag 是什么、作用？
patchFlag 是编译器生成的优化提示，在diff 阶段优化模式下，由优化编译器产的 vdom 只需处理带有 patchFlag 的更新
packages/shared/src/patchFlags.ts
patchElement





shapeFlag 是什么，有什么作用？

vite(f):
1. cli
2. server、ESModule
3. build system、rollup