import { visit } from "unist-util-visit";

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export default function () {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === "containerComponent") {
        node.children.forEach((child) =>
          visit(child, (node) => {
            if (
              node.type === "listItem" &&
              node.children.some((child) => child.type === "list")
            ) {
              const [summary, ...children] = node.children;
              node.children = [
                {
                  type: "element",
                  data: {
                    hName: "details",
                    hProperties: {
                      open: true,
                    },
                  },
                  children: [
                    {
                      type: "element",
                      data: {
                        hName: "summary",
                      },
                      children: summary.children,
                    },
                    ...children,
                  ],
                },
              ];
            }
          })
        );
      }
    });
  };
}
