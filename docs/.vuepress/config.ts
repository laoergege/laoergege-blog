import path from "path";
import type { ThemeConfig } from "@vuepress/core";
import menu from "./menu";

const HTML_TEMPLATE = path.resolve(__dirname, "index.html");
const PUBLIC_PATH = "/laoergege-blog/";

export default {
  // 站点信息配置
  lang: "zh-CN",
  title: "",
  description: "Just For Fun",

  // 构建配置
  dest: path.resolve(__dirname, "../../dist"),
  base: process.env.NODE_ENV === "development" ? "/" : PUBLIC_PATH,
  // templateDev: HTML_TEMPLATE,
  // templateSSR: HTML_TEMPLATE,

  // 主题
  theme: path.resolve(__dirname, "theme"),
  themeConfig: {
    logo: "/avatar.png",
    repo: "laoergege",
    lastUpdated: true,
    smoothScroll: true,
    sidebar: false,
    lastUpdatedText: "最近更新时间",
    contributors: false,
    editLink: false,
    ...menu,
  },

  bundlerConfig: {
    postcss: {
      postcssOptions: {
        plugins: [require("autoprefixer"), require("tailwindcss")],
      },
    },
  },
} as ThemeConfig;