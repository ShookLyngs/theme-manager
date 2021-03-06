import { defineConfig } from 'vite';

// Path
import { join } from 'path';
const resolve = (...paths) => join(__dirname, ...paths);

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src/index.ts'),
      name: 'themer-react',
    },
    rollupOptions: {
      external: [ 'react', 'lodash' ],
      output: {
        entryFileNames: "themer-react.[format].js",
        globals: {
          react: 'React',
          lodash: 'lodash',
        }
      },
    }
  },
});