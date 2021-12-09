import type { PluginFunction } from "@vuepress/core";
export interface Option {
    platform: string;
    [index: string]: any;
}
export declare const vssuePlugin: PluginFunction<Option>;
