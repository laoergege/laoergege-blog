<template>
  <NuxtImg :src="src" class="w-auto max-h-[90vh] mx-auto bg-white p-2" ref="elRef" data-zoomable="1"
    :loading="isLazy ? 'lazy' : 'eager'" :preload="!isLazy" :width="width" :height="height" quality="80" densities="x1">
  </NuxtImg>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
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
  async setup(props) {
    const { width, height, src } = props;
    const { isLazy } = useImgLoading();

    // FIX: nuxt-content 和 ipx 会重复对 link 编码
    const _src = decodeURIComponent(src)

    let imgSize = useState(`img-size-${i}`, () => ({ width, height }))
    if (!(width || height) && import.meta.server) {
      const { fetchImgSize } = await import("~/server/utils/image-size");
      const { width, height } = await fetchImgSize(_src);
      imgSize.value = {
        width,
        height
      }
    }

    return {
      isLazy,
      ...toRefs(imgSize.value),
      src: _src,
    };
  },
});
</script>
