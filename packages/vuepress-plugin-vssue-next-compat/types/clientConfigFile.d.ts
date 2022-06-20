import "vssue/dist/vssue.min.css";
export interface OnBeforeOauthHook {
    /**
     * @url {string} then oauth url
     */
    (url: string): void;
}
export interface VssueProps {
    onBeforeOauth?: OnBeforeOauthHook;
}
declare const _default: import("@vuepress/client").ClientConfig;
export default _default;
