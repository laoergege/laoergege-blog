<template>
  <NuxtLayout>
    <div class="main-container py-12 gap-x-6 gap-y-16 sm:gap-16">
      <div
        v-for="article in list"
        :key="article._path"
        class="place-main flex flex-col gap-2">
        <NuxtLink :to="article._path">
          <h2 class="text-xl sm:text-2xl font-semibold hover:text-secondary">
            {{ article.title }}
          </h2>
        </NuxtLink>
        <p class="flex gap-2 flex-wrap">
          <span
            class="link link-hover badge badge-md hover:text-secondary"
            :class="{
              'badge-ghost': tagsStore.isSelected(tag),
            }"
            v-for="tag in article.tags"
            @click="tagsStore.selectTagAndMarkURLQuery(tag)">
            #{{ tag }}
          </span>
        </p>
        <p v-if="article.description" class="text-sm sm:text-base">
          {{ article.description }}
        </p>
      </div>
      <template v-if="isEnd && page > 1">
        <p class="text-center my-4 text-sm place-main">暂无更多</p>
      </template>
      <div class="place-main flex justify-end" v-if="!isEnd" key="end">
        <button class="btn btn-ghost" @click="next">
          <span class="loading loading-spinner" v-show="loading"></span>加载更多
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";
import { useTagsStore } from "~/store/tags";
import { createSideCtx } from "~/components/Side.vue";
import { createContentList } from "~/store/content-list";
import type { Filter } from "~/store/content-list";
import { computed, ref } from "vue";

definePageMeta({
  name: "home",
});

const router = useRouter();
const route = useRoute()

// #region 分页
const tagsStore = useTagsStore();
tagsStore.makeTagsByQuery(router.currentRoute.value)
router.beforeEach((to) => {
  if(route.path === to.path) {
    tagsStore.makeTagsByQuery(to)
  }
})
const filter = computed<Filter>(() => (content) => {
  if (!tagsStore.selectedTags.length) {
    return true;
  }

  const tags = content?.tags ?? [];
  return tags.some((t) => tagsStore.selectedTags.includes(t));
});
let { page, list, isEnd } = createContentList({ filter, mode: "infinite" });

const loading = ref(false);
const next = useDebounceFn(() => {
  loading.value = true;
  setTimeout(() => {
    page.value += 1;
    loading.value = false;
  }, 500);
}, 200);
// #endregion

// #region 监听 标签选择，关闭 side 时重新请求列表
const { sideClosed$ } = createSideCtx(ref(null));
watch(
  sideClosed$,
  useDebounceFn(() => {
    page.value = 1;
  }, 500)
);
// #endregion

// #region SSG 模式下动态生成列表数据和文章
if (import.meta.prerender) {
  await new Promise((resolve) => {
    setTimeout(() => resolve(null), 1000);
  });
}
// #endregion
</script>
