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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageTables = void 0;
var core_1 = require("@vuepress/core");
var minimatch_1 = __importDefault(require("minimatch"));
var utils_1 = require("./utils");
var hash_sum_1 = __importDefault(require("hash-sum"));
var MAX = 8;
var keys = [];
var pageTables = function (_a) {
    var _b = _a.max, max = _b === void 0 ? MAX : _b, exclude = _a.exclude, render = _a.render;
    return {
        name: "last-updated-list",
        define: {
            __TABLE_KEYS__: keys,
        },
        onInitialized: function (app) {
            return __awaiter(this, void 0, void 0, function () {
                function chunks(nums, len) {
                    var result = [];
                    var index = 0;
                    while (index < nums.length) {
                        result.push(nums.slice(index, (index += len)));
                    }
                    return result;
                }
                function genDataList(tables) {
                    return __awaiter(this, void 0, void 0, function () {
                        var i, table, links, path, lastUpdatedPage;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    i = 0;
                                    _a.label = 1;
                                case 1:
                                    if (!(i < tables.length)) return [3 /*break*/, 4];
                                    table = tables[i];
                                    links = table
                                        .map(function (p) { return (render ? render(p) : "- [" + p.title + "](" + p.path + ")"); })
                                        .join("\n");
                                    path = "/list" + (i + 1) + ".html";
                                    return [4 /*yield*/, (0, core_1.createPage)(app, {
                                            path: path,
                                            content: "" + links,
                                        })];
                                case 2:
                                    lastUpdatedPage = _a.sent();
                                    // route key
                                    keys.push("v-" + (0, hash_sum_1.default)(path));
                                    app.pages.push(lastUpdatedPage);
                                    _a.label = 3;
                                case 3:
                                    i++;
                                    return [3 /*break*/, 1];
                                case 4: return [2 /*return*/];
                            }
                        });
                    });
                }
                var pages, _pages, tables;
                return __generator(this, function (_a) {
                    // @vuepress/plugin-git 依赖提示
                    if (!(0, utils_1.isExistPlugin)("@vuepress/plugin-git", app)) {
                        throw "Need to install @vupress/plugin-git dependency first!";
                    }
                    pages = app.pages;
                    _pages = __spreadArray([], __read(pages), false).sort(function (a, b) {
                        var atime = a.data.git.updatedTime;
                        var btime = b.data.git.updatedTime;
                        return btime - atime;
                    })
                        .filter(function (page) {
                        return exclude ? !(0, minimatch_1.default)(page.filePath, exclude) : true;
                    });
                    tables = chunks(_pages, max);
                    // md 模板生成
                    genDataList(tables);
                    return [2 /*return*/];
                });
            });
        },
    };
};
exports.pageTables = pageTables;
