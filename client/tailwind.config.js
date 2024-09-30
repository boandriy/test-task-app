/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray0: "#E3E8EF",
        gray1: "#64748B",
        gray2: "#18181B",
      },
    },
  },
  plugins: [],
};
