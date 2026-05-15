<script lang="ts">
  import { cn } from "~/lib/cn";
  import { inputVariants, type InputVariants } from "~/ui/variants/input";

  export let value: string;
  export let variant: NonNullable<InputVariants["variant"]> = "default";
  export let size: NonNullable<InputVariants["size"]> = "md";
  /** Use native `type="search"` (static for Svelte `bind:value` rules). */
  export let search = false;
  export let placeholder = "";
  export let disabled = false;
  export let id: string | undefined = undefined;
</script>

<label
  class={cn(
    inputVariants({ variant, size }),
    typeof $$props["class"] === "string" ? $$props["class"] : "",
  )}
  for={id}
>
  {#if search}
    <input
      {id}
      type="search"
      bind:value
      {placeholder}
      {disabled}
      on:input
      on:change
      on:focus
      on:blur
    />
  {:else}
    <input
      {id}
      type="text"
      bind:value
      {placeholder}
      {disabled}
      on:input
      on:change
      on:focus
      on:blur
    />
  {/if}
</label>
