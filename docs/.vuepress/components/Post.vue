<template>
  <article
    class="article w-full sm:w-3/4 lg:w-2/3 p-4 sm:p-10"
    data-theme="cupcake"
  >
    <content class="sm:max-w-full prose sm:prose-sm md:prose-lg dark:prose-invert" :page-key="$route.matched[0].name" />
    <vssue
      class="not-prose"
      :key="title"
      :title="title"
      :onBeforeOauth="onBeforeOauth"
    />
  </article>
</template>

<script>
import { usePageData } from "@vuepress/client";
import { toRefs, onActivated, ref } from "vue";

import "../styles/vssue.styl";

export default {
  setup() {
    const titleRef = ref(usePageData().value.title);
    onActivated(() => {
      titleRef.value = usePageData().value.title;
    });

    return {
      title: titleRef,
      onBeforeOauth(url) {
        sessionStorage.setItem("redirect_uri", location.pathname);
        return url.replace(
          /redirect_uri=([^&]*)/,
          `redirect_uri=${location.origin}`
        );
      },
    };
  },
};
</script>

<style>
.line-numbers-mode {
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
}

.line-numbers-mode .shiki {
  flex: 1;
}

pre.shiki,.article img{
  @apply drop-shadow-2xl rounded-xl
}
</style>
