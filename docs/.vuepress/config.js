module.exports = {
    title: 'Hello VuePress',
    description: 'Hello, my friend!',
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', { rel: 'icon', href: '/img/fav.ico' }],
    ],
    host: 'localhost',
    port: 8098,
    evergreen: true,
    //主题配置
    themeConfig: {
        // Please keep looking down to see the available options.
        nav: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Archive',
                link: '/archive/',
            },
            {
                text: 'Tags',
                link: '/tag/',
            },
        ],
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/vuejs/vuepress',
                },
                {
                    type: 'twitter',
                    link: 'https://github.com/vuejs/vuepress',
                },
            ],
        }
    }
};
