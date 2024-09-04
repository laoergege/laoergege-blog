import type { } from "nuxt-icon";
import type { } from "@vite-pwa/nuxt";
import type { } from "@nuxtjs/tailwindcss";
import type { } from "@nuxt/content";
import config from "./app.config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: ["@nuxt-themes/typography"],
  typescript: { includeWorkspace: true },

  modules: [
    "@nuxt/content",
    '@nuxtjs/tailwindcss',
    "@nuxt/image",
    "nuxt-icon",
    "@nuxtjs/color-mode",
    // "@vite-pwa/nuxt",
    "@pinia/nuxt"
  ],

  vite: {
    build: {
      rollupOptions: {
        external: [/node\:.*?/]
      },
    }
  },

  nitro: {
    prerender: {
      failOnError: false,
      ignore: [
        /^http/
      ]
    }
  },

  app: {
    baseURL: "",
    head: {
      link: [
        {
          rel: "dns-prefetch",
          href: "https://giscus.app/",
        },
      ],
    },
    keepalive: true,
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
        "c",
        "go"
      ],
    },
    // markdown: {
    //   remarkPlugins: {
    //     [resolve("./markdown-plugins/details-collapsible.mjs")]: {}
    //   }
    // },
  },

  pwa: {
    injectRegister: "inline",
    registerType: "prompt",
    scope: "/", // 全局控制
    workbox: {
      // 预缓存
      globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif}']
    }
  },

  colorMode: {
    classSuffix: '',
    storageKey: config.themes._storageKey,
    dataValue: 'theme'
  },

  compatibilityDate: "2025-08-27",

  devtools: { enabled: false }
});