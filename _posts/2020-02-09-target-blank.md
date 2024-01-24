---
title: 如何让Markdown在新窗口打开超链接
date: 2020-02-09 08:00:00 +08:00
layout: post
author: 刘看山
---

markdown链接语法`[title](url)`，编译为html，形如`<a href="url"></a>`。但很多时候，我们需要在a标签上添加`target="_blank"`，以便于实现在新窗口打开超链接。这该怎么办呢？在网上，我找了好多方法，咱们一一验证。

### 实验一：直接在url后添加?_blank

有网友给的建议是直接在url后添加`?_blank`。经过实验，除了原来的url地址后面会增加一个`?_blank`这样的识别后缀，起不到在新窗口打开超链接的目的。所以失败！

### 实验二：直接在url后添加" target="_blank

由于Markdown连接语法编译为html会是`<a href="url"></a>`这样的，那么在url地址后增加`" target="_blank`，使其在编译之后看起来像`<a href="url" target="_blank"></a>`这样会不会有效果呢？经过测试，在bitcron平台上通过，可以用。但是在Jekyll、inkPaper等平台编译后会超链到`url" target="_blank`这样一个奇怪的地址。所以，慎用。

### 实验三：用js控制，所有超链接都在新窗口中打开

一不做二不休，把下面的js代码加入平台，所有的超链接都将会被赋予`target="_blank"`权限。你点击每一个超链接都会在新窗口中打开，一劳永逸!

    <script type="text/javascript">
    	$(document).ready(function() {
    	    //为超链接加上target='_blank'属性
    		$('a[href^="http"]').each(function() {
    			$(this).attr('target', '_blank');
    		});
    	});
    </script>

### 实验四：使用{:target="_blank"}

但我只想让指定的超链接在新窗口打开，又该怎么办呢？继续搜索！

在GitHub中偶然发现，我们可以改超链的格式为`[title](url){:target="_blank"}`，经过编译成功达到效果。

此方法也可能在部分平台不好用，但目前尚未发现。此外，在标题中该语句并不好用，这是因为target一句在编译时并未放在a标签内，而被放在文字格式标签下了。