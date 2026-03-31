/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        orange: "#ff5000",
        darkGray: "#414143",
      },
      
      fontFamily: {
        primary: ['var(--font-primary)'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar'), require('tailwindcss-animate')],
};
