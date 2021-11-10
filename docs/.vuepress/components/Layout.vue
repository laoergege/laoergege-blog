<template>
  <div class="min-h-screen flex justify-center" data-theme="cupcake">
    <Post  v-if="$route.path !== '/'" />
    <Home  v-else />
  </div>
  <footer class="p-4 footer bg-base-200 text-base-content footer-center">
    <div>
      <p>©2017-2021 laoergege.cn. All right reserved. </p>
      <p><a href="https://www.laoergege.cn" target="_blank" class="link link-hover">粤ICP备17077233号-1</a></p>
    </div>
  </footer>
</template>

<script>
import Post from "./Post.vue";
import Home from "./Main.vue";

export default {
    components: {
        Post,
        Home
    }
}
</script>