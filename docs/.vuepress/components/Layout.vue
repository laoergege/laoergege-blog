<template>
  <div>
    <div class="min-h-screen flex justify-center px-4 flex-col items-center" data-theme="cupcake">
      <keep-alive>
        <Post  v-if="$route.path !== '/'" />
        <Home  v-else />
      </keep-alive>
    </div>
    <footer class="p-4 footer bg-base-200 text-base-content footer-center">
      <div>
        <p>©2017-2021 laoergege.cn. All right reserved. </p>
        <p><a href="https://www.laoergege.cn" target="_blank" class="link link-hover">粤ICP备2022020679号</a></p>
      </div>
    </footer>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
    components: {
        Post: defineAsyncComponent(() => import("./Post.vue")),
        Home: defineAsyncComponent(() => import("./Main.vue"))
    }
}
</script>