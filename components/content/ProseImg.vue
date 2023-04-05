<template>
  <nuxt-img
    :src="src"
    :alt="alt"
    :width="width"
    :height="height || '60vh'"
    fit="outside"
    class="mx-auto"
    loading="lazy"
    ref="imgRef"
  />
</template>

<script setup lang="ts">
import mediumZoom from "medium-zoom";

defineProps({
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
  sizes: {
    type: String,
    default: "xs:50vw md:50vw",
  },
});

const imgRef = ref();

onMounted(() => {
  const zoom = mediumZoom(imgRef.value.$.vnode.el);
});
</script>
