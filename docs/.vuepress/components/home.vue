<template>
  <div class="w-full sm:px-4 sm:max-w-3xl pt-10 pb-5">
    <div class="flex justify-center items-center">
      <div class="flex-flex-shrink-0">
        <div class="mb-8 rounded-box w-14 h-14 ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="/avatar.png">
        </div>
      </div> 
      <div>Hi, This is my blog</div>
    </div>
    <Content :page-key="lastUpdatedKey"/>
  </div>
</template>

<script>
import hash from "hash-sum";

export default {
  name: "home",
  setup() {
    return {
      // reference @vuepress/core packages/@vuepress/core/src/page/createPage.ts
      // dont use pathInferred
      lastUpdatedKey: `v-${hash("/lastUpdated.html")}`,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 80%;
  margin: 0 auto;
  margin-top: 30px;
}

.info {
  display: flex;
  justify-content: center;
}
.list {
  list-style: auto;
}
</style>
