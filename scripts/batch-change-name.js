#!/usr/bin/env zx

const { fs, glob } = require("zx");

const OLD_NAME = '${images}'
const NEW_NAME = 'images'

const filePaths = await glob(`**/*/${OLD_NAME}\.*`)
const dirPaths = await glob(`**/*/${OLD_NAME}`, {
    onlyDirectories: true
})
const paths = filePaths.concat(dirPaths)

for (const path of paths) {
    const newPath = path.replace(OLD_NAME, NEW_NAME)

    try {
        await fs.rename(path, newPath)
    } catch (error) {
        // 目标文件夹已存在，将文件夹内容移动到目标文件夹
        if (error.errno === -66) {
            const childPaths = await glob(`${path}/*`)
            for (const childPath of childPaths) {
                await fs.move(childPath, childPath.replace(OLD_NAME, NEW_NAME), { overwrite: true })
            }
        }
    }
}
