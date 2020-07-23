module.exports = function vssueLoader(content) {
  content += `
    <Vssue :title="$title" />
  `

  return content
}