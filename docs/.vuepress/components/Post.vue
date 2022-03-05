<template>
  <div>
    <article class="container prose prose-md sm:prose lg:prose-lg text-base-content font-mono py-10" data-theme="cupcake">
      <content :page-key="$route.matched[0].name"/>
    </article>
    <vssue/>
  </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>