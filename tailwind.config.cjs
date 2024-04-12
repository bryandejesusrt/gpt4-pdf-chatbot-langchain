/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite-react/tailwind');
module.exports = {
  content: [
    flowbite.content(),
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
  theme: {
    extend: {},
  },
};
