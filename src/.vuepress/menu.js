module.exports = {
    nav: [
        {
            text: 'JavaScript',
            link: '/JavaScript/'
        },
        {
            text: '前端框架',
            items: [
                { 
                    text: 'Vue',
                    link: '/Vue/'
                },
                { 
                    text: 'React',
                    link: '/React/'
                }
            ]
        },
        {
            text: '前端工程',
            link: '/前端工程/'
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
        '/JavaScript/': [
            
        ],
        '/前端工程/': [
            
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