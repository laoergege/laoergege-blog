module.exports = {
    nav: [
        {
            text: 'JavaScript',
            link: '/JavaScript/'
        },
        {
            text: '前端框架及库',
            items: [
                { 
                    text: 'Vue',
                    link: '/Vue/'
                },
                { 
                    text: 'React',
                    link: '/React/'
                },
                {
                    text: 'RxJS',
                    link: '/RxJS/'
                }
            ]
        },
        {
            text: '前端工程',
            link: '/前端工程/'
        },
        {
            text: '浏览器原理及API',
            link: '/浏览器原理及API/'
        },
        {
            text: 'NodeJS',
            link: '/NodeJS/'
        },
        {
            text: 'Git',
            link: '/Git/'
        }
    ],
    sidebar: {
        '/前端工程/': [
           
        ],
        '/浏览器工作原理及API/': [
            '浏览器页面渲染流程'
        ],
        '/NodeJS/': [
            '安装及基本使用',
            'Node Event Loop'
        ],
        '/Git/': [
            {
                title: 'Git 博客开发系列',
                children: [
                    '使用 GithubPage、GithubAction、VuePress 搭建个人博客',
                    '开发一个七牛图床的 GithubAction'
                ]
            }
        ]
    }
}