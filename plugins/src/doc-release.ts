import type { PluginFunction } from "vuepress";
import minimatch from "minimatch";

interface Options {
    glob?: string | string[] // default README.md
}

export const docRelease: PluginFunction<Options> = function({ glob = '**/README.md'}) {

    const match = (file: string) => {
        if(!glob) {
            return false
        }

        if(Array.isArray(glob)) {
            return glob.some((g) => minimatch(file, g))
        }

        return minimatch(file, glob)
    }


    return {
        name: 'DocRelease',
        onInitialized: (app) => {
             const result = []
             for (const page of app.pages) {
                 console.log(page)
                 if(
                     page.frontmatter.release &&
                     glob &&
                     match(page.filePathRelative as string)
                    ) {
                     result.push(page)
                 }
             }
             app.pages = result
        },
    }
}