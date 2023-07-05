<template>
  <ul class="menu menu-xs h-full bg-base-300 rounded-box">
    <li>
      <div class="avatar place-content-center">
        <div class="w-8 rounded-full">
          <img src="/avatar.webp" />
        </div>
      </div>
    </li>
    <li class="ml-2 md:mt-2 md:ml-0">
      <div class="place-content-center" @click="$router.back()">
        <Icon name="mingcute:back-2-line" />
      </div>
    </li>
    <li>
      <div class="place-content-center" @click="$router.back()">
        <Icon name="gg:list" />
      </div>
    </li>
    <li>
      <div class="place-content-center" @click="$router.back()">
        <Icon name="humbleicons:tags" />
      </div>
    </li>
    <!-- <li>
      <div class="form-control" ref="docsearchRef"></div>
    </li> -->
    <li class="ml-auto md:mt-auto md:ml-0">
      <div class="place-content-center">
        <Icon name="iconamoon:search-bold" />
      </div>
    </li>
    <li>
      <ThemeChangeBtn />
    </li>
    <li>
      <a href="" class="place-content-center">
        <Icon name="line-md:github-loop" />
      </a>
    </li>
  </ul>
</template>

<script>
import { RouterLink } from 'vue-router';

// import docsearch from "@docsearch/js";
// import "@docsearch/css";

// const docsearchRef = ref();
// onMounted(() => {
//   docsearch({
//     container: docsearchRef.value,
//     appId: "YOUR_APP_ID",
//     indexName: "YOUR_INDEX_NAME",
//     apiKey: "YOUR_SEARCH_API_KEY",
//   });
// });
</script>