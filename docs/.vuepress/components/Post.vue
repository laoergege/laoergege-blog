<template>
  <article class="w-full prose prose-sm sm:prose-base lg:prose-lg pt-10" data-theme="cupcake">
    <content :page-key="$route.matched[0].name"/>
    <vssue/>
  </article>
</template>

<script>
export default {
    setup() {
        
    },
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