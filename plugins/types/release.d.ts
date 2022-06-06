import type { PluginObject } from "@vuepress/core";
export interface Options {
    glob?: string | string[];
}
export interface PagesPlugin {
    (option: Options): PluginObject;
}
export declare const ReleasePlugin: PagesPlugin;
