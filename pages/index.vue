<template>
  <NuxtLayout>
    <div class="main-container gap-14 sm:gap-16 px-4 py-12">
      <div v-for="article in list" :key="article._path" class="place-main">
        <div class="flex flex-wrap items-baseline gap-2">
          <NuxtLink :to="article._path">
            <h2 class="text-xl sm:text-2xl font-semibold hover:text-primary-content">
              {{ article.title }}
            </h2>
          </NuxtLink>
          <p class="flex gap-2">
            <span class="badge badge-ghost dark:badge-outline badge-sm" v-for="tag in article.tags">{{ tag }}</span>
          </p>
        </div>
        <p v-if="article.description" class="text-sm sm:text-base">
          {{ article.description }}
        </p>
      </div>
      <template v-if="isEnd">
        <p class="text-center my-4 text-sm place-main">
          暂无更多
        </p>
      </template>
      <div class="flex justify-end place-main" v-if="!isEnd">
        <button class="btn btn-ghost" @click="next">
          <span class="loading loading-spinner"></span>
          加载更多
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";
import { useTagsCtx } from "~/components/Tags.vue";
import { createSideCtx } from "~/components/NavBar/Side.vue";
import { createContentList } from "~/service/content-list";
import type { Filter } from "~/service/content-list";
import { computed } from "vue";

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
const { page, list, isEnd } = createContentList({ filter, mode: "infinite" })

const next = useDebounceFn(() => {
  page.value += 1
}, 1000);

// #region 监听 标签选择，关闭 side 时重新请求列表
const { sideClosed$ } = createSideCtx(ref(null));
watch(sideClosed$, useDebounceFn(() => {
  page.value = 1
}, 500))
// #endregion

// #endregion

// #region SSG 模式下动态生成列表数据和文章
// if (process.server && !process.dev) {
//   const generateContentList = (page: number): any => {
//     return queryContent("/")
//       .skip(skip(page))
//       .limit(limit)
//       .sort(sort)
//       .without(without)
//       .find()
//   }

//   let idx = 2;
//   while (true) {
//     const data: ParsedContent[] = await generateContentList(idx++)
//     if (!data.length) {
//       break
//     } else {
//       for (const { _path } of data) {
//         await queryContent(_path as string).findOne()
//       }
//     }
//   }
// }
// #endregion
</script>
