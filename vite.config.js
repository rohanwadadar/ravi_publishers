import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use root base if on Vercel or in development, otherwise use /ravi_publishers/ for GitHub Pages
  base: process.env.VERCEL ? "/" : "/ravi_publishers/",
})
