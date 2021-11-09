import path from "path";
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import menu from "./menu";

const HTML_TEMPLATE = path.resolve(__dirname, "index.html");

export default defineUserConfig<DefaultThemeOptions>({
  // 站点信息配置
  lang: "zh-CN",
  title: "",
  description: "Just For Fun",

  // 构建配置
  dest: path.resolve(__dirname, "../../dist"),
  templateDev: HTML_TEMPLATE,
  templateSSR: HTML_TEMPLATE,

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

  // markdown: {
  //   emoji: true
  // },

  bundlerConfig: {
    postcss: {
      postcssOptions: {
        plugins: [require("autoprefixer"), require("tailwindcss")],
      },
    },
  },
});