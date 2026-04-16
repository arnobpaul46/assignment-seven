import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // এই লাইনটির জন্যই এরর আসছিল

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})