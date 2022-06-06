import path from "path";
import {
  ReleasePlugin,
  PagesPlugin,
} from "@laoergege/vuepress-plugin-blog-utils";
import { VssuePlugin } from "@laoergege/vuepress-plugin-vssue-next-compat";
import { ThemeObject } from "@vuepress/core";

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
    ["@vuepress/medium-zoom"],
    ["@vuepress/back-to-top"],
    ["@vuepress/nprogress"],
    ["@vuepress/git"],
    [
      "@vuepress/plugin-shiki",
      {
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
      },
    ],
    [
      "@vuepress/pwa",
      {
        skipWaiting: true,
      },
    ],
    // laoergege 插件
    [
      "@vuepress/register-components",
      {
        components: {
          ListItem: path.resolve(__dirname, "components/ListItem.vue"),
        },
      },
    ],
    [
      VssuePlugin,
      {
        platform: "github",
        owner: "laoergege",
        repo: "laoergege-blog",
        clientId: "b3d7df2f67f7f9ac06a7",
        clientSecret: "a3356093fe41a32ca9015d03ad465da80a2e1dbf",
        labels: ["note"],
        prefix: [""],
      },
    ],
    ReleasePlugin,
    [
      PagesPlugin,
      {
        exclude: "**/README.md",
        render(page: any) {
          return `<ListItem title="${page.title}" routeKey="${
            page.key
          }" tags='${page.frontmatter.tags.toString()}' desc="${
            page.frontmatter.desc || ""
          }" updateDate="${page.frontmatter.updatedTime}"/>`;
        },
      },
    ],
  ],
} as ThemeObject;
