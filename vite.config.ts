import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@shared", replacement: path.resolve(__dirname, "src/shared") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      {
        find: "@entities",
        replacement: path.resolve(__dirname, "src/entities"),
      },
      {
        find: "@features",
        replacement: path.resolve(__dirname, "src/features"),
      },
      { find: "@widgets", replacement: path.resolve(__dirname, "src/widgets") },
    ],
  },
});
