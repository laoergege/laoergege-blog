

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