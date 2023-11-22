<template>
  <div class="flex flex-wrap gap-2 p-2">
    <div class="cursor-pointer badge badge-lg" v-for="tag in tags$" :key="tag"
      :class="{ 'badge-primary text-base-100': isSelected(tag) }" @click="selectTag(tag)">
      {{ tag }}
    </div>
  </div>
  <Teleport :to="actionsRef">
    <button class="btn btn-circle" @click="clearTagsSelected">
      重置
    </button>
  </Teleport>
</template>

<script lang="ts">
import { computedAsync } from "@vueuse/core";
import { defineComponent, inject, provide, ref } from "vue";
import type { InjectionKey } from "vue";
import { useSideCtx } from "~/components/Side.vue";

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
  const selectedTags = computed(() => Object.keys(selectedTags$.value).filter(key => selectedTags$.value[key]))
  const selectTag = (tag: string) => {
    selectedTags$.value[tag] ??= 0;
    selectedTags$.value[tag] = selectedTags$.value[tag] ? 0 : 1;
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
      selectedTags,
      selectTag,
      isSelected,
      clearTagsSelected
    } = useTagsCtx();

    const { side } = useSideCtx()

    return {
      tags$,
      selectedTags,
      selectTag,
      isSelected,
      clearTagsSelected,
      actionsRef: computed(() => {
        return side.value?.actionsRef
      })
    }
  }
})
</script>