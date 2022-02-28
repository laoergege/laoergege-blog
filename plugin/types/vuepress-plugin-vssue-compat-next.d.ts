import type { PluginFunction } from "vuepress";
export interface Option {
    platform: string;
    [index: string]: any;
}
export declare const vssuePlugin: PluginFunction<Option>;
