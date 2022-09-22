- CSS Reset
  - Normalize.css，Reset.css 
- CSS Module
- CSS in JS
- Atomic CSS
  - TailwindCSS
  - UnoCSS

## Atomic CSS

[【第2631期】浅谈 Atomic CSS 的发展背景与 Tailwind CSS](https://mp.weixin.qq.com/s/MlkV33ZxMYPoCFXonxgjoA)

- 好处
  - 降低 CSS 文件大小：CSS 大小是线性成长的，重复的规则都会用到同一个 class name
  - 最大程度缩减 scope，让维护变得容易：class name 变得与 context 无关，scope 也变小，因此更好维护也更好改动、而且可以搬来搬去复用还能保证相同样式
  - 规范的 CSS 命名
- 疑问
  - 语义化
    - 借助 HTML 语义标签 和 content
    - 对开发者而言，我们会用 class name，只是因为要跟 JS 或是 CSS 结合在一起
  - 跟 inline style 有什么不同？
    - inline style 的几个坏处：
    - CSS 的优先顺序很高，很难盖过去
    - 很冗长
    - 不支援 pseudo-class 或是 pseudo-element
  - 你说可以降低 CSS 大小，但 HTML 大小不是也会上升吗？那只是把成本转到别的地方而已
    - ACSS 复用高，gzip 的文本压缩率会比较高
- 对比 CSS-in-JS 跟 CSS modules 这两个方案，一样都解决了 scope 的问题，但跟 Atomic CSS 比起来有两样是做不到的。
- 缺点
  - class name 很长，直接看 HTML 的话不好阅读
  - 需要花一段时间上手 Atomic CSS 的语法以及熟悉各种缩写
  - 如果没办法做到 component 化，那就不适合使用 Atomic CSS
- 场景
  - 维护大型项目的时空背景之下诞生
    - CSS 浓郁、复杂度


CSS 项目实践
      - variable 主题控制
      - css utils：原子化 CSS + 工具语法扩展
      - css component：BEM + utils


- Tailwind CSS
  - 动态 class name

```css
// 这样写抓不到
<div class="text-{{ error ? 'red' : 'green' }}-600"></div>

// 这样写才抓得到
<div class="{{ error ? 'text-red-600' : 'text-green-600' }}"></div>
```

软件开发
服用
功能内聚、原子性

- UI 的定制化
  - 编译
  - 运行时
    - 覆盖


- UnoCSS