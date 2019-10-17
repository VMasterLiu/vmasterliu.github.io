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
        // 主题语言，参考下方 [主题语言] 章节
        // lang: 'zh-CN',
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
            location: 'Guangzhou, China',
            // 组织
            // organization: 'Xi\'an Jiao Tong University',
            // 头像可以为外链或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
            avatar: '/img/avatar.jpg',
        },
        //评论开启
        comments: false,
    }
};
