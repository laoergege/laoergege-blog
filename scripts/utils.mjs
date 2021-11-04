
// 将 utf8 编码的文本转换为普通文本
export function utf8ToText(str) {
    let decoder = new TextDecoder()
    return unescape(str).replace(/(\\\d{3}){3}/g, (s1) => {
        let uint8Array = new Uint8Array(s1.match(/\d{3}/g).map(e => parseInt(e, 8)))
        return decoder.decode(uint8Array)
    })
}
