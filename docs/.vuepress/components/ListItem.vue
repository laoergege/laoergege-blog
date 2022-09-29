<template>
  <div class="p-4 sm:p-5">
    <h2 class="text-secondary-focus font-semibold text-lg leading-10">
      <router-link :to="{ name: routeKey }">
          {{ title }}
      </router-link>
    </h2>
    <p class="text-sm text-zinc-800">
      {{ desc || '（暂无摘要）'}}
    </p>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  setup(props, { attrs }) {
    const { title, routeKey, tags, desc, updateTime } = attrs;
  
    return {
      title,
      routeKey,
      tags: tags.replace(",", " / "),
      desc,
      updateTime: dayjs(updateTime).format('YYYY-MM')
    };
  },
};
</script>
