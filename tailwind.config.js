/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#335b64",
        beige: "#DDC3A5",
        tan: "#E0A96D",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
