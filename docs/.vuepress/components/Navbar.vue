<template>
  <div class="navbar bg-base-100 sticky top-0 z-10 backdrop-opacity-60">
    <router-link to="/">
      <label tabindex="0" class="btn btn-ghost normal-case text-xl">        
        <label class="btn btn-ghost btn-circle avatar">
          <div class="w-7 rounded-full">
            <img src="/avatar.webp" />
          </div>
        </label>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">LAOERGEGE Blog</span>
      </label>
    </router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.shadow {
  @apply shadow-md;
}
</style>
