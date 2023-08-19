<template>
  <nuxt-picture format="webp" :src="src" :img-attrs="attrs" ref="elRef" loading="lazy" class="bg-base-100" />
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
  "class": "w-auto max-h-[90vh] mx-auto",
  "data-zoomable": 1
}
</script>