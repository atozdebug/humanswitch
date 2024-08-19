import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://humanswitch-backend.onrender.com/',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      '/ws': {
        target: 'https://humanswitch-backend.onrender.com/ws',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
