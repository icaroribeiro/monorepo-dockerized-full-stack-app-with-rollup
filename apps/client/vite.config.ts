import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    server: {
      open: true,
      port: parseInt(env.VITE_PORT),
    },
    build: {
      outDir: 'dist',
    },
    plugins: [react()],
    define: {
      'process.env': {
        DISPLAY: env.VITE_DISPLAY,
      },
    },
    test: {
      include: ['src/**/*.test.{ts,tsx}'],
      coverage: {
        reporter: ['lcov', 'text'],
      },
    },
  }
})
