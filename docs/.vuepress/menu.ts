import type { DefaultThemeOptions } from 'vuepress'

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
                    text: '浏览器原理及API',
                    link: '/浏览器原理及API/'
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