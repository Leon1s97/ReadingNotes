# Markdown 标题语法
\# Heading Level 1  可以在文本下方添加任意数量的 == 号来标识一级标题

\#\# Heading Level 2  -- 号来标识二级标题

\#\#\# Heading Level 3

\#\#\#\# Heading Level 4

\#\#\#\#\# Heading Level 5

\#\#\#\#\#\# Heading Level 6

不同的 Markdown 应用程序处理 # 和标题之间的空格方式并不一致。为了兼容考虑，请用一个空格在 # 和标题之间进行分隔。

# Markdown 段落语法
要创建段落，请使用空白行将一行或多行文本进行分隔。
不要用空格（spaces）或制表符（ tabs）缩进段落。

# Markdown 段落语法
在一行的末尾添加两个或多个空格，然后按回车键,即可创建一个换行。

# Markdown 强调语法
## 粗体（Bold）
要加粗文本，请在单词或短语的前后各添加两个星号（asterisks）或下划线（underscores）。  
如需加粗一个单词或短语的中间部分用以表示强调的话，请在要加粗部分的两侧各添加两个星号（asterisks）。  
Markdown 应用程序在如何处理单词或短语中间的下划线上并不一致。为兼容考虑，在单词或短语中间部分加粗的话，请使用星号（asterisks）。

Love **is** bold

## 斜体（Italic）
要用斜体显示文本，请在单词或短语前后添加一个星号（asterisk）或下划线（underscore）。  
要斜体突出单词的中间部分，请在字母前后各添加一个星号，中间不要带空格。
要同时用粗体和斜体突出显示文本，请在单词或短语的前后各添加三个星号或下划线。  
要加粗并用斜体显示单词或短语的中间部分，请在要突出显示的部分前后各添加三个星号，中间不要带空格。  

## 粗体（Bold）和斜体（Italic）
要同时用粗体和斜体突出显示文本，请在单词或短语的前后各添加三个星号或下划线。  
要加粗并用斜体显示单词或短语的中间部分，请在要突出显示的部分前后各添加三个星号，中间不要带空格。

# Markdown 引用语法
要创建块引用，请在段落前添加一个 > 符号。
> Dorothy followed her through many of the beautiful rooms in her castle.

## 多个段落的块引用
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

## 嵌套块引用
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

## 带有其它元素的块引用
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.


# Markdown 列表语法
## 有序列表
要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是列表应当以数字 1 起始。
1. First item
2. Second item
3. Third item
4. Fourth item 

## 无序列表
要创建无序列表，请在每个列表项前面添加破折号 (-)、星号 (*) 或加号 (+) 。缩进一个或多个列表项可创建嵌套列表。
- First item
- Second item
- Third item
- Fourth item 

# Markdown 代码语法
要将单词或短语表示为代码，请将其包裹在反引号 (`) 中。  

At the command prompt, type `nano`.

## 转义反引号
如果你要表示为代码的单词或短语中包含一个或多个反引号，则可以通过将单词或短语包裹在双反引号(``)中。  

``Use `code` in your Markdown file.``

## 代码块
要创建代码块，请将代码块的每一行缩进至少四个空格或一个制表符。  

    <html>
        <head>
        </head>
    </html>
  
# Markdown 分隔线语法
要创建分隔线，请在单独一行上使用三个或多个星号 (***)、破折号 (---) 或下划线 (___) ，并且不能包含其他内容。为了兼容性，请在分隔线的前后均添加空白行。

---


# Markdown 链接语法
链接文本放在中括号内，链接地址放在后面的括号中，链接title可选。  

超链接Markdown语法代码：`[超链接显示名](超链接地址 "超链接title")`

对应的HTML代码：`<a href="超链接地址" title="超链接title">超链接显示名</a>`


## 给链接增加 Title
链接title是当鼠标悬停在链接上时会出现的文字，这个title是可选的，它放在圆括号中链接地址后面，跟链接地址之间以空格分隔。  

这是一个链接 [Markdown语法](https://markdown.com.cn "最好的markdown教程")。  

## 网址和Email地址  

<http://www.baidu.com>

## 带格式化的链接
I love supporting the **[EFF](https://eff.org)**.  
This is the *[Markdown Guide](https://www.markdownguide.org)*.  
See the section on [`code`](#code).

##  引用类型链接
引用样式链接是一种特殊的链接，它使URL在Markdown中更易于显示和阅读。  
参考样式链接分为两部分：与文本保持内联的部分以及存储在文件中其他位置的部分，以使文本易于阅读。

# Markdown 图片语法
要添加图像，请使用感叹号 (!), 然后在方括号增加替代文本，图片链接放在圆括号里，括号里的链接后可以增加一个可选的图片标题文本。
插入图片Markdown语法代码：`![图片alt](图片链接 "图片title")`。  
对应的HTML代码：`<img src="图片链接" alt="图片alt" title="图片title">`

![这是图片](/assets/img/philly-magic-garden.jpg "Magic Gardens")

## 链接图片
给图片增加链接，请将图像的Markdown 括在方括号中，然后将链接添加在圆括号中。  
[![沙漠中的岩石图片](/assets/img/shiprock.jpg "Shiprock")](https://markdown.com.cn)

# Markdown 转义字符语法
要显示原本用于格式化 Markdown 文档的字符，请在字符前面添加反斜杠字符 \ 。

# Markdown 内嵌 HTML 标签
对于 Markdown 涵盖范围之外的标签，都可以直接在文件里面用 HTML 本身。  
如需使用 HTML，不需要额外标注这是 HTML 或是 Markdown，只需 HTML 标签添加到 Markdown 文本中即可。  

## 行级內联标签
HTML 的行级內联标签如 `<span>`、`<cite>`、`<del>` 不受限制，可以在 Markdown 的段落、列表或是标题里任意使用。依照个人习惯，甚至可以不用 Markdown 格式，而采用 HTML 标签来格式化。例如：如果比较喜欢 HTML 的 `<a>` 或 `<img>` 标签，可以直接使用这些标签，而不用 Markdown 提供的链接或是图片语法。当你需要更改元素的属性时（例如为文本指定颜色或更改图像的宽度），使用 HTML 标签更方便些。  

This **word** is bold. This <em>word</em> is italic.

##  区块标签
区块元素──比如 `<div>`、`<table>`、`<pre>`、`<p>` 等标签，必须在前后加上空行，以便于内容区分。而且这些元素的开始与结尾标签，不可以用 tab 或是空白来缩进。Markdown 会自动识别这区块元素，避免在区块标签前后加上没有必要的 `<p>` 标签。
