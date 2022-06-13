"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@vuepress/client");
// @ts-ignore
require("vssue/dist/vssue.min.css");
var vue_1 = require("vue");
exports.default = (0, client_1.defineClientConfig)({
    enhance: function (_a) {
        var _this = this;
        var app = _a.app;
        app.component("Vssue", (0, vue_1.defineComponent)(function (props, _a) {
            var attrs = _a.attrs;
            return (0, vue_1.h)((0, vue_1.resolveComponent)("ClientOnly"), {}, function () {
                return (0, vue_1.h)("vssue-compoennt", __assign(__assign({}, props), attrs));
            });
        }));
        //@ts-ignore
        if (__VUEPRESS_SSR__)
            return;
        var vssueOptions = __VSSUE_OPTIONS__;
        var loadRuntime = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, vue2Code, vssueCode, ctx, _ctx, fn;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            fetch("//unpkg.com/vue@2.6.14/dist/vue.runtime.min.js").then(function (res) {
                                return res.text();
                            }),
                            fetch("//unpkg.com/vssue/dist/vssue.".concat(vssueOptions.platform, ".min.js")).then(function (res) { return res.text(); }),
                        ])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), vue2Code = _a[0], vssueCode = _a[1];
                        ctx = Object.create(null);
                        _ctx = new Proxy(ctx, {
                            get: function (target, key, receiver) {
                                if (key !== "window" && key in window) {
                                    // @ts-ignore
                                    var value = window[key];
                                    return typeof value === "function" ? value.bind(window) : value;
                                }
                                return Reflect.get(target, key, receiver);
                            },
                            has: function (_target, key) {
                                if (key !== "window" && key in window) {
                                    return false;
                                }
                                return true;
                            },
                        });
                        ctx.window = _ctx;
                        fn = new Function("\n          with(this) {\n            ".concat(vue2Code, ";\n            \n            ").concat(vssueCode, "\n          }\n        "));
                        fn.apply(_ctx);
                        return [2 /*return*/, ctx];
                }
            });
        }); };
        app.component("VssueCompoennt", (0, vue_1.defineAsyncComponent)(function () { return __awaiter(_this, void 0, void 0, function () {
            var ctx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loadRuntime()];
                    case 1:
                        ctx = _a.sent();
                        return [2 /*return*/, {
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
                                setup: function (props) {
                                    var vssue = null;
                                    var _a = (0, vue_1.toRefs)(props), title = _a.title, issueId = _a.issueId, options = _a.options;
                                    var optionComputed = (0, vue_1.computed)(function () {
                                        return __assign(__assign({}, vssueOptions), options);
                                    });
                                    var el = (0, vue_1.ref)(null);
                                    var stop = (0, vue_1.watchEffect)(function () {
                                        if (el.value) {
                                            vssue = new ctx.Vue({
                                                el: el.value,
                                                render: function (h) {
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
                                    (0, vue_1.watch)([title, issueId, optionComputed], function () {
                                        vssue && vssue.$forceUpdate();
                                    });
                                    return function () {
                                        return (0, vue_1.h)("div", {
                                            ref: el,
                                        });
                                    };
                                },
                            }];
                }
            });
        }); }));
    },
});
