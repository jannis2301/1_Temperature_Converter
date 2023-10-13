import { defineConfig } from 'vite'

export default defineConfig({
  base: '',
  build: {
    outDir: 'github-page',
    rollupOptions: {
      input: './index.html',
    },
  },
})
