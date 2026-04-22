import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Prevent hashing for SSR entry point
        entryFileNames: '[name].js',
      }
    }
  }
})
