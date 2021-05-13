export const data = {
  "key": "v-48880fb4",
  "path": "/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8E%9F%E7%90%86%E5%8F%8AAPI/%E6%B5%8F%E8%A7%88%E5%99%A8%E9%A1%B5%E9%9D%A2%E6%B8%B2%E6%9F%93%E6%B5%81%E7%A8%8B.html",
  "title": "浏览器页面渲染流程",
  "lang": "en-US",
  "frontmatter": {
    "title": "浏览器页面渲染流程",
    "tags": [
      "browser",
      "render",
      "chrome",
      "blink"
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Blink（渲染引擎）",
      "slug": "blink-渲染引擎",
      "children": []
    },
    {
      "level": 2,
      "title": "页面渲染流程",
      "slug": "页面渲染流程",
      "children": [
        {
          "level": 3,
          "title": "构建 DOM 树（Parse HTML）",
          "slug": "构建-dom-树-parse-html",
          "children": []
        },
        {
          "level": 3,
          "title": "样式计算（Recalculate Style）",
          "slug": "样式计算-recalculate-style",
          "children": []
        },
        {
          "level": 3,
          "title": "布局阶段（Layout）",
          "slug": "布局阶段-layout",
          "children": []
        },
        {
          "level": 3,
          "title": "分层（Layers）",
          "slug": "分层-layers",
          "children": []
        },
        {
          "level": 3,
          "title": "Paint（绘制）",
          "slug": "paint-绘制",
          "children": []
        },
        {
          "level": 3,
          "title": "Raster",
          "slug": "raster",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "浏览器原理及API/浏览器页面渲染流程.md",
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
