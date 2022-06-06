import type { App } from "@vuepress/core";
import path from "path";

// 将 utf8 编码的文本转换为普通文本
export function utf8ToText(str: string) {
  let decoder = new TextDecoder();
  return unescape(str).replace(/(\\\d{3}){3}/g, (s1) => {
    let uint8Array = new Uint8Array(
      (s1.match(/\d{3}/g) as Array<string>).map((e) => parseInt(e, 8))
    );
    return decoder.decode(uint8Array);
  });
}

// 查看是否存在否插件
export function isExistPlugin(pluginName: string, app: App) {
  const plugins = app.pluginApi.plugins;

  return plugins.some((p) => p.name === pluginName);
}

export function getOutput() {
  return path.resolve(__dirname, "../lib");
}