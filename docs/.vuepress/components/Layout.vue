<template>
  <div class="min-h-screen flex justify-center" data-theme="cupcake">
    <Post  v-if="$route.path !== '/'" />
    <Home  v-else />
  </div>
  <footer class="p-4 footer bg-base-300 text-base-content footer-center">
    <div>
      <p>Copyright © 2021 - All right reserved by ACME Industries Ltd</p>
    </div>
  </footer>
</template>

<script>
import Post from "./Post";
import Home from "./Home";

export default {
    components: {
        Post,
        Home
    },
    setup() {
    },
}
</script>