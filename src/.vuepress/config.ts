// const markdown = require("./markdown")
// const configWebpack = require('./webpack-chain')

import path from "path";
import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions } from 'vuepress-vite'
import menu from "./menu";
import { resolve } from "./utils/path";

export default defineUserConfig<DefaultThemeOptions>({
  // 站点信息配置
  lang: 'zh-CN',
  title: "",
  description: "Just For Fun",

  // 构建配置
  dest: path.resolve(__dirname, "../../docs"),
  // vite 打包工具
  bundler: '@vuepress/vite',
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

  // 插件
  plugins: [
    [
      resolve('./plugins/watcher.ts'),
      {
        paths: [
          resolve('plugins.ts'),
          resolve('menu.ts'),
          resolve('plugins/*')
        ]
      }
    ],
  ]
})