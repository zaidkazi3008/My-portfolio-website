/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#5E3BEE",
        "headingcolor": "#282938",
        "bgShade": "#f5fcff",
        "dribble": "#E62872",
        "body": "#1C1E53",
      }
    },
  },
  plugins: [],
}

