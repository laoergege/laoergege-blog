## 认识 browserslist
记录当前使用的目标浏览器和Node版本，用于不同的前端开发工具，例如
* [Autoprefixer]
* [Babel]
* [postcss-preset-env]
* [eslint-plugin-compat]
* [stylelint-no-unsupported-browser-features]
* [postcss-normalize]
* [obsolete-webpack-plugin]

Developers set versions list in queries like last 2 version to be free from updating versions manually. Browserslist will use Can I Use data for this queries.

Browserslist will take queries from tool option, browserslist config, .browserslistrc config, browserslist section in package.json or environment variables.

怎么使用
