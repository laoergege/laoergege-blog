import { useDebounceFn } from "@vueuse/core";
import { computed, defineComponent, h, onMounted, ref, Transition } from "vue";
import { getScrollTop, scrollToTop } from "./utils";

import "./styles/vars.css";
import "./styles/back-to-top.css";

export const BackToTop = defineComponent({
  name: "BackToTop",

  setup() {
    const show = ref(false);
    const onScroll = useDebounceFn(() => {
      show.value = getScrollTop() > 300;
    }, 100);

    onMounted(() => {
      show.value = getScrollTop() > 300;

      window.addEventListener("scroll", () => onScroll());
    });

    const backToTopEl = h("div", {
      class: "back-to-top",
      onClick: scrollToTop,
    });

    return () =>
      h(
        Transition,
        {
          name: "back-to-top",
        },
        () => (show.value ? backToTopEl : null)
      );
  },
});

export default BackToTop;
