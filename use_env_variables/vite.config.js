import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // changed default port to 3000
  server:{
    port: 3000
  },
  // changed default build path from dist to out directory
  build:{
    outDir: "out"
  }
})
