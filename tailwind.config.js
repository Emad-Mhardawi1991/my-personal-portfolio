module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary_dark: '#1d1d1d', 
        secondary_dark:'#171717',
        gray_light:'#D9D9D9',
        primary_green:'#45C4B0'
      },

      fontFamily: {
        Road_Rage:[
          'Road Rage', 'cursive'
        ]
      }
    },
  },
  plugins: [],
}
