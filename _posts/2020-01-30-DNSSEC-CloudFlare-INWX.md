---
title: INWX域名如何设置CloudFlare的DNSSEC
date: 2020-01-30 08:00:00 +08:00
layout: post
author: 文刀刘
---

我这个域名是在[INWX](https://www.inwx.com/en "INWX"){:target="_blank"}注册的，因为价格便宜。注册后发现，INWX的域名管理系统相当完善，不仅有强大的DNS管理系统、~~免费的~~SSL、Glue Records、Master/Slave DNS等，同样也支持DNSSEC。但是，当我尝试用CloudFlare提供的DNSSEC参数的时候，却发现INWX必须手动配置DNSSEC才行。

因此，编写了这个简短的教程，希望能够帮助更多的人。

### 用Cloudflare准备DNSSEC

首先第一步是要开启CloudFlare的DNSSEC，它就在DNS选项卡下面一点点的位置。找到DNSSEC之后，单击`Enable DNSSEC`开启DNSSEC。这时你将会看到有关DNSSEC配置的许多参数，Cloudflare要求我们将这些信息添加到域名注册平台中去。由于域名是在INWX注册的，所以接下来去INWX登录吧。

### 在INWX站点上设置DNSSEC

登录INWX后，在侧栏中搜索DNSSEC选项卡，然后在打开的页面上单击`Add DNSSEC`（页面右上角很小的一个按钮），这时会弹出一个窗口。在该弹出窗口中，首先填入你要添加DNSSEC的域名，然后取消选中`automatic modus`的复选框，这时将弹出两个附加字段。不要被名称迷惑了（CloudFlare和INWX的DS Record不是一回事），我们只需要填写第一个字段就可以了。

不过，在INWX家的DNSKEY RR记录，并不能直接复制和粘贴使用Cloudflare管理面板中的参数。我们必须要自己手动建立（这里是唯一的难点）。好在官方提供和的DNSSEC规范很有帮助。

### 如何从Cloudflare的参数中构建DNSKEY RR记录

Cloudflare在DNSSEC面板中提供了很多值，但没有提供易于复制的DNSKEY RR记录。好在自行构建非常容易。打开文本编辑器稍加改造就可以使用了。

1. 首先，从Cloudflare复制DS Record值。
2. 将`IN DS`替换为`IN DNSKEY`。
3. 用`Flags`值（即257）替换指定为`Key Tag`的字符串后的数字（即2345）。
4. 用`3 13`替换最后两个数字，例如`13 2`，因为`3`是DNSKEY记录中的固定值，而`13`是Cloudflare使用的官方算法。
5. 用公共密钥字段的值替换最后一个长字符串。

现在通过改造，我们会得到一个类似于以下内容的记录：

    yourdomain.com. 3600 IN DNSKEY 257 3 13 oJB1W6WNGv+ldv[...]eDQfsS3Ap3o=
	
然后把上面这些文本粘贴到INWX的DNSKEY RR字段中，因此它看起来像这样：

![](https://cctv.cdn.bcebos.com/album/20200130-1.jpg)

单击`SAVE`按钮，就算大功告成了。不过这时候，Cloudflare还无法正确识别已配置的域名，这需要一点时间。我们可以沏一杯茶，边看新型冠状病毒的新闻，边等它生效了。
