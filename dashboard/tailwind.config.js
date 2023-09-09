/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#98CE00",
        background: "#12111F",
        customText: "#F9FAFB",
        error: "#E62314",
      },
    },
  },
  plugins: [],
}

