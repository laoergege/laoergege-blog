import { defineClientConfig } from "@vuepress/client";
import Vssue from "vssue";
import type { VssueAPI } from "vssue";
import "systemjs/dist/system.js";
// @ts-ignore
import "vssue/dist/vssue.min.css";
import {
  h,
  resolveComponent,
  ref,
  onMounted,
  defineAsyncComponent,
  watchEffect,
} from "vue";
// @ts-ignore
import APIConstructor from "@vssue/api";

declare const __VSSUE_OPTIONS__: VssueAPI.Options;

export default defineClientConfig({
  enhance({ app }) {
    // @ts-ignore
    if (__VUEPRESS_SSR__) return;

    app.component(
      "vssue",
      defineAsyncComponent(async () => {
        const options = __VSSUE_OPTIONS__;
        // load vue2.x runtime
        // @ts-ignore
        const { default: Vue2 } = await System.import(
          "//unpkg.com/vue@2.6.14/dist/vue.runtime.min.js"
        );
        Vue2.use(Vssue, options);

        return {
          setup(props: any) {
            const el = ref(null);
            const { title, issueId, options } = props;
            let vssue = null;

            const stop = watchEffect(() => {
              if (el.value) {
                vssue = new Vue2({
                  el: el.value,
                  render(h: any) {
                    return h("vssue", {
                      attrs: {
                        part: "vssue",
                      },
                      props: {
                        title,
                        issueId,
                        options: {
                          api: APIConstructor,
                          ...options,
                        },
                      },
                    });
                  },
                });

                stop();
              }
            });

            return () =>
              h(
                resolveComponent("ClientOnly"),
                {},
                h("div", {
                  ref: el,
                })
              );
          },
        };
      })
    );
  },
});
