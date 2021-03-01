import { defineConfig } from 'vite';
//import vue from '@vitejs/plugin-vue';

// Path
import { join } from 'path';
const resolve = (...paths) => join(__dirname, ...paths);

export default defineConfig({
  build: {
    lib: {
      entry: resolve('lib/index.js'),
      name: 'theme-manager'
    },
    rollupOptions: {
      // 入口文件位置
      input: {
        vue: resolve('demo/vue/index.html'),
        react: resolve('demo/react/index.html'),
      },
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
});
