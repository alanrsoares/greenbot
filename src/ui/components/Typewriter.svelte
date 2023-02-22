<script lang="ts">
  import Typewriter from "typewriter-effect/dist/core";
  import { onMount } from "svelte";

  import { uuidv4 } from "~/lib/helpers";

  export let id = uuidv4();

  /**
   * The strings to type.
   */
  export let strings: string[] = [];

  /**
   * Whether to start typing automatically.
   */
  export let autoStart = true;

  /**
   * Whether to loop the strings.
   */
  export let loop = true;

  /**
   * Whether to persist the last string.
   */
  export let persist = false;

  export let pauseFor = 1000;

  let played = false;

  onMount(() => {
    new Typewriter(`#${id}`, {
      strings,
      loop,
      autoStart,
    })
      .start()
      .pauseFor(pauseFor)
      .callFunction(() => {
        if (persist) {
          played = true;
        }
      });
  });
</script>

{#if played}
  <div class="fade-in">{strings.at(-1)}</div>
{:else}
  <div {id} />
{/if}
