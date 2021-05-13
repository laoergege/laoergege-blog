export const data = {
  "key": "v-7438ad36",
  "path": "/Git/",
  "title": "Git 系列相关文章",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Git 博客开发系列",
      "slug": "git-博客开发系列",
      "children": []
    }
  ],
  "filePathRelative": "Git/README.md",
  "git": {
    "updatedTime": 1620467530000,
    "contributors": [
      {
        "name": "连远生",
        "email": "lianyuansheng@xiao100.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
