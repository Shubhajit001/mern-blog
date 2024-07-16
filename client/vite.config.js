import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        // onError: (err, req, res) => {
        //   console.error('Proxy error:', err);
        //   res.writeHead(500, {
        //     'Content-Type': 'text/plain'
        //   });
        //   res.end('Something went wrong with the proxy. Check the server logs.');
        // },
      },
    },
  },
  plugins: [react()],
});




