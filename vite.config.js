import { defineConfig } from 'vite'

export default defineConfig({
  base: '/temperature-converter/',
  test: {
    environment: 'happy-dom',
    coverage: {
      provider: 'coverage-v8',
      reporter: ['clover', 'html'],
      reportsDirectory: 'target/clover',
    },
    setupFiles: ['./test/setup.ts'],
    reporters: ['junit', 'default'],
    outputFile: './target/surefire-reports/junit.xml',
  },
})
