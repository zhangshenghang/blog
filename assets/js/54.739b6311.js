(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{532:function(s,a,t){"use strict";t.r(a);var e=t(20),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("[toc]")]),s._v(" "),t("h2",{attrs:{id:"环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[s._v("#")]),s._v(" 环境")]),s._v(" "),t("p",[s._v("Ubuntu系统电脑，想在公网连接访问")]),s._v(" "),t("h2",{attrs:{id:"使用教程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用教程"}},[s._v("#")]),s._v(" 使用教程")]),s._v(" "),t("p",[s._v("官网："),t("a",{attrs:{href:"https://www.cpolar.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.cpolar.com/"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"_1-下载安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载安装"}},[s._v("#")]),s._v(" 1.下载安装")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L https://www.cpolar.com/static/downloads/install-release-cpolar.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2-查看版本号-有正常显示版本号即为安装成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看版本号-有正常显示版本号即为安装成功"}},[s._v("#")]),s._v(" 2. 查看版本号，有正常显示版本号即为安装成功")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("cpolar version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"登录验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登录验证"}},[s._v("#")]),s._v(" 登录验证")]),s._v(" "),t("p",[s._v("打开网站"),t("a",{attrs:{href:"https://dashboard.cpolar.com/auth",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://dashboard.cpolar.com/auth"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("进入验证页面，这里就是验证token")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2023/10/08/3WorIaELA9bO1f6.png",alt:"image-20230920092530558"}})]),s._v(" "),t("h3",{attrs:{id:"tcp穿透22端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp穿透22端口"}},[s._v("#")]),s._v(" tcp穿透22端口")]),s._v(" "),t("h4",{attrs:{id:"前台启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前台启动"}},[s._v("#")]),s._v(" 前台启动")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("cpolar tcp "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("运行会返回")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cpolar by @bestexpresser                                                                                                                                         (Ctrl+C to quit)\n                                                                                                                                                                                 \nTunnel Status       online                                                                                                                                                       \nAccount             test01234 (Plan: Free)                                                                                                                                       \nVersion             3.12/3.22                                                                                                                                                    \nWeb Interface       127.0.0.1:4040                                                                                                                                               \nForwarding          tcp://19.tcp.cpolar.top:12830 -> tcp://127.0.0.1:22                                                                                                          \n# Conn              0                                                                                                                                                            \nAvg Conn Time       0.00ms                                                                                                                                                       \n                           \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("前台启动可以直接看到端口")]),s._v(" "),t("h4",{attrs:{id:"后台启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后台启动"}},[s._v("#")]),s._v(" 后台启动")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" cpolar tcp "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("后台启动后再页面"),t("a",{attrs:{href:"https://dashboard.cpolar.com/status",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://dashboard.cpolar.com/status"),t("OutboundLink")],1),s._v("查看到映射的域名")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2023/10/08/qtaiMV2xkHpUoRN.png",alt:"image-20230920092733683"}})]),s._v(" "),t("p",[s._v("使用给的域名和端口即可ssh访问服务器")]),s._v(" "),t("h4",{attrs:{id:"_5-向系统添加服务-开机自启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-向系统添加服务-开机自启动"}},[s._v("#")]),s._v(" 5. 向系统添加服务（开机自启动）")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" cpolar\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_6-启动cpolar服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-启动cpolar服务"}},[s._v("#")]),s._v(" 6. 启动cpolar服务")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start cpolar\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_7-查看服务状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-查看服务状态"}},[s._v("#")]),s._v(" 7. 查看服务状态")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status cpolar\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);