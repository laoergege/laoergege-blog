"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
exports.getLastUpdated = exports.lastUpdated = void 0;
require("zx/globals");
var dayjs_1 = __importDefault(require("dayjs"));
var utils_1 = require("./utils");
$.verbose = false;
var SINCE_DATE = (0, dayjs_1.default)().subtract(1, 'month').toDate().toISOString();
var DEPTH = 20;
function lastUpdated() {
    return __awaiter(this, void 0, void 0, function () {
        var flags, stdout, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    flags = [
                        "--since=".concat(SINCE_DATE),
                        '--pretty=',
                        '--name-only',
                    ];
                    return [4 /*yield*/, $(templateObject_1 || (templateObject_1 = __makeTemplateObject(["git log ", ""], ["git log ", ""])), flags)];
                case 1:
                    stdout = (_a.sent()).stdout;
                    result = (stdout.match(/^.+$/mg) || [])
                        .map(function (e) { return (0, utils_1.utf8ToText)(e); })
                        .map(function (e) { return e.replace(/(^['"]|['"]$)/g, ''); }) // 字符串首尾可能存在引号，消除
                        .filter(function (e) { return /\.md$/.test(e); });
                    // 去重
                    result = __spreadArray([], __read(new Set(result)), false);
                    return [2 /*return*/, result];
            }
        });
    });
}
exports.lastUpdated = lastUpdated;
function recursion(result) {
    if (result === void 0) { result = []; }
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _b = (_a = result.push).apply;
                    _c = [result];
                    _d = [[]];
                    return [4 /*yield*/, lastUpdated()];
                case 1:
                    _b.apply(_a, _c.concat([__spreadArray.apply(void 0, _d.concat([__read.apply(void 0, [(_e.sent())]), false]))]));
                    if (result.length < DEPTH) {
                        recursion(result);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function getLastUpdated() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    result = [];
                    return [4 /*yield*/, recursion(result)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, result];
            }
        });
    });
}
exports.getLastUpdated = getLastUpdated;
getLastUpdated().then(function (res) { return console.log(res); });
var templateObject_1;
