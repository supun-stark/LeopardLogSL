/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      titlefont : ["Platypi", "serif"],
      captionfont : ["Dancing Script","serif"], 
    },
    backgroundImage: {
      'leopard': "url('/src/assets/leopard59.png')",
    },
  },
  plugins: [],
}

