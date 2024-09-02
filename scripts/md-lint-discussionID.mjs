import { nanoid } from "nanoid";

export default (args) => {
  if (args.frontmatter) {
    if (args.frontmatter.includes("discussionID")) {
      return;
    }
    args.content = args.content.replace(
      "---",
      `---\ndiscussionID: ${nanoid()}`
    );
  } else {
    args.content = `---\ndiscussionID: ${nanoid()}\n---\n` + args.content;
  }
};
