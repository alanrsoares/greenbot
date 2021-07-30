<script lang="ts">
  import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";

  import App from "./ui/App.svelte";

  const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>
