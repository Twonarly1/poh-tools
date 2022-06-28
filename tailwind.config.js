module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FFAD33',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
