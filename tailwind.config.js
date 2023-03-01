/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#fdd670'
      },
      backgroundImage:{
        'banner': "url('/src/assets/banner.jpg')"
      }
    },
  },
  plugins: [],
}