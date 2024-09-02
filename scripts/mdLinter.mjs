#!/usr/bin/env zx

import "zx/globals";
import { open } from "node:fs/promises";
import { hooks } from "./hooks.mjs";
import fm from "front-matter";
import { URL, fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const files = argv["_"];
const MAX = 5;
const HooksDir = fileURLToPath(new URL(".", import.meta.url));

// const loadHooks = async () => {
//   const paths = await glob(`${HooksDir}/md-lint-*.(js|mjs)`);
//   return Promise.all(paths.map((_path) => import(_path)));
// };

const lintMD = async (file) => {
  let fd;
  try {
    fd = await open(file, "r+");
    const content = (
      await fd.readFile({
        encoding: "utf-8",
      })
    ).trim();
    const { frontmatter, attributes } = fm(content);
    const resolvedMD = {
      content,
      frontmatter,
      attributes,
      fd,
      filePath: file,
      fileURL: pathToFileURL(path.resolve(file)),
    };
    await hooks.callHook("lint", resolvedMD);
    await fd.write(resolvedMD.content, 0);
  } catch (error) {
    console.error("file failly lint: " + file);
    console.error(error);
  } finally {
    if (fd) {
      fd.close();
    }
  }
};

const runs = async (tasks) => {
  const queue = new Set();
  const consume = async () => {
    const [val, i] = await Promise.race(queue);
    queue.delete(i);
    return val;
  };
  for (const task of tasks) {
    const p = new Promise(async (resolve) => resolve([await task(), p]));
    queue.add(p);

    if (queue.size >= MAX) {
      await consume();
    }
  }
  while (queue.size) {
    await consume();
  }
};

// await loadHooks();
runs(files.map((f) => () => lintMD(f)));
