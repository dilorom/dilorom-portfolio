export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: ["Sora", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#2563eb", // blue-600
          dark: "#60a5fa",  // blue-400
        },
      },
    },
  },
  plugins: [],
};
