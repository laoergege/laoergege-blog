import type { PluginFunction } from 'vuepress'
import type { WatchOptions } from "chokidar";
import chokidar from "chokidar";
import { isDev, logger } from "./utils";
import chalk from "chalk";

interface Config{
    paths: String | String[] // file, dir, glob, or array
    options: WatchOptions
}

function fileWatcher({ paths, options = {} }) {
    return {
        name: 'FileWatcher',
        onWatched(app, watchers, restart) {
            const watcher = chokidar.watch(paths, options)

            if(isDev) {
                logger.info('Plugin', chalk.magenta('FileWatcher'), `\n${paths.join('\n')}\nis`, chalk.green.bold('watching...'))
            }

            watchers.push(watcher)
            watcher.on('change', (file) => {
                logger.info(`${file} is modified`)
                restart()
            })
        }
    }
} 

export default fileWatcher as PluginFunction<Config>