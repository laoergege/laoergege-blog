<template>
  <label class="swap swap-rotate" @click="_changeTheme">
    <!-- this hidden checkbox controls the state -->
    <input type="checkbox" id="themeBtn" ref="inputRef" />

    <!-- true -->
    <Icon class="swap-on" name="material-symbols:light-mode-outline" />

    <!-- false -->
    <Icon class="swap-off" name="material-symbols:dark-mode-outline" />
  </label>
</template>

<script setup lang="ts">
import { themeKey, THEMES, useTheme } from "./useTheme";

const { inputRef, changeTheme } = useTheme();

const key = themeKey;
function setTheme(theme: string) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(key, theme);
}

const _changeTheme = () => {
  setTheme(changeTheme());
};

useHead({
  script: [
    {
      children: `
        // On page load or when changing themes, best to add inline in head to avoid FOUC
        ;(function(){
          var theme = "";
          var key = "${themeKey}";
          ${setTheme.toString()}

          if(!(key in localStorage)) {
            if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
              theme = "${THEMES.dark}"
            } else {
              theme = "${THEMES.light}"
            }
          } else {
            theme = localStorage.getItem(key)
          }

          setTheme(theme)
        })()
      `,
    },
    {
      children: `
        document.querySelector("#themeBtn").checked = document.documentElement.dataset.theme === "${THEMES.dark}"
      `,
      tagPosition: "bodyClose",
    },
  ],
});
</script>
