<template>
  <label class="swap swap-rotate">
    <!-- this hidden checkbox controls the state -->
    <input type="checkbox" :checked="isDark()" :id="btnID" @change="changeTheme" ref="checkboxRef" />
    <ClientOnly fallback-tag="script" :id="tbtnscript"></ClientOnly>
    <!-- true -->
    <Icon class="swap-on" name="uil:sun" />
    <!-- false -->
    <Icon class="swap-off" name="uil:moon" />
  </label>
</template>

<script setup lang="ts">
import { btnID, tbtnscript } from "./script.server.plugin"
const colorMode = useColorMode();
const changeTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark"
};
const isDark = () => {
  return !process.server ? colorMode.preference === "dark" : false
}
</script>