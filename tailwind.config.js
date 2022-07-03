module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer': "url('./img/poweredby.png')",
        'wallpaper': "url('./img/wallpaper.png')",
      },
      colors: {
        'blue1': '#21375b',
      },
    },
  },
  plugins: [],
}