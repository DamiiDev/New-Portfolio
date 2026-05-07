import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        display: ["Bebas Neue", "cursive"],
        serif: ["Instrument Serif", "serif"],
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e8c96a",
          subtle: "rgba(201,168,76,0.12)",
        },
        ink: {
          DEFAULT: "#080b10",
          2: "#0e1219",
          3: "#141820",
        },
        parchment: "#f5f0e8",
        ash: "#7a7871",
      },

      animation: {
        fadeUp: "fadeUp 0.7s ease forwards",
        fadeIn: "fadeIn 0.7s ease forwards",
        scrollLeft: "scrollLeft 28s linear infinite",
      },

      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scrollLeft: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },

  plugins: [],
};