(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{698:function(s,e,n){"use strict";n.r(e);var a=n(20),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("[toc]")]),s._v(" "),n("h3",{attrs:{id:"下载容器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下载容器"}},[s._v("#")]),s._v(" 下载容器")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker pull apache/iotdb:1.2.0-standalone\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"创建网络"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建网络"}},[s._v("#")]),s._v(" 创建网络")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker network create --driver=bridge --subnet=172.18.0.0/16 --gateway=172.18.0.1 iotdb\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("启动")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker run -d --name iotdb-service \\\n              --hostname iotdb-service \\\n              --network iotdb \\\n              --ip 172.18.0.6 \\\n              -p 6667:6667 \\\n              -e cn_internal_address=iotdb-service \\\n              -e cn_target_config_node_list=iotdb-service:10710 \\\n              -e cn_internal_port=10710 \\\n              -e cn_consensus_port=10720 \\\n              -e dn_rpc_address=iotdb-service \\\n              -e dn_internal_address=iotdb-service \\\n              -e dn_target_config_node_list=iotdb-service:10710 \\\n              -e dn_mpp_data_exchange_port=10740 \\\n              -e dn_schema_region_consensus_port=10750 \\\n              -e dn_data_region_consensus_port=10760 \\\n              -e dn_rpc_port=6667 \\\n              apache/iotdb:1.2.0-standalone           \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h3",{attrs:{id:"iotdb客户端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#iotdb客户端"}},[s._v("#")]),s._v(" IoTDB客户端")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker exec -ti iotdb-service /iotdb/sbin/start-cli.sh -h iotdb-service\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);