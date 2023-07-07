<template>
  <ul class="menu menu-xs h-full bg-base-300 rounded-box">
    <li>
      <div class="avatar place-content-center">
        <div class="w-8 rounded-full">
          <img src="/avatar.webp" />
        </div>
      </div>
    </li>
    <div class="divider mx-0 md:m-0 md:mx-auto md:w-1/3 divider-horizontal md:divider-vertical"></div>
    <li>
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
import { useRouter } from "vue-router";

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

const router = useRouter()

const isHome = () => (router.currentRoute.value.path === "/")
</script>