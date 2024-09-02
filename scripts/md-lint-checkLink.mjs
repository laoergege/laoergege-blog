import fs from "node:fs";

export default ({ content, fileURL }) => {
  const fileLinks = content.match(/\[(.*?)\]\(\.(.*?).md\)/g);

  if (fileLinks) {
    for (let link of fileLinks) {
      let _link = link.match(/\((.*?)\)/)[1];
      let subfilePath;

      try {
        subfilePath = new URL(decodeURI(_link), fileURL);
      } catch (error) {
        console.error(
          `${_link} Local link File ${subfilePath} not found in \n ${fileURL}`
        );
        continue;
      }

      // 检查文件是否存在
      fs.stat(subfilePath, (err, stats) => {
        if (err) {
          console.error(
            `Local link File ${subfilePath} not found in \n ${fileURL} \n ${err}`
          );
        }
      });
    }
  }
};
