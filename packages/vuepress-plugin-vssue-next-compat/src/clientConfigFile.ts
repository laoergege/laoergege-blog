import { defineClientConfig } from "@vuepress/client";
import type { VssueNextCompatPluginOptions } from "./index";
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
  defineComponent,
} from "vue";

declare const __VSSUE_OPTIONS__: VssueNextCompatPluginOptions;

export default defineClientConfig({
  enhance({ app }) {
    app.component(
      "Vssue",
      defineComponent((props, { attrs }) => {
        return () =>
          h(resolveComponent("ClientOnly"), {}, () => {
            return h(resolveComponent("VssueComponent"), {
              ...props,
              ...attrs,
            });
          });
      })
    );

    //@ts-ignore
    if (__VUEPRESS_SSR__) return;

    const vssueOptions = __VSSUE_OPTIONS__;
    const loadRuntime = async () => {
      // load vue2.x runtime
      // @ts-ignore
      const [vue2Code, vssueCode] = await Promise.all([
        fetch("//unpkg.com/vue@2.6.14/dist/vue.runtime.min.js").then((res) =>
          res.text()
        ),
        fetch(
          `//unpkg.com/vssue/dist/vssue.${vssueOptions.platform}.min.js`
        ).then((res) => res.text()),
      ]);
      // sandbox
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

      return ctx;
    };

    app.component(
      "VssueComponent",
      defineAsyncComponent(async () => {
        const ctx = await loadRuntime();

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
            let vssue: any = null;
            const { title, issueId, options } = toRefs(props);

            const el = ref(null);
            const stop = watchEffect(() => {
              if (el.value) {
                vssue = new ctx.Vue({
                  el: el.value,
                  render(h: any) {
                    const { title, issueId, options } = props;
                    return h("vssue", {
                      props: {
                        title,
                        issueId,
                        options: {
                          ...vssueOptions,
                          ...options,
                        },
                      },
                    });
                  },
                });
                stop();
              }
            });
            watch([title, issueId, options], () => {
              vssue && vssue.$forceUpdate();
            });

            return () =>
              h("div", {
                ref: el,
              });
          },
        };
      })
    );
  },
});
