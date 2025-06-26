/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // mobile: '320px',
      // tablet: '430px',
      // laptop: '769px',
      // largelaptop: '1025px', 
      mobileSM: '320px',
      mobileMD: '375px',
      mobileLG: '425px',
      tablet: '768px',
      laptop: '1024px',
      laptopLG: '1440px',
      max: '2560px',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors:{

      }
    },
  },
  plugins: [],
}