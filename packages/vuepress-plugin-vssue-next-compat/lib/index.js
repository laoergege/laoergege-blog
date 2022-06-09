"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VssuePlugin = void 0;
var path_1 = __importDefault(require("path"));
var VssuePlugin = function (options) {
    var _a;
    var platform = (_a = options === null || options === void 0 ? void 0 : options.platform) !== null && _a !== void 0 ? _a : "github";
    var platformAPI = {
        github: "@vssue/api-github-v3",
        "github-v4": "@vssue/api-github-v4",
        gitlab: "@vssue/api-gitlab-v4",
        bitbucket: "@vssue/api-bitbucket-v2",
        gitee: "@vssue/api-gitee-v5",
    };
    var apiPkg = platformAPI[platform];
    if (!apiPkg) {
        throw new Error("[@vssue/vuepress-plugin-vssue] Platform '".concat(platform, "' is not supported. Available platforms: ").concat(Object.keys(platformAPI).join(", "), "."));
    }
    try {
        require.resolve(apiPkg);
    }
    catch (e) {
        throw new Error("[@vssue/vuepress-plugin-vssue] ".concat(apiPkg, " is not installed. Run 'npm install ").concat(apiPkg, "' or 'yarn add ").concat(apiPkg, "' to install it."));
    }
    return {
        name: "vuepress-plugin-vssue-next-compat",
        clientConfigFile: path_1.default.resolve(__dirname, "clientConfigFile.js"),
        define: {
            __VSSUE_OPTIONS__: options,
        },
        alias: {
            "@vssue/api$": require.resolve(apiPkg),
        },
    };
};
exports.VssuePlugin = VssuePlugin;
