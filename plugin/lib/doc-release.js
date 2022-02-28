"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.docRelease = void 0;
var minimatch_1 = __importDefault(require("minimatch"));
var docRelease = function (_a) {
    var _b = _a.glob, glob = _b === void 0 ? "**/README.md" : _b;
    var match = function (file) {
        if (!glob) {
            return false;
        }
        if (Array.isArray(glob)) {
            return glob.some(function (g) { return (0, minimatch_1.default)(file, g); });
        }
        try {
            return (0, minimatch_1.default)(file, glob);
        }
        catch (error) {
            return false;
        }
    };
    return {
        name: "DocRelease",
        onInitialized: function (app) {
            var e_1, _a;
            var result = [];
            try {
                for (var _b = __values(app.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var page = _c.value;
                    if (page.frontmatter.release ||
                        (glob && match(page.filePathRelative))) {
                        result.push(page);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            app.pages = result;
        },
    };
};
exports.docRelease = docRelease;
