import type { PluginFunction, Page } from "@vuepress/core";
interface Options {
    max: number;
    exclude?: string;
    render?: (page: Page) => string;
}
export declare const pageTables: PluginFunction<Options>;
export {};
