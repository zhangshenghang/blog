(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{540:function(n,s,e){"use strict";e.r(s);var a=e(20),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("[toc]")]),n._v(" "),e("p",[n._v("通过docker快速实现OpenVPN搭建")]),n._v(" "),e("h2",{attrs:{id:"拉取镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[n._v("#")]),n._v(" 拉取镜像")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("docker pull kylemanna/openvpn:2.4\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("h2",{attrs:{id:"创建配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建配置文件"}},[n._v("#")]),n._v(" 创建配置文件")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("docker run -v /opt/openvpn:/etc/openvpn --rm kylemanna/openvpn:2.4 ovpn_genconfig -u tcp://ip[:port]\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("blockquote",[e("p",[n._v("ip:port 设置的地址为你连接VPN访问的ip和端口，一般为公网IP和端口,一般端口为1194")])]),n._v(" "),e("p",[n._v("运行结果")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("[root@bigdata-101 ~]# docker run -v /opt/openvpn:/etc/openvpn --rm kylemanna/openvpn:2.4 ovpn_genconfig -u udp://x.x.x.x:port\nProcessing PUSH Config: 'block-outside-dns'\nProcessing Route Config: '192.168.254.0/24'\nProcessing PUSH Config: 'dhcp-option DNS 8.8.8.8'\nProcessing PUSH Config: 'dhcp-option DNS 8.8.4.4'\nProcessing PUSH Config: 'comp-lzo no'\nSuccessfully generated config\nCleaning up before Exit ...\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br")])]),e("h2",{attrs:{id:"生成密钥文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成密钥文件"}},[n._v("#")]),n._v(" 生成密钥文件")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("docker run -v /opt/openvpn:/etc/openvpn --rm -it kylemanna/openvpn:2.4 ovpn_initpki\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("# 设置密码\nEnter New CA Key Passphrase: \nRe-Enter New CA Key Passphrase: \n# 默认回车\nCommon Name (eg: your user, host, or server name) [Easy-RSA CA]:\n# 输入刚刚设置的密码\nEnter pass phrase for /etc/openvpn/pki/private/ca.key:\nEnter pass phrase for /etc/openvpn/pki/private/ca.key:\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br")])]),e("p",[n._v("完整执行步骤日志")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("[root@bigdata-101 ~]# docker run -v /opt/openvpn:/etc/openvpn --rm -it kylemanna/openvpn:2.4 ovpn_initpki\n\ninit-pki complete; you may now create a CA or requests.\nYour newly created PKI dir is: /etc/openvpn/pki\n\n\nUsing SSL: openssl OpenSSL 1.1.1g  21 Apr 2020\n\nEnter New CA Key Passphrase: \nRe-Enter New CA Key Passphrase: \nGenerating RSA private key, 2048 bit long modulus (2 primes)\n.............................................................................................................................................................................+++++\n.................................+++++\ne is 65537 (0x010001)\nYou are about to be asked to enter information that will be incorporated\ninto your certificate request.\nWhat you are about to enter is what is called a Distinguished Name or a DN.\nThere are quite a few fields but you can leave some blank\nFor some fields there will be a default value,\nIf you enter '.', the field will be left blank.\n-----\nCommon Name (eg: your user, host, or server name) [Easy-RSA CA]:\n\nCA creation complete and you may now import and sign cert requests.\nYour new CA certificate file for publishing is at:\n/etc/openvpn/pki/ca.crt\n\n\nUsing SSL: openssl OpenSSL 1.1.1g  21 Apr 2020\nGenerating DH parameters, 2048 bit long safe prime, generator 2\nThis is going to take a long time\n.................................................................+....+....................+.........................................................................................................+....+.......................................................................................................................................................................+.....................................+...................+.......................+.....................................................................................................................................................................................................................................+............................................................................+...................................................................................................................+.....+.......................................................................................................................................................................................................................................+..................................................................................................................................................................................................+........+.............................................................................................................................+..............................+....................................................+..............................................................................................................................................................................+......................................................................................................+....................................................................................+.......................++*++*++*++*\n\nDH parameters of size 2048 created at /etc/openvpn/pki/dh.pem\n\n\nUsing SSL: openssl OpenSSL 1.1.1g  21 Apr 2020\nGenerating a RSA private key\n.............................................+++++\n.....................+++++\nwriting new private key to '/etc/openvpn/pki/easy-rsa-73.bBJIMn/tmp.PBbHDh'\n-----\nUsing configuration from /etc/openvpn/pki/easy-rsa-73.bBJIMn/tmp.lDdIgp\nEnter pass phrase for /etc/openvpn/pki/private/ca.key:\nCheck that the request matches the signature\nSignature ok\nThe Subject's Distinguished Name is as follows\ncommonName            :ASN.1 12:'公网IP'\nCertificate is to be certified until Apr  2 07:03:45 2026 GMT (825 days)\n\nWrite out database with 1 new entries\nData Base Updated\n\nUsing SSL: openssl OpenSSL 1.1.1g  21 Apr 2020\nUsing configuration from /etc/openvpn/pki/easy-rsa-148.JkjcgL/tmp.Ahiido\nEnter pass phrase for /etc/openvpn/pki/private/ca.key:\n\nAn updated CRL has been created.\nCRL file: /etc/openvpn/pki/crl.pem\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br")])]),e("h2",{attrs:{id:"生成客户端证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成客户端证书"}},[n._v("#")]),n._v(" 生成客户端证书")]),n._v(" "),e("h3",{attrs:{id:"生成无密码的客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成无密码的客户端"}},[n._v("#")]),n._v(" 生成无密码的客户端")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("docker run -v /opt/openvpn:/etc/openvpn --rm -it kylemanna/openvpn:2.4 easyrsa build-client-full jast nopass\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("blockquote",[e("p",[n._v("jast 为客户端用户")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("[root@bigdata-101 ~]# docker run -v /opt/openvpn:/etc/openvpn --rm -it kylemanna/openvpn:2.4 easyrsa build-client-full jast nopass\nUsing SSL: openssl OpenSSL 1.1.1g  21 Apr 2020\nGenerating a RSA private key\n.+++++\n...................+++++\nwriting new private key to '/etc/openvpn/pki/easy-rsa-1.npkoBm/tmp.GjbIiO'\n-----\nUsing configuration from /etc/openvpn/pki/easy-rsa-1.npkoBm/tmp.GAAMkb\n\nEnter pass phrase for /etc/openvpn/pki/private/ca.key: # 输入刚刚创建的密码\nCheck that the request matches the signature\nSignature ok\nThe Subject's Distinguished Name is as follows\ncommonName            :ASN.1 12:'jast'\nCertificate is to be certified until Apr  2 07:06:25 2026 GMT (825 days)\n\nWrite out database with 1 new entries\nData Base Updated\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br")])]),e("h3",{attrs:{id:"生成有密码的客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成有密码的客户端"}},[n._v("#")]),n._v(" 生成有密码的客户端")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("Using SSL: openssl OpenSSL 1.1.1g  21 Apr 2020\nGenerating a RSA private key\n.........................................+++++\n...............................................+++++\nwriting new private key to '/etc/openvpn/pki/easy-rsa-1.MEMpOp/tmp.gLiNaP'\nEnter PEM pass phrase:  # 输入要设置的客户端的密码\nVerifying - Enter PEM pass phrase:\n-----\nUsing configuration from /etc/openvpn/pki/easy-rsa-1.MEMpOp/tmp.gCiMLA\nEnter pass phrase for /etc/openvpn/pki/private/ca.key:  # 输入之前设置的证书密码\nCheck that the request matches the signature\nSignature ok\nThe Subject's Distinguished Name is as follows\ncommonName            :ASN.1 12:'jast3'\nCertificate is to be certified until Apr  2 07:24:36 2026 GMT (825 days)\n\nWrite out database with 1 new entries\nData Base Updated\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br")])]),e("h2",{attrs:{id:"导出证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导出证书"}},[n._v("#")]),n._v(" 导出证书")]),n._v(" "),e("p",[n._v("导出客户端认证文件到本地")]),n._v(" "),e("blockquote",[e("p",[n._v("jast 为客户端名称")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("docker run -v /opt/openvpn:/etc/openvpn --rm kylemanna/openvpn:2.4 ovpn_getclient jast > /opt/jast.ovpn\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("h2",{attrs:{id:"启动vpn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动vpn"}},[n._v("#")]),n._v(" 启动VPN")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("docker run --name ov --restart=always --privileged=true -v /opt/openvpn:/etc/openvpn -d -p 1194:1194/tcp --cap-add=NET_ADMIN kylemanna/openvpn:2.4\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("blockquote",[e("p",[n._v("如果公网访问VPN，公网的IP地址和端口要映射到当前容器所在服务器的1194端口")])]),n._v(" "),e("h2",{attrs:{id:"配置哪些流量走vpn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置哪些流量走vpn"}},[n._v("#")]),n._v(" 配置哪些流量走VPN")]),n._v(" "),e("p",[n._v("修改客户端文件"),e("code",[n._v("jast.ovpn")]),n._v("，在配置文件中添加")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("# 表示不接受服务器对于修改路由表的推送，而可以按照我们之后指定的规则去修改\nroute-nopull\n# 这个参数设置了路由的度量值（metric），用于确定路由的优先级。路由的度量值越小，优先级越高。在有多个路由规则匹配的情况下，系统会选择度量值最小的路由。\nroute-metric 150\n# 远程主机（remote_host）的流量通过本地网关（net_gateway）发送\nroute remote_host 255.255.255.255 net_gateway\n# 172.19.0.0/16网段的流量通过本地网关发送\nroute 172.19.0.0 255.255.0.0 net_gateway\n# 192.168.1.0/16网段的流量通过VPN网关（vpn_gateway）发送\nroute 192.168.1.0 255.255.0.0 vpn_gateway\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br")])]),e("p",[n._v("注释掉这一行")]),n._v(" "),e("blockquote",[e("p",[e("code",[n._v("redirect-gateway def1")]),n._v("作用是将默认网关重定向到 VPN 服务器上，所以要注释掉。")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("# edirect-gateway def1\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("h2",{attrs:{id:"客户端下载地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端下载地址"}},[n._v("#")]),n._v(" 客户端下载地址")]),n._v(" "),e("p",[n._v("Mac:"),e("a",{attrs:{href:"https://tunnelblick.net/",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://tunnelblick.net/"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("Win7:"),e("a",{attrs:{href:"https://swupdate.openvpn.org/community/releases/openvpn-install-2.4.8-I602-Win7.exe",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://swupdate.openvpn.org/community/releases/openvpn-install-2.4.8-I602-Win7.exe"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("Win10:"),e("a",{attrs:{href:"https://swupdate.openvpn.org/community/releases/openvpn-install-2.4.8-I602-Win10.exe",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://swupdate.openvpn.org/community/releases/openvpn-install-2.4.8-I602-Win10.exe"),e("OutboundLink")],1)]),n._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[n._v("#")]),n._v(" 参考")]),n._v(" "),e("p",[n._v("https://kui.li/675.html")]),n._v(" "),e("p",[n._v("https://kyo86.com/2022/10/08/openvpn/")]),n._v(" "),e("p",[n._v("https://blog.csdn.net/weizhen330/article/details/132244496")]),n._v(" "),e("p",[n._v("https://blog.csdn.net/qq_42761569/article/details/106538056")])])}),[],!1,null,null,null);s.default=t.exports}}]);