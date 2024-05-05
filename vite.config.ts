import purgeCss from '@mojojoejo/vite-plugin-purgecss';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({ tsconfigPath: './tsconfig.build.json' }),
    purgeCss({
      content: [
        './index.html',
        './src/**/*.{jsx,js,tsx,ts}', // Include all React components
      ],
    }),
  ],
});
