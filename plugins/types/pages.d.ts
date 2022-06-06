import type { PluginObject, Page } from "@vuepress/core";
export interface Options {
    max: number;
    exclude?: string;
    render?: (page: Page) => string;
}
export interface PagesPlugin {
    (option: Options): PluginObject;
}
export declare const PagesPlugin: PagesPlugin;
