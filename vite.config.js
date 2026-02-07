import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react()],
    // If we're building for GitHub Pages, we use the subfolder. 
    // Otherwise (Vercel, Local, Netlify), we use the root.
    base: mode === 'gh-pages' ? "/ravi_publishers/" : "/",
  }
})
