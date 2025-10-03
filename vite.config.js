import { defineConfig } from "vite";

export default defineConfig({
  root: "app", 
  build: {
    outDir: "../dist", 
  },
  server: {
    port: 5151,
    open: true,
  }
});
