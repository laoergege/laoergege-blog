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
const vue_1 = require("vue");
exports.default = (0, client_1.defineClientConfig)({
    enhance({ app }) {
        let onBeforeOauth;
        const onBeforeOauthHook = (url) => {
            if (onBeforeOauth) {
                return onBeforeOauth(url);
            }
            return url;
        };
        app.component("Vssue", (0, vue_1.defineComponent)((props, { attrs }) => {
            // @ts-ignore
            onBeforeOauth = props.onBeforeOauth || attrs.onBeforeOauth;
            return () => (0, vue_1.h)((0, vue_1.resolveComponent)("ClientOnly"), {}, () => {
                return (0, vue_1.h)((0, vue_1.resolveComponent)("VssueComponent"), Object.assign(Object.assign({}, props), attrs));
            });
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
                        const value = Reflect.get(window, key, window);
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
                    if (key in target)
                        return true;
                    if (key in window)
                        return false;
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
                setup(props, { attrs }) {
                    let vssue = null;
                    const { title, issueId, options } = (0, vue_1.toRefs)(props);
                    const el = (0, vue_1.ref)(null);
                    const stop = (0, vue_1.watchEffect)(() => {
                        if (el.value) {
                            vssue = new ctx.Vue({
                                el: el.value,
                                render(h) {
                                    const { title, issueId, options } = props;
                                    return h("vssue", Object.assign({ props: {
                                            title,
                                            issueId,
                                            options: Object.assign(Object.assign({}, vssueOptions), options),
                                        } }, attrs));
                                },
                            });
                            stop();
                        }
                    });
                    (0, vue_1.watch)([title, issueId, options], () => {
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
