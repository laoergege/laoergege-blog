import type { NitroAppPlugin } from 'nitropack'

// @ts-ignore - Nitro virtual import
import { useStorage } from '#internal/nitro'

const THEME_PATH = "/pinceau-theme"

// 消除 html 内联 pinceau theme 样式
export default <NitroAppPlugin>async function (nitro) {
  nitro.hooks.hook('render:html', async (htmlContext) => {
    const arr = htmlContext.head as string[]
    const i = arr.findIndex(e => e.includes("pinceau-theme"))
    arr.splice(i, 1, `<link rel="preload" href="${THEME_PATH}" as="style"/>\n<link rel="stylesheet" type="text/css" href="${THEME_PATH}" />`)
  })

  nitro.hooks.hook('request', async (event) => {
    if (event.path === THEME_PATH) {
      const theme: string = await useStorage().getItem('pinceau:index.css');
      event.respondWith(new Response(theme, {
        headers: {
          "content-type": "text/css",
        }
      }));
    }
  })
} 