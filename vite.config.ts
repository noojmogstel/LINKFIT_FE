import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

console.log(process.env.VITE_API_URL); // 추가하여 VITE_API_URL 값 확인

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      '/api': {
        target: 'http://121.187.37.43:8080',
        changeOrigin: true,
      },
    },
  },
});
