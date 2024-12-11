/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Lato', 'sans-serif'],
      },
      colors: {
        abu: '#eee',
        ya: '#222'
      },
    },
  },
  plugins: [],
};