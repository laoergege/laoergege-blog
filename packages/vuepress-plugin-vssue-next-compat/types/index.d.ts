import type { PluginObject } from "@vuepress/core";
import type { VssueAPI } from "vssue";
export interface VssueNextCompatPluginOptions extends VssueAPI.Options {
    platform: string;
    [index: string]: any;
}
export interface VssueNextCompatPlugin {
    (option?: VssueNextCompatPluginOptions): PluginObject;
}
export declare const VssuePlugin: VssueNextCompatPlugin;
