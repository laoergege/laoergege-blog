module.exports = {
    plugins: {
        'postcss-preset-env': {
            'nesting-rules': false
        },
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    }
}