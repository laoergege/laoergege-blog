import type { DefaultThemeOptions } from 'vuepress-vite'

export default ({
    navbar: [
        {
            text: 'JavaScript',
            link: '/JavaScript/'
        },
        {
            text: '框架',
            children: [
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
            text: 'Web',
            children: [
                {
                    text: 'HTML&CSS',
                    link: '/HTML&CSS/'
                },
                {
                    text: 'Web API',
                    link: '/Web API/'
                },
                {
                    text: '浏览器原理',
                    link: '/浏览器原理/'
                }
            ]
        },
        {
            text: '工程化与架构',
            link: '/NodeJS/'
        },
        {
            text: 'NodeJS',
            link: '/NodeJS/'
        },
        {
            text: 'Http',
            link: '/Http/'
        },
        {
            text: 'Tags',
            link: '/JavaScript/'
        },
    ]
} as DefaultThemeOptions)