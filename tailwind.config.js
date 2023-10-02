/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.tsx'],

  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}

