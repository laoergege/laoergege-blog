<template>
  <label class="swap swap-rotate">
    <!-- this hidden checkbox controls the state -->
    <input
      type="checkbox"
      :checked="isDark"
      :id="btnID"
      @change="changeTheme"
      ref="checkboxRef" />
    <ClientOnly fallback-tag="script" :id="tbtnscript"></ClientOnly>
    <!-- true -->
    <Icon class="swap-on" name="uil:sun" />
    <!-- false -->
    <Icon class="swap-off" name="uil:moon" />
  </label>
</template>

<script setup lang="ts">
import { btnID, tbtnscript } from "./script.server.plugin";
const config = useAppConfig();
const colorMode = reactive(useColorMode());
const theme = computed(() => {
  if (import.meta.server) {
    return colorMode.unknown;
  }

  return colorMode.preference !== "system"
    ? colorMode.preference
    : colorMode.value;
});
const isDark = computed(() => theme.value === config.themes.dark);
const changeTheme = () => {
  colorMode.preference = isDark.value
    ? config.themes.light
    : config.themes.dark;
};
</script>
