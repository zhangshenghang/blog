(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{765:function(a,t,e){"use strict";e.r(t);var s=e(20),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("[toc]")]),a._v(" "),e("h2",{attrs:{id:"作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[a._v("#")]),a._v(" 作用")]),a._v(" "),e("p",[a._v("加载外部资源文件，在driver和executor进程中进行访问。")]),a._v(" "),e("h2",{attrs:{id:"使用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),e("h3",{attrs:{id:"添加文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加文件"}},[a._v("#")]),a._v(" 添加文件")]),a._v(" "),e("p",[a._v("spark-submit --files file_paths\n其中file_paths可为多种方式：file:,hdfs://,http://,ftp://,local:,多个路径用逗号隔开")]),a._v(" "),e("h3",{attrs:{id:"获取文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取文件"}},[a._v("#")]),a._v(" 获取文件")]),a._v(" "),e("h4",{attrs:{id:"获取文件路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取文件路径"}},[a._v("#")]),a._v(" 获取文件路径：")]),a._v(" "),e("div",{staticClass:"language-scala line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[a._v("filePath "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" SparkFiles"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("get"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("fileName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"获取文件数据流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取文件数据流"}},[a._v("#")]),a._v(" 获取文件数据流：")]),a._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[a._v("executor：inputStream "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FileInputStream")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("fileName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("或者和driver相同\ndriver"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" inputStream "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FileInputStream")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SparkFiles")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("fileName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h4",{attrs:{id:"原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[a._v("#")]),a._v(" 原理")]),a._v(" "),e("p",[a._v("–files和–jars基本相同\n当使用spark-submit --files时，会将–files后面的文件路径记录下来传给driver进程，然后当启动driver进程时，会调用SparkFiles.addFile(file_path)，并复制文件到driver的临时文件目录中。之后executor启动之后，将从driver这里fetch文件到自己的工作目录。\n其中executor fetch files的方式为：")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://s2.loli.net/2023/03/24/FBAzOK2HcMojlZm.png",alt:"在这里插入图片描述"}})]),a._v(" "),e("p",[a._v("所以SparkFiles.get(fileName)所得的路径，对于driver就是SparkEnv.get.driverTmpDir+fileName，对于executor就是workDir+fileName。")]),a._v(" "),e("h4",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[a._v("#")]),a._v(" 注意事项")]),a._v(" "),e("p",[a._v("1、in cluster mode ，–files必须使用全局可视的地址（比如hdfs），否则driver将无法找到文件，出现FileNotFoundException。这是因为driver会在集群中任意一台work节点上运行，使用本地地址无法找到文件。FileNotFoundException异常出现在SparkSession的getOrCreate()初始化方法中，因为此方法会调用addFile()，但是确找不到文件，导致SparkSession初始化失败。注意：–jars原理相同，但是getOrCreate()中调用addJars出现异常，但是并不会导SparkSession初始化失败，程序会继续运行。\n   值得一提的是，在cluster模式下，spark-submit   --deploy-mode cluster   path-to-jar，其中path-to-jar也必须是全局可视路径，否则会发生找不到jar的异常。所以，这让我觉得spark-submit只是记录了运行的配置，并没有将–files、–jars executor-jar等文件复制并传送给driver程序。")]),a._v(" "),e("p",[a._v("2、在driver中执行的SparkFiles.get(fileName)和executor中执行SparkFiles.get(fileName)结果不同。原理上面已经陈述，driver上和executor上获取的路径并不相同。所以当在driver中使用SparkFiles.get(fileName)获取到文件路径之后，再使用sparkcontext或者sparksession的DataSource API读取文件，则会出现异常。因为读取动作会在每一个executor上执行，但是读取路径是driver上获取得到的，所以找不到文件。")]),a._v(" "),e("p",[a._v("https://stackoverflow.com/questions/37132559/add-jars-to-a-spark-job-spark-submit")]),a._v(" "),e("h2",{attrs:{id:"cluster模式使用-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cluster模式使用-files"}},[a._v("#")]),a._v(" Cluster模式使用--files")]),a._v(" "),e("p",[a._v("Cluster模式在启动时通过"),e("code",[a._v("--files /data/spark-job/env.properties")]),a._v("指定文件，")]),a._v(" "),e("p",[a._v("在代码中可以使用"),e("code",[a._v('prop.load(new FileInputStream("env.properties"))')]),a._v("直接获取文件。")]),a._v(" "),e("p",[a._v("注意：在Client模式使用"),e("code",[a._v('prop.load(new FileInputStream("env.properties"))')]),a._v("会提示找不到配置文件")]),a._v(" "),e("h2",{attrs:{id:"client模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#client模式"}},[a._v("#")]),a._v(" Client模式")]),a._v(" "),e("p",[a._v("Client模式"),e("code",[a._v('prop.load(new FileInputStream("env.properties"))')]),a._v("读取的就是部署的本地文件目录，使用Cluster方式就会提示文件找不到")]),a._v(" "),e("h2",{attrs:{id:"使用sparkfiles-get提示nullexception"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用sparkfiles-get提示nullexception"}},[a._v("#")]),a._v(" 使用SparkFiles.get提示NullException")]),a._v(" "),e("p",[a._v("异常内容：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('Exception in thread "main" java.lang.NullPointerException\n\tat org.apache.spark.SparkFiles$.getRootDirectory(SparkFiles.scala:37)\n\tat org.apache.spark.SparkFiles$.get(SparkFiles.scala:31)\n\t...\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h3",{attrs:{id:"问题分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题分析"}},[a._v("#")]),a._v(" 问题分析")]),a._v(" "),e("p",[a._v("该现象为在初始化SparkContext之前调用了SparkFiles.get()。")]),a._v(" "),e("h3",{attrs:{id:"问题解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题解决方案"}},[a._v("#")]),a._v(" 问题解决方案")]),a._v(" "),e("p",[a._v("优先初始化SparkContext。")]),a._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),e("p",[a._v("https://blog.csdn.net/qq_41775852/article/details/104773502")]),a._v(" "),e("p",[a._v("https://blog.csdn.net/weixin_39588015/article/details/79365208")])])}),[],!1,null,null,null);t.default=r.exports}}]);