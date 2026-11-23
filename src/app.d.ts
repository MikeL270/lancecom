import type { HTMLAttributes } from 'svelte/elements';

declare global {
  namespace svelteHTML {
    interface IntrinsicElements {
      'shield-font': HTMLAttributes<HTMLElement>;
    }
  }
}

export {};
