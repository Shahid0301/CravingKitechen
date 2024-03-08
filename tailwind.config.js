/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {  fontFamily: {
      'cursive': [ "Pacifico" ],
      'cursive2': [ "Great Vibes" ],
      'playfair':["Playfair Display"]
      },
      colors: {
        'yellow-100':"#c99A11"
      }
    },
  
  },
  plugins: [],
};
