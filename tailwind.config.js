/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FC575E',
        secondary: '#F7B42C',
        'grey-light-1': '#f9f5f3', //Light background
        'grey-light-2': '#f2efee', // Light lines
        'grey-light-3': '#d3c7c3', // Light text (placeholder)
        'grey-dark-1': '#615551', // Normal text
        'grey-dark-2': '#918581', // Lighter text
        pink: '#f48982',
      },
    },
    fontFamily: {
      Nunito: ['Nunito Sans, sans-serif'],
    },
    screens: {
      xxs: '320px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
