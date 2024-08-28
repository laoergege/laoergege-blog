<template>
  <ContentList :query="query" v-slot="{ list }">
    <NuxtLink :to="item._path" v-for="item in list">
      {{ item.title }}
    </NuxtLink>
  </ContentList>
</template>

<script setup>
const query = {
  path: "/",
  query: {
    only: ["title", "_path", "release"],
  },
};
</script>
