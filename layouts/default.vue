<template>
  <VitePwaManifest />
  <NuxtLoadingIndicator />
  <div class="drawer">
    <main class="drawer-content flex flex-col min-h-screen">
      <slot></slot>
      <MyFooter class="mt-auto" />
    </main>
    <SideNavBar class="w-16 md:h-screen sticky bottom-0 md:top-0 none col-start-2 md:col-start-1" />
    <ClientOnly>
      <Side ref="side" />
    </ClientOnly>
    <ClientOnly>
      <PWA/>
    </ClientOnly>
  </div>
</template>

<script setup>
import SideNavBar from "~/components/SideNavBar.vue";
import Side, { useSideCtx } from "~/components/Side.vue";
import PWA from "~/components/PWA.vue";

let { side } = useSideCtx()
</script>