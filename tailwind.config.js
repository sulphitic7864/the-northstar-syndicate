/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00B7FF",
        secondary: "#0F2B6B",
        "text-color": "#858587",
      },
    },
  },
  plugins: [],
};
