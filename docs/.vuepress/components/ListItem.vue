<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title text-secondary-focus text-2xl">
        <router-link :to="{ name: routeKey }">
           {{ title }}
        </router-link>
      </h2>
      <!-- <div class="text-xs italic mb-2">更新时间：{{updateTime}}</div> -->
      <p>
        {{ desc || '（暂无摘要）'}}
      </p>
    </div>
    <!-- <div class="divider">
      {{tags}}
    </div>  -->
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
