/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(216, 31, 38)',
        white: '#ffffff',
        black: '#000000',
        red: 'rgb(216, 31, 38)',
      },
    },
  },
  plugins: [],
};
