/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     fontFamily: {
      'nova-flat': '"Nova Flat"',
      'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors:{
        'black-rgba': 'rgba(0,0,0,0.3)'
      },
      spacing: {
        '2/3': '66.666667%'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
