import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 3000,
    host: true, // Permite conexiones desde cualquier host
    strictPort: true
  },
  test: {
    globals: true,
    environment: 'jsdom', 
  },
})
