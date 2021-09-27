import path from "path";
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import menu from "./menu";
import { docRelease } from "@laoergege/vuepress-plugin-blog-utils";
import mermaidjs from "vuepress-plugin-mermaidjs";
import { blogPlugin } from "./plugin";

export default defineUserConfig<DefaultThemeOptions>({
  // 站点信息配置
  lang: 'zh-CN',
  title: "",
  description: "Just For Fun",

  // 构建配置
  dest: path.resolve(__dirname, "../../dist"),

  // 主题
  themeConfig: {
    logo: "/avatar.png",
    repo: "laoergege",
    lastUpdated: true,
    smoothScroll: true,
    sidebar: false,
    lastUpdatedText: '最近更新时间',
    contributors: false,
    editLink: false,
    ...menu,
  },

  // 插件
  plugins: [
    [docRelease],
    [
      mermaidjs, 
      {
        theme: 'base',
        themeVariables: {
          background: '#7FC8A9'
        }
      }
    ]
  ]
  // plugins: [
  //   [
  //     require("@vssue/vuepress-plugin-vssue-compat-next"),
  //     {
  //       platform: 'github',
  //       owner: 'laoergege',
  //       repo: 'laoergege-blog',
  //       clientId: 'b3d7df2f67f7f9ac06a7',
  //       clientSecret: 'a3356093fe41a32ca9015d03ad465da80a2e1dbf',
  //     }
  //   ]
  // ]
})