<template>
  <div class="flex flex-wrap gap-2 p-2">
    <div
      class="cursor-pointer badge badge-lg"
      v-for="tag in tagsStore.tags$"
      :key="tag"
      :class="{ 'badge-primary text-base-100': tagsStore.isSelected(tag) }"
      @click="tagsStore.selectTag(tag)">
      {{ tag }}
    </div>
  </div>
  <Teleport :to="actionsRef">
    <button class="btn btn-circle" @click="tagsStore.clearTagsSelected">
      重置
    </button>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useSideCtx } from "~/components/Side.vue";
import { useTagsStore } from "~/store/tags";

export default defineComponent({
  setup() {
    const tagsStore = useTagsStore();

    const { side } = useSideCtx();

    return {
      tagsStore,
      actionsRef: computed(() => {
        return side.value?.actionsRef;
      }),
    };
  },
});
</script>
