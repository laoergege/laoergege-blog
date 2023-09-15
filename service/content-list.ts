
import { asyncComputed } from "@vueuse/core";
import { ref, computed, raw } from "vue";

export const createContentList = (
  _limit = 10,
  _sort = { updateTime: -1, top: 1 },
) => {
  const limit = ref(_limit);
  const sort = ref(_sort);
  const page = ref(1)
  const skip = (p: number) => (p - 1) * limit.value;
  const only = [
    "description",
    "tags",
    "title",
    "updateTime",
    "_path"
  ];
  const data = asyncComputed(async () => {
    return queryContent("/")
      .sort(_sort)
      .only(only)
      .find()
  }, [])
  const sortedData = computed(() => data.sort(sort.value))
  const list = computed(() => {
    return data.value.reduce((pre, next) => {

    }, [])
  })

  return {
    limit
    page,
    sort,
    filter
  }
}