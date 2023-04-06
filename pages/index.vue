<template>
  <NuxtLayout>
    <div class="max-w-screen-md mx-auto flex flex-col gap-10 sm:gap-14">
      <template v-for="(page, idx) in pages" :key="idx">
        <ContentList :query="page" >
          <template v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
              <p>
                <NuxtLink :to="article._path">
                  <h2 class="text-xl sm:text-2xl font-medium">
                    {{ article.title }}
                  </h2>
                </NuxtLink>
              </p>
              <p class="flex gap-1">
                <div class="badge badge-secondary text-xs" v-for="tag in article.tags">{{ tag }}</div>
              </p>
              <p v-if="article.description" class="text-sm">{{ article.description }}</p>
            </div>
          </template>
          <template #not-found>
            <p class="text-center my-4 text-sm">
              {{ empty() || "暂无更多"}}
            </p>
          </template>
        </ContentList>
      </template>
      <button v-if="!isEmpty" class="btn btn-ghost self-center" @click="next">加载更多</button>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import { useDebounceFn } from '@vueuse/core'

const queryPage = (page: number): QueryBuilderParams => {
  const limit = 8;

  return { path: "/", limit, sort: [{ updateTime: -1 }, { top: -1 }], skip: (page - 1)*limit };
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
</script>
