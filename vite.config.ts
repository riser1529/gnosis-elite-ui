import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { 
      entry: "server",
      // This tells TanStack Start to crawl your routes and output static index.html pages
      prerender: {
        routes: ["/"], 
      }
    },
  },
});