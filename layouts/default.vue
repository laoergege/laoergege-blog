<template>
  <NuxtLoadingIndicator />
  <div class="drawer">
    <main class="drawer-content flex flex-col min-h-screen col-start-1">
      <slot></slot>
      <MyFooter class="mt-auto" />
    </main>
    <SideNavBar class="hidden sm:block" />
    <ClientOnly>
      <Side ref="side" />
    </ClientOnly>
  </div>
</template>

<script setup>
import SideNavBar from "~/components/NavBar.vue";
import Side from "~/components/Side.vue";
import { useSideCtx } from "~/components/Side.vue";

let { side } = useSideCtx()
</script>

<style lang="postcss"  scoped>
.drawer {
  grid-auto-columns: auto;
}

@media screen(md) {
  .drawer {
    grid-template-columns: auto max-content;
  }
}
</style>