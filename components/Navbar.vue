<template>
  <div class="navbar bg-base-100 sticky top-0 z-50">
    <div class="flex-1">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="/avatar.webp" />
        </div>
      </label>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control" ref="docsearchRef"></div>
      <Icon name="uil:github" />
      <ThemeChangeBtn />
    </div>
  </div>
</template>

<script setup lang="ts">
import ThemeChangeBtn from "./theme/ThemeChangeBtn.vue";
import docsearch from "@docsearch/js";
import "@docsearch/css";

const docsearchRef = ref();
onMounted(() => {
  docsearch({
    container: docsearchRef.value,
    appId: "YOUR_APP_ID",
    indexName: "YOUR_INDEX_NAME",
    apiKey: "YOUR_SEARCH_API_KEY",
  });
});
</script>
