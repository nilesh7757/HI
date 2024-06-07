import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  output: "export",
  server: {
    host: '0.0.0.0', // This allows Vite to listen on all addresses, including your local network
    port: 3000,
  },
})
