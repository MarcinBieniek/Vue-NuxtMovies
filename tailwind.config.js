/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#f5f5f5',
        'gray': '#e4e4e4',
        'blue': '#379de7',
        'strongBlue': '#006AAF',
        'green': '#5ac135',
        'strongGreen': '#00A786',
        'white': '#FFFFFF',
        'red': '#c1355a',
        'lightRed': '#a85067'
      }
    },
  },
  plugins: [],
}