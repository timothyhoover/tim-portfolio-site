const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        tt: '#7130AF',
        'tt-dark': '#3F2B54',
        'tt-light': '#c5b6d8',
        'tt-yellow': '#FFD522',
      },
      fontFamily: {
        theme: 'var(--font)',
        sans: ['Lato', 'sans-serif'],
        bangers: ['Bangers'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
