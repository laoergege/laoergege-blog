<template>
  <Giscus
    v-if="discussionID"
    id="comments"
    repo="laoergege/laoergege-blog"
    repoId="MDEwOlJlcG9zaXRvcnkxMjM4OTQ4MDE="
    categoryId="DIC_kwDOB2J8Ec4CTiA5"
    mapping="specific"
    :term="discussionID"
    strict="0"
    reactions-enabled="1"
    emit-metadata="0"
    input-position="top"
    :theme="compTheme"
    lang="zh-CN"
    loading="lazy"
    host="https://giscus.app"
  />
</template>

<script setup>
import Giscus from "@giscus/vue";
const colorMode = useColorMode();
const { commentThemes } = useAppConfig();
const compTheme = computed(() => {
  return commentThemes[colorMode.value];
});

const { page } = useContent();
const { discussionID, _path } = page.value ?? {};

useHead({
  meta: [
    // 创建新的 Discussion，正文内容为当前页面链接
    {
      name: "giscus:backlink",
      content: _path,
    },
  ],
});
</script>
