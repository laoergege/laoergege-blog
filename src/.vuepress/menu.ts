export default {
    navbar: [
        {
            text: 'Category',
            link: '/JavaScript/'
        },
        {
            text: 'About Me',
            link: 'https://github.com/laoergege'
        },
    ],
    sidebar: {
        '/数据结构与算法/': [
           
        ],
        '/前端工程化/': [
           
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
        ],
        '/Vue/': [

        ]
    }
}