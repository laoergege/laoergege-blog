#!/usr/bin/env zx

const { $ } = require("zx");

// await $`gh auth login --with-token < scripts/github-token.txt`

const { stdout } = await $`gh issue list`

const list = stdout.matchAll(/.+$/mg)

for (const [issue] of list) {
    const num = issue.match(/^\d+(?=\D)/)
    $`gh issue delete ${num}`
}
