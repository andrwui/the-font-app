import path from 'path'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // Map all imports directly from "src" without any prefix
      '/': `${path.resolve(__dirname, 'src')}`,
    },
  },
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
  ],
})
