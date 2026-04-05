import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // SPA fallback for development
    historyApiFallback: true,
  },
  build: {
    // Ensure proper asset handling
    assetsDir: 'assets',
    // Copy public folder contents
    copyPublicDir: true,
  }
})
