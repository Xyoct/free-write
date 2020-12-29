// git push -f git@github.com:Happy-Everyday/happy-everyday.github.io.git master

module.exports = {
    title: 'My Heart, My Words',
    description: '心之所想，笔之所往',
    head: [
        ['link', { rel: 'icon', href: 'https://www.bestlifebestyue.com/static/favicon.ico' }]
    ],
    evergreen: true,
    repo: 'Happy-Everyday/free-write',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改进页面内容！',
    themeConfig: {
        nav: [
            { text: '前端一锅端', link: '/front/' },
            { text: '后端&协议', link: '/back-http/' },
            { text: '服务器相关', link: '/server-operation/' },
            { text: '工具相关', link: '/tools-about/' },
            { text: 'Github', link: 'https://github.com/Happy-Everyday/' }
        ],
        sidebar: {
            '/front/': [{
                title: '前端一锅端',
                collapsable: false,
                children: [
                    ['', '介绍'],
                    ['HTML.md', 'HTML'],
                    ['CSS.md', 'CSS'],
                    ['JS.md', 'JS'],
                    ['mini-programs.md', '小程序']
                ]
            }],
            '/back-http/': [{
                title: '后端&协议',
                collapsable: false,
                children: [
                    ['', '介绍'],
                    ['mock.md', 'mock模拟数据'],
                    ['cross-domain.md', '跨域请求']
                ]
            }],
            '/server-operation/': [{
                title: '服务器相关',
                collapsable: false,
                children: [
                    ['', '介绍'],
                    ['rsa.md', '服务器配置rsa免密登录'],
                    ['nginx.md', 'nginx安装和配置'],
                    ['vsftp.md', 'vsftp安装、配置、卸载']
                ]
            }],
            '/tools-about/': [{
                title: '工具相关',
                collapsable: false,
                children: [
                    ['', '介绍'],
                    ['git.md', 'GIT'],
                    ['idea.md', '编辑器'],
                    ['tools-websites.md', '工具网站']
                ]
            }]
        }
    }
}