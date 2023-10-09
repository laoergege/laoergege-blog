<template>
  <ContentList :query="{ path: '/', only: ['title', '_path'] }" v-slot="{ list }">
    <NuxtLink :to="item._path" v-for="item in list">
      {{ item.title }}
    </NuxtLink>
  </ContentList>
</template>