/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "dark-bg": "#000000",
          "light-gray": "#b3b3b3",
          "deep-blue": "#003366",
          "blue-button": "#007bff",
        },
        boxShadow: {
          "bottom-glow": "0px 0px 50px rgba(0, 0, 0, 0.8)",
        },
        backgroundImage: {
          "bottom-gradient": "linear-gradient(to top, #001f3f, transparent)",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  };
  