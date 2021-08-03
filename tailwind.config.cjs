const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
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
      },
    },
  },
  plugins: [],
};

module.exports = config;
