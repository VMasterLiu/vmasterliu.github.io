---
title: VuePress 搭建博客以及部署到 Github Pages
date: 2019-10-21
category: vuepress
tags: 
  - tool
  - vue
---

这是第一篇博客，记录如何使用 `VuePress` 配合博客主题来搭建此博客。

::: tip

现在，开始吧

:::

<!-- more -->

## VuePress

根据`VuePress`官网的介绍：

>  VuePress 由两部分组成：第一部分是一个[极简静态网站生成器](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core)，它包含由 Vue 驱动的[主题系统](https://vuepress.vuejs.org/zh/theme/)和[插件 API](https://vuepress.vuejs.org/zh/plugin/)，另一个部分是为书写技术文档而优化的[默认主题](https://vuepress.vuejs.org/zh/theme/default-theme-config.html)，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。 

随着`vuepress 1.x`的发布，增加了插件`API`和博客主题，此时`VuePress`已经不仅可以用来作为展示技术文档，也可以结合自定义的主题成为适合自己的博客。

### 安装使用

首先初始化一个文件夹，我们就叫`vuepress-blog`，进入该文件夹

```sh
mkdir vuepress-blog
cd vuepress-blog
```

初始化我们的博客项目

```sh
npm init -y
```

会生成一个`package.json`文件，把其中的`scripts`改为

```json
"scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
}
```

接下来安装相关主题，这里使用的是`vuepress-theme-meteorlxy`，不需要全局安装`vueprss`，在这里安装即可

```sh
npm install vuepress vuepress-theme-meteorlxy -D	
```

安装完成后的目录结构是这样的

```
.
|-- node_modules
|-- package-lock.json
`-- package.json
```

 VuePress 遵循 **“约定优于配置”** 的原则，推荐的目录结构如下： 

```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

:::  warning 提醒

目录结构的命名区分大小写，相关目录说明如下

:::

- `docs/.vuepress`: 用于存放全局的配置、组件、静态资源等。
- `docs/.vuepress/components`: 该目录中的 Vue 组件将会被自动注册为全局组件。
- `docs/.vuepress/theme`: 用于存放本地主题。
- `docs/.vuepress/styles`: 用于存放样式相关的文件。
- `docs/.vuepress/styles/index.styl`: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
- `docs/.vuepress/styles/palette.styl`: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
- `docs/.vuepress/public`: 静态资源目录。
- `docs/.vuepress/templates`: 存储 HTML 模板文件。
- `docs/.vuepress/templates/dev.html`: 用于开发环境的 HTML 模板文件。
- `docs/.vuepress/templates/ssr.html`: 构建时基于 Vue SSR 的 HTML 模板文件。
- `docs/.vuepress/config.js`: 配置文件的入口文件，也可以是 `YML` 或 `toml`。
- `docs/.vuepress/enhanceApp.js`: 客户端应用的增强。

所以，按照官方推荐的目录结构，在`vuepress-blog`目录下新建`docs`文件夹，再在`docs`下新建`.vuepress`和`_posts`两个文件夹，在`.vuepress`下新建`config.js`，结构如下

```
docs
|-- .vuepress
|   `-- config.js
`-- _posts
```

这样一个基本的博客框架算是完成了，通过对上述`config.js`的配置就可以实现自己的个性化设置

<details>
<summary><font color="blue">点击查看我的配置</font></summary>

```js
module.exports = {
    title: 'ByteCoding',
    description: 'This is my blog',
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', { rel: 'icon', href: '/img/fav.ico' }],
    ],
    host: 'localhost',
    port: 8098,
    evergreen: true,
    // 网站语言
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    // 使用的主题
    theme: 'meteorlxy',
    themeConfig: {
        // 主题语言
        // lang: 'zh-CN',
        // 可以自定义想要的文本翻译
        lang: Object.assign(require('vuepress-theme-meteorlxy/lib/langs/zh-CN'), {
            home: '欢迎来到我的首页',
        }),
        nav: [
            { text: '首页', link: '/', exact: true },
            { text: '文章', link: '/posts/', exact: false },
        ],
        // 分页配置 (可选)
        pagination: {
            perPage: 5,
        },
        // 默认页面（可选，默认全为 true）
        defaultPages: {
            // 是否允许主题自动添加 Home 页面 (url: /)
            home: true,
            // 是否允许主题自动添加 Posts 页面 (url: /posts/)
            posts: true,
        },
        // 是否显示文章的最近更新时间
        lastUpdated: true,
        // 上方 header 的相关设置 (可选)
        header: {
            // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
            background: {
                // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
                // url: '/assets/img/bg.jpg',
                // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
                useGeo: true,
            },
            // 是否在 header 显示标题
            showTitle: true,
        },
        // 个人信息卡片相关设置 (可选)
        infoCard: {
            // 卡片 header 的背景，可以使用图片，或者随机变化的图案（geopattern）
            headerBackground: {
                // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
                // url: '/assets/img/bg.jpg',
                // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
                useGeo: true,
            },
        },
        // 个人信息
        personalInfo: {
            // 昵称
            nickname: 'paulf',
            // 个人简介 (支持 HTML)
            description: 'Coding Life',
            // 电子邮箱
            email: 'xxxx@foxmail.com',
            // 所在地
            location: 'XXXXX, China',
            // 组织
            // organization: 'Xi\'an Jiao Tong University',
            // 头像可以为外链或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
            avatar: '/img/avatar.jpg',
        },
        //评论是否开启
        comments: false,
    }
};
```

</details>

上述配置中指定了图片，所以需要在`.vuepress`文件夹中新建对应的结构并添加相关图片

开发模式运行

```sh
npm run dev
```

由于配置中指定了端口，所以运行`http://localhost:8089`就可以查看了

其他的配置可以去[VuePress官网](https://vuepress.vuejs.org/zh/config/)具体查看
