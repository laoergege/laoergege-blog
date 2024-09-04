import { resolve, basename } from "node:path";
import { mkdir } from "node:fs/promises";
import fs from "node:fs/promises";
import { URL, pathToFileURL, fileURLToPath } from "node:url";
import { visit } from 'unist-util-visit'

export default defineNitroPlugin((nitroApp) => {
  const destDir = resolve("public", "images")
  mkdir(destDir, { recursive: true });

  // @ts-ignore
  nitroApp.hooks.hook("content:file:beforeParse", async (file: ContentFile) => {
    if (file._id.endsWith(".md")) {
      const arr: [string, string][] = [];
      file.body = file.body.replaceAll(
        /(?<=\!\[.*?\]\()\.\/.*?\.(png|gif|jpg|jpeg|svg)(?=\))/g,
        (img: string) => {
          let { _id } = file;
          const resolveImgPath = fileURLToPath(new URL(img, pathToFileURL(resolve(..._id.split(":")))))
          const imgName = basename(resolveImgPath);
          const destImg = resolve(destDir, imgName);

          arr.push([resolveImgPath, destImg])

          return `/images/${imgName}`;
        }
      );

      for (const [o, d] of arr) {
        const r1 = await fs.stat(d).then(e => false).catch(e => true)
        const r2 = await fs.stat(o).then(e => true).catch(e => false)
        if (r1 && r2) {
          await fs.symlink(o, d)
        }
      }
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
