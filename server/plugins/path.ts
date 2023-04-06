interface ContentFile {
  _id: string;
  _source: string;
  _path: string;
}

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("content:file:afterParse", (file: ContentFile) => {
    if (file._id.endsWith(".md")) {
      file._path = file._id.replaceAll(":", "/").replace(/\.md$/, "").replace(file._source, "");
    }
  });
});
