import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssMinify: false, // Disable minification for debugging
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-router-dom')) {
            return "vendor";
          };
          if (id.includes("node_modules/react")) return "react";
          if (id.includes("node_modules/@mui")) return "mui";
          if (id.includes("node_modules/framer-motion")) return "motion";
          if (id.includes('node_modules')) {
            return 'vendor'; // Move all node_modules dependencies to 'vendor' chunk
          };
        }
      }
    }
  }
});