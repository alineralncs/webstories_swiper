/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '67': '67.5rem',
      },
      height: {
        '120': '120rem'
      },
      fontFamily: {
        title: 'aura',
      },
    },
  },
  plugins: [],
}

