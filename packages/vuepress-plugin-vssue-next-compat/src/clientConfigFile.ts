import { defineClientConfig } from "@vuepress/client";
import Vssue from "vssue";

import "systemjs/dist/system.js";
// @ts-ignore
import VssueAPI from "@vssue/api";
import "vssue/dist/vssue.min.css";
// import { h, resolveComponent, ref, onMounted } from "vue";
import "../type";

defineClientConfig({
  enhance({ app }) {
    console.log("vssue");

    // @ts-ignore
    if (__VUEPRESS_SSR__) return;

    // app.component("vssue", async (props) => {
    //   const options = __VSSUE_OPTIONS__;
    //   const el = ref(null);

    //   // load vue2.x runtime
    //   // @ts-ignore
    //   const { default: Vue2 } = await System.import(
    //     "//unpkg.com/vue@2.6.14/dist/vue.runtime.min.js"
    //   );
    //   Vue2.use(Vssue, options);

    //   onMounted(() => {
    //     const { title, issueId, options } = props;

    //     const vssue = new Vue2({
    //       el: el.value,
    //       render(h: any) {
    //         return h("vssue", {
    //           attrs: {
    //             part: "vssue",
    //           },
    //           props: {
    //             title,
    //             issueId,
    //             options: Object.assign(
    //               {
    //                 api: VssueAPI,
    //               },
    //               options
    //             ),
    //           },
    //         });
    //       },
    //     });
    //   });

    //   return () =>
    //     h(
    //       resolveComponent("ClientOnly"),
    //       {},
    //       h("div", {
    //         ref: el,
    //       })
    //     );
    // });
  },
});
