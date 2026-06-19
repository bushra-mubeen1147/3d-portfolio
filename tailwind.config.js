/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#05050a",
        darkCard: "#0b0b18",
        darkCardAlt: "#111827",
        darkBorder: "#1b1b2f",
        neonViolet: "#8b5cf6",
        neonTeal: "#06b6d4",
        neonCyan: "#00d9ff",
        neonPink: "#ec4899",
        neonBlue: "#3b82f6",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        neonGlow: "0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.2)",
        tealGlow: "0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.2)",
        cyanGlow: "0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.2)",
        glassEffect: "0 8px 32px rgba(31, 38, 135, 0.15)",
      },
      backdropFilter: {
        glass: "blur(10px)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 3s ease-in-out infinite",
        slide: "slide 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      opacity: {
        glass: "0.1",
      },
    },
  },
  plugins: [],
}
