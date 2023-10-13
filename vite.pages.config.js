import { defineConfig } from 'vite'

export default defineConfig({
  base: '',
  build: {
    outDir: 'gh-pages',
    rollupOptions: {
      input: './index.html',
    },
  },
})
