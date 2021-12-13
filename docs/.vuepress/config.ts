import path from "path";
import type { ThemeConfig } from "@vuepress/core";
import menu from "./menu";

// const PUBLIC_PATH = "https://laoergege/";

export default {
  // 站点信息配置
  lang: "zh-CN",
  title: "",
  description: "Just For Fun",
  head: [
    ["link", { rel: "manifest", href: "/site.webmanifest.json" }],
    [
      "link",
      { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  ],

  // 构建配置
  dest: path.resolve(__dirname, "../../dist"),
  templateDev: path.resolve(__dirname, "templates/index.dev.html"),
  templateSSR: path.resolve(__dirname, "templates/index.ssr.html"),

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
    configureWebpack(config, isServer, isBuild) {
      console.log(config.devtool);
      config.devtool = "source-map";
      return {
        devtool: "source-map",
      };
    },
    // chainWebpack() {
    //   return process.env.NODE_ENV === "development" ? {} : {
    //     output: {
    //       publicPath:
    //     }
    //   }
    // },
    postcss: {
      postcssOptions: {
        plugins: [require("autoprefixer"), require("tailwindcss")],
      },
    },
  },
} as ThemeConfig;