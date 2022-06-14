"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@vuepress/client");
// @ts-ignore
require("vssue/dist/vssue.min.css");
const vue_1 = require("vue");
exports.default = (0, client_1.defineClientConfig)({
    enhance({ app }) {
        app.component("Vssue", (0, vue_1.defineComponent)((props, { attrs }) => {
            return (0, vue_1.h)((0, vue_1.resolveComponent)("ClientOnly"), {}, () => (0, vue_1.h)("vssue-component", Object.assign(Object.assign({}, props), attrs)));
        }));
        //@ts-ignore
        if (__VUEPRESS_SSR__)
            return;
        const vssueOptions = __VSSUE_OPTIONS__;
        const loadRuntime = () => __awaiter(this, void 0, void 0, function* () {
            // load vue2.x runtime
            // @ts-ignore
            const [vue2Code, vssueCode] = yield Promise.all([
                fetch("//unpkg.com/vue@2.6.14/dist/vue.runtime.min.js").then((res) => res.text()),
                fetch(`//unpkg.com/vssue/dist/vssue.${vssueOptions.platform}.min.js`).then((res) => res.text()),
            ]);
            // sandbox
            const ctx = Object.create(null);
            const _ctx = new Proxy(ctx, {
                get(target, key, receiver) {
                    if (key !== "window" && key in window) {
                        // @ts-ignore
                        const value = window[key];
                        return typeof value === "function" ? value.bind(window) : value;
                    }
                    return Reflect.get(target, key, receiver);
                },
                has(_target, key) {
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
        });
        app.component("VssueComponent", (0, vue_1.defineAsyncComponent)(() => __awaiter(this, void 0, void 0, function* () {
            const ctx = yield loadRuntime();
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
                    let vssue = null;
                    const { title, issueId, options } = (0, vue_1.toRefs)(props);
                    const optionComputed = (0, vue_1.computed)(() => {
                        return Object.assign(Object.assign({}, vssueOptions), options);
                    });
                    const el = (0, vue_1.ref)(null);
                    const stop = (0, vue_1.watchEffect)(() => {
                        if (el.value) {
                            vssue = new ctx.Vue({
                                el: el.value,
                                render(h) {
                                    return h("vssue", {
                                        props: {
                                            title: title.value,
                                            issueId: issueId.value,
                                            options: optionComputed.value,
                                        },
                                    });
                                },
                            });
                            stop();
                        }
                    });
                    (0, vue_1.watch)([title, issueId, optionComputed], () => {
                        vssue && vssue.$forceUpdate();
                    });
                    return () => (0, vue_1.h)("div", {
                        ref: el,
                    });
                },
            };
        })));
    },
});
