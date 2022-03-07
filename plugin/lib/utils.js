"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExistPlugin = exports.utf8ToText = void 0;
// 将 utf8 编码的文本转换为普通文本
function utf8ToText(str) {
    var decoder = new TextDecoder();
    return unescape(str).replace(/(\\\d{3}){3}/g, function (s1) {
        var uint8Array = new Uint8Array(s1.match(/\d{3}/g).map(function (e) { return parseInt(e, 8); }));
        return decoder.decode(uint8Array);
    });
}
exports.utf8ToText = utf8ToText;
// 查看是否存在否插件
function isExistPlugin(pluginName, app) {
    var plugins = app.pluginApi.plugins;
    return plugins.some(function (p) { return p.name === pluginName; });
}
exports.isExistPlugin = isExistPlugin;