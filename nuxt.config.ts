import config from "./app.config";
import path from "node:path";
import process from "node:process";
import { THEME_PATH } from "./server/plugins/pinceau"

// 开发模式下的构建
const isDevBuild = Boolean(process.env.DEV_BUILD);
if (isDevBuild) {
  process.env.NODE_ENV = "development"
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: "@nuxt-themes/typography",
  typescript: { includeWorkspace: true },

  features: {
    inlineStyles: false
  },
  routeRules: {
    "/offline": {
      static: true,
      experimentalNoScripts: true
    },
    "/pinceau-theme.css": {
      prerender: true
    }
  },

  modules: [
    "@nuxt/content",
    '@nuxtjs/tailwindcss',
    "@nuxt/image",
    "nuxt-icon",
    "@nuxtjs/color-mode",
    "@vite-pwa/nuxt",
    "@pinia/nuxt",
  ],

  vite: {
    build: {
      rollupOptions: {
        external: [/node\:.*?/]
      },
      minify: !isDevBuild
    }
  },
  sourcemap: {
    client: isDevBuild,
    server: isDevBuild
  },

  nitro: {
    prerender: {
      failOnError: false,
      ignore: [
        /^http/,
        /generate/,
      ],
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
    strategies: 'injectManifest',
    srcDir: path.resolve(),
    filename: 'sw.ts',
    injectManifest: {
      injectionPoint: undefined,
      sourcemap: true
    },
    injectRegister: "script",
    registerType: "prompt",
    scope: "/", // 全局控制
    // devOptions: {
    //   enabled: true,
    //   type: "module"
    // },
    manifest: {
      name: 'Laoergege-Blog',
      short_name: 'Fuck',
      theme_color: "#FD9C92",
      "icons": [
        {
          "src": "pwa-64x64.png",
          "sizes": "64x64",
          "type": "image/png"
        },
        {
          "src": "pwa-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "pwa-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        },
        {
          "src": "maskable-icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        }
      ],
    },
  },

  colorMode: {
    classSuffix: '',
    storageKey: config.themes._storageKey,
    dataValue: 'theme'
  },

  compatibilityDate: "2025-08-27",

  devtools: { enabled: false }
});