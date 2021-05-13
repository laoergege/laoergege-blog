<template><p>object（键值对集合）</p>
<ul>
<li>
<p>属性</p>
<ul>
<li>
<p>属性名限制</p>
<ul>
<li>字符串（其他类型会被自动转成字符串）</li>
<li>symbol</li>
<li>特殊关键字 <code>__proto__</code></li>
</ul>
</li>
<li>
<p>分类</p>
<ul>
<li>自身属性</li>
<li>继承属性</li>
<li><a href="https://zh.javascript.info/symbol#yin-cang-shu-xing" target="_blank" rel="noopener noreferrer">Symbol 属性<OutboundLink/></a>（创建对象的“隐藏”属性、防止对象属性冲突）</li>
<li>可枚举属性</li>
</ul>
</li>
<li>
<p>对象属性存在性检测及遍历</p>
<table>
<thead>
<tr>
<th></th>
<th style="text-align:center">自身属性</th>
<th style="text-align:center">继承属性</th>
<th style="text-align:center">枚举属性</th>
<th style="text-align:center">不可枚举属性</th>
<th style="text-align:center">Symbol 属性</th>
</tr>
</thead>
<tbody>
<tr>
<td>in</td>
<td style="text-align:center">✓</td>
<td style="text-align:center">✓</td>
<td style="text-align:center">✓</td>
<td style="text-align:center">✓</td>
<td style="text-align:center">✓</td>
</tr>
<tr>
<td>hasOwnProperty</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
<td style="text-align:center">✓</td>
<td style="text-align:center">✓</td>
<td style="text-align:center">✓</td>
</tr>
<tr>
<td>for...in</td>
<td style="text-align:center">✓</td>
<td style="text-align:center">✓</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>Object.keys</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>Object.values</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>Object.entries</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>Object.getOwnPropertyNames</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
<td style="text-align:center">✓</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>Object.getOwnPropertySymbol</td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
<td style="text-align:center">✓</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><code>Object.defineProperty</code></p>
</li>
<li>
<p>属性排序</p>
<ul>
<li>数字：当属性的类型时数字类型时，会按照数字的从大到小的顺序进行排序；</li>
<li>字符串：当属性的类型是字符串时，会按照时间的先后顺序进行排序；</li>
<li>Symbol：当属性的类型是Symbol时，会按照时间的先后顺序进行排序。</li>
</ul>
</li>
<li>
<p>计算属性</p>
</li>
<li>
<p>属性名简写</p>
</li>
<li>
<p>扩展运算符</p>
</li>
</ul>
</li>
<li>
<p>对象拷贝</p>
<ul>
<li>浅拷贝
<ul>
<li><code>Object.assign()</code></li>
</ul>
</li>
<li>深拷贝</li>
</ul>
</li>
</ul>
</template>