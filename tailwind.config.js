/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': {
          200: '#66d6b4',
          500: '#00df9a',
        },
        'default-black': '#000300'
      }
    },
  },
  plugins: [],
}

