import type { PluginFunction } from "@vuepress/core";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
export interface Option {
  platform: string;
  [index: string]: any;
}

export const vssuePlugin: PluginFunction<Option> = ({
  platform = "github",
  ...options
}) => {
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
