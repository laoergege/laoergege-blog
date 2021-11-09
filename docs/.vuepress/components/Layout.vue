<template>
  <div class="min-h-screen flex justify-center" data-theme="cupcake">
    <Post  v-if="$route.path !== '/'" />
    <Home  v-else />
  </div>
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