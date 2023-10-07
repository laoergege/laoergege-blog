import { resolve, basename } from "node:path";
import { mkdir } from "node:fs/promises";
import { symlinkSync, existsSync } from "node:fs";
import { URL, pathToFileURL, fileURLToPath } from "node:url";

export default defineNitroPlugin((nitroApp) => {
  const destDir = resolve("public", "images")
  mkdir(destDir, { recursive: true });

  // @ts-ignore
  nitroApp.hooks.hook("content:file:beforeParse", (file: ContentFile) => {
    if (file._id.endsWith(".md")) {
      file.body = file.body.replace(
        /(?<=\!\[.*?\]\(\.\/).*?\.(png|gif|jpg|jpeg|svg)(?=\))/g,
        (img: string) => {
          let { _id } = file;
          const resolveImgPath = fileURLToPath(new URL(img, pathToFileURL(encodeURI(resolve(..._id.split(":"))))))
          const imgName = basename(resolveImgPath)
          const destImg = resolve(destDir, imgName)

          if (existsSync(resolveImgPath) && !existsSync(destImg)) {
            symlinkSync(resolveImgPath, destImg)
          }

          return `/images/${imgName}`;
        }
      );
    }
  });
});
