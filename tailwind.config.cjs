/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        accent: '#6f5cff',
        surface: '#f8fafc'
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  },
  plugins: [],
}
