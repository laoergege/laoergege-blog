import { defineClientConfig } from "@vuepress/client";
import type { VssueNextCompatPluginOptions } from "./index";
import "systemjs/dist/system.js";
// @ts-ignore
import "vssue/dist/vssue.min.css";
import {
  h,
  resolveComponent,
  ref,
  defineAsyncComponent,
  watchEffect,
  toRefs,
  watch,
  onMounted,
} from "vue";

declare const __VSSUE_OPTIONS__: VssueNextCompatPluginOptions;

export default defineClientConfig({
  enhance({ app }) {
    // @ts-ignore
    if (__VUEPRESS_SSR__) return;

    const options = __VSSUE_OPTIONS__;

    app.component(
      "vssue",
      defineAsyncComponent(async () => {
        // load vue2.x runtime
        // @ts-ignore
        const [vue2Code, vssueCode] = await Promise.all([
          fetch("//unpkg.com/vue@2.6.14/dist/vue.runtime.min.js").then((res) =>
            res.text()
          ),
          fetch(`//unpkg.com/vssue/dist/vssue.${options.platform}.min.js`).then(
            (res) => res.text()
          ),
        ]);
        const ctx = Object.create(null);
        const _ctx = new Proxy(ctx, {
          get(target, key, receiver) {
            if (key !== "window" && key in window) {
              // @ts-ignore
              const value: unknown = window[key];
              return typeof value === "function" ? value.bind(window) : value;
            }
            return Reflect.get(target, key, receiver);
          },
          has(_target: Object, key: string) {
            if (key !== "window" && key in window) {
              return false;
            }

            return true;
          },
        });
        ctx.window = _ctx;
        const fn = new Function(`
          with(this) {
            ${vue2Code};
            
            ${vssueCode}
          }
        `);
        fn.apply(_ctx);

        return {
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
          setup(props) {
            const el = ref(null);
            let vssue: any = null;
            onMounted(() => {
              const { title, issueId, options: _options } = props;
              if (el.value) {
                vssue = new ctx.Vue({
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
                          ...options,
                          ..._options,
                        },
                      },
                    });
                  },
                });
                // stop();
              }
            });
            const { title } = toRefs(props);
            watch(props, () => {
              vssue && vssue.$forceUpdate();
            });

            return () =>
              h(resolveComponent("ClientOnly"), {}, () =>
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
