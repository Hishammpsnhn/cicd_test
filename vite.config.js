import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Important for testing React components
    setupFiles: './src/setUpTests.js', // Optional: for setup configurations
  },
});
