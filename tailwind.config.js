module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './docs/.vuepress/**/*.{js,jsx,ts,tsx,vue,html}',
    ],
    options: {
      safelist: [
        /data-theme$/,
      ]
    },
  },
  darkMode: false, // or 'media' or 'class'
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    // themes: false,
  },
}
