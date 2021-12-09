<template>
  <div class="card my-6">
    <div class="card-body">
      <h1 class="card-title text-secondary-focus text-2xl">
        {{ title }}
        <!-- <span v-for="tag in tags" :key="tag" class="badge mx-2">{{ tag }}</span> -->
      </h1>
      <p v-if="desc">
        {{ desc }}
      </p>
      <div class="justify-end card-actions">
        <router-link :to="{ name: routeKey }">
          <button class="btn btn-link hover:underline">阅读更多</button>
        </router-link>
      </div>
    </div>
    <div class="divider">
      <span v-for="tag in tags" :key="tag" class="mx-2">{{ tag }}</span>
    </div> 
  </div>
</template>

<script>
export default {
  setup(props, { attrs }) {
    const { title, routeKey, tags, desc } = attrs;

    return {
      title,
      routeKey,
      tags,
      desc
    };
  },
};
</script>
