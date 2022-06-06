"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@vuepress/client");
require("systemjs/dist/system.js");
require("vssue/dist/vssue.min.css");
// import { h, resolveComponent, ref, onMounted } from "vue";
require("../type");
(0, client_1.defineClientConfig)({
    enhance: function (_a) {
        var app = _a.app;
        console.log("vssue");
        // @ts-ignore
        if (__VUEPRESS_SSR__)
            return;
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
