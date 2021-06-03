import path from "path";

const base = path.resolve('./src/.vuepress')

export function resolve(...res) {
    return path.resolve(base, ...res)
}