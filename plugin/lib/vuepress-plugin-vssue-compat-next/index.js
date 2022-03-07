"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vssuePlugin = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
var path = require("path");
var vssuePlugin = function (_a) {
    var _b = _a.platform, platform = _b === void 0 ? "github" : _b, options = __rest(_a, ["platform"]);
    var platformAPI = {
        github: "@vssue/api-github-v3",
        "github-v4": "@vssue/api-github-v4",
        gitlab: "@vssue/api-gitlab-v4",
        bitbucket: "@vssue/api-bitbucket-v2",
        gitee: "@vssue/api-gitee-v5",
    };
    var apiPkg = platformAPI[platform];
    if (!apiPkg) {
        throw new Error("[@vssue/vuepress-plugin-vssue] Platform '" + platform + "' is not supported. Available platforms: " + Object.keys(platformAPI).join(", ") + ".");
    }
    try {
        require.resolve(apiPkg);
    }
    catch (e) {
        throw new Error("[@vssue/vuepress-plugin-vssue] " + apiPkg + " is not installed. Run 'npm install " + apiPkg + "' or 'yarn add " + apiPkg + "' to install it.");
    }
    return {
        name: "vssue",
        clientAppEnhanceFiles: path.resolve(__dirname, "clientEnhanceApp.js"),
        define: {
            __VSSUE_OPTIONS__: options,
        },
        alias: {
            "@vssue/api$": require.resolve(apiPkg),
        },
    };
};
exports.vssuePlugin = vssuePlugin;