import { nanoid } from "nanoid";
import { hooks } from "./hooks.mjs";

hooks.hook("lint", (args) => {
  if (args.frontmatter) {
    if (args.frontmatter.includes("discussionID")) {
      return
    }
    args.content = args.content.replace("---", `---\ndiscussionID: ${nanoid()}`)
  } else {
    args.content = `---\ndiscussionID: ${nanoid()}\n---\n` + args.content
  }
})