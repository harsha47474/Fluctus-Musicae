import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tailwind v4 works as a Vite plugin, not a PostCSS plugin
  ],
  server: {
    // In development, forward any request that starts with /api to the backend.
    // This avoids browser CORS preflight errors during development.
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})
