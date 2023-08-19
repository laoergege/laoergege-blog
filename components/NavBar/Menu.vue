<template>
  <ul class="menu menu-xs h-full bg-base-200">
    <li>
      <div class="avatar place-content-center">
        <div class="w-8 rounded-full">
          <img src="/avatar.webp" />
        </div>
      </div>
    </li>
    <div class="divider mx-0 md:m-0 md:mx-auto md:w-1/3 divider-horizontal md:divider-vertical"></div>
    <li v-if="!isHome">
      <div class="place-content-center" @click="backHome">
        <Icon name="uil:home-alt" />
      </div>
    </li>
    <li v-if="isHome">
      <div class="place-content-center">
        <Icon name="uil:tag-alt" @click="openTagsSide" />
      </div>
    </li>
    <li v-if="isPostPage">
      <div class="place-content-center" @click="openTocSide">
        <Icon name="uil:list-ui-alt" />
      </div>
    </li>
    <li v-if="isPostPage">
      <div class="place-content-center" @click="scrollToTop">
        <Icon name="uil:top-arrow-to-top" />
      </div>
    </li>
    <!-- <li>
      <div class="form-control" ref="docsearchRef"></div>
    </li> -->
    <!-- 固定菜单 -->
    <i class="ml-auto md:mt-auto md:ml-0"></i>
    <div class="divider mx-0 md:m-0 md:mx-auto md:w-1/3 divider-horizontal md:divider-vertical"></div>
    <li>
      <div class="place-content-center">
        <Icon name="uil:search" />
      </div>
    </li>
    <li>
      <ThemeChangeBtn />
    </li>
    <li>
      <a href="" class="place-content-center">
        <Icon name="uil:rss-interface" />
      </a>
    </li>
    <li>
      <a href="" class="place-content-center">
        <Icon name="line-md:github-loop" />
      </a>
    </li>
  </ul>
</template>

<script setup lang="tsx">
import { useRouter } from "vue-router";
import { useSide } from "./Side.vue";
import Toc from "~/components/Toc.vue";

const router = useRouter();
const { path, name } = router.currentRoute.value;
const isPostPage = /\/posts\/.+/.test(path);

// 置顶
const scrollToTop = (): void => window.scrollTo({ top: 0, behavior: 'smooth' });

// #region 主页
const isHome = name === "home";
const backHome = () => { router.replace({ name: "home" }) }
// #endregion


// #region 标签侧边
const showTagsBtn = /\/posts\/.+/.test(path);
const Tags = {
  setup() {
    return () => (
      <div>
        <div class="badge">{ }</div>
      </div>
    )
  }
}
const tagsSide = useSide(Tags);
const openTagsSide = () => {
  tagsSide.open()
}
// #endregion

// #region 文章内容目录
const tocSide = useSide(Toc)
const openTocSide = () => {
  tocSide.open()
}
// #endregion

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