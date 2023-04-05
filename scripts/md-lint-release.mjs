import { hooks } from "./hooks.mjs";

hooks.hook("lint", ({ frontmatter, content, fd, attributes }) => {
  if (attributes.release) {
  }
})