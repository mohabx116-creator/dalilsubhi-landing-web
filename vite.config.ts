import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const allowedPreviewPaths = new Set([
  '/',
  '/favicon.ico',
  '/favicon.png',
  '/manifest.webmanifest',
  '/robots.txt',
  '/sitemap.xml',
])

function isAllowedPreviewRequest(pathname: string) {
  return allowedPreviewPaths.has(pathname) || pathname.startsWith('/assets/')
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'dalil-subhi-preview-404',
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          const pathname = new URL(req.url ?? '/', 'http://localhost').pathname

          if (isAllowedPreviewRequest(pathname)) {
            next()
            return
          }

          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end('Not Found')
        })
      },
    },
  ],
  server: {
    proxy: {
      '/api/v1/public/platform-stats': {
        target: 'https://compound-os-api-replica.onrender.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
