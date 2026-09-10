import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  base: "/rg-servicios-asociados/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), "index.html"),
        faq: resolve(process.cwd(), "preguntas-frecuentes/index.html"),
      },
    },
  },
});
