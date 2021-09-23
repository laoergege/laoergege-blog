import type { PluginFunction } from "vuepress";

interface Options {
    glob?: string | string[]
}

export const docRelease: PluginFunction<Options> = function() {
    return {
        name: 'DocRelease',
        onInitialized: (app) => {
             const result = []
             for (const page of app.pages) {
                 if(page.frontmatter.release) {
                     result.push(page)
                 }
             }
             app.pages = result
        },
    }
}