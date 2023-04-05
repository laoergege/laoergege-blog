import { nanoid } from "nanoid";
import { hooks } from "./hooks.mjs";

hooks.hook("lint", (agrs) => {
  const { frontmatter, content } = args
  if (frontmatter) {
    if (frontmatter.includes("discussionID")) {
      return
    }
    argv.content = content.replace("---", `---\ndiscussionID: ${nanoid()}`)
  } else {
    argv.content = `---\ndiscussionID: ${nanoid()}\n---\n` + content
  }
})