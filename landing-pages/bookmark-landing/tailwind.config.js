/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btnPrimary: "#5368DF",
        DarkBlue: "hsl(229, 31%, 21%)",
        customGrey: "rgb(107,114,128)",
        softBlue: "#5367df",
      },
    },
  },
  plugins: [],
};
