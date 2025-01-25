import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'pages/main.html'
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/react')
    }
  }
})
