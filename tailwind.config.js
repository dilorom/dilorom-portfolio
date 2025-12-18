// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glowShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.2", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(1.02)" },
        },
      },
      animation: {
        glowShift: "glowShift 15s linear infinite",
        glowPulse: "glowPulse 8s ease-in-out infinite",
      },
      backgroundSize: {
        "200%": "200% 200%", // important for moving gradient
      },
    },
  },
  plugins: [],
};
