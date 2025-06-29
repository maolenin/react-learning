import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isProd = command === 'build'; // Check if we are building for production (deploy)

  return {
    // Set the base path dynamically
    // For production builds (GitHub Pages), use the repo name
    // For local development, use '/'
    base: isProd ? '/react-learning/' : '/', // <--- CRITICAL CHANGE HERE!
    plugins: [react()],
    // You might need to add this if your 'preview' script requires it for local hosting
    server: {
      host: true
    }
  }
})
