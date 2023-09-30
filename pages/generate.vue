<template>
  <ContentList path="/" v-slot="{ list }">
    <NuxtLink :to="item._path" v-for="item in list.slice(10)">
      {{ item.title }}
    </NuxtLink>
  </ContentList>
</template>