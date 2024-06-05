/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '',
        bg: '',
        vSmallFont: '',
        smallFont: '',
        mediumFont: ''
      },
      fontFamily: {
        b: ['', 'sans-serif'],
        s: ['', 'sans-serif'],
        m: ['', 'sans-serif'],
        r: ['', 'sans-serif'],
        l: ['', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

