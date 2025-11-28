import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/', // Changed from './' to '/' for proper deployment
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Ensure proper chunking
      },
    },
  },
});