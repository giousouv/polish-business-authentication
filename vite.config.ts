import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
export default defineConfig({
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
  },
  server: {
    port: 5173,
  },
  plugins: [tailwindcss()],
});
