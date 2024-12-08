/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      colors: {
        bg: "#ffffff",
        primary: {
          1: "#ffffff",
          2: "#363738",
        },
        secondary: {
          1: "#F5F5F5",
          2: "#FEFAF1",
          3: "#DB4444",
        },
        blue: "#CBE4E8",
        text: {
          1: "#FAFAFA",
          2: "#7D8184",
          3: "#000000",
        },
        green: { 1: "#00FF66", 2: "#EEFF61" },
      },
    },
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
      gridTemplateColumns: {
        autofit: "repeat(auto-fit, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
