<template>
  <NuxtLayout>
    <div class="max-w-screen-md mx-auto flex flex-col gap-12 sm:gap-14">
      <template v-for="(page, idx) in pages" :key="idx">
        <ContentList :query="page" >
          <template v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
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
              <p v-if="article.description" class="text-sm sm:text-base">{{ article.description }}</p>
            </div>
          </template>
          <template #not-found>
            <p class="text-center my-4 text-sm">
              {{ empty() || "暂无更多"}}
            </p>
          </template>
        </ContentList>
      </template>
      <div class="join grid grid-cols-2" v-if="!isEmpty">
        <button class="join-item btn btn-outline">上一页</button>
        <button class="join-item btn btn-outline" @click="next">下一页</button>
      </div>
      <!-- <button v-if="!isEmpty" class="btn btn-ghost self-center" @click="next">load more...</button> -->
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { ParsedContent, QueryBuilderParams, SortFields } from '@nuxt/content/dist/runtime/types'
import { useDebounceFn } from '@vueuse/core'

const limit = 10;
const sort: SortFields = { updateTime: -1, top: 1 };
const skip = (p: number) => (p - 1)*limit;
const without = ['body']

const queryPage = (page: number): QueryBuilderParams => {
  return { limit, sort: [sort as any], skip: skip(page), without };
}

const pages = ref([queryPage(1)])
const isEmpty = ref(false)

const next = useDebounceFn(() => {
  if(!isEmpty.value) {
    pages.value.push(queryPage(pages.value.length +1))
  }
}, 1000)

const empty = () => {
  isEmpty.value = true;
  return ""
}

// SSG 模式下动态生成列表数据和文章
if(process.server && !process.dev) {
  const generateContentList = (page: number): any => {
    return queryContent("/")
      .skip(skip(page))
      .limit(limit)
      .sort(sort)
      .without(without)
      .find()
  }

  let idx = 2;
  while (true) {
    const data: ParsedContent[] = await generateContentList(idx++)
    if(!data.length) {
      break
    } else {
      for (const {_path} of data) {
        await queryContent(_path as string).findOne()
      }
    }
  }
}
</script>
