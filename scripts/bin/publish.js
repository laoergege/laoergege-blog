/// <reference types="zx/build/globals" />

import 'zx/globals'
// import { npmPublish } from "@jsdevtools/npm-publish";

// const result = await $`pwd`
// $.cwd = result.stdout
echo('Current Working:', await $`pwd`)

const SCOPE = '@laoergege'
const NPM_TOKEN = $.env['NPM_TOKEN']
const PKG_TOKEN = $.env['PKG_TOKEN']

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

const publish = (scope, register, token) => {
    $.env[`npm_config_${scope}:registry`] = register
    if (token) {
        $.env[`${register.replace('https', '')}:_authToke`] = token
    }

    return $`pnpm publish --force --no-git-checks`
}


try {
    for (const name of CONFIG.registers) {
        const register = CONFIG[name]
        await publish(CONFIG.scope, register.url, register.token)
    }
} catch (p) {
    console.log(`Exit code: ${p.exitCode} `)
    console.log(`Error: ${p.stderr} `)
}