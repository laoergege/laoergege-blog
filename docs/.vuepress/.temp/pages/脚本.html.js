export const data = {
  "key": "v-2f1503f6",
  "path": "/%E8%84%9A%E6%9C%AC.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "脚本.md",
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
