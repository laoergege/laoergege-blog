module.exports = {
  mode: 'jit',
  content: [
    './docs/.vuepress/**/*.{js,jsx,ts,tsx,vue,html}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'cupcake'
    ],
  },
}
