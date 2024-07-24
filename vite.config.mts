import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  server: {
    port: 4500,
  },
  build: {
    outDir: "dist",
  },
});
