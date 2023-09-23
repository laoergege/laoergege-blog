
import { asyncComputed } from "@vueuse/core";
import { ref, computed, customRef, isRef } from "vue";
import type { Ref } from "vue";
// import { Par } from "@nuxt/content";

// module "@nuxt/content" {
interface ParsedContent {
  description?: string,
  tags?: string[],
}
// }

export type Filter = (content: ParsedContent) => boolean
export type Sorter = typeof Array.prototype.sort
export type Mode = "page" | "infinite"

interface Options {
  limit?: number,
  filter?: Filter | Ref<Filter>,
  sort?: Sorter | Ref<Sorter>,
  mode?: Mode
}

export const createContentList = (options: Options) => {
  const { mode = "page" } = options

  const sort = computed(() => (isRef(options.sort) ? options.sort.value : options.sort));
  const filter = computed(() => (isRef(options.filter) ? options.filter.value : options.filter))

  const limit = computed(() => options.limit ?? 10);
  const skip = (p: number) => (p - 1) * limit.value;

  const only = [
    "description",
    "tags",
    "title",
    "updateTime",
    "_path"
  ];

  const rawIndexs = asyncComputed(async () => {
    return queryContent("/")
      .sort({ updateTime: -1, top: 1 })
      .only(only)
      .find()
  }, [])
  const sortedIndexs = computed(() => sort.value ? rawIndexs.value.sort(sort.value) : rawIndexs.value)
  const filtedIndexs = computed(() => filter.value ? sortedIndexs.value.filter(filter.value) : sortedIndexs.value)
  const list = computed(() => {
    if (mode === "infinite") {
      return filtedIndexs.value
    } else {
      return filtedIndexs.value.slice(skip(page.value), limit.value)
    }
  })

  let _page = 1
  const page = customRef<number>((track, trigger) => ({
    set(value) {
      if (value < rawIndexs.value.length) {
        _page = value
        trigger()
      } else if (value <= 0) {
        _page = 1
        trigger()
      }
    },
    get() {
      track()
      return _page
    }
  }))

  const isEnd = computed(() => Math.ceil(filtedIndexs.value.length / limit.value) === page.value)

  return {
    page,
    list,
    sort,
    filter,
    isEnd,
  }
}