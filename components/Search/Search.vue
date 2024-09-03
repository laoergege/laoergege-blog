<template>
  <div class="place-content-center" @click="showSearchDialog">
    <Icon name="uil:search" />
    <div ref="docsearchRef" v-show="false"></div>
  </div>
</template>

<script lang="tsx">
import { defineComponent } from "vue";
import docsearch from "@docsearch/js";
import "@docsearch/css";

export default defineComponent({
  setup() {
    useHead({
      link: [
        {
          rel: "preconnect",
          href: "https://F9HLDQ3K76-dsn.algolia.net",
          crossorigin: "anonymous",
        },
      ],
    });

    const docsearchRef = ref<HTMLElement>();

    const showSearchDialog = () => {
      docsearchRef.value?.firstElementChild?.dispatchEvent(new Event("click"));
    };

    const router = useRouter();
    onMounted(() => {
      if (import.meta.browser) {
        docsearch({
          container: docsearchRef.value!,
          appId: "F9HLDQ3K76",
          indexName: "laoergege-pages",
          apiKey: "0a2dda2da8594d4d2e2ab6e7fff6dcff",
          hitComponent: ({ hit, children }) => {
            return {
              ...children,
              type: "a",
              props: {
                href: hit.url,
                onClick: (e: Event) => {
                  e.preventDefault();
                  router.push(new URL(hit.url).pathname);
                },
                children,
              },
            };
          },
        });
      }
    });

    return { docsearchRef, showSearchDialog };
  },
});
</script>

<style lang="css">
:root {
  --docsearch-primary-color: oklch(var(--p));
  --docsearch-text-color: oklch(var(--pc));
}
</style>
