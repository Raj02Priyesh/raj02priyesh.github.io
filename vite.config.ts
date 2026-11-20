import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Served from the root of https://raj02priyesh.github.io/ (a GitHub Pages user site).
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
