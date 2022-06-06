import type { PluginObject } from "@vuepress/core";
export interface Options {
    platform: string;
    [index: string]: any;
}
export interface VssueNextCompatPlugin {
    (option: Options): PluginObject;
}
export declare const VssuePlugin: VssueNextCompatPlugin;
