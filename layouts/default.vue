<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="container mx-auto flex-1 py-6 sm:py-10 px-4">
      <slot />
    </main>
    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>©2017-2021 laoergege.cn. All right reserved.</p>
        <p>
          <a
            href="https://beian.miit.gov.cn"
            target="_blank"
            class="link link-hover"
            >粤ICP备2022020679号</a
          >
        </p>
      </div>
    </footer>
  </div>
  <BackToTop />
</template>
