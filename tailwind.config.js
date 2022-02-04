const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Spartan'],
        serif: ['Newsreader'],
        display: ['Spartan', 'sans-serif'],
        body: ['Newsreader', 'serif'],
      },
      colors: {
        primary: {
          blue: '#66c3ff',
          green: '#acd7b7',
          pink: '#d4afb9',
          dark: '#363732',
          white: '#f8f8f8',
          gray: '#707070',
        },
      },
    },
  },
  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },
  plugins: [require('@tailwindcss/forms'), require('daisyui')],
}
