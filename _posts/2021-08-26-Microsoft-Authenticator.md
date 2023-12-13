---
title: Microsoft Authenticator
date: 2021-08-26 15:01:00 +08:00
layout: post
author: 熊的猫
---

因为手机用的是iOS系统，电脑又是Windows系统，这之间就涉及到一个常用且实用的问题——密码同步。

早期的时候我用`LastPass`的作为移动端与PC端的密码同步工具，后来`LastPass`在国内被告了商标侵权而下架，那时候我刚好换手机，于是乎`LastPass`就和我Say Goodbye了。

后来又遇到了开源的`Bitwarden`，可以无缝导入`LastPass`的数据，就这样我用了`Bitwarden的`一直到现在。但是每次Windows和iOS之前靠这样一个桥梁来回同步，还是有些让人不爽，可不可以再精简一下呢，就是Windows直接和iOS密码同步呢？答案是有的，就是微软自家出的'Microsoft Authenticator'。

`Microsoft Authenticator`之前仅仅是一个好用的二次验证工具，每次在登录微软账号的时候，只需要在手机上点一下（不用扫一下），不用输入密码就能完成登录了。但是，对我来说，`Microsoft Authenticator`太鸡肋了。所以没太关注。

不过去年开始，`Microsoft Authenticator`可以在APP的设置中打开密码管理器功能，然后，`Microsoft Authenticator`就会帮你同步保存自 Edge 浏览器中的密码（需要登录同一个微软账号）。之后就像其它密码管理器一样，需要在手机系统中选择'Microsoft Authenticator'作为默认的密码管理器，这样就能实现密码的同步自动填入了。

`Microsoft Authenticator`不仅有iOS版APP，也有安卓版的，但是据说必须要有谷歌框架才能正常工作。额。。。看来事情总是不会太完美。另外，在使用过程中也发现`Microsoft Authenticator`存在的一些问题，比如：不支持在手机上添加新密码；第一次同步密码的速度简直让人抓狂……