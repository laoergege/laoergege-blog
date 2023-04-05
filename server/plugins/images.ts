import { resolve, relative } from "node:path";
import { copyFile, existsSync, mkdir } from "node:fs";

interface ContentFile {
  _id: string;
  body: string;
}

const ROOTDIR = "content"
const OUTDIR = "public/images"
const PREFIX = "/images/"

export default defineNitroPlugin((nitroApp) => {
  // content dir
  const rootDir = resolve(process.cwd(), ROOTDIR);
  
  nitroApp.hooks.hook("content:file:beforeParse", (file: ContentFile) => {
    if (file._id.endsWith(".md")) {
      file.body = file.body.replace(
        /\(([^)]*?\.(png|gif|jpg|jpeg))\)/g,
        (match, g) => {
          let { _id } = file;
          const id = _id.replaceAll(":", "/");
          
          const filePath = resolve(process.cwd(), id);

          const imageSrc = resolve(filePath, "..", g);
          const img = relative(rootDir, imageSrc);
          const imgDest = resolve(process.cwd(), OUTDIR, img);
          if (!existsSync(imgDest)) {
            mkdir(resolve(process.cwd(), OUTDIR), (err) => {
              if(!err) {
                copyFile(imageSrc, imgDest, (err) => {
                  if(err) {
                    console.error(err);
                  }
                });
              }
            })
          }

          return `(${PREFIX}${img})`;
        }
      );
    }
  });
});
