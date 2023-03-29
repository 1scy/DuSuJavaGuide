<template><div><h2 id="java的特点" tabindex="-1"><a class="header-anchor" href="#java的特点" aria-hidden="true">#</a> Java的特点</h2>
<p><strong>Java是一门面向对象的编程语言</strong>。面向对象和面向过程的区别参考下一个问题。</p>
<p><strong>Java具有平台独立性和移植性</strong>。</p>
<ul>
<li>Java有一句口号：<code v-pre>Write once, run anywhere</code>，一次编写、到处运行。这也是Java的魅力所在。而实现这种特性的正是Java虚拟机JVM。已编译的Java程序可以在任何带有JVM的平台上运行。你可以在windows平台编写代码，然后拿到linux上运行。只要你在编写完代码后，将代码编译成.class文件，再把class文件打成Java包，这个jar包就可以在不同的平台上运行了。</li>
</ul>
<p><strong>Java具有稳健性</strong>。</p>
<ul>
<li>Java是一个强类型语言，它允许扩展编译时检查潜在类型不匹配问题的功能。Java要求显式的方法声明，它不支持C风格的隐式声明。这些严格的要求保证编译程序能捕捉调用错误，这就导致更可靠的程序。</li>
<li>异常处理是Java中使得程序更稳健的另一个特征。异常是某种类似于错误的异常条件出现的信号。使用<code v-pre>try/catch/finally</code>语句，程序员可以找到出错的处理代码，这就简化了出错处理和恢复的任务。</li>
</ul>
<h2 id="java是如何实现跨平台的" tabindex="-1"><a class="header-anchor" href="#java是如何实现跨平台的" aria-hidden="true">#</a> Java是如何实现跨平台的？</h2>
<p>Java是通过JVM（Java虚拟机）实现跨平台的。</p>
<p>JVM可以理解成一个软件，不同的平台有不同的版本。我们编写的Java代码，编译后会生成.class 文件（字节码文件）。Java虚拟机就是负责将字节码文件翻译成特定平台下的机器码，通过JVM翻译成机器码之后才能运行。不同平台下编译生成的字节码是一样的，但是由JVM翻译成的机器码却不一样。</p>
<p>只要在不同平台上安装对应的JVM，就可以运行字节码文件，运行我们编写的Java程序。</p>
<p>因此，运行Java程序必须有JVM的支持，因为编译的结果不是机器码，必须要经过JVM的翻译才能执行。</p>
</div></template>


