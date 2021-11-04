import 'zx/globals'
import dayjs from 'dayjs'

$.verbose = false

export async function lastUpdated() {
    const flags = [
        `--since=${dayjs().subtract(1, 'month').toDate().toISOString()}`,
        '--pretty=',
        '--name-only',
        '--encoding=gbk'
    ]

    const { stdout } = await $`git log ${flags}`

    const res = [...stdout.matchAll(/\n$/mg)]

    console.log(res)


    return;
}

lastUpdated()