/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        brand: '#d31b5d',
      },
    },
  },
  variants: {},
  plugins: [],
};
