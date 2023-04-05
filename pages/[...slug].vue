<template>
  <NuxtLayout>
    <div class="md:max-w-screen-sm xl:max-w-screen-md mx-auto">
      <ContentDoc />
      <div class="divider">其他文章</div>
      <div class="flex flex-col w-full lg:flex-row">
        <div
          class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"
        >
          content
        </div>
        <div class="divider lg:divider-horizontal">OR</div>
        <div
          class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"
        >
          content
        </div>
      </div>
      <div class="divider">交流区</div>
      <ClientOnly fallback-tag="span" fallback="加载中...">
        <Comments />
      </ClientOnly>
    </div>
  </NuxtLayout>
</template>
