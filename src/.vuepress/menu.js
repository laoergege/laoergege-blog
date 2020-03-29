module.exports = {
    nav: [
        {
            text: 'JavaScript',
            link: '/JavaScript/'
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
        '/NodeJS/': [
            'Node Event Loop'
        ],
        '/Git/': [
            {
                title: 'Git 博客开发系列',
                children: [
                    ['/使用 GithubPage、GithubAction、VuePress 搭建个人博客']
                ]
            },
            'GithubAction'
        ]
    }
}