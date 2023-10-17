import sizeOf from "image-size";
import { promisify } from "node:util";
import { resolve } from "node:path";

export const fetchImgSize = async (url: string): Promise<{ width?: number, height?: number } | undefined> => {
  if (import.meta.server) {
    const _sizeOf = promisify(sizeOf)

    return await _sizeOf(resolve("./public" + url))
  }
  return {}
}