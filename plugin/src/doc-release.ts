import type { PluginFunction, App } from "@vuepress/core";
import minimatch from "minimatch";

interface Options {
  glob?: string | string[]; // default README.md
}

export const docRelease: PluginFunction<Options> = function ({
  glob = "**/README.md",
}) {
  const match = (file: string) => {
    if (!glob) {
      return false;
    }

    if (Array.isArray(glob)) {
      return glob.some((g) => minimatch(file, g));
    }

    try {
      return minimatch(file, glob);
    } catch (error) {
      return false;
    }
  };

  return {
    name: "DocRelease",
    onInitialized: (app: App) => {
      const result = [];
      for (const page of app.pages) {
        if (
          page.frontmatter.release ||
          (glob && match(page.filePathRelative as string))
        ) {
          result.push(page);
        }
      }
      app.pages = result;
    },
  };
};
