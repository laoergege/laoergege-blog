import type { PluginFunction, Page } from "@vuepress/core";
import { createPage } from "@vuepress/core";
import minimatch from "minimatch";
import { isExistPlugin } from "./utils";

interface Options {
  max: number; // 最近最新的数量，默认 20
  exclude?: string; // glob
  render?: (page: Page) => string;
}

const MAX = 20;

export const lastUpdated: PluginFunction<Options> = function ({
  max = MAX,
  exclude,
  render,
}) {
  return {
    name: "last-updated-list",
    async onInitialized(app) {
      if (!isExistPlugin("@vuepress/plugin-git", app)) {
        throw "Need to install @vupress/plugin-git dependency first!";
      }

      const { pages } = app;

      const _pages = [...pages].sort((a, b) => {
        let atime = (a.data as any).git.updatedTime;
        let btime = (b.data as any).git.updatedTime;
        return btime - atime;
      });
      const tmp = [];
      for (let i = 0; i < max; i++) {
        tmp.push(_pages[i]);
      }

      const links = tmp
        .filter((page) =>
          exclude ? !minimatch(page.filePath as string, exclude) : true
        )
        .map((p) => (render ? render(p) : `- [${p.title}](${p.path})`))
        .join("\n");

      // 新增页面
      const lastUpdatedPage = await createPage(app, {
        path: "/lastUpdated.html",
        content: `${links}`,
      });

      app.pages.push(lastUpdatedPage);
    },
  };
};
