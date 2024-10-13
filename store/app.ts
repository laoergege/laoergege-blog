import { defineStore } from 'pinia'
import { ref, readonly } from "vue";

export const useAppStore = defineStore("app", () => {
  const isOnline = ref(import.meta.server ? true : navigator.onLine);
  if (import.meta.client) {
    window.addEventListener('online', () => {
      isOnline.value = true
    });
    window.addEventListener('offline', () => {
      isOnline.value = false
    });
  }

  return {
    isOnline: readonly(isOnline)
  }
})