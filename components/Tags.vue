<template>
  <div class="flex flex-wrap gap-2 p-2">
    <div class="cursor-pointer badge badge-lg" v-for="tag in tags$" :key="tag"
      :class="{ 'badge-primary text-primary-content': isSelected(tag) }" @click="selectTag(tag)">
      {{ tag }}
    </div>
  </div>
</template>

<script lang="ts">
import { computedAsync } from "@vueuse/core";
import { defineComponent, inject, InjectionKey, provide, ref } from "vue";

export const useTags = () => {
  const tags$ = computedAsync(async () => {
    const contentQuery = await queryContent("/").only("tags").find();
    const flatTags = contentQuery.flatMap(d => d.tags);
    const stat = flatTags.reduce((res, tag) => {
      if (tag) {
        res[tag] ??= 0;
        res[tag]++;
      }
      return res;
    }, {})
    return [...new Set(flatTags)].filter(t => t).sort((a, b) => (stat[b] - stat[a]))
  }, [])
  const selectedTags$ = ref<Record<string, number>>({});
  const selectTag = (tag: string) => {
    selectedTags$.value[tag] ??= 0;
    selectedTags$.value[tag] = selectedTags$.value[tag] ? 0 : 1;
  }
  const isSelected = (key: string) => {
    return selectedTags$.value[key]
  }

  return {
    tags$,
    selectedTags$,
    selectTag,
    isSelected
  }
}
const key = Symbol("tag") as InjectionKey<ReturnType<typeof useTags>>
export const createTagsCtx = () => {
  const all = useTags();
  provide(key, all);
  return all;
};
export const useTagsCtx = () => (inject(key) || createTagsCtx());

export default defineComponent({
  setup() {
    const {
      tags$,
      selectedTags$,
      selectTag,
      isSelected
    } = useTagsCtx();

    return {
      tags$,
      selectedTags$,
      selectTag,
      isSelected
    }
  }
})
</script>