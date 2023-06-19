/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Bree Serif", 'sans-serif']
    },
    extend: {
      colors: {
        'hijau-telur-asin': '#43ADB7',
        'abu-abu': '#EEEEEE',
        'abu-abu-hover': '#BCBCBC',
        'warna-link': '#63BBC3',
        'warna-hover': '#478C93',
        'warna-hover-lagi': '#2B5155',
        'warna-bg-search': '#F5F5F5',
      },
    },
  },
  plugins: [],
}

