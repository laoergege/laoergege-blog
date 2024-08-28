import { resolve, basename } from "node:path";
import { mkdir } from "node:fs/promises";
import { symlinkSync, existsSync } from "node:fs";
import { URL, pathToFileURL, fileURLToPath } from "node:url";
import { visit } from 'unist-util-visit'

export default defineNitroPlugin((nitroApp) => {
  return;
  const destDir = resolve("public", "images")
  mkdir(destDir, { recursive: true });

  // @ts-ignore
  nitroApp.hooks.hook("content:file:beforeParse", (file: ContentFile) => {
    if (file._id.endsWith(".md")) {
      file.body = file.body.replaceAll(
        /(?<=\!\[.*?\]\()\.\/.*?\.(png|gif|jpg|jpeg|svg)(?=\))/g,
        (img: string) => {
          let { _id } = file;
          const resolveImgPath = fileURLToPath(new URL(img, pathToFileURL(resolve(..._id.split(":")))))
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

  // @ts-ignore
  nitroApp.hooks.hook('content:file:afterParse', async (file) => {
    if (file._id.endsWith('.md')) {
      // @ts-ignore
      const imgNodes = []
      visit(file.body, (n: any) => n.tag === 'img', (node) => {
        imgNodes.push(node)
      })

      // @ts-ignore
      for await (const node of imgNodes) {
        const { width, height } = await fetchImgSize(node.props.src);
        node.props.width = width
        node.props.height = height
      }
    }
  })
});
