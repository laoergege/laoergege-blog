console.log(Object.keys(process.env).filter(key => key.includes('npm_config')).map(key => `${key}: ${process.env[key]}`))

process.env['//registry.npmjs.org/:_authToken'] = ''