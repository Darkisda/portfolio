/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackvariant: "#191919",
      },
      backgroundImage: {
        "radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        text: "text 4s ease-in-out infinite",
        welcomeanimation: "welcometext 1.5s ease-in-out",
        pageanimation: "pagea 1s ease-in-out",
        leavemain: "exitMain 2s ease-out",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "100% 300%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "300% 100%",
            "background-position": "right center",
          },
        },
        welcometext: {
          "0%": {
            opacity: "0",
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0%)",
          },
        },
        exitMain: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        pagea: {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
