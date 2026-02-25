import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { fileURLToPath, URL } from "node:url"

export default defineConfig({
  base: "/kindergarten-ela-deck/",  // 👈 THIS LINE FIXES GITHUB PAGES
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})