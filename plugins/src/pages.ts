import type { PluginObject, Page } from "@vuepress/core";
import { createPage } from "@vuepress/core";
import minimatch from "minimatch";
import { isExistPlugin } from "./utils";
import hash from "hash-sum";

type Tables = Page[][];
export interface Options {
  max?: number; // 最近最新的数量，默认 10
  exclude?: string; // glob
  render?: (page: Page) => string;
}
export interface PagesPlugin {
  (option: Options): PluginObject;
}

const MAX = 8;
const keys: string[] = [];

export const PagesPlugin: PagesPlugin = ({ max = MAX, exclude, render }) => {
  return {
    name: "vuepress-plugin-pages",
    define: {
      __TABLE_KEYS__: keys,
    },
    async onInitialized(app) {
      try {
        // @vuepress/plugin-git 依赖提示
        if (!isExistPlugin("@vuepress/plugin-git", app)) {
          throw "Need to install @vupress/plugin-git dependency first!";
        }
        // 排序
        const { pages } = app;
        const _pages = [...pages]
          // 日期排序
          .sort((a, b) => {
            let atime = (a.data as any).git.updatedTime;
            let btime = (b.data as any).git.updatedTime;
            return btime - atime;
          })
          // 置顶排序
          .sort((a, b) => {
            let { top: atop } = a.frontmatter as any;
            let { top: btop } = b.frontmatter as any;
            atop ??= Infinity;
            btop ??= Infinity;
            return atop - btop;
          })
          .filter((page) =>
            exclude ? !minimatch(page.filePath as string, exclude) : true
          );

        // 数据分页
        const chunks = (nums: any[], len: number) => {
          const result: any[][] = [];
          nums.forEach((num, i) => {
            let index = Math.floor(i / len);
            result[index] ??= [];
            result[index].push(num);
          });
          return result;
        };
        const tables: Tables = chunks(_pages, max);

        // md 模板生成
        for (let i = 0; i < tables.length; i++) {
          let table = tables[i];
          const homepage = table
            .map((p) => (render ? render(p) : `- [${p.title}](${p.path})`))
            .join("\n");
          // 新增页面
          const path = `/list${i + 1}.html`;
          const page = await createPage(app, {
            path,
            content: `${homepage}`,
          });
          // route key
          keys.push(`v-${hash(path)}`);
          app.pages.push(page);
        }
      } catch (err) {
        console.log(err);
      }
    },
  };
};
