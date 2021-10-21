"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.docRelease = void 0;
var minimatch_1 = __importDefault(require("minimatch"));
var docRelease = function (_a) {
    var _b = _a.glob, glob = _b === void 0 ? '**/README.md' : _b;
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
            console.log(file, glob);
            return false;
        }
    };
    return {
        name: 'DocRelease',
        onInitialized: function (app) {
            var result = [];
            for (var _i = 0, _a = app.pages; _i < _a.length; _i++) {
                var page = _a[_i];
                if (page.frontmatter.release ||
                    (glob &&
                        match(page.filePathRelative))) {
                    result.push(page);
                }
            }
            app.pages = result;
        },
    };
};
exports.docRelease = docRelease;
