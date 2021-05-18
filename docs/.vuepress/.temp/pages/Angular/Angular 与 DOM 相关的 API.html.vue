<template><p>新版本 Angular 需要在不同平台上运行，如 Browser 平台，Mobile 平台或者 Web Worker 平台，所以，就需要在特定平台的 API 和框架接口之间进行一层抽象（abstraction）。Angular 中的这层抽象就包括这些引用类型：
<code>ElementRef、TemplateRef、ViewRef、ComponentRef 和 ViewContainerRef。</code>
还有一些列与之相关的装饰器：</p>
<ul>
<li>@ViewChild &amp;&amp; @ViewChildren</li>
<li>@ContentChild &amp;&amp; @ContentChildren</li>
</ul>
<h2 id="viewchild"><a class="header-anchor" href="#viewchild">#</a> @ViewChild</h2>
<p>在探索 DOM 抽象类前，先了解下如何在组件/指令中获取这些抽象类。Angular 提供了一种叫做 DOM Query 的技术，主要来源于 @ViewChild 和 @ViewChildren 装饰器（decorators）。两者基本功能相同，唯一区别是 @ViewChild 返回单个引用，@ViewChildren 返回由 QueryList 对象包装好的多个引用。</p>
<p>通常这两个装饰器与模板引用变量（template reference variable）一起使用，模板引用变量仅仅是对模板（template）内 DOM 元素命名式引用（a named reference），类似于 html 元素的 id 属性。你可以使用模板引用（template reference）来标记一个 DOM 元素，并在组件/指令类中使用 ViewChild 装饰器查询（query）它，比如：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    selector<span class="token operator">:</span> <span class="token string">'sample'</span><span class="token punctuation">,</span>
    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        &lt;span #tref>I am span&lt;/span>
    </span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">SampleComponent</span> <span class="token keyword">implements</span> <span class="token class-name">AfterViewInit</span> <span class="token punctuation">{</span>
    @<span class="token function">ViewChild</span><span class="token punctuation">(</span><span class="token string">"tref"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>read<span class="token operator">:</span> ElementRef<span class="token punctuation">}</span><span class="token punctuation">)</span> tref<span class="token operator">:</span> ElementRef<span class="token punctuation">;</span>

    <span class="token function">ngAfterViewInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token comment">// outputs `I am span`</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tref<span class="token punctuation">.</span>nativeElement<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>ViewChild 装饰器基本语法是：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@ViewChild([reference from template], {read: [reference type]});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>上例中你可以看到，我把 tref 作为模板引用名称，并将 ElementRef 与该元素联系起来。第二个参数 read 是可选的，因为 Angular 会根据 DOM 元素的类型推断出该引用类型。例如，如果它（#tref）挂载的是类似 span 的简单 html 元素，Angular 返回 ElementRef；如果它挂载的是 template 元素，Angular 返回 TemplateRef。一些引用类型如 ViewContainerRef 就不可以被 Angular 推断出来，所以必须在 read 参数中显式申明。其他的如 ViewRef 不可以挂载在 DOM 元素中，所以必须手动在构造函数中编码构造出来。</p>
<p>上述情况是以以模板变量名作为选择器参数，当想获取目标为指令时，也可以直接使用指令类型作为参数：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>@<span class="token function">Directive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>selector<span class="token operator">:</span> <span class="token string">'pane'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Pane</span> <span class="token punctuation">{</span>
  @<span class="token function">Input</span><span class="token punctuation">(</span><span class="token punctuation">)</span> id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  selector<span class="token operator">:</span> <span class="token string">'example-app'</span><span class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;pane id="1" *ngIf="shouldShow">&lt;/pane>
    &lt;pane id="2" *ngIf="!shouldShow">&lt;/pane>
    
    &lt;button (click)="toggle()">Toggle&lt;/button>
       
    &lt;div>Selected: {{selectedPane}}&lt;/div> 
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ViewChildComp</span> <span class="token punctuation">{</span>
  @<span class="token function">ViewChild</span><span class="token punctuation">(</span>Pane<span class="token punctuation">)</span>
  <span class="token keyword">set</span> <span class="token function">pane</span><span class="token punctuation">(</span>v<span class="token operator">:</span> Pane<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>selectedPane <span class="token operator">=</span> v<span class="token punctuation">.</span>id<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  selectedPane<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
  shouldShow <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>shouldShow <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>shouldShow<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><blockquote>
<p>注意： 只能在 <code>ngAfterViewInit </code> 生命周期访问 <code>viewchild</code> 设置的属性</p>
</blockquote>
<h2 id="elementref"><a class="header-anchor" href="#elementref">#</a> ElementRef</h2>
<p>这是最基本的抽象类，如果你查看它的类结构，就发现它只包含所挂载的元素对象，这对访问原生 DOM 元素很有用，比如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// outputs `I am span`</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tref<span class="token punctuation">.</span>nativeElement<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然而，Angular 团队不鼓励这种写法，不但因为这种方式会暴露安全风险，而且还会让你的程序与渲染层（rendering layers）紧耦合，这样就很难在多平台运行你的程序。我认为这个问题并不是使用 nativeElement 而是使用特定的 DOM API 造成的，如 textContent。但是后文你会看到，Angular 实现了操作 DOM 的整体思路模型，这样就不再需要低阶 API，如 textContent。
使用 ViewChild装饰的 DOM 元素会返回 ElementRef，但是由于所有组件挂载于自定义 DOM 元素，所有指令作用于 DOM 元素，所以组件和指令都可以通过 DI（Dependency Injection）获取宿主元素的ElementRef 对象。比如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@Component({
    selector: 'sample',
    ...
export class SampleComponent{
	  constructor(private hostElement: ElementRef) {
          //outputs &lt;sample&gt;...&lt;/sample&gt;
   		  console.log(this.hostElement.nativeElement.outerHTML);
	  }
	...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>所有组件通过 DI（Dependency Injection）可以访问到它的宿主元素，但 ViewChild 装饰器经常被用来获取模板视图中的 DOM 元素。然而指令却相反，因为指令没有视图模板，所以主要用来获取指令挂载的宿主元素</strong>。</p>
<h2 id="templateref"><a class="header-anchor" href="#templateref">#</a> TemplateRef</h2>
<p>Angular 实现了 TemplateRef 抽象类来和 template 标签一起合作，看看它是如何使用的（ng-template 是 Angular 提供的类似于 template 原生 html 标签）：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    selector<span class="token operator">:</span> <span class="token string">'sample'</span><span class="token punctuation">,</span>
    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        &lt;ng-template #tpl>
            &lt;span>I am span in template&lt;/span>
        &lt;/ng-template>
    </span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">SampleComponent</span> <span class="token keyword">implements</span> <span class="token class-name">AfterViewInit</span> <span class="token punctuation">{</span>
    @<span class="token function">ViewChild</span><span class="token punctuation">(</span><span class="token string">"tpl"</span><span class="token punctuation">)</span> tpl<span class="token operator">:</span> TemplateRef<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">;</span>

    <span class="token function">ngAfterViewInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> elementRef <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tpl<span class="token punctuation">.</span>elementRef<span class="token punctuation">;</span>
        <span class="token comment">// outputs `template bindings={}`</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>elementRef<span class="token punctuation">.</span>nativeElement<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>TemplateRef 是一个结构简单的抽象类，它的 elementRef 属性是对其宿主元素的引用，还有一个 createEmbeddedView 方法。然而 createEmbeddedView 方法很有用，因为它可以创建一个视图（view）并返回该视图的引用对象 ViewRef。</p>
<h2 id="viewref"><a class="header-anchor" href="#viewref">#</a> ViewRef</h2>
<p>该抽象表示一个 Angular 视图（View），在 Angular 世界里，视图（View）是一堆元素的组合，一起被创建和销毁，是构建程序 UI 的基石。Angular 鼓励开发者把 UI 作为一堆视图（View）的组合，而不仅仅是 html 标签组成的树。
Angular 支持两种类型视图：</p>
<ul>
<li>嵌入视图（Embedded View），由 Template 提供</li>
<li>宿主视图（Host View），由 Component 提供</li>
</ul>
<h3 id="创建嵌入视图"><a class="header-anchor" href="#创建嵌入视图">#</a> 创建嵌入视图</h3>
<p>模板仅仅是视图的蓝图，可以通过之前提到的 createEmbeddedView 方法创建视图，比如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ngAfterViewInit() {
    let view = this.tpl.createEmbeddedView(null);
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="创建宿主视图"><a class="header-anchor" href="#创建宿主视图">#</a> 创建宿主视图</h3>
<p>宿主视图是在组件动态实例化时创建的，一个动态组件（dynamic component）可以通过 ComponentFactoryResolver 创建：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> injector<span class="token operator">:</span> Injector<span class="token punctuation">,</span>
            <span class="token keyword">private</span> r<span class="token operator">:</span> ComponentFactoryResolver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//通过组件总工厂获取该组件工厂</span>
    <span class="token keyword">let</span> factory <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>r<span class="token punctuation">.</span><span class="token function">resolveComponentFactory</span><span class="token punctuation">(</span>ColorComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//通过组件工厂创建该组件实例</span>
    <span class="token keyword">let</span> componentRef <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>injector<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> view <span class="token operator">=</span> componentRef<span class="token punctuation">.</span>hostView<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>在 Angular 中，每一个组件绑定着一个注入器（Injector）实例，所以创建 ColorComponent 组件时传入当前组件（即 SampleComponent）的注入器。另外，别忘了，动态创建组件时需要在模块（module）或宿主组件的 EntryComponents 属性添加被创建的组件。现在，我们已经看到嵌入视图和宿主视图是如何被创建的，一旦视图被创建，它就可以使用 ViewContainer 插入 DOM 树中。</p>
<h2 id="viewcontainerref"><a class="header-anchor" href="#viewcontainerref">#</a> ViewContainerRef</h2>
<p>视图容器就是挂载一个或多个视图的容器。
首先需要说的是，任何 DOM 元素都可以作为视图容器，然而有趣的是，对于绑定 ViewContainer 的 DOM 元素，Angular 不会把视图插入该元素的内部，而是追加到该元素后面，这类似于 router-outlet 插入组件的方式。
通常，比较好的方式是把 ViewContainer 绑定在 ng-container 元素上，因为 ng-container 元素会被渲染为注释，从而不会在 DOM 中引入多余的 html 元素。下面示例描述在组建模板中如何创建 ViewContainer：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    selector<span class="token operator">:</span> <span class="token string">'sample'</span><span class="token punctuation">,</span>
    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        &lt;span>I am first span&lt;/span>
        &lt;ng-container #vc>&lt;/ng-container>
        &lt;span>I am last span&lt;/span>
    </span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">SampleComponent</span> <span class="token keyword">implements</span> <span class="token class-name">AfterViewInit</span> <span class="token punctuation">{</span>
    @<span class="token function">ViewChild</span><span class="token punctuation">(</span><span class="token string">"vc"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>read<span class="token operator">:</span> ViewContainerRef<span class="token punctuation">}</span><span class="token punctuation">)</span> vc<span class="token operator">:</span> ViewContainerRef<span class="token punctuation">;</span>

    <span class="token function">ngAfterViewInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token comment">// outputs `template bindings={}`</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vc<span class="token punctuation">.</span>element<span class="token punctuation">.</span>nativeElement<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>如同其他抽象类一样，ViewContainer 通过 element 属性绑定 DOM 元素，比如上例中，绑定的是 会被渲染为注释的 ng-container 元素，所以输出也将是 template bindings={}。</p>
<h3 id="操作视图"><a class="header-anchor" href="#操作视图">#</a> 操作视图</h3>
<p>ViewContainer 提供了一些操作视图 API：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>class ViewContainerRef {
    ...
    clear() : void
    insert(viewRef: ViewRef, index?: number) : ViewRef
    get(index: number) : ViewRef
    indexOf(viewRef: ViewRef) : number
    detach(index?: number) : ViewRef
    move(viewRef: ViewRef, currentIndex: number) : ViewRef
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>从上文我们已经知道如何通过模板和组件创建两种类型视图，即嵌入视图和组件视图。一旦有了视图，就可以通过 insert 方法插入 DOM 中。下面示例描述如何通过模板创建嵌入视图，并在 ng-container 标记的地方插入该视图（译者注：从上文中知道是追加到ng-container后面，而不是插入到该 DOM 元素内部）。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    selector<span class="token operator">:</span> <span class="token string">'sample'</span><span class="token punctuation">,</span>
    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        &lt;span>I am first span&lt;/span>
        &lt;ng-container #vc>&lt;/ng-container>
        &lt;span>I am last span&lt;/span>
        &lt;ng-template #tpl>
            &lt;span>I am span in template&lt;/span>
        &lt;/ng-template>
    </span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">SampleComponent</span> <span class="token keyword">implements</span> <span class="token class-name">AfterViewInit</span> <span class="token punctuation">{</span>
    @<span class="token function">ViewChild</span><span class="token punctuation">(</span><span class="token string">"vc"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>read<span class="token operator">:</span> ViewContainerRef<span class="token punctuation">}</span><span class="token punctuation">)</span> vc<span class="token operator">:</span> ViewContainerRef<span class="token punctuation">;</span>
    @<span class="token function">ViewChild</span><span class="token punctuation">(</span><span class="token string">"tpl"</span><span class="token punctuation">)</span> tpl<span class="token operator">:</span> TemplateRef<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">;</span>

    <span class="token function">ngAfterViewInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> view <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tpl<span class="token punctuation">.</span><span class="token function">createEmbeddedView</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vc<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>view<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>通过上面的实现，最后的 html 看起来是：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sample</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>I am first span<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--template bindings={}--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>I am span in template<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>I am last span<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--template bindings={}--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sample</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>可以通过 detach 方法从视图中移除 DOM，其他的方法可以通过方法名知道其含义，如通过索引获取视图引用对象，移动视图位置，或者从视图容器中移除所有视图。
创建视图
ViewContainer 也提供了手动创建视图 API ：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">ViewContainerRef</span> <span class="token punctuation">{</span>
    element<span class="token operator">:</span> ElementRef
    length<span class="token operator">:</span> <span class="token builtin">number</span>

    <span class="token function">createComponent</span><span class="token punctuation">(</span>componentFactory<span class="token operator">...</span><span class="token punctuation">)</span><span class="token operator">:</span> ComponentRef<span class="token operator">&lt;</span><span class="token constant">C</span><span class="token operator">></span>
    <span class="token function">createEmbeddedView</span><span class="token punctuation">(</span>templateRef<span class="token operator">...</span><span class="token punctuation">)</span><span class="token operator">:</span> EmbeddedViewRef<span class="token operator">&lt;</span><span class="token constant">C</span><span class="token operator">></span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>上面两个方法是个很好的封装，可以传入模板引用对象或组件工厂对象来创建视图，并将该视图插入视图容器中特定位置。</p>
<h2 id="ngtemplateoutlet-和-ngcomponentoutlet"><a class="header-anchor" href="#ngtemplateoutlet-和-ngcomponentoutlet">#</a> ngTemplateOutlet 和 ngComponentOutlet</h2>
<p>尽管知道 Angular 操作 DOM 的内部机制是好事，但是要是有某种快捷方式就更好了啊。没错，Angular 提供了两种快捷指令：ngTemplateOutlet 和 ngComponentOutlet。（本文时）</p>
<h3 id="ngtemplateoutlet"><a class="header-anchor" href="#ngtemplateoutlet">#</a> ngTemplateOutlet</h3>
<p>该指令会把 DOM 元素标记为 ViewContainer，并插入由模板创建的嵌入视图，从而不需要在组件类中显式创建该嵌入视图。这样，上面实例中，针对创建嵌入视图并插入 #vc DOM 元素的代码就可以重写：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    selector<span class="token operator">:</span> <span class="token string">'sample'</span><span class="token punctuation">,</span>
    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        &lt;span>I am first span&lt;/span>
        &lt;ng-container [ngTemplateOutlet]="tpl">&lt;/ng-container>
        &lt;span>I am last span&lt;/span>
        &lt;ng-template #tpl>
            &lt;span>I am span in template&lt;/span>
        &lt;/ng-template>
    </span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">SampleComponent</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>从上面示例看到我们不需要在组件类中写任何实例化视图的代码。非常方便，对不对。
ngComponentOutlet
这个指令与 ngTemplateOutlet 很相似，区别是 ngComponentOutlet 创建的是由组件实例化生成的宿主视图，不是嵌入视图。你可以这么使用：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;ng-container *ngComponentOutlet=&quot;ColorComponent&quot;&gt;&lt;/ng-container&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>看似有很多新知识需要消化啊，但实际上 Angular 通过视图操作 DOM 的思路模型是很清晰和连贯的。你可以使用 ViewChild 查询模板引用变量来获得 Angular DOM 抽象类。DOM 元素的最简单封装是 ElementRef；而对于模板，你可以使用 TemplateRef 来创建嵌入视图；而对于组件，可以使用 ComponentRef 来创建宿主视图，同时又可以使用 ComponentFactoryResolver 创建 ComponentRef。这两个创建的视图（即嵌入视图和宿主视图）又会被 ViewContainerRef 管理。最后，Angular 又提供了两个快捷指令自动化这个过程：ngTemplateOutlet 指令使用模板创建嵌入视图；ngComponentOutlet 使用动态组件创建宿主视图。</p>
<h2 id="参考"><a class="header-anchor" href="#参考">#</a> 参考</h2>
<ul>
<li><a href="https://juejin.im/post/5ab09a49518825557005d805" target="_blank" rel="noopener noreferrer">[译] 探索 Angular 使用 ViewContainerRef 操作 DOM<OutboundLink/></a></li>
</ul>
</template>