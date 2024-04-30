# Markdown扩展
VitePress 带有内置的 Markdown 扩展。

## 标题锚点

## 链接
内部和外部链接都会被特殊处理。

### 内部链接

## frontmatter

```yaml
---
title: Blogging Like a Hacker
lang: en-US
---
````

此数据将可用于页面的其余部分，以及所有自定义和主题组件。

更多信息，参见 [frontmatter](./frontmatter)。

## GitHub 风格的表格

**输入**

```md
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

**输出**

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Emoji :tada: 

**输入**

```md
:tada: :100:
```

**输出**

:tada: :100:

这里可以找到所有支持的 [emoji 列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)。


