/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'nvim-bg': '#0d0f18',
        'nvim-fg': '#a5b6cf',
        'nvim-gray': '#8b9aaf',
        'nvim-blue': '#86aaec',
        'nvim-green': '#90ceaa',
        'nvim-statusline': '#242a43',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
