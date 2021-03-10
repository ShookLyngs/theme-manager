import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh'

// Path
import { join } from 'path';
const resolve = (...paths) => join(__dirname, ...paths);

export default defineConfig({
  plugins: [
    reactRefresh()
  ]
});
