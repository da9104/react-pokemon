import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config(); // load env vars from .env

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-pokemon',
  define: {
    __VALUE__: `"${process.env.API}"` // wrapping in "" since it's a string
  },
  plugins: [react()],
})
