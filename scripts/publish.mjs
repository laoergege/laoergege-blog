import 'zx/globals'
import { lastUpdated } from './lastUpdated.js'

export async function publish() {
    await lastUpdated()
    await $`git tag page -f && git push origin page -f`
}