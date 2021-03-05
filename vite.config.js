import { defineConfig } from 'vite';

// Path
import { join } from 'path';
const resolve = (...paths) => join(__dirname, ...paths);

export default defineConfig({
  build: {
    lib: {
      entry: resolve('lib/index.ts'),
      name: 'theme-manager'
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: [ 'vue' ],
      format: [ 'es', 'umd' ],
      // 多入口文件
      /*input: {
        'index': 'lib/index.ts',
        'vue': 'lib/vue/index.ts',
      },*/
      output: {
        entryFileNames: '[name]-[format].js',
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
});