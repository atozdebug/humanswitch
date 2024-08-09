import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      '/ws': {
        target: 'http://192.168.29.131:8000/ws',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
