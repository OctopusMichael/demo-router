import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = process.env.NODE_ENV === 'production' ? '/demo-router/' : '/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,

})
