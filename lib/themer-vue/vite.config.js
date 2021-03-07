import { defineConfig } from 'vite';

// Path
import { join } from 'path';
const resolve = (...paths) => join(__dirname, ...paths);

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src/index.ts'),
      name: 'themer-vue',
    },
    rollupOptions: {
      external: [ 'vue' ],
      output: {
        entryFileNames: "themer-vue.[format].js",
        globals: {
          vue: 'Vue'
        }
      },
    }
  },
});