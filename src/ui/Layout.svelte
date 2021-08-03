<script lang="ts">
</script>

<div class="min-h-screen bg-gray-800 text-granny-smith-apple pt-12">
  <div
    class="flex w-full justify-center border-2 border-granny-smith-apple m-auto rounded-xl max-w-xl mx-auto"
  >
    <pre
      class="px-6 font-mono">
        {`
8""""8                        8""""8              
8    " eeeee  eeee eeee eeeee 8    8   eeeee eeeee
8e     8   8  8    8    8   8 8eeee8ee 8  88   8  
88  ee 8eee8e 8eee 8eee 8e  8 88     8 8   8   8e 
88   8 88   8 88   88   88  8 88     8 8   8   88 
88eee8 88   8 88ee 88ee 88  8 88eeeee8 8eee8   88 
        `}
      </pre>
  </div>
  <main class="grid place-items-center py-12 w-full max-w-xl mx-auto">
    <slot />
  </main>
</div>
