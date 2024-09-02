import { hooks } from "./hooks.mjs";
import fs from "node:fs";

hooks.hook("lint", ({ content, fileURL }) => {
  const fileLinks = content.match(/\[(.*?)\]\((.*?\.md)\)/g);

  if (fileLinks) {
    for (let link of fileLinks) {
      let _link = link.match(/\((.*?)\)/)[1];
      let subfilePath;

      try {
        subfilePath = new URL(_link, fileURL).pathname;
      } catch (error) {
        console.error(`
          File not found: ${fileURL} /n ${_link}
        `);
        continue;
      }

      // 检查文件是否存在
      fs.stat(subfilePath, (err, stats) => {
        if (err) {
          console.error(`Not Found： ${fileURL} /n ${_link}`);
        }
      });
    }
  }
});
