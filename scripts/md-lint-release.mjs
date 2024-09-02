import { rename } from "node:fs/promises";

export default async ({ filePath, attributes }) => {
  if (!attributes.release) {
    let last = filePath.lastIndexOf("/");
    let newFilePath = filePath.replace(/\//g, (s, offset) => {
      return offset === last ? "/." : s;
    });

    await rename(filePath, newFilePath);
  }
};
