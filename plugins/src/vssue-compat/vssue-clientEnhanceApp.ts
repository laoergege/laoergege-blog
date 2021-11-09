import "systemjs/dist/system.js";
import { VssueComponent } from "vssue";
// @ts-ignore
import VssueAPI from "@vssue/api";
import "vssue/dist/vssue.min.css";

import { h, App, resolveComponent, ref } from "vue";

export default async ({ app }: { app: App }) => {
  app.component("vssue", {
    setup() {
      const vssue = ref(null);
      const createVssue = () => {
        console.log(vssue.value);
        const v = new _Vue({
          el: vssue.value,
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
          mounted() {
            const root: ShadowRoot = this.$parent.$options.shadowRoot;
            const linkElem = document.createElement("link");
            linkElem.setAttribute("rel", "stylesheet");
            linkElem.setAttribute(
              "href",
              "//unpkg.com/vssue/dist/vssue.min.css"
            );
            root.appendChild(linkElem);
          },
          render(h: any) {
            const { title, issueId, options } = this;
            return h(VssueComponent, {
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
      };

      return () =>
        h(
          resolveComponent("ClientOnly"),
          {},
          h("div", {
            ref: vssue,
            onVnodeMounted() {
              createVssue();
            },
          })
        );
    },
  });

  // load vue2.x runtime
  const { default: _Vue } = await System.import(
    "//unpkg.com/vue@2.6.14/dist/vue.runtime.min.js"
  );

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
