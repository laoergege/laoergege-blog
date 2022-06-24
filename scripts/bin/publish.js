/// <reference types="zx/build/globals" />

import 'zx/globals'

console.log($.env['NPM_TOKEN'], $.env['PKG_TOKEN'])
console.log($.env)

const CONFIG = {
    scope: '@laoergege',
    registers: ['npm', 'github'],
    npm: {
        url: 'https://registry.npmjs.org/',
        tokenFlag: 'NPM_TOKEN',
        token: $.env['NPM_TOKEN']
    },
    github: {
        url: 'https://npm.pkg.github.com/',
        tokenFlag: 'PKG_TOKEN',
        token: $.env['PKG_TOKEN']
    }
}

console.log(CONFIG)

const getPublishTool = () => { }

const getPackageInfo = () => { }

const checkVersion = () => { }

const config = (scope, register, token) => { 
    $.env[`npm_config_${scope}:registry`] = register
    console.log(!!token)
    if (token) {
        $.env[`${register.replace('https', '')}:_authToke`] = token
        console.log(`${register.replace('https', '')}:_authToke`, token)
    }
}

const publish = () => {
    console.log($.env['//npm.pkg.github.com/:_authToke'])
    return $`pnpm publish --force --no-git-checks`
}

try {
    for (const name of CONFIG.registers) {
        const register = CONFIG[name]
        config(CONFIG.scope, register.url, register.token)
        await publish()
    }
} catch (p) {
    console.log(`Exit code: ${p.exitCode} `)
    console.log(`Error: ${p.stderr} `)
}