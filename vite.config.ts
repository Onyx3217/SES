import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Détect GitHub Pages depuis l'URL du repository ou l'environnement CI
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.CI === 'true';
const base = isGitHubPages ? '/SES/' : '/';

export default defineConfig({
  plugins: [react()],
  root: '.',
  base: base,
  server: { port: 5173 }
});
