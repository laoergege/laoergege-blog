import { hooks } from "./hooks.mjs";
import { rename } from "node:fs/promises";

hooks.hook("lint", ({ filePath, attributes }) => {
  if (!attributes.release) {
    let last = filePath.lastIndexOf("/")
    let newFilePath = filePath.replace(/\//g, (s, offset) => {
      return offset === last ? "/." : s
    })

    rename(filePath, newFilePath)
  }
})