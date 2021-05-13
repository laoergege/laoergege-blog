<template><h1 id="javascript-内存管理机制"><a class="header-anchor" href="#javascript-内存管理机制">#</a> JavaScript 内存管理机制</h1>
<h2 id="自动内存管理"><a class="header-anchor" href="#自动内存管理">#</a> 自动内存管理</h2>
<p>类似与 C 这种编程语言，提供了从底层来管理内存的方法，比如 <code>malloc()</code> 和 <code>free()</code>。开发人员可以通过它们来申请分配内存或者释放内存到操作系统中，这类语言就需要<strong>手动管理内存</strong>。</p>
<p>但在 JavaScript 当中，当对象或字符串等被创建时，JavaScript会申请和分配内存；当对象或字符不再被使用时，它们就会被自动释放，这个过程被称为<strong>垃圾处理</strong>。正是这种自动看似<strong>自动管理内存</strong>的认识让 JavaScript 开发者误以为他们不用关心内存管理，这是一个很大的错误。</p>
<p>但是如果你想成为行业专家，并打造高性能前端应用，那么你就必须要搞清楚 JavaScript 的内存机制了。</p>
<h2 id="内存生命周期"><a class="header-anchor" href="#内存生命周期">#</a> 内存生命周期</h2>
<p>无论我们运行任何语言写的程序都会经历以下内存生命周期</p>
<p><img src="@source/images/1_slxXgq_TO38TgtoKpWa_jQ.png" alt="memory life"></p>
<ol>
<li>分配内存：向操作系统申请分配内存。某些底层语言（如 C）需要显示申请操作，在高级语言当中，就不需要这样的操作</li>
<li>使用内存：在代码中使用分配变量的进行读取和写入操作</li>
<li>释放内存：当你不需要使用的时候，应该释放内存使之空闲可用。某些底层语言提供此操作。</li>
</ol>
<h2 id="堆栈内存"><a class="header-anchor" href="#堆栈内存">#</a> 堆栈内存</h2>
<p>程序访问内存会存储：</p>
<ul>
<li>程序的代码，包括操作系统的代码</li>
<li>所有程序使用的所有变量和其他数据</li>
</ul>
<p><img src="@source/images/memory.png" alt="JavaScript 内存模型"></p>
<p>栈空间就是我们之前反复提及的调用栈</p>
<h2 id="垃圾回收"><a class="header-anchor" href="#垃圾回收">#</a> 垃圾回收</h2>
<h2 id="优化策略"><a class="header-anchor" href="#优化策略">#</a> 优化策略</h2>
</template>