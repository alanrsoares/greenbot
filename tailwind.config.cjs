/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig}
 */
const config = {
  content: ["./index.html", "./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: "'Fira Mono', mono",
        sans: "'Fira Mono', mono",
      },
      colors: {
        "aero-blue": "#d7fff1",
        "granny-smith-apple": "#aafcb8",
        "granny-smith-apple-2": "#8cd790",
        "green-sheen": "#77af9c",
        "castleton-green": "#285943",
        npm: "#cb3837",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0.1,
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
