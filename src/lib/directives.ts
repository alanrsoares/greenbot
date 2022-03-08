export function clickOutside(node: Node) {
  const handleClick = (event: MouseEvent) => {
    if (!node.contains(event.target as Node)) {
      node.dispatchEvent(new CustomEvent("outsideclick"));
    }
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}
