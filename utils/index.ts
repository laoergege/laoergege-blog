import { ref, isReactive } from "vue";
import type { Ref } from "vue";

const isNull = (val: any) => {
  return typeof val === "undefined" || val === null
}

export const untilValue = <I, T>(cb: (target: Ref<I>) => T, target: Ref<I>) => {
  return computed({})
}