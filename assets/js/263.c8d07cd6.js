(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{741:function(s,a,t){"use strict";t.r(a);var n=t(20),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("[toc]")]),s._v(" "),t("h2",{attrs:{id:"官方介绍文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#官方介绍文档"}},[s._v("#")]),s._v(" 官方介绍文档")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/PaddlePaddle/PaddleNLP/tree/develop/applications/sentiment_analysis/unified_sentiment_extraction",target:"_blank",rel:"noopener noreferrer"}},[s._v("点此跳转"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"服务器配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器配置"}},[s._v("#")]),s._v(" 服务器配置")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("GPU型号：RTX 3090\n显存：24GB\n最高 CUDA：12.0\n每 GPU 分配内存：24GB\nGPU 数量：1\n数据盘：40GB\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("查看其他环境信息")]),s._v(" "),t("p",[s._v("查看cuda版本")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("~ nvcc -V\nnvcc: NVIDIA "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("R"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Cuda compiler driver\nCopyright "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2005")]),s._v("-2022 NVIDIA Corporation\nBuilt on Tue_May__3_18:49:52_PDT_2022\nCuda compilation tools, release "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.7")]),s._v(", V11.7.64\nBuild cuda_11.7.r11.7/compiler.31294372_0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"下载anaconda3环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载anaconda3环境"}},[s._v("#")]),s._v(" 下载Anaconda3环境")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -b https://repo.anaconda.com/archive/Anaconda3-2023.07-2-Linux-x86_64.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("创建新环境")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("conda create "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("name nlp python"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.8")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("channel https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("mirrors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tuna"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tsinghua"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("anaconda"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pkgs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("free"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("使用环境")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 激活环境前先进入 base 环境")]),s._v("\nsource activate\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再进入创建的环境")]),s._v("\nconda activate nlp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("blockquote",[t("p",[s._v("具体安装不在这里介绍")])]),s._v(" "),t("h2",{attrs:{id:"安装环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装环境"}},[s._v("#")]),s._v(" 安装环境")]),s._v(" "),t("h3",{attrs:{id:"安装paddlepaddle-gpu版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装paddlepaddle-gpu版本"}},[s._v("#")]),s._v(" 安装paddlepaddle-gpu版本")]),s._v(" "),t("p",[s._v("下载的版本需要按照对应cuda版本下载，我这里是11.7版本")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("python3 -m pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" paddlepaddle-gpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.5")]),s._v(".0rc1.post117 -f https://www.paddlepaddle.org.cn/whl/linux/cudnnin/stable.html\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("对应关系：https://www.paddlepaddle.org.cn/documentation/docs/zh/install/pip/linux-pip.html#gpu")])]),s._v(" "),t("p",[s._v("安装完成后运行"),t("code",[s._v("paddle.utils.run_check()")]),s._v("校验是否成功")]),s._v(" "),t("p",[s._v("输出"),t("code",[s._v("x")]),s._v("则为成功")]),s._v(" "),t("h3",{attrs:{id:"安装paddlenlp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装paddlenlp"}},[s._v("#")]),s._v(" 安装PaddleNLP")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --force-reinstall "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("paddlenlp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.6")]),s._v(".0 -i https://mirror.baidu.com/pypi/simple\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"训练"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#训练"}},[s._v("#")]),s._v(" 训练")]),s._v(" "),t("h3",{attrs:{id:"下载训练数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载训练数据"}},[s._v("#")]),s._v(" 下载训练数据")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" data\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" data\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://paddlenlp.bj.bcebos.com/datasets/sentiment_analysis/hotel/label_studio.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf label_studio.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"样本构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#样本构建"}},[s._v("#")]),s._v(" 样本构建")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("python label_studio"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("label_studio_file "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("label_studio"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("task_type ext \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("save_dir "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("splits "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(" \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("options "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"正向"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"负向"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"未提及"')]),s._v(" \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("negative_ratio "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("is_shuffle "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v(" \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("seed "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"模型训练"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模型训练"}},[s._v("#")]),s._v(" 模型训练")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("python "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("u "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("m paddle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("distributed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("launch "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("gpus "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(" finetune"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("train_path "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("train"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev_path "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("save_dir "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("checkpoint \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("learning_rate "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1e-5")]),s._v(" \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("batch_size "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("max_seq_len "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("num_epochs "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("model uie"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("senta"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("base \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("seed "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("logging_steps "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("valid_steps "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("device gpu\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"模型测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模型测试"}},[s._v("#")]),s._v(" 模型测试")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("python evaluate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("model_path "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("checkpoint"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("model_best \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("test_path "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("batch_size "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("max_seq_len "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("debug\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("结果")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("███████████████████████████████████████████████████████████████████████████████████████████████"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("00:0"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v("<")]),s._v("00:00,  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".08s/it"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("-09-08 09:36:22,374"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("    INFO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - -----------------------------\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("-09-08 09:36:22,375"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("    INFO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - Class Name: 评价维度\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("-09-08 09:36:22,375"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("    INFO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - Evaluation Precision: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.88732")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Recall: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.88732")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" F1: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.88732")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("███████████████████████████████████████████████████████████████████████████████████████████████"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("00:0"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v("<")]),s._v("00:00,  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(".08it/s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("-09-08 09:36:22,706"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("    INFO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - -----------------------------\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("-09-08 09:36:22,706"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("    INFO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - Class Name: 观点词\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("-09-08 09:36:22,707"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("    INFO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - Evaluation Precision: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.73494")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Recall: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.78205")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" F1: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.75776")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("███████████████████████████████████████████████████████████████████████████████████████████████"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("/4 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("00:0"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v("<")]),s._v("00:00,  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(".30it/s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("-09-08 09:36:23,257"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("    INFO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - -----------------------------\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("-09-08 09:36:23,257"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("    INFO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - Class Name: X的观点词\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("-09-08 09:36:23,257"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("    INFO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - Evaluation Precision: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.83636")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Recall: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.82143")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" F1: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.82883")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("███████████████████████████████████████████████████████████████████████████████████████████████"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("/5 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("00:0"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v("<")]),s._v("00:00,  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(".19it/s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("-09-08 09:36:23,956"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("    INFO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - -----------------------------\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("-09-08 09:36:23,956"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("    INFO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - Class Name: X的情感倾向"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("未提及,正向,负向"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("-09-08 09:36:23,956"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("    INFO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - Evaluation Precision: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.92424")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Recall: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.92424")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" F1: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.924")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h3",{attrs:{id:"模型调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模型调用"}},[s._v("#")]),s._v(" 模型调用")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" paddlenlp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Taskflow\nschema "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'评价维度'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'观点词'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'情感倾向[正向,负向,未提及]'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nsenta "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Taskflow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sentiment_analysis"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" model"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uie-senta-base"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" schema"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" task_path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./checkpoint/model_best"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("senta"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"这家点的房间很大，店家服务也很热情，就是房间隔音不好"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"自己训练的数据测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自己训练的数据测试"}},[s._v("#")]),s._v(" 自己训练的数据测试")]),s._v(" "),t("h3",{attrs:{id:"样本构建-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#样本构建-2"}},[s._v("#")]),s._v(" 样本构建")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('python label_studio.py \\\n    --label_studio_file ./data2/project-4-at-2023-09-07-06-13-78e5962b.json \\\n    --task_type ext \\\n    --save_dir ./data2 \\\n    --splits 0.8 0.1 0.1 \\\n    --options "正向" "负向" "未提及" \\\n    --negative_ratio 5 \\\n    --is_shuffle True \\\n    --seed 1000\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"模型训练-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模型训练-2"}},[s._v("#")]),s._v(" 模型训练")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('python -u -m paddle.distributed.launch --gpus "0" finetune.py \\\n  --train_path ./data2/train.json \\\n  --dev_path ./data2/dev.json \\\n  --save_dir ./checkpoint2 \\\n  --learning_rate 1e-5 \\\n  --batch_size 1 \\\n  --max_seq_len 512 \\\n  --num_epochs 3 \\\n  --model uie-senta-base \\\n  --seed 1000 \\\n  --logging_steps 10 \\\n  --valid_steps 100 \\\n  --device gpu\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("blockquote",[t("p",[s._v("记录一个问题：")]),s._v(" "),t("p",[s._v("这里batch_size 直接很快就运行完成了，但是没有输出模型，改成1就可以输出，暂时不知道什么原因")]),s._v(" "),t("blockquote",[t("p",[s._v("可能是因为设置 logging_steps 值，每隔该参数的值保存一遍模型")])])]),s._v(" "),t("h3",{attrs:{id:"模型测试-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模型测试-2"}},[s._v("#")]),s._v(" 模型测试")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("python evaluate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("model_path "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("checkpoint2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("model_best \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("test_path "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("batch_size "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("max_seq_len "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("debug\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);