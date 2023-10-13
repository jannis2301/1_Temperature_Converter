import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: './temperature-converter/',
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
  build: {
    sourcemap: true,
    lib: {
      entry: './src/index.ts',
      formats: ['es'],
    },
  },
  plugins: [
    dts({
      include: './src',
      outDir: './dist/types',
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/component-navigation-menu-button.css',
          dest: '.',
        },
      ],
    }),
  ],
})
