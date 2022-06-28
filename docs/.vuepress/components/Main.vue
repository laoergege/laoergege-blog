<template>
  <div class="w-full sm:px-4 sm:max-w-3xl font-mono py-4">
    <Content :page-key="key"  v-for="key in resolveKeys" :key="key" />
    <div class="flex justify-center my-4">
      <button v-if="hasMore" class="btn btn-ghost" @click="loadMore">加载更多</button>
    </div>
  </div>
</template>

<script>
import { reactive, ref, computed } from "vue";

const keys = __TABLE_KEYS__

export default {
  name: "home",
  setup() {
    const _key = reactive([...keys])
    const hasMore = computed(() => !!_key.length)
    const loadingRef = ref(false)
    const resolveKeys = reactive([])
    addKeys()
    function addKeys() {
      if(keys.length) {
        loadingRef.value = true
        Array.prototype.push.apply(resolveKeys, _key.splice(0, 1))
      } else {
        // TODO: 提示
      }
    }

    return {
      resolveKeys,
      loadingRef,
      loadMore() {
        addKeys()
      },
      hasMore
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 80%;
  margin: 0 auto;
  margin-top: 30px;
}

.info {
  display: flex;
  justify-content: center;
}
.list {
  list-style: auto;
}
</style>
