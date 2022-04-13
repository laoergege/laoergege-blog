---
release: true
tags:
 - css
 - 布局
desc: css 布局相关的知识体系
---

# CSS 布局

- CSS 布局
  - 盒子模型：页面是由一个个相互作用、嵌套的盒子组成
    - 怪异盒模型和标准盒模型
      - 盒子模型：content + padding + border + margin
      - IE模型元素宽度 width=content+padding
        - `box-sizing: content-box`
      - 标准模型元素宽度 width=content
        - `box-sizing: border-box`
  - display：控制盒子内容布局，以及外部与其它元素的关系和相互作用
    - IFC：inline
    - BFC：block
    - flex
      - [解决用flex布局时内容可能溢出的问题](https://stackoverflow.com/questions/43809612/prevent-a-child-element-from-overflowing-its-parent-in-flexbox)
        - 本质：flex item 元素初始值 `min-width: auto`
        - 解决：`min-width: 0` 、`overflow: hidden`
    - grid
      - [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
      - [网格布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)
  - position：控制盒子位置，脱离父盒的布局
    - static
    - relative
    - absolute
    - fixed
    - sticky
    - float
  - 常见页面布局
    - 等列布局
    - 垂直水平居中
      - flex + justify-content: center + align-items: center
      - position: absolute + left: 50% + top: 50% + transform: translate(-50%, -50%)
    - 左侧固定 + 右侧自适应布局
    - 圣杯布局（三分栏布局）
    - 多列布局

## grid 属性

- container 布局网格线、行列、区
  - grid-template-[columns|rows]
    - fr 弹性单位
      - [An Introduction to the `fr` CSS unit](https://css-tricks.com/introduction-fr-css-unit/)
    - 关键词
      - min-content
      - max-content
      - auto
      - fit-content
    - 函数
      - repeat()
      - minmax()
  - grid-template
    - none
    - `<grid-template-rows>  / <grid-template-columns>`
  - grid-auto-[columns|rows] 自动扩充
  - grid-auto-flow 项目排序
    - row 从左往右填充个行，换行
    - column 从上到下填充列，换列
    - [column|row] | dense 如果后面出现了稍小的元素，则会试图去填充网格中前面留下的空白
  - grid-template-areas
    - `<grid-area-name>` – 指定的网格区域的名称 grid-area
    - . – 句点表示一个空的网格单元
    - none – 没有定义网格区域
    - 区域的起始行行和起始列行的名称将是 xxx-start，其最后一行行和最后一列行的名称将是 xxx-end
  - column-gap
  - row-gap
  - `gap: <grid-row-gap> <grid-column-gap>;`
  - flex
    - justify-items
    - align-items
    - `place-items: <align-items> / <justify-items> | value`
    - justify-content
    - align-content
    - `place-content: <align-content> / <justify-content> `
- item（根据网格线、行列、区去定位）
  - grid-[column|row]-[start|end]
    - number 网线编号
      - -1 表示倒数编号 1 开始
    - span [number|name] 横跨多少行/列 
    - name 网格线名
      - name count 重名时 count 表示第几个
  - `grid-[column|row] : <start> / <end> | number`
  - `grid-area: <row-start> /  <column-start> /  <row-end> / <column-end> | name`
  - `grid-areas: <row-start> /  <column-start> /  <row-end> / <column-end>`
  - flex
    - order
    - align-self
    - justify-self
    - place-self



