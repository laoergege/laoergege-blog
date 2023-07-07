<template>
  <NuxtLoadingIndicator />
  <div class="drawer md:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <SideNavBar />
    <main class="drawer-content">
      <slot />
      <MyFooter />
      <BottomNavBar />
    </main>
  </div>
  <BackToTop />
</template>

<script setup>
import SideNavBar from "~/components/NavBar/SideNavBar.vue";
import BottomNavBar from "~/components/NavBar/BottomNavBar.vue";
</script>