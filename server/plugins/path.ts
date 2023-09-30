import { hash } from "ohash";

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
  nitroApp.hooks.hook("content:file:afterParse", (file: ContentFile) => {
    if (file._id.endsWith(".md")) {
      file._path = `/posts/${hash(file._id)}`
    }
  });
})


