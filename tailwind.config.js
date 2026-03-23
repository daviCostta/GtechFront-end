export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#C92071', 
        'dark-gray-2': '#B5B6F2', 
      },
    },
  },
  plugins: [],
}