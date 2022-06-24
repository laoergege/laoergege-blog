/// <reference types="zx/build/globals" />

import 'zx/globals'

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

const getPublishTool = () => { }

const getPackageInfo = () => { }

const checkVersion = () => { }

const config = (scope, register, token) => { 
    $.env[`npm_config_${scope}:registry`] = register
    if (token) {
        $.env[`${register.replace('https', '')}:_authToke`] = token
    }
}

const publish = () => {
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