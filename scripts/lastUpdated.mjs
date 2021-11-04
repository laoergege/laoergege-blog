import 'zx/globals'
import dayjs from 'dayjs'
import { utf8ToText } from "./utils.mjs";

$.verbose = false

const SINCE_DATE = dayjs().subtract(2, 'day').toDate().toISOString()

export async function lastUpdated() {
    const flags = [
        `--since=${SINCE_DATE}`,
        '--pretty=',
        '--name-only',
    ]

    const { stdout } = await $`git log ${flags}`
    let result = (stdout.match(/^.+$/mg) || [])
        .map(e => utf8ToText(e))
        .map(e => e.replace(/(^['"]|['"]$)/g, '')) // 字符串首位可能存在引号，消除
        .filter(e => /\.md$/.test(e))

    // 去重
    result = [...new Set(result)]

    return result
}

lastUpdated()