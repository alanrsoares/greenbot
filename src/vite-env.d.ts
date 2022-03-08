/// <reference types="svelte" />
/// <reference types="vite/client" />

declare namespace svelte.JSX {
  interface DOMAttributes<T> {
    onoutsideclick?: CompositionEventHandler<T>;
  }
}
