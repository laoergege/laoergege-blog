<template>
  <NuxtLayout>
    <div class="main-container py-12 gap-x-6 gap-y-16 sm:gap-16">
      <div v-for="article in list" :key="article._path" class="place-main">
        <div class="flex flex-wrap items-baseline gap-2">
          <NuxtLink :to="article._path">
            <h2 class="text-xl sm:text-2xl font-semibold hover:text-primary-content">
              {{ article.title }}
            </h2>
          </NuxtLink>
          <div class="flex gap-2">
            <span class="badge badge-ghost dark:badge-outline badge-sm" v-for="tag in article.tags">{{ tag }}</span>
          </div>
        </div>
        <p v-if="article.description" class="text-sm sm:text-base">
          {{ article.description }}
        </p>
      </div>
      <template v-if="isEnd && page > 1">
        <p class="text-center my-4 text-sm place-main">
          暂无更多
        </p>
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
import { useTagsCtx } from "~/components/Tags.vue";
import { createSideCtx } from "~/components/Side.vue";
import { createContentList } from "~/service/content-list";
import type { Filter } from "~/service/content-list";
import { computed, ref } from "vue";

definePageMeta({
  name: "home",
});

// #region 分页
const { selectedTags } = useTagsCtx();
const filter = computed<Filter>(() => (content) => {
  if (!selectedTags.value.length) {
    return true
  }

  const tags = content.tags ?? []
  return tags.some(t => selectedTags.value.includes(t))
})
let { page, list, isEnd } = createContentList({ filter, mode: "infinite" })

const loading = ref(false)
const next = useDebounceFn(() => {
  loading.value = true
  setTimeout(() => {
    page.value += 1
    loading.value = false
  }, 500);
}, 200);

// #region 监听 标签选择，关闭 side 时重新请求列表
const { sideClosed$ } = createSideCtx(ref(null));
watch(sideClosed$, useDebounceFn(() => {
  page.value = 1
}, 500))
// #endregion

// #endregion

// #region SSG 模式下动态生成列表数据和文章
if (import.meta.server) {
  await new Promise((resolve) => {
    setTimeout(() => resolve(null), 1000)
  })
}
// #endregion
</script>
