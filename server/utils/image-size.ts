import sizeOf from "image-size";
import { promisify } from "node:util";
import { resolve } from "node:path";

export const fetchImgSize = async (url: string): Promise<{ width?: number, height?: number }> => {
  if (import.meta.server) {
    const _sizeOf = promisify(sizeOf)

    return _sizeOf(resolve("./public" + decodeURIComponent(url))).catch((e) => {
      console.error("image-size: ", e)
      return {}
    })
  }
  return {}
}

export type FetchImgSize = typeof fetchImgSize