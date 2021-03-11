import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

import postcss from './postcss.config';

export default defineConfig({
  css: {
    postcss,
  },
  plugins: [
    reactRefresh()
  ]
});
