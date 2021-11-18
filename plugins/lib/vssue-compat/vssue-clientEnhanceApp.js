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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("systemjs/dist/system.js");
// @ts-ignore
var api_1 = __importDefault(require("@vssue/api"));
require("vssue/dist/vssue.min.css");
var vue_1 = require("vue");
var options = __VSSUE_OPTIONS__;
exports.default = (function (_a) {
    var app = _a.app;
    return __awaiter(void 0, void 0, void 0, function () {
        var loaded, _b, codes, Vue2, fn, context, vpOptions;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    loaded = (0, vue_1.ref)(false);
                    app.component("vssue", {
                        setup: function () {
                            var vssueEl = (0, vue_1.ref)(null);
                            var stop = (0, vue_1.watchEffect)(function () {
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
                                        render: function (h) {
                                            var _a = this, title = _a.title, issueId = _a.issueId, options = _a.options;
                                            return h("vssue", {
                                                attrs: {
                                                    part: "vssue",
                                                },
                                                props: {
                                                    title: title,
                                                    issueId: issueId,
                                                    options: Object.assign({
                                                        api: api_1.default,
                                                    }, vpOptions, options),
                                                },
                                            });
                                        },
                                    });
                                    stop();
                                }
                            });
                            return function () {
                                return (0, vue_1.h)((0, vue_1.resolveComponent)("ClientOnly"), {}, (0, vue_1.h)("div", {
                                    ref: vssueEl,
                                }));
                            };
                        },
                    });
                    // @ts-ignore
                    if (__VUEPRESS_SSR__)
                        return [2 /*return*/];
                    return [4 /*yield*/, Promise.all([
                            fetch("//unpkg.com/vssue/dist/vssue.github.min.js").then(function (res) {
                                return res.text();
                            }),
                            System.import("//unpkg.com/vue@2.6.14/dist/vue.runtime.min.js"),
                        ])];
                case 1:
                    _b = __read.apply(void 0, [_c.sent(), 2]), codes = _b[0], Vue2 = _b[1].default;
                    fn = new Function("\n    with(this) {\n      " + codes + "\n    }\n  ");
                    context = Object.create(window, {
                        Vue: {
                            value: Vue2,
                        },
                    });
                    fn.apply(context);
                    loaded.value = true;
                    vpOptions = options;
                    return [2 /*return*/];
            }
        });
    });
});
