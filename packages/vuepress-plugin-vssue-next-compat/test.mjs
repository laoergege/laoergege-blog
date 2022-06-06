import "systemjs/dist/system-node.cjs";

const res = await System.import("https://unpkg.com/vssue/dist/vssue.github.min.js");

console.log(res)
