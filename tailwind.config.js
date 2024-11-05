/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        abu: '#eee'
      },
    },
  },
  plugins: [],
};