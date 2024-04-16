const BASE_URL = '/movie-quiz/';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: BASE_URL,
  plugins: [react()],
  define: {
    'import.meta.env.BASE_URL': JSON.stringify(BASE_URL),
  },
})
