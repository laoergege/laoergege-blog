<template>
  <NuxtPage />
</template>

<script setup>
import { createResponsiveSizeCtx } from "~/utils/window-size";

createResponsiveSizeCtx();

useHead({
  link: [
    {
      rel: "icon",
      href: "/avatar.webp",
      type: "image/webp",
    },
  ],
});
</script>

<style lang="postcss">
@import url("~/assets/index.css");

#__nuxt ::selection {
  color: theme("textColor.accent-content");
  background-color: theme("textColor.accent");
}
</style>
