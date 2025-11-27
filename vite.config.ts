import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import {dirname} from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),tailwindcss(),
  ],
  resolve:{
    alias: {
      '#components': path.resolve(__dirname, 'src/components'),
      '#constants': path.resolve(__dirname, 'src/constants'),
      '#store': path.resolve(__dirname, 'src/store'),
      '#hooks': path.resolve(__dirname, 'src/hooks'),
      '#hoc': path.resolve(__dirname, 'src/hoc'),
      '#windows': path.resolve(__dirname, 'src/windows'),
    },
  }
});