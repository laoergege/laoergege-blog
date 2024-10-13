<script setup>
import { useAppStore } from "~/store/app";
const { $pwa } = useNuxtApp();

const appStore = useAppStore()

const isShowFinishToast = ref(false)

const update = async () => {
  await $pwa.updateServiceWorker()
  isShowFinishToast.value = true;
}

</script>

<template>
  <Toast v-model="$pwa.needRefresh" :timeout="10000" class="alert-info">
    <span> 后台有新版本，请点击更新 </span>
    <button class="btn btn-ghost" @click="update">Update!</button>
  </Toast>
  <Toast class="alert-success" v-model="isShowFinishToast">
    <span> 更新完毕！ </span>
  </Toast>
  <Toast class="alert-success" :model-value="!appStore.isOnline">
    <span> 应用可部份离线使用 </span>
  </Toast>
</template>