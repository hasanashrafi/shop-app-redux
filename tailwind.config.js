/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#233266', // Dark Blue
        secondary: '#C0EBA6', // Light Green
        background: '#e9f9f9', // Light Background
        light: '#FFFBE6', // Light Yellow
        dark: '#2c3e50', // Dark Gray
        error: {
          DEFAULT: '#ff0000', // Red
          light: '#ffcccc', // Light Red
          medium: '#ff6666', // Medium Red
          dark: '#990000', // Dark Red
        },
        rate: '#fde047', // Yellow for ratings
        accent: '#6C2BD9', // Accent Purple
        muted: '#f8f6fa', // Muted Background
        text: {
          light: '#ffffff', // White text
          dark: '#333333', // Dark text
        },
        border: '#e9e9e9', // Light Border
      },
      boxShadow: {
        light: '0 1px 3px rgba(0, 0, 0, 0.1)',
        medium: '0 1px 5px rgba(0, 0, 0, 0.2)',
        dark: '0 1px 10px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}