/** @type {import('tailwindcss').Config} */
import plugn from 'flowbite/plugin'
// const plung = require('flowbite/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../node_modules/flowbite",
  ],
  theme: {
    extend: {},
  },
  plugins: [ 
    plugn
    ],
}

