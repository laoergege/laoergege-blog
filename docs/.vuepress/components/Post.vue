<template>
  <article
    class="article w-full prose prose-sm sm:prose-base lg:prose-lg pt-10"
    data-theme="cupcake"
  >
    <content :page-key="$route.matched[0].name" />
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

pre.shiki {
  @apply drop-shadow-lg
}

.article img{
  @apply drop-shadow-lg
}
</style>
