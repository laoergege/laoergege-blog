<template>
  <input id="my-drawer" type="checkbox" class="drawer-toggle" v-model="data.checked" />
  <div class="drawer-side z-10">
    <label for="my-drawer" class="drawer-overlay xl:hidden"></label>
    <div class="w-full sm:w-auto h-screen bg-base-200 text-base-content">
      <div class="flex justify-end">
        <button class="btn btn-circle" @click="closeSide">
          <Icon name="uil:times" />
        </button>
      </div>
      <component :is="data.comp"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { VueInstance } from "@vueuse/core";
import type { Component } from "vue";

const SideComponent = {
  setup() {
    const data = reactive({
      checked: false,
      comp: null
    })

    return {
      data,
      open(comp: Component) {
        data.comp = comp;
        data.checked = true;
      },
      close() {
        data.comp = null;
        data.checked = false;
      },
      closeSide() {
        data.checked = false;
      }
    }
  }
}

type SideCompnentType = typeof SideComponent;

export const SIDE_KEY = "SIDE_KEY";

export const useSideContext = (ref: Ref<VueInstance>) => {
  provide<Ref<VueInstance>>(SIDE_KEY, ref);
}

export const useSide = (comp: Component) => {
  const sideRef = inject<Ref<VueInstance>>(SIDE_KEY);
  return {
    open() {
      sideRef?.value.open(comp);
    },
    close() {
      sideRef?.value.close();
    }
  }
}

export default SideComponent;
</script>