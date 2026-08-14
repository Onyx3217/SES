import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',
  base: process.env.GITHUB_PAGES ? '/SES/' : '/',
  server: { port: 5173 }
});
