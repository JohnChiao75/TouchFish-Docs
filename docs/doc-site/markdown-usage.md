# TouchFish-Docs Markdown 语法

本页面展示 TouchFish 文档站点中使用到的一些 Markdown 语法示例，供参考。

## 基础 Markdown 语法

TouchFish 文档站点支持标准的 Markdown 语法，详情请参考 [Markdown Guide](https://markdown.com.cn/basic-syntax/)。

## 链接

TouchFish 文档站点支持标准的 Markdown 链接语法。
对于支持的网站，会自动添加对应的图标

**示例输入**
```md
[TouchFish 官网](https://touchfish.xin)
[GitHub](https://github.com)
[Gitee](https://gitee.com)
[Luogu](https://www.luogu.com.cn)
[QQ](https://qq.com)
[BiliBili](https://www.bilibili.com)
```
**示例输出**

[TouchFish 官网](https://touchfish.xin)

[GitHub](https://github.com)

[Gitee](https://gitee.com)

[Luogu](https://www.luogu.com.cn)

[QQ](https://qq.com)

[BiliBili](https://www.bilibili.com)

支持添加图标的网站列表：
- touchfish.xin
- github.com
- gitee.com
- luogu.com.cn
- qq.com
- bilibili.com
- dart.dev
- nodejs.org
- python.org
- kotlinlang.org

本功能由[@ILoveScratch2](https://github.com/ILoveScratch2)实现！

## 链接卡片

TouchFish 文档站点支持使用链接卡片组件来展示链接。

**示例输入**
```md
<Linkcard url="https://luogu.com.cn/" title="洛谷" description="洛谷（中国站）" logo="https://fecdn.luogu.com.cn/luogu/logo-single.png"/>
```
**示例输出**
<Linkcard url="https://luogu.com.cn/" title="洛谷" description="洛谷（中国站）" logo="https://fecdn.luogu.com.cn/luogu/logo-single.png"/>

## 记号笔/荧光笔

TouchFish 文档站点支持使用记号笔/荧光笔语法来突出显示文本。

**示例输入**
```md
<sapn class="marker-text">记号笔</sapn>
<span class="marker-evy">荧光笔</span>
```
**示例输出**
<sapn class="marker-text">记号笔</sapn>
<span class="marker-evy">荧光笔</span>


## 高亮

TouchFish 文档站点使用 [Shiki](https://github.com/shikijs/shiki) 提供语法高亮功能，并支持行高亮等特性。

**示例输入**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**示例输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义提示块

**示例输入**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**示例输出**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## Frontmatter

TouchFish 文档站点支持在 Markdown 文件的开头使用 Frontmatter 来定义页面的元数据。
**示例输入**

```md
---
title: "示例页面"
description: "这是一个示例页面的描述"
---
```

更多信息请参考 [Frontmatter 文档](https://jekyllrb.com/docs/front-matter/)。


## 转换 Emoji 

TouchFish 文档站点支持将文本中的 Emoji 符号转换为对应的图标。
**示例输入**
```md
Hello, world! :smile:
```
**示例输出**

Hello, world! :smile:

支持的 Emoji 列表请参考 [Emojis](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)。

## 提示

TouchFish 文档站点支持在文本中使用提示语法来强调某些内容。
**示例输入**
```md
> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

```

**示例输出**
> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.


## Diff Code Blocks

添加 `// [!code --]` 或 `// [!code ++]` 注释到某一行将创建该行的差异，同时保留代码块的颜色。

**示例输入**
```md
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```
**示例输出**

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

## Warning/Error Code Blocks

在某一行添加 `// [!code warning]` 或 `// [!code error]` 注释将会为该行相应的着色。

**示例输入**
```md
export default {
  data () {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

**示例输出**

```js
export default {
  data () {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

## Code 组

可以像这样对多个代码块进行分组：

**示例输入**
````md
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::
````

**示例输出**
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

## 数学

TouchFish 文档站点支持使用 LaTeX 语法编写数学公式。

**示例输入**
```md
行内公式示例：$E=mc^2$

块级公式示例：
$$
\int_a^b f(x) \,dx = F(b) - F(a)
$$
```
**示例输出**
行内公式示例：$E=mc^2$

块级公式示例：
$$
\int_a^b f(x) \,dx = F(b) - F(a)
$$

