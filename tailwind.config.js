/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#347928',
      secondary: '#C0EBA6',
      dark: '#2c3e50',
      light: '#FFFBE6',
      error: '#FF0000',
      background: "#f3f1f1dc",
      rate: "#fde047",
    }
  },
  plugins: [],
}