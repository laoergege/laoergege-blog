import { defineClientConfig } from "@vuepress/client";
import type { VssueNextCompatPluginOptions } from "./index";

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

export interface OnBeforeOauthHook {
  /**
   * @url {string} then oauth url
   */
  (url: string): void;
}

export interface VssueProps {
  onBeforeOauth?: OnBeforeOauthHook;
}

export default defineClientConfig({
  enhance({ app }) {
    let onBeforeOauth: OnBeforeOauthHook;
    const onBeforeOauthHook: OnBeforeOauthHook = (url) => {
      if (onBeforeOauth) {
        return onBeforeOauth(url);
      }
      return url;
    };

    app.component(
      "Vssue",
      defineComponent<VssueProps>((props, { attrs }) => {
        // @ts-ignore
        onBeforeOauth = props.onBeforeOauth || attrs.onBeforeOauth;
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
      // proxy window.location
      const _location = new Proxy(Object.create(null), {
        get(target, key) {
          const value = Reflect.get(window.location, key, window.location);
          return typeof value === "function"
            ? value.bind(window.location)
            : value;
        },
        has(target, prop) {
          if (prop in window.location) {
            return true;
          }

          return false;
        },
        set(target, key, value) {
          // trigger hook
          if (key === "href") {
            value = onBeforeOauthHook(value);
          }

          Reflect.set(window.location, key, value);
          return true;
        },
      });
      // sandbox
      const ctx = Object.create(null);
      const _ctx = new Proxy(ctx, {
        get(target, key, receiver) {
          const value = Reflect.get(target, key, receiver);
          if (!value && key in window) {
            // @ts-ignore
            const value: any = Reflect.get(window, key, window);
            return typeof value !== "function"
              ? value
              : new Proxy(value, {
                  apply(target, thisArg, argArray) {
                    return Reflect.apply(target, window, argArray);
                  },
                  construct(target, argArray, newTarget) {
                    return Reflect.construct(target, argArray, target);
                  },
                });
          }
          return value;
        },
        has(target, key) {
          if (key in target) return true;
          if (key in window) return false;
          return true;
        },
      });
      ctx.window = _ctx;
      ctx.location = _location;
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
          setup(props, { attrs }) {
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
                      ...attrs,
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
