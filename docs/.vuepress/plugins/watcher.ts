import type { PluginFunction } from 'vuepress-vite'
import type { WatchOptions } from "chokidar";
import chokidar from "chokidar";
import { isDev, logger } from "./utils";
import chalk from "chalk";

export interface Config{
    paths: string | string[] // file, dir, glob, or array
    options?: WatchOptions
}

const fileWatcher: PluginFunction<Config> = ({ paths, options = {} }) => {
    return {
        name: 'FileWatcher',
        onWatched(app, watchers, restart) {

            const watcher = chokidar.watch(paths, options)

            if(isDev) {
                logger.info('Plugin', chalk.magenta('FileWatcher'), `\n${Array.isArray(paths) ? paths.join('\n') : paths}\nis`, chalk.green.bold('watching...'))
            }

            watchers.push(watcher)
            watcher.on('change', (file) => {
                logger.info(`${file} is modified`)
                restart()
            })
        }
    }
} 

export default fileWatcher;