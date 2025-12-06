import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for assets to ensure they load on GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});