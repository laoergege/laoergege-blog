
import { computed, customRef, isRef } from "vue";
import type { InjectionKey } from "vue";
import type { Ref } from "vue";

// module "@nuxt/content" {
interface ParsedContent {
  description?: string,
  tags?: string[],
}
// }

export type Filter = typeof Array.prototype.filter
export type Sorter = typeof Array.prototype.sort
export type Mode = "page" | "infinite"

interface Options {
  limit?: number,
  filter?: Filter | Ref<Filter>,
  mode?: Mode,
  page?: number
}

export const createContentList = (options: Options) => {
  const { mode = "page", filter: _filter } = options

  const filter = (list: any[]) => {
    const f = isRef(_filter) ? _filter.value : _filter

    return f ? list.filter(f) : list
  }

  const limit = computed(() => options.limit ?? 10);
  const skip = (p: number) => (p - 1) * limit.value;
  const where = {
    release: {
      $eq: true,
    },
  }

  const only = [
    "description",
    "tags",
    "title",
    "updateTime",
    "top",
    "_path",
  ];


  const { data } = useAsyncData("list", () => queryContent("/")
    .where(where)
    .sort({ updateTime: -1, top: 1 })
    .only(only)
    .find())
  const filtedIndexs = computed(() => filter(data.value ?? []))
  const list = computed(() => {
    if (mode === "infinite") {
      return filtedIndexs.value.slice(0, limit.value * page.value)
    } else {
      return filtedIndexs.value.slice(skip(page.value), limit.value)
    }
  })

  const total = computed(() => {
    return Math.ceil(filtedIndexs.value.length / limit.value)
  })
  let _page = options?.page ?? 1
  const page = customRef<number>((track, trigger) => ({
    set(value) {
      if (value < total.value) {
        _page = value
        trigger()
      } else if (value >= total.value) {
        _page = total.value
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

  const isEnd = computed(() => {
    return page.value >= total.value
  })

  return {
    page,
    list,
    isEnd,
  }
}

export const key = Symbol("indexs") as InjectionKey<ReturnType<typeof createContentList>>