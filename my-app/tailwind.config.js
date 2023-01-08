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
    extend: {},
  },
  plugins: [],
}
