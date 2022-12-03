/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
    extend: {
      maxWidth: {
        'maxContainer' : '100% - 250px'
      },
      backgroundColor: {
        'navbar-light': '#f8f8f8'
      }
    },
  },
  plugins: [],
}
