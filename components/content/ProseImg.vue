<template>
  <NuxtImg :src="src" class="w-auto max-h-[90vh] mx-auto bg-base-100" data-zoomable="1" ref="elRef"
    :loading="isLazy ? 'lazy' : 'eager'" :preload="!isLazy" :width="imgSize.width" :height="imgSize.height" quality="80">
  </NuxtImg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

// #region 指定前几张图像预加载、其后的懒加载
let i = 0;
let key = "";
const flag = 1;
const useImgLoading = () => {
  const path = useRoute().path;
  if (key !== path) {
    i = 0;
    key = path;
  } else {
    i++;
  }

  return {
    get isLazy() {
      return i > flag;
    },
  };
};
// #endregion

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
  async setup({ src, width, height }) {
    const { isLazy } = useImgLoading();

    let imgSize = useState("img-size", () => ({ width, height }))
    if (!(width || height) && import.meta.server) {
      const { fetchImgSize } = await import("~/utils/image-size");
      const res = await fetchImgSize(src);
      imgSize.value.width = res?.width;
      imgSize.value.height = res?.height;
    }

    return {
      isLazy,
      imgSize
    };
  },
});
</script>
