<template>
  <Navbar/>
  <div class="min-h-screen flex justify-center flex-col items-center">
    <keep-alive>
      <Post  v-if="$route.path !== '/'" />
      <Home  v-else />
    </keep-alive>
  </div>
  <Footer/>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
    components: {
        Post: defineAsyncComponent(() => import("./Post.vue")),
        Home: defineAsyncComponent(() => import("./Main.vue")),
        Navbar,
        Footer
    }
}
</script>