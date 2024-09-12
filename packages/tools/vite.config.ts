import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
	return {
		build: {
			ssr: true,
			target: "node20",
			outDir: "dist",
			emptyOutDir: true,
			rollupOptions: {
				input: {
					eslint: "src/eslint/index.ts",
					vite: "src/vite/index.ts",
				},
			},
		},
	};
});
