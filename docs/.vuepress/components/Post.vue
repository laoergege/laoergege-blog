<template>
  <article class="w-full prose prose-sm sm:prose-base lg:prose-lg pt-10" data-theme="cupcake">
    <content :page-key="$route.matched[0].name"/>
    <vssue :title="title" :options="options"/>
  </article>
</template>

<script>
import { usePageData } from "@vuepress/client"
import { toRefs } from "vue";
export default {
    setup() {
        const { title } = toRefs(usePageData().value)

        return {
          title,
          options: {
            proxy(url) {
              console.log(url)
              return url
            }
          }
        }
    }
}
</script>

<style>
.line-numbers-mode{
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
}

.line-numbers-mode  .shiki{
    flex: 1;
  }
</style>