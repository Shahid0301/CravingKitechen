/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Pacifico"],
        cursive2: ["Great Vibes"],
        playfair: [ "Playfair Display" ],
        oswald:["Oswald"],
      },
      colors: {
        "yellow-100": "#ECB159",
        "creme-100": "#F7EEDD",
      },
  
       
    },
    screens: {
      'xs':{'max':'431'},
      'sm': {'max': '576px'},
    }
  },
  plugins: [],
};
