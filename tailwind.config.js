/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "100%",
          md: "100%",
          lg: "720px",
          xl: "720px",
          "2xl": "900px",
        },
      },
      colors: {
        grey: "#8d96a0",
      },
    },
  },
  plugins: [],
};
