<template>
  <nuxt-picture format="avif,webp" legacy-format="jpeg" :src="src" :img-attrs="attrs" ref="elRef"
    loading="lazy"></nuxt-picture>
</template>

<script setup lang="ts">
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
});

const attrs = {
  "class": "w-auto max-h-[90vh] mx-auto bg-base-100",
  "data-zoomable": 1
}
</script>