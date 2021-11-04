import 'zx/globals'
import dayjs from 'dayjs'
import { utf8ToText } from "./utils";

$.verbose = false

const SINCE_DATE = dayjs().subtract(1, 'month').toDate().toISOString()
const DEPTH = 20

export async function lastUpdated() {
    const flags = [
        `--since=${SINCE_DATE}`,
        '--pretty=',
        '--name-only',
    ]

    const { stdout } = await $`git log ${flags}`
    let result = (stdout.match(/^.+$/mg) || [])
        .map(e => utf8ToText(e))
        .map(e => e.replace(/(^['"]|['"]$)/g, '')) // 字符串首尾可能存在引号，消除
        .filter(e => /\.md$/.test(e))

    // 去重
    result = [...new Set(result)]

    return result
}

async function recursion(result: string[] = []) {
    result.push(...(await lastUpdated()))

    if (result.length < DEPTH) {
        recursion(result)
    }
}

export async function getLastUpdated() {
    const result: string[] = []
    await recursion(result)
    return result
}

getLastUpdated().then(res => console.log(res))