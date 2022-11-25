import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // origin: 'http://127.0.0.1:8080'
    proxy: {
        // '/v1': 'http://13.125.105.3:50038/'
        '^/v1': {
          target: 'http://13.125.105.3:50038/',
          changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/v1/, ''),
          secure: false,
          ws: true,
          logLevel: "debug"
        }
      }
  }
})
