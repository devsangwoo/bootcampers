import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/bootcampers/', // 저장소 이름만 입력
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
