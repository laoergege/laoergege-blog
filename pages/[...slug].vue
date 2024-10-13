<template>
  <NuxtLayout>
    <div class="main-container box-content mt-8 gap-4">
      <article class="place-main" ref="elRef">
        <ContentDoc :key="contentRefreshKey">
          <template #not-found>
            <p class="font-bold">
              {{ appStore.isOnline ? "文章找不到或已删除" : "您目前处于离线状态，该页面暂时无法访问。"}}
            </p>
          </template>
          <template v-slot:default="{ doc }">
            <ContentRenderer :value="doc" class="slide-enter-content"/>
            <div class="divider">其他文章</div>
            <div class="flex flex-wrap">
              <NuxtLink
                v-if="prev"
                :to="prev._path"
                class="link link-hover blod my-2">
                <Icon name="uil:angle-left" />{{ prev.title }}
              </NuxtLink>
              <NuxtLink
                v-if="next"
                :to="next._path"
                class="link link-hover ml-auto my-2">
                {{ next.title }}
                <Icon name="uil:angle-right" />
              </NuxtLink>
            </div>
            <div class="divider">交流区</div>
            <ClientOnly fallback-tag="span" fallback="加载中...">
              <Comments />
            </ClientOnly>
          </template>
        </ContentDoc>
      </article>
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
import mediumZoom from "medium-zoom";
import { createEventEmitter } from "~/utils/event-emiter";
import { defineComponent, onMounted } from "vue";
import { ref } from "vue";
import { createSideCtx } from "~/components/Side.vue";
import { useAppStore } from "~/store/app.js";

export const articleMounted$ =
  createEventEmitter<HTMLElement>("articleMounted");

export default defineComponent({
  setup() {
    const appStore = useAppStore();

    const elRef = ref<HTMLElement>();
    onMounted(() => {
      const zoom = mediumZoom(elRef.value?.querySelectorAll("[data-zoomable]"));
      // #region Fix: 滚动穿透
      const body = document.body;
      zoom.on("open", () => {
        body.style.overflow = "hidden";
      })
      zoom.on("close", () => {
        body.style.overflow = "auto";
      })
      // #endregion
      articleMounted$.emit(elRef.value!);
    });

    createSideCtx();

    const { prev, next, page } = useContent();

    //#region 刷新文章内容
    const contentRefreshKey = ref(0);
    watchEffect(() => {
      if(appStore.isOnline && !page.value) {
        contentRefreshKey.value++
      }
    })
    //#endregion

    provide("imgFlag", 0);

    return {
      elRef,
      prev, 
      next,
      appStore,
      contentRefreshKey
    };
  },
});
</script>

<style scoped>
@keyframes slide-enter {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.slide-enter-content > :deep(*) {
  --stagger: 0;
  --delay: 150ms;
  --start: 0ms;
  animation: slide-enter 1s both 1;
  animation-delay: calc(var(--start) + var(--stagger) * var(--delay));
}

.slide-enter-content > :deep(*:nth-child(1)) {
  --stagger: 1;
}

.slide-enter-content > :deep(*:nth-child(2)) {
  --stagger: 2;
}

.slide-enter-content > :deep(*:nth-child(3)) {
  --stagger: 3;
}

.slide-enter-content > :deep(*:nth-child(4)) {
  --stagger: 4;
}

.slide-enter-content > :deep(*:nth-child(5)) {
  --stagger: 5;
}

.slide-enter-content > :deep(*:nth-child(6)) {
  --stagger: 6;
}

.slide-enter-content > :deep(*:nth-child(7)) {
  --stagger: 7;
}

.slide-enter-content > :deep(*:nth-child(8)) {
  --stagger: 8;
}

.slide-enter-content > :deep(*:nth-child(9)) {
  --stagger: 9;
}

.slide-enter-content > :deep(*:nth-child(10)) {
  --stagger: 10;
}

.slide-enter-content > :deep(*:nth-child(11)) {
  --stagger: 11;
}

.slide-enter-content > :deep(*:nth-child(12)) {
  --stagger: 12;
}

.slide-enter-content > :deep(*:nth-child(13)) {
  --stagger: 13;
}

.slide-enter-content > :deep(*:nth-child(14)) {
  --stagger: 14;
}

.slide-enter-content > :deep(*:nth-child(15)) {
  --stagger: 15;
}

.slide-enter-content > :deep(*:nth-child(16)) {
  --stagger: 16;
}

.slide-enter-content > :deep(*:nth-child(17)) {
  --stagger: 17;
}

.slide-enter-content > :deep(*:nth-child(18)) {
  --stagger: 18;
}

.slide-enter-content > :deep(*:nth-child(19)) {
  --stagger: 19;
}

.slide-enter-content > :deep(*:nth-child(20)) {
  --stagger: 20;
}
</style>
