<template>
  <div class="md:h-screen sticky bottom-0 md:top-0 none">
    <ul
      class="menu menu-xs menu-horizontal md:menu-vertical w-full h-full bg-base-200 items-center gap-1">
      <li>
        <div class="avatar place-content-center">
          <div class="w-8 rounded-full">
            <img src="/avatar.webp" />
          </div>
        </div>
      </li>
      <li>
        <div class="place-content-center" @click="openSearchDialog">
          <Icon name="uil:search" />
        </div>
      </li>
      <!-- 动态菜单 -->
      <li v-if="!isHome">
        <div class="place-content-center" @click="backHome">
          <Icon name="uil:home-alt" />
        </div>
      </li>
      <li v-if="isHome">
        <TagBtn />
      </li>
      <li v-if="isPostPage">
        <TocBtn />
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
      <i class="ml-auto sm:mt-auto"></i>
      <li>
        <ThemeChangeBtn />
      </li>
      <!-- <li>
      <a href="" class="place-content-center">
        <Icon name="uil:rss-interface" />
      </a>
    </li> -->
      <li>
        <a href="https://github.com/laoergege" class="place-content-center">
          <Icon name="line-md:github-loop" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="tsx">
import { useRouter } from "vue-router";
import { useSideCtx } from "./Side.vue";
import Toc from "~/components/Toc.vue";
import Tags from "~/components/Tags.vue";
import { resolveComponent, defineComponent } from "vue";

const Icon = resolveComponent("Icon");

const router = useRouter();
const { path, name } = router.currentRoute.value;
const isPostPage = /\/posts\/.+/.test(path);

// #region 搜索功能
const openSearchDialog = async () => {
  // const { dialog } = useDialogCtx();
  // const searchDialog = dialog.value?.from(SearchDialog);
  // searchDialog?.open();
  const results = await searchContent("rust");
  console.log(results);
};
// #endregion

// 置顶
const scrollToTop = (): void => window.scrollTo({ top: 0, behavior: "smooth" });

// #region 主页
const isHome = name === "home";
const backHome = () => {
  router.replace({ name: "home" });
};
// #endregion

// #region 标签侧边
const TagBtn = defineComponent(() => {
  const { side } = useSideCtx();
  const tagsSide = computed(() => {
    return side.value?.from(Tags);
  });
  const openTagsSide = () => {
    tagsSide.value?.open();
  };

  return () => (
    <div class="place-content-center">
      <Icon name="uil:tag-alt" onClick={openTagsSide} />
    </div>
  );
});
// #endregion

// #region 文章内容目录
const TocBtn = defineComponent(() => {
  const { side } = useSideCtx();
  const tocSide = computed(() => {
    return side.value?.from(Toc);
  });
  const openTocSide = () => {
    tocSide.value?.open();
  };
  return () => (
    <div class="place-content-center">
      <Icon name="uil:list-ui-alt" onClick={openTocSide} />
    </div>
  );
});
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
