import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode,  process.cwd())

  const port = parseInt(`${env.VITE_PORT ?? '3001'}`);
  
  return {
    server: {
      open: true,
      port: port,
    },
    build: {
      outDir: "dist",
    },
    plugins: [react()],
    define: {
      "process.env": {
        DISPLAY: env.VITE_DISPLAY
      },
    }
  }
})
