/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx}",
    "./src/routes/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./public/index.html"
    
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
