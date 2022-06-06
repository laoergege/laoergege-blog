import path from "path";
import theme from "./theme";
import { webpackBundler } from "@vuepress/bundler-webpack";
// import { viteBundler } from "@vuepress/bundler-vite";

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
  templateBuild: path.resolve(__dirname, "templates/index.ssr.html"),

  // 主题
  theme,

  // 打包
  bundler: webpackBundler({
    postcss: {
      postcssOptions: {
        plugins: [require("autoprefixer"), require("tailwindcss")],
      },
    },
  }),
  // bundler: viteBundler(),
};