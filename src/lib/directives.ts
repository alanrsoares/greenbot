/**
 * Click outside directive
 * @param node - HTML element
 * @param callback - callback function
 * @returns - destroy function
 */
export function clickOutside(node: HTMLElement, callback: () => void) {
  function handleClick(event: MouseEvent) {
    if (!node.contains(event.target as Node)) {
      callback();
    }
  }

  // true: capture phase. mdn: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#parameters
  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}
