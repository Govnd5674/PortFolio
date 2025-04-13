/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        royalOrange: "#804D3E",
      },
      fontFamily: {
        Mogra: ["Mogra", "system-ui"],
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in",
        gradient: "gradient 8s linear infinite",
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      transitionProperty: {
        all: "all",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        0: "0ms",
        300: "300ms",
        500: "500ms",
      },
      screens: {
        hd: "1280px", // 720p
        fhd: "1920px", // 1080p
        "2k": "2560px", // 1440p
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover", "focus"],
      opacity: ["group-hover"],
    },
  },
  plugins: [],
};
