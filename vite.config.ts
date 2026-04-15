import { readdirSync, existsSync } from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// Detecta automáticamente todas las campañas en campaigns/ (excluye _template)
function getCampaignEntries(): Record<string, string> {
  const campaignsDir = resolve(process.cwd(), 'campaigns');
  const entries: Record<string, string> = {};

  if (!existsSync(campaignsDir)) return entries;

  readdirSync(campaignsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('_'))
    .forEach((d) => {
      const htmlPath = resolve(campaignsDir, d.name, 'index.html');
      if (existsSync(htmlPath)) {
        entries[d.name] = htmlPath;
      }
    });

  return entries;
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        // Página principal (índice de campañas en dev / landing en prod)
        main: resolve(process.cwd(), 'index.html'),
        // Campañas detectadas automáticamente
        ...getCampaignEntries(),
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'src'),
    },
  },
});
