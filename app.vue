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
      href: "/favicon.ico",
      sizes: "48x48"
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon-180x180.png",
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
