import { resolve, basename } from "node:path";
import { mkdir } from "node:fs/promises";
import { symlinkSync, accessSync } from "node:fs";
import { URL, pathToFileURL, fileURLToPath } from "node:url";

export default defineNitroPlugin((nitroApp) => {
  // const destDir = resolve("public", "images")
  // mkdir(destDir, { recursive: true });

  // nitroApp.hooks.hook("content:file:beforeParse", (file: ContentFile) => {
  //   if (file._id.endsWith(".md")) {
  //     file.body = file.body.replace(
  //       /(?<=\!\[.*?\]\().*?\.(png|gif|jpg|jpeg|svg)(?=\))/g,
  //       (img: string) => {
  //         let { _id } = file;
  //         const resolveImgPath = fileURLToPath(new URL(img, pathToFileURL(resolve(..._id.split(":")))))
  //         const imgName = basename(resolveImgPath)
  //         const destImg = resolve(destDir, imgName)

  //         try {
  //           accessSync(destImg)
  //         } catch (error) {
  //           symlinkSync(resolveImgPath, destImg)
  //         }

  //         return `/images/${imgName}`;
  //       }
  //     );
  //   }
  // });
});
