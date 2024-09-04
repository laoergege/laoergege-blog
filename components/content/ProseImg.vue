<template>
  <NuxtImg
    :src="src"
    class="w-auto max-h-[90vh] mx-auto bg-white p-2"
    ref="elRef"
    data-zoomable="1"
    :loading="isLazy() ? 'lazy' : 'eager'"
    :preload="!isLazy()"
    :width="width"
    :height="height"
    quality="80"
    densities="x1">
  </NuxtImg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
    width: {
      type: [String, Number],
      default: undefined,
    },
    height: {
      type: [String, Number],
      default: undefined,
    },
  },
  async setup({ src }) {
    let i = inject("imgFlag", 0);
    const isLazy = () => i++ > 1;

    // FIX: nuxt-content 和 ipx 会重复对 link 编码
    const _src = decodeURIComponent(src);

    return {
      isLazy,
      src: _src,
    };
  },
});
</script>
