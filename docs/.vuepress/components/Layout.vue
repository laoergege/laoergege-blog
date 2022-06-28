<template>
  <div>
    <Navbar/>
    <div class="min-h-screen flex justify-center px-4 flex-col items-center">
      <keep-alive>
        <Post  v-if="$route.path !== '/'" />
        <Home  v-else />
      </keep-alive>
    </div>
    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>©2017-2021 laoergege.cn. All right reserved. </p>
        <p><a href="https://beian.miit.gov.cn" target="_blank" class="link link-hover">粤ICP备2022020679号</a></p>
      </div>
    </footer>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Navbar from "./Navbar.vue";

export default {
    components: {
        Post: defineAsyncComponent(() => import("./Post.vue")),
        Home: defineAsyncComponent(() => import("./Main.vue")),
        Navbar
    }
}
</script>