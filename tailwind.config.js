/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  
  theme: {
    extend: {
      keyframes:{
        floatUp:{
          "0%":{transform: "translatey(0px)"},
          "50%":{transform: "translatey(-8px)"},
          "100%":{transform: "translatey(0px)"},
        }
      },
      animation:{
        floatUp: "floatUp 2s infinite",
      },
      colors:{
        primaria:"#FF00FF",
      }
    },
  },
  plugins: [],
}

