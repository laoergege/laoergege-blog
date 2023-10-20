<template>
  <input id="my-drawer" type="checkbox" class="drawer-toggle" v-model="checked" />
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <div class="h-screen bg-base-200 text-base-content">
      <div class="flex justify-end">
        <slot name="actions">
          <div ref="actionsRef"></div>
        </slot>
        <button class="btn btn-circle" @click="closeSide">
          <Icon name="uil:times" />
        </button>
      </div>
      <component :is="getComp()" v-if="getComp"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from "vue";
import type { InjectionKey } from "vue";
import { createEventEmitter } from "~/utils/event-emiter";

const SideComponent = defineComponent({
  setup(props, { emit }) {
    const checked = ref(false);

    let comp: Component | null = null;
    const open = function (c: Component) {
      comp = c;
      checked.value = true;
    }

    const self = getCurrentInstance();
    const { sideClosed$ } = useSideCtx();
    const closeSide = () => {
      checked.value = false;
      sideClosed$.emit(Date.now())
    }

    const actionsRef = ref<HTMLElement | null>(null)

    return {
      checked,
      getComp() {
        console.log("side comp: ", comp)
        return comp
      },
      from(c: Component) {
        let _comp = c;
        return Object.create(self, {
          open: {
            value: (c?: Component) => {
              return open.call(self, c || _comp)
            }
          }
        }) as SideComponentInstance2
      },
      open,
      closeSide,
      close,
      actionsRef
    }
  }
})

type SideComponentInstance = InstanceType<typeof SideComponent>
type SideComponentInstance2 = SideComponentInstance & {
  open: (c?: Component) => void
}
type SideInstanceRef = Ref<SideComponentInstance2 | null>

export const SIDE_KEY = Symbol("side") as InjectionKey<{
  side: SideInstanceRef,
  sideClosed$: any
}>;
export const createSideCtx = (side: SideInstanceRef) => {
  const sideClosed$ = createEventEmitter("side closed")
  const t = {
    sideClosed$,
    side
  }
  provide(SIDE_KEY, t);
  return t;
}
export const useSideCtx = () => {
  return inject(SIDE_KEY)!
}

export default SideComponent;
</script>