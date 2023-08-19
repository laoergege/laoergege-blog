<template>
  <NuxtLoadingIndicator />
  <div class="drawer">
    <SideNavBar />
    <Side ref="sideRef" />
    <main class="drawer-content">
      <slot />
      <MyFooter class="mt-10" />
      <BottomNavBar />
    </main>
  </div>
</template>

<script setup>
import SideNavBar from "~/components/NavBar/SideNavBar.vue";
import BottomNavBar from "~/components/NavBar/BottomNavBar.vue";
import Side, { useSideContext } from "~/components/NavBar/Side.vue";

const sideRef = ref();
useSideContext(sideRef);
</script>