import "systemjs/dist/system.js";
// @ts-ignore
import VssueAPI from "@vssue/api";
import "vssue/dist/vssue.min.css";

import { h, App, resolveComponent, ref, watchEffect } from "vue";

export default async ({ app }: { app: App }) => {
  const loaded = ref(false);

  app.component("vssue", {
    setup() {
      const vssueEl = ref(null);

      const stop = watchEffect(() => {
        if (vssueEl.value && loaded.value) {
          new Vue2({
            el: vssueEl.value,
            props: {
              title: {
                type: String,
                required: false,
                default: undefined,
              },
              issueId: {
                type: [Number, String],
                required: false,
                default: undefined,
              },
              options: {
                type: Object,
                required: false,
                default: undefined,
              },
            },
            render(h: any) {
              const { title, issueId, options } = this;
              return h("vssue", {
                attrs: {
                  part: "vssue",
                },
                props: {
                  title,
                  issueId,
                  options: Object.assign(
                    {
                      api: VssueAPI,
                    },
                    vpOptions,
                    options
                  ),
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
            ref: vssueEl,
          })
        );
    },
  });

  // @ts-ignore
  if (__VUEPRESS_SSR__) return;

  // load vue2.x runtime
  // @ts-ignore
  const [codes, { default: Vue2 }] = await Promise.all([
    fetch("//unpkg.com/vssue/dist/vssue.github.min.js").then((res) =>
      res.text()
    ),
    System.import("//unpkg.com/vue@2.6.14/dist/vue.runtime.min.js"),
  ]);

  const fn = new Function(`
    with(this) {
      ${codes}
    }
  `);
  const context = { Vue: Vue2 };
  // context.Vue = Vue2;
  // @ts-ignore
  context["__proto"] = window;
  fn.apply(context);

  loaded.value = true;

  // options come from vuepress plugin config
  // @ts-ignore
  const vpOptions = window.__VSSUE_OPTIONS__ || {
    platform: "github",
    owner: "laoergege",
    repo: "laoergege-blog",
    clientId: "b3d7df2f67f7f9ac06a7",
    clientSecret: "a3356093fe41a32ca9015d03ad465da80a2e1dbf",
  };
};
