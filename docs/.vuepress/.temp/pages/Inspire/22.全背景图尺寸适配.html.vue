<template><p>图片全背景适配：</p>
<ol>
<li>
<p>图片自适应 width 100%；height auto</p>
</li>
<li>
<p>背景图尺寸动态适配，比如 375/667 0.56 ，小于 0.56 的该用更大尺寸的</p>
<p><code>let isLongScreen = window.innerWidth / window.innerHeight &lt; 0.56;</code></p>
</li>
<li>
<p>背景图主要内容竟然往中上位置靠拢，底部做长填充图（静态）</p>
</li>
</ol>
</template>