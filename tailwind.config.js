/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bmOrange: "#FF9722",
        bmPink1: "#FF2291",
        bmPink2: "#FF6AAF",
        bmPink3: "#FE94C4",
        bmPink4: "#FEB4D6",
        bmBlue1: "#3E56FF",
        bmBlue2: "#697BFF",
        bmBlue3: "#939FFF",
        bmBlue4: "#B8C1FF",
      },
    },
  },
  plugins: [],
};
