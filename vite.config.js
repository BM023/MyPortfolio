import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Sets the base path for deployment (e.g., if deploying to GitHub Pages)
  base: './', 
});