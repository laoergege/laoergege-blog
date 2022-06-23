import type { PluginObject } from "@vuepress/core";
import type { VssueAPI } from "vssue";
const path = require("path");

export interface VssueNextCompatPluginOptions extends VssueAPI.Options {
  platform: string;
  [index: string]: any;
}

export interface VssueNextCompatPlugin {
  (option?: VssueNextCompatPluginOptions): PluginObject;
}

export const VssuePlugin: VssueNextCompatPlugin = (options): PluginObject => {
  const platform = options?.platform ?? "github";

  const platformAPI = {
    github: "@vssue/api-github-v3",
    "github-v4": "@vssue/api-github-v4",
    gitlab: "@vssue/api-gitlab-v4",
    bitbucket: "@vssue/api-bitbucket-v2",
    gitee: "@vssue/api-gitee-v5",
  };

  const apiPkg = platformAPI[platform as keyof typeof platformAPI];

  if (!apiPkg) {
    throw new Error(
      `[@vssue/vuepress-plugin-vssue] Platform '${platform}' is not supported. Available platforms: ${Object.keys(
        platformAPI
      ).join(", ")}.`
    );
  }

  try {
    require.resolve(apiPkg);
  } catch (e) {
    throw new Error(
      `[@vssue/vuepress-plugin-vssue] ${apiPkg} is not installed. Run 'npm install ${apiPkg}' or 'yarn add ${apiPkg}' to install it.`
    );
  }

  return {
    name: "vuepress-plugin-vssue-next-compat",
    clientConfigFile: path.resolve(__dirname, "clientConfigFile.js"),
    define: {
      __VSSUE_OPTIONS__: options,
    },
  };
};
