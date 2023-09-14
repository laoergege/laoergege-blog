<template>
  <NuxtLoadingIndicator />
  <div class="drawer">
    <main class="drawer-content">
      <slot />
      <MyFooter class="mt-10" />
      <BottomNavBar class="sm:hidden" />
    </main>
    <SideNavBar class="hidden sm:block" />
    <ClientOnly>
      <Side ref="side" />
    </ClientOnly>
  </div>
</template>

<script setup>
import SideNavBar from "~/components/NavBar/SideNavBar.vue";
import BottomNavBar from "~/components/NavBar/BottomNavBar.vue";
import Side from "~/components/NavBar/Side.vue";
import { useResponsiveSizeCtx } from "~/utils/window-size";
import { useSideCtx } from "~/components/NavBar/Side.vue";

// const { sm } = useResponsiveSizeCtx();
let { side } = useSideCtx()
</script>

<style scoped>
.drawer {
  grid-template-columns: auto max-content;

  .drawer-content {
    grid-column-start: 1;
  }
}
</style>