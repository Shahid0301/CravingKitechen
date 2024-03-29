/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Pacifico"],
        cursive2: ["Great Vibes"],
        playfair: [ "Playfair Display" ],
        oswald: [ "Oswald" ],
        Courgette: [ "Courgette" ],
        Poppins:["Poppins"]
            },
      colors: {
        "yellow-100": "#ECB159",
        "creme-100": "#EFEFEF",
        "red-Discover":"#D61C22"
      },
      backgroundImage: {
       'Discover':"url('/Images/Discover.jpg')"
      }
       
    },
    screens: {
      'xs':{'max':'431'},
      'sm': { 'max': '576px' },
      'lg': { 'min':'577px','max': '769px' }
    }
  },
  plugins: [],
};
