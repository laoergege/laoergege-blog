import path from "path";
import {
  vssuePlugin,
  docRelease,
  pageTables,
} from "@laoergege/vuepress-plugin-blog-utils";

export default {
  name: "my-theme",
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
        theme: "github-light",
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
        labels: ["post"],
        prefix: [""],
      },
    ],
    docRelease,
    [
      pageTables,
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
};
