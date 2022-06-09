import path from "path";
import {
  ReleasePlugin,
  PagesPlugin,
} from "@laoergege/vuepress-plugin-blog-utils";
import { VssuePlugin } from "@laoergege/vuepress-plugin-vssue-next-compat";
import { ThemeObject } from "@vuepress/core";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { gitPlugin } from "@vuepress/plugin-git";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import { externalLinkIconPlugin } from "@vuepress/plugin-external-link-icon";
import { shikiPlugin } from "@vuepress/plugin-shiki";

export default {
  name: "my-theme",
  layouts: {
    Layout: path.resolve(__dirname, "components/Layout.vue"),
  },
  extendsMarkdownOptions(option) {
    option.code ??= {
      lineNumbers: false,
    };

    option.code.lineNumbers = false;
  },
  plugins: [
    // 官方插件
    mediumZoomPlugin(),
    backToTopPlugin(),
    gitPlugin(),
    nprogressPlugin(),
    externalLinkIconPlugin(),
    shikiPlugin({
      langs: [
        "markdown",
        "typescript",
        "javascript",
        "css",
        "html",
        "shellscript",
        "vue",
        "yaml",
        "json",
        "python",
        "jsx",
        "vue",
        "shell",
        "toml",
      ],
      theme: "github-light",
    }),
    pwaPlugin({
      skipWaiting: true,
    }),
    registerComponentsPlugin({
      components: {
        ListItem: path.resolve(__dirname, "components/ListItem.vue"),
      },
    }),
    VssuePlugin({
      platform: "github",
      owner: "laoergege",
      repo: "laoergege-blog",
      clientId: "7eeca293836a06bfc29d",
      clientSecret: "095074c8618954a003497837f324fffa2cd769b8",
      labels: ["note"],
      prefix: [""],
    }),
    ReleasePlugin(),
    PagesPlugin({
      exclude: "**/README.md",
      render(page: any) {
        return `<ListItem title="${page.title}" routeKey="${
          page.key
        }" tags='${page.frontmatter.tags.toString()}' desc="${
          page.frontmatter.desc || ""
        }" updateDate="${page.frontmatter.updatedTime}"/>`;
      },
    }),
  ],
} as ThemeObject;
