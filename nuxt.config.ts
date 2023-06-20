import type {} from "nuxt-icon";
import type {} from "@vite-pwa/nuxt";
import type {} from "@nuxtjs/tailwindcss";
import config from "./app.config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: "@nuxt-themes/typography",
  typescript: { includeWorkspace: true },
  modules: [
    "@nuxt/content",
    '@nuxtjs/tailwindcss',
    "@nuxt/image-edge",
    "nuxt-icon",
    "@nuxtjs/color-mode"
    // "@vite-pwa/nuxt",
  ],
  app: {
    head: {
      link: [
        {
          rel: "dns-prefetch",
          href: "https://giscus.app/",
        },
      ],
    },
  },
  content: {
    documentDriven: true,
    ignores: [".+\\.*?[^(md)]$"],
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: "github-light",
        // Theme used if `html.dark`
        dark: "github-dark",
      },
      preload: [
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
        "py",
        "rust",
      ],
    },
    markdown: {
      remarkPlugins: {
        // "remark-directive": {},
        "details-collapsible": {},
      },
    },
  },
  pwa: {
    injectRegister: "inline",
  },
  colorMode: {
    classSuffix: '',
    storageKey: config.themes.storageKey
  }
});
