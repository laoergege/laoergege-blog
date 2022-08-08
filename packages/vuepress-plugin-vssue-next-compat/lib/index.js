"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VssuePlugin = void 0;
const path = __importStar(require("upath"));
const VssuePlugin = (options) => {
    var _a;
    const platform = (_a = options === null || options === void 0 ? void 0 : options.platform) !== null && _a !== void 0 ? _a : "github";
    const platformAPI = {
        github: "@vssue/api-github-v3",
        "github-v4": "@vssue/api-github-v4",
        gitlab: "@vssue/api-gitlab-v4",
        bitbucket: "@vssue/api-bitbucket-v2",
        gitee: "@vssue/api-gitee-v5",
    };
    const apiPkg = platformAPI[platform];
    if (!apiPkg) {
        throw new Error(`[@vssue/vuepress-plugin-vssue] Platform '${platform}' is not supported. Available platforms: ${Object.keys(platformAPI).join(", ")}.`);
    }
    try {
        require.resolve(apiPkg);
    }
    catch (e) {
        throw new Error(`[@vssue/vuepress-plugin-vssue] ${apiPkg} is not installed. Run 'npm install ${apiPkg}' or 'yarn add ${apiPkg}' to install it.`);
    }
    return {
        name: "vuepress-plugin-vssue-next-compat",
        clientConfigFile: path.resolve(__dirname, "clientConfigFile.js"),
        define: {
            __VSSUE_OPTIONS__: options,
        },
    };
};
exports.VssuePlugin = VssuePlugin;
