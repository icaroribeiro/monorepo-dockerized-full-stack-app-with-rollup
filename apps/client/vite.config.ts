import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    server: {
      open: true,
      port: parseInt(env.PORT),
    },
    build: {
      outDir: 'dist',
    },
    plugins: [react()],
    test: {
      include: ['src/**/*.test.{ts,tsx}'],
      coverage: {
        reporter: ['lcov', 'text'],
      },
    },
  }
})
