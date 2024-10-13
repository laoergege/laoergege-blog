import { getCurrentInstance, createVNode, render } from "vue";

type p = Parameters<typeof render>

export default useRender = (...params: p) => {
  const instance = getCurrentInstance()

  const vnode = createVNode(...params)
  vnode.appContext = instance!.appContext

  render(...params)
}