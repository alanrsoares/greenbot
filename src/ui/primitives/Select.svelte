<script lang="ts">
  import { cn } from "~/lib/cn";
  import { selectVariants, type SelectVariants } from "~/ui/variants/select";

  export let value: string;
  export let variant: NonNullable<SelectVariants["variant"]> = "default";
  export let size: NonNullable<SelectVariants["size"]> = "md";
  export let disabled = false;
  export let id: string | undefined = undefined;
</script>

<label
  class={cn(
    selectVariants({ variant, size }),
    typeof $$props["class"] === "string" ? $$props["class"] : "",
  )}
  for={id}
>
  <select {id} bind:value {disabled} on:change on:focus on:blur>
    <slot />
  </select>
</label>
