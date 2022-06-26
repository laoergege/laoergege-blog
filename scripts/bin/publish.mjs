/// <reference types="zx/build/globals" />

import 'zx/globals'
// import "../npm.js";
// import Npm from "npm/lib/npm.js";
// const Npm = import("npm/lib/npm.js")

const CONFIG = {
    scope: '@laoergege',
    registers: ['npm', 'github'],
    npm: {
        url: 'https://registry.npmjs.org/',
        tokenFlag: 'NPM_TOKEN',
        token: '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'
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

const Npm = await import("npm/lib/npm");


const config = async (scope, register, token) => {
    $.env['register'] = register
    if (scope) $.env[`npm_config_${scope}:registry`] = register

    const domian = Array.from(...register.matchAll(/(?<=\/\/)[^/]*/g))[0]
    $.env[`npm_config_//${domian}/:_authToken`] = token
}

const npmPublish = async () => {
    return $`pnpm publish --force --no-git-checks`
}

try {
    for (const name of CONFIG.registers) {
        const register = CONFIG[name]
        await config(CONFIG.scope, register.url, register.token)
        await npmPublish()
    }
} catch (p) {
    echo(`Exit code: ${p.exitCode} `)
    echo(`Error: ${p.stderr} `)
}