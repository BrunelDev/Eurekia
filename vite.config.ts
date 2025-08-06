import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import tailwind from "tailwindcss";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        lossless: true,
      },
      avif: {
        lossless: true,
      },
    }),
  ],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
