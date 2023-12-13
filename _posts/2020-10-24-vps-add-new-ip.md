---
title: CentOS系统的VPS绑定添加IP地址
date: 2020-10-24 12:51:00 +08:00
layout: post
author: 熊的猫
---

今天是10月24日——1024程序员节，所以来说一说代码的事情。

最近没事儿开始各种折腾VPS，对于我这样的小白选手，Linux的命令符显得十分不友好。不过偶然间发现很多VPS供应商可以有偿增加IP地址，价格也还可以，所以又开始蠢蠢欲动了。买了双IP，VPS却只能用1个IP，这就让人很郁闷了。通过谷歌，特别找到一篇十分友好的如何在VPS上增加第二个IP的教程，特此发文收藏。

由于不同的Linux系统该文件位置可能不同，因此本文的教程是以我接触最多（教程最多）的`CentOS`系统为例，别的系统请大家自行修正。

首先自然是通过SSH（我推荐用`putty`这个软件，小巧免费无广告）用`root`账户登录VPS了。

在`/etc/sysconfig/network-scripts/`中新建文件`ifcfg-eth0:`，为数字序号，多个IP则依次增大。以1为例，建立文件`fcfg-eth0:1`。

    cd /etc/sysconfig/network-scripts/
    vi ifcfg-eth0:1

输入内容格式：

    DEVICE=eth0:1
    TYPE=Ethernet
    ONBOOT=yes
    BOOTPROTO=static
    IPADDR=要添加绑定的IP地址
    NETMASK=子网掩码
    GATEWAY=网关地址

然后按ESC键输入`:wq`保存退出

运行`service network restart`重启网络服务。

为了验证我们添加的第二个IP是否真的成功添加了，用root特权在SSH端运行这个命令`ip addr`，示例输出：

    link/ether 08:00:27:3f:ab:68 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.1/24 brd 192.168.1.255 scope global enp0s3
    valid_lft forever preferred_lft forever
    inet 192.168.1.2/24 brd 192.168.1.255 scope global secondary enp0s3
    valid_lft forever preferred_lft forever
    inet6 fe80::a00:27ff:fe3f:ab68/64 scope link
    valid_lft forever preferred_lft forever

如你所见，现在这个VPS上已经有2个IP地址了（我是用`192.168.1.1`和`192.168.1.2`做示范，真正的IP地址是你所拥有的）。

在接下来，我们用自己的电脑或者网络上的工具ping一下新增加的IP。不出意外的话，是可以被ping通的。

当然，如果实在不会，或者VPS供应商的设定实在是奇葩（比如我用到的Cloudcone），我们可以联系主机商，让技术人员帮忙添加，一般他们都会帮忙的。