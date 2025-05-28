import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = '/InnerBalance/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
