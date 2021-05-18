<template><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token keyword">enum</span> ShapeFlags <span class="token punctuation">{</span>
  <span class="token constant">ELEMENT</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token constant">FUNCTIONAL_COMPONENT</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token constant">STATEFUL_COMPONENT</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token constant">TEXT_CHILDREN</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token constant">ARRAY_CHILDREN</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token constant">SLOTS_CHILDREN</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token constant">TELEPORT</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">6</span><span class="token punctuation">,</span>
  <span class="token constant">SUSPENSE</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">7</span><span class="token punctuation">,</span>
  <span class="token constant">COMPONENT_SHOULD_KEEP_ALIVE</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">8</span><span class="token punctuation">,</span>
  <span class="token constant">COMPONENT_KEPT_ALIVE</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">9</span><span class="token punctuation">,</span>
  <span class="token constant">COMPONENT</span> <span class="token operator">=</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">STATEFUL_COMPONENT</span> <span class="token operator">|</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">FUNCTIONAL_COMPONENT</span>
<span class="token punctuation">}</span>

<span class="token comment">// packages/runtime-core/src/vnode.ts</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">VNodeTypes</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token builtin">string</span>
  <span class="token operator">|</span> VNode
  <span class="token operator">|</span> Component
  <span class="token operator">|</span> <span class="token keyword">typeof</span> Text
  <span class="token operator">|</span> <span class="token keyword">typeof</span> Static
  <span class="token operator">|</span> <span class="token keyword">typeof</span> Comment
  <span class="token operator">|</span> <span class="token keyword">typeof</span> Fragment
  <span class="token operator">|</span> <span class="token keyword">typeof</span> TeleportImpl
  <span class="token operator">|</span> <span class="token keyword">typeof</span> SuspenseImpl



<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">VNode<span class="token operator">&lt;</span>
  HostNode <span class="token operator">=</span> RendererNode<span class="token punctuation">,</span>
  HostElement <span class="token operator">=</span> RendererElement<span class="token punctuation">,</span>
  ExtraProps <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span>
<span class="token operator">></span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@internal</span>
   */</span>
  __v_isVNode<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@internal</span>
   */</span>
  <span class="token punctuation">[</span>ReactiveFlags<span class="token punctuation">.</span><span class="token constant">SKIP</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token keyword">type</span><span class="token operator">:</span> VNodeTypes
  props<span class="token operator">:</span> <span class="token punctuation">(</span>VNodeProps <span class="token operator">&amp;</span> ExtraProps<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  ref<span class="token operator">:</span> VNodeNormalizedRef <span class="token operator">|</span> <span class="token keyword">null</span>
  <span class="token doc-comment comment">/**
   * SFC only. This is assigned on vnode creation using currentScopeId
   * which is set alongside currentRenderingInstance.
   */</span>
  scopeId<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  <span class="token doc-comment comment">/**
   * SFC only. This is assigned to:
   * - Slot fragment vnodes with :slotted SFC styles.
   * - Component vnodes (during patch/hydration) so that its root node can
   *   inherit the component's slotScopeIds
   */</span>
  slotScopeIds<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  children<span class="token operator">:</span> VNodeNormalizedChildren
  component<span class="token operator">:</span> ComponentInternalInstance <span class="token operator">|</span> <span class="token keyword">null</span>
  dirs<span class="token operator">:</span> DirectiveBinding<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  transition<span class="token operator">:</span> TransitionHooks<span class="token operator">&lt;</span>HostElement<span class="token operator">></span> <span class="token operator">|</span> <span class="token keyword">null</span>

  <span class="token comment">// DOM</span>
  el<span class="token operator">:</span> HostNode <span class="token operator">|</span> <span class="token keyword">null</span>
  anchor<span class="token operator">:</span> HostNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token comment">// fragment anchor</span>
  target<span class="token operator">:</span> HostElement <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token comment">// teleport target</span>
  targetAnchor<span class="token operator">:</span> HostNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token comment">// teleport target anchor</span>
  staticCount<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// number of elements contained in a static vnode</span>

  <span class="token comment">// suspense</span>
  suspense<span class="token operator">:</span> SuspenseBoundary <span class="token operator">|</span> <span class="token keyword">null</span>
  ssContent<span class="token operator">:</span> VNode <span class="token operator">|</span> <span class="token keyword">null</span>
  ssFallback<span class="token operator">:</span> VNode <span class="token operator">|</span> <span class="token keyword">null</span>

  <span class="token comment">// optimization only</span>
  shapeFlag<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 标记 children 类型</span>
  patchFlag<span class="token operator">:</span> <span class="token builtin">number</span>
  dynamicProps<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  dynamicChildren<span class="token operator">:</span> VNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span>

  <span class="token comment">// application root node only</span>
  appContext<span class="token operator">:</span> AppContext <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br></div></div></template>