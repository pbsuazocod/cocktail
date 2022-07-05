module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer': "url('./img/poweredby.png')",
        'wallpaper': "url('./img/wallpaper.png')",
        'selection': "url('./img/background_selection2.png')",
        'homescreen': "url('./img/background_homescreen.jpg')",
      },
      colors: {
        'blue1': '#21375b',
      },
    },
  },
  plugins: [],
}