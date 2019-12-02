import tailwindcss from "tailwindcss";

export const plugins = [
  tailwindcss("./src/ui/tailwind.js"),
  require("autoprefixer")
];
