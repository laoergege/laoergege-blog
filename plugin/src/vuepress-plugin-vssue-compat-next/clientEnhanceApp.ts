import "systemjs/dist/system.js";
// @ts-ignore
import VssueAPI from "@vssue/api";
import "vssue/dist/vssue.min.css";
import {
  h,
  App,
  resolveComponent,
  ref,
  watchEffect,
  defineComponent,
} from "vue";
import type {} from "vssue";

declare const __VSSUE_OPTIONS__: any;
const options = __VSSUE_OPTIONS__;

export default ({ app }: { app: App }) => {
  const loaded = ref(false);
  // options come from vuepress plugin config
  const vpOptions = options;
  // @ts-ignore
  if (__VUEPRESS_SSR__) return;

  app.component("vssue", async () => {
    const comp = defineComponent({
      setup(props) {
        const vssueEl = ref(null);

        const stop = watchEffect(() => {
          if (vssueEl.value && loaded.value) {
            new Vue2({
              el: vssueEl.value,
              render(h: any) {
                const { title, issueId, options } = props;
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
    const context = Object.create(null, {
      Vue: {
        value: Vue2,
      },
    });
    fn.apply(context);

    loaded.value = true;

    return comp;
  });
};;
