import type { PluginFunction } from 'vuepress'
import chokidar from "chokidar";

function fileWatcher(config, app) {
    console.log(config)
    return {
        name: 'FileWatcher',
        onWatched(app, watchers) {
            // const watcher = chokidar.watch()
        }
    }
} 

export default fileWatcher as PluginFunction