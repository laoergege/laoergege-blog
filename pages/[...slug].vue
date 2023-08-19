<template>
  <NuxtLayout>
    <article class="md:max-w-screen-sm xl:max-w-screen-md mx-auto px-4 py-12 box-content" ref="elRef">
      <ContentDoc>
        <template #not-found>
          <div class="flex flex-col items-baseline">
            <p>
              <Icon name="tabler:error-404" size="88" />
            </p>
            <p class="font-bold pl-3">文章找不到或已删除
              <Icon name="material-symbols:delete-forever" />
            </p>
          </div>
        </template>
        <template v-slot:default="{ doc }">
          <ContentRenderer :value="doc" />
          <div class="divider">其他文章</div>
          <div class="flex flex-col w-full lg:flex-row">
            <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
              content
            </div>
            <div class="divider lg:divider-horizontal">OR</div>
            <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
              content
            </div>
          </div>
          <div class="divider">交流区</div>
          <ClientOnly fallback-tag="span" fallback="加载中...">
            <Comments />
          </ClientOnly>
        </template>
      </ContentDoc>
    </article>
  </NuxtLayout>
</template>

<script setup lang="ts">
import mediumZoom from "medium-zoom";
import { articleMounted$ } from "~/components/Toc.vue";

const elRef = ref<HTMLElement>();
onMounted(() => {
  mediumZoom(elRef.value?.querySelectorAll('[data-zoomable]'));

  // #region 
  articleMounted$.emit(elRef.value)
});
</script>