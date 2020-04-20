module.exports = {
    extendMarkdown: md => {
        md.use(require('markdown-it-task-lists'))
    }
}