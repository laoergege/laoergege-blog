export const data = {
  "key": "v-743faa02",
  "path": "/Vue/",
  "title": "VUE（3.x）",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "Vue/README.md",
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
