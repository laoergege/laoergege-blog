import { defineStore } from 'pinia'
import { computedAsync } from "@vueuse/core";

export const useTagsStore = defineStore('tags', () => {

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
  const selectedTags = computed(() => Object.keys(selectedTags$.value).filter(key => selectedTags$.value[key]))
  const selectTag = (tag: string) => {
    selectedTags$.value[tag] ??= 0;
    selectedTags$.value[tag] = selectedTags$.value[tag] ? 0 : 1;
    console.log(tag, selectedTags$.value[tag])
  }
  const isSelected = (key: string) => {
    return selectedTags$.value[key]
  }
  const clearTagsSelected = () => {
    selectedTags$.value = {}
  }

  return {
    tags$,
    selectedTags,
    selectTag,
    isSelected,
    clearTagsSelected
  }
})