import type {} from "nuxt-icon";
import type {} from "@vite-pwa/nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: "@nuxt-themes/typography",
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "nuxt-icon",
    "@vite-pwa/nuxt",
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
    ignores: [".*?(png|svg|gif|jpg|jpeg)"],
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: "github-light",
        // Theme used if `html.dark`
        dark: "github-dark",
        // Theme used if `html.sepia`
        sepia: "monokai",
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
  // image: {},
  pwa: {
    injectRegister: "inline",
  }
});
