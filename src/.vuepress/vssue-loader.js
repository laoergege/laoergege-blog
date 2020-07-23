module.exports = function vssueLoader(content) {
  content +=  '\n\n---\n<Vssue :title="$title" />'

  console.log(content)

  return content
}