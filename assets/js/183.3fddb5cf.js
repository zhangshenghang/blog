(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{661:function(s,a,e){"use strict";e.r(a);var t=e(20),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("[toc]")]),s._v(" "),e("h2",{attrs:{id:"hbase-基于-snapshot-迁移"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hbase-基于-snapshot-迁移"}},[s._v("#")]),s._v(" HBase 基于 Snapshot 迁移")]),s._v(" "),e("p",[s._v("Hbase 表是基于 hadoop HDFS 构建，所以 Hbase 的迁移可从两个维度来看，基于 hadoop HDFS 的 distcp 的迁移方式和基于 Hbase 表结构的 Hbase 层面提供的相关工具迁移。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://s2.loli.net/2023/03/20/W1CJvibBaOf7USj.png",alt:"img"}})]),s._v(" "),e("p",[s._v("如上图所示，HBase 迁移有多种方案，其中基于 Snapshot 的迁移方式是推荐的迁移方案。")]),s._v(" "),e("h3",{attrs:{id:"_1-在新集群上建立表结构一样的表。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-在新集群上建立表结构一样的表。"}},[s._v("#")]),s._v(" 1.在新集群上建立表结构一样的表。")]),s._v(" "),e("h3",{attrs:{id:"_2-使用hbase-shell在原始集群中创建一个快照。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用hbase-shell在原始集群中创建一个快照。"}},[s._v("#")]),s._v(" 2.使用"),e("code",[s._v("hbase shell")]),s._v("在原始集群中创建一个快照。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ ./bin/hbase shell  \nhbase>snapshot 'myTable', 'myTableSnapshot'  \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("这里"),e("code",[s._v("'myTable'")]),s._v("是 hbase 的表名,"),e("code",[s._v("'myTableSnapshot'")]),s._v("是快照的名称。创建完成后可使用 list_snapshots 确认是否成功，或使用 delete_snapshot 删除快照。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("hbase> delete_snapshot 'myTableSnapshot'  \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_3-在源集群中导出快照到目标集群。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-在源集群中导出快照到目标集群。"}},[s._v("#")]),s._v(" 3.在源集群中导出快照到目标集群。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("hbase org.apache.hadoop.hbase.snapshot.ExportSnapshot -snapshot myTableSnapshot -copy-to hdfs://10.0.0.38:4007/hbase/snapshot/myTableSnapshot  \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这里"),e("code",[s._v("10.0.0.38:4007")]),s._v("是目标集群的"),e("code",[s._v("$activeip:$rpcport")]),s._v("，导出快照时系统级别会启动一个 mapreduce 的任务，可以在后面增加"),e("code",[s._v("-mappers 16 -bandwidth 200")]),s._v("来指定 mapper 和带宽。其中200指的是200MB/sec。")]),s._v(" "),e("h3",{attrs:{id:"_4-快照还原到目标集群的目标-hdfs-在目标集群中执行如下命令。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-快照还原到目标集群的目标-hdfs-在目标集群中执行如下命令。"}},[s._v("#")]),s._v(" 4.快照还原到目标集群的目标 HDFS，在目标集群中执行如下命令。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("hbase org.apache.hadoop.hbase.snapshot.ExportSnapshot -snapshot myTableSnapshot -copy-from /hbase/snapshot/myTableSnapshot -copy-to /hbase/  \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_5-在目标集群从-hdfs-恢复相应的-hbase-表及数据。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-在目标集群从-hdfs-恢复相应的-hbase-表及数据。"}},[s._v("#")]),s._v(" 5.在目标集群从 hdfs 恢复相应的 hbase 表及数据。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("hbase> disable \"myTable\"  \nhbase> restore_snapshot 'myTableSnapshot'  \nhbase> enable 'myTable'  \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"_6-最后可通过简单的-hbase-表操作进行测试。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-最后可通过简单的-hbase-表操作进行测试。"}},[s._v("#")]),s._v(" 6.最后可通过简单的 HBase 表操作进行测试。")])])}),[],!1,null,null,null);a.default=n.exports}}]);