/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      'sm': '500px',
      'md': [
        {'min': '668px', 'max': '767px'},
        {'min': '868px'}
      ],
      'lg': '1100px',
      'xl': '1400px',
    },
  
    extend: {
      colors: {
        primary: '#fffafe',
        secondary: '#ffe6e6'
      }
    },
  },
  plugins: [],
  
}

