/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {  fontFamily: {
      'cursive': [ "Pacifico" ],
      'cursive2':["Great Vibes"]
    },
    textColor: {
      'yellow-100':'#C99A11'
    }},
  
  },
  plugins: [],
};
