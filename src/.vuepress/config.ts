// const markdown = require("./markdown")
// const configWebpack = require('./webpack-chain')

import path from "path";
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import menu from "./menu";
import plugins from "./plugins";

export default defineUserConfig<DefaultThemeOptions>({
  // 站点信息配置
  lang: 'zh-CN',
  title: "",
  description: "Just For Fun",

  // 构建配置
  dest: path.resolve(__dirname, "../../docs"),
  // chainWebpack: configWebpack,

  // 主题
  themeConfig: {
    logo: "/avatar.png",
    repo: "laoergege/laoergege-blog",
    lastUpdated: true,
    smoothScroll: true,
    ...menu,
  },
  // markdown,
  plugins
})