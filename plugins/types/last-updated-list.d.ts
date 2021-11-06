import type { PluginFunction, Page } from "vuepress";
interface Options {
    max: number;
    exclude?: string;
    render?: (page: Page) => string;
}
export declare const lastUpdated: PluginFunction<Options>;
export {};
