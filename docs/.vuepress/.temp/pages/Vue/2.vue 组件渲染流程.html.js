export const data = {
  "key": "v-ea4deff0",
  "path": "/Vue/2.vue%20%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93%E6%B5%81%E7%A8%8B.html",
  "title": "vue 组件渲染流程",
  "lang": "en-US",
  "frontmatter": {
    "tags": [
      "vue",
      "vnode"
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "VNode",
      "slug": "vnode",
      "children": []
    },
    {
      "level": 2,
      "title": "组件",
      "slug": "组件",
      "children": []
    },
    {
      "level": 2,
      "title": "组件渲染流程",
      "slug": "组件渲染流程",
      "children": [
        {
          "level": 3,
          "title": "使用渲染器（renderer）创建（createApp）应用实例app",
          "slug": "使用渲染器-renderer-创建-createapp-应用实例app",
          "children": []
        },
        {
          "level": 3,
          "title": "核心渲染流程：创建 vnode 和渲染 vnode",
          "slug": "核心渲染流程-创建-vnode-和渲染-vnode",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "Vue/2.vue 组件渲染流程.md",
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
