/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      niPurple: "#5E4DCD",
      niPink: "#FFD2DD",
      niGreyPrimary: "#999999",
      niGreySecondary: "#333333",
      white: "#FFFFFF"
    },
    fontFamily: {
      josefinSans: "'Josefin Sans', sans-serif"
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px"
    },
    container: {
      center: true
    }
  },
  plugins: [],
}

