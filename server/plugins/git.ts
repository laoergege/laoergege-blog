import { resolve } from "node:path";
import { execaSync, execa } from "execa";

export const getCreatedTime = (filePaths: string[], cwd: string): number => {
  const { stdout } = execaSync(
    "git",
    ["--no-pager", "log", "--diff-filter=A", "--format=%at", ...filePaths],
    {
      cwd,
    }
  );
  console.log(stdout);

  return (
    Math.min(...stdout.split("\n").map((item) => Number.parseInt(item, 10))) *
    1000
  );
};

export interface GitContributor {
  name: string;
  email: string;
  commits: number;
}

export const getContributors = (
  filePaths: string[],
  cwd: string
): GitContributor[] => {
  const { stdout } = execaSync(
    "git",
    ["--no-pager", "shortlog", "-nes", "HEAD", "--", ...filePaths],
    {
      cwd,
      stdin: "inherit",
    }
  );

  return stdout
    .split("\n")
    .map((item) => item.trim().match(/^(\d+)\t(.*) <(.*)>$/))
    .filter((item): item is RegExpMatchArray => item !== null)
    .map(([, commits, name, email]) => ({
      name,
      email,
      commits: Number.parseInt(commits, 10),
    }));
};

export const getUpdatedTime = (filePaths: string[], cwd: string): number => {
  const { stdout } = execaSync(
    "git",
    [
      "--no-pager",
      "log",
      "--format=%at",
      // if there is only one file to be included, add `-1` option
      ...(filePaths.length > 1 ? [] : ["-1"]),
      ...filePaths,
    ],
    {
      cwd,
    }
  );

  return (
    Math.max(...stdout.split("\n").map((item) => Number.parseInt(item, 10))) *
    1000
  );
};

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("content:file:afterParse", async (file) => {
    if (file._id.endsWith(".md")) {
      const cwd = process.cwd();
      const filePath = resolve(cwd, "content", file._file);

      // file.createTime = getCreatedTime([filePath], cwd);
      file.updateTime = getUpdatedTime([filePath], cwd);
      // file.Contributors = getContributors([filePath], cwd);
    }
  });
});
