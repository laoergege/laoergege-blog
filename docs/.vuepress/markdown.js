module.exports = {
    extendMarkdown: md => {
        md.use(require('markdown-it-task-lists'))
        md.use(require('markdown-it-disable-url-encode'))
    }
}