import type { PluginFunction, Page } from "@vuepress/core";
import { createPage } from "@vuepress/core";
import minimatch from "minimatch";
import { isExistPlugin } from "../utils";
import hash from "hash-sum";

type Tables = Page[][];

const MAX = 8;
const keys: string[] = [];

export const pageTables: PluginFunction<Options> = function ({
  max = MAX,
  exclude,
  render,
}) {
  return {
    name: "last-updated-list",
    define: {
      __TABLE_KEYS__: keys,
    },
    async onInitialized(app) {
      // @vuepress/plugin-git 依赖提示
      if (!isExistPlugin("@vuepress/plugin-git", app)) {
        throw "Need to install @vupress/plugin-git dependency first!";
      }

      // page 按更新日期排序
      const { pages } = app;
      const _pages = [...pages]
        .sort((a, b) => {
          let atime = (a.data as any).git.updatedTime;
          let btime = (b.data as any).git.updatedTime;
          return btime - atime;
        })
        // .sort((a, b) => {
        //   const { git } = a.data as any
        //   if() {

        //   }
        // })
        .filter((page) =>
          exclude ? !minimatch(page.filePath as string, exclude) : true
        );

      // 数据分页
      const tables: Tables = chunks(_pages, max);
      function chunks(nums: any[], len: number) {
        const result: any[][] = [];
        nums.forEach((num, i) => {
          let index = Math.floor(i / len);
          result[index] ??= [];
          result[index].push(num);
        });
        return result;
      }

      // md 模板生成
      genDataList(tables);
      async function genDataList(tables: Tables) {
        for (let i = 0; i < tables.length; i++) {
          let table = tables[i];
          const links = table
            .map((p) => (render ? render(p) : `- [${p.title}](${p.path})`))
            .join("\n");

          // 新增页面
          const path = `/list${i + 1}.html`;
          const lastUpdatedPage = await createPage(app, {
            path,
            content: `${links}`,
          });

          // route key
          keys.push(`v-${hash(path)}`);

          app.pages.push(lastUpdatedPage);
        }
      }
    },
  };
};
