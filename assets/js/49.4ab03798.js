(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{527:function(s,a,t){"use strict";t.r(a);var e=t(20),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"shell脚本加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell脚本加密"}},[s._v("#")]),s._v(" Shell脚本加密")]),s._v(" "),t("p",[s._v("[toc]")]),s._v(" "),t("blockquote",[t("p",[s._v("https://sunplayer.cn/?post=6")])]),s._v(" "),t("h2",{attrs:{id:"shc-加密等级高"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shc-加密等级高"}},[s._v("#")]),s._v(" SHC - 加密等级高")]),s._v(" "),t("blockquote",[t("p",[s._v("注意：")]),s._v(" "),t("ul",[t("li",[s._v("CentOS7与CentOS8生成的脚本不通用，在哪个版本生成，在哪个版本使用")])])]),s._v(" "),t("h3",{attrs:{id:"通过yum安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过yum安装"}},[s._v("#")]),s._v(" 通过yum安装")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("安装shc工具")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y shc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"通过下载源码安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过下载源码安装"}},[s._v("#")]),s._v(" 通过下载源码安装")]),s._v(" "),t("h4",{attrs:{id:"_1-安装gcc及make-已安装的可略过-命令如下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装gcc及make-已安装的可略过-命令如下"}},[s._v("#")]),s._v(" 1 安装gcc及make，已安装的可略过,命令如下")]),s._v(" "),t("p",[s._v("yum -y install gcc make")]),s._v(" "),t("h4",{attrs:{id:"_2-下载并编译安装shc-4-0-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载并编译安装shc-4-0-3"}},[s._v("#")]),s._v(" 2 下载并编译安装shc-4.0.3")]),s._v(" "),t("p",[s._v("因为是在GitHub上下载，所以你懂得，需要你用科学方法下来后，再传到需要安装的主机上，已附下载地址。\nshc-4.0.3下载地址：https://github.com/neurobin/shc/archive/refs/tags/4.0.3.tar.gz")]),s._v(" "),t("h4",{attrs:{id:"_3-进入shc压缩包所在目录-并解压包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-进入shc压缩包所在目录-并解压包"}},[s._v("#")]),s._v(" 3 进入shc压缩包所在目录，并解压包")]),s._v(" "),t("p",[s._v("tar -xzvf shc-4.0.3.tar.gz")]),s._v(" "),t("h4",{attrs:{id:"_4-进入已解压目录并进行编译安装-编译安装全默认即可-并不需要创建任何目录-命令如下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-进入已解压目录并进行编译安装-编译安装全默认即可-并不需要创建任何目录-命令如下"}},[s._v("#")]),s._v(" 4 进入已解压目录并进行编译安装，编译安装全默认即可，并不需要创建任何目录,命令如下")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cd shc-4.0.3\n./configure && make install\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"_5-安装完成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-安装完成"}},[s._v("#")]),s._v(" 5 安装完成")]),s._v(" "),t("h3",{attrs:{id:"使用脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用脚本"}},[s._v("#")]),s._v(" 使用脚本")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("创建一个shell脚本")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@jast ~]# vim test-shc.sh\n\n#!/bin/sh\necho `date`\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("生成加密脚本")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@10 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# shc -v -f test-shc.sh ")]),s._v("\nshc "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("shll")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sh\nshc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-c\nshc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exec "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%s'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v('"')]),s._v("\nshc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-l"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\nshc "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("opts")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\nshc: cc   test-shc.sh.x.c -o test-shc.sh.x\nshc: strip test-shc.sh.x\nshc: "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ug")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("rwx,o"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("rx test-shc.sh.x\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("查看生成文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@10 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\ntotal "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),s._v("\n-rw-r--r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" May "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":52 test-shc.sh\n-rwxrwxr-x "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11120")]),s._v(" May "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":52 test-shc.sh.x\n-rw-r--r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17592")]),s._v(" May "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":52 test-shc.sh.x.c\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])]),s._v(" "),t("blockquote",[t("ul",[t("li",[s._v("shc.sh 是原始的未加密shell脚本")]),s._v(" "),t("li",[s._v("shc.sh.x 是二进制格式的加密shell脚本")]),s._v(" "),t("li",[s._v("shc.sh.x.c 是shc.sh文件的C源代码。编译该C源代码以创建上面的加密的welcome.sh.x文件")])])]),s._v(" "),t("p",[s._v("查看文件类型")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@10 ~]# file test-jast.sh\ntest-jast.sh: POSIX shell script, ASCII text executable\n[root@10 ~]# file test-jast.sh.x\ntest-jast.sh.x: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.32, BuildID[sha1]=65a9d57e8eb0a24f4a000fe680e030dbc23468f6, stripped\n[root@10 ~]# file test-jast.sh.x.c\ntest-jast.sh.x.c: C source, ASCII text\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("执行生成的加密文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@10 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./test-jast.sh.x ")]),s._v("\nThu May "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":56:30 CST "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("指定脚本过期时间，并设置提示信息")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("shc -e 06/10/2023 -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),s._v(" -v -f test-jast.sh \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("p",[s._v("执行脚本")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@10 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./test-jast.sh.x                                ")]),s._v("\n./test-jast.sh.x: has expired"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nerror\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("blockquote",[t("p",[s._v("不指定"),t("code",[s._v("-m")]),s._v("默认提示")]),s._v(" "),t("p",[s._v("[root@10 ~]# ./test-jast.sh.x\n./test-jast.sh.x: has expired!\nPlease contact your provider jahidulhamid@yahoo.com")])]),s._v(" "),t("h2",{attrs:{id:"gzexe-加密等级低"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gzexe-加密等级低"}},[s._v("#")]),s._v(" gzexe - 加密等级低")]),s._v(" "),t("p",[s._v("gzexe：系统自带，无需另外安装，加密解密简单，适用于安全性不高的文件加密，支持除shell脚本外的其他文本加密。")]),s._v(" "),t("p",[s._v("gzexe加密/解密用法：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("加密")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加密后会将源文件改名为 xxx.sh~")]),s._v("\ngzexe xxx.sh \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("解密")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解密后会将源文件改名为 xxx.sh~")]),s._v("\ngzexe -d Script-name.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);