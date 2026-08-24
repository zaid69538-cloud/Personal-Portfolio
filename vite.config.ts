import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    allowedHosts: ['5173-i1wer6n96d43wamiey36a-2121ba89.sg1.manus.computer']
  }
});
