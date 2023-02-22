import "./app.postcss";
import Main from "./Main.svelte";

const target = document.getElementById("app");

if (!target) {
  throw new Error("Could not find target element");
}

const app = new Main({ target });

export default app;
