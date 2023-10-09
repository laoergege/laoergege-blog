import { hash } from "ohash";
import { resolve, relative } from "node:path";
import { cwd } from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";

interface ContentFile {
  _id: string;
  _source: string;
  _path: string;
  parsed: {
    title: string;
    body: string;
    tags?: string[];
  }
}

export default defineNitroPlugin((nitroApp) => {
  // @ts-ignore
  nitroApp.hooks.hook("content:file:beforeParse", (file: { _id: string, body: string }) => {
    if (file._id.endsWith(".md")) {
      file.body = file.body.replaceAll(/\[(.*?)\]\((\..*?\.md)\)/g, (str, g1, g2) => {
        const p = relative(cwd(), fileURLToPath(new URL(g2, pathToFileURL(resolve(...file._id.split(":"))))))
        const contentid = p.replaceAll("/", ":")
        return `[${g1}](/posts/${hash(contentid)})`
      })
    }
  });
  // @ts-ignore
  nitroApp.hooks.hook("content:file:afterParse", (file: ContentFile) => {
    if (file._id.endsWith(".md")) {
      file._path = `/posts/${hash(file._id)}`
    }
  });
})


