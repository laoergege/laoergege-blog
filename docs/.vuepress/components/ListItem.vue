<template>
  <div class="card my-6">
    <div class="card-body">
      <h1 class="card-title text-secondary-focus text-2xl">
        {{ title }}
      </h1>
      <div class="text-xs italic mb-2">更新时间：{{updateTime}}</div>
      <p>
        {{ desc || '暂无摘要'}}
      </p>
      <div class="justify-end card-actions">
        <router-link :to="{ name: routeKey }">
          <button class="btn btn-link hover:underline">阅读更多</button>
        </router-link>
      </div>
    </div>
    <div class="divider">
      {{tags}}
    </div> 
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
