module.exports = function vssueLoader(content) {

  if (!/README/i.test(this.resource)) {
    content +=  '\n\n---\n<Vssue :title="$title" />' 
  }

  return content
}