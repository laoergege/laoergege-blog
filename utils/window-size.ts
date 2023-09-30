import { useWindowSize } from '@vueuse/core';
import { provide, inject } from "vue";
import type { InjectionKey } from 'vue';

const SM = 640;
export const useResponsiveSize = () => {
  const { width } = useWindowSize()
  const sm = computed(() => (width.value >= SM ? width.value : null))

  return { sm }
}

const key = Symbol("rps") as InjectionKey<ReturnType<typeof useResponsiveSize>>;
export const createResponsiveSizeCtx = () => provide(key, useResponsiveSize());
export const useResponsiveSizeCtx = () => inject(key);