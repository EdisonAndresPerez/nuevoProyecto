/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_navbar: '#1F4529', 
        bg_pagina: '#E8ECD7',
      },
    },
  },
  plugins: [],
};
