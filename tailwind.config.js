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
          lg: "900px",
          "2xl": "1080px",
        },
      },
    },
  },
  plugins: [],
};
