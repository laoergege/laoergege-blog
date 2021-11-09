import type { ThemeConfig } from "vuepress";
import path from "path";
import {
  vssuePlugin,
  docRelease,
  lastUpdated,
} from "@laoergege/vuepress-plugin-blog-utils";
// import mermaidjs from "vuepress-plugin-mermaidjs";

export default {
  name: "my-theme",
  // 继承默认主题
  layouts: {
    Layout: path.resolve(__dirname, "components/Layout.vue"),
  },
  plugins: [
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
        ],
        theme: "gitHub-light",
      },
    ],
    [
      "@vuepress/register-components",
      {
        components: {
          ListItem: path.resolve(__dirname, "components/ListItem.vue"),
        },
      },
    ],
    [
      vssuePlugin,
      {
        platform: "github",
        owner: "laoergege",
        repo: "laoergege-blog",
        clientId: "b3d7df2f67f7f9ac06a7",
        clientSecret: "a3356093fe41a32ca9015d03ad465da80a2e1dbf",
      },
    ],
    docRelease,
    [
      lastUpdated,
      {
        exclude: "**/README.md",
        render(page) {
          return `<ListItem title="${page.title}" routeKey="${
            page.key
          }" :tags='${JSON.stringify(page.frontmatter.tags)}'/>`;
        },
      },
    ],
  ],
} as ThemeConfig;