(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{591:function(s,t,a){"use strict";a.r(t);var n=a(20),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("[toc]")]),s._v(" "),a("h1",{attrs:{id:"建表优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建表优化"}},[s._v("#")]),s._v(" 建表优化")]),s._v(" "),a("h2",{attrs:{id:"数据类型优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型优化"}},[s._v("#")]),s._v(" 数据类型优化")]),s._v(" "),a("h3",{attrs:{id:"时间字段的类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间字段的类型"}},[s._v("#")]),s._v(" 时间字段的类型")]),s._v(" "),a("p",[s._v("建表时能用数值型或日期时间型表示的字段就不要用字符串，全 String 类型在以 Hive为中心的数仓建设中常见，但 ClickHouse 环境不应受此影响。")]),s._v(" "),a("p",[s._v("虽然 ClickHouse 底层将 DateTime 存储为时间戳 Long 类型，但不建议存储 Long 类型，因为 DateTime 不需要经过函数转换处理，执行效率高、可读性好。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" t_type2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\nid UInt32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nsku_id String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\ntotal_amount "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Decimal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\ncreate_time Int32 \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("engine")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ReplacingMergeTree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("create_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("partition")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" toYYYYMMDD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("toDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("create_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" –"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("需要转换一次，否则报错\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sku_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"空值存储类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空值存储类型"}},[s._v("#")]),s._v(" 空值存储类型")]),s._v(" "),a("p",[s._v("官方已经指出 "),a("strong",[s._v("Nullable")]),s._v(" "),a("strong",[s._v("类型几乎总是会拖累性能")]),s._v("，因为存储 Nullable 列时需要创建一个额外的文件来存储 NULL 的标记，并且 Nullable 列无法被索引。因此除非极特殊情况，应直接使用字段默认值表示空，或者自行指定一个在业务中无意义的值（例如用-1 表示没有商品ID）。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" t_null"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x Int8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y Nullable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Int8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),s._v(" TinyLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" t_null "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" y "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_null"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("查询结果")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" y "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_null"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" y\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_null\n\nQuery id: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("f4badf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bddf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("fcf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("95")]),s._v("a1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ca027a88f857\n\n┌─plus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("─┐\n│       ᴺᵁᴸᴸ │\n│          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │\n└────────────┘\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Elapsed: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.004")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("在存储路径查看存储文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("t_null "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("\n-rw-r----- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" clickhouse clickhouse "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("91")]),s._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":36 sizes.json\n-rw-r----- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" clickhouse clickhouse "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":36 x.bin\n-rw-r----- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" clickhouse clickhouse "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":36 y.bin\n-rw-r----- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" clickhouse clickhouse "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":36 y.null.bin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"分区和索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分区和索引"}},[s._v("#")]),s._v(" 分区和索引")]),s._v(" "),a("p",[s._v("分区粒度根据业务特点决定，不宜过粗或过细。一般选择"),a("strong",[s._v("按天分区")]),s._v("，也可以指定为 Tuple()，以单表一亿数据为例，分区大小控制在 10-30 个为最佳。")]),s._v(" "),a("p",[s._v("必须指定索引列，ClickHouse 中的索引列即排序列，通过 order by 指定，一般在查询条件中经常被用来充当筛选条件的属性被纳入进来；可以是单一维度，也可以是组合维度的索引；通常需要满足高级列在前、查询频率大的在前原则；还有基数特别大的不适合做索引列，如用户表的 userid 字段；通常"),a("strong",[s._v("筛选后的数据满足在百万以内为最佳")]),s._v("。")]),s._v(" "),a("p",[s._v("比如官方案例的 hits_v1 表：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("……\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" toYYYYMM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("EventDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CounterID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" EventDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" intHash32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("UserID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n……\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("visits_v1 表：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("……\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" toYYYYMM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("StartDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CounterID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" StartDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" intHash32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("UserID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" VisitID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n……\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"表参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表参数"}},[s._v("#")]),s._v(" 表参数")]),s._v(" "),a("p",[s._v("Index_granularity 是用来控制索引粒度的，默认是 8192，如非必须不建议调整。")]),s._v(" "),a("p",[s._v("如果表中不是必须保留全量历史数据，建议指定 TTL（生存时间值），可以免去手动过期历史数据的麻烦，TTL 也可以通过 alter table 语句随时修改。")]),s._v(" "),a("h2",{attrs:{id:"写入和删除优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写入和删除优化"}},[s._v("#")]),s._v(" 写入和删除优化")]),s._v(" "),a("p",[s._v("（1）尽量不要执行单条或小批量删除和插入操作，这样会产生小分区文件，给后台Merge 任务带来巨大压力")]),s._v(" "),a("p",[s._v("（2）不要一次写入太多分区，或数据写入太快，数据写入太快会导致 Merge 速度跟不上而报错，一般建议每秒钟发起 2-3 次写入操作，每次操作写入 2w~5w 条数据（依服务器性能而定）")]),s._v(" "),a("p",[s._v("写入过快报错，报错信息：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1. Code: 252, e.displayText() = DB::Exception: Too many parts(304). \nMerges are processing significantly slower than inserts\n2. Code: 241, e.displayText() = DB::Exception: Memory limit (for query) \nexceeded:would use 9.37 GiB (attempt to allocate chunk of 301989888 \nbytes), maximum: 9.31 GiB\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("处理方式：")]),s._v(" "),a("p",[s._v("“ Too many parts 处理 ” ：使用 WAL 预写日志，提高写入性能。")]),s._v(" "),a("p",[a("strong",[s._v("in_memory_parts_enable_wal 默认为 true")])]),s._v(" "),a("p",[s._v("在服务器内存充裕的情况下增加内存配额，一般通过 max_memory_usage 来实现")]),s._v(" "),a("p",[s._v("在服务器内存不充裕的情况下，建议将超出部分内容分配到系统硬盘上，但会降低执行速度，一般通过 max_bytes_before_external_group_by、max_bytes_before_external_sort 参数来实现。")]),s._v(" "),a("h2",{attrs:{id:"常见配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见配置"}},[s._v("#")]),s._v(" 常见配置")]),s._v(" "),a("p",[s._v("配置项主要在 config.xml 或 users.xml 中， 基本上都在 users.xml 里")]),s._v(" "),a("ul",[a("li",[s._v("config.xml 的配置项")])]),s._v(" "),a("p",[s._v("https://clickhouse.tech/docs/en/operations/server-configuration-parameters/settings/")]),s._v(" "),a("ul",[a("li",[s._v("users.xml 的配置项")])]),s._v(" "),a("p",[s._v("https://clickhouse.tech/docs/en/operations/settings/settings/")]),s._v(" "),a("h3",{attrs:{id:"cpu-资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpu-资源"}},[s._v("#")]),s._v(" CPU 资源")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("配置")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("background_pool_size")]),s._v(" "),a("td",[s._v("后台线程池的大小，merge 线程就是在该线程池中执行，该线程池")])]),s._v(" "),a("tr",[a("td",[s._v("background_schedule_pool_size")]),s._v(" "),a("td",[s._v("执行后台任务（复制表、Kafka 流、DNS 缓存更新）的线程数。默 认 128，建议改成 cpu 个数的 2 倍（线程数）。")])]),s._v(" "),a("tr",[a("td",[s._v("background_distributed_schedule_pool_size")]),s._v(" "),a("td",[s._v("设置为分布式发送执行后台任务的线程数，默认 16，建议改成 cpu个数的 2 倍（线程数）。")])]),s._v(" "),a("tr",[a("td",[s._v("max_concurrent_queries")]),s._v(" "),a("td",[s._v("最大并发处理的请求数(包含 select,insert 等)，默认值 100，推荐 150(不够再加)~300。")])]),s._v(" "),a("tr",[a("td",[s._v("max_threads")]),s._v(" "),a("td",[s._v("设置单个查询所能使用的最大 cpu 个数，默认是 cpu 核数")])])])]),s._v(" "),a("h3",{attrs:{id:"内存资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存资源"}},[s._v("#")]),s._v(" 内存资源")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("配置")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("max_memory_usage")]),s._v(" "),a("td",[s._v("此参数在 users.xml 中,表示单次 Query 占用内存最大值，该值可以设置的比较大，这样可以提升集群查询的上限。保留一点给 OS，比如 128G 内存的机器，设置为 100GB。")])]),s._v(" "),a("tr",[a("td",[s._v("max_bytes_before_external_group_by")]),s._v(" "),a("td",[s._v("一般按照 max_memory_usage 的一半设置内存，当 group 使用内存超过阈值后会刷新到磁盘进行。因为 clickhouse 聚合分两个阶段：查询并建立中间数据、合并中间数据，结合上一项，建议 50GB。")])]),s._v(" "),a("tr",[a("td",[s._v("max_bytes_before_external_sort")]),s._v(" "),a("td",[s._v("当 order by 已使用 max_bytes_before_external_sort 内存就进行溢写磁盘(基于磁盘排序)，如果不设置该值，那么当内存不够时直接抛错，设置了该值 order by 可以正常完成，但是速度相对存内存来说肯定要慢点(实测慢的非常多，无法接受)。")])]),s._v(" "),a("tr",[a("td",[s._v("max_table_size_to_drop")]),s._v(" "),a("td",[s._v("此参数在 config.xml 中，应用于需要删除表或分区的情况，默认是50GB，意思是如果删除 50GB 以上的分区表会失败。建议修改为 0，这样不管多大的分区表都可以删除。")])])])]),s._v(" "),a("h3",{attrs:{id:"存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储"}},[s._v("#")]),s._v(" 存储")]),s._v(" "),a("p",[s._v("ClickHouse 不支持设置多数据目录，为了提升数据 io 性能，可以挂载虚拟卷组，一个卷组绑定多块物理磁盘提升读写性能，多数据查询场景 SSD 会比普通机械硬盘快 2-3 倍。")])])}),[],!1,null,null,null);t.default=e.exports}}]);