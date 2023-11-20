/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "stencil":['Saira Stencil One','sans-serif'],
        "saira": ["Saira","sans-serif"]
      }
    },
    colors:{
      dark:"#737380",
      white:"#FFF",
      bgGrey:"#F0F0F5",
      textGrey:"#5D5D6D",
      inputGrey:"#F3F5F6",
      textDark:"#41414D",
      blue:"#115D8C"

    },
    backgroundImage:{
      "searchIcon":"url('/search-loupe.svg')",
      "cartIcon" : "url('/shopping-bag-white.svg')"
      
    }
    
  },
  plugins: [],
}

