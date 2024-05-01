# 在 Markdown 使用 Vue

## 模块化
### 插值语法
每个 Markdown 文件首先被编译成 HTML，然后作为 Vue 组件传递给 Vite 流程管道。这意味着可以在文本中使用 Vue 的插值语法：

**输入**
```md
{{ 1 + 1 }}
```
<script setup>
import { ref } from 'vue'

const count = ref(0)

import { useData } from 'vitepress'

const { page } = useData()
</script>

The count is: {{ count }}

::: warning

避免在 Markdown 中使用 `<style scoped>`

在 Markdown 中使用时，`<style scoped>` 需要为当前页面的每个元素添加特殊属性，这将显著增加页面的大小。当我们需要局部范围的样式时 `<style module>` 是首选。

:::


**输入**
```html
<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<pre>{{ page }}</pre>
```
**输出**

```json-vue
{{ page }}
```
## 代码块中不转移
默认情况下，代码块是受到保护的，都会自动使用 `v-pre` 包装，因此内部不会处理任何 Vue 语法。要在代码块内启用 Vue 插值语法，可以在代码语言后附加 `-vue` 后缀，例如 `js-vue`：
**输入**

```js-vue
Hello {{ 1 + 1 }}
```

## 使用CSS预处理器
VitePress 内置支持 CSS 预处理器：`.scss`、`.sass`、`.less`、`.styl` 和 `.stylus` 文件。无需为它们安装 Vite 专用插件，但必须安装相应的预处理器：



