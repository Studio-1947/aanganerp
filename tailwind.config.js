/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aangan-green': '#2F5C55',
        'aangan-orange': '#F4A261',
        'aangan-light-green': '#E8F3F1',
        'aangan-dark': '#1A1A2E',
      },
      fontFamily: {
        'heading': ['Sora', 'sans-serif'],
        'body': ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
