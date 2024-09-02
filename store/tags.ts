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
    selectedTags$.value[tag] = selectedTags$.value[tag] ? 0 : 1
  }
  const isSelected = (key: string) => {
    return selectedTags$.value[key]
  }
  const clearTagsSelected = () => {
    selectedTags$.value = {}
  }
  const selectTagAndMarkURLQuery = async (tag: string) => {
    const query = router.currentRoute.value.query;

    const tags = (query?.tags as string)?.split(",") ?? [];
    if (tags.includes(tag)) {
      tags.splice(tags.indexOf(tag), 1);
    } else {
      tags.push(tag);
    }

    if (tags.length == 0) {
      delete query.tags
    } else {
      query.tags = tags.toString()
    }
    router.push({
      query,
      force: true
    })
  }
  const clearTagsSelectedAndMarkURLQuery = () => {
    const query = router.currentRoute.value.query;
    delete query.tags;
    router.push({
      query,
      force: true
    })
    clearTagsSelected()
  }
  const router = useRouter();
  type Route = Parameters<Parameters<typeof router.beforeEach>[0]>[0]
  const makeTagsByQuery = (to: Route) => {
    clearTagsSelected();
    for (const tag of (to?.query?.tags as string)?.split(",") ?? []) {
      selectTag(tag);
    }
  }
  makeTagsByQuery(router.currentRoute.value)
  router.beforeEach((to) => {
    makeTagsByQuery(to)
  })

  return {
    tags$,
    selectedTags,
    selectTag,
    isSelected,
    clearTagsSelected,
    selectTagAndMarkURLQuery,
    clearTagsSelectedAndMarkURLQuery,
    makeTagsByQuery
  }
})