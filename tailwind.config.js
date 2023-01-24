/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:'576px',
      md:'768px',
      lg:'992px',
      xl:'1200px'
    },
    container:{
      center:true,
      padding:'1rem'
    },
    extend: {
      colors:{
        primary:"#EC4899",
        secondary:"#1B1464"
      },
      backgroundImage: {
        'hero': "url('../public/images/banner-bg.jpg')",
        'banner1':"url('../public/images/banner.jpeg')",
        'banner2':"url('../public/images/banner1.jpeg')",
        'banner3':"url('../public/images/banner2.jpeg')",
      },
      fontFamily:{
        'poppins':['Poppins'],
        'roboto':['Roboto']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
