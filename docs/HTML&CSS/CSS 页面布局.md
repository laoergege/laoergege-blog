# CSS 页面布局

- CSS layout
  - 基础
    - 盒子模型
      - 标准模型+IE模型
        - box-sizing
          - context-box(标准模型)
          - border-box
      - [外边距重叠](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
        > 
      - BFC
    - 层叠上下文
    - 页面布局
      - 文档流
      - 浮动定位
      - 绝对定位
  - 常见页面布局

## 盒子模型

- 盒子模型
  - 内容 content
  - 内边距 padding
  - 边框 border
  - 外边距 margin

![图 1](./images/27fd32acc73897b01b198415034623a5ead1f27d9f782a07438883a14c4388ee.png)  

IE模型和标准模型唯一的区别是内容计算方式的不同

标准模型元素宽度 `width=content`，高度计算相同

![图 2](images/14da28e41a6fd063c96c39920ae0f9021de8b6f3c54fc65afda18747027b7e07.png)  


IE模型元素宽度 `width=content+padding+border`，高度计算相同

![图 3](images/7179826ce8aa246113edc45a41319c7042ab92094da909fd988bd239d012515c.png)  
