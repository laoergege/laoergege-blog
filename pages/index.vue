<template>
  <NuxtLayout>
    <div class="main-container gap-14 sm:gap-16 px-4 py-12">
      <template v-for="(page, idx) in pages" :key="idx">
        <ContentList :query="page">
          <template v-slot="{ list }">
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
          </template>
          <!-- <template #not-found>
            <p class="text-center my-4 text-sm place-main">
              {{ empty("暂无更多") }}
            </p>
          </template> -->
        </ContentList>
      </template>
      <div class="flex justify-end place-main">
        <button class="btn btn-ghost" @click="next">
          <span class="loading loading-spinner"></span>
          加载更多
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type {
  ParsedContent,
  QueryBuilderParams,
  SortFields,
} from "@nuxt/content/dist/runtime/types";
import { useDebounceFn, watchOnce } from "@vueuse/core";
import { useTagsCtx } from "~/components/Tags.vue";
import { createSideCtx } from "~/components/NavBar/Side.vue";

definePageMeta({
  name: "home",
});

// #region 分页
const { selectedTags$ } = useTagsCtx();
const usePageQuery = () => {
  const limit = 10;
  const sort: SortFields = { updateTime: -1, top: 1 };
  const skip = (p: number) => (p - 1) * limit;
  const without = ["body"];
  return (page: number) => {
    let q: QueryBuilderParams = {
      limit,
      sort: [sort as any],
      skip: skip(page),
      without,
      where: [],
    }

    let t = Object.keys(selectedTags$.value);
    if (t.length) {
      q.where?.push({ tags: { $in: t } })
    }

    return q
  };
};
const pageQuery = usePageQuery();
const pages = ref([pageQuery(1)]);

// #region 监听 标签选择，关闭 side 时重新请求列表
const { sideClosed$ } = createSideCtx(ref(null));
watch(sideClosed$, useDebounceFn(() => {
  pages.value = [pageQuery(1)]
}, 500))
// #endregion

// const isEmpty = ref(false);
// const empty = (text: string) => {
//   isEmpty.value = true;
//   return text
// }
const next = useDebounceFn(() => {
  // if (!isEmpty.value) {
  pages.value.push(pageQuery(pages.value.length + 1));
  // }
}, 1000);
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
