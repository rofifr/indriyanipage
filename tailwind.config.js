/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        secondary: "#00473e",
        tertiary: "#fa5246",
        dark: "#071108",
        darkgreen: "#131D14",
        woman1: "#FFFAF0",
        woman2: "#F6D8D9",
      },
      screens: {
        "2xl": "1320px",
      },

      keyframes: {
        myAnim: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-25px)" },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        myAnim: "myAnim 3s linear 0s infinite alternate forwards",
        typing: "typing 5s steps(32) infinite alternate, blink .4s infinite",
      },

      fontFamily: {
        sans: ["Reenie Beanie"],
      },
      boxShadow: {
        custom: "inset 0 -2px 0 0 rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
